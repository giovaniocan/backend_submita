// src/application/services/StatsService.ts

import {
  CoordinatorStats,
  StudentStats,
  EvaluatorStats,
  StudentRecentSubmission,
  EvaluatorRecentEvaluation,
} from "../dtos/StatsDto";
import { StatsRepository } from "../../infrastructure/repositories/StatsRepository";
import { AppError } from "../../shared/errors/AppError";

export class StatsService {
  private statsRepository: StatsRepository;

  constructor() {
    this.statsRepository = new StatsRepository();
  }

  // ========================================
  // COORDINATOR STATS
  // ========================================
  async getCoordinatorStats(): Promise<CoordinatorStats> {
    try {
      // Buscar todos os dados em paralelo para melhor performance
      const [
        totalSubmissions,
        totalEvents,
        totalEvaluators,
        totalStudents,
        bioParkStudents,
        submissionsByStatus,
        submissionsByEvent,
        evaluationProgress,
      ] = await Promise.all([
        this.statsRepository.getTotalSubmissions(),
        this.statsRepository.getTotalEvents(),
        this.statsRepository.getTotalEvaluators(),
        this.statsRepository.getTotalStudents(),
        this.statsRepository.getBioParkStudents(),
        this.statsRepository.getSubmissionsByStatus(),
        this.statsRepository.getSubmissionsByEvent(),
        this.statsRepository.getEvaluationProgress(),
      ]);

      const coordinatorStats: CoordinatorStats = {
        totalSubmissions,
        totalEvents,
        totalEvaluators,
        totalStudents,
        bioParkStudents,
        submissionsByStatus,
        submissionsByEvent,
        evaluationProgress,
      };

      return coordinatorStats;
    } catch (error) {
      throw new AppError("Failed to retrieve coordinator statistics", 500);
    }
  }

  // ========================================
  // STUDENT STATS
  // ========================================
  async getStudentStats(userId: string): Promise<StudentStats> {
    try {
      // Validar se o userId foi fornecido
      if (!userId) {
        throw new AppError("User ID is required", 400);
      }

      // Buscar todos os dados em paralelo para melhor performance
      const [
        totalSubmissions,
        approvedArticles,
        rejectedArticles,
        pendingArticles,
        articlesWithCorrections,
        recentSubmissions,
      ] = await Promise.all([
        this.statsRepository.getStudentTotalSubmissions(userId),
        this.statsRepository.getStudentApprovedArticles(userId),
        this.statsRepository.getStudentRejectedArticles(userId),
        this.statsRepository.getStudentPendingArticles(userId),
        this.statsRepository.getStudentArticlesWithCorrections(userId),
        this.statsRepository.getStudentRecentSubmissions(userId),
      ]);

      const studentStats: StudentStats = {
        totalSubmissions,
        approvedArticles,
        rejectedArticles,
        pendingArticles,
        articlesWithCorrections,
        recentSubmissions,
      };

      return studentStats;
    } catch (error) {
      // Se o erro já é um AppError, re-throw
      if (error instanceof AppError) {
        throw error;
      }

      throw new AppError("Failed to retrieve student statistics", 500);
    }
  }

  // ========================================
  // EVALUATOR STATS
  // ========================================
  async getEvaluatorStats(userId: string): Promise<EvaluatorStats> {
    try {
      // Validar se o userId foi fornecido
      if (!userId) {
        throw new AppError("User ID is required", 400);
      }

      // Buscar todos os dados em paralelo para melhor performance
      const [
        totalEvaluations,
        completedEvaluations,
        pendingEvaluations,
        averageGrade,
        recentEvaluations,
        evaluationsByMonth,
      ] = await Promise.all([
        this.statsRepository.getEvaluatorTotalEvaluations(userId),
        this.statsRepository.getEvaluatorCompletedEvaluations(userId),
        this.statsRepository.getEvaluatorPendingEvaluations(userId),
        this.statsRepository.getEvaluatorAverageGrade(userId),
        this.statsRepository.getEvaluatorRecentEvaluations(userId),
        this.statsRepository.getEvaluatorEvaluationsByMonth(userId),
      ]);

      const evaluatorStats: EvaluatorStats = {
        totalEvaluations,
        completedEvaluations,
        pendingEvaluations,
        averageGrade: Math.round(averageGrade * 100) / 100, // Arredondar para 2 casas decimais
        recentEvaluations,
        evaluationsByMonth,
      };

      return evaluatorStats;
    } catch (error) {
      // Se o erro já é um AppError, re-throw
      if (error instanceof AppError) {
        throw error;
      }

      throw new AppError("Failed to retrieve evaluator statistics", 500);
    }
  }

  // ========================================
  // CLEANUP
  // ========================================
  async disconnect(): Promise<void> {
    await this.statsRepository.disconnect();
  }
}
