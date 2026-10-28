import { cookies } from "next/headers"

export type Locale = "da" | "en"

export async function getLocale(): Promise<Locale> {
  const locale = (await cookies()).get("machintu-locale")?.value
  return locale === "en" ? "en" : "da"
}
