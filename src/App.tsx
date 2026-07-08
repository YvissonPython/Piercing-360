/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useScroll, useTransform } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';

// Components
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Resultados } from './components/Resultados';
import { Problema } from './components/Problema';
import { Triade } from './components/Triade';
import { Mentor } from './components/Mentor';
import { Metodo } from './components/Metodo';
import { Transformacao } from './components/Transformacao';
import { Manifesto } from './components/Manifesto';
import { Oferta } from './components/Oferta';
import { Footer } from './components/Footer';

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  
  const triadeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: triadeProgress } = useScroll({
    target: triadeRef,
    offset: ["start end", "end start"]
  });
  
  const triadeY = useTransform(triadeProgress, [0, 1], [0, -100]);
  const triadeRotate = useTransform(triadeProgress, [0, 1], [0, 5]);

  const metodoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: metodoProgress } = useScroll({
    target: metodoRef,
    offset: ["start end", "end start"]
  });
  const metodoY = useTransform(metodoProgress, [0, 1], [0, 50]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.hash && link.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL hash without jumping
          window.history.pushState(null, '', link.hash);
          // Close mobile nav if open
          setIsNavOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleHashClick);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleHashClick);
    };
  }, []);

  return (
    <div className="noise-bg selection:bg-brand-gold/30">
      <Navigation 
        isScrolled={isScrolled} 
        isNavOpen={isNavOpen} 
        setIsNavOpen={setIsNavOpen} 
        scrollYProgress={scrollYProgress} 
      />

      <main>
        <Hero />
        <Resultados />
        <Problema />
        <Triade 
          triadeRef={triadeRef} 
          triadeY={triadeY} 
          triadeRotate={triadeRotate} 
        />
        <Mentor />
        <Metodo 
          metodoRef={metodoRef} 
          metodoY={metodoY} 
        />
        <Transformacao />
        <Manifesto />
        <Oferta />
      </main>

      <Footer />
    </div>
  );
}
