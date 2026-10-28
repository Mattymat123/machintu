import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Machintu | Linse",
  description:
    "Linse hjælper lærere med at undersøge mulig AI-brug i elevers opgaver, mens den faglige vurdering bliver hos læreren.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="da" className="dark antialiased">
      <body>{children}</body>
    </html>
  )
}
