"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { MagneticButton } from "@/components/magnetic-button"

export default function WhitepaperPage() {
  const [isLoaded, setIsLoaded] = useState(false)
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

  const openWhitepaper = () => {
    window.open("https://qr2layer.com/whitepaper", "_blank", "noopener,noreferrer")
  }

  const handleOpenWhitepaper = () => {
    openWhitepaper()
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
        className={`relative z-50 flex w-full items-center justify-center px-6 py-4 transition-opacity duration-700 md:px-12 md:py-5 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link href="/" className="transition-colors hover:text-black/70">
          <span className="tracking-tight text-black font-mono font-normal text-3xl md:text-4xl">qr2layer</span>
        </Link>
      </nav>

      <div className={`relative z-10 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <section
          id="whitepaper-content"
          className="relative flex min-h-screen w-full flex-col justify-start px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-16"
        >
          <article className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-8 rounded-3xl border border-foreground/10 bg-white/40 p-6 font-extralight backdrop-blur-xl transition-all duration-700 md:p-10">
            <header className="space-y-4">
              <h1 className="font-sans text-3xl font-light tracking-tight text-black md:text-5xl">
                The QR2: An Electronic Buy-Sell and Verification System Using QR Codes
              </h1>
              <h2 className="font-sans text-xl font-light uppercase tracking-[0.2em] text-black/80 md:text-2xl">
                Abstract
              </h2>
            </header>
            <div className="space-y-5 text-base leading-relaxed text-black/80 md:text-lg">
              <p>
                We present a protocol that couples blockchain technology with a data-storage system using QR codes.
                qr2layer is an information and verification system that operates both in physical-digital contexts and
                with fully digital assets. The protocol provides an auditable truth mechanism as well as origin, time,
                provenance, and ownership; it also supplies clear rules for asset transfer and information verification.
              </p>
              <p>
                Each physical or digital asset receives a QR2 code that enables any party to locate the asset and verify
                its authenticity, origin, publication time, and status. Under this vision, the cryptologic method
                guarantees publication integrity, origin accountability, and transmission traceability; as a result, it
                changes how corporations create assets and limits government interference in economic transactions.
                Combined with information markets, the protocol enables a user-to-user marketplace for any material that
                can be sealed with QR codes.
              </p>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-black/80 md:text-lg">
              <h2 className="font-sans text-2xl font-light text-black md:text-3xl">1. Introduction</h2>
              <p>
                Each QR2 code is encoded with a payload and anchored to the chain through a cryptographic record bound to
                the holder&apos;s key, together with embedded metadata. The payload may include the asset identifier,
                origin, descriptors, transaction history, and monetary estimate. This anchoring provides a unique
                reference, public status, and proof of existence in a temporally ordered ledger. With this protocol,
                centralized taxation and fragile copyright are replaced by open cryptographic proof and market-compatible
                financing mechanisms. Direct payments are enabled through a user-to-user buy-sell system based on
                electronic money and no intermediaries.
              </p>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-black/80 md:text-lg">
              <h2 className="font-sans text-2xl font-light text-black md:text-3xl">
                2. Implementation, Standardization, and Stamping of QR2
              </h2>
              <p>
                QR2 codes must be applied to assets by protocol users, a process that requires an Issuance and Stamping
                Service for QR2, a mainnet for asset registration and verification, and clear format and security
                specifications. Achieving a global standard will ultimately determine the protocol&apos;s success. Built
                on the Solana network for its low per-transaction costs, the system is managed by the qr2layer Foundation,
                which oversees protocol rollout and international standardization. Within this framework, the Issuance
                Service generates the asset identifier, packages the payload, and produces the QR2 under verifiable
                policies, while the Registry layer publishes the reference to the public ledger and displays the asset&apos;s
                current status. The user client is responsible for managing keys, signing create, transfer, and revoke
                operations, and querying asset states. Finally, the verifier validates a QR2 from any device and retrieves
                verifiable evidence of authenticity and integrity.
              </p>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-black/80 md:text-lg">
              <h2 className="font-sans text-2xl font-light text-black md:text-3xl">
                3. QR2 Nodes and Metadata Fields
              </h2>
              <p>
                In the protocol, QR2 nodes are the logical entities responsible for issuing, anchoring, and verifying the
                states of assets referenced by QR codes. These nodes include the Issuance component, which handles
                identifier generation and payload encapsulation; the Registry, which publishes the asset&apos;s state to
                the public ledger; the Client or User interface, which manages cryptographic keys and digital signatures;
                the Verifier, which performs local checks and remote queries; and the Metadata repository, which is
                accessed by the public mainnet for user verification. The minimum payload fields include the asset&apos;s
                public key—unique within the protocol—the holder&apos;s public key or account reference, the publication
                timestamp, and, optionally, descriptions or licenses. Embedded metadata may also contain tags, asset
                classification, links, and statistical information. The asset lifecycle encompasses the initial issuance
                or registration of state, the transfer of ownership with a public record of the change, controlled updates
                to metadata, and eventual revocation, which marks the asset as withdrawn or compromised while maintaining
                a complete historical record. For peer-to-peer financing and markets, direct payments are facilitated
                through the QR2 token, enabling settlement between digital participants and ensuring full traceability to
                the original price.
              </p>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-black/80 md:text-lg">
              <h2 className="font-sans text-2xl font-light text-black md:text-3xl">
                4. Security Risks and Challenges for the Protocol
              </h2>
              <p>
                Primary risks include: falsification or duplication of physical labels and creation of copies of
                originally labeled assets; impersonation of ownership through compromised keys; reuse of stale states in
                offline environments; and exposure of sensitive metadata.
              </p>
              <p>
                Mitigations include: tamper-evident materials for labels, key rotation, public auditing of state, and
                geographic replication of information. The protocol preserves pseudonymity by default with asset
                traceability and separates asset identifiers from personal data. It maintains compatibility with
                conventional QR through interoperability profiles, allowing instant registration as QR2 assets.
              </p>
              <p>
                Issuance and evolution of QR codes are coordinated by the qr2layer foundation, with public APIs for
                issuance and transfer—also centrally and in coordination with corporations aggregated into the protocol.
              </p>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-black/80 md:text-lg">
              <h2 className="font-sans text-2xl font-light text-black md:text-3xl">
                5. Future Work and Addressing Protocol Challenges
              </h2>
              <p>
                In the first stage, the qr2layer foundation coordinates QR2 issuance and deployment with users and
                corporations. This initial centralization is transitional: as adoption grows and there are sufficient
                issuers and users, issuance, auditing, and incident resolution will gradually shift toward hybrid oversight
                with artificial intelligence (AI). In this vision, AI acts as an issuer and operations assistant. Its
                implementation prevents and detects anomalous patterns in scanning and verification activity. This approach
                reduces operational errors and speeds responses without ceding strategic control of the protocol. To
                prevent model capture or bias, the system will include periodic audits, decision traceability, and scope
                limits.
              </p>
              <p>
                To combat counterfeits and replicas of physical and digital assets: each QR2 label is stamped with
                verifiable serialization; the stamped asset records manufacturing evidence and a visual extract of the
                marking associated with the asset&apos;s initial state. In the field, the verifier gathers reading
                telemetry, checks consistency between QR2 payload and published state, and compares visual markings. AI
                correlates these signals with historical fraud attempts to assign confidence levels and accept or deny QR2
                codes. When a QR2 is invalidated, the protocol supervises and preserves history and marks the identifier as
                withdrawn.
              </p>
              <p>
                Economic sustainability will rely on direct payments and retroactive funding based on real asset usage.
                This incentivizes responsible issuance and funds the operation of verifiers and nodes.
              </p>
              <p>
                With AI capabilities, the system can proactively adjust issuance parameters, refine detection thresholds,
                and prioritize audits where fraud probabilities increase. Together, these measures address the proposed
                challenges and sustain a continuous-improvement cycle toward the protocol&apos;s global standardization.
              </p>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-black/80 md:text-lg">
              <h2 className="font-sans text-2xl font-light text-black md:text-3xl">6. Conclusion</h2>
              <p>
                We have proposed a system for registration, verification, and transfer of physical and digital assets that
                does not rely on trusted intermediaries. We start from digital signatures for ownership control and
                integrate them with QR2 codes that encapsulate the payload through a mainnet that verifies and reviews
                contracts.
              </p>
              <p>
                The design assumes a sealing server, an application as a verification network for codes, and a public
                history stored in metadata. When QR nodes act, they provide a solid foundation for traceability and proof
                of existence.
              </p>
              <p>
                On this basis, qr2layer aims to consolidate a global identification and verification standard for goods and
                digital assets, capable of supporting a user-to-user market through QR codes.
              </p>
            </div>
            <p className="text-sm italic text-black/70">
              This document constitutes the first version of the QR2 Whitepaper and serves as the initial technical and
              conceptual framework for the protocol. The paper is open to three future revisions, which will incorporate
              advances in implementation, the mainnet launch, AI integration, and standardization outcomes. Each subsequent
              revision will refine the protocol&apos;s architecture, expand interoperability specifications, and update
              performance metrics based on real-world deployment data.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <MagneticButton size="lg" variant="primary" onClick={handleOpenWhitepaper}>
                Download Whitepaper
              </MagneticButton>
              <MagneticButton size="lg" variant="secondary" onClick={() => window.open("mailto:support@qr2layer.com")}>
                Contact The Team
              </MagneticButton>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}


