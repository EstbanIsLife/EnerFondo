import { TrendingUp } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

export function RightSidebar() {
  const { t } = useLanguage();

  return (
    <aside className="hidden lg:block lg:col-span-4 space-y-6">
      
      {/* Trending Topics Widget */}
      <section className="bg-zinc-900/40 rounded-xl p-6 border border-zinc-800/50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-headline font-bold text-zinc-200 uppercase text-[10px] tracking-[0.2em]">{t('community.trendingTopics')}</h3>
          <TrendingUp className="text-emerald-500 w-4 h-4" />
        </div>
        
        <div className="space-y-6">
          <div className="group cursor-pointer">
            <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest mb-1">Ecosystem</p>
            <h4 className="text-sm font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">#HydrogenSeriesA</h4>
            <p className="text-[10px] text-zinc-500 mt-1 uppercase font-bold">4.2k active {t('community.discussions')}</p>
          </div>
          
          <div className="group cursor-pointer">
            <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1 group-hover:text-zinc-400 transition-colors">Technical</p>
            <h4 className="text-sm font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">#RustIntegration</h4>
            <p className="text-[10px] text-zinc-500 mt-1 uppercase font-bold">1.8k posts today</p>
          </div>
          
          <div className="group cursor-pointer">
            <p className="text-[10px] text-sky-400 font-black uppercase tracking-widest mb-1">Policy</p>
            <h4 className="text-sm font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">#SDG7Compliance</h4>
            <p className="text-[10px] text-zinc-500 mt-1 uppercase font-bold">942 participants</p>
          </div>
        </div>
        
        <button className="w-full mt-8 py-3 rounded-lg border border-zinc-800 text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-zinc-800/50 hover:text-zinc-200 transition-all">
          Show More
        </button>
      </section>

      {/* Active Governance Component */}
      <section className="bg-zinc-900/40 rounded-xl p-6 border-l-2 border-emerald-500 shadow-lg shadow-emerald-950/20">
        <h3 className="font-headline font-bold text-zinc-200 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest">{t('community.activeProposals')}</span>
        </h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-zinc-950/50 rounded-lg border border-zinc-800/50">
            <p className="text-[11px] font-bold text-emerald-200/80 mb-2 uppercase tracking-wide">VGP-04: Series B Funding</p>
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-emerald-500 w-[68%]"></div>
            </div>
            <div className="flex justify-between text-[10px] text-zinc-500 font-black uppercase tracking-widest">
              <span>68% Yes</span>
              <span>{t('community.endsIn')} 14{t('community.h')}</span>
            </div>
          </div>
          
          <div className="p-4 bg-zinc-950/50 rounded-lg border border-zinc-800/50">
            <p className="text-[11px] font-bold text-zinc-400 mb-2 uppercase tracking-wide">VGP-05: Mainnet Upgrade</p>
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-zinc-700 w-[12%]"></div>
            </div>
            <div className="flex justify-between text-[10px] text-zinc-500 font-black uppercase tracking-widest">
              <span>{t('community.quorum')} not met</span>
              <span>{t('community.endsIn')} 3{t('community.d')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Contributors Widget */}
      <section className="bg-zinc-900/40 rounded-xl p-6 border border-zinc-800/50">
        <h3 className="font-headline font-bold text-zinc-200 mb-6 uppercase text-[10px] tracking-[0.2em]">{t('community.topContributors')}</h3>
        <div className="space-y-5">
          <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces" 
                alt="alex_chains" 
                className="w-8 h-8 rounded-full border border-emerald-500/20 object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-sm font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">alex_chains</p>
                <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">Core Architect</p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-500/60">4,281pt</span>
          </div>
          
          <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" 
                alt="sarah_eco" 
                className="w-8 h-8 rounded-full border border-emerald-500/20 object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-sm font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">sarah_eco</p>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Env Lead</p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-500/60">3,950pt</span>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <div className="px-2 text-[10px] text-zinc-600 flex flex-wrap gap-x-4 gap-y-2 uppercase font-black tracking-widest">
        <a href="#" className="hover:text-emerald-500 transition-colors">Privacy</a>
        <a href="#" className="hover:text-emerald-500 transition-colors">DAO Rules</a>
        <span>© 2024 Veridian</span>
      </div>
      
    </aside>
  );
}
