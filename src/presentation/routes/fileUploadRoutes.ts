import { Router } from "express";
import { FileUploadController } from "../controllers/FileUploadController";
import { authenticate } from "../middlewares/authMiddleware";

const router = Router();
const fileUploadController = new FileUploadController();

// ========================================
// ROTAS DE UPLOAD (AUTENTICADAS)
// ========================================

// Upload geral (detecta automaticamente PDF ou imagem)
router.post(
  "/upload",
  authenticate,
  fileUploadController.getUploadMiddleware(),
  async (req, res, next) => {
    await fileUploadController.uploadFile(req, res, next);
  }
);

// Upload específico de PDF
router.post(
  "/upload/pdf",
  authenticate,
  fileUploadController.getUploadMiddleware(),
  async (req, res, next) => {
    await fileUploadController.uploadPDF(req, res, next);
  }
);

// Upload específico de imagem
router.post(
  "/upload/image",
  authenticate,
  fileUploadController.getUploadMiddleware(),
  async (req, res, next) => {
    await fileUploadController.uploadImage(req, res, next);
  }
);

// ========================================
// ROTAS DE GERENCIAMENTO DE ARQUIVOS
// ========================================

// Obter URL do arquivo via query parameter
router.get("/file/:bucket", authenticate, async (req, res, next) => {
  // Usar query parameter para o fileName
  req.params.fileName = req.query.fileName as string;
  await fileUploadController.getFile(req, res, next);
});

// Obter metadados do arquivo via query parameter
router.get("/metadata/:bucket", authenticate, async (req, res, next) => {
  // Usar query parameter para o fileName
  req.params.fileName = req.query.fileName as string;
  await fileUploadController.getFileMetadata(req, res, next);
});

// Deletar arquivo via query parameter
router.delete("/file/:bucket", authenticate, async (req, res, next) => {
  // Usar query parameter para o fileName
  req.params.fileName = req.query.fileName as string;
  await fileUploadController.deleteFile(req, res, next);
});

export { router as fileUploadRoutes };
