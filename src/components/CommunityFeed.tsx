import { ArrowUp, ArrowDown, MessageSquare, Share2, Flag, Image as ImageIcon, Paperclip, Bookmark } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

export function CommunityFeed() {
  const { t } = useLanguage();

  return (
    <div className="col-span-12 lg:col-span-8 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold font-headline tracking-tight text-white">{t('community.communityPulse')}</h1>
        <p className="text-zinc-400 text-sm">{t('community.liveDiscussions')}</p>
      </div>

      {/* Post Creation Quick Access */}
      <div className="bg-zinc-900/50 rounded-xl p-4 flex items-center gap-4 border border-zinc-800/50">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces" 
          alt="User" 
          className="w-10 h-10 rounded-full object-cover border border-emerald-500/20"
        />
        <input 
          type="text" 
          placeholder={t('community.shareInsight')} 
          className="bg-zinc-800/50 border-none text-zinc-300 text-sm rounded-xl px-4 py-3 flex-1 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all"
        />
        <div className="flex gap-2">
          <button className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-zinc-800">
            <ImageIcon className="w-5 h-5" />
          </button>
          <button className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-zinc-800">
            <Paperclip className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Feed Filter Chips */}
      <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
        <button className="px-4 py-1.5 bg-emerald-500 text-zinc-950 rounded-full text-[10px] font-black uppercase tracking-wider whitespace-nowrap">{t('community.newest')}</button>
        <button className="px-4 py-1.5 bg-zinc-900 text-zinc-400 rounded-full text-[10px] font-black uppercase tracking-wider hover:bg-zinc-800 transition-colors whitespace-nowrap">{t('community.trending')}</button>
        <button className="px-4 py-1.5 bg-zinc-900 text-zinc-400 rounded-full text-[10px] font-black uppercase tracking-wider hover:bg-zinc-800 transition-colors whitespace-nowrap">{t('community.governance')}</button>
        <button className="px-4 py-1.5 bg-zinc-900 text-zinc-400 rounded-full text-[10px] font-black uppercase tracking-wider hover:bg-zinc-800 transition-colors whitespace-nowrap">{t('community.projectAlpha')}</button>
      </div>

      {/* Community Threads */}
      <div className="space-y-6">
        
        {/* Post 1 */}
        <article className="bg-zinc-900/40 rounded-xl overflow-hidden hover:bg-zinc-900/60 transition-all group border border-transparent hover:border-emerald-500/10">
          <div className="flex gap-4 p-6">
            {/* Voting Sidebar */}
            <div className="flex flex-col items-center gap-1 text-zinc-500 bg-zinc-950/30 rounded-lg p-2 h-fit">
              <ArrowUp className="w-5 h-5 cursor-pointer hover:text-emerald-400 transition-colors" />
              <span className="text-xs font-bold font-headline text-emerald-400">1.2k</span>
              <ArrowDown className="w-5 h-5 cursor-pointer hover:text-red-400 transition-colors" />
            </div>
            
            <div className="flex-1">
              {/* Metadata */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded tracking-widest uppercase">PROJECT SOLARIS</span>
                <span className="text-zinc-600 text-xs">•</span>
                <span className="text-zinc-400 text-[11px] font-medium uppercase tracking-wider">
                  {t('community.postedBy')} <span className="text-emerald-200/80 hover:underline cursor-pointer">u/alex_chains</span> 4{t('community.h')} {t('community.ago')}
                </span>
              </div>
              
              {/* Content */}
              <h2 className="text-xl font-bold font-headline text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors cursor-pointer">
                Standardizing PV Inverter telemetry for cross-chain carbon credits
              </h2>
              <p className="text-zinc-400 text-sm line-clamp-2 font-light leading-relaxed mb-6">
                We are proposing a new standard for telemetry ingestion that reduces latency by 40% when syncing with the mainnet. This would significantly lower gas costs for small-scale solar providers and improve real-time verification accuracy.
              </p>
              
              {/* Footer */}
              <div className="flex items-center justify-between border-t border-zinc-800/50 pt-4">
                <div className="flex gap-6">
                  <button className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group/btn">
                    <MessageSquare className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">84 {t('community.comments')}</span>
                  </button>
                  <button className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group/btn">
                    <Share2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">{t('community.share')}</span>
                  </button>
                  <button className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group/btn">
                    <Flag className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">{t('community.report')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Post 2 (With Image) */}
        <article className="bg-zinc-900/40 rounded-xl overflow-hidden hover:bg-zinc-900/60 transition-all group border border-transparent hover:border-emerald-500/10">
          <div className="flex gap-4 p-6">
            <div className="flex flex-col items-center gap-1 text-zinc-500 bg-zinc-950/30 rounded-lg p-2 h-fit">
              <ArrowUp className="w-5 h-5 cursor-pointer hover:text-emerald-400 transition-colors" />
              <span className="text-xs font-bold font-headline text-emerald-400">856</span>
              <ArrowDown className="w-5 h-5 cursor-pointer hover:text-red-400 transition-colors" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="bg-sky-500/10 text-sky-400 text-[10px] font-black px-2 py-0.5 rounded tracking-widest uppercase">{t('community.governance')}</span>
                <span className="text-zinc-600 text-xs">•</span>
                <span className="text-zinc-400 text-[11px] font-medium uppercase tracking-wider">
                  {t('community.postedBy')} <span className="text-emerald-200/80 hover:underline cursor-pointer">u/veridian_labs</span> 12{t('community.h')} {t('community.ago')}
                </span>
              </div>
              
              <h2 className="text-xl font-bold font-headline text-zinc-100 mb-4 group-hover:text-emerald-400 transition-colors cursor-pointer">
                VGP-04: Allocation of $4M treasury for African Off-grid Wind
              </h2>
              
              <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-zinc-800 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80" 
                  alt="Wind turbines at sunset" 
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent"></div>
              </div>
              
              <p className="text-zinc-400 text-sm line-clamp-2 font-light leading-relaxed mb-6">
                Official proposal to initiate the Series B funding for regional wind microgrids. Discussion is now open for technical due diligence and community feedback before the final vote.
              </p>
              
              <div className="flex items-center justify-between border-t border-zinc-800/50 pt-4">
                <div className="flex gap-6">
                  <button className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group/btn">
                    <MessageSquare className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">212 {t('community.comments')}</span>
                  </button>
                  <button className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group/btn">
                    <Bookmark className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">{t('community.save')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Post 3 (With Image) */}
        <article className="bg-zinc-900/40 rounded-xl overflow-hidden hover:bg-zinc-900/60 transition-all group border border-transparent hover:border-emerald-500/10">
          <div className="flex gap-4 p-6">
            <div className="flex flex-col items-center gap-1 text-zinc-500 bg-zinc-950/30 rounded-lg p-2 h-fit">
              <ArrowUp className="w-5 h-5 cursor-pointer hover:text-emerald-400 transition-colors" />
              <span className="text-xs font-bold font-headline text-emerald-400">432</span>
              <ArrowDown className="w-5 h-5 cursor-pointer hover:text-red-400 transition-colors" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="bg-amber-500/10 text-amber-400 text-[10px] font-black px-2 py-0.5 rounded tracking-widest uppercase">{t('community.showcase')}</span>
                <span className="text-zinc-600 text-xs">•</span>
                <span className="text-zinc-400 text-[11px] font-medium uppercase tracking-wider">
                  {t('community.postedBy')} <span className="text-emerald-200/80 hover:underline cursor-pointer">u/eco_dev</span> 1{t('community.d')} {t('community.ago')}
                </span>
              </div>
              
              <h2 className="text-xl font-bold font-headline text-zinc-100 mb-4 group-hover:text-emerald-400 transition-colors cursor-pointer">
                Just deployed the first smart contract for the Andes Hydro Plant 🌊
              </h2>
              
              <div className="relative h-64 rounded-xl overflow-hidden mb-4 bg-zinc-800 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80" 
                  alt="Hydroelectric dam" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent"></div>
              </div>
              
              <p className="text-zinc-400 text-sm line-clamp-2 font-light leading-relaxed mb-6">
                After 6 months of development and auditing, we've finally pushed the revenue-sharing contract to mainnet. Yields will start distributing to token holders next week!
              </p>
              
              <div className="flex items-center justify-between border-t border-zinc-800/50 pt-4">
                <div className="flex gap-6">
                  <button className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group/btn">
                    <MessageSquare className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">56 {t('community.comments')}</span>
                  </button>
                  <button className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group/btn">
                    <Share2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">{t('community.share')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

      </div>
    </div>
  );
}
