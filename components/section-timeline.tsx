"use client"

import { useEffect, useState } from "react"
import type { Locale } from "@/lib/locale"
import { getTranslations } from "@/lib/translations"

const sections = ["intro", "demo", "about"] as const

export function SectionTimeline({ locale }: { locale: Locale }) {
  const [activeSection, setActiveSection] = useState("intro")
  const copy = getTranslations(locale).timeline

  useEffect(() => {
    const targets = sections
      .map((id) => document.getElementById(id))
      .filter((target): target is HTMLElement => target !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        const center = window.innerHeight * 0.45
        const current = visible.reduce<IntersectionObserverEntry | null>(
          (closest, entry) =>
            !closest ||
            Math.abs(entry.boundingClientRect.top - center) <
              Math.abs(closest.boundingClientRect.top - center)
              ? entry
              : closest,
          null,
        )

        if (current) setActiveSection(current.target.id)
      },
      { rootMargin: "-40% 0px -50% 0px" },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="section-timeline" aria-label={copy.label}>
      <ol>
        {sections.map((id) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}>
              <span className="section-timeline-marker" aria-hidden="true" />
              <span>{copy[id]}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
