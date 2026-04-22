import fs from 'fs';

let css = `@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

@theme {
  --color-gold: #c5a059;
  --color-gold-light: #d8b775;
  --color-gold-dark: #a38242;
  --color-dark: #0a0a0a;
  --color-dark-2: rgba(255, 255, 255, 0.03);
  --color-light: #f5f5f5;
  --color-muted: rgba(255, 255, 255, 0.4);
  --color-gold-border: rgba(197, 160, 89, 0.3);

  --font-serif: 'Cormorant Garamond', serif;
  --font-sans: 'DM Sans', sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-dark);
  color: var(--color-light);
  line-height: 1.6;
  overflow-x: hidden;
}

* {
  border-color: rgba(255, 255, 255, 0.1);
}
`;

fs.writeFileSync('src/index.css', css);

let app = fs.readFileSync('src/App.tsx', 'utf8');

// SectionHeader
app = app.replace(
  /className="inline-block text-\[10px\] tracking-\[3px\] uppercase text-gold border border-gold-border px-4 py-1\.5 rounded-full mb-6"/g,
  'className="block text-[10px] uppercase tracking-[0.4em] text-white/40 mb-3"'
);
app = app.replace(
  /className="font-serif text-\[clamp\(2rem,5vw,3\.25rem\)\] font-light mb-4 leading-tight"/g,
  'className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-light tracking-tighter uppercase mb-6 leading-[0.9]"'
);
app = app.replace(
  /className="text-\[15px\] text-muted font-light"/g,
  'className="text-sm leading-relaxed text-white/50 max-w-xl mx-auto"'
);

// Nav
app = app.replace(
  /<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex justify-between items-center bg-dark\/90 backdrop-blur-\[20px\] border-b border-gold-border">/g,
  '<nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-end bg-[#0a0a0a]/90 backdrop-blur-[20px] border-b border-white/10">'
);
app = app.replace(
  /<div className="font-serif text-lg font-light tracking-\[2px\] text-gold">Piercing 360°<\/div>/g,
  '<div className="space-y-1"><h1 className="text-xl font-bold tracking-[0.2em] uppercase text-light">Piercing 360°</h1><p className="text-[10px] uppercase tracking-[0.4em] text-white/40 mt-1">Excellence in Practice</p></div>'
);
app = app.replace(
  /<a href="#oferta" className="text-xs tracking-\[1px\] uppercase text-gold no-underline border border-gold-border px-5 py-2 rounded transition-all hover:bg-gold hover:text-dark">/g,
  '<a href="#oferta" className="text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white border-b border-[#c5a059] pb-1 transition-colors">'
);

// Hero
app = app.replace(
  /className="min-h-screen flex items-center pt-20 relative overflow-hidden"/g,
  'className="min-h-screen flex flex-col justify-center pt-32 pb-12 relative overflow-hidden"'
);

app = app.replace(
  /className="text-\[10px\] tracking-\[4px\] uppercase text-gold mb-8"/g,
  'className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8"'
);
app = app.replace(
  /className="font-serif text-\[clamp\(42px,9vw,88px\)\] font-light leading-\[1\.05\] mb-7"/g,
  'className="font-serif text-[clamp(48px,11vw,110px)] font-light tracking-tighter uppercase leading-[0.9] mb-8 text-white"'
);
app = app.replace(
  /className="text-base text-muted max-w-\[520px\] mx-auto mb-12 font-light leading-\[1\.8\]"/g,
  'className="text-sm leading-relaxed text-white/50 max-w-[520px] mx-auto mb-12"'
);

// Hero stats layout adjust to match side statistics 
// Actually I will keep existing layout but theme it.
app = app.replace(
  /className="border-y border-gold-border py-8 px-6 bg-dark-2"/g,
  'className="border-y border-white/10 py-16 px-6 bg-transparent"'
);
app = app.replace(
  /className="font-serif text-\[40px\] font-light text-gold leading-none"/g,
  'className="block text-[32px] font-light text-white mb-2 leading-none"'
);
app = app.replace(
  /className="text-\[11px\] tracking-\[1\.5px\] uppercase text-muted mt-1\.5"/g,
  'className="text-[10px] uppercase tracking-widest text-white/40"'
);

// Buttons
const oldBtn = 'className="inline-block bg-gold text-dark font-sans font-medium text-sm tracking-[1px] uppercase py-[18px] px-12 rounded no-underline cursor-pointer transition-all hover:-translate-y-[2px] shadow-[0_12px_40px_rgba(201,169,110,0.3)]"';
const newBtn = 'className="inline-block font-sans text-[11px] uppercase tracking-[0.2em] text-white border border-white/10 py-5 px-12 hover:bg-white/5 transition-all outline-none"';
app = app.split(oldBtn).join(newBtn);

