import react from "@vitejs/plugin-react";
import { readdirSync } from "node:fs";
import { extname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const modelsDirectory = fileURLToPath(
  new URL("./public/assets/models/", import.meta.url),
);
const modelFileNames = readdirSync(modelsDirectory, { withFileTypes: true })
  .filter(
    (entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".glb"),
  )
  .map((entry) => entry.name)
  .sort((first, second) => first.localeCompare(second));
const thumbnailsDirectory = fileURLToPath(
  new URL("./public/assets/thumbnails/", import.meta.url),
);
const thumbnailExtensions = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const thumbnailFileNames = readdirSync(thumbnailsDirectory, {
  withFileTypes: true,
})
  .filter(
    (entry) =>
      entry.isFile() &&
      thumbnailExtensions.has(extname(entry.name).toLowerCase()),
  )
  .map((entry) => entry.name)
  .sort((first, second) => first.localeCompare(second));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-voxelcharacter-viewer/",
  define: {
    __MODEL_FILE_NAMES__: JSON.stringify(modelFileNames),
    __THUMBNAIL_FILE_NAMES__: JSON.stringify(thumbnailFileNames),
  },
});
