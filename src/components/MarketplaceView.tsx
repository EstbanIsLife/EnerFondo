import { MapPin, BarChart3, MoreHorizontal, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

interface MarketplaceViewProps {
  onInvestClick?: () => void;
}

export function MarketplaceView({ onInvestClick }: MarketplaceViewProps) {
  const { t } = useLanguage();

  return (
    <>
      <div className="col-span-12 lg:col-span-8 space-y-8">
        <header>
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-white mb-2">{t('marketplace.title')}</h2>
          <p className="text-zinc-400">{t('marketplace.subtitle')}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Card 1 */}
          <div className="bg-zinc-900/40 rounded-2xl border border-zinc-800/50 overflow-hidden hover:border-emerald-500/30 transition-colors group">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80" 
                alt="Solar Farm Gamma" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold font-headline text-zinc-100 mb-2">Solar Farm Gamma</h3>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1.5 text-zinc-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  Nevada, USA
                </div>
                <div className="text-sm">
                  <span className="text-zinc-500">{t('marketplace.roi')}: </span>
                  <span className="text-emerald-400 font-bold">8-12%</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">{t('marketplace.progress')}</span>
                  <span className="text-zinc-300 font-bold">75% {t('marketplace.funded')}</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[75%]"></div>
                </div>
              </div>
              
              <button 
                onClick={() => onInvestClick?.('gamma')}
                className="w-full py-3 rounded-xl border border-emerald-500/50 text-emerald-400 font-bold hover:bg-emerald-500/10 transition-colors"
              >
                {t('marketplace.investNow')}
              </button>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-zinc-900/40 rounded-2xl border border-zinc-800/50 overflow-hidden hover:border-emerald-500/30 transition-colors group">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80" 
                alt="Wind Park Beta" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold font-headline text-zinc-100 mb-2">Wind Park Beta</h3>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1.5 text-zinc-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  North Sea
                </div>
                <div className="text-sm">
                  <span className="text-zinc-500">{t('marketplace.roi')}: </span>
                  <span className="text-emerald-400 font-bold">9-13%</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">{t('marketplace.progress')}</span>
                  <span className="text-zinc-300 font-bold">50% {t('marketplace.funded')}</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[50%]"></div>
                </div>
              </div>
              
              <button 
                onClick={() => onInvestClick?.('beta')}
                className="w-full py-3 rounded-xl border border-emerald-500/50 text-emerald-400 font-bold hover:bg-emerald-500/10 transition-colors"
              >
                {t('marketplace.investNow')}
              </button>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-zinc-900/40 rounded-2xl border border-zinc-800/50 overflow-hidden hover:border-emerald-500/30 transition-colors group">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80" 
                alt="Hydro Plant Alpha" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold font-headline text-zinc-100 mb-2">Hydro Plant Alpha</h3>
              <div className="inline-block px-2 py-0.5 bg-sky-500/10 text-sky-400 text-[10px] font-bold uppercase tracking-widest rounded mb-4">
                {t('marketplace.governance')}
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1.5 text-zinc-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  Norway
                </div>
                <div className="text-sm">
                  <span className="text-zinc-500">{t('marketplace.roi')}: </span>
                  <span className="text-emerald-400 font-bold">7-11%</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">{t('marketplace.progress')}</span>
                  <span className="text-zinc-300 font-bold">90% {t('marketplace.funded')}</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[90%]"></div>
                </div>
              </div>
              
              <button 
                onClick={() => onInvestClick?.('alpha')}
                className="w-full py-3 rounded-xl border border-emerald-500/50 text-emerald-400 font-bold hover:bg-emerald-500/10 transition-colors"
              >
                {t('marketplace.investNow')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <aside className="hidden lg:block lg:col-span-4 space-y-6">
        {/* Market Statistics */}
        <section className="bg-zinc-900/40 rounded-xl p-6 border border-zinc-800/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline font-bold text-zinc-200 uppercase text-[10px] tracking-[0.2em]">{t('marketplace.marketStatistics')}</h3>
            <BarChart3 className="text-emerald-500 w-4 h-4" />
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-zinc-400 mb-1">{t('marketplace.totalVolume')}:</p>
              <p className="text-3xl font-black font-headline text-white">$450M</p>
            </div>
            <div>
              <p className="text-sm text-zinc-400 mb-1">{t('marketplace.activeInvestors')}:</p>
              <p className="text-xl font-bold text-zinc-200">15.2K</p>
            </div>
          </div>
        </section>

        {/* Featured Carbon Credits */}
        <section className="bg-zinc-900/40 rounded-xl p-6 border border-zinc-800/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline font-bold text-zinc-200 uppercase text-[10px] tracking-[0.2em]">{t('marketplace.featuredCarbonCredits')}</h3>
            <MoreHorizontal className="text-zinc-500 w-4 h-4" />
          </div>
          
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                <span className="text-[10px] font-bold">CC</span>
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-200">VCS-S02: Reforestation</p>
                <p className="text-xs text-zinc-500">Brazil</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                <span className="text-[10px] font-bold">CC</span>
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-200">GS-101: Clean Cookstoves</p>
                <p className="text-xs text-zinc-500">Kenya</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                <span className="text-[10px] font-bold">CC</span>
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-200">VCS-502: Reforestation</p>
                <p className="text-xs text-zinc-500">Marem</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                <span className="text-[10px] font-bold">CC</span>
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-200">VCS-103: Clean Cookstoves</p>
                <p className="text-xs text-zinc-500">USA</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                <span className="text-[10px] font-bold">CC</span>
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-200">VCS-S04: FF reforestation</p>
                <p className="text-xs text-zinc-500">Kenya</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Transactions */}
        <section className="bg-zinc-900/40 rounded-xl p-6 border border-zinc-800/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline font-bold text-zinc-200 uppercase text-[10px] tracking-[0.2em]">{t('marketplace.recentTransactions')}</h3>
            <MoreHorizontal className="text-zinc-500 w-4 h-4" />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-sm"></div>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-200">{t('marketplace.bought')}</p>
                  <p className="text-xs text-zinc-500">100 SOL st</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-zinc-500">{t('marketplace.at')} <span className="text-emerald-400 font-bold">$120</span></p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-emerald-400">
                  <ArrowDownRight className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-200">{t('marketplace.sold')}</p>
                  <p className="text-xs text-zinc-500">500 CARBON</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-zinc-500">{t('marketplace.at')} <span className="text-emerald-400 font-bold">$4</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <div className="px-2 text-[10px] text-zinc-600 flex flex-wrap gap-x-4 gap-y-2 uppercase font-black tracking-widest">
          <a href="#" className="hover:text-emerald-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-emerald-500 transition-colors">DAO Rules</a>
          <span>© 2026 Veridian</span>
        </div>
      </aside>
    </>
  );
}
