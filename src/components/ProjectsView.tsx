import { ArrowUp, ArrowDown, Timer, Users, MessageSquare, Share2, Zap, TrendingUp, Clock } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

export function ProjectsView() {
  const { t } = useLanguage();

  return (
    <>
      {/* Central Feed */}
      <div className="col-span-12 lg:col-span-8 space-y-6">
        <div className="flex gap-3 mb-8">
          <button className="px-4 py-1.5 bg-emerald-600 text-white rounded-full text-xs font-bold uppercase tracking-wider">{t('projects.topGlobal')}</button>
          <button className="px-4 py-1.5 bg-zinc-900 text-zinc-400 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors">{t('projects.recent')}</button>
          <button className="px-4 py-1.5 bg-zinc-900 text-zinc-400 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors">{t('projects.nearYou')}</button>
        </div>

        {/* Project Card 1 */}
        <article className="bg-zinc-900/40 rounded-xl overflow-hidden hover:bg-zinc-900/60 transition-all group border border-transparent hover:border-emerald-500/10">
          <div className="flex gap-4 p-4">
            <div className="flex flex-col items-center gap-1 text-zinc-500 bg-zinc-950/30 rounded-lg p-2 h-fit">
              <ArrowUp className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-emerald-400 transition-colors" />
              <span className="text-xs font-bold">1.2k</span>
              <ArrowDown className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-red-400 transition-colors" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded tracking-tighter uppercase">{t('projects.wind')}</span>
                <span className="text-zinc-600 text-xs">•</span>
                <span className="text-zinc-400 text-xs font-medium">{t('projects.postedBy')} <span className="text-zinc-200">Veridian Syndicate</span></span>
                <span className="text-zinc-600 text-xs">{t('projects.ago')} 3 {t('projects.hours')}</span>
              </div>
              <h2 className="text-xl font-bold text-zinc-100 mb-4 group-hover:text-emerald-400 transition-colors">Parque Eólico Transatlántico - Fase Atlántida</h2>
              
              <div className="relative h-64 rounded-xl overflow-hidden mb-4 bg-zinc-800" style={{ perspective: '1000px' }}>
                <img 
                  alt="Wind turbines" 
                  className="w-full h-full object-cover opacity-80 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:-translate-y-2 group-hover:brightness-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS3Vv2op5VkI-RZkYtRRSR0jBGBHmJpNX3cC0vQY-dVjC7sHIoXKTBvKXGtl_y6-6b0QK1oOJAq8m8Uk9FEmQY5RwiNtEg_z_PaGMI5V4MxOq71gV22clSUucAbLJ20NLEQ72lNX3pvLNJJUbMGmtwhhZq2XanYUiSf8vEj7dxod1AtBlzfZMMaV7XeN61WMcRx6GVM2JiyDSleq_qQKBP5T-3FoQlIaLPGMwJat92E9WLBZGsA7NpEH7lu7Ma6stvcm0JiFri3Hqb"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-bold text-zinc-400">{t('projects.fundingProgress')}</span>
                  <span className="text-2xl font-black text-emerald-400">84%</span>
                </div>
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-[84%] rounded-full shadow-[0_0_12px_rgba(48,227,117,0.3)]"></div>
                </div>
                <div className="flex justify-between text-xs font-medium uppercase tracking-widest text-zinc-500">
                  <span>€4.2M {t('projects.raised')}</span>
                  <span>{t('projects.goal')}: €5.0M</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-zinc-800/50 pt-4">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <Timer className="w-5 h-5" />
                    <span className="text-xs font-bold">12 {t('projects.daysLeft')}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <Users className="w-5 h-5" />
                    <span className="text-xs font-bold">842 {t('projects.investors')}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors"><MessageSquare className="w-5 h-5" /></button>
                  <button className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors"><Share2 className="w-5 h-5" /></button>
                  <button className="bg-emerald-700 text-white px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">{t('projects.invest')}</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Project Card 2 */}
        <article className="bg-zinc-900/40 rounded-xl overflow-hidden hover:bg-zinc-900/60 transition-all group border border-transparent hover:border-emerald-500/10">
          <div className="flex gap-4 p-4">
            <div className="flex flex-col items-center gap-1 text-zinc-500 bg-zinc-950/30 rounded-lg p-2 h-fit">
              <ArrowUp className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-emerald-400 transition-colors" />
              <span className="text-xs font-bold">452</span>
              <ArrowDown className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-red-400 transition-colors" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded tracking-tighter uppercase">{t('projects.solar')}</span>
                <span className="text-zinc-600 text-xs">•</span>
                <span className="text-zinc-400 text-xs font-medium">{t('projects.postedBy')} <span className="text-zinc-200">Helios Grid</span></span>
                <span className="text-zinc-600 text-xs">{t('projects.ago')} 8 {t('projects.hours')}</span>
              </div>
              <h2 className="text-xl font-bold text-zinc-100 mb-4 group-hover:text-emerald-400 transition-colors">Micro-Red Solar Descentralizada: Distrito Minero</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-bold text-zinc-400">{t('projects.fundingProgress')}</span>
                  <span className="text-2xl font-black text-emerald-400">31%</span>
                </div>
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[31%] rounded-full shadow-[0_0_12px_rgba(48,227,117,0.3)]"></div>
                </div>
                <div className="flex justify-between text-xs font-medium uppercase tracking-widest text-zinc-500">
                  <span>€248,000 {t('projects.raised')}</span>
                  <span>{t('projects.goal')}: €800,000</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-zinc-800/50 pt-4">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <Timer className="w-5 h-5" />
                    <span className="text-xs font-bold">45 {t('projects.daysLeft')}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <Users className="w-5 h-5" />
                    <span className="text-xs font-bold">124 {t('projects.investors')}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors"><MessageSquare className="w-5 h-5" /></button>
                  <button className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors"><Share2 className="w-5 h-5" /></button>
                  <button className="bg-emerald-700 text-white px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">{t('projects.invest')}</button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Right Sidebar */}
      <aside className="hidden lg:block lg:col-span-4 space-y-6">
        <section className="bg-zinc-900/40 rounded-xl p-6 border-l-2 border-emerald-500">
          <h3 className="font-headline font-bold text-zinc-200 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-emerald-400" />
            {t('projects.communityPulse')}
          </h3>
          <div className="space-y-4">
            <div className="p-3 bg-zinc-950/40 rounded-lg border border-zinc-800">
              <p className="text-xs text-zinc-300 leading-relaxed italic">"El proyecto Atlántida acaba de recibir una inversión de €500k de una DAO noruega. El momentum es increíble."</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{t('projects.activeInsight')}</span>
              </div>
            </div>
            <div className="p-3 bg-zinc-950/40 rounded-lg border border-zinc-800">
              <p className="text-xs text-zinc-300 leading-relaxed italic">"Interés por la energía mareomotriz subiendo un 24% esta semana en el marketplace."</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{t('projects.marketTrend')}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900/40 rounded-xl p-6">
          <h3 className="font-headline font-bold text-zinc-200 mb-6 flex items-center gap-2 uppercase text-xs tracking-[0.2em]">{t('projects.trendingProjects')}</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <span className="text-2xl font-black text-zinc-800 group-hover:text-emerald-500/20 transition-colors">01</span>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">Fusión Solar Beta</h4>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black mt-1">98% {t('projects.funded')}</p>
              </div>
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <span className="text-2xl font-black text-zinc-800 group-hover:text-emerald-500/20 transition-colors">02</span>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">Bio-Masa Urbana</h4>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black mt-1">€1.2M {t('projects.raised')}</p>
              </div>
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <span className="text-2xl font-black text-zinc-800 group-hover:text-emerald-500/20 transition-colors">03</span>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">Hidrógeno Verde X</h4>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black mt-1">{t('projects.launchTomorrow')}</p>
              </div>
              <Clock className="w-5 h-5 text-zinc-700" />
            </div>
          </div>
          <button className="w-full mt-8 py-3 rounded-lg border border-zinc-800 text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-zinc-800/50 hover:text-zinc-200 transition-all">{t('projects.viewAllRankings')}</button>
        </section>

        <div className="relative h-40 rounded-xl overflow-hidden group">
          <img 
            alt="Abstract tech background" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-[2s]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChA7_7BH-2xgrsL12yonVXTSsTcVROo0AZKovMVayuRijKtej8N2Ym7K5Vlx3ofzG7UHN0secHCNpxp2Cuf53gHnIjwwCQ1NFkrxHSqTqlyosb0PU_VIc3I8JSyohR_C8X96iXuQwtjCg7c3wRZERr8j_grt4J1ePWroN-Eotnbb9rALeG28lEQUUl7-VFU75qPMJeId6EeCxILSG_VfGGcgi96qiyj7HQeb4BzoTLPVh26Ej1E6ivjAo6SSJlfgw5HhjhaP0d5AtH"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent p-6 flex flex-col justify-end">
            <div className="text-emerald-400 font-black text-2xl tracking-tighter">€142.8M</div>
            <div className="text-[10px] text-zinc-400 uppercase font-black tracking-widest">{t('projects.totalImpactGenerated')}</div>
          </div>
        </div>
      </aside>
    </>
  );
}
