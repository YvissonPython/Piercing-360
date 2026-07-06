import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn>
            <span className="inline-block border border-white/10 bg-white/5 px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-light mb-8">
              Movimento Nacional de Crescimento
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.9] tracking-tighter mb-8">
              Você não precisa trabalhar mais.<br/>
              <span className="italic font-light gold-gradient-text">Precisa crescer</span> da maneira certa.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed mb-12 max-w-[600px]">
              Profissionais do Furo Humanizado de diferentes estados já descobriram que crescer não depende apenas da técnica. Depende de estratégia, posicionamento e mentalidade.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href="#oferta" className="button-primary w-full sm:w-auto flex items-center justify-center gap-3 group">
                Quero fazer parte do Growth Mindset
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5
                  }
                }
              }}
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {[
                "Método validado",
                "Comunidade exclusiva",
                "Acompanhamento estratégico",
                "Crescimento previsível"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 font-bold"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} y={40} className="relative">
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
              alt="James - Mentor Growth Mindset" 
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent"></div>
            
            {/* Overlay Professionals */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-center gap-4">
              {[
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1567532939604-b6b5b0ad2f01?q=80&w=100&auto=format&fit=crop"
              ].map((src, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-gold overflow-hidden shadow-xl transform hover:-translate-y-1 transition-transform">
                  <img src={src} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};
