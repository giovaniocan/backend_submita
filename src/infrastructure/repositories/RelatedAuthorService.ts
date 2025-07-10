// src/infrastructure/repositories/RelatedAuthorRepository.ts

import { RelatedAuthor } from "@prisma/client";
import { prisma } from "../../lib/prisma";

export class RelatedAuthorRepository {
  // ========================================
  // CREATE
  // ========================================

  // Criar um autor relacionado
  async create(
    articleId: string,
    coAuthorName: string
  ): Promise<RelatedAuthor> {
    return await prisma.relatedAuthor.create({
      data: {
        articleId,
        coAuthorName: coAuthorName.trim(),
      },
    });
  }

  // Criar múltiplos autores relacionados
  async createMultiple(
    articleId: string,
    relatedAuthors: string[]
  ): Promise<RelatedAuthor[]> {
    const authorData = relatedAuthors.map((coAuthorName) => ({
      articleId,
      coAuthorName: coAuthorName.trim(),
    }));

    // Usar createMany para inserir múltiplos registros
    await prisma.relatedAuthor.createMany({
      data: authorData,
      skipDuplicates: true, // Evita erro se houver duplicatas
    });

    // Buscar e retornar os autores criados
    return await prisma.relatedAuthor.findMany({
      where: {
        articleId,
        coAuthorName: {
          in: relatedAuthors.map((name) => name.trim()),
        },
      },
      orderBy: { createdAt: "asc" },
    });
  }

  // ========================================
  // READ
  // ========================================

  // Buscar autores relacionados de um artigo
  async findByArticleId(articleId: string): Promise<RelatedAuthor[]> {
    return await prisma.relatedAuthor.findMany({
      where: { articleId },
      orderBy: { coAuthorName: "asc" },
    });
  }

  // Buscar por ID
  async findById(id: string): Promise<RelatedAuthor | null> {
    return await prisma.relatedAuthor.findUnique({
      where: { id },
    });
  }

  // ========================================
  // UPDATE
  // ========================================
  async update(id: string, coAuthorName: string): Promise<RelatedAuthor> {
    return await prisma.relatedAuthor.update({
      where: { id },
      data: { coAuthorName: coAuthorName.trim() },
    });
  }

  // ========================================
  // DELETE
  // ========================================

  // Deletar autor relacionado por ID
  async delete(id: string): Promise<RelatedAuthor> {
    return await prisma.relatedAuthor.delete({
      where: { id },
    });
  }

  // Deletar todos os autores relacionados de um artigo
  async deleteByArticleId(articleId: string): Promise<{ count: number }> {
    return await prisma.relatedAuthor.deleteMany({
      where: { articleId },
    });
  }

  async deleteRelatedAllAuthor(articleId: string): Promise<void> {
    await prisma.relatedAuthor.deleteMany({
      where: { articleId },
    });
  }

  // ========================================
  // UTILITIES
  // ========================================

  // Contar autores relacionados de um artigo
  async countByArticleId(articleId: string): Promise<number> {
    return await prisma.relatedAuthor.count({
      where: { articleId },
    });
  }
}
