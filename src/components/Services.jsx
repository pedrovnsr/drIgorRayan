import { useState } from 'react'
import { ChevronDown, MessageCircle, Zap, Flame, Activity, Shield } from 'lucide-react'

const WA_LINK = 'https://wa.me/5587981307483?text=Olá%20Dr.%20Igor%2C%20gostaria%20de%20agendar%20uma%20consulta.'

const healthServices = [
  {
    id: 'protocolo-ir',
    icon: Flame,
    tag: 'Emagrecimento',
    title: 'Protocolo IR de Emagrecimento',
    subtitle: 'O foco não é apenas perder peso, é reprogramar seu metabolismo.',
    description:
      'Um método exclusivo desenvolvido ao longo dos anos de prática clínica, baseado em artigos científicos recentes e em resultados reais. Este protocolo vai muito além de "dietas prontas". Cada decisão é tomada com base no seu organismo, estilo de vida e objetivo final, integrando ajustes hormonais, estratégias nutricionais e uso criterioso de medicações quando indicado.',
    highlights: ['Avaliação metabólica completa', 'Ajuste hormonal', 'Correção nutricional', 'Acompanhamento contínuo'],
    gradient: 'from-orange-500/10 to-gold-500/5',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
  {
    id: 'hipertrofia',
    icon: Activity,
    tag: 'Hipertrofia',
    title: 'Protocolo IR de Hipertrofia Muscular',
    subtitle: 'Aqui, não existe "achismo". Existe método.',
    description:
      'Desenvolvido para pacientes que desejam ganhar massa muscular com estratégia, eficiência e respaldo científico. A partir de uma análise completa da sua rotina e exames, estruturamos um plano individualizado que otimiza o ganho de massa, a redução de gordura simultânea e a performance física. O objetivo é fazer seu corpo evoluir de forma inteligente, respeitando sua fisiologia.',
    highlights: ['Avaliação da rotina de treinos', 'Ajustes de suplementação', 'Avaliação por bioimpedância', 'Análise de exames'],
    gradient: 'from-blue-500/10 to-gold-500/5',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  }
]

const aestheticServices = [
  {
    id: 'endolaser',
    icon: Zap,
    tag: 'Estética Corporal',
    title: 'Endolaser',
    subtitle: 'Mais do que estética, uma transformação completa.',
    description:
      'Procedimento moderno e minimamente invasivo para tratar gordura localizada e flacidez de forma eficaz. O laser é aplicado sob a pele através de uma microfibra, promovendo a quebra das células de gordura, estímulo intenso de colágeno e retração da pele. Ideal para quem busca definição corporal sem procedimentos agressivos, com recuperação rápida e resultados naturais.',
    highlights: ['Procedimento ambulatorial', 'Praticamente indolor', 'Recuperação rápida', 'Resultados progressivos'],
    gradient: 'from-purple-500/10 to-gold-500/5',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    id: 'hormonal',
    icon: Shield,
    tag: 'Hormonologia',
    title: 'Reposição Hormonal com Implantes',
    subtitle: 'Precisão, segurança e personalização.',
    description:
      'Há mais de 10 anos atuando com implantes hormonais. A reposição hormonal é um pilar da saúde, longevidade e qualidade de vida. Os implantes subcutâneos liberam hormônios de forma contínua e controlada, evitando picos e quedas. Uma abordagem segura e eficaz para recuperar energia, libido, qualidade do sono e composição corporal.',
    highlights: ['Liberação hormonal contínua', 'Mais energia e disposição', 'Recuperação da libido', 'Segurança e individualização'],
    extraContent: {
      paragraphs: [
        'Mulheres na menopausa voltam a se sentir vivas, equilibradas e confiantes.',
        'Homens com baixa testosterona retomam sua performance, vitalidade e bem-estar.'
      ],
      emphasisTitle: 'Segurança e individualização:',
      emphasisSubtitle: 'Cada implante é indicado com base em:',
      topics: [
        'Avaliação clínica detalhada',
        'Exames laboratoriais completos',
        'Objetivos individuais do paciente'
      ],
      finalText: 'Aqui, a reposição hormonal não é padronizada ela é precisa, segura e personalizada.'
    },
    gradient: 'from-emerald-500/10 to-gold-500/5',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  }
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

          {service.extraContent && (
            <div className="mb-8 border-t border-white/5 pt-6">
              {service.extraContent.paragraphs.map((p, i) => (
                <p key={i} className="text-dark-300 font-body text-base leading-relaxed font-light mb-4">
                  {p}
                </p>
              ))}
              
              <div className="mt-6 mb-6">
                <p className="text-gold-400 font-medium text-base mb-1">{service.extraContent.emphasisTitle}</p>
                <p className="text-dark-300 text-base font-light mb-4">{service.extraContent.emphasisSubtitle}</p>
                <ul className="space-y-3 mb-6 pl-1">
                  {service.extraContent.topics.map((t, i) => (
                     <li key={i} className="flex items-center gap-2.5">
                       <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                       <span className="text-dark-300 text-sm font-body">{t}</span>
                     </li>
                  ))}
                </ul>
              </div>
              
              <p className="text-dark-100 font-medium font-body text-base italic border-l-2 border-gold-500/40 pl-4 py-1">
                {service.extraContent.finalText}
              </p>
            </div>
          )}

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
            No consultório, cada paciente é avaliado de forma individualizada, com base em ciência atual, experiência clínica e resultados reais. Meu objetivo não é apenas tratar é transformar o seu corpo e a sua saúde de forma estratégica, segura e duradoura.
          </p>
        </div>

        {/* Accordion */}
        <div className="section-reveal flex flex-col gap-4">
          {healthServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isOpen={openId === service.id}
              onToggle={() => setOpenId(openId === service.id ? null : service.id)}
            />
          ))}

          <div className="mt-12 mb-6 text-center section-reveal">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-dark-100 mb-3">
              Estética Corporal
            </h3>
            <p className="text-dark-300 font-body text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto">
              A estética corporal no consultório é tratada com a mesma seriedade da saúde: com tecnologia, precisão e segurança.<br className="hidden md:block"/>
              <span className="mt-2 block text-dark-400">Entre os principais procedimentos, destaca-se:</span>
            </p>
          </div>

          {aestheticServices.map((service) => (
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
