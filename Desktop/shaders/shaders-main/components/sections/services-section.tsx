"use client"

import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section id="services" ref={ref} className="flex min-h-screen w-full items-center px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-black md:text-6xl lg:text-7xl">
            RW Applications
          </h2>
          <p className="font-mono text-sm text-black/60 md:text-base">/ Designed for global real-world blockchain development</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {[
            {
              title: "Object Registration",
              description: "For each object, the issuer creates a digital asset and records the anchor hash in the registry program. Any subsequent scan in the mainnet resolves the QR node, reads the on-chain account, and displays issuer, state and provenance",
              direction: "top",
            },
            {
              title: "Labeling",
              description: "qr2layer protocol generates unique QR codes. The QR node is printed on the tagged object. The tagged object is sent until it is activated in the chain",
              direction: "right",
            },
            {
              title: "Market Integrations",
              description: "qr2layer can integrate across industries such as automotive, fashion, art, electronics, collectibles, linking each physical product to a unique on-chain identity. Its QR architecture ensures authenticity, provenance, and lifecycle traceability",
              direction: "left",
            },
            {
              title: "Metadata",
              description: "Object attributes (brand, model, serial, issuance date, evidence URIs) are stored as immutable, content-addressed metadata, ensuring that any change would alter the content hash and be detectable",
              direction: "bottom",
            },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-black/60">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-2xl font-light text-black md:text-3xl">{service.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-black/80 md:text-base">{service.description}</p>
    </div>
  )
}


