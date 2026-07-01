import { MessageCircle, Instagram, Heart } from 'lucide-react'
import logoImg from './logo.png'

const WA_LINK = 'https://wa.me/5588997197561?text=Olá%20Dr.%20Igor%2C%20gostaria%20de%20agendar%20uma%20consulta.'
const IG_LINK = 'https://instagram.com/drigorayan'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-950 border-t border-white/5 relative">
      <div className="gold-line opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <img src={logoImg} alt="Dr. Igor Rayan Logo" className="h-14 md:h-16 mb-6 object-contain" />
            <p className="text-dark-500 font-body text-sm leading-relaxed font-light max-w-xs">
              Transformando disciplina em resultado. E resultado em uma nova identidade.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <p className="font-body font-semibold text-dark-300 text-sm tracking-wider uppercase mb-5">Serviços</p>
            <ul className="space-y-3">
              {[
                'Protocolo IR de Emagrecimento',
                'Endolaser',
                'Reposição Hormonal com Implantes',
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-dark-500 hover:text-gold-400 font-body text-sm transition-colors duration-200 font-light"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="font-body font-semibold text-dark-300 text-sm tracking-wider uppercase mb-5">Contato</p>
            <div className="flex flex-col gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dark-400 hover:text-gold-400 transition-colors duration-200 group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 group-hover:bg-gold-500/10 flex items-center justify-center transition-colors duration-300">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <p className="text-xs text-dark-600 font-body uppercase tracking-wider">WhatsApp</p>
                  <p className="text-sm font-body">(88) 99719-7561</p>
                </div>
              </a>

              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dark-400 hover:text-gold-400 transition-colors duration-200 group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 group-hover:bg-gold-500/10 flex items-center justify-center transition-colors duration-300">
                  <Instagram size={16} />
                </div>
                <div>
                  <p className="text-xs text-dark-600 font-body uppercase tracking-wider">Instagram</p>
                  <p className="text-sm font-body">@drigorayan</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="gold-line opacity-10 my-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-700 font-body text-xs font-light">
            © {year} Dr. Igor Rayan. Todos os direitos reservados.
          </p>
          <p className="text-dark-700 font-body text-xs flex items-center gap-1.5 font-light">
            Feito com <Heart size={11} className="text-gold-600 fill-gold-600" /> para transformar vidas
          </p>
        </div>
      </div>
    </footer>
  )
}
