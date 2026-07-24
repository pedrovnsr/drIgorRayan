export default function Signature() {
  return (
    <section className="py-24 md:py-32 bg-dark-950 relative overflow-hidden border-t border-white/5">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center section-reveal">
        <h2 className="text-gold-400 font-body text-sm md:text-base tracking-widest uppercase font-medium mb-8">
          Dr. Igor Rayan
        </h2>
        <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-dark-100 leading-tight">
          Transformando disciplina em resultado.<br className="hidden md:block" />
          <em className="text-gradient not-italic mt-4 block">E resultado em uma nova identidade.</em>
        </h3>
      </div>
    </section>
  )
}
