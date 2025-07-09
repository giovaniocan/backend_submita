// DTO para criação de evento
export interface CreateEventDto {
  name: string;
  banner?: string;
  description?: string;
  eventStartDate: Date;
  eventEndDate: Date;
  submissionStartDate: Date;
  submissionEndDate: Date;
  evaluationType: "DIRECT" | "PAIR" | "PANEL";
}

// DTO para atualização de evento
export interface UpdateEventDto {
  name?: string;
  banner?: string;
  description?: string;
  eventStartDate?: Date;
  eventEndDate?: Date;
  submissionStartDate?: Date;
  submissionEndDate?: Date;
  status?: "IN_PREPARATION" | "SUBMISSIONS_OPEN" | "IN_EVALUATION" | "FINISHED";
  evaluationType?: "DIRECT" | "PAIR" | "PANEL";
  isActive?: boolean;
}

// DTO para resposta de evento
export interface EventResponseDto {
  id: string;
  name: string;
  banner?: string;
  description?: string;
  eventStartDate: Date;
  eventEndDate: Date;
  submissionStartDate: Date;
  submissionEndDate: Date;
  status: "IN_PREPARATION" | "SUBMISSIONS_OPEN" | "IN_EVALUATION" | "FINISHED";
  evaluationType: "DIRECT" | "PAIR" | "PANEL";
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  _count?: {
    articles: number;
    eventEvaluators: number;
  };
}

// DTO para listagem de eventos com filtros
export interface ListEventsDto {
  page?: number;
  limit?: number;
  search?: string;
  status?: "IN_PREPARATION" | "SUBMISSIONS_OPEN" | "IN_EVALUATION" | "FINISHED";
  isActive?: boolean;
  evaluationType?: "DIRECT" | "PAIR" | "PANEL";
  includeStats?: boolean;
}

// DTO para resposta paginada
export interface PaginatedEventsDto {
  events: EventResponseDto[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface OptionalArgs {
  search?: string;
  status?: string;
  page?: number;
  limit?: number;
}