import React from 'react';
import { FadeIn } from '../ui/FadeIn';

export const Manifesto = () => {
  return (
    <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1533749047139-189de3cf06d3?q=80&w=2000&auto=format&fit=crop" 
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue via-transparent to-brand-blue"></div>
      <div className="section-container relative z-10 text-center">
        <FadeIn>
          <h2 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-tight mb-8">
            Faturamento é métrica de vaidade.<br/>
            <span className="gold-gradient-text italic font-light">Lucro é liberdade.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
            Crescer significa construir um negócio saudável, sustentável e lucrativo. Não é sobre o quanto entra, mas sobre o quanto fica e a liberdade que isso proporciona para sua vida.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
