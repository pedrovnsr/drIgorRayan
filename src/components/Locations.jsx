import { useState } from 'react'
import { MapPin } from 'lucide-react'

const locations = [
  {
    id: 'salgueiro',
    name: 'Salgueiro - PE',
    title: 'Salgueiro Shopping',
    info: 'Salgueiro Shopping está localizado na Avenida Antônio Angelim, nº 570, no bairro Santo Antônio, CEP 56000-000, em Salgueiro (PE), piso superior.',
    mapSrc: 'https://www.google.com/maps?q=Salgueiro+Shopping,+Avenida+Antônio+Angelim,+570+-+Santo+Antônio,+Salgueiro+-+PE&output=embed',
    link: 'https://www.google.com/maps/place/Salgueiro+Shopping/@-8.0729808,-39.1267429,17z'
  },
  {
    id: 'juazeiro',
    name: 'Juazeiro do Norte - CE',
    title: 'Pátio Cariri Corporate',
    info: 'O Pátio Cariri (que engloba o Pátio Cariri Corporate, o Residence e o Open Mall) está localizado na Rua Catulo da Paixão Cearense, 175 - bairro Triângulo, Juazeiro do Norte - CE. O complexo fica situado perto do Cariri Garden Shopping, sala 907.',
    mapSrc: 'https://www.google.com/maps?q=Pátio+Cariri+Corporate,+Rua+Catulo+da+Paixão+Cearense,+175+-+Triângulo,+Juazeiro+do+Norte+-+CE&output=embed',
    link: 'https://www.google.com/maps/place/P%C3%A1tio+Cariri+Corporate'
  }
]

export default function Locations() {
  const [activeTab, setActiveTab] = useState(locations[0].id)
  const activeLocation = locations.find((loc) => loc.id === activeTab)

  return (
    <section id="localizacao" className="py-24 md:py-32 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="section-reveal text-center mb-16">
          <span className="text-gold-400 font-body text-xs tracking-widest uppercase font-medium">
            Onde Atendemos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-dark-100 mt-4 leading-tight">
            Nossas <em className="text-gradient not-italic">Localizações</em>
          </h2>
        </div>

        <div className="section-reveal bg-dark-900/50 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-xl">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveTab(loc.id)}
                className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-body font-medium text-sm transition-all duration-300 ${
                  activeTab === loc.id
                    ? 'bg-gold-500 text-dark-950 shadow-lg shadow-gold-500/20'
                    : 'bg-white/5 text-dark-400 hover:bg-white/10 hover:text-dark-200'
                }`}
              >
                <MapPin size={18} className={activeTab === loc.id ? 'text-dark-950' : 'text-gold-400'} />
                {loc.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Info */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="glass p-8 rounded-2xl h-full flex flex-col justify-center border-l-2 border-l-gold-500">
                <h3 className="font-display text-2xl font-semibold text-gold-300 mb-4">
                  {activeLocation.title}
                </h3>
                <p className="text-dark-300 font-body leading-relaxed font-light mb-8">
                  {activeLocation.info}
                </p>
                <a
                  href={activeLocation.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-body text-sm font-medium transition-colors"
                >
                  Abrir no Google Maps <MapPin size={14} />
                </a>
              </div>
            </div>

            {/* Map Frame */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-dark-800">
                <iframe
                  src={activeLocation.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 transition-opacity duration-500"
                  title={`Mapa de ${activeLocation.name}`}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
