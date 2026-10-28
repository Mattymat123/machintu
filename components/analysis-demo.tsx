"use client"

import { Fragment, useEffect, useLayoutEffect, useRef, useState, type PointerEvent } from "react"
import type { Locale } from "@/lib/locale"
import { getTranslations } from "@/lib/translations"

const sampleText =
  "Napoleon bliver ofte fremstillet som lederen, der skabte orden i Frankrig efter revolutionen. Det billede rummer noget rigtigt, men fortæller ikke hele historien. Efter flere år med politisk uro ønskede mange franskmænd stabilitet, og Napoleon lovede at samle landet. Som førstekonsul samlede han magten, og i 1804 blev han kejser. Han brugte folkeafstemninger til at vise, at befolkningen støttede ham, men valgene foregik under forhold, hvor kritik var vanskelig.\n\nHans lovbog gjorde reglerne mere ensartede og styrkede principper om lighed for loven og ejendomsret. Den gjorde det lettere at administrere et stort land og fjernede flere privilegier, som tidligere havde fulgt med fødsel. Det var en vigtig ændring, men ligheden gjaldt ikke alle på samme måde. Kvinder fik færre rettigheder og blev i højere grad underlagt mænd i familien. Samtidig blev aviser censureret, og politisk opposition blev begrænset. Reformerne skabte altså ikke et frit samfund; de gjorde også staten mere effektiv til at styre sine borgere.\n\nNapoleons styre var derfor præget af både reformer og kontrol. Krigene spredte franske idéer i Europa, og nogle steder blev gamle feudale ordninger afskaffet. Men idéerne kom ofte sammen med besættelse, skatter og tvungen værnepligt. Krigene kostede mange mennesker livet og førte til fransk dominans over andre folk. De, der oplevede franske reformer, kunne derfor både se nye muligheder og føle, at deres selvbestemmelse blev taget fra dem.\n\nEfter nederlaget ved Waterloo i 1815 var imperiet slut, men flere af reformerne bestod og påvirkede senere lovgivning i Europa. Det gør vurderingen vanskeligere end et enkelt spørgsmål om, hvorvidt Napoleon var helt god eller ond. Hans resultater bør ses sammen med prisen, som almindelige mennesker betalte, og med den magt, han selv beholdt. Napoleon bør derfor hverken vurderes som frihedens forsvarer eller som ren erobrer. Hans betydning ligger i, at modernisering og autoritær magt voksede frem side om side."
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
const wordTransferDuration = 480
const wordTransferStagger = 80

