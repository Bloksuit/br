"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { ScrollingQR } from "@/components/scrolling-qr"
import { WorkSection } from "@/components/sections/work-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { MagneticButton } from "@/components/magnetic-button"
import { useRef, useEffect, useState } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const shaderContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const intervalId = setInterval(() => {
      if (checkShaderReady()) {
        clearInterval(intervalId)
      }
    }, 100)

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto bg-background">
      <CustomCursor />
      <GrainOverlay />

      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict" }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA="#707a86"
            colorB="#eef0f5"
            speed={0.8}
            detail={0.8}
            blend={50}
            coarseX={40}
            coarseY={40}
            mediumX={40}
            mediumY={40}
            fineX={40}
            fineY={40}
          />
          <ChromaFlow
            baseColor="#ffffff"
            upColor="#c4c4c4"
            downColor="#fdfdfd"
            leftColor="#eef1f5"
            rightColor="#9c9c9c"
            intensity={0.9}
            radius={1.8}
            momentum={25}
            maskType="alpha"
            opacity={0.97}
          />
        </Shader>
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <nav
        className={`relative z-50 flex w-full items-center justify-between px-6 py-4 transition-opacity duration-700 md:px-12 md:py-5 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-2 pointer-events-none">
          <span className="tracking-tight text-black font-mono font-normal text-3xl transform-none">
            {"qr2layer"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/whitepaper"
              className="font-mono text-sm text-black/70 transition-colors hover:text-black md:text-base"
            >
              Whitepaper
            </Link>
          </div>

          <MagneticButton
            variant="secondary"
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex"
          >
            Get Started
          </MagneticButton>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={toggleMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-black transition-all hover:-translate-y-1 hover:border-foreground/30 hover:text-black/80 md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-nav"
            className="absolute left-6 right-6 top-full mt-3 flex flex-col gap-3 rounded-2xl border border-foreground/15 bg-white/80 p-4 text-black shadow-xl backdrop-blur-xl md:hidden"
          >
            <Link
              href="/whitepaper"
              onClick={() => setIsMenuOpen(false)}
              className="font-mono text-sm text-black/80 transition-colors hover:text-black"
            >
              Whitepaper
            </Link>
          </div>
        )}
      </nav>

      <div className={`relative z-10 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <section
          id="hero"
          className="relative flex min-h-screen w-full flex-col justify-start px-6 pb-16 pt-6 md:px-12 md:pb-24 md:pt-10"
        >
          <ScrollingQR />
          <div className="relative z-10 max-w-3xl font-extralight">
            <div className="mb-4 inline-block animate-in fade-in slide-in-from-bottom-4 rounded-full border border-foreground/20 bg-foreground/15 px-4 py-1.5 backdrop-blur-md duration-700">
              <p className="font-mono text-xs text-foreground/90">Nodes with qr2 </p>
            </div>
            <h1 className="mb-5 animate-in fade-in slide-in-from-bottom-8 font-sans text-4xl font-light tracking-tight text-black duration-1000 md:text-6xl lg:text-7xl">
              <span className="text-balance">Verify QR Nodes Instantly</span>
            </h1>
            <p className="mb-7 max-w-xl animate-in fade-in slide-in-from-bottom-4 text-lg leading-relaxed text-black duration-1000 delay-200 md:text-xl">
              <span className="text-pretty">
                qr2layer is a blockchain protocol that links a unique physical anchor to an on-chain identity using a
                state machine recorded in a smart contract and presented to users as a digital asset with immutable metadata
              </span>
            </p>
            <div className="flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-4 duration-1000 delay-300 sm:flex-row sm:items-center">
              <MagneticButton
                size="lg"
                variant="primary"
                onClick={() => window.open("https://v0.app/templates/R3n0gnvYFbO", "_blank")}
              >
                Open in v0
              </MagneticButton>
              <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection("services")}>
                View Demo
              </MagneticButton>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-in fade-in duration-1000 delay-500">
            <div className="flex items-center gap-2">
              <p className="font-mono text-xs text-foreground/80">Scroll to explore</p>
              <div className="flex h-6 w-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground/15 backdrop-blur-md">
                <div className="h-2 w-2 animate-pulse rounded-full bg-foreground/80" />
              </div>
            </div>
          </div>
        </section>

        <WorkSection />
        <ServicesSection />
        <AboutSection
          scrollToSection={(index: number) => {
            const sections = ["hero", "work", "services", "about", "contact"]
            scrollToSection(sections[index])
          }}
        />
        <ContactSection />
      </div>
    </main>
  )
}




