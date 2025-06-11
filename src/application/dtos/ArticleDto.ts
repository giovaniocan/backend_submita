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
  status:
    | "SUBMITTED"
    | "IN_EVALUATION"
    | "APPROVED"
    | "APPROVED_WITH_REMARKS"
    | "REJECTED";
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
