export interface CreateChecklistDto {
  name: string;
  description?: string;
}

// DTO para resposta de checklist
export interface ChecklistResponseDto {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  _count?: {
    questions: number;
    events: number;
  };
}

// DTO para resposta de checklist COM perguntas
export interface ChecklistWithQuestionsDto {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  questions: QuestionInChecklistDto[];
  _count?: {
    questions: number;
    events: number;
  };
}

// DTO para pergunta dentro do checklist
export interface QuestionInChecklistDto {
  id: string;
  description: string;
  type: "YES_NO" | "SCALE" | "TEXT";
  isRequired: boolean;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
