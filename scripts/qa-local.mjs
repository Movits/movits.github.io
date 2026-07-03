/* QA local do portfólio: screenshots, console, toggle EN, reduced-motion. */
import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'

const BASE = 'http://localhost:5173'
const OUT = process.argv[2] ?? 'qa-shots'
await mkdir(OUT, { recursive: true })

const SECTIONS = ['hero', 'about', 'experience', 'projects', 'more-projects', 'skills', 'contact']
const browser = await chromium.launch()
const errors = []

// --- Desktop 1440x900 ---
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(`[desktop] ${msg.text()}`)
})
page.on('pageerror', (err) => errors.push(`[desktop pageerror] ${err.message}`))
await page.goto(BASE, { waitUntil: 'networkidle' })
await page.waitForTimeout(3000)

for (const id of SECTIONS) {
  await page.evaluate((sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, id)
  await page.waitForTimeout(1200)
  await page.screenshot({ path: `${OUT}/desktop-${id}.png` })
}

// Canvas 3D presente?
const canvasCount = await page.locator('.scene-canvas canvas').count()
console.log(`canvas 3D (desktop): ${canvasCount}`)

// --- Toggle EN + persistência ---
await page.evaluate(() => document.getElementById('hero')?.scrollIntoView({ behavior: 'instant' }))
await page.getByRole('button', { name: 'EN' }).click()
await page.waitForTimeout(600)
const htmlLang = await page.evaluate(() => document.documentElement.lang)
const heroGreeting = await page.locator('.hero-greeting').textContent()
console.log(`após toggle EN: <html lang="${htmlLang}">, greeting="${heroGreeting}"`)
await page.screenshot({ path: `${OUT}/desktop-hero-en.png` })
await page.reload({ waitUntil: 'networkidle' })
await page.waitForTimeout(1500)
const langAfterReload = await page.evaluate(() => document.documentElement.lang)
const titleAfterReload = await page.title()
console.log(`após reload: lang="${langAfterReload}", title="${titleAfterReload}"`)
await page.close()

// --- Mobile 390x844 (PT) ---
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true })
mobile.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(`[mobile] ${msg.text()}`)
})
mobile.on('pageerror', (err) => errors.push(`[mobile pageerror] ${err.message}`))
await mobile.goto(BASE, { waitUntil: 'networkidle' })
await mobile.evaluate(() => localStorage.setItem('lang', 'pt'))
await mobile.reload({ waitUntil: 'networkidle' })
await mobile.waitForTimeout(2500)
await mobile.screenshot({ path: `${OUT}/mobile-hero.png` })
await mobile.evaluate(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'instant' }))
await mobile.waitForTimeout(1200)
await mobile.screenshot({ path: `${OUT}/mobile-projects.png` })
await mobile.close()

// --- Reduced motion: canvas não deve montar ---
const rm = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })
await rm.goto(BASE, { waitUntil: 'networkidle' })
await rm.waitForTimeout(2000)
const rmCanvas = await rm.locator('.scene-canvas canvas').count()
console.log(`canvas 3D (reduced-motion): ${rmCanvas} (esperado: 0)`)
await rm.screenshot({ path: `${OUT}/desktop-hero-reduced-motion.png` })
await rm.close()

await browser.close()

console.log(errors.length ? `ERROS DE CONSOLE (${errors.length}):\n${errors.join('\n')}` : 'zero erros de console')
