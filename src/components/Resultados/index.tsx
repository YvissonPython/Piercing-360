import React from 'react';
import { Quote } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { FadeIn } from '../ui/FadeIn';
import { PROFESSIONALS } from '../../constants';

export const Resultados = () => {
  return (
    <section id="resultados" className="bg-white/5 py-32 border-y border-white/5">
      <div className="section-container">
        <SectionTitle 
          tag="Resultados Reais" 
          title="O crescimento deixa" 
          highlight="rastros." 
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {PROFESSIONALS.map((prof, i) => (
            <FadeIn 
              key={i} 
              delay={i * 0.1}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(181, 159, 91, 0.15)",
                borderColor: "rgba(181, 159, 91, 0.3)"
              }}
              className="flex h-full"
            >
              <div className="glass-card group transition-all duration-500 overflow-hidden flex flex-col h-full cursor-default">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={prof.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-blue/40"></div>
                  <div className="absolute bottom-4 left-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-light bg-brand-blue/80 px-3 py-1 rounded-full border border-white/10">
                      {prof.location}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex gap-1 text-brand-gold mb-4">
                    {[...Array(5)].map((_, i) => <Quote key={i} className="w-4 h-4 fill-current rotate-180" />)}
                  </div>
                  <p className="text-white/70 italic font-light leading-relaxed mb-8">"{prof.quote}"</p>
                  <div className="mt-auto">
                    <div className="h-[1px] w-12 bg-brand-gold mb-4"></div>
                    <h4 className="font-serif text-2xl font-bold mb-1">{prof.name}</h4>
                    <div className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Meta: {prof.goal}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
