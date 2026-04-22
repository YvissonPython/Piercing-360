/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion } from 'motion/react';
import { useState } from 'react';

// Thiago Finch Style - Aggressive, Luxurious, Cinematic
const SectionHeader = ({ tag, title, titleHighlight, subtitle }: { tag?: string; title: string; titleHighlight?: string; subtitle?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="text-center flex flex-col items-center relative z-10"
  >
    {tag && (
      <span className="block text-[10px] md:text-[12px] uppercase tracking-[0.6em] text-[#FCF6BA] mb-6 font-semibold opacity-80">
        {tag}
      </span>
    )}
    <h2 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-tight uppercase mb-6 leading-[0.95] text-white">
      {title} {titleHighlight && <span className="block italic font-black text-finch-gradient mt-2">{titleHighlight}</span>}
    </h2>
    {subtitle && (
      <div className="mt-8 flex flex-col items-center">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#BF953F] to-transparent mb-6 opacity-60"></div>
        <p className="text-[13px] md:text-[15px] leading-relaxed text-white/60 max-w-[580px] mx-auto font-light tracking-wide">
          {subtitle}
        </p>
      </div>
    )}
  </motion.div>
);

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const FinchButton = ({ href, children, className = "" }: { href: string, children: React.ReactNode, className?: string }) => (
  <a 
    href={href} 
    className={`inline-block font-sans text-[12px] sm:text-[14px] uppercase tracking-[0.3em] text-black bg-finch-gradient py-5 px-12 font-extrabold button-glow-finch hover:scale-105 transition-all duration-500 outline-none ${className}`}
  >
    {children}
  </a>
);

export default function App() {
  const [vagasWidth, setVagasWidth] = useState("0%");

  return (
    <div className="font-sans min-h-screen text-white bg-dark selection:bg-[#BF953F]/30 relative overflow-x-hidden">
      
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 noise-overlay pointer-events-none z-50"></div>

      {/* Navbar Minimalista */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-8 py-8 flex justify-between items-center bg-black/60 backdrop-blur-xl border-b border-white/[0.04] text-white transition-all">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-6 bg-finch-gradient"></div>
          <div>
            <h1 className="text-[15px] font-black tracking-[0.3em] uppercase text-white leading-none">Piercing 360</h1>
            <p className="text-[8px] uppercase tracking-[0.5em] text-[#FCF6BA]/60 leading-none mt-1.5">A Nova Era</p>
          </div>
        </div>
        <a href="#oferta" className="hidden sm:inline-block text-[10px] uppercase tracking-[0.3em] text-[#FCF6BA] hover:text-white border-b border-[#BF953F]/40 pb-1 transition-all duration-300">
          Reivindicar Vaga
        </a>
      </nav>

      {/* Hero Section Cinematico */}
      <section id="hero" className="min-h-screen flex flex-col justify-center pt-32 pb-12 relative z-10 text-center">
        {/* Background Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-[radial-gradient(circle_at_center,rgba(191,149,63,0.12)_0%,transparent_60%)] pointer-events-none z-0"></div>
        
        <div className="relative z-10 px-6 w-full max-w-[1200px] mx-auto mt-12 sm:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }}
            className="inline-block border border-[#BF953F]/30 bg-black/50 backdrop-blur-md px-6 py-2 mb-10"
          >
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.5em] text-[#FCF6BA] font-medium">Você está a um passo do grupo exclusivo</p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2 }}
            className="font-serif text-[clamp(50px,10vw,140px)] font-black tracking-tighter uppercase leading-[0.85] mb-8 text-finch-gradient-light"
          >
            Técnica.<br/>Confiança.
            <span className="block mt-4 italic text-finch-gradient drop-shadow-[0_0_20px_rgba(191,149,63,0.3)]">Faturamento.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
            className="text-[14px] sm:text-[16px] leading-[2] text-white/50 max-w-[600px] mx-auto font-light tracking-wide mb-14"
          >
            A única mentoria que ignora o básico e transforma profissionais em <strong className="text-white font-medium">especialistas altamente requisitadas no mercado de perfuração</strong>.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <FinchButton href="#oferta" className="w-full sm:w-auto">
              Entrar Para a Elite
            </FinchButton>
          </motion.div>

          {/* Fotos Mentores Style Outlier */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-6 mt-32 max-w-[900px] mx-auto relative"
          >
            {/* Aline */}
            <div className="group relative cursor-pointer flex-1 aspect-[4/5] sm:aspect-[3/4] overflow-hidden finch-panel">
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
              <img src="/aline.jpg" alt="Aline — Técnica e Segurança" className="w-full h-full object-cover object-[center_20%] grayscale-[80%] contrast-125 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 group-hover:contrast-100" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-left transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="w-8 h-[1px] bg-finch-gradient mb-4"></div>
                <div className="text-[24px] font-serif font-bold text-white mb-1 uppercase tracking-widest">Aline</div>
                <div className="text-[9px] text-[#BF953F] uppercase tracking-[0.4em] font-bold">A Mestre da Técnica</div>
              </div>
            </div>

            {/* James */}
            <div className="group relative cursor-pointer flex-1 aspect-[4/5] sm:aspect-[3/4] overflow-hidden finch-panel">
               <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
              <img src="/james.jpg" alt="James — Clientes e Faturamento" className="w-full h-full object-cover object-top grayscale-[80%] contrast-125 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 group-hover:contrast-100" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-left transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="w-8 h-[1px] bg-finch-gradient mb-4"></div>
                <div className="text-[24px] font-serif font-bold text-white mb-1 uppercase tracking-widest">James</div>
                <div className="text-[9px] text-[#BF953F] uppercase tracking-[0.4em] font-bold">O Arquiteto de Vendas</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strip de Status Metálico */}
      <div className="border-y border-white/[0.05] py-16 px-6 relative z-10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/[0.05]">
          <div className="pt-6 sm:pt-0">
            <div className="font-serif text-[48px] sm:text-[64px] font-bold text-finch-gradient-light mb-2 leading-none">04</div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#BF953F] font-semibold">Encontros Oficiais</div>
          </div>
          <div className="pt-6 sm:pt-0">
            <div className="font-serif text-[48px] sm:text-[64px] font-bold text-finch-gradient-light mb-2 leading-none">360°</div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#BF953F] font-semibold">Domínio Total</div>
          </div>
          <div className="pt-6 sm:pt-0">
            <div className="font-serif text-[48px] sm:text-[64px] font-bold text-finch-gradient-light mb-2 leading-none">100%</div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#BF953F] font-semibold">Prático & Aplicável</div>
          </div>
        </div>
      </div>

      {/* Dor (Dark Aggressive) */}
      <section id="dor" className="py-40 relative z-10 bg-[#020202]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(191,149,63,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <SectionHeader 
            tag="A Verdade Oculta" 
            title="O que te paralisa" titleHighlight="custa caro." 
            subtitle="Você não tem um problema de técnica. Você tem um problema de coragem e de estratégia. O mercado devora as inseguras." 
          />
          <FadeUp className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-24 max-w-[1000px] mx-auto">
            <div className="finch-panel p-12 transition-all duration-500 hover:border-[#BF953F]/40 hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center mb-8 group-hover:border-[#BF953F]/50 transition-colors">
                <span className="text-[#FCF6BA] font-serif italic text-xl">01</span>
              </div>
              <h4 className="text-[16px] font-bold uppercase tracking-wider text-white mb-4">Medo de Falhar</h4>
              <p className="text-[14px] leading-[1.8] text-white/50 font-light">O pânico de cometer um erro bloqueia seu começo. A inércia domina e você assiste outras prosperarem com menos talento que você.</p>
            </div>
            
            <div className="finch-panel p-12 transition-all duration-500 hover:border-[#BF953F]/40 hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center mb-8 group-hover:border-[#BF953F]/50 transition-colors">
                <span className="text-[#FCF6BA] font-serif italic text-xl">02</span>
              </div>
              <h4 className="text-[16px] font-bold uppercase tracking-wider text-white mb-4">Certificados Vazios</h4>
              <p className="text-[14px] leading-[1.8] text-white/50 font-light">Cursos extensos que despejam teoria clínica, mas te abandonam no momento de atrair clientes dispostos a pagar pelo seu serviço.</p>
            </div>

            <div className="finch-panel p-12 transition-all duration-500 hover:border-[#BF953F]/40 hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center mb-8 group-hover:border-[#BF953F]/50 transition-colors">
                <span className="text-[#FCF6BA] font-serif italic text-xl">03</span>
              </div>
              <h4 className="text-[16px] font-bold uppercase tracking-wider text-white mb-4">Precificação Medíocre</h4>
              <p className="text-[14px] leading-[1.8] text-white/50 font-light">Implorar por clientes baixando o preço. Cobrar o mínimo pelo medo da rejeição e acabar com a agenda vazia ou bolso vazio.</p>
            </div>

             <div className="finch-panel p-12 transition-all duration-500 hover:border-[#BF953F]/40 hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center mb-8 group-hover:border-[#BF953F]/50 transition-colors">
                <span className="text-[#FCF6BA] font-serif italic text-xl">04</span>
              </div>
              <h4 className="text-[16px] font-bold uppercase tracking-wider text-white mb-4">Invisibilidade</h4>
              <p className="text-[14px] leading-[1.8] text-white/50 font-light">Seu Instagram é apenas um catálogo sem alma. Quem não é visto como autoridade nunca poderá cobrar como uma.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Hook Transicao */}
      <section className="relative py-40 border-y border-white/[0.05] overflow-hidden bg-black text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <FadeUp className="max-w-[1000px] mx-auto px-6 relative z-10">
          <h2 className="font-serif text-[clamp(32px,6vw,72px)] font-black uppercase leading-[1.1] text-white">
            A Perfeição é a <br/>
            <span className="font-serif italic font-light text-finch-gradient opacity-90 capitalize">Desculpa dos Fracassados.</span>
          </h2>
          <div className="mt-16 flex flex-col items-center">
            <p className="text-[16px] text-[#FCF6BA]/80 font-medium tracking-[0.3em] uppercase mb-4">O que você precisa é um método.</p>
            <p className="text-[15px] sm:text-[18px] text-white/50 font-light max-w-[600px] leading-[1.8] text-center">
              A Mentoria Piercing Profissional 360 é o mecanismo arquitetado para destruir a insegurança e transformar técnica fria em faturamento sólido.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Método (Cards Luxo) */}
      <section id="metodo" className="py-40 relative z-10 bg-dark">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader tag="O Protocolo de Elite" title="A TRÍADE DA" titleHighlight="REFERÊNCIA" />
          
          <FadeUp className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24">
            <div className="relative p-1 bg-[#050505] border border-white/[0.03] group hover:border-[#BF953F]/50 transition-colors duration-700">
              <div className="absolute inset-0 bg-finch-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
              <div className="p-12 h-full bg-[#050505] flex flex-col items-start text-left z-10 relative">
                <h3 className="font-serif text-[72px] font-black text-white/5 leading-none mb-4 absolute top-6 right-8">I</h3>
                <h4 className="text-[11px] uppercase tracking-[0.4em] text-[#BF953F] mb-6 font-bold mt-12">Segurança Clínica</h4>
                <h5 className="text-[24px] font-serif font-bold text-white mb-4">A Técnica Perfeita</h5>
                <p className="text-[14px] text-white/50 leading-[1.8] font-light">Anatomia precisa, angulações cirúrgicas e biossegurança rigorosa. O alicerce sólido para você realizar procedimentos com absoluta confiança e maestria.</p>
              </div>
            </div>

            <div className="relative p-1 bg-[#050505] border border-white/[0.03] group hover:border-[#BF953F]/50 transition-colors duration-700">
              <div className="absolute inset-0 bg-finch-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
              <div className="p-12 h-full bg-[#050505] flex flex-col items-start text-left z-10 relative">
                 <h3 className="font-serif text-[72px] font-black text-white/5 leading-none mb-4 absolute top-6 right-8">II</h3>
                <h4 className="text-[11px] uppercase tracking-[0.4em] text-[#BF953F] mb-6 font-bold mt-12">Atração Magnética</h4>
                <h5 className="text-[24px] font-serif font-bold text-white mb-4">O Novo Cliente</h5>
                <p className="text-[14px] text-white/50 leading-[1.8] font-light">Posicionamento de alto valor. Como se tornar o único nome que o cliente premium deseja, sem depender de "dancinhas" ou descontos agressivos.</p>
              </div>
            </div>

            <div className="relative p-1 bg-[#050505] border border-white/[0.03] group hover:border-[#BF953F]/50 transition-colors duration-700">
              <div className="absolute inset-0 bg-finch-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
              <div className="p-12 h-full bg-[#050505] flex flex-col items-start text-left z-10 relative">
                 <h3 className="font-serif text-[72px] font-black text-white/5 leading-none mb-4 absolute top-6 right-8">III</h3>
                <h4 className="text-[11px] uppercase tracking-[0.4em] text-[#BF953F] mb-6 font-bold mt-12">Sua Clínica Cheia</h4>
                <h5 className="text-[24px] font-serif font-bold text-white mb-4">Conversão Elegante</h5>
                <p className="text-[14px] text-white/50 leading-[1.8] font-light">A arte de cobrar o que o seu diploma merece. Arquitetura de preços, venda consultiva e fidelização de clientes que valorizam a sua especialização.</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Conteudo (Escuro) */}
      <section className="py-40 relative z-10 bg-[#030303] border-t border-white/[0.05]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeader tag="O Dossiê" title="Conteúdo da" titleHighlight="Formação" />
            <FadeUp className="mt-20 max-w-[900px] mx-auto space-y-4">
              
              {/* Accordion Style Rows */}
              <div className="finch-panel flex flex-col sm:flex-row border border-white/[0.05] group hover:border-[#BF953F]/30 transition-all">
                <div className="p-8 sm:w-[280px] bg-black/40 border-b sm:border-b-0 sm:border-r border-white/[0.05] flex flex-col justify-center">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-[#BF953F] font-bold mb-2">Protocolo Alpha</div>
                  <h3 className="text-[22px] font-serif text-white">Semana 01</h3>
                </div>
                <div className="p-8 sm:p-10 flex-1">
                  <h4 className="text-[16px] font-bold text-white uppercase tracking-widest mb-6">Mecânica das Agulhas</h4>
                  <ul className="space-y-4">
                    <li className="text-[13px] text-white/60 font-light flex items-start gap-4"><span className="text-[#BF953F] mt-1 text-[10px]">♦</span> Anatomia clínica para perfurações seguras.</li>
                    <li className="text-[13px] text-white/60 font-light flex items-start gap-4"><span className="text-[#BF953F] mt-1 text-[10px]">♦</span> Engenharia dos materiais: Titânio vs Aço.</li>
                    <li className="text-[13px] text-white/60 font-light flex items-start gap-4"><span className="text-[#BF953F] mt-1 text-[10px]">♦</span> Assepsia nível bloco cirúrgico.</li>
                  </ul>
                </div>
              </div>

               <div className="finch-panel flex flex-col sm:flex-row border border-white/[0.05] group hover:border-[#BF953F]/30 transition-all">
                <div className="p-8 sm:w-[280px] bg-black/40 border-b sm:border-b-0 sm:border-r border-white/[0.05] flex flex-col justify-center">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-[#BF953F] font-bold mb-2">Imersão Real</div>
                  <h3 className="text-[22px] font-serif text-white">Semana 02</h3>
                </div>
                <div className="p-8 sm:p-10 flex-1">
                  <h4 className="text-[16px] font-bold text-white uppercase tracking-widest mb-6">Execução Sem Falhas</h4>
                  <ul className="space-y-4">
                    <li className="text-[13px] text-white/60 font-light flex items-start gap-4"><span className="text-[#BF953F] mt-1 text-[10px]">♦</span> Marcação milimétrica. O segredo do ângulo.</li>
                    <li className="text-[13px] text-white/60 font-light flex items-start gap-4"><span className="text-[#BF953F] mt-1 text-[10px]">♦</span> Prática orientada de perfurações corporais.</li>
                    <li className="text-[13px] text-white/60 font-light flex items-start gap-4"><span className="text-[#BF953F] mt-1 text-[10px]">♦</span> Gestão de intercorrências extremas.</li>
                  </ul>
                </div>
              </div>

              <div className="finch-panel flex flex-col sm:flex-row border border-white/[0.05] group hover:border-[#BF953F]/30 transition-all">
                <div className="p-8 sm:w-[280px] bg-black/40 border-b sm:border-b-0 sm:border-r border-white/[0.05] flex flex-col justify-center">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-[#BF953F] font-bold mb-2">Geração de Demanda</div>
                  <h3 className="text-[22px] font-serif text-white">Semana 03</h3>
                </div>
                <div className="p-8 sm:p-10 flex-1">
                  <h4 className="text-[16px] font-bold text-white uppercase tracking-widest mb-6">Marketing de Autoridade</h4>
                  <ul className="space-y-4">
                     <li className="text-[13px] text-white/60 font-light flex items-start gap-4"><span className="text-[#BF953F] mt-1 text-[10px]">♦</span> O Funil Estético: Do Instagram à sua maca.</li>
                    <li className="text-[13px] text-white/60 font-light flex items-start gap-4"><span className="text-[#BF953F] mt-1 text-[10px]">♦</span> Narrativas de marcação, o que postar e quando.</li>
                    <li className="text-[13px] text-white/60 font-light flex items-start gap-4"><span className="text-[#BF953F] mt-1 text-[10px]">♦</span> Fechamento de clientes high-ticket no WhatsApp.</li>
                  </ul>
                </div>
              </div>

              <div className="finch-panel flex flex-col sm:flex-row border border-white/[0.05] group hover:border-[#BF953F]/30 transition-all">
                <div className="p-8 sm:w-[280px] bg-black/40 border-b sm:border-b-0 sm:border-r border-white/[0.05] flex flex-col justify-center">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-[#BF953F] font-bold mb-2">Motor de Lucros</div>
                  <h3 className="text-[22px] font-serif text-white">Semana 04</h3>
                </div>
                <div className="p-8 sm:p-10 flex-1">
                  <h4 className="text-[16px] font-bold text-white uppercase tracking-widest mb-6">Escala & Precificação</h4>
                  <ul className="space-y-4">
                     <li className="text-[13px] text-white/60 font-light flex items-start gap-4"><span className="text-[#BF953F] mt-1 text-[10px]">♦</span> Precificação de luxo: Como afastar o cliente pesquisador de preço.</li>
                    <li className="text-[13px] text-white/60 font-light flex items-start gap-4"><span className="text-[#BF953F] mt-1 text-[10px]">♦</span> Up-sell no estúdio: Vendendo jóias premium.</li>
                    <li className="text-[13px] text-white/60 font-light flex items-start gap-4"><span className="text-[#BF953F] mt-1 text-[10px]">♦</span> Matemática do faturamento diário previsível.</li>
                  </ul>
                </div>
              </div>

            </FadeUp>
          </div>
      </section>

      {/* Oferta (Finch Style - Aggressive Value) */}
      <section id="oferta" className="py-40 relative z-10 bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(ellipse_at_center,rgba(191,149,63,0.08)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
           <SectionHeader tag="A Decisão" title="A Elite te" titleHighlight="Aguarda" />
           
           <FadeUp className="max-w-[600px] mx-auto mt-20 relative">
             <div className="absolute -inset-[1px] bg-finch-gradient opacity-30 rounded-sm blur-sm"></div>
             <div className="finch-panel px-8 py-16 sm:px-16 position-relative border border-[#BF953F]/40 shadow-[0_0_80px_rgba(191,149,63,0.1)]">
                
                <div className="inline-block border border-[#BF953F]/50 px-6 py-2 mb-10 bg-black">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[#FCF6BA] font-bold">Lote Pioneiro</span>
                </div>

                <div className="text-[18px] text-white/40 tracking-[0.2em] line-through mb-4 font-bold">R$ 2.000</div>
                <div className="flex justify-center items-start gap-2 mb-6">
                  <span className="text-[24px] text-finch-gradient font-bold mt-2">R$</span>
                  <span className="font-serif text-[100px] leading-none font-black text-white tracking-tighter drop-shadow-lg">997</span>
                </div>
                <div className="text-[14px] text-[#BF953F] tracking-widest uppercase font-bold mb-14">Ou 12x de R$ 99,70</div>

                <div className="text-left mb-14">
                  <ul className="space-y-5">
                    <li className="text-[13px] sm:text-[15px] font-medium text-white/80 pb-5 border-b border-white/[0.05] flex items-center justify-between">
                      <span className="uppercase tracking-widest text-[#FCF6BA] text-[10px]">Acesso</span>
                      <span>4 Encontros de Choque</span>
                    </li>
                     <li className="text-[13px] sm:text-[15px] font-medium text-white/80 pb-5 border-b border-white/[0.05] flex items-center justify-between">
                      <span className="uppercase tracking-widest text-[#FCF6BA] text-[10px]">Comunidade</span>
                      <span>Grupo Networking VIP</span>
                    </li>
                    <li className="text-[13px] sm:text-[15px] font-medium text-white/80 pb-5 border-b border-white/[0.05] flex items-center justify-between">
                      <span className="uppercase tracking-widest text-[#FCF6BA] text-[10px]">Arsenal</span>
                      <span>Dossiê Clínico Preenchido</span>
                    </li>
                    <li className="text-[13px] sm:text-[15px] font-medium text-white/80 pb-5 border-b border-white/[0.05] flex items-center justify-between">
                      <span className="uppercase tracking-widest text-[#FCF6BA] text-[10px]">Blindagem</span>
                      <span>Certificado Ouro 7 Dias</span>
                    </li>
                  </ul>
                </div>

                <FinchButton href="#" className="w-full text-center py-6 text-[15px]">
                  Confirmar Inscrição
                </FinchButton>
                <div className="mt-6 flex justify-center items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">
                  <span>🔒 Tráfego Criptografado</span>
                </div>
             </div>
           </FadeUp>
        </div>
      </section>

      {/* Escassez */}
      <section className="py-24 relative z-10 bg-[#050505] border-t border-white/[0.05] text-center">
         <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          onViewportEnter={() => setVagasWidth("85%")}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-[700px] mx-auto px-6"
        >
          <h2 className="font-serif text-[32px] sm:text-[48px] font-black uppercase tracking-tight text-white mb-6">Status da <span className="text-finch-gradient italic font-light pr-2">Turma</span></h2>
          <p className="text-[15px] text-white/50 mb-12 font-light leading-[1.8]">O compromisso com a excelência exige salas vazias de curiosos e cheias de executores. Fecharemos os portões em breve.</p>

           <div className="max-w-[500px] mx-auto bg-black border border-white/10 h-2 rounded-full overflow-hidden p-[1px]">
            <div 
              className="h-full bg-finch-gradient transition-all duration-[2s] ease-[cubic-bezier(0.22,1,0.36,1)] rounded-full"
              style={{ width: vagasWidth }}
            ></div>
          </div>
          <div className="flex justify-between items-center max-w-[500px] mx-auto mt-6 text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">
            <span className="text-[#BF953F]">85% das vagas extintas</span>
            <span>Poucas restam</span>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-black border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 gap-6 relative z-10">
        <div>
          <span className="text-[#BF953F]">Piercing 360°</span> <span className="mx-2">•</span> Elite
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
        </div>
      </footer>

    </div>
  );
}
