"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import type { Locale } from "@/lib/locale"
import { getTranslations } from "@/lib/translations"

export function SiteHeader({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const copy = getTranslations(locale)
  const navigation = [
    { label: copy.nav.linse, href: "/#purpose" },
    { label: copy.nav.about, href: "/about" },
    { label: copy.nav.research, href: "/#research" },
  ]

  function setLocale(nextLocale: Locale) {
    document.cookie = `machintu-locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`
    router.refresh()
  }

  function closeMenu() {
    setMenuOpen(false)
    menuButton.current?.focus()
  }

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          closeMenu()
        }
      }}
    >
      <div className="header-inner">
        <div className="header-brand">
          <Link className="wordmark" href="/" aria-label={copy.homeLabel}>
            <span>Machintu</span>
          </Link>
        </div>

        <nav className="desktop-nav" aria-label={copy.navigationLabel}>
          {navigation.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          ref={menuButton}
          className="mobile-menu-button"
          type="button"
          aria-controls="mobile-nav"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? copy.closeNavigation : copy.openNavigation}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div className="language-toggle" role="group" aria-label={copy.languageLabel}>
          <button
            type="button"
            aria-pressed={locale === "da"}
            onClick={() => setLocale("da")}
          >
            DA
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            aria-pressed={locale === "en"}
            onClick={() => setLocale("en")}
          >
            EN
          </button>
        </div>

        <nav
          className="mobile-nav"
          id="mobile-nav"
          aria-label={copy.mobileNavigationLabel}
          hidden={!menuOpen}
        >
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
