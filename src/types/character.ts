declare global {
  const __MODEL_FILE_NAMES__: string[];
  const __THUMBNAIL_FILE_NAMES__: string[];
}

export type Character = {
  fileName: string;
  modelUrl: string;
  thumbnailUrl?: string;
};
