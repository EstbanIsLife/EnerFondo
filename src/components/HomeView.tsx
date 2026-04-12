import { useEffect, useRef } from 'react';
import { animate, stagger, splitText } from 'animejs';
import { Globe, Menu, Ruler, Thermometer, Cloud, ShieldCheck, Leaf } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

interface HomeViewProps {
  onEnter: () => void;
}

export function HomeView({ onEnter }: HomeViewProps) {
  const logoRef = useRef<HTMLHeadingElement>(null);
  const charsRef = useRef<Element[] | null>(null);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    if (!logoRef.current) return;

    // Split text into characters once when component mounts
    const { chars } = splitText(logoRef.current, { words: false, chars: true });
    charsRef.current = chars;
  }, []);

  const handleLogoHover = () => {
    if (!charsRef.current) return;
    
    // Apply the requested animejs animation only on hover
    animate(charsRef.current, {
      // Property keyframes
      y: [
        { to: '-1.40rem', ease: 'outExpo', duration: 1000 },
        { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
      ],
      // Property specific parameters
      rotate: {
        from: '-1turn',
        to: '0turn',
        duration: 1000,
        delay: 0
      },
      delay: stagger(50),
      ease: 'inOutCirc',
    });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <div className="bg-zinc-950 text-zinc-200 font-body selection:bg-emerald-500/30 min-h-screen overflow-x-hidden">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div 
            onMouseEnter={handleLogoHover}
            className="cursor-pointer"
          >
            <div id="animation-home" className="large grid centered square-grid">
              <h2 
                ref={logoRef} 
                className="text-2xl font-bold tracking-tighter text-emerald-400 font-headline flex"
                style={{ letterSpacing: '0.06em' }}
              >
                EnerFondo
              </h2>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
            <a className="text-emerald-400 font-semibold border-b-2 border-emerald-500 pb-1" href="#">{t('nav.ecosystem')}</a>
            <a className="text-zinc-400 hover:text-emerald-200 transition-colors" href="#">{t('nav.ledger')}</a>
            <a className="text-zinc-400 hover:text-emerald-200 transition-colors" href="#">{t('nav.community')}</a>
            <a className="text-zinc-400 hover:text-emerald-200 transition-colors" href="#">{t('nav.impact')}</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all border border-transparent hover:border-emerald-400/20"
            >
              <Globe className="w-5 h-5" />
              <span className="text-xs font-bold tracking-widest uppercase">{language === 'en' ? 'EN' : 'ES'}</span>
            </button>
            <button 
              onClick={onEnter}
              className="px-6 py-2 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-bold transition-all active:scale-95 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              {t('nav.connectWallet')}
            </button>
            <button className="p-2 text-zinc-400 hover:bg-emerald-400/10 rounded-lg transition-all md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        {/* Technical Grid Background Decor */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="z-10 text-center px-4 max-w-4xl mx-auto mt-12">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            {t('home.heroTitle')}
          </h1>
          <p className="font-body text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('home.heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onEnter}
              className="px-8 py-4 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-900/20"
            >
              {t('home.enterBtn')}
            </button>
            <button className="px-8 py-4 rounded-xl bg-zinc-900 text-zinc-200 font-semibold transition-all hover:bg-zinc-800 border border-zinc-800">
              {t('home.reviewBtn')}
            </button>
          </div>
        </div>

        {/* Central Feature: Rotating Turbine */}
        <div className="relative w-full max-w-5xl aspect-video mt-12 mb-[-10rem] flex justify-center">
          <div className="relative w-[300px] md:w-[500px] h-full">
            <img 
              alt="Central Kinetic Asset" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(16,185,129,0.3)]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9b1CrHEoD0Wqg6JHigk94_K_LmM-0mLpvPcy5ok9tX0Tyvg6_vJYcKrrtlszcf_kno1gJG_VEbSvUUarqaZLYwZg5lbOLNUZmlsO1aHwzHWy4hneqfC4-QZilslFmK76lOsSr25s2MLgGpqqzJt2SwOvy9vPuXCSdBDGWr5uMhkb3fNmFZ9yAZGyPt_3GIW-KXD8hroxl9mmX84fiTy5lbxeMvSjIyn5QxH-pavolJrGR8SbByfvBQzOtnKVLXr9plRQNcw-Hgax8"
              referrerPolicy="no-referrer"
            />
            {/* Floating Data Points (Glassmorphism) */}
            <div className="absolute top-1/4 -left-20 backdrop-blur-xl bg-zinc-950/70 p-4 rounded-xl border border-zinc-800/50 hidden md:block">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-1">{t('home.rotationalVelocity')}</p>
              <p className="text-2xl font-headline font-bold text-zinc-100">14.2 RPM</p>
            </div>
            <div className="absolute bottom-1/4 -right-20 backdrop-blur-xl bg-zinc-950/70 p-4 rounded-xl border border-zinc-800/50 hidden md:block">
              <p className="text-xs uppercase tracking-widest text-sky-400 mb-1">{t('home.energyOutput')}</p>
              <p className="text-2xl font-headline font-bold text-zinc-100">4.8 MW/h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections (Alternating Lateral Text) */}
      <main className="relative z-20 space-y-32 py-32 max-w-7xl mx-auto px-8">
        
        {/* Section 1: Impact Investment */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              {t('home.pillar1')}
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">{t('home.impactInvestment')}</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {t('home.impactDesc')}
            </p>
            <div className="p-6 bg-zinc-900/40 rounded-xl border-l-4 border-emerald-500">
              <p className="text-sm italic text-zinc-300">{t('home.impactQuote')}</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-zinc-950 rounded-xl overflow-hidden aspect-video shadow-2xl relative group">
              <img 
                alt="Impact Project Visual" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmW8N0y_6kXJg7lHxwIXLXI4IZJgyh9xxGEzyuxzKGnw6_xA--eH4A0CeGy6Y9tYtM-1ymn715mq3paRAfOFVfrN4ozIk8p90pKhIf8cyX76e6KRWqAZsxUnR48zEMnAGc8YtXXvbwGq0NnVFmk8GYxQg7ACRZfO2FuhxThRf0M4dY_J-9AbJQTP7BeiawIXfHe-SfIQyNsOZGkXq7kh2VbRJVj2C5y--3ot0fk4wQsUpTzDBzSnmkOnr8odjUICt118F51Va2PifF"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Section 2: Technical Rigor (Asymmetric Layout) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest">
              {t('home.pillar2')}
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">{t('home.techRigor')}</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {t('home.techDesc')}
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Ruler className="w-6 h-6 text-sky-400" />
                <span className="text-zinc-200">{t('home.cad')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Thermometer className="w-6 h-6 text-sky-400" />
                <span className="text-zinc-200">{t('home.thermo')}</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="p-8 bg-zinc-900/40 rounded-xl relative overflow-hidden border border-zinc-800/50">
              {/* Tech Chart Placeholder */}
              <div className="h-64 bg-zinc-950/50 rounded-lg flex items-end gap-2 p-4">
                <div className="w-full bg-sky-500/20 h-[60%] rounded-t-sm"></div>
                <div className="w-full bg-sky-500/40 h-[80%] rounded-t-sm"></div>
                <div className="w-full bg-emerald-500 h-[95%] rounded-t-sm shadow-[0_0_15px_rgba(16,185,129,0.4)]"></div>
                <div className="w-full bg-sky-500/30 h-[70%] rounded-t-sm"></div>
                <div className="w-full bg-sky-500/50 h-[85%] rounded-t-sm"></div>
                <div className="w-full bg-sky-500/20 h-[40%] rounded-t-sm"></div>
              </div>
              <div className="mt-4 flex justify-between text-xs font-mono text-zinc-500">
                <span>NODE_ALPHA_01</span>
                <span className="text-emerald-400">{t('home.uptime')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Community Pulse (Signature Component) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              {t('home.pillar3')}
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">{t('home.communityPulse')}</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {t('home.communityDesc')}
            </p>
          </div>
          <div className="md:col-span-7 space-y-4">
            {/* Signature Community Pulse Cards */}
            <div className="bg-zinc-900/40 p-6 rounded-xl relative overflow-hidden group hover:bg-zinc-800/60 transition-all border border-zinc-800/50">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-emerald-400">JD</div>
                  <div>
                    <h4 className="font-bold text-zinc-200">{t('home.proposal1')}</h4>
                    <p className="text-xs text-zinc-500">by @j_doe_engineer</p>
                  </div>
                </div>
                <div className="backdrop-blur-md bg-zinc-800/40 px-3 py-1 rounded-lg text-emerald-400 font-bold text-sm border border-emerald-500/20">
                  +412
                </div>
              </div>
              <p className="text-zinc-400 text-sm mb-4">{t('home.proposal1Desc')}</p>
              <div className="flex gap-4 text-xs font-bold text-emerald-400 uppercase tracking-tighter">
                <span>32 {t('home.comments')}</span>
                <span>4 {t('home.votes')}</span>
              </div>
            </div>
            
            <div className="bg-zinc-900/40 p-6 rounded-xl relative overflow-hidden group hover:bg-zinc-800/60 transition-all opacity-80 scale-95 origin-top border border-zinc-800/50">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-sky-400">SA</div>
                  <div>
                    <h4 className="font-bold text-zinc-200">{t('home.proposal2')}</h4>
                    <p className="text-xs text-zinc-500">by @sarah_architect</p>
                  </div>
                </div>
                <div className="backdrop-blur-md bg-zinc-800/40 px-3 py-1 rounded-lg text-sky-400 font-bold text-sm border border-sky-500/20">
                  +289
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Real-time Transparency */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              {t('home.pillar4')}
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">{t('home.realtime')}</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {t('home.realtimeDesc')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-900/40 border border-zinc-800/50 rounded-xl">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{t('home.carbonOffset')}</p>
                <p className="text-2xl font-headline font-bold text-emerald-400">1.2M Tons</p>
              </div>
              <div className="p-4 bg-zinc-900/40 border border-zinc-800/50 rounded-xl">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{t('home.yieldDist')}</p>
                <p className="text-2xl font-headline font-bold text-sky-400">$14.5M</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-zinc-950 aspect-square w-64 md:w-80 rounded-full border-8 border-zinc-900 flex items-center justify-center relative shadow-[0_0_40px_rgba(16,185,129,0.1)]">
              <div className="absolute inset-0 rounded-full animate-pulse bg-emerald-500/5"></div>
              <div className="text-center z-10">
                <Cloud className="w-16 h-16 text-emerald-400 mx-auto mb-2 opacity-80" />
                <p className="font-headline font-extrabold text-3xl md:text-4xl mt-2 tracking-tighter text-zinc-100">{t('home.liveMetric')}</p>
                <p className="text-zinc-500 font-mono text-sm mt-1">X-VERIDIAN-SYNC</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bento Grid Section */}
      <section className="py-32 bg-zinc-900/20 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="font-headline text-3xl font-bold mb-12 text-center text-zinc-100">{t('home.globalMap')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
            
            <div className="md:col-span-2 md:row-span-2 bg-zinc-900/40 rounded-xl overflow-hidden relative group border border-zinc-800/50 min-h-[300px]">
              <img 
                alt="Node Map" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnUlbxtrmFzXnGv74T5O639yy5VGhvzXSwGik3F60qAermKCWlsO8xy_YM7NMdoniss1bOCOisq5QPxA7ul_9F2YadQt6VFhXu9hl8KHgYRciAN6Gafhbk9x_Bxhc3TS2_hPgTRVi9ZtMDhGdFrSVCqczK_aVw-aQFqv_pKOocR1BgPrffbeIPs4X3h3XOkI1MSQMc8GvmQO8GHtUVNs3p0o60yTO1qIz4oTTp3U5eSbU_9RMmSqGPRV12ka1XfQU73s393-x3SRV6"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6">
                <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">{t('home.activeNodes')}</p>
                <p className="text-4xl font-headline font-extrabold text-zinc-100">128</p>
              </div>
            </div>
            
            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-6 flex flex-col justify-between min-h-[200px]">
              <ShieldCheck className="w-10 h-10 text-emerald-400" />
              <div>
                <p className="font-bold text-lg text-zinc-200">{t('home.immutable')}</p>
                <p className="text-xs text-zinc-400 mt-1">{t('home.immutableDesc')}</p>
              </div>
            </div>
            
            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-6 flex flex-col justify-between min-h-[200px]">
              <Leaf className="w-10 h-10 text-sky-400" />
              <div>
                <p className="font-bold text-lg text-zinc-200">{t('home.netPositive')}</p>
                <p className="text-xs text-zinc-400 mt-1">{t('home.netPositiveDesc')}</p>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h4 className="text-2xl font-headline font-bold mb-2 text-zinc-100">{t('home.ready')}</h4>
                <p className="text-zinc-400 text-sm">{t('home.join')}</p>
              </div>
              <button 
                onClick={onEnter}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-bold hover:scale-105 transition-transform whitespace-nowrap shadow-lg shadow-emerald-900/20"
              >
                {t('home.startHere')}
              </button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto w-full py-12 px-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-emerald-500 font-bold text-xl tracking-tighter">EnerFondo</div>
            <p className="font-body text-xs uppercase tracking-widest text-zinc-600">© 2024 EnerFondo. {t('home.footerTag')}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-zinc-500 font-body text-xs uppercase tracking-widest hover:text-emerald-400 transition-colors" href="#">{t('home.privacy')}</a>
            <a className="text-zinc-500 font-body text-xs uppercase tracking-widest hover:text-emerald-400 transition-colors" href="#">{t('home.nodeStatus')}</a>
            <a className="text-zinc-500 font-body text-xs uppercase tracking-widest hover:text-emerald-400 transition-colors" href="#">{t('home.governance')}</a>
            <a className="text-zinc-500 font-body text-xs uppercase tracking-widest hover:text-emerald-400 transition-colors" href="#">{t('home.whitepaper')}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
