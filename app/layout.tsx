import type { Metadata } from "next"
import Script from "next/script"
import { getLocale } from "@/lib/locale"
import "./globals.css"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()

  return {
    title: "Machintu | Linse",
    description:
      locale === "da"
      ? "Machintu udvikler ansvarlig AI-software til undervisning med underviserens faglige vurdering i centrum."
        : "Machintu builds responsible AI software for education, keeping educators’ judgement at the centre.",
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()

  return (
    <html lang={locale} className="dark antialiased">
      <body>
        {children}
        <Script
          src="https://mcp.figma.com/mcp/html-to-design/capture.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
