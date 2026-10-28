import { SiteHeader } from "@/components/site-header"
import { AnalysisDemo } from "@/components/analysis-demo"

export default function Page() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Gå til indhold
      </a>

      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <section className="hero section-wrap" id="home" tabIndex={-1} aria-labelledby="hero-title">
          <div className="hero-message">
            <h1 id="hero-title">
              AI i elevopgaver<span className="accent">.</span>
            </h1>
            <p className="hero-copy">
              Linse undersøger, hvor AI kan bidrage til analyse af elevers
              opgaver, og hvor teknologien kan tage fejl. Målet er at belyse
              både anvendeligheden og problemerne.
            </p>
            <a className="text-link" href="#linse">
              Læs om Linse <span aria-hidden="true">↘</span>
            </a>
          </div>
          <AnalysisDemo />
        </section>

        <section className="intro-section section-wrap" id="linse" tabIndex={-1} aria-labelledby="linse-title">
          <p className="section-label">Forskningsprojektet</p>
          <div className="section-content">
            <h2 id="linse-title">
              Hvad kan AI reelt fortælle om en elevopgave?
            </h2>
            <p>
              Undersøgelsen ser på, hvordan AI-værktøjer analyserer elevtekster,
              hvilke mønstre de peger på, og hvor vurderingerne kan være usikre.
              En modelscore er ikke bevis; lærerens faglige vurdering er
              afgørende.
            </p>
          </div>
        </section>

        <section className="about-section section-wrap" id="about" tabIndex={-1} aria-labelledby="about-title">
          <p className="section-label">Undersøgelsens fokus</p>
          <div className="section-content">
            <h2 id="about-title">Muligheder, begrænsninger og risiko for fejl.</h2>
            <p>
              Fokus er på, hvornår analyser er nyttige, hvornår de vildleder, og
              hvordan falske mistanker kan opstå. Målet er at gøre både styrker
              og problemer tydelige, ikke at erklære en elevtekst AI-skrevet.
            </p>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact" tabIndex={-1} aria-labelledby="contact-title">
          <p className="section-label">Adgang til værktøjer</p>
          <div className="contact-content">
            <h2 id="contact-title">Værktøjer til undersøgelsen</h2>
            <p>
              Jeg søger adgang til Textgrain og API-nøgler fra Anthropic og
              OpenAI for at afprøve og sammenligne tekst- og sprogmodeller på
              elevopgaver. Adgangen skal understøtte undersøgelsen af deres
              muligheder, begrænsninger og fejlmuligheder.
            </p>
            <div className="about-contact-links" aria-label="Kontaktoplysninger">
              <a href="mailto:cfhalberg@gmail.com">cfhalberg@gmail.com</a>
              <a href="tel:+4528147015">+45 28 14 70 15</a>
              <a
                href="https://www.linkedin.com/in/carl-floris-halberg/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="footer-wordmark" href="#home">Machintu</a>
          <p>Virksomheden bag Linse.</p>
          <span>© {new Date().getFullYear()} Machintu</span>
        </div>
      </footer>
    </div>
  )
}
