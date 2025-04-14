const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SOURCE_DIR = ".";
const DEST_DIR = "optimized-images";
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function optimizeImage(sourcePath, destPath) {
  try {
    await sharp(sourcePath)
      .resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: "inside",
      })
      .webp({ quality: QUALITY })
      .toFile(destPath);

    console.log(`Optimized: ${sourcePath} -> ${destPath}`);
  } catch (error) {
    console.error(`Error optimizing ${sourcePath}:`, error);
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(dir, entry.name);
    const relativePath = path.relative(SOURCE_DIR, sourcePath);
    const destPath = path
      .join(DEST_DIR, relativePath)
      .replace(/\.(png|jpg|jpeg)$/i, ".webp");

    if (entry.isDirectory()) {
      // Create corresponding directory in destination
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      await processDirectory(sourcePath);
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      // Create destination directory if it doesn't exist
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      await optimizeImage(sourcePath, destPath);
    }
  }
}

// Create destination directory
fs.mkdirSync(DEST_DIR, { recursive: true });

// Start processing
processDirectory(SOURCE_DIR)
  .then(() => console.log("Optimization complete!"))
  .catch((error) => console.error("Error during optimization:", error));
