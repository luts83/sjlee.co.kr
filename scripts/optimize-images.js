const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

// 이미지 파일 확장자
const imageExtensions = [".png", ".jpg", ".jpeg", ".webp"];

// 디렉토리에서 이미지 파일 찾기
function findImageFiles(dir) {
  let imageFiles = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // 디렉토리인 경우 재귀적으로 탐색
      imageFiles = imageFiles.concat(findImageFiles(filePath));
    } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
      // 이미지 파일인 경우
      imageFiles.push(filePath);
    }
  }

  return imageFiles;
}

// 이미지 최적화
async function optimizeImage(inputPath) {
  try {
    const outputPath = inputPath + ".optimized";
    const originalStats = fs.statSync(inputPath);
    const originalSize = originalStats.size / 1024 / 1024; // MB 단위

    // 이미지 최적화
    await sharp(inputPath)
      .resize(1920, null, {
        withoutEnlargement: true,
        fit: "inside",
      })
      .png({
        quality: 80,
        compressionLevel: 9,
      })
      .toFile(outputPath);

    const optimizedStats = fs.statSync(outputPath);
    const optimizedSize = optimizedStats.size / 1024 / 1024; // MB 단위
    const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(2);

    // 최적화된 이미지가 원본보다 작은 경우에만 교체
    if (optimizedSize < originalSize) {
      // 원본 백업
      fs.renameSync(inputPath, inputPath + ".backup");
      // 최적화된 이미지로 교체
      fs.renameSync(outputPath, inputPath);
      console.log(`Optimized: ${path.basename(inputPath)}`);
      console.log(`  Original: ${originalSize.toFixed(2)} MB`);
      console.log(`  Optimized: ${optimizedSize.toFixed(2)} MB`);
      console.log(`  Reduced by: ${reduction}%`);
      console.log("---");
    } else {
      // 최적화된 이미지가 더 큰 경우 삭제
      fs.unlinkSync(outputPath);
      console.log(
        `Skipped: ${path.basename(
          inputPath
        )} (optimization would increase size)`
      );
      console.log("---");
    }
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

// 메인 함수
async function main() {
  const imagesDir = path.join(__dirname, "..", "public", "images");
  const imageFiles = findImageFiles(imagesDir);

  console.log(`Found ${imageFiles.length} image files to optimize`);
  console.log("---");

  for (const imageFile of imageFiles) {
    await optimizeImage(imageFile);
  }

  console.log("Optimization completed!");
}

main();
