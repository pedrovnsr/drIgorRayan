import { MessageCircle } from 'lucide-react'

const WA_LINK = 'https://wa.me/5588997197561?text=Olá%20Dr.%20Igor%2C%20gostaria%20de%20agendar%20uma%20consulta.'

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30 scale-110" />
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-2xl shadow-green-500/40 hover:shadow-green-400/50 transition-all duration-300 hover:scale-110 active:scale-95">
          <MessageCircle size={24} className="text-white" />
        </div>
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-dark-900 border border-white/10 text-dark-200 text-xs font-body font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          Falar no WhatsApp
        </div>
      </div>
    </a>
  )
}
