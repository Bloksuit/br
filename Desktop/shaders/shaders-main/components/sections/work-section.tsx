"use client"

import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section id="work" ref={ref} className="flex min-h-screen w-full items-center px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-black md:text-6xl lg:text-7xl">
            QR Data Model
          </h2>
          <p className="font-mono text-sm text-black md:text-base">/ Components and Binding</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {[
            {
              number: "01",
              title: "qr2layer Protocol",
              category: "qr2layer functions as a native verification protocol that resolves QR nodes and queries on-chain data to provide users with verifiable trust evidence",
              direction: "left",
            },
            {
              number: "02",
              title: "Registry Program",
              category: "A smart-contract state machine that binds the anchor hash of the tag to the object's on-chain identity and enforces lifecycle transitions",
              direction: "right",
            },
            {
              number: "03",
              title: "Object and Tag",
              category: "A physical item equipped with a tamper-evident label containing a QR node. Each object is represented on-chain as a collection-verified with immutable, content-addressed metadata",
              direction: "left",
            },
          ].map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: { number: string; title: string; category: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-6 transition-all duration-700 hover:border-foreground/20 md:py-8 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-black transition-colors group-hover:translate-x-1 md:text-base">
          {project.number}
        </span>
        <div>
          <h3 className="mb-1 font-sans text-2xl font-light text-black transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-black md:text-sm">{project.category}</p>
        </div>
      </div>
      <span className="font-mono text-xs text-black md:text-sm" aria-hidden="true">
        &middot;
      </span>
    </div>
  )
}

