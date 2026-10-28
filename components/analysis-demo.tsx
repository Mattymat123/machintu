import { Fragment, type CSSProperties } from "react"

const sampleText =
  "Napoleon bliver ofte fremstillet som lederen, der skabte orden i Frankrig efter revolutionen. Det billede rummer noget rigtigt, men fortæller ikke hele historien. Som førstekonsul samlede han magten, og i 1804 blev han kejser. Hans lovbog gjorde reglerne mere ensartede og styrkede principper om lighed for loven og ejendomsret. Samtidig fik kvinder færre rettigheder, og politisk opposition blev begrænset.\n\nNapoleons styre var derfor præget af både reformer og kontrol. Krigene spredte franske idéer i Europa, men kostede også mange mennesker livet og førte til fransk dominans over andre folk. Efter nederlaget ved Waterloo i 1815 var imperiet slut, men flere af reformerne bestod. Napoleon bør derfor hverken vurderes som frihedens forsvarer eller som ren erobrer. Hans betydning ligger i, at modernisering og autoritær magt voksede frem side om side."
const sampleCharacters = Array.from(sampleText)
const highlightedWords = new Set([
  "orden",
  "magten",
  "lighed",
  "kvinder",
  "kontrol",
  "krigene",
  "frihedens",
  "modernisering",
  "autoritær",
])
const characterInterval = 3
const highlightInterval = 480
const underlineDuration = 850
const algorithmDuration = 180

const essaySegments: Array<{ text: string; highlighted: boolean }> = []
let segmentStart = 0
const wordPattern = /\p{L}+/gu

for (const word of sampleText.matchAll(wordPattern)) {
  if (!highlightedWords.has(word[0].toLocaleLowerCase("da"))) continue

  const wordStart = word.index ?? segmentStart
  essaySegments.push({
    text: sampleText.slice(segmentStart, wordStart),
    highlighted: false,
  })
  essaySegments.push({ text: word[0], highlighted: true })
  segmentStart = wordStart + word[0].length
}

essaySegments.push({ text: sampleText.slice(segmentStart), highlighted: false })

const probability = 68

export function AnalysisDemo() {
  const typingDuration = sampleCharacters.length * characterInterval
  const algorithmDelay =
    typingDuration +
    (highlightedWords.size - 1) * highlightInterval +
    underlineDuration
  const resultDelay = algorithmDelay + algorithmDuration
  const demoStyle: CSSProperties & {
    "--typing-duration": string
    "--algorithm-delay": string
    "--result-delay": string
    "--probability": number
  } = {
    "--typing-duration": `${typingDuration}ms`,
    "--algorithm-delay": `${algorithmDelay}ms`,
    "--result-delay": `${resultDelay}ms`,
    "--probability": probability / 100,
  }

  let characterIndex = 0
  let highlightedWordIndex = 0
  const renderedEssay = essaySegments.map((segment, segmentIndex) => {
    const currentWordIndex = segment.highlighted ? highlightedWordIndex++ : -1
    const characters = Array.from(segment.text).map((character) => {
      const delay = characterIndex++ * characterInterval
      return (
        <span
          key={delay}
          aria-hidden="true"
          style={{ animationDelay: `${delay}ms` }}
        >
          {character}
        </span>
      )
    })

    if (!segment.highlighted) {
      return <Fragment key={segmentIndex}>{characters}</Fragment>
    }

    return (
      <mark
        className="analysis-highlight"
        key={segmentIndex}
        style={{
          animationDelay: `${typingDuration + currentWordIndex * highlightInterval}ms`,
        }}
      >
        {characters}
      </mark>
    )
  })

  return (
    <div className="analysis-demo" style={demoStyle}>
      <article className="analysis-document" aria-labelledby="analysis-document-title">
        <div className="analysis-document-meta">
          <span>Essay · Dansk · 2.g</span>
          <span className="analysis-provider-logo" aria-label="Genereret med OpenAI">
            <span aria-hidden="true">OpenAI</span>
          </span>
        </div>
        <h2 id="analysis-document-title">Napoleon: reformator eller magthaver?</h2>
        <p className="analysis-writing" aria-label={sampleText}>
          {renderedEssay}
        </p>
      </article>

      <section className="analysis-result" aria-labelledby="analysis-result-title">
        <div className="analysis-result-heading">
          <h3 id="analysis-result-title">Sandsynlighed for AI-genereret tekst</h3>
          <span>Illustrativt</span>
        </div>
        <p className="analysis-processing">
          <span className="analysis-process-indicator" aria-hidden="true" />
          {highlightedWords.size} markerede ord sendt til analyse
        </p>
        <div className="analysis-score">
          <strong>{probability}%</strong>
          <span>Mulig AI-brug</span>
        </div>
        <div
          className="analysis-meter"
          role="meter"
          aria-label="Eksempel på sandsynlighed for AI-genereret tekst"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={probability}
        >
          <span className="analysis-meter-fill" />
        </div>
        <p className="analysis-caveat">
          Tallet og markeringerne er illustrative, ikke forskningsresultater
          eller bevis på AI-brug. Læreren vurderer altid selv.
        </p>
      </section>
    </div>
  )
}
