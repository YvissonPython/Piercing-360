import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from '../ui/SectionTitle';
import { METODO_STEPS } from '../../constants';

interface MetodoProps {
  metodoRef: React.RefObject<HTMLDivElement>;
  metodoY: any;
}

export const Metodo = ({ metodoRef, metodoY }: MetodoProps) => {
  return (
    <section id="metodo" ref={metodoRef} className="bg-white/5 py-40 relative overflow-hidden">
      <motion.div 
        style={{ y: metodoY }}
        className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"
      ></motion.div>
      
      <div className="section-container relative z-10">
        <SectionTitle 
          tag="A Estrutura" 
          title="O Método" 
          highlight="Growth Mindset" 
        />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-24"
        >
          {METODO_STEPS.map((step, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(181, 159, 91, 0.15)",
                borderColor: "rgba(181, 159, 91, 0.3)"
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-10 group cursor-default transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center border border-white/10 group-hover:border-brand-gold/50 transition-colors">
                  <step.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <span className="text-4xl font-serif font-black text-white/5 italic">0{i+1}</span>
              </div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter group-hover:text-brand-gold transition-colors">{step.title}</h4>
              <p className="text-white/40 text-sm font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
