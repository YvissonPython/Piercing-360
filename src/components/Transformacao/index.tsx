import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { FadeIn } from '../ui/FadeIn';
import { OUTCOMES } from '../../constants';

export const Transformacao = () => {
  return (
    <section className="section-container text-center">
      <SectionTitle 
        tag="Transformação" 
        title="O que muda quando" 
        highlight="você entra?" 
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {OUTCOMES.map((item, i) => (
          <FadeIn 
            key={i} 
            delay={i * 0.05} 
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(181, 159, 91, 0.2)",
              borderColor: "rgba(181, 159, 91, 0.4)"
            }}
            className="glass-card p-8 flex flex-col items-center justify-center gap-4 group hover:bg-white/[0.05] transition-all duration-300 cursor-default"
          >
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-500">
              <CheckCircle2 className="w-5 h-5 text-brand-gold group-hover:text-brand-blue" />
            </div>
            <span className="text-[11px] uppercase tracking-widest font-bold text-white/60 group-hover:text-white transition-colors">{item}</span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
