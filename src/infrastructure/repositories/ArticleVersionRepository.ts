// src/infrastructure/repositories/ArticleVersionRepository.ts

import { CreateArticleVersionDto } from "../../application/dtos/ArticleVersionDto";
import { ArticleVersion } from "@prisma/client";
import { prisma } from "../../lib/prisma";

export class ArticleVersionRepository {
  // ========================================
  // CREATE
  // ========================================
  async create(versionData: CreateArticleVersionDto): Promise<ArticleVersion> {
    return await prisma.articleVersion.create({
      data: versionData,
    });
  }

  // ========================================
  // READ
  // ========================================

  // Buscar por ID
  async findById(id: string): Promise<ArticleVersion | null> {
    return await prisma.articleVersion.findUnique({
      where: { id },
    });
  }

  // Buscar versões de um artigo
  async findByArticleId(articleId: string): Promise<ArticleVersion[]> {
    return await prisma.articleVersion.findMany({
      where: { articleId },
      orderBy: { version: "desc" }, // Versão mais recente primeiro
    });
  }

  // Buscar versão específica de um artigo
  async findByArticleAndVersion(
    articleId: string,
    version: number
  ): Promise<ArticleVersion | null> {
    return await prisma.articleVersion.findUnique({
      where: {
        articleId_version: {
          articleId,
          version,
        },
      },
    });
  }

  // Buscar última versão de um artigo
  async findLatestByArticleId(
    articleId: string
  ): Promise<ArticleVersion | null> {
    return await prisma.articleVersion.findFirst({
      where: { articleId },
      orderBy: { version: "desc" },
    });
  }

  // ========================================
  // UPDATE
  // ========================================
  async update(
    id: string,
    data: Partial<CreateArticleVersionDto>
  ): Promise<ArticleVersion> {
    return await prisma.articleVersion.update({
      where: { id },
      data,
    });
  }

  // ========================================
  // DELETE
  // ========================================
  async delete(id: string): Promise<ArticleVersion> {
    return await prisma.articleVersion.delete({
      where: { id },
    });
  }

  // Deletar todas as versões de um artigo
  async deleteByArticleId(articleId: string): Promise<{ count: number }> {
    return await prisma.articleVersion.deleteMany({
      where: { articleId },
    });
  }

  // ========================================
  // UTILITIES
  // ========================================

  // Contar versões de um artigo
  async countByArticleId(articleId: string): Promise<number> {
    return await prisma.articleVersion.count({
      where: { articleId },
    });
  }

  // Obter próximo número de versão
  async getNextVersionNumber(articleId: string): Promise<number> {
    const latestVersion = await this.findLatestByArticleId(articleId);
    return latestVersion ? latestVersion.version + 1 : 1;
  }

  // Verificar se versão existe
  async versionExists(articleId: string, version: number): Promise<boolean> {
    const existing = await this.findByArticleAndVersion(articleId, version);
    return !!existing;
  }
}
