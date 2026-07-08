import { 
  Target, 
  Zap, 
  Briefcase, 
  ShieldCheck, 
  Globe, 
  TrendingUp, 
  Layers, 
  BarChart3 
} from 'lucide-react';
import { Professional, Pilar, MetodoStep } from './types';

export const PROFESSIONALS: Professional[] = [
  {
    name: "Danielle",
    location: "Minas Gerais",
    quote: "Minha agenda era uma montanha russa. Com o Growth Mindset, aprendi que ser empresária vai além do furo. Hoje tenho previsibilidade e segurança.",
    goal: "Faturamento triplicado em 4 meses.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1024&h=1024&auto=format&fit=crop"
  },
  {
    name: "Aline",
    location: "Santa Catarina",
    quote: "A estratégia de posicionamento mudou o jogo. Parei de atrair quem busca preço e comecei a atrair quem valoriza minha entrega.",
    goal: "Referência absoluta na sua região.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1024&h=1024&auto=format&fit=crop"
  },
  {
    name: "Maisa",
    location: "Recife (Pernambuco)",
    quote: "O James me mostrou que o crescimento é um movimento nacional. A comunidade é o suporte que faltava para eu me sentir imparável.",
    goal: "Estruturação de equipe e escala.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0ad2f01?q=80&w=1024&h=1024&auto=format&fit=crop"
  }
];

export const PILARES: Pilar[] = [
  {
    title: "Mentalidade",
    desc: "A base de tudo. Destruindo crenças limitantes e assumindo a postura de uma empresária de sucesso.",
    icon: Target
  },
  {
    title: "Posicionamento",
    desc: "Como ser percebida como a única opção viável no mercado, independentemente do preço.",
    icon: Zap
  },
  {
    title: "Execução",
    desc: "A transformação da estratégia em ação prática e resultados financeiros reais.",
    icon: Briefcase
  }
];

export const METODO_STEPS: MetodoStep[] = [
  { title: "Mentalidade", desc: "Ajuste de mindset para o crescimento empresarial.", icon: Target },
  { title: "Posicionamento", desc: "Arquitetura de autoridade e diferenciação.", icon: ShieldCheck },
  { title: "Marketing", desc: "Estratégias de atração e retenção inteligente.", icon: Globe },
  { title: "Vendas", desc: "Processos de conversão de alto impacto.", icon: TrendingUp },
  { title: "Gestão", desc: "Organização operacional e financeira do negócio.", icon: Layers },
  { title: "Escala", desc: "Expansão sustentável e aumento de margem.", icon: BarChart3 }
];

export const OUTCOMES = [
  "Mais previsibilidade financeira",
  "Organização empresarial sólida",
  "Confiança inabalável no método",
  "Aumento real de lucro",
  "Posicionamento de autoridade",
  "Atração de clientes qualificados",
  "Liderança estratégica",
  "Liberdade de tempo e escolha"
];
