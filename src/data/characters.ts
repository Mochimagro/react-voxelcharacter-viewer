import type { Character } from "../types/character";

const thumbnailFileNamesByBaseName = new Map(
  __THUMBNAIL_FILE_NAMES__.map((fileName) => [
    fileName.slice(0, fileName.lastIndexOf(".")).toLowerCase(),
    fileName,
  ]),
);

export const characters: Character[] = __MODEL_FILE_NAMES__.map((fileName) => {
  const baseName = fileName.replace(/\.glb$/i, "").toLowerCase();
  const thumbnailFileName = thumbnailFileNamesByBaseName.get(baseName);

  return {
    fileName,
    modelUrl: `${import.meta.env.BASE_URL}assets/models/${encodeURIComponent(fileName)}`,
    thumbnailUrl: thumbnailFileName
      ? `${import.meta.env.BASE_URL}assets/thumbnails/${encodeURIComponent(thumbnailFileName)}`
      : undefined,
  };
});
