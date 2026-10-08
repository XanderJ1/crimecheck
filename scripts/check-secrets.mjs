import { execFileSync } from 'node:child_process'
import { readFileSync, existsSync } from 'node:fs'
const files = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' }).split('\0').filter(Boolean)
const findings = []
for (const file of files) {
  if (/(^|\/)\.env(?:\..*)?$/.test(file) && !file.endsWith('.env.example')) findings.push(`${file}: environment file is tracked`)
  if (!existsSync(file) || !/\.(?:ts|js|mjs|json|vue|md|yml|yaml|example)$/.test(file)) continue
  const text = readFileSync(file, 'utf8')
  if (/\bsk_(?:live|test)_[a-zA-Z0-9]{20,}\b/.test(text) || /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(text)) findings.push(`${file}: credential pattern found`)
}
if (findings.length) { console.error(findings.join('\n')); process.exitCode = 1 }
else console.log('Tracked-file secret checks passed (not a full history scan).')
