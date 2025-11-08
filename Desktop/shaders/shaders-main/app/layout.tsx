import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "qr2layer - QR Blockchain",
  description:
    "The world's first QR blockchain technology. The only blockchain technology with real-world value.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: "https://www.qr2layer.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="font-mono" lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
