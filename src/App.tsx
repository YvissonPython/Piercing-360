/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Menu, 
  X,
  Target,
  Zap,
  Briefcase,
  Layers,
  BarChart3,
  Globe,
  Quote
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

// --- Shared Components ---

const FadeIn = ({ children, delay = 0, y = 20, x = 0, className = "" }: { children: React.ReactNode; delay?: number; y?: number; x?: number; className?: string; key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ tag, title, highlight, center = true }: { tag: string; title: string; highlight?: string; center?: boolean }) => (
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

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 12
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center items-center font-mono">
      {[
        { label: 'H', value: timeLeft.hours },
        { label: 'M', value: timeLeft.minutes },
        { label: 'S', value: timeLeft.seconds }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-white/5 border border-white/10 w-12 h-14 flex items-center justify-center rounded-lg text-2xl font-bold text-brand-gold">
            {String(item.value).padStart(2, '0')}
          </div>
          <span className="text-[9px] uppercase tracking-widest text-white/30 mt-2 font-bold">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

// --- Content Data ---

const PROFESSIONALS = [
  {
    name: "Danielle",
    location: "Minas Gerais",
    quote: "Minha agenda era uma montanha russa. Com o Growth Mindset, aprendi que ser empresária vai além do furo. Hoje tenho previsibilidade e segurança.",
    goal: "Faturamento triplicado em 4 meses.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Aline",
    location: "Santa Catarina",
    quote: "A estratégia de posicionamento mudou o jogo. Parei de atrair quem busca preço e comecei a atrair quem valoriza minha entrega.",
    goal: "Referência absoluta na sua região.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Maisa",
    location: "Recife (Pernambuco)",
    quote: "O James me mostrou que o crescimento é um movimento nacional. A comunidade é o suporte que faltava para eu me sentir imparável.",
    goal: "Estruturação de equipe e escala.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0ad2f01?q=80&w=600&auto=format&fit=crop"
  }
];

const PILARES = [
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

const METODO_STEPS = [
  { title: "Mentalidade", desc: "Ajuste de mindset para o crescimento empresarial.", icon: Target },
  { title: "Posicionamento", desc: "Arquitetura de autoridade e diferenciação.", icon: ShieldCheck },
  { title: "Marketing", desc: "Estratégias de atração e retenção inteligente.", icon: Globe },
  { title: "Vendas", desc: "Processos de conversão de alto impacto.", icon: TrendingUp },
  { title: "Gestão", desc: "Organização operacional e financeira do negócio.", icon: Layers },
  { title: "Escala", desc: "Expansão sustentável e aumento de margem.", icon: BarChart3 }
];

const OUTCOMES = [
  "Mais previsibilidade financeira",
  "Organização empresarial sólida",
  "Confiança inabalável no método",
  "Aumento real de lucro",
  "Posicionamento de autoridade",
  "Atração de clientes qualificados",
  "Liderança estratégica",
  "Liberdade de tempo e escolha"
];

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="noise-bg selection:bg-brand-gold/30">
      
      {/* Navigation */}
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
            <a href="#oferta" className="button-primary !py-3 !px-6 text-xs">Acessar Agora</a>
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
            <a onClick={() => setIsNavOpen(false)} href="#oferta" className="button-primary text-lg mt-4">Acessar Agora</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="section-container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <span className="inline-block border border-white/10 bg-white/5 px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-light mb-8">
                Movimento Nacional de Crescimento
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.9] tracking-tighter mb-8">
                Você não precisa trabalhar mais.<br/>
                <span className="italic font-light gold-gradient-text">Precisa crescer</span> da maneira certa.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed mb-12 max-w-[600px]">
                Profissionais do Furo Humanizado de diferentes estados já descobriram que crescer não depende apenas da técnica. Depende de estratégia, posicionamento e mentalidade.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a href="#oferta" className="button-primary w-full sm:w-auto flex items-center justify-center gap-3 group">
                  Quero fazer parte do Growth Mindset
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.5
                    }
                  }
                }}
                className="mt-10 grid grid-cols-2 gap-4"
              >
                {[
                  "Método validado",
                  "Comunidade exclusiva",
                  "Acompanhamento estratégico",
                  "Crescimento previsível"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 font-bold"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} y={40} className="relative">
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                alt="James - Mentor Growth Mindset" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent"></div>
              
              {/* Overlay Professionals */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-center gap-4">
                {[
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1567532939604-b6b5b0ad2f01?q=80&w=100&auto=format&fit=crop"
                ].map((src, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-gold overflow-hidden shadow-xl transform hover:-translate-y-1 transition-transform">
                    <img src={src} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Rastro do Crescimento */}
      <section id="resultados" className="bg-white/5 py-32 border-y border-white/5">
        <div className="section-container">
          <SectionTitle 
            tag="Resultados Reais" 
            title="O crescimento deixa" 
            highlight="rastros." 
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {PROFESSIONALS.map((prof, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="glass-card group hover:border-brand-gold/40 transition-all duration-500 overflow-hidden flex flex-col h-full">
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

      {/* Problema Section */}
      <section className="section-container text-center">
        <SectionTitle 
          tag="O Despertar" 
          title="O problema não é" 
          highlight="sua técnica." 
        />
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 mt-16">
          {[
            "Trabalha muito e fatura pouco",
            "Vive apagando incêndios",
            "Não consegue agenda cheia",
            "Não possui estratégia clara",
            "Depende da sorte para crescer",
            "Insegurança no posicionamento"
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.05} className="glass-card p-6 flex items-center gap-4 text-left border-l-4 border-l-red-500/50">
              <X className="w-5 h-5 text-red-500 shrink-0" />
              <span className="text-white/60 font-light">{item}</span>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Tríade Section */}
      <section className="bg-brand-blue relative py-40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="section-container relative z-10">
          <SectionTitle 
            tag="A Base" 
            title="O que realmente faz uma" 
            highlight="profissional crescer?" 
          />
          
          <div className="grid md:grid-cols-3 gap-12 mt-24">
            {PILARES.map((pilar, i) => (
              <FadeIn key={i} delay={i * 0.2} className="text-center group">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:border-brand-gold transition-colors duration-500">
                  <pilar.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4">{pilar.title}</h3>
                <div className="w-8 h-[2px] bg-brand-gold mx-auto mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <p className="text-white/50 font-light leading-relaxed">{pilar.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Conheça James */}
      <section id="james" className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn x={-40}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-gold/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" 
                alt="James" 
                className="relative rounded-[2.5rem] w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </FadeIn>
          
          <div>
            <SectionTitle tag="O Mentor" title="Conheça" highlight="James" center={false} />
            <FadeIn delay={0.2}>
              <p className="text-lg text-white/70 font-light leading-relaxed mb-6">
                Com anos de experiência transformando pequenos atendimentos em empresas lucrativas, James desenvolveu o método Growth Mindset para preencher a lacuna que as escolas de técnica ignoram.
              </p>
              <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
                Sua missão é clara: desenvolver empresárias que desejam transformar seu atendimento em uma empresa sólida, lucrativa e escalável.
              </p>
              <div className="flex items-center gap-4 p-6 glass-card border-l-4 border-l-brand-gold">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-1">Impacto Global</p>
                  <p className="font-bold text-white">+500 mentoradas em todo o Brasil</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* O Método Steps */}
      <section id="metodo" className="bg-white/5 py-40">
        <div className="section-container">
          <SectionTitle 
            tag="A Estrutura" 
            title="O Método" 
            highlight="Growth Mindset" 
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-24">
            {METODO_STEPS.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} className="glass-card p-10 group hover:-translate-y-2 transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center border border-white/10 group-hover:border-brand-gold/50 transition-colors">
                    <step.icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <span className="text-4xl font-serif font-black text-white/5 italic">0{i+1}</span>
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter group-hover:text-brand-gold transition-colors">{step.title}</h4>
                <p className="text-white/40 text-sm font-light leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* O que muda */}
      <section className="section-container text-center">
        <SectionTitle 
          tag="Transformação" 
          title="O que muda quando" 
          highlight="você entra?" 
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {OUTCOMES.map((item, i) => (
            <FadeIn key={i} delay={i * 0.05} className="glass-card p-8 flex flex-col items-center justify-center gap-4 group hover:bg-white/[0.05] transition-colors">
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-500">
                <CheckCircle2 className="w-5 h-5 text-brand-gold group-hover:text-brand-blue" />
              </div>
              <span className="text-[11px] uppercase tracking-widest font-bold text-white/60 group-hover:text-white transition-colors">{item}</span>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1533749047139-189de3cf06d3?q=80&w=2000&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue via-transparent to-brand-blue"></div>
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-tight mb-8">
              Faturamento é métrica de vaidade.<br/>
              <span className="gold-gradient-text italic font-light">Lucro é liberdade.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Crescer significa construir um negócio saudável, sustentável e lucrativo. Não é sobre o quanto entra, mas sobre o quanto fica e a liberdade que isso proporciona para sua vida.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Oferta */}
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

      {/* Footer */}
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

    </div>
  );
}
