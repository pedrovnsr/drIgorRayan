import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Mariana S.',
    age: '34 anos',
    initials: 'MS',
    color: 'from-rose-400 to-pink-600',
    stars: 5,
    text: 'Tentei emagrecer por anos sem sucesso. Em 3 meses com o Dr. Igor e o Protocolo IR, perdi 14kg de forma saudável e sustentável. Pela primeira vez me sinto no controle da minha saúde.',
    result: '−14kg em 3 meses',
  },
  {
    name: 'Ricardo M.',
    age: '42 anos',
    initials: 'RM',
    color: 'from-blue-400 to-indigo-600',
    stars: 5,
    text: 'A reposição hormonal mudou completamente minha qualidade de vida. Energia que não tinha há anos, disposição para treinar e uma clareza mental impressionante. O Dr. Igor entende de gente.',
    result: 'Qualidade de vida restaurada',
  },
  {
    name: 'Carla F.',
    age: '38 anos',
    initials: 'CF',
    color: 'from-emerald-400 to-teal-600',
    stars: 5,
    text: 'O Endolaser junto com o acompanhamento nutricional foi transformador. Perdi medidas que eu achava que nunca sairia. O atendimento é extremamente personalizado e humanizado.',
    result: '−12cm no abdômen',
  },
  {
    name: 'Fernando A.',
    age: '51 anos',
    initials: 'FA',
    color: 'from-amber-400 to-orange-600',
    stars: 5,
    text: 'Cheguei com cansaço crônico, ganho de peso e sem qualidade de vida. Hoje, após 6 meses, estou irreconhecível — para melhor. A abordagem do Dr. Igor é completa e muito acima do padrão.',
    result: '6 meses de transformação total',
  },
  {
    name: 'Juliana P.',
    age: '29 anos',
    initials: 'JP',
    color: 'from-purple-400 to-violet-600',
    stars: 5,
    text: 'Nunca havia encontrado um médico que olhasse para o meu contexto de vida de forma tão completa. O Dr. Igor não só me ajudou a emagrecer, mas a entender meu corpo de verdade.',
    result: 'Autoconhecimento + resultado',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState('next')

  const go = useCallback((dir) => {
    if (isAnimating) return
    setDirection(dir)
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent((prev) =>
        dir === 'next'
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length
      )
      setIsAnimating(false)
    }, 250)
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(() => go('next'), 6000)
    return () => clearInterval(interval)
  }, [go])

  const t = testimonials[current]

  return (
    <section id="depoimentos" className="py-28 md:py-36 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] bg-gold-500/3 rounded-full blur-[130px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="section-reveal text-center mb-16">
          <span className="text-gold-400 font-body text-xs tracking-widest uppercase font-medium">
            Resultados reais
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-dark-100 mt-4 leading-tight">
            Pacientes que se{' '}
            <em className="text-gradient not-italic">transformaram</em>
          </h2>
        </div>

        {/* Slider */}
        <div className="section-reveal">
          <div
            className={`glass rounded-3xl p-8 md:p-12 transition-all duration-250 ${
              isAnimating
                ? direction === 'next'
                  ? 'opacity-0 translate-x-4'
                  : 'opacity-0 -translate-x-4'
                : 'opacity-100 translate-x-0'
            }`}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} size={16} className="text-gold-400 fill-gold-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-display text-xl md:text-2xl text-dark-200 leading-relaxed font-light italic mb-8">
              "{t.text}"
            </blockquote>

            {/* Result badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              <span className="text-gold-300 text-xs font-body font-medium">{t.result}</span>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                <span className="text-white font-body font-semibold text-sm">{t.initials}</span>
              </div>
              <div>
                <p className="font-body font-semibold text-dark-100 text-base">{t.name}</p>
                <p className="font-body text-dark-500 text-sm">{t.age} · Paciente</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (i !== current) {
                      setDirection(i > current ? 'next' : 'prev')
                      setIsAnimating(true)
                      setTimeout(() => {
                        setCurrent(i)
                        setIsAnimating(false)
                      }, 250)
                    }
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 h-2 bg-gold-400' : 'w-2 h-2 bg-dark-700 hover:bg-dark-500'
                  }`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => go('prev')}
                className="w-11 h-11 rounded-full glass-light hover:border-gold-500/30 flex items-center justify-center text-dark-400 hover:text-gold-400 transition-all duration-300"
                aria-label="Anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => go('next')}
                className="w-11 h-11 rounded-full glass-light hover:border-gold-500/30 flex items-center justify-center text-dark-400 hover:text-gold-400 transition-all duration-300"
                aria-label="Próximo"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
