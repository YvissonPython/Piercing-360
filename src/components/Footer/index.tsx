import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

export const Footer = () => {
  return (
    <footer className="bg-brand-blue border-t border-white/5 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-tight mb-8">
              Chegou o momento de decidir onde sua empresa estará nos próximos meses.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a href="#oferta" className="button-primary !px-12 !py-6 text-lg inline-flex items-center gap-4 group">
              Quero entrar para o Growth Mindset
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-white/5">
          <div className="text-center md:text-left">
            <h3 className="font-serif font-black text-4xl mb-2 italic gold-gradient-text">JUST DO IT.</h3>
            <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-bold max-w-sm">
              Pare de esperar o momento perfeito. Comece a construir o negócio que você merece hoje.
            </p>
          </div>
          
          <div className="flex gap-10">
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-white transition-colors">Suporte</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-white transition-colors">Política</a>
          </div>
        </div>
        
        <div className="mt-16 text-center text-[9px] uppercase tracking-[0.5em] text-white/10 font-bold">
          &copy; 2024 GROWTH MINDSET &bull; TODOS OS DIREITOS RESERVADOS
        </div>
      </div>
    </footer>
  );
};
