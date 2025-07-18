import { Request, Response, NextFunction } from "express";
import multer from "multer";
import { FileUploadService } from "../../application/services/FileUploadService";
import { ApiResponse } from "../../shared/utils/response";
import { AppError } from "../../shared/errors/AppError";

// Configuração do Multer para upload em memória
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limite
  },
  fileFilter: (req, file, cb) => {
    // Permitir apenas PDFs e imagens
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "image/bmp",
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new AppError(
          "Invalid file type. Only PDFs and images are allowed.",
          400
        )
      );
    }
  },
});

export class FileUploadController {
  private fileUploadService: FileUploadService;

  constructor() {
    this.fileUploadService = new FileUploadService();
  }

  // ========================================
  // MIDDLEWARE DO MULTER
  // ========================================
  getUploadMiddleware() {
    return upload.single("file"); // Campo 'file' no form-data
  }

  // ========================================
  // UPLOAD DE PDF
  // ========================================
  async uploadPDF(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = req.user;
      if (!user) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      const file = req.file;
      if (!file) {
        res.status(400).json(ApiResponse.error("No file provided", 400));
        return;
      }

      // Validar se é PDF
      if (file.mimetype !== "application/pdf") {
        res
          .status(400)
          .json(ApiResponse.error("Only PDF files are allowed", 400));
        return;
      }

      // Validar tamanho (máximo 20MB para PDFs)
      this.fileUploadService.validateFileSize(file.buffer, 20);

      // Fazer upload
      const result = await this.fileUploadService.uploadPDF(
        file.buffer,
        file.originalname,
        user.id
      );

      res
        .status(201)
        .json(ApiResponse.success(result, "PDF uploaded successfully!"));
    } catch (error) {
      this.handleError(error, res, "PDF upload error");
    }
  }

  // ========================================
  // UPLOAD DE IMAGEM
  // ========================================
  async uploadImage(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = req.user;
      if (!user) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      const file = req.file;
      if (!file) {
        res.status(400).json(ApiResponse.error("No file provided", 400));
        return;
      }

      // Validar se é imagem
      if (!file.mimetype.startsWith("image/")) {
        res
          .status(400)
          .json(ApiResponse.error("Only image files are allowed", 400));
        return;
      }

      // Validar tamanho (máximo 10MB para imagens)
      this.fileUploadService.validateFileSize(file.buffer, 10);

      // Fazer upload
      const result = await this.fileUploadService.uploadImage(
        file.buffer,
        file.originalname,
        file.mimetype,
        user.id
      );

      res
        .status(201)
        .json(ApiResponse.success(result, "Image uploaded successfully!"));
    } catch (error) {
      this.handleError(error, res, "Image upload error");
    }
  }

  // ========================================
  // UPLOAD GERAL (PDF OU IMAGEM)
  // ========================================
  async uploadFile(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = req.user;
      if (!user) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      const file = req.file;
      if (!file) {
        res.status(400).json(ApiResponse.error("No file provided", 400));
        return;
      }

      let result;

      if (file.mimetype === "application/pdf") {
        this.fileUploadService.validateFileSize(file.buffer, 20);

        result = await this.fileUploadService.uploadPDF(
          file.buffer,
          file.originalname,
          user.id
        );
      } else if (file.mimetype.startsWith("image/")) {
        this.fileUploadService.validateFileSize(file.buffer, 10);

        result = await this.fileUploadService.uploadImage(
          file.buffer,
          file.originalname,
          file.mimetype,
          user.id
        );
      } else {
        res
          .status(400)
          .json(
            ApiResponse.error(
              "Invalid file type. Only PDFs and images are allowed.",
              400
            )
          );
        return;
      }

      res
        .status(201)
        .json(ApiResponse.success(result, "File uploaded successfully!"));
    } catch (error) {
      this.handleError(error, res, "File upload error");
    }
  }

  // ✅ NOVO: Debug do MinIO
  async debugMinio(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = req.user;
      if (!user) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      const debugInfo = await this.fileUploadService.debugConnection();

      res.status(200).json(ApiResponse.success(debugInfo, "MinIO debug info"));
    } catch (error) {
      this.handleError(error, res, "MinIO debug error");
    }
  }

  // ========================================
  // OBTER ARQUIVO
  // ========================================
  async getFile(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { bucket } = req.params;
      const fileName = req.params.fileName || (req.query.fileName as string);

      if (!bucket || !fileName) {
        res
          .status(400)
          .json(ApiResponse.error("Bucket and fileName are required", 400));
        return;
      }

      const url = await this.fileUploadService.getFile(bucket, fileName);

      res.status(200).json(ApiResponse.success({ url }, "File URL"));
    } catch (error) {
      this.handleError(error, res, "Get file error");
    }
  }

  // ========================================
  // OBTER METADADOS DO ARQUIVO
  // ========================================
  async getFileMetadata(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { bucket } = req.params;
      const fileName = req.params.fileName || (req.query.fileName as string);

      if (!bucket || !fileName) {
        res
          .status(400)
          .json(ApiResponse.error("Bucket and fileName are required", 400));
        return;
      }

      const metadata = await this.fileUploadService.getFileMetadata(
        bucket,
        fileName
      );

      res.status(200).json(ApiResponse.success(metadata, "File metadata"));
    } catch (error) {
      this.handleError(error, res, "Get file metadata error");
    }
  }

  // ========================================
  // DELETAR ARQUIVO
  // ========================================
  async deleteFile(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { bucket } = req.params;
      const fileName = req.params.fileName || (req.query.fileName as string);

      if (!bucket || !fileName) {
        res
          .status(400)
          .json(ApiResponse.error("Bucket and fileName are required", 400));
        return;
      }

      await this.fileUploadService.deleteFile(bucket, fileName);

      res
        .status(200)
        .json(ApiResponse.success(null, "File deleted successfully!"));
    } catch (error) {
      this.handleError(error, res, "Delete file error");
    }
  }

  // ========================================
  // MÉTODO PRIVADO PARA TRATAMENTO DE ERROS
  // ========================================
  private handleError(error: unknown, res: Response, context: string): void {
    if (error instanceof AppError) {
      res
        .status(error.statusCode)
        .json(ApiResponse.error(error.message, error.statusCode));
      return;
    }

    // Erro do Multer
    if (error instanceof multer.MulterError) {
      if (error.code === "LIMIT_FILE_SIZE") {
        res.status(400).json(ApiResponse.error("File size too large", 400));
        return;
      }
    }

    res.status(500).json(ApiResponse.error("Internal server error", 500));
  }
}
