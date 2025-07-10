// src/application/dtos/StatsDto.ts

import { ArticleStatus, EvaluationStatus } from "@prisma/client";

// DTO para estatísticas do coordinator
export interface CoordinatorStats {
  totalSubmissions: number;
  totalEvents: number;
  totalEvaluators: number;
  totalStudents: number;
  bioParkStudents: number;
  submissionsByStatus: {
    status: ArticleStatus;
    count: number;
  }[];
  submissionsByEvent: {
    eventId: string;
    eventTitle: string;
    count: number;
  }[];
  evaluationProgress: {
    completed: number;
    pending: number;
    inProgress: number;
  };
}

// DTO para estatísticas do student
export interface StudentStats {
  totalSubmissions: number;
  approvedArticles: number;
  rejectedArticles: number;
  pendingArticles: number;
  articlesWithCorrections: number;
  recentSubmissions: StudentRecentSubmission[];
}

// Tipo para as submissões recentes do student
export interface StudentRecentSubmission {
  id: string;
  title: string;
  summary: string;
  thematicArea: string | null;
  currentVersion: number;
  evaluationsDone: number;
  status: ArticleStatus;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  event: {
    id: string;
    name: string;
  };
  versions: StudentArticleVersion[];
  _count: {
    evaluatorAssignments: number;
  };
}

export interface StudentArticleVersion {
  id: string;
  version: number;
  pdfPath: string;
  createdAt: Date;
}

// DTO para estatísticas do evaluator
export interface EvaluatorStats {
  totalEvaluations: number;
  completedEvaluations: number;
  pendingEvaluations: number;
  averageGrade: number;
  recentEvaluations: EvaluatorRecentEvaluation[];
  evaluationsByMonth: {
    month: string;
    count: number;
  }[];
}

export interface EvaluatorRecentEvaluation {
  id: string;
  grade: number;
  evaluationDescription: string | null;
  evaluationDate: Date;
  status: EvaluationStatus;
  createdAt: Date;
  updatedAt: Date;
  articleVersion: {
    id: string;
    version: number;
    pdfPath: string;
    createdAt: Date;
    updatedAt: Date;
    article: {
      id: string;
      title: string;
      summary: string;
      thematicArea: string | null;
      currentVersion: number;
      evaluationsDone: number;
      status: ArticleStatus;
      isActive: boolean;
      createdAt: Date;
      updatedAt: Date;
      event: {
        id: string;
        name: string;
      };
      user: {
        id: string;
        name: string;
        email: string;
      };
    };
  };
}

// DTO para resposta das estatísticas
export interface StatsResponseDto {
  data: CoordinatorStats | StudentStats | EvaluatorStats;
  message: string;
}
