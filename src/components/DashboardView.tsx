import { ArrowUpRight, ArrowDownRight, Activity, Zap, Droplets, Sun, Wind } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

export function DashboardView() {
  const { t } = useLanguage();

  return (
    <div className="col-span-12 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold font-headline tracking-tight text-white">{t('dashboard.title')}</h1>
        <p className="text-zinc-400 text-sm">{t('dashboard.subtitle')}</p>
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 hover:border-emerald-500/20 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
              <Activity className="w-6 h-6" />
            </div>
            <span className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded-lg">
              <ArrowUpRight className="w-3 h-3" /> +12.5%
            </span>
          </div>
          <h3 className="text-zinc-400 text-sm font-medium mb-1">{t('dashboard.tvl')}</h3>
          <p className="text-3xl font-black font-headline text-white group-hover:text-emerald-400 transition-colors">$2.4M</p>
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 hover:border-sky-500/20 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400">
              <Zap className="w-6 h-6" />
            </div>
            <span className="flex items-center gap-1 text-sky-400 text-xs font-bold bg-sky-500/10 px-2 py-1 rounded-lg">
              <ArrowUpRight className="w-3 h-3" /> +8.2%
            </span>
          </div>
          <h3 className="text-zinc-400 text-sm font-medium mb-1">{t('dashboard.energyGenerated')}</h3>
          <p className="text-3xl font-black font-headline text-white group-hover:text-sky-400 transition-colors">14.2 GWh</p>
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 hover:border-amber-500/20 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
              <Droplets className="w-6 h-6" />
            </div>
            <span className="flex items-center gap-1 text-red-400 text-xs font-bold bg-red-500/10 px-2 py-1 rounded-lg">
              <ArrowDownRight className="w-3 h-3" /> -2.1%
            </span>
          </div>
          <h3 className="text-zinc-400 text-sm font-medium mb-1">{t('dashboard.carbonOffset')}</h3>
          <p className="text-3xl font-black font-headline text-white group-hover:text-amber-400 transition-colors">850k Tons</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Area */}
        <div className="lg:col-span-2 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold font-headline text-white">{t('dashboard.yieldPerformance')}</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs font-bold bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors">1W</button>
              <button className="px-3 py-1 text-xs font-bold bg-emerald-500/20 text-emerald-400 rounded-lg">1M</button>
              <button className="px-3 py-1 text-xs font-bold bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors">1Y</button>
            </div>
          </div>
          <div className="h-64 w-full rounded-xl flex items-end gap-2 pb-4 pt-8 px-2">
            {/* Simulated Chart Bars */}
            {[40, 55, 45, 70, 65, 85, 75, 90, 80, 100, 95, 110].map((height, i) => (
              <div key={i} className="flex-1 bg-zinc-800/50 rounded-t-sm hover:bg-emerald-500/50 transition-colors relative group cursor-pointer" style={{ height: `${height}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-zinc-300 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  ${(height * 12.5).toFixed(1)}k
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Assets */}
        <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6">
          <h3 className="text-lg font-bold font-headline text-white mb-6">{t('dashboard.activeAssets')}</h3>
          <div className="space-y-4">
            
            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-800/50 transition-colors cursor-pointer border border-transparent hover:border-zinc-700/50 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=100&q=80" alt="Solar" className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-amber-500/20 mix-blend-overlay"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-zinc-100 truncate">Sahara Solar Array</h4>
                <p className="text-xs text-zinc-500 truncate">North Africa • 250 MW</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-emerald-400">+4.2%</p>
                <p className="text-xs text-zinc-500">{t('dashboard.yield')}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-800/50 transition-colors cursor-pointer border border-transparent hover:border-zinc-700/50 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=100&q=80" alt="Wind" className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-sky-500/20 mix-blend-overlay"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-zinc-100 truncate">Nordic Offshore Wind</h4>
                <p className="text-xs text-zinc-500 truncate">North Sea • 400 MW</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-emerald-400">+6.8%</p>
                <p className="text-xs text-zinc-500">{t('dashboard.yield')}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-800/50 transition-colors cursor-pointer border border-transparent hover:border-zinc-700/50 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=100&q=80" alt="Hydro" className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-zinc-100 truncate">Andes Hydro Plant</h4>
                <p className="text-xs text-zinc-500 truncate">South America • 120 MW</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-emerald-400">+3.1%</p>
                <p className="text-xs text-zinc-500">{t('dashboard.yield')}</p>
              </div>
            </div>

          </div>
          <button className="w-full mt-6 py-3 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 rounded-xl transition-all">
            {t('dashboard.viewAll')}
          </button>
        </div>
      </div>
    </div>
  );
}
