export interface CreateArticleVersionDto {
  articleId: string;
  version: number;
  pdfPath: string;
}

// src/application/dtos/NewVersionDto.ts

// DTO para criar nova versão do artigo
export interface CreateNewVersionDto {
  pdfPath: string; // Novo caminho do PDF
}

export interface NewVersionResponseDto {
  article: {
    id: string;
    title: string;
    currentVersion: number; // Versão atualizada
    status: string;
    updatedAt: Date;
  };
  newVersion: {
    id: string;
    version: number;
    pdfPath: string;
    createdAt: Date;
  };
}
