/**
 * Captura screenshots dos projetos ao vivo e gera as thumbnails WebP.
 * Uso:
 *   node scripts/capture-screenshots.mjs          # thumbnails dos projetos
 *   node scripts/capture-screenshots.mjs --og URL # public/og.png (1200x630) da URL
 */
import { chromium } from 'playwright'
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const PROJECTS = [
  { id: 'nimbus', url: 'https://nimbuswear.com.br', extraWait: 5000 },
  { id: 'apologetica', url: 'https://movits.github.io/apologetica-app/', extraWait: 2000 },
  { id: 'museu', url: 'https://movits.github.io/museu-virtual/', extraWait: 3000 },
  { id: 'memora', url: 'https://movits.github.io/memora/', extraWait: 1500 },
  { id: 'loja-france', url: 'https://movits.github.io/loja-france/', extraWait: 1500 },
]

const ogMode = process.argv.includes('--og')

const browser = await chromium.launch()

if (ogMode) {
  const url = process.argv[process.argv.indexOf('--og') + 1] ?? 'http://localhost:5173'
  // Captura em 1440x900 (composição do hero desktop) e recorta a faixa
  // central em 1200x630 para o Open Graph.
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(4000)
  const buffer = await page.screenshot()
  await sharp(buffer)
    .extract({ left: 0, top: 82, width: 1440, height: 756 })
    .resize(1200, 630)
    .png({ compressionLevel: 9 })
    .toFile('public/og.png')
  console.log('public/og.png gerado de', url)
} else {
  await mkdir('src/assets/projects', { recursive: true })
  for (const { id, url, extraWait } of PROJECTS) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 })
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
    } catch {
      console.warn(`${id}: networkidle expirou, seguindo com o estado atual`)
    }
    await page.waitForTimeout(extraWait)
    const buffer = await page.screenshot()
    const out = `src/assets/projects/${id}.webp`
    const info = await sharp(buffer)
      .resize(800, 500, { fit: 'cover', position: 'top' })
      .webp({ quality: 80 })
      .toFile(out)
    console.log(`${out} — ${(info.size / 1024).toFixed(1)} KB`)
    await page.close()
  }
}

await browser.close()
