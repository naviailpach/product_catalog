import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const productsDir = path.resolve("public/images/products");

async function getPngFiles(directory) {
    const entries = await fs.readdir(directory, {
        withFileTypes: true,
    });

    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            const nestedFiles = await getPngFiles(fullPath);

            files.push(...nestedFiles);
        }

        if (entry.isFile() && entry.name.toLowerCase().endsWith(".png")) {
            files.push(fullPath);
        }
    }

    return files;
}

const pngFiles = await getPngFiles(productsDir);

for (const pngFile of pngFiles) {
    const webpFile = pngFile.replace(/\.png$/i, ".webp");

    await sharp(pngFile).webp({ quality: 80 }).toFile(webpFile);

    console.log(`Converted: ${pngFile}`);
}
