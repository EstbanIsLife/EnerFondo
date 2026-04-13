import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { 
  LayoutDashboard, 
  CircleDollarSign, 
  Leaf, 
  Users, 
  LineChart, 
  Settings, 
  HelpCircle 
} from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  isOpen: boolean;
}

export function Sidebar({ currentView, setCurrentView, isOpen }: SidebarProps) {
  const logoRef = useRef<HTMLHeadingElement>(null);
  const { t } = useLanguage();

  const handleLogoHover = () => {
    if (!logoRef.current) return;
    
    const chars = logoRef.current.querySelectorAll('.char');
    
    // Apply the requested animejs animation only on hover
    animate(chars, {
      // Property keyframes
      y: [
        { to: '-1.10rem', ease: 'outExpo', duration: 1000 },
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

  const navItems = [
    { id: 'dashboard', label: t('sidebar.dashboard'), icon: LayoutDashboard },
    { id: 'investments', label: t('sidebar.investments'), icon: CircleDollarSign },
    { id: 'projects', label: t('sidebar.projects'), icon: Leaf },
    { id: 'community', label: t('sidebar.community'), icon: Users },
    { id: 'impact', label: t('sidebar.impactReport'), icon: LineChart },
  ];

  return (
    <aside className={`h-screen w-64 fixed left-0 top-0 border-r border-zinc-900/50 bg-zinc-950 flex flex-col py-8 px-6 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="mb-12">
        <button 
          onClick={() => setCurrentView('home')}
          onMouseEnter={handleLogoHover}
          className="text-left group cursor-pointer w-full"
        >
          <div id="animation" className="large grid centered square-grid overflow-visible">
            <h2 
              ref={logoRef} 
              className="text-xl font-black text-emerald-50 font-headline flex overflow-visible" 
              style={{ fontSize: '1.5rem', letterSpacing: '0.06em' }}
            >
              {"EnerFondo".split('').map((char, i) => (
                <span key={i} className="char inline-block" style={{ whiteSpace: 'pre' }}>
                  {char}
                </span>
              ))}
            </h2>
          </div>
          <p className="text-[10px] text-zinc-500 font-medium tracking-widest mt-1 uppercase group-hover:text-emerald-400 transition-colors">{t('sidebar.subtitle')}</p>
        </button>
      </div>
      
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center justify-start text-left gap-3 px-4 py-3 rounded-xl transition-all group ${
                isActive 
                  ? 'text-emerald-300 font-bold border-r-4 border-emerald-400 bg-emerald-900/20' 
                  : 'text-zinc-400 hover:text-emerald-400 hover:bg-emerald-900/10'
              }`}
            >
              <Icon className={`w-5 h-5 shrink-0 transition-transform ${isActive ? '' : 'group-hover:scale-110'}`} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 space-y-2 border-t border-zinc-800/50">
        <button className="w-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-zinc-950 font-bold py-4 rounded-xl mb-6 shadow-lg shadow-emerald-900/20 active:scale-95 transition-transform">
          {t('sidebar.startProject')}
        </button>
        <button 
          onClick={() => setCurrentView('settings')}
          className="w-full flex items-center gap-3 px-4 py-2 text-zinc-500 hover:text-emerald-500 transition-all"
        >
          <Settings className="w-4 h-4" />
          <span className="text-sm">{t('sidebar.settings')}</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2 text-zinc-500 hover:text-emerald-500 transition-all">
          <HelpCircle className="w-4 h-4" />
          <span className="text-sm">{t('sidebar.support')}</span>
        </button>
      </div>
    </aside>
  );
}
