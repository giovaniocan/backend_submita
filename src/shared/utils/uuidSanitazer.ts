// src/shared/utils/uuidSanitizer.ts

export class UuidSanitizer {
  private static readonly UUID_REGEX =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  /**
   * Sanitiza e valida um UUID
   * Remove espaços, quebras de linha e caracteres invisíveis
   * @param uuid - UUID para sanitizar
   * @returns UUID limpo ou null se inválido
   */
  static sanitizeAndValidate(uuid: string | undefined | null): string | null {
    if (!uuid) {
      return null;
    }

    // 1️⃣ SANITIZAR: remover espaços, quebras de linha e caracteres invisíveis
    const cleanUuid = uuid
      .toString()
      .trim()
      .replace(/[\s\n\r\t]/g, "") // Remove espaços, tabs, quebras de linha
      .replace(/[^\w-]/g, "") // Remove caracteres especiais (mantém apenas letras, números e hífen)
      .toLowerCase();

    // 2️⃣ VALIDAR formato UUID
    if (!this.UUID_REGEX.test(cleanUuid)) {
      return null;
    }

    // 3️⃣ RETORNAR UUID LIMPO
    return cleanUuid;
  }

  /**
   * Sanitiza e valida um UUID, lançando erro se inválido
   * @param uuid - UUID para sanitizar
   * @param fieldName - Nome do campo (para mensagem de erro)
   * @returns UUID limpo
   * @throws AppError se inválido
   */
  static sanitizeAndValidateOrThrow(
    uuid: string | undefined | null,
    fieldName: string = "ID"
  ): string {
    const cleanUuid = this.sanitizeAndValidate(uuid);

    if (!cleanUuid) {
      throw new Error(`Invalid ${fieldName} format: '${uuid}'`);
    }

    return cleanUuid;
  }

  /**
   * Sanitiza múltiplos UUIDs de uma vez
   * @param uuids - Array de UUIDs para sanitizar
   * @returns Array com UUIDs limpos (remove os inválidos)
   */
  static sanitizeMultiple(uuids: (string | undefined | null)[]): string[] {
    return uuids
      .map((uuid) => this.sanitizeAndValidate(uuid))
      .filter((uuid): uuid is string => uuid !== null);
  }

  /**
   * Verifica se uma string é um UUID válido (após sanitização)
   * @param uuid - String para verificar
   * @returns true se for UUID válido
   */
  static isValid(uuid: string | undefined | null): boolean {
    return this.sanitizeAndValidate(uuid) !== null;
  }
}

// Importar AppError se necessário
import { AppError } from "../errors/AppError";

// Reexportar para facilitar uso
export const sanitizeUuid = UuidSanitizer.sanitizeAndValidate;
export const sanitizeUuidOrThrow = UuidSanitizer.sanitizeAndValidateOrThrow;
export const isValidUuid = UuidSanitizer.isValid;
