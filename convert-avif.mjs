import sharp from 'sharp';
import { existsSync } from 'fs';

const files = [
  { input: 'public/assets/image11.avif', output: 'public/assets/image11.webp' },
  { input: 'public/assets/image12.avif', output: 'public/assets/image12.webp' },
];

for (const { input, output } of files) {
  if (!existsSync(input)) {
    console.log(`Skipping ${input} — file not found`);
    continue;
  }
  await sharp(input).webp({ quality: 88 }).toFile(output);
  console.log(`✅ Converted ${input} → ${output}`);
}
