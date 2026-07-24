import { CheckCircle2 } from 'lucide-react'

export default function Mission() {
  return (
    <>
      {/* SECTION 1 */}
      <section className="py-24 md:py-32 bg-dark-950 relative border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center section-reveal">
          <h2 className="text-gold-400 font-body text-xs tracking-widest uppercase font-medium mb-8">
            Minha missão
          </h2>
          <div className="space-y-2 text-dark-300 font-body text-xl md:text-2xl font-light leading-relaxed mb-10">
            <p>Não é só te fazer emagrecer.</p>
            <p>Não é só melhorar exames.</p>
            <p>Não é só entregar estética.</p>
          </div>
          <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-semibold text-dark-100 leading-tight">
            <em className="text-gradient not-italic">É fazer você viver na sua melhor versão com consistência, autonomia e resultado de verdade.</em>
          </h3>
        </div>
      </section>


      {/* SECTION 3 */}
      <section className="py-24 md:py-32 bg-dark-950 relative border-b border-white/5">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center section-reveal relative">
          <h2 className="text-gold-400 font-body text-xs tracking-widest uppercase font-medium mb-8">
            Autoridade construída na prática
          </h2>
          
          <div className="text-dark-300 font-body text-lg md:text-xl font-light leading-relaxed mb-12 space-y-6">
            <p>
              Minha atuação vai além do consultório. Participo de congressos nacionais, cursos de aperfeiçoamento e estou em constante atualização científica além disso levo para minhas clínicas o que há de mais atual em nutrologia e estética.
            </p>
            <p>
              Mas o que mais me orgulha não são os títulos.
            </p>
          </div>
          
          <div className="space-y-4 font-display text-2xl md:text-3xl font-semibold text-dark-100 leading-tight">
            <p>São os <span className="text-gold-400">resultados.</span></p>
            <p>São os pacientes que <span className="text-gold-400">voltam a se reconhecer.</span></p>
            <p>São os que <span className="text-gold-400">recuperam a confiança.</span></p>
            <div className="pt-8">
              <p className="text-3xl md:text-4xl lg:text-5xl text-gradient">
                São os que entendem que cuidar da saúde não é um projeto…<br className="hidden md:block" /> É um novo estilo de vida.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
