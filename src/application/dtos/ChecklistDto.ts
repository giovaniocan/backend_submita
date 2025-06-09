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
