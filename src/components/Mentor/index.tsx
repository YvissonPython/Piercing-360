import React from 'react';
import { Users } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { FadeIn } from '../ui/FadeIn';

export const Mentor = () => {
  return (
    <section id="james" className="section-container">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <FadeIn x={-40}>
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-gold/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" 
              alt="James" 
              className="relative rounded-[2.5rem] w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </FadeIn>
        
        <div>
          <SectionTitle tag="O Mentor" title="Conheça" highlight="James" center={false} />
          <FadeIn delay={0.2}>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-6">
              Com anos de experiência transformando pequenos atendimentos em empresas lucrativas, James desenvolveu o método Growth Mindset para preencher a lacuna que as escolas de técnica ignoram.
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
              Sua missão é clara: desenvolver empresárias que desejam transformar seu atendimento em uma empresa sólida, lucrativa e escalável.
            </p>
            <div className="flex items-center gap-4 p-6 glass-card border-l-4 border-l-brand-gold">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-1">Impacto Global</p>
                <p className="font-bold text-white">+500 mentoradas em todo o Brasil</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
