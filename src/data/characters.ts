import type { Character } from "../types/character";

export const characters: Character[] = __MODEL_FILE_NAMES__.map((fileName) => ({
  fileName,
  modelUrl: `${import.meta.env.BASE_URL}assets/models/${encodeURIComponent(fileName)}`,
}));