const oldBtn2 = 'className="w-full text-center block bg-gold text-dark font-sans font-medium text-sm tracking-[1px] uppercase py-[18px] px-12 rounded no-underline cursor-pointer transition-all hover:-translate-y-[2px] shadow-[0_12px_40px_rgba(201,169,110,0.3)]"';
const newBtn2 = 'className="w-full text-center block font-sans text-[11px] uppercase tracking-[0.2em] text-white border border-white/10 py-5 px-12 hover:bg-white/5 transition-all outline-none"';
app = app.split(oldBtn2).join(newBtn2);

app = app.replace(
  /className="mt-5 text-xs text-muted"/g,
  'className="mt-5 text-[10px] uppercase tracking-[0.3em] text-white/40"'
);

// Global spacing items
app = app.replace(/className="py-24/g, 'className="py-32');

// Cards / Grids theme
app = app.replace(
  /className="bg-dark p-7 md:p-8 border-t-2 border-transparent transition-colors duration-300 hover:border-gold"/g,
  'className="bg-white/5 border border-white/10 p-8 transition-all hover:bg-white/10"'
);

// Method section
app = app.replace(/className="grid grid-cols-1 md:grid-cols-3 gap-px mt-14 bg-gold-border"/g, 'className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"');
app = app.replace(/className="bg-dark-2 py-12 px-8 text-center"/g, 'className="bg-white/5 border border-white/10 py-12 px-8 text-center"');
app = app.replace(/className="font-serif text-\[64px\] font-light text-gold\/15 leading-none mb-3"/g, 'className="font-serif text-[56px] font-light text-white/10 leading-none mb-6"');
app = app.replace(/className="font-serif text-\[22px\] font-normal text-gold mb-3"/g, 'className="text-[14px] uppercase tracking-widest text-gold mb-3"');
app = app.replace(/className="text-\[13px\] text-muted leading-\[1\.7\] font-light"/g, 'className="text-[13px] text-white/50 leading-relaxed font-light"');

// Dor section headings
app = app.replace(/<h4 className="font-serif text-xl font-normal mb-2">/g, '<h4 className="text-[11px] uppercase tracking-widest text-[#c5a059] mb-4">');

// Mentors
app = app.replace(/className="grid grid-cols-1 md:grid-cols-2 gap-px mt-14 text-left border border-gold-border hover:border-gold-dark transition-colors duration-300 overflow-hidden"/g, 'className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 text-left overflow-hidden"');
app = app.replace(/className="bg-dark-2 p-12 transition-colors duration-300"/g, 'className="bg-white/5 border border-white/10 p-12 transition-all duration-300 hover:bg-white/10"');
app = app.replace(/className="bg-dark-2 p-12 border-t md:border-t-0 md:border-l border-gold-border transition-colors duration-300"/g, 'className="bg-white/5 border border-white/10 p-12 transition-all duration-300 hover:bg-white/10"');
app = app.replace(/className="font-serif text-\[28px\] font-normal mb-1"/g, 'className="text-2xl font-light text-white mb-2"');
app = app.replace(/className="text-\[11px\] tracking-\[2px\] uppercase text-gold mb-5"/g, 'className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] mb-6"');

// Como funciona
app = app.replace(/<h4 className="font-serif text-lg font-normal mb-2">/g, '<h4 className="text-[11px] uppercase tracking-widest text-white mb-3">');
app = app.replace(/className="font-serif text-5xl font-light text-gold opacity-40 leading-none mb-3"/g, 'className="font-serif text-5xl font-light text-white/10 leading-none mb-4"');
app = app.replace(/className="text-xs text-muted leading-relaxed"/g, 'className="text-[12px] text-white/40 leading-relaxed font-light"');

// Grid backgrounds
app = app.replace(/className="grid grid-cols-1 md:grid-cols-2 gap-px mt-14 bg-gold-border text-left"/g, 'className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 text-left"');
app = app.replace(/className="bg-dark py-9 px-8"/g, 'className="bg-white/5 border border-white/10 py-10 px-8"');
app = app.replace(/className="text-\[10px\] tracking-\[3px\] uppercase text-gold mb-3"/g, 'className="text-[10px] tracking-[3px] uppercase text-[#c5a059] mb-4"');
app = app.replace(/<h3 className="font-serif text-\[22px\] font-normal mb-4">/g, '<h3 className="text-lg font-light text-white mb-6">');
app = app.replace(/className="text-\[13px\] text-muted py-1\.5 border-b border-white\/5 font-light flex gap-2 items-start"/g, 'className="text-[13px] text-white/50 py-3 border-b border-white/10 font-light flex gap-3 items-start last:border-0"');

// Bonus
app = app.replace(/className="bg-dark border border-gold-border p-6 md:p-8 rounded transition-all duration-300 hover:border-gold hover:-translate-y-1"/g, 'className="bg-white/5 border border-white/10 p-8 transition-all duration-300 hover:bg-white/10"');

// Oferta
app = app.replace(/className="max-w-\[560px\] mx-auto mt-14 bg-dark-2 border border-gold rounded-lg p-10 md:p-14 relative overflow-hidden"/g, 'className="max-w-[560px] mx-auto mt-14 bg-white/5 border border-[#c5a059]/30 p-10 md:p-14 relative"');
app = app.replace(/className="inline-block bg-gold text-dark font-medium text-\[10px\] tracking-\[2px\] uppercase px-4 py-1\.5 rounded-full mb-8"/g, 'className="inline-block text-[#c5a059] font-medium text-[10px] tracking-[0.2em] uppercase mb-8"');
app = app.replace(/className="font-serif text-\[56px\] md:text-\[72px\] font-light text-gold leading-none mb-2"/g, 'className="font-serif text-[56px] md:text-[80px] font-light text-white leading-none mb-2"');
app = app.replace(/className="text-\[10px\] tracking-\[2px\] uppercase text-gold mb-4"/g, 'className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-6"');
app = app.replace(/className="text-\[13px\] text-muted py-2 border-b border-light\/5 flex gap-2\.5 items-center"/g, 'className="text-[13px] text-white/60 py-3 border-b border-white/10 flex gap-3 items-center last:border-0"');

// Garantia
app = app.replace(/className="max-w-\[520px\] mx-auto p-12 border border-gold-border rounded-lg"/g, 'className="max-w-[520px] mx-auto p-12 border border-white/10 bg-white/5"');
app = app.replace(/className="font-serif text-\[28px\] font-normal mb-3"/g, 'className="text-2xl font-light text-white mb-4"');
app = app.replace(/className="text-sm text-muted leading-\[1\.8\] font-light"/g, 'className="text-sm text-white/50 leading-[1.8] font-light"');

// Escassez
app = app.replace(/className="font-serif text-\[clamp\(28px,4vw,44px\)\] font-light mb-4"/g, 'className="font-serif text-[clamp(32px,5vw,56px)] font-light tracking-tighter uppercase mb-6 leading-tight"');
app = app.replace(/className="max-w-\[420px\] mx-auto bg-light\/5 rounded h-1 overflow-hidden"/g, 'className="max-w-[420px] mx-auto border border-white/10 bg-white/5 h-2 overflow-hidden"');
app = app.replace(/className="h-full bg-gold rounded transition-all duration-\[1\.5s\] ease-out"/g, 'className="h-full bg-[#c5a059] transition-all duration-[1.5s] ease-out"');

// CTA Final
app = app.replace(/className="font-serif text-\[clamp\(32px,6vw,64px\)\] font-light leading-\[1\.15\] mb-6"/g, 'className="font-serif text-[clamp(40px,7vw,80px)] font-light tracking-tighter uppercase leading-[0.9] mb-8"');

// Background/Gradients Cleanup
app = app.replace(/bg-dark-2/g, 'bg-transparent');
app = app.replace(/bg-\[linear-gradient[A-Za-z0-9\(\)%\.,\-_\s]+\]/g, 'bg-transparent border-t border-white/10');
app = app.replace(/bg-\[radial-gradient[A-Za-z0-9\(\)%\.,\-_\s]+\]/g, 'bg-transparent border-t border-white/10');

// Hero images styling
app = app.replace(/className="absolute -inset-\[1px\] rounded-\[5px\] bg-\[linear-gradient[A-Za-z0-9\(\)%\.,\-_\s]+\] -z-10 opacity-50"><\/div>/g, '');
app = app.replace(/className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-10 bg-\[linear-gradient[A-Za-z0-9\(\)%\.,\-_\s]+\] rounded-b text-left"/g, 'className="absolute inset-0 px-6 pb-6 pt-12 bg-black/40 group-hover:bg-black/20 flex flex-col justify-end transition-all text-left border border-white/10 rounded"');
app = app.replace(/className="font-serif text-xl font-normal text-light">/g, 'className="text-[10px] uppercase tracking-[0.3em] font-medium text-white mb-1">');
app = app.replace(/className="text-\[11px\] tracking-\[1\.5px\] uppercase text-gold mt-\[2px\]">/g, 'className="text-[10px] text-white/40 uppercase tracking-widest hidden">'); // Hide the extra descriptive label on hover style, or keep it. Let's keep it but subdued.

app = app.replace(/className="text-\[10px\] text-white\/40 uppercase tracking-widest hidden">/g, 'className="text-[10px] text-white/50 uppercase tracking-widest">');

// Re-enable radial/linear if they were globally removed, by being precise
// Wait I stripped them out. That's good, theme is just flat #0a0a0a.

fs.writeFileSync('src/App.tsx', app);
