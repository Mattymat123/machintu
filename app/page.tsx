import { SiteHeader } from "@/components/site-header"
import { AnalysisDemo } from "@/components/analysis-demo"
import { SectionTimeline } from "@/components/section-timeline"
import { Search } from "lucide-react"
import { getLocale } from "@/lib/locale"
import { getTranslations } from "@/lib/translations"

export default async function Page() {
  const locale = await getLocale()
  const copy = getTranslations(locale)
  const home = copy.home

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        {copy.skipToContent}
      </a>

      <SiteHeader locale={locale} />
      <SectionTimeline locale={locale} />

      <main id="main">
        <section className="analysis-section section-wrap" id="linse" aria-labelledby="linse-title">
          <div className="analysis-intro" id="intro" tabIndex={-1}>
            <div className="analysis-heading-copy">
              <div className="analysis-title-row">
                <h2 id="linse-title"><span>{home.demoTitle.split("Linse")[0]}<span>Linse</span></span></h2>
                <Search className="analysis-lens-icon" aria-hidden="true" />
              </div>
              <p className="analysis-subtitle">{home.demoSubtitle}</p>
              <ul className="education-points" aria-label={home.educationPointsLabel}>
                {home.educationPoints.map((point, index) => (
                  <li key={point.title}>
                    <span className="education-point-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{point.title}</h3>
                      <p>{point.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div id="demo" tabIndex={-1}>
            <AnalysisDemo locale={locale} />
          </div>
        </section>

        <section className="intro-section section-wrap" id="purpose" aria-labelledby="purpose-title">
          <p className="section-label">{home.purposeLabel} <span>01 / 03</span></p>
          <div className="section-content">
            <h2 id="purpose-title">{home.purposeTitle}</h2>
            <p>{home.purposeText}</p>
          </div>
        </section>

        <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
          <div className="section-heading-row">
          </div>

        </section>

        <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
          <p className="section-label">{home.aboutLabel} <span>03 / 03</span></p>
          <div className="section-content">
            <h2 id="about-title">{home.aboutTitle}</h2>
            <p>{home.aboutText}</p>
          </div>
        </section>

        <section className="research-section section-wrap" id="research" aria-labelledby="research-title">
          <p className="section-label">{home.research}</p>
          <div className="research-content">
            <h2 id="research-title">{home.question}</h2>
            <p>{home.explanation}</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="footer-wordmark" href="#home">Machintu</a>
          <p>{home.footer}</p>
          <span>© {new Date().getFullYear()} Machintu</span>
        </div>
      </footer>
    </div>
  )
}
