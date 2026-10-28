import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { getLocale } from "@/lib/locale"
import { getTranslations } from "@/lib/translations"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const copy = getTranslations(locale).about

  return { title: copy.metadataTitle, description: copy.metadataDescription }
}

export default async function AboutPage() {
  const locale = await getLocale()
  const copy = getTranslations(locale)
  const about = copy.about

  return (
    <div className="site-shell about-page">
      <a className="skip-link" href="#main">
        {copy.skipToContent}
      </a>

      <SiteHeader locale={locale} />

      <main id="main">
        <section className="about-hero section-wrap" aria-labelledby="about-title">
          <div className="about-hero-copy">
            <h1 id="about-title">
              {about.titleLead} <span className="accent">{about.titleAccent}</span>
            </h1>
            <p className="about-tagline">
              Carl Floris Halberg <span aria-hidden="true">·</span> {about.tagline}
            </p>
            <p className="about-intro">
              {about.intro}
            </p>
            <div className="about-contact-links" id="contact" aria-label={about.contact}>
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

        <div className="about-content section-wrap">
          <div className="about-main-column">
            <section className="about-block" aria-labelledby="experience-title">
              <h2 id="experience-title">{about.experience}</h2>
              <article className="resume-entry">
                <div className="resume-entry-heading">
                  <h3>{about.dataSpecialist}</h3>
                  <p>{about.now}</p>
                </div>
                <p className="resume-org">{about.agency}</p>
                <ul>
                  <li>
                    <strong>{about.technicalLeadership}:</strong> {about.technicalLeadershipText}
                  </li>
                  <li>
                    <strong>{about.businessDialogue}:</strong> {about.businessDialogueText}
                  </li>
                  <li>
                    <strong>{about.developmentAndOperations}:</strong> {about.developmentAndOperationsText}
                  </li>
                </ul>
              </article>

              <article className="resume-entry">
                <div className="resume-entry-heading">
                  <h3>{about.aiSpecialist}</h3>
                  <p>{about.recallerDates}</p>
                </div>
                <p className="resume-org">{about.machintuPartTime}</p>
                <ul>
                  <li>
                    {about.recaller}
                  </li>
                </ul>
              </article>

              <article className="resume-entry">
                <div className="resume-entry-heading">
                  <h3>{about.studentAssistant}</h3>
                  <p>{about.studentAssistantDates}</p>
                </div>
                <p className="resume-org">
                  {about.financePartTime}
                </p>
                <ul>
                  <li>{about.itDevelopment}</li>
                </ul>
              </article>
            </section>

            <section className="about-block" aria-labelledby="education-title">
              <h2 id="education-title">{about.education}</h2>
              <article className="resume-entry">
                <div className="resume-entry-heading">
                  <h3>{about.masters}</h3>
                  <p>{about.january2025}</p>
                </div>
                <p className="resume-org">{about.university}</p>
                <ul>
                  <li>
                    {about.thesis}: <em>“{about.thesisTitle}”</em> – {about.thesisText}
                  </li>
                </ul>
              </article>
              <article className="resume-entry">
                <div className="resume-entry-heading">
                  <h3>{about.bachelors}</h3>
                  <p>{about.january2021}</p>
                </div>
                <p className="resume-org">{about.university}</p>
              </article>
            </section>
          </div>

          <aside className="about-side-column" aria-label={about.skillsAndMore}>
          



          </aside>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <Link className="footer-wordmark" href="/">Machintu</Link>
          <p>{about.footer}</p>
          <span>© {new Date().getFullYear()} Machintu</span>
        </div>
      </footer>
    </div>
  )
}
