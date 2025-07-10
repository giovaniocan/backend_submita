import { ArticleStatus } from "@prisma/client";

// DTO para criação de artigo
export interface CreateArticleDto {
  title: string;
  summary: string;
  thematicArea?: string;
  pdfPath: string; // Caminho do PDF que será salvo
  eventId: string; // ID do evento
  userId: string; // ID do autor principal
  keywords: string[]; // Array de palavras-chave
  relatedAuthors: string[]; // Array de nomes dos co-autores
}

// DTO para resposta de artigo (apenas dados principais)
export interface ArticleResponseDto {
  id: string;
  title: string;
  summary: string;
  thematicArea?: string;
  currentVersion: number;
  evaluationsDone: number;
  status: ArticleStatus;
  eventId: string;
  userId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;

  // Relacionamentos criados junto
  keywords: Array<{
    id: string;
    name: string;
  }>;
  relatedAuthors: Array<{
    id: string;
    coAuthorName: string;
  }>;
  versions: Array<{
    id: string;
    version: number;
    pdfPath: string;
    createdAt: Date;
  }>;
}

export interface UpdateArticleDto {
  // Dados principais do artigo (opcionais)
  title?: string;
  summary?: string;
  thematicArea?: string;

  // Arrays relacionados (opcionais)
  keywords?: string[]; // Se fornecido, substitui todas as keywords
  relatedAuthors?: string[]; // Se fornecido, substitui todos os related authors
}

export interface UpdateArticleResponseDto {
  id: string;
  title: string;
  summary: string;
  thematicArea?: string;
  currentVersion: number;
  evaluationsDone: number;
  status: ArticleStatus;
  eventId: string;
  userId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;

  // Relacionamentos atualizados
  keywords: Array<{
    id: string;
    name: string;
  }>;
  relatedAuthors: Array<{
    id: string;
    coAuthorName: string;
  }>;
  lastVersion: {
    id: string;
    version: number;
    pdfPath: string;
    createdAt: Date;
  };
}
