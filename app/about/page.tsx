import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Om mig | Carl Floris Halberg",
  description:
    "Carl Floris Halberg arbejder for at gøre AI forståelig og tilgængelig for læreres faglige vurdering.",
}

const competencies = [
  ["AI-arkitektur", "Integrationer, brugerstyring, adgang og skalering."],
  [
    "Generativ og agentisk AI",
    "RAG, MCP, promptudvikling, evaluering og værktøjskald.",
  ],
  ["Cloud og drift", "Azure, Kubernetes, Bicep og CI/CD; regeloverholdelse og omkostninger."],
  ["Udvikling", "C#/.NET, Python, API’er og SQL."],
  ["Formidling", "Præsenterer AI-løsninger for brugere og udviklere. Oplæg ved EUPAN."],
]

export default function AboutPage() {
  return (
    <div className="site-shell about-page" lang="da">
      <a className="skip-link" href="#main">
        Gå til indhold
      </a>

      <SiteHeader />

      <main id="main">
        <section className="about-hero section-wrap" aria-labelledby="about-title">
          <div className="about-hero-copy">
            <h1 id="about-title">
              AI skal være til at forstå <span className="accent">– og vurdere.</span>
            </h1>
            <p className="about-tagline">
              Carl Floris Halberg <span aria-hidden="true">·</span> AI og
              softwareudvikling
            </p>
            <p className="about-intro">
              Jeg arbejder for at gøre AI tilgængelig for lærere som et værktøj,
              de kan forstå, efterprøve og vurdere. AI kan pege på mønstre; det
              er læreren, der kender undervisningen og træffer den faglige
              vurdering. Min rolle er at bygge bro fra det behov til arkitektur,
              kode og løsninger, der fungerer i praksis.
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
          <div className="about-facts" aria-label="Udvalgte erfaringer">
            <p>
              <strong>60.000</strong>
              <span>statsligt ansatte i målgruppen for AI-programmet</span>
            </p>
            <p>
              <strong>400</strong>
              <span>medarbejdere brugte AI-assistenten, der gik forud</span>
            </p>
          </div>
        </section>

        <div className="about-content section-wrap">
          <div className="about-main-column">
            <section className="about-block" aria-labelledby="experience-title">
              <h2 id="experience-title">Erfaring</h2>
              <article className="resume-entry">
                <div className="resume-entry-heading">
                  <h3>Dataspecialist</h3>
                  <p>Feb. 2025 – nu</p>
                </div>
                <p className="resume-org">Økonomistyrelsen</p>
                <ul>
                  <li>
                    <strong>Teknisk ledelse:</strong> Arkitektur og teknologivalg
                    for et .NET-baseret AI-program under udrulning til en
                    målgruppe på 60.000 statslige ansatte.
                  </li>
                  <li>
                    <strong>Forretningsdialog:</strong> Afdækker behov og
                    kvalificerer tekniske valg med brugere og udviklere.
                  </li>
                  <li>
                    <strong>Udvikling og drift:</strong> AI-assistent for 400
                    medarbejdere. Succesen gav mandat til det nuværende
                    AI-program.
                  </li>
                </ul>
              </article>

              <article className="resume-entry">
                <div className="resume-entry-heading">
                  <h3>AI-specialist</h3>
                  <p>Nov. 2024 – apr. 2025</p>
                </div>
                <p className="resume-org">Machintu · Deltid</p>
                <ul>
                  <li>
                    Udvikling og brugertest af Recaller, en AI-løsning for
                    personer med demens.
                  </li>
                </ul>
              </article>

              <article className="resume-entry">
                <div className="resume-entry-heading">
                  <h3>Studentermedhjælper</h3>
                  <p>Okt. 2023 – jan. 2025</p>
                </div>
                <p className="resume-org">
                  Finansministeriet – Økonomistyrelsen · Deltid
                </p>
                <ul>
                  <li>IT-udvikling, procesautomatisering og maskinlæring.</li>
                </ul>
              </article>
            </section>

            <section className="about-block" aria-labelledby="education-title">
              <h2 id="education-title">Uddannelse</h2>
              <article className="resume-entry">
                <div className="resume-entry-heading">
                  <h3>Kandidat i statskundskab</h3>
                  <p>Januar 2025</p>
                </div>
                <p className="resume-org">Aarhus Universitet</p>
                <ul>
                  <li>
                    Speciale: <em>“Kan robotter tweete?”</em> – generativ AI og
                    misinformation.
                  </li>
                </ul>
              </article>
              <article className="resume-entry">
                <div className="resume-entry-heading">
                  <h3>Bachelor i statskundskab</h3>
                  <p>Januar 2021</p>
                </div>
                <p className="resume-org">Aarhus Universitet</p>
              </article>
            </section>
          </div>

          <aside className="about-side-column" aria-label="Kompetencer og øvrigt">
            <section className="about-block" aria-labelledby="competencies-title">
              <h2 id="competencies-title">Kernekompetencer</h2>
              <ul className="competency-list">
                {competencies.map(([title, description]) => (
                  <li key={title}>
                    <strong>{title}:</strong> {description}
                  </li>
                ))}
              </ul>
            </section>

            <section className="about-block" aria-labelledby="hackathons-title">
              <h2 id="hackathons-title">Hackathons</h2>
              <article className="resume-entry compact-entry">
                <div className="resume-entry-heading">
                  <h3>Vinder, Microsoft AI</h3>
                  <p>Nov. 2024</p>
                </div>
                <p className="resume-org">Økonomistyrelsen</p>
                <p>Generativ AI og virksomhedsarkitektur.</p>
              </article>
              <article className="resume-entry compact-entry">
                <div className="resume-entry-heading">
                  <h3>Deltager, Google</h3>
                  <p>2025</p>
                </div>
                <p className="resume-org">Økonomistyrelsen</p>
                <p>Agentiske AI-prototyper og datastrømme.</p>
              </article>
            </section>

            <section className="about-block" aria-labelledby="languages-title">
              <h2 id="languages-title">Sprog</h2>
              <ul className="plain-list">
                <li><strong>Dansk:</strong> Modersmål</li>
                <li><strong>Engelsk:</strong> Flydende</li>
                <li><strong>Fransk, spansk og italiensk:</strong> Samtaleniveau</li>
              </ul>
            </section>

            <section className="about-block" aria-labelledby="interests-title">
              <h2 id="interests-title">Fritidsinteresser</h2>
              <p>Skak og boksning</p>
            </section>
          </aside>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <Link className="footer-wordmark" href="/">Machintu</Link>
          <p>Ansvarlig AI til undervisning.</p>
          <span>© {new Date().getFullYear()} Machintu</span>
        </div>
      </footer>
    </div>
  )
}
