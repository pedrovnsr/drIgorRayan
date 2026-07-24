export default function Story() {
  return (
    <section className="py-24 md:py-32 bg-dark-950 relative overflow-hidden border-b border-white/5">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center section-reveal">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-100 leading-tight mb-12">
          Muito além de tratar o corpo.<br />
          <em className="text-gradient not-italic mt-2 block">Eu transformo histórias.</em>
        </h2>
        
        <div className="space-y-8 text-dark-300 font-body text-lg md:text-xl font-light leading-relaxed">
          <p className="leading-loose">
            Nem todo paciente chega até mim por estética.<br />
            A maioria chega cansado.<br />
            Cansado de tentar…<br />
            Cansado de começar e não conseguir continuar…<br />
            Cansado de olhar no espelho e não se reconhecer.
          </p>
          
          <p className="font-medium text-gold-400 text-xl md:text-2xl py-2">
            E é exatamente aí que meu trabalho começa.
          </p>
          
          <p>
            Sou médico que atuo na área da nutrologia e estética, empresário e criador de protocolos próprios que unem ciência, estratégia e experiência real de consultório. Ao longo dos anos, construí clínicas, desenvolvi métodos e acompanhei de perto centenas de transformações físicas, emocionais e de vida.
          </p>
        </div>
      </div>
    </section>
  )
}
