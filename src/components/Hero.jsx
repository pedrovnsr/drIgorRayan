import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import heroBg from './hero-bg.jpg';
import logoImg from './logo.png';
import imagemMobile from './imagem-mobile.jpg';

const WA_LINK = 'https://wa.me/5587981307483?text=Olá%20Dr.%20Igor%2C%20gostaria%20de%20agendar%20uma%20consulta.';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark overlay film to improve text readability */}
      <div className="absolute inset-0 z-0 bg-dark-950/70 lg:bg-dark-950/40" />

      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gold-500/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold-500/5 blur-[100px]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 lg:px-20 pb-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Left content */}
          <div className="flex flex-col items-start text-left">
            {/* Logo */}
            <div className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <img src={logoImg} alt="Dr. Igor Rayan Logo" className="h-16 sm:h-20 md:h-24 mb-6 lg:mb-10 object-contain drop-shadow-lg" />
            </div>

            {/* Mobile Image */}
            <div className={`block lg:hidden w-full transition-all duration-700 delay-150 mb-8 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <img src={imagemMobile} alt="Dr. Igor" className="w-full max-w-sm h-auto rounded-2xl shadow-2xl object-cover" />
            </div>

            {/* Badge */}
            <div
              className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold-500/20 text-gold-400 text-xs font-body font-medium tracking-widest uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                Nutrologia · Hormonologia · Estética
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight max-w-5xl transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span className="text-dark-100">Transforme seu corpo.</span>
              <br />
              <em className="text-gradient not-italic">Reinvente sua vida.</em>
            </h1>

            {/* Sub */}
            <p
              className={`mt-8 text-dark-400 font-body text-lg md:text-xl max-w-2xl leading-relaxed font-light transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Protocolos personalizados em nutrologia e hormonologia para quem quer
              <span className="text-dark-200"> resultados reais</span>, com ciência e acompanhamento estratégico.
            </p>

            {/* CTAs */}
            <div
              className={`mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-1000 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-dark-950 font-body font-semibold text-base transition-all duration-300 shadow-xl shadow-gold-500/25 hover:shadow-gold-400/35 hover:scale-105 active:scale-95"
              >
                <MessageCircle size={18} />
                Agendar Consulta Agora
              </a>
              <a
                href="#servicos"
                className="flex items-center gap-2 px-8 py-4 rounded-full glass-light hover:border-gold-500/30 text-dark-300 hover:text-gold-300 font-body font-medium text-base transition-all duration-300"
              >
                Conhecer Serviços
              </a>
            </div>

            {/* Stats */}
            <div
              className={`mt-20 flex flex-wrap items-center justify-start gap-8 md:gap-16 transition-all duration-1000 delay-[900ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {[
                { value: 'ABH', label: 'Associação Brasileira\nde Hormonologia' },
                { value: '100%', label: 'Protocolos\nPersonalizados' },
                { value: '3', label: 'Serviços\nEspecializados' },
              ].map((stat) => (
                <div key={stat.value} className="text-left">
                  <p className="font-display text-3xl font-semibold text-gradient">{stat.value}</p>
                  <p className="text-xs text-dark-500 font-body tracking-wide mt-1 whitespace-pre-line leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}