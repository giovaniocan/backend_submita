// src/application/services/RelatedAuthorService.ts

import { RelatedAuthorRepository } from "../../infrastructure/repositories/RelatedAuthorService";
import { AppError } from "../../shared/errors/AppError";
import { RelatedAuthor } from "@prisma/client";

export class RelatedAuthorService {
  private relatedAuthorRepository: RelatedAuthorRepository;

  constructor() {
    this.relatedAuthorRepository = new RelatedAuthorRepository();
  }

  // ========================================
  // CREATE MULTIPLE
  async createMultipleRelatedAuthors(
    articleId: string,
    relatedAuthors: string[]
  ): Promise<RelatedAuthor[]> {
    // Validações
    if (!this.isValidUUID(articleId)) {
      throw new AppError("Invalid article ID format", 400);
    }

    if (!relatedAuthors || relatedAuthors.length === 0) {
      throw new AppError("Related authors array cannot be empty", 400);
    }

    // Filtrar autores vazios e duplicados
    const cleanAuthors = [
      ...new Set(
        relatedAuthors
          .map((author) => author.trim())
          .filter((author) => author.length > 0)
      ),
    ];

    if (cleanAuthors.length === 0) {
      throw new AppError("No valid related authors provided", 400);
    }

    try {
      const createdAuthors = await this.relatedAuthorRepository.createMultiple(
        articleId,
        cleanAuthors
      );

      return createdAuthors;
    } catch (error) {
      throw new AppError("Failed to create related authors", 500);
    }
  }

  async updateRelatedAuthor(
    articleId: string,
    relatedAuthors: string[]
  ): Promise<void> {
    await this.relatedAuthorRepository.deleteRelatedAllAuthor(articleId);
    await this.relatedAuthorRepository.createMultiple(
      articleId,
      relatedAuthors
    );
  }

  async getRelatedAuthorsByArticleId(
    articleId: string
  ): Promise<RelatedAuthor[]> {
    return await this.relatedAuthorRepository.findByArticleId(articleId);
  }

  async deleteRelatedAllAuthor(articleId: string): Promise<void> {
    await this.relatedAuthorRepository.deleteRelatedAllAuthor(articleId);
  }

  // ========================================
  // MÉTODOS PRIVADOS
  // ========================================
  private isValidUUID(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }
}
