"use client"

export function ScrollingQR() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute bottom-20 right-2 md:bottom-24 md:right-12" style={{ width: "190px", height: "190px" }}>
        <div className="absolute inset-0 -z-10 rounded-[2.75rem] bg-black/10 blur-[70px]" />
        <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white shadow-[0_28px_60px_rgba(0,0,0,0.32)] p-4">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https%3A%2F%2Fqr2layer.com"
            alt="QR code linking to qr2layer.com"
            className="block h-full w-full rounded-[1.5rem] bg-white object-contain opacity-95"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
