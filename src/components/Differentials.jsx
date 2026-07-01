import { Award, BookOpen, HeartHandshake, Microscope } from 'lucide-react'

const steps = [
  {
    icon: Microscope,
    step: '01',
    title: 'Avaliação Estratégica',
    desc: 'Cada paciente passa por uma avaliação completa de estilo de vida, histórico de saúde, exames e objetivos. Nada é assumido, tudo é investigado.',
  },
  {
    icon: BookOpen,
    step: '02',
    title: 'Protocolos Personalizados',
    desc: 'Com base na avaliação, montamos um protocolo individualizado: emagrecimento, hipertrofia, reposição hormonal ou estética corporal.',
  },
  {
    icon: HeartHandshake,
    step: '03',
    title: 'Acompanhamento Contínuo',
    desc: 'O processo não termina na consulta. Acompanhamento próximo para ajustes, dúvidas e evolução constante do seu protocolo.',
  },
  {
    icon: Award,
    step: '04',
    title: 'Atualização Científica',
    desc: 'Participo de congressos nacionais e cursos de aperfeiçoamento para trazer o que há de mais atual em nutrologia e estética.',
  },
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-28 md:py-36 relative overflow-hidden bg-dark-950">
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[700px] h-[500px] bg-gold-500/4 rounded-full blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left text */}
          <div className="section-reveal">
            <span className="text-gold-400 font-body text-xs tracking-widest uppercase font-medium">
              Minha metodologia
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-dark-100 mt-4 mb-6 leading-tight">
              Um processo{' '}
              <em className="text-gradient not-italic">estratégico</em>{' '}
              e completo
            </h2>
            <p className="text-dark-400 font-body text-lg leading-relaxed font-light mb-6">
              Minha atuação vai além do consultório. Cada paciente que chega até mim passa por um processo que envolve ciência, experiência clínica e um acompanhamento próximo que faz toda a diferença.
            </p>
            <p className="text-dark-500 font-body text-base leading-relaxed font-light italic border-l-2 border-gold-500/40 pl-5">
              "O que mais me orgulha não são os títulos. São os pacientes que voltam a se reconhecer. São os que recuperam a confiança. São os que entendem que cuidar da saúde é um novo estilo de vida."
            </p>
            <p className="mt-4 text-gold-400 font-body text-sm font-medium">— Dr. Igor Rayan</p>
          </div>

          {/* Right steps */}
          <div className="section-reveal flex flex-col gap-6">
            {steps.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.step}
                  className="flex gap-5 group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Icon + line */}
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/15 transition-colors duration-300">
                      <Icon size={18} className="text-gold-400" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-gold-500/20 to-transparent mt-3" />
                    )}
                  </div>

                  <div className="pb-6 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-gold-500/50 font-body text-xs font-medium tracking-widest">{item.step}</span>
                      <h3 className="font-body font-semibold text-dark-100 text-base">{item.title}</h3>
                    </div>
                    <p className="text-dark-400 font-body text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
