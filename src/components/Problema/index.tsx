import React from 'react';
import { X } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { FadeIn } from '../ui/FadeIn';

export const Problema = () => {
  return (
    <section className="section-container text-center">
      <SectionTitle 
        tag="O Despertar" 
        title="O problema não é" 
        highlight="sua técnica." 
      />
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 mt-16">
        {[
          "Trabalha muito e fatura pouco",
          "Vive apagando incêndios",
          "Não consegue agenda cheia",
          "Não possui estratégia clara",
          "Depende da sorte para crescer",
          "Insegurança no posicionamento"
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.05} className="glass-card p-6 flex items-center gap-4 text-left border-l-4 border-l-red-500/50">
            <X className="w-5 h-5 text-red-500 shrink-0" />
            <span className="text-white/60 font-light">{item}</span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
