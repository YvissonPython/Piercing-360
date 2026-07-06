import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { CountdownTimer } from '../ui/CountdownTimer';

export const Oferta = () => {
  return (
    <section id="oferta" className="section-container">
      <div className="max-w-4xl mx-auto glass-card p-12 md:p-24 relative overflow-hidden border-2 border-brand-gold/20 shadow-[0_0_100px_rgba(212,175,55,0.05)]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[80px] rounded-full"></div>
        
        <div className="relative z-10 text-center mb-16">
          <span className="inline-block border border-brand-gold/50 text-brand-gold px-6 py-2 rounded-full text-[11px] uppercase tracking-[0.4em] font-bold mb-8">
            O Convite
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 italic">A Elite te aguarda</h2>
          <p className="text-white/50 text-lg font-light">Prepare-se para o próximo nível do seu negócio.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              { title: "Mentoria Direta", desc: "Acompanhamento estratégico com James." },
              { title: "Comunidade VIP", desc: "Rede de apoio nacional de alta performance." },
              { title: "Plano de Escala", desc: "Roadmap prático para o próximo nível." },
              { title: "Materiais Exclusivos", desc: "Checklists, planilhas e templates prontos." },
              { title: "Suporte Dedicado", desc: "Respostas para suas dúvidas reais." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 bg-brand-gold/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h5 className="font-bold text-white/90 text-sm">{item.title}</h5>
                  <p className="text-white/40 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 text-center relative overflow-hidden group/price">
            <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover/price:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <p className="text-white/40 text-sm uppercase tracking-widest font-bold mb-4">Investimento</p>
              <div className="text-[13px] text-white/30 line-through mb-1">De R$ 3.500</div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2 
                }}
                className="flex justify-center items-end gap-1 mb-2"
              >
                <span className="text-2xl font-bold text-brand-gold-light mb-2">R$</span>
                <span className="text-7xl font-serif font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">1.997</span>
              </motion.div>
              
              <p className="text-brand-gold text-xs uppercase tracking-widest font-bold mb-10">À vista ou 12x no cartão</p>
              
              <div className="mb-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-4">A oferta encerra em:</p>
                <CountdownTimer />
              </div>
              
              <a href="#" className="button-primary w-full text-center block !py-6 text-sm mb-6 relative overflow-hidden group/btn">
                <span className="relative z-10">Entrar para o Growth Mindset</span>
                <div className="absolute inset-0 bg-brand-gold opacity-0 group-hover/btn:opacity-10 transition-opacity"></div>
              </a>
              
              <div className="flex items-center justify-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
                <ShieldCheck className="w-4 h-4" />
                Compra 100% Segura
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
