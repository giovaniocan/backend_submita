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
  url?: string;
  bucket: string;
}

export class FileUploadService {
  private minioClient: Client;
  private buckets = {
    pdfs: "submita-pdfs",
    images: "submita-images",
    general: "submita-files",
  }

  // ========================================
  // VALIDAÇÃO DE ARQUIVO
  // ========================================
  validateFileSize(buffer: Buffer, maxSizeMB: number): void {
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (buffer.length > maxSizeBytes) {
      throw new AppError(`File size exceeds ${maxSizeMB}MB limit`, 400);
    }
  };

  constructor() {
    this.minioClient = new Client({
      endPoint: process.env.MINIO_ENDPOINT || "localhost",
      port: parseInt(process.env.MINIO_PORT || "9000"),
      useSSL: process.env.MINIO_USE_SSL === "true",
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
      await this.ensureBucketExists(bucket);

      const stream = require('stream');
      const bufferStream = new stream.PassThrough();
      bufferStream.end(buffer);
      
      const metadata = {
        'Content-Type': 'application/pdf',
        'X-User-Id': userId,
        'X-Upload-Date': new Date().toISOString(),
        'X-Original-Name': Buffer.from(originalName, 'utf8').toString('ascii').replace(/[^\x20-\x7E]/g, '_'),
      };
      
      await this.minioClient.putObject(
        bucket,
        fileName,
        bufferStream,
        buffer.length,
        metadata
      );

      return {
        id: fileId,
        fileName,
        originalName,
        size: buffer.length,
        mimeType: "application/pdf",
        uploadDate: new Date(),
        bucket,
      };
    } catch (error: any) {
      throw new AppError(`Falha no upload do PDF: ${error.message}`, 500);
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
      await this.ensureBucketExists(bucket);

      const stream = require('stream');
      const bufferStream = new stream.PassThrough();
      bufferStream.end(buffer);
      
      const metadata = {
        'Content-Type': mimeType,
        'X-User-Id': userId,
        'X-Upload-Date': new Date().toISOString(),
        'X-Original-Name': Buffer.from(originalName, 'utf8').toString('ascii').replace(/[^\x20-\x7E]/g, '_'),
      };

      await this.minioClient.putObject(
        bucket,
        fileName,
        bufferStream,
        buffer.length,
        metadata
      );

      return {
        id: fileId,
        fileName,
        originalName,
        size: buffer.length,
        mimeType,
        uploadDate: new Date(),
        bucket,
      };
    } catch (error) {
      throw new AppError("Failed to upload image", 500);
    }
  }

  // ========================================
  // OBTER ARQUIVO
  // ========================================
  async getFile(bucket: string, fileName: string): Promise<string> {
    try {
      const url = await this.minioClient.presignedGetObject(
        bucket,
        fileName,
        24 * 60 * 60
      );
      return url;
    } catch (error) {
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
      }
    } catch (error: any) {
      throw new AppError(`Failed to ensure bucket exists: ${bucketName}`, 500);
    }
  }

  private getFileExtension(originalName: string, mimeType: string): string {
    const extensionFromName = originalName.split(".").pop()?.toLowerCase();

    if (extensionFromName) {
      return `.${extensionFromName}`;
    }

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
  // DEBUG CONNECTION
  // ========================================
  async debugConnection() {
    const config = {
      endpoint: process.env.MINIO_ENDPOINT || "localhost",
      port: parseInt(process.env.MINIO_PORT || "9000"),
      useSSL: process.env.MINIO_USE_SSL === "true",
      accessKey: process.env.MINIO_ACCESS_KEY ? "[SET]" : "[NOT SET]",
      secretKey: process.env.MINIO_SECRET_KEY ? "[SET]" : "[NOT SET]",
    };

    try {
      const buckets = await this.minioClient.listBuckets();
      
      return {
        status: "success",
        config,
        bucketsCount: buckets.length,
        buckets: buckets.map(b => ({ name: b.name, creationDate: b.creationDate })),
        expectedBuckets: this.buckets,
        timestamp: new Date().toISOString()
      };
    } catch (error: any) {
      return {
        status: "error",
        config,
        error: {
          message: error.message,
          code: error.code,
          name: error.name
        },
        timestamp: new Date().toISOString()
      };
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
      throw new AppError("Failed to get file metadata", 404);
    }
  }
}
