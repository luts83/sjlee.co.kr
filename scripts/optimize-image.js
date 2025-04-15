const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const inputPath =
  "/Users/sangjin/Downloads/codingFiles/portfolio-mern/public/images/arch-pro/02_LG_Event_East_Coast_Radio_Show/09.png";
const outputPath =
  "/Users/sangjin/Downloads/codingFiles/portfolio-mern/public/images/arch-pro/02_LG_Event_East_Coast_Radio_Show/09-optimized.png";

async function optimizeImage() {
  try {
    // 원본 이미지 크기 확인
    const originalStats = fs.statSync(inputPath);
    console.log(
      `Original image size: ${(originalStats.size / 1024 / 1024).toFixed(2)} MB`
    );

    // 이미지 최적화
    await sharp(inputPath)
      .resize(1920, null, {
        // 너비 1920px로 조정, 높이는 비율 유지
        withoutEnlargement: true, // 원본보다 크게 만들지 않음
        fit: "inside", // 비율 유지하면서 크기 조정
      })
      .png({
        quality: 80, // 품질 80%로 설정
        compressionLevel: 9, // 최대 압축
      })
      .toFile(outputPath);

    // 최적화된 이미지 크기 확인
    const optimizedStats = fs.statSync(outputPath);
    console.log(
      `Optimized image size: ${(optimizedStats.size / 1024 / 1024).toFixed(
        2
      )} MB`
    );
    console.log(
      `Reduced by: ${(
        (1 - optimizedStats.size / originalStats.size) *
        100
      ).toFixed(2)}%`
    );

    // 원본 이미지 백업 및 최적화된 이미지로 교체
    fs.renameSync(inputPath, inputPath + ".backup");
    fs.renameSync(outputPath, inputPath);
    console.log("Image optimization completed successfully!");
  } catch (error) {
    console.error("Error optimizing image:", error);
  }
}

optimizeImage();
