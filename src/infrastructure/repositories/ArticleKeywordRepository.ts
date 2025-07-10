// src/infrastructure/repositories/ArticleKeywordRepository.ts

import { ArticleKeyword } from "@prisma/client";
import { prisma } from "../../lib/prisma";

export class ArticleKeywordRepository {
  // ========================================
  // CREATE
  // ========================================

  // Criar uma keyword
  async create(articleId: string, name: string): Promise<ArticleKeyword> {
    return await prisma.articleKeyword.create({
      data: {
        articleId,
        name: name.trim(),
      },
    });
  }

  // Criar múltiplas keywords
  async createMultiple(
    articleId: string,
    keywords: string[]
  ): Promise<ArticleKeyword[]> {
    const keywordData = keywords.map((name) => ({
      articleId,
      name: name.trim(),
    }));

    // Usar createMany para inserir múltiplos registros
    await prisma.articleKeyword.createMany({
      data: keywordData,
      skipDuplicates: true, // Evita erro se houver duplicatas
    });

    // Buscar e retornar as keywords criadas
    return await prisma.articleKeyword.findMany({
      where: {
        articleId,
        name: {
          in: keywords.map((k) => k.trim()),
        },
      },
      orderBy: { createdAt: "asc" },
    });
  }

  // ========================================
  // READ
  // ========================================

  // Buscar keywords de um artigo
  async findByArticleId(articleId: string): Promise<ArticleKeyword[]> {
    return await prisma.articleKeyword.findMany({
      where: { articleId },
      orderBy: { name: "asc" },
    });
  }

  // Buscar por ID
  async findById(id: string): Promise<ArticleKeyword | null> {
    return await prisma.articleKeyword.findUnique({
      where: { id },
    });
  }

  // ========================================
  // DELETE
  // ========================================

  // Deletar keyword por ID
  async delete(id: string): Promise<ArticleKeyword> {
    return await prisma.articleKeyword.delete({
      where: { id },
    });
  }

  // Deletar todas as keywords de um artigo
  async deleteByArticleId(articleId: string): Promise<{ count: number }> {
    return await prisma.articleKeyword.deleteMany({
      where: { articleId },
    });
  }

  // ========================================
  // UTILITIES
  // ========================================

  // Contar keywords de um artigo
  async countByArticleId(articleId: string): Promise<number> {
    return await prisma.articleKeyword.count({
      where: { articleId },
    });
  }
}
