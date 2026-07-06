import React from 'react';
import { FadeIn } from './FadeIn';

interface SectionTitleProps {
  tag: string;
  title: string;
  highlight?: string;
  center?: boolean;
}

export const SectionTitle = ({ tag, title, highlight, center = true }: SectionTitleProps) => (
  <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
    <FadeIn>
      <span className="inline-block text-[11px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
        {tag}
      </span>
    </FadeIn>
    <FadeIn delay={0.1}>
      <h2 className={`font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold ${center ? 'mx-auto' : ''}`}>
        {title} {highlight && <span className="gold-gradient-text block mt-2 italic font-black">{highlight}</span>}
      </h2>
    </FadeIn>
  </div>
);