export function AnalysisDemo({ locale }: { locale: Locale }) {
  const copy = getTranslations(locale).demo
  const demoText = locale === "da" ? sampleText : copy.essay
  const activeHighlightedWords =
    locale === "da" ? highlightedWords : new Set(copy.highlightedWords)
  const essaySegments: Array<{ text: string; highlighted: boolean }> = []
  let segmentStart = 0

  for (const word of demoText.matchAll(/\p{L}+/gu)) {
    if (!activeHighlightedWords.has(word[0].toLocaleLowerCase(locale))) continue

    const wordStart = word.index ?? segmentStart
    essaySegments.push({ text: demoText.slice(segmentStart, wordStart), highlighted: false })
    essaySegments.push({ text: word[0], highlighted: true })
    segmentStart = wordStart + word[0].length
  }

  essaySegments.push({ text: demoText.slice(segmentStart), highlighted: false })
  const [captured, setCaptured] = useState<string[]>([])
  const [displayedScore, setDisplayedScore] = useState(0)
  const scoreRef = useRef(0)
  const demoRef = useRef<HTMLDivElement>(null)
  const animatedWords = useRef(new Set<string>())
  const scoreAnimationDuration = useRef(wordTransferDuration)
  const score = Math.min(94, Math.round((100 * captured.length) / activeHighlightedWords.size))

  useLayoutEffect(() => {
    const demo = demoRef.current
    if (!demo) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const sources = Array.from(demo.querySelectorAll<HTMLElement>(".analysis-highlight"))
    const essay = demo.querySelector<HTMLElement>(".analysis-essay-scroll")?.getBoundingClientRect()
    let sequence = 0

    for (const item of demo.querySelectorAll<HTMLElement>(".analysis-captured li")) {
      const word = item.textContent?.toLocaleLowerCase(locale)
      if (!word || animatedWords.current.has(word)) continue
      animatedWords.current.add(word)
      const source = sources.find((mark) => mark.textContent?.toLocaleLowerCase(locale) === word)
      if (reducedMotion || !source) continue

      const from = source.getBoundingClientRect()
      const to = item.getBoundingClientRect()
      const originY = essay ? Math.max(essay.top, Math.min(from.top, essay.bottom)) : from.top
      item.animate(
        [
          { transform: `translate(${from.left - to.left}px, ${originY - to.top}px) scale(0.85)`, opacity: 0 },
          { opacity: 1, offset: 0.15 },
          { transform: "translate(0, 0) scale(1)", opacity: 1 },
        ],
        {
          duration: wordTransferDuration,
          delay: sequence * wordTransferStagger,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        }
      )
      sequence += 1
    }
    scoreAnimationDuration.current = sequence
      ? wordTransferDuration + (sequence - 1) * wordTransferStagger
      : wordTransferDuration
  }, [captured, locale])

  useEffect(() => {
    const startValue = scoreRef.current
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let startTime: number | undefined
    let frame: number

    function update(time: number) {
      startTime ??= time
      const progress = reducedMotion
        ? 1
        : Math.min((time - startTime) / scoreAnimationDuration.current, 1)
      const value = Math.round(startValue + (score - startValue) * progress)
      scoreRef.current = value
      setDisplayedScore(value)
      if (progress < 1) frame = requestAnimationFrame(update)
    }

    frame = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frame)
  }, [score])

  function moveLens(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return
    const bounds = event.currentTarget.getBoundingClientRect()
    const writingBounds = event.currentTarget.querySelector(".analysis-lens-area")?.getBoundingClientRect()
    event.currentTarget.style.setProperty("--lens-x", `${event.clientX - bounds.left}px`)
    event.currentTarget.style.setProperty("--lens-y", `${event.clientY - bounds.top}px`)
    if (writingBounds) {
      event.currentTarget.style.setProperty("--lens-copy-x", `${event.clientX - writingBounds.left}px`)
      event.currentTarget.style.setProperty("--lens-copy-y", `${event.clientY - writingBounds.top}px`)
    }
    event.currentTarget.dataset.lensActive = "true"
    const radius = parseFloat(getComputedStyle(event.currentTarget).getPropertyValue("--lens-radius"))
    const words = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(".analysis-highlight"))
      .filter((mark) => {
        const rect = mark.getBoundingClientRect()
        const x = Math.max(rect.left, Math.min(event.clientX, rect.right))
        const y = Math.max(rect.top, Math.min(event.clientY, rect.bottom))
        return Math.hypot(event.clientX - x, event.clientY - y) <= radius
      })
      .map((mark) => mark.textContent?.toLocaleLowerCase(locale) || "")
    if (words.length) {
      setCaptured((previous) => {
        const next = [...new Set([...previous, ...words])]
        return next.length === previous.length ? previous : next
      })
    }
  }

  return (
    <div className="analysis-demo" ref={demoRef}>
      <article
        className="analysis-document"
        aria-labelledby="analysis-document-title"
        onPointerMove={moveLens}
        onPointerLeave={(event) => delete event.currentTarget.dataset.lensActive}
      >
        <div className="analysis-document-meta">
          <span>{copy.documentType}</span>
          <span className="analysis-provider-logo" aria-label={copy.generatedBy}>
            <span aria-hidden="true">OpenAI</span>
          </span>
        </div>
        <h2 id="analysis-document-title">{copy.essayTitle}</h2>
        <p className="analysis-hint">{copy.hint}</p>
        <div className="analysis-essay-scroll" aria-label={copy.essayLabel} tabIndex={0}>
          <div className="analysis-lens-area">
            <p className="analysis-writing">{demoText}</p>
            <p className="analysis-writing analysis-lens-copy" aria-hidden="true">
              {essaySegments.map((segment, index) =>
                segment.highlighted ? (
                  <mark className="analysis-highlight" key={index}>{segment.text}</mark>
                ) : (
                  <Fragment key={index}>{segment.text}</Fragment>
                )
              )}
            </p>
          </div>
        </div>
        <span className="analysis-lens-outline" aria-hidden="true" />
      </article>
      <div className="analysis-results">
        <div className="analysis-results-heading">
          <div>
            <span className="analysis-results-label">{copy.wordsInLens}</span>
            <p>{copy.collectedText}</p>
          </div>
          <button type="button" onClick={() => setCaptured((previous) => [...new Set([...previous, ...essaySegments.filter((segment) => segment.highlighted).map((segment) => segment.text.toLocaleLowerCase(locale))])])}>
            {copy.showAll}
          </button>
        </div>
        <ul className="analysis-captured" aria-label={copy.collectedWords}>
          {captured.map((word) => <li key={word}>{word}</li>)}
        </ul>
        {captured.length === 0 && <p className="analysis-empty">{copy.empty}</p>}
        <div className="analysis-score">
          <span className="analysis-results-label">{copy.probability}</span>
          <div className="analysis-score-circle" role="img" aria-label={`${score} ${copy.percent}`}>
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <circle className="analysis-score-track" cx="60" cy="60" r="52" />
              {displayedScore > 0 && <circle className="analysis-score-progress" cx="60" cy="60" r="52" pathLength="100" strokeDasharray={`${Math.min(displayedScore, 94)} 100`} />}
            </svg>
            <span className="analysis-score-value" aria-hidden="true">{displayedScore}%</span>
          </div>
        </div>
      <span className="analysis-status" role="status">{captured.length > 0 ? copy.status(captured.length, score) : ""}</span>
      </div>
    </div>
  )
}
