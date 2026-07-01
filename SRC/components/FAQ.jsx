import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Como funciona a primeira consulta?',
    a: 'Na primeira consulta, realizamos uma avaliação completa do seu histórico de saúde, exames, estilo de vida, alimentação e objetivos. Com base nisso, montamos um protocolo personalizado e definimos o melhor caminho para você.',
  },
  {
    q: 'O Protocolo IR é indicado para qualquer pessoa?',
    a: 'O Protocolo IR é indicado para pessoas que desejam emagrecer de forma sustentável, especialmente aquelas com resistência à insulina, dificuldade de perder peso com métodos convencionais ou histórico de "efeito sanfona". A indicação é feita após avaliação individual.',
  },
  {
    q: 'A reposição hormonal com implantes é segura?',
    a: 'Sim. A reposição hormonal com implantes subcutâneos é um método amplamente estudado e reconhecido pela Associação Brasileira de Hormonologia. Todo o processo é precedido de exames e avaliação clínica detalhada para garantir segurança e eficácia.',
  },
  {
    q: 'Quantas sessões de Endolaser são necessárias?',
    a: 'O número de sessões varia de acordo com o objetivo e o perfil de cada paciente. Em geral, os primeiros resultados são visíveis após as primeiras sessões, e o protocolo completo é definido na avaliação inicial.',
  },
  {
    q: 'Os resultados são duradouros?',
    a: 'Sim. Nosso foco é em resultados sustentáveis, não apenas temporários. Trabalhamos para que você incorpore novos hábitos e mantenha os resultados a longo prazo, com acompanhamento contínuo durante todo o processo.',
  },
  {
    q: 'Como posso agendar uma consulta?',
    a: 'Você pode agendar sua consulta diretamente pelo WhatsApp clicando em qualquer botão "Agendar Consulta" nesta página. Nossa equipe responderá rapidamente para encontrar o melhor horário para você.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`border-b transition-colors duration-300 ${isOpen ? 'border-gold-500/20' : 'border-white/5'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-gold-500 text-dark-950' : 'bg-white/5 text-dark-400 group-hover:bg-white/10'}`}>
          {isOpen ? <Minus size={12} /> : <Plus size={12} />}
        </div>
        <span className={`font-body font-medium text-base transition-colors duration-300 ${isOpen ? 'text-gold-300' : 'text-dark-200 group-hover:text-dark-100'}`}>
          {faq.q}
        </span>
      </button>

      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="pl-10 pb-6">
          <p className="text-dark-400 font-body text-sm leading-relaxed font-light">{faq.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-28 md:py-36 bg-dark-950 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold-500/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="section-reveal text-center mb-16">
          <span className="text-gold-400 font-body text-xs tracking-widest uppercase font-medium">
            Dúvidas frequentes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-dark-100 mt-4 leading-tight">
            Perguntas & Respostas
          </h2>
          <p className="mt-5 text-dark-400 font-body text-lg leading-relaxed font-light max-w-xl mx-auto">
            Tire suas principais dúvidas antes de agendar sua consulta.
          </p>
        </div>

        {/* FAQ list */}
        <div className="section-reveal glass rounded-2xl p-6 md:p-10">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
