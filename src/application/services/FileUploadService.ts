import { Client } from "minio";
import { v4 as uuidv4 } from "uuid";
import { AppError } from "../../shared/errors/AppError";

export interface UploadFileResponse {
  id: string;
  fileName: string;
  originalName: string;
  size: number;
  mimeType: string;
  uploadDate: Date;
  url?: string; // URL é opcional, gerada apenas quando solicitada
  bucket: string;
}

export class FileUploadService {
  private minioClient: Client;
  private buckets = {
    pdfs: "submita-pdfs",
    images: "submita-images",
    general: "submita-files",
  };

  constructor() {
    this.minioClient = new Client({
      endPoint: process.env.MINIO_ENDPOINT || "localhost",
      port: parseInt(process.env.MINIO_PORT || "9000"),
      useSSL: process.env.MINIO_USE_SSL === "true" || false,
      accessKey: process.env.MINIO_ACCESS_KEY || "minioadmin",
      secretKey: process.env.MINIO_SECRET_KEY || "minioadmin",
    });
  }

  // ========================================
  // UPLOAD DE PDF
  // ========================================
  async uploadPDF(
    buffer: Buffer,
    originalName: string,
    userId: string
  ): Promise<UploadFileResponse> {
    const fileId = uuidv4();
    const fileName = `${fileId}.pdf`;
    const bucket = this.buckets.pdfs;

    try {
      // Verificar se o bucket existe, senão criar
      await this.ensureBucketExists(bucket);

      // Fazer upload do arquivo
      await this.minioClient.putObject(
        bucket,
        fileName,
        buffer,
        buffer.length,
        {
          "Content-Type": "application/pdf",
          "X-Original-Name": originalName,
          "X-User-Id": userId,
          "X-Upload-Date": new Date().toISOString(),
        }
      );

      return {
        id: fileId,
        fileName,
        originalName,
        size: buffer.length,
        mimeType: "application/pdf",
        uploadDate: new Date(),
        url: "", // Removido: não gerar URL pré-assinada
        bucket,
      };
    } catch (error) {
      console.error("❌ Erro no upload do PDF:", error);
      throw new AppError("Failed to upload PDF", 500);
    }
  }

  // ========================================
  // UPLOAD DE IMAGEM
  // ========================================
  async uploadImage(
    buffer: Buffer,
    originalName: string,
    mimeType: string,
    userId: string
  ): Promise<UploadFileResponse> {
    // Validar tipo de imagem
    const allowedImageTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "image/bmp",
    ];

    if (!allowedImageTypes.includes(mimeType)) {
      throw new AppError(
        "Invalid image type. Allowed: JPEG, PNG, GIF, WebP, BMP",
        400
      );
    }

    const fileId = uuidv4();
    const extension = this.getFileExtension(originalName, mimeType);
    const fileName = `${fileId}${extension}`;
    const bucket = this.buckets.images;

    try {
      // Verificar se o bucket existe, senão criar
      await this.ensureBucketExists(bucket);

      // Fazer upload do arquivo
      await this.minioClient.putObject(
        bucket,
        fileName,
        buffer,
        buffer.length,
        {
          "Content-Type": mimeType,
          "X-Original-Name": originalName,
          "X-User-Id": userId,
          "X-Upload-Date": new Date().toISOString(),
        }
      );

      return {
        id: fileId,
        fileName,
        originalName,
        size: buffer.length,
        mimeType,
        uploadDate: new Date(),
        url: "", // Removido: não gerar URL pré-assinada
        bucket,
      };
    } catch (error) {
      console.error("❌ Erro no upload da imagem:", error);
      throw new AppError("Failed to upload image", 500);
    }
  }

  // ========================================
  // OBTER ARQUIVO
  // ========================================
  async getFile(bucket: string, fileName: string): Promise<string> {
    try {
      // Gerar URL pré-assinada apenas quando solicitada (24 horas)
      const url = await this.minioClient.presignedGetObject(
        bucket,
        fileName,
        24 * 60 * 60 // 24 horas
      );
      return url;
    } catch (error) {
      console.error("❌ Erro ao obter arquivo:", error);
      throw new AppError("File not found", 404);
    }
  }

  // ========================================
  // DELETAR ARQUIVO
  // ========================================
  async deleteFile(bucket: string, fileName: string): Promise<void> {
    try {
      await this.minioClient.removeObject(bucket, fileName);
    } catch (error) {
      console.error("❌ Erro ao deletar arquivo:", error);
      throw new AppError("Failed to delete file", 500);
    }
  }

  // ========================================
  // MÉTODOS PRIVADOS
  // ========================================
  private async ensureBucketExists(bucketName: string): Promise<void> {
    try {
      const exists = await this.minioClient.bucketExists(bucketName);
      if (!exists) {
        await this.minioClient.makeBucket(bucketName);
        console.log(`✅ Bucket '${bucketName}' criado com sucesso`);
      }
    } catch (error) {
      console.error(`❌ Erro ao verificar/criar bucket ${bucketName}:`, error);
      throw new AppError(`Failed to ensure bucket exists: ${bucketName}`, 500);
    }
  }

  private getFileExtension(originalName: string, mimeType: string): string {
    // Tentar extrair extensão do nome original
    const extensionFromName = originalName.split(".").pop()?.toLowerCase();

    if (extensionFromName) {
      return `.${extensionFromName}`;
    }

    // Fallback baseado no MIME type
    const mimeToExtension: { [key: string]: string } = {
      "image/jpeg": ".jpg",
      "image/png": ".png",
      "image/gif": ".gif",
      "image/webp": ".webp",
      "image/bmp": ".bmp",
      "application/pdf": ".pdf",
    };

    return mimeToExtension[mimeType] || "";
  }

  // ========================================
  // VALIDAÇÃO DE ARQUIVO
  // ========================================
  validateFileSize(buffer: Buffer, maxSizeMB: number): void {
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (buffer.length > maxSizeBytes) {
      throw new AppError(`File size exceeds ${maxSizeMB}MB limit`, 400);
    }
  }

  // ========================================
  // OBTER METADADOS DO ARQUIVO
  // ========================================
  async getFileMetadata(bucket: string, fileName: string) {
    try {
      const metadata = await this.minioClient.statObject(bucket, fileName);
      return {
        size: metadata.size,
        lastModified: metadata.lastModified,
        etag: metadata.etag,
        contentType: metadata.metaData["content-type"],
        originalName: metadata.metaData["x-original-name"],
        userId: metadata.metaData["x-user-id"],
        uploadDate: metadata.metaData["x-upload-date"],
      };
    } catch (error) {
      console.error("❌ Erro ao obter metadados:", error);
      throw new AppError("Failed to get file metadata", 404);
    }
  }
}
