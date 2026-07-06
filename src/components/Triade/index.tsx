import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { PILARES } from '../../constants';

interface TriadeProps {
  triadeRef: React.RefObject<HTMLDivElement>;
  triadeY: any;
  triadeRotate: any;
}

export const Triade = ({ triadeRef, triadeY, triadeRotate }: TriadeProps) => {
  return (
    <section ref={triadeRef} className="bg-brand-blue relative py-40 overflow-hidden">
      <motion.div 
        style={{ y: triadeY, rotate: triadeRotate, scale: 1.1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none"
      ></motion.div>
      <div className="section-container relative z-10">
        <SectionTitle 
          tag="A Base" 
          title="O que realmente faz uma" 
          highlight="profissional crescer?" 
        />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid md:grid-cols-3 gap-12 mt-24"
        >
          {PILARES.map((pilar, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:border-brand-gold transition-colors duration-500">
                <pilar.icon className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4">{pilar.title}</h3>
              <div className="w-8 h-[2px] bg-brand-gold mx-auto mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <p className="text-white/50 font-light leading-relaxed">{pilar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
