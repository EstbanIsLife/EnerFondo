import { TrendingUp, Zap, CheckCircle, FileText } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

export function ImpactReportView() {
  const { t } = useLanguage();

  return (
    <>
      {/* Center Column: Main Report Data */}
      <div className="col-span-12 lg:col-span-8 space-y-8">
        <header>
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-white mb-2">{t('impact.title')}</h2>
          <p className="text-zinc-400">{t('impact.subtitle')}</p>
        </header>

        {/* Top Bento Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/40 p-6 rounded-xl border border-emerald-500/10">
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-2">{t('impact.totalCo2Mitigated')}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-headline font-bold text-emerald-400">14,208</span>
              <span className="text-zinc-500 text-xs">{t('impact.tons')}</span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-emerald-500 text-xs font-bold">
              <TrendingUp className="w-4 h-4" />
              <span>+12.4% {t('impact.vsLastYear')}</span>
            </div>
          </div>

          <div className="bg-zinc-900/40 p-6 rounded-xl border border-emerald-500/10">
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-2">{t('impact.cleanEnergyYield')}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-headline font-bold text-emerald-400">842.5</span>
              <span className="text-zinc-500 text-xs">{t('impact.mwh')}</span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-emerald-500 text-xs font-bold">
              <Zap className="w-4 h-4" />
              <span>{t('impact.poweringHomes')}</span>
            </div>
          </div>

          <div className="bg-zinc-900/40 p-6 rounded-xl border border-emerald-500/10">
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-2">{t('impact.socialReturn')}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-headline font-bold text-emerald-400">3.4x</span>
              <span className="text-zinc-500 text-xs">{t('impact.ratio')}</span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-zinc-500 text-xs font-bold">
              <CheckCircle className="w-4 h-4" />
              <span>{t('impact.auditedBy')}</span>
            </div>
          </div>
        </div>

        {/* Map Footprint */}
        <section className="bg-zinc-900/40 rounded-xl overflow-hidden border border-emerald-500/10">
          <div className="p-6">
            <h3 className="font-headline font-bold text-lg text-white">{t('impact.activeProjectFootprint')}</h3>
            <p className="text-xs text-zinc-500">{t('impact.operationalSites')}</p>
          </div>
          <div className="relative h-[300px] bg-zinc-950">
            <img 
              alt="Project Map" 
              className="w-full h-full object-cover grayscale brightness-50 opacity-40" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7YXUhd93x6RgS1Z1y0iXafPxi7q-Vjmbay2lgEBcZdHZ-wRomjgQGJ3m-m65bsYd9cBHZjoCqd4O9fD0MDxikgiuoKzms0_WoJgfE_s3O1eAWRlX0IbFRGzhG6tzE9c87gTwehGQptjKoB7yCExOEmY-R5BDu1s-ml7pjyYflxq-4wB1Z3Xg94gwctVVVjR1DE1vAjdPSuABhBpnUwLdCcIkRaEZX4v11LmOdn38teAncd85ERzdvJgLOI2fGAj9Da0DdxiTFtZjM"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 right-6">
              <div className="bg-zinc-950/80 backdrop-blur-md px-4 py-2 rounded-lg border border-emerald-500/20">
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{t('impact.emergingMarkets')}</p>
                <p className="text-sm font-bold text-emerald-400">72% {t('impact.allocation')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benchmarks Graph */}
        <section className="bg-zinc-900/40 p-8 rounded-xl border border-emerald-500/10">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="font-headline font-bold text-xl text-white">{t('impact.impactVsGlobal')}</h3>
              <p className="text-sm text-zinc-500">{t('impact.comparingPerformance')}</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-xs text-zinc-400 font-medium">{t('impact.yourPortfolio')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                <span className="text-xs text-zinc-400 font-medium">{t('impact.globalAverage')}</span>
              </div>
            </div>
          </div>
          
          {/* Mock Chart */}
          <div className="h-48 relative flex items-end">
            <div className="absolute inset-0 bg-emerald-500/5" style={{ clipPath: 'polygon(0 80%, 20% 60%, 40% 75%, 60% 40%, 80% 55%, 100% 30%, 100% 100%, 0 100%)' }}></div>
            <div className="w-full h-px bg-zinc-800 absolute bottom-0"></div>
            <div className="flex justify-between w-full px-2 pt-4">
              <span className="text-[10px] font-bold text-zinc-600">{t('impact.jan')}</span>
              <span className="text-[10px] font-bold text-zinc-600">{t('impact.apr')}</span>
              <span className="text-[10px] font-bold text-zinc-600">{t('impact.jul')}</span>
              <span className="text-[10px] font-bold text-zinc-600">{t('impact.oct')}</span>
              <span className="text-[10px] font-bold text-zinc-600">{t('impact.dec')}</span>
            </div>
          </div>
        </section>
      </div>

      {/* Right Sidebar */}
      <aside className="hidden lg:block lg:col-span-4 space-y-6">
        {/* Community Pulse (Shared Style) */}
        <section className="bg-zinc-900/40 rounded-xl p-6 border-l-2 border-emerald-500">
          <h3 className="font-headline font-bold text-zinc-200 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-emerald-400" />
            {t('impact.communityPulse')}
          </h3>
          <div className="space-y-4">
            <div className="p-3 bg-zinc-950/40 rounded-lg border border-zinc-800">
              <p className="text-xs text-zinc-300 leading-relaxed italic">"Project Atlántida just secured €500k from a Norwegian DAO. Momentum is building."</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{t('impact.activeInsight')}</span>
              </div>
            </div>
            <div className="p-3 bg-zinc-950/40 rounded-lg border border-zinc-800">
              <p className="text-xs text-zinc-300 leading-relaxed italic">"Oceanic energy interest up 24% this week in the marketplace."</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{t('impact.marketTrend')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Project Highlights */}
        <section className="bg-zinc-900/40 rounded-xl p-6 border border-emerald-500/10">
          <h3 className="font-headline font-bold text-zinc-200 mb-6 uppercase text-[10px] tracking-[0.2em]">{t('impact.projectHighlights')}</h3>
          <div className="space-y-6">
            <div className="group cursor-pointer">
              <div className="aspect-video rounded-xl overflow-hidden mb-3 bg-zinc-800">
                <img 
                  alt="Solar Namibia" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwhkSOLCsHXmivBL-ydYBPi8alaOWGHdENkDK_R76uLtoTlYyimsWnvoOAIVM5v1l_ssbdBDDHnJ1iTYsd97V8ieevnc-NyLwCvKIWm4blfoT3UiIxxXHnLiQjN8UlGyk6Z0z5U3lYv51cePaV0JgfEO3XQeOxj_hyRGOoHxSZJhi2vRck-9lpnzGmx7DW51rq2pqqDEBBfggYmCad4pSHHluFOuvXrH3Ef9D1NssKzP2B07NQbzokkS71Xz5ifwgBBhpJcF9r-5Yr"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">{t('impact.solar')} | Namibia</span>
              <h4 className="text-sm font-bold text-zinc-200 mt-1">Okavango Basin Mini-Grid</h4>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-video rounded-xl overflow-hidden mb-3 bg-zinc-800">
                <img 
                  alt="Wind Vietnam" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqzh84WVuZ5wr_9N4ZSfQm9cPxJX8cTrOYmjmR6kcb8QM96TzAzlkgnbxhra5qQJXnLBsNpsY4LHfpWo94ktvf1T1L2CmsHXGgF4t0OsHGV8h_1_NFxKHnVYJa8o9ye-gO5kPGorSqAwIC8CCNsSM1lt985z7-YUZoTHytaXXPmU_pbcz3_7TByNVXyiSo7Yrbpa3TFpwqrHrCw2YDHyjkmR3R6bwZ5Aelbo4CDpIgu13sS9T3r4YJTcnmtD1Y75yGSSFsbZ4v1za9"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">{t('impact.wind')} | Vietnam</span>
              <h4 className="text-sm font-bold text-zinc-200 mt-1">Mekong Delta Wind Farm</h4>
            </div>
          </div>
        </section>

        {/* Download PDF Report Card */}
        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/10 blur-3xl rounded-full"></div>
          <p className="text-xs text-zinc-400 mb-4">{t('impact.detailedBreakdown')}</p>
          <button className="w-full bg-white text-zinc-950 font-bold py-3 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors relative z-10">
            <FileText className="w-5 h-5" />
            {t('impact.downloadPdf')}
          </button>
          <p className="text-[10px] text-center text-zinc-600 mt-4 relative z-10">{t('impact.version')} 2.4.1 (Jan 2026)</p>
        </div>
      </aside>
    </>
  );
}
