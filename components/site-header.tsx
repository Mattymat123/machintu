"use client"

import Link from "next/link"
import { useRef, useState } from "react"

const navigation = [
  { label: "Forside", href: "/" },
  { label: "Linse", href: "/#linse" },
  { label: "Om mig", href: "/about" },
  { label: "Kontakt", href: "/#contact" },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

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
        <Link className="wordmark" href="/" aria-label="Machintu, forsiden">
          <span>Machintu</span>
        </Link>

        <nav className="desktop-nav" aria-label="Hovednavigation">
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
          aria-label={menuOpen ? "Luk navigation" : "Åbn navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className="mobile-nav"
          id="mobile-nav"
          aria-label="Mobilnavigation"
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
