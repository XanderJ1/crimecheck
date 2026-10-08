import { readdirSync, readFileSync } from 'node:fs'
const dir = '.output/public/_nuxt'
const css = readdirSync(dir).filter(file => file.endsWith('.css')).map(file => readFileSync(`${dir}/${file}`, 'utf8')).join('\n')
function luminance(token) {
  const value = css.match(new RegExp(`--color-${token}:\\s*oklch\\(([^)]+)\\)`))?.[1]
  if (!value) throw new Error(`Built CSS token not found: ${token}`)
  const parts = value.trim().split(/\s+/)
  const L = parseFloat(parts[0]) / (parts[0].endsWith('%') ? 100 : 1)
  const C = Number(parts[1]), h = Number(parts[2]) * Math.PI / 180
  const a = C * Math.cos(h), b = C * Math.sin(h)
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3
  const rgb = [4.0767416621*l - 3.3077115913*m + 0.2309699292*s, -1.2684380046*l + 2.6097574011*m - 0.3413193965*s, -0.0041960863*l - 0.7034186147*m + 1.707614701*s].map(x => Math.max(0, Math.min(1, x)))
  return rgb[0]*0.2126 + rgb[1]*0.7152 + rgb[2]*0.0722
}
function hexLuminance(hex) {
  const rgb = hex.match(/\w\w/g).map(channel => parseInt(channel, 16) / 255)
    .map(channel => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4)
  return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722
}
const colors = { white: 1 }
for (const name of ['paper', 'ink', 'muted', 'green']) {
  const hex = css.match(new RegExp(`--${name}:\\s*#([a-f0-9]{6})`, 'i'))?.[1]
  if (!hex) throw new Error(`Brand color missing: ${name}`)
  colors[name] = hexLuminance(hex)
}
for (const token of ['green-700', 'blue-600', 'blue-700', 'slate-300', 'slate-900']) colors[token] = luminance(token)
for (const [foreground, background] of [['white', 'green-700'], ['white', 'blue-600'], ['white', 'blue-700'], ['slate-300', 'slate-900'], ['white', 'green'], ['ink', 'paper'], ['muted', 'paper'], ['green', 'paper']]) {
  const ratio = (Math.max(colors[foreground], colors[background]) + 0.05) / (Math.min(colors[foreground], colors[background]) + 0.05)
  console.log(`${foreground} on ${background}: ${ratio.toFixed(2)}:1 (sRGB token calculation)`)
  if (ratio < 4.5) process.exitCode = 1
}
