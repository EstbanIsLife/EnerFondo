import { Search, Bell, Wallet, Menu, Globe } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

interface TopNavProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setCurrentView?: (view: string) => void;
  currentView?: string;
}

export function TopNav({ isSidebarOpen, toggleSidebar, setCurrentView, currentView }: TopNavProps) {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header 
      className={`fixed top-0 right-0 z-40 bg-zinc-950/70 backdrop-blur-xl h-16 px-8 flex justify-between items-center border-b border-zinc-900/50 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'w-[calc(100%-16rem)]' : 'w-full'
      }`}
    >
      <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0 pr-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-zinc-900/50 shrink-0"
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <div className="relative flex-1 max-w-md hidden sm:block min-w-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
          <input 
            type="text" 
            placeholder={t('nav.search')} 
            className="w-full bg-zinc-900/50 border-none rounded-lg py-2 pl-10 pr-4 text-sm text-zinc-300 focus:ring-1 focus:ring-emerald-500/50 focus:outline-none placeholder:text-zinc-600 transition-all"
          />
        </div>
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8 shrink-0">
          <button 
            onClick={() => setCurrentView?.('marketplace')}
            className={`${currentView === 'marketplace' ? 'text-emerald-400 border-b-2 border-emerald-500 py-5 font-semibold' : 'text-zinc-400 hover:text-emerald-500 font-medium'} transition-all text-sm whitespace-nowrap`}
          >
            {t('nav.marketplace')}
          </button>
          <button 
            className="text-zinc-400 hover:text-emerald-500 transition-all text-sm font-medium whitespace-nowrap"
          >
            {t('nav.governance')}
          </button>
          <button 
            className="text-zinc-400 hover:text-emerald-500 transition-all text-sm font-medium whitespace-nowrap"
          >
            {t('nav.about')}
          </button>
        </nav>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4 shrink-0">
        <button 
          onClick={toggleLanguage}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-zinc-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all border border-transparent hover:border-emerald-400/20"
        >
          <Globe className="w-4 h-4" />
          <span className="text-xs font-bold tracking-widest uppercase">{language === 'en' ? 'EN' : 'ES'}</span>
        </button>
        <button className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-zinc-900/50">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-zinc-900/50">
          <Wallet className="w-5 h-5" />
        </button>
        <button className="bg-emerald-600/10 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-emerald-600/20 transition-all">
          {t('nav.connectWallet')}
        </button>
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces" 
          alt="User Avatar" 
          className="w-8 h-8 rounded-full border border-emerald-500/20 object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </header>
  );
}
