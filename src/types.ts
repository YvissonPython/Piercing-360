import { LucideIcon } from 'lucide-react';

export interface Professional {
  name: string;
  location: string;
  quote: string;
  goal: string;
  image: string;
}

export interface Pilar {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface MetodoStep {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface Outcome {
  text: string;
}
