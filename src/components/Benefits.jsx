import { Activity, Brain, Shield, Target, TrendingUp, Users } from 'lucide-react'

const benefits = [
  {
    icon: Target,
    title: 'Avaliação Completa',
    desc: 'Análise profunda do seu estilo de vida, histórico clínico e objetivos para um diagnóstico preciso e individualizado.',
  },
  {
    icon: Brain,
    title: 'Ciência Atual',
    desc: 'Protocolos baseados nas mais recentes evidências científicas, atualizados constantemente através de congressos e pesquisas.',
  },
  {
    icon: Activity,
    title: 'Análise Metabólica',
    desc: 'Avaliação completa do seu metabolismo, hormônios e composição corporal para entender o que realmente está acontecendo.',
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    desc: 'Tratamentos seguros, éticos e acompanhados de perto. Cada protocolo é calculado com precisão para o seu perfil.',
  },
  {
    icon: TrendingUp,
    title: 'Resultados Duradouros',
    desc: 'Não buscamos resultados rápidos que não duram. Construímos um novo estilo de vida que se mantém a longo prazo.',
  },
  {
    icon: Users,
    title: 'Acompanhamento Próximo',
    desc: 'Você não fica sozinho no processo. Acompanhamento contínuo para ajustar, evoluir e garantir os melhores resultados.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-28 md:py-36 bg-dark-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="section-reveal text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-400 font-body text-xs tracking-widest uppercase font-medium">
            Por que escolher o Dr. Igor
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-dark-100 mt-4 leading-tight">
            Enquanto muitos tratam sintomas,{' '}
            <em className="text-gradient not-italic">eu trato o contexto</em>
          </h2>
          <p className="mt-6 text-dark-400 font-body text-lg leading-relaxed font-light">
            Cada paciente é único. Por isso cada protocolo é único. Nada genérico. Nada superficial.
            Tudo pensado para funcionar na vida real.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="section-reveal group glass-light rounded-2xl p-7 hover:border-gold-500/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5 group-hover:bg-gold-500/15 transition-colors duration-300">
                  <Icon size={20} className="text-gold-400" />
                </div>
                <h3 className="font-body font-semibold text-dark-100 text-base mb-2.5">{item.title}</h3>
                <p className="font-body text-dark-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
