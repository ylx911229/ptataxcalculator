const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function main() {
  const { join } = await import('node:path');
  const fs = await import('node:fs/promises');

  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch {
    console.log('Sharp not installed. Install it with: npm install sharp');
    process.exitCode = 1;
    return;
  }

  const inputPath = join(__dirname, '../public/logo.png');
  try {
    await fs.access(inputPath);
  } catch {
    console.log(`Input logo not found: ${inputPath}`);
    process.exitCode = 1;
    return;
  }

  for (const { name, size } of sizes) {
    const outputPath = join(__dirname, '../public', name);
    await sharp(inputPath)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 },
      })
      .png()
      .toFile(outputPath);
    console.log(`✓ Generated ${name}`);
  }

  console.log('✓ Generated all favicon files');
  console.log('For favicon.ico, use an online converter or ImageMagick:');
  console.log('convert favicon-16x16.png favicon-32x32.png favicon-48x48.png favicon.ico');
}

void main();
