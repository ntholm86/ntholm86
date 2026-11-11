import { mkdir, writeFile } from 'node:fs/promises'

const projects = [
  ['principles-of-earned-autonomy', '01 / GOVERNANCE FRAMEWORK', ['Principles of', 'Earned Autonomy'], 'Human direction. Observable work. Independent challenge.', '#214bd6'],
  ['pea-skills-suite', '02 / EXPERIMENTAL AGENT SKILLS', ['PEA Skills Suite'], 'Interpret intent. Improve. Verify. Retain the decision record.', '#008b83'],
  ['agent-context-memory', '03 / MEMORY SPECIFICATION', ['Agent Context', 'Memory'], 'Persistent context. Human authority.', '#7655b5'],
  ['llm-harness-proxy', '04 / EVIDENCE INFRASTRUCTURE', ['LLM Harness Proxy'], 'Capture the interaction outside the audited agent.', '#214bd6'],
  ['ai-steward', '05 / CODE IMPROVEMENT', ['AI Steward'], 'An improvement loop with inspectable evidence.', '#008b83'],
  ['vectorium-engine', '06 / TYPESCRIPT + WEBGL', ['Vectorium Engine'], 'Data-oriented rendering for interactive worlds.', '#7655b5'],
]

const output = new URL('../assets/previews/', import.meta.url)
await mkdir(output, { recursive: true })
for (const [slug, category, lines, purpose, accent] of projects) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="640" viewBox="0 0 1280 640">
<rect width="1280" height="640" fill="#f3f6fa"/>
<path d="M1056 0h224v640h-224z" fill="#e1e9fc"/>
<circle cx="1168" cy="320" r="86" fill="none" stroke="${accent}" stroke-width="2"/>
<circle cx="1168" cy="234" r="12" fill="${accent}"/>
<circle cx="1168" cy="320" r="22" fill="${accent}"/>
<path d="M64 60h32" stroke="${accent}" stroke-width="5"/>
<g font-family="Arial, Helvetica, sans-serif">
<text x="112" y="66" fill="#354a5b" font-size="17" font-weight="700">NILS WENDELBOE HOLMAGER</text>
<text x="64" y="160" fill="${accent}" font-size="18" font-weight="700" letter-spacing="2">${category}</text>
${lines.map((line, i) => `<text x="60" y="${lines.length === 1 ? 300 : 270 + i * 82}" fill="#172633" font-size="72" font-weight="700" letter-spacing="-2">${line}</text>`).join('\n')}
<text x="64" y="448" fill="#354a5b" font-size="27">${purpose}</text>
<path d="M64 524h928" stroke="#ced8e5"/>
<text x="64" y="574" fill="${accent}" font-size="19">NILSHOLMAGER.COM</text>
<text x="992" y="574" text-anchor="end" fill="#354a5b" font-size="16">OPEN RESEARCH + ENGINEERING</text>
</g></svg>`
  await writeFile(new URL(`${slug}.svg`, output), svg)
}
console.log(`Generated ${projects.length} social-preview SVG sources (1280x640).`)
