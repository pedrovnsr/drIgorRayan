import { MessageCircle, ArrowRight, HelpCircle, MapPin } from 'lucide-react'

const LINK_AGENDAR = 'https://wa.me/5588997197561?text=Olá%20Dr.%20Igor%2C%20gostaria%20de%20agendar%20uma%20consulta.'
const LINK_DUVIDA = 'https://wa.me/5587981307483?text=Olá%2C%20já%20sou%20paciente%20e%20gostaria%20de%20tirar%20uma%20dúvida.'
const LINK_CLINIMASTER = 'https://wa.me/5588993492054?text=Olá%2C%20gostaria%20de%20marcar%20uma%20consulta%20na%20Clinimaster%20Cariri.'

export default function CTA() {
  return (
    <section className="py-28 md:py-36 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-600/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gold-500/6 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="section-reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold-500/20 text-gold-400 text-xs font-body font-medium tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            Se você chegou até aqui, não foi por acaso
          </span>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6">
            <span className="text-dark-100">Está pronto para</span>
            <br />
            <em className="text-gradient not-italic">mudar de verdade?</em>
          </h2>

          <p className="text-dark-400 font-body text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto mb-4">
            Talvez você já tenha tentado sozinho. Talvez já tenha começado e parado várias vezes.
            Ou talvez esteja no momento certo de mudar de verdade.
          </p>
          <p className="text-dark-300 font-body text-xl font-light mb-12">
            Se for isso… <span className="text-gold-300 font-medium">Eu posso te ajudar.</span>
          </p>

          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <a
              href={LINK_AGENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-dark-950 font-body font-semibold text-base transition-all duration-300 shadow-xl shadow-gold-500/30 hover:shadow-gold-400/40 hover:scale-105 active:scale-95"
            >
              <MessageCircle size={20} />
              Agendar Minha Consulta
              <ArrowRight size={16} />
            </a>
            
            <a
              href={LINK_DUVIDA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 rounded-full border border-gold-500/30 bg-dark-900/50 hover:bg-dark-800 text-gold-300 font-body font-medium text-sm transition-all duration-300 hover:border-gold-500/60"
            >
              <HelpCircle size={18} />
              Já é paciente e quer tirar alguma dúvida?
            </a>

            <a
              href={LINK_CLINIMASTER}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 rounded-full border border-gold-500/30 bg-dark-900/50 hover:bg-dark-800 text-gold-300 font-body font-medium text-sm transition-all duration-300 hover:border-gold-500/60"
            >
              <MapPin size={18} />
              Marcar consulta na Clinimaster Cariri
            </a>
          </div>

          <p className="mt-8 text-dark-600 font-body text-sm">
            Atendimento pelo WhatsApp · Resposta rápida
          </p>
        </div>
      </div>
    </section>
  )
}
