import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
  isNavOpen: boolean;
  setIsNavOpen: (open: boolean) => void;
  scrollYProgress: any;
}

export const Navigation = ({ isScrolled, isNavOpen, setIsNavOpen, scrollYProgress }: NavigationProps) => {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-gold origin-left z-[100] shadow-[0_0_10px_rgba(212,175,55,0.5)]"
        style={{ scaleX: scrollYProgress }}
      />
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'nav-blur py-4 shadow-2xl' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center font-bold text-brand-blue text-xs">GM</div>
            <span className="font-serif font-black uppercase tracking-[0.2em] text-lg">Growth Mindset</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#metodo" className="text-xs uppercase tracking-widest font-bold hover:text-brand-gold transition-colors">O Método</a>
            <a href="#resultados" className="text-xs uppercase tracking-widest font-bold hover:text-brand-gold transition-colors">Resultados</a>
            <a href="#james" className="text-xs uppercase tracking-widest font-bold hover:text-brand-gold transition-colors">O Mentor</a>
            <motion.a 
              href="#oferta" 
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 0 rgba(181, 159, 91, 0)",
                  "0 0 15px 2px rgba(181, 159, 91, 0.3)",
                  "0 0 0 0 rgba(181, 159, 91, 0)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="button-primary !py-3 !px-6 text-xs"
            >
              Acessar Agora
            </motion.a>
          </div>

          <button onClick={() => setIsNavOpen(!isNavOpen)} className="md:hidden text-white">
            {isNavOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-brand-blue pt-32 px-6 flex flex-col gap-8 text-center"
          >
            <a onClick={() => setIsNavOpen(false)} href="#metodo" className="text-2xl font-serif">O Método</a>
            <a onClick={() => setIsNavOpen(false)} href="#resultados" className="text-2xl font-serif">Resultados</a>
            <a onClick={() => setIsNavOpen(false)} href="#james" className="text-2xl font-serif">O Mentor</a>
            <motion.a 
              onClick={() => setIsNavOpen(false)} 
              href="#oferta" 
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 0 rgba(181, 159, 91, 0)",
                  "0 0 15px 2px rgba(181, 159, 91, 0.3)",
                  "0 0 0 0 rgba(181, 159, 91, 0)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="button-primary text-lg mt-4"
            >
              Acessar Agora
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
