"use client"

import type { SVGProps } from "react"
import { Mail, MapPin, Instagram, Youtube } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

const socials = [
  { name: "X", href: "https://x.com/qr2layer", Icon: XIcon },
  { name: "Instagram", href: "https://instagram.com/qr2layer", Icon: Instagram },
  { name: "YouTube", href: "https://youtube.com/@qr2layer", Icon: Youtube },
  { name: "Telegram", href: "https://t.me/qr2layer", Icon: TelegramIcon },
]

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path
        fill="currentColor"
        stroke="none"
        d="M4 3h4.5l3.44 4.97L15.05 3H20l-6.5 9.06L19.8 21H15l-3.8-5.35L7.24 21H4.1l6.28-8.73L4 3Zm2.4 1.6 5.44 7.58L6.08 19.4h1.52l5.1-7.1 4.76 6.88h1.56l-5.6-8.06L17.9 4.6h-1.52l-4.44 6.18L7.2 4.6H6.4Z"
      />
    </svg>
  )
}

function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path
        d="M21.5 4.5 18.6 19.2c-.2 1.2-1.4 1.7-2.3 1.2l-6.4-4.7-3.1 2.9c-.3.3-.6.1-.5-.2l.6-3.9 8.9-8c.4-.4-.1-.5-.6-.2l-11 6.9-3.8-1.2c-1-.3-1-1 0-1.4L20 3.1c.9-.3 1.8.4 1.5 1.4Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      id="contact"
      ref={ref}
      className="flex min-h-[80vh] w-full items-center px-4 pt-16 pb-10 md:px-12 md:pt-20 md:pb-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-3xl font-light tracking-tight text-black md:mb-3 md:text-5xl lg:text-6xl">
                Contact
                <br />
                Sales
              </h2>
              <p className="font-mono text-xs text-black/60 md:text-base">/ Contact our team for enterprise integrations</p>
            </div>

            <div className="space-y-4 md:space-y-8">
              <a
                href="mailto:support@qr2layer.com"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Mail className="h-3 w-3 text-black/60" />
                  <span className="font-mono text-xs text-black/60">Email</span>
                </div>
                <p className="text-base text-black transition-colors group-hover:text-black/70 md:text-2xl">
                  support@qr2layer.com
                </p>
              </a>

              <div
                className={`flex gap-3 pt-2 transition-all duration-700 md:gap-4 md:pt-4 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                {socials.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-foreground/10 text-black/70 transition-all hover:-translate-y-1 hover:border-foreground/40 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 md:h-11 md:w-11"
                  >
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col items-center justify-center gap-3 text-center transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h2 className="font-sans text-3xl font-light tracking-tight text-black md:text-5xl lg:text-6xl">
              qr2layer Protocol
            </h2>
            <p className="font-mono text-xs text-black/60 md:text-sm">
              &copy; {new Date().getFullYear()} qr2layer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}



