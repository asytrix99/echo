import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from "next/font/google"
import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

/**
 * Root layout for the application: applies global fonts, HTML attributes, and wraps children with authentication and app providers.
 *
 * Renders an `<html lang="en">` element with font CSS variables applied to `<body>`, then wraps the provided `children`
 * with `ClerkProvider` (authentication) and `Providers` (application-wide contexts).
 *
 * @param children - The page or app content to render inside the providers.
 * @returns The root HTML structure for the Next.js application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <ClerkProvider>
          <Providers>
            {children}
            </Providers>
        </ClerkProvider>
      </body>
    </html>
  )
}
