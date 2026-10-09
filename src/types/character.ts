declare global {
  const __MODEL_FILE_NAMES__: string[];
}

export type Character = {
  fileName: string;
  modelUrl: string;
};
