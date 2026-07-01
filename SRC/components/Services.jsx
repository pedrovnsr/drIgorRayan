import { useState } from 'react'
import { ChevronDown, MessageCircle, Zap, Flame, Activity } from 'lucide-react'

const WA_LINK = 'https://wa.me/5587981307483?text=Olá%20Dr.%20Igor%2C%20gostaria%20de%20agendar%20uma%20consulta.'

const services = [
  {
    id: 'protocolo-ir',
    icon: Flame,
    tag: 'Emagrecimento',
    title: 'Protocolo IR de Emagrecimento',
    subtitle: 'Resultado real. Método exclusivo.',
    description:
      'O Protocolo IR é um método exclusivo de emagrecimento desenvolvido com base na resistência à insulina e no comportamento metabólico de cada paciente. Diferente de dietas convencionais, este protocolo atua na raiz do problema, regulando hormônios, otimizando o metabolismo e promovendo perda de gordura de forma consistente e duradoura. Ideal para quem já tentou emagrecer e não conseguiu resultados sustentáveis.',
    highlights: ['Avaliação metabólica completa', 'Protocolo 100% personalizado', 'Acompanhamento contínuo', 'Resultados sustentáveis'],
    gradient: 'from-orange-500/10 to-gold-500/5',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
  {
    id: 'endolaser',
    icon: Zap,
    tag: 'Estética Corporal',
    title: 'Endolaser',
    subtitle: 'Tecnologia de ponta em estética corporal.',
    description:
      'O Endolaser é uma tecnologia moderna de estética corporal que atua na destruição de células de gordura localizada, melhora da flacidez e remodelamento corporal. Com laser de baixa frequência, o tratamento é não invasivo, seguro e com recuperação imediata. Resultados visíveis já nas primeiras sessões, com programa individualizado de acordo com os objetivos de cada paciente.',
    highlights: ['Não invasivo e seguro', 'Sem tempo de recuperação', 'Remodelamento corporal', 'Sessões personalizadas'],
    gradient: 'from-blue-500/10 to-gold-500/5',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    id: 'hormonal',
    icon: Activity,
    tag: 'Hormonologia',
    title: 'Reposição Hormonal com Implantes Subcutâneos',
    subtitle: 'Equilíbrio que transforma a vida.',
    description:
      'A reposição hormonal com implantes subcutâneos é uma das abordagens mais avançadas para restaurar o equilíbrio hormonal de forma estável e prolongada. Os implantes liberam hormônios de forma contínua, evitando os picos e vales comuns de outros métodos. Indicado para homens e mulheres que apresentam sintomas de deficiência hormonal como fadiga, ganho de peso, queda de libido, dificuldade de concentração e alterações de humor.',
    highlights: ['Liberação hormonal contínua', 'Associação Brasileira de Hormonologia', 'Para homens e mulheres', 'Duração prolongada'],
    gradient: 'from-purple-500/10 to-gold-500/5',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
]

function ServiceCard({ service, isOpen, onToggle }) {
  const Icon = service.icon

  return (
    <div
      className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
        isOpen
          ? 'border-gold-500/30 bg-gradient-to-br ' + service.gradient + ' shadow-xl shadow-gold-500/5'
          : 'border-white/5 glass-light hover:border-white/10'
      }`}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-5 p-6 md:p-8 text-left group"
        aria-expanded={isOpen}
      >
        <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'scale-110' : 'group-hover:scale-105'}`}>
          <Icon size={22} className={service.color} />
        </div>

        <div className="flex-1 min-w-0">
          <span className={`text-xs font-body font-medium tracking-widest uppercase ${service.color} mb-1 block`}>
            {service.tag}
          </span>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-dark-100 leading-tight">
            {service.title}
          </h3>
          <p className="text-dark-400 text-sm font-body mt-1 font-light">{service.subtitle}</p>
        </div>

        <ChevronDown
          size={20}
          className={`text-dark-400 flex-shrink-0 transition-transform duration-400 ${isOpen ? 'rotate-180 text-gold-400' : ''}`}
        />
      </button>

      {/* Content */}
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="px-6 md:px-8 pb-8">
          <div className="gold-line mb-7 opacity-30" />

          <p className="text-dark-300 font-body text-base leading-relaxed font-light mb-7">
            {service.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {service.highlights.map((h) => (
              <div key={h} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                <span className="text-dark-300 text-sm font-body">{h}</span>
              </div>
            ))}
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-dark-950 font-body font-semibold text-sm transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-400/30 hover:scale-105 active:scale-95"
          >
            <MessageCircle size={16} />
            Agendar Consulta
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const [openId, setOpenId] = useState('protocolo-ir')

  return (
    <section id="servicos" className="py-28 md:py-36 bg-dark-950 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/3 rounded-full blur-[130px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="section-reveal text-center mb-16">
          <span className="text-gold-400 font-body text-xs tracking-widest uppercase font-medium">
            Serviços especializados
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-dark-100 mt-4 leading-tight">
            Tratamentos que{' '}
            <em className="text-gradient not-italic">transformam</em>
          </h2>
          <p className="mt-5 text-dark-400 font-body text-lg leading-relaxed font-light max-w-2xl mx-auto">
            Cada serviço é oferecido com protocolo personalizado, acompanhamento próximo e foco em resultados reais e duradouros.
          </p>
        </div>

        {/* Accordion */}
        <div className="section-reveal flex flex-col gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isOpen={openId === service.id}
              onToggle={() => setOpenId(openId === service.id ? null : service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
