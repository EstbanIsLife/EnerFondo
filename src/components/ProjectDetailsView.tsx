import { ChevronLeft, CheckCircle2, Circle } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

interface ProjectDetailsViewProps {
  projectId: string;
  onBack: () => void;
}

const projectConfig = {
  gamma: {
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    milestoneStates: ['completed', 'upcoming', 'upcoming']
  },
  beta: {
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80",
    milestoneStates: ['completed', 'upcoming', 'upcoming']
  },
  alpha: {
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=80",
    milestoneStates: ['completed', 'completed', 'upcoming']
  }
};

export function ProjectDetailsView({ projectId, onBack }: ProjectDetailsViewProps) {
  const { t } = useLanguage();
  
  // Fallback to gamma if invalid projectId
  const safeProjectId = projectId in projectConfig ? projectId : 'gamma';
  const config = projectConfig[safeProjectId as keyof typeof projectConfig];

  return (
    <>
      <div className="col-span-12 lg:col-span-8 space-y-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors px-4 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 w-fit text-sm font-bold"
        >
          <ChevronLeft className="w-4 h-4" />
          {t('projectDetails.backToMarketplace')}
        </button>

        <div className="rounded-2xl overflow-hidden border border-zinc-800/50">
          <img 
            src={config.image} 
            alt={t(`projectDetails.${safeProjectId}.title`)} 
            className="w-full h-[400px] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold font-headline text-white">{t(`projectDetails.${safeProjectId}.title`)} {t('projectDetails.description')}</h2>
          <p className="text-zinc-400 leading-relaxed text-sm">
            {t(`projectDetails.${safeProjectId}.description`)}
          </p>
        </div>

        <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/20 border border-emerald-500/30 rounded-2xl p-6">
          <p className="text-emerald-400 text-sm mb-2">{t('projectDetails.environmentalImpact')}</p>
          <p className="text-2xl text-white font-headline">
            <span className="font-bold">{t(`projectDetails.${safeProjectId}.impactCo2`)} Tons CO2</span> <span className="text-zinc-300">{t('projectDetails.offset')},</span> <span className="font-bold">{t(`projectDetails.${safeProjectId}.impactEnergy`)} GWh</span> <span className="text-zinc-300">{t('projectDetails.energyGenerated')}</span>
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold font-headline text-white">{t('projectDetails.projectMilestones')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((num, idx) => {
              const state = config.milestoneStates[idx];
              const isCompleted = state === 'completed';
              return (
                <div key={num} className={`border-t-2 ${isCompleted ? 'border-emerald-500' : 'border-zinc-800'} pt-4`}>
                  <div className={`flex items-center gap-2 ${isCompleted ? 'text-emerald-400' : 'text-zinc-500'} mb-2`}>
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                    <span className="font-bold text-sm">{isCompleted ? t('projectDetails.completed') : t('projectDetails.upcomingPhase')}</span>
                  </div>
                  <p className={`${isCompleted ? 'text-zinc-400' : 'text-zinc-500'} text-sm`}>{t(`projectDetails.${safeProjectId}.milestone${num}`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <aside className="col-span-12 lg:col-span-4 space-y-6 lg:sticky lg:top-24 h-fit">
        <section className="bg-zinc-900/40 rounded-2xl p-6 border border-zinc-800/50">
          <h3 className="text-xl font-bold font-headline text-white mb-6">{t('projectDetails.participate')}</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-xs text-zinc-500 mb-1 px-1">
              <span>{t('projectDetails.minInvestment')}</span>
              <span>{t('projectDetails.maxInvestment')}</span>
            </div>
            <input 
              type="text" 
              placeholder={t('projectDetails.enterInvestmentAmount')}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
            />
            <button className="w-full py-3 rounded-xl bg-emerald-400 text-zinc-950 font-bold hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-900/20 mt-2">
              {t('projectDetails.confirmInvestment')}
            </button>
            <p className="text-center text-[10px] text-zinc-500 pt-2">
              {t('projectDetails.termsAgreement')} <a href="#" className="text-emerald-400 hover:underline">{t('projectDetails.termsOfService')}</a> {t('projectDetails.and')} <a href="#" className="text-emerald-400 hover:underline">{t('projectDetails.riskDisclosure')}</a>.
            </p>
          </div>

          <div>
            <p className="text-zinc-500 text-sm mb-1">{t('projectDetails.expectedReturns')}</p>
            <p className="text-2xl font-bold font-headline text-white">{t(`projectDetails.${safeProjectId}.roi`)} {t('projectDetails.annually')}</p>
          </div>
        </section>

        <section className="bg-zinc-900/40 rounded-2xl p-6 border border-zinc-800/50">
          <h3 className="text-xl font-bold font-headline text-white mb-6">{t('projectDetails.riskAssessment')}</h3>
          
          {/* Radar Chart Placeholder */}
          <div className="relative aspect-square w-full max-w-[250px] mx-auto">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              {/* Grid */}
              <polygon points="50,10 90,35 75,85 25,85 10,35" fill="none" stroke="#27272a" strokeWidth="1" />
              <polygon points="50,25 80,45 65,75 35,75 20,45" fill="none" stroke="#27272a" strokeWidth="1" />
              <polygon points="50,40 70,55 55,65 45,65 30,55" fill="none" stroke="#27272a" strokeWidth="1" />
              
              {/* Axes */}
              <line x1="50" y1="50" x2="50" y2="10" stroke="#27272a" strokeWidth="1" />
              <line x1="50" y1="50" x2="90" y2="35" stroke="#27272a" strokeWidth="1" />
              <line x1="50" y1="50" x2="75" y2="85" stroke="#27272a" strokeWidth="1" />
              <line x1="50" y1="50" x2="25" y2="85" stroke="#27272a" strokeWidth="1" />
              <line x1="50" y1="50" x2="10" y2="35" stroke="#27272a" strokeWidth="1" />
              
              {/* Data Polygon */}
              <polygon points="50,30 75,45 60,70 40,70 25,50" fill="rgba(16, 185, 129, 0.2)" stroke="#34d399" strokeWidth="2" />
            </svg>
            
            {/* Labels */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500">{t('projectDetails.risk')}</div>
            <div className="absolute top-1/4 -right-6 text-[10px] text-zinc-500">{t('projectDetails.medium')}</div>
            <div className="absolute bottom-4 -right-2 text-[10px] text-zinc-500">{t('projectDetails.low')}</div>
            <div className="absolute bottom-4 -left-2 text-[10px] text-zinc-500">{t('projectDetails.low')}</div>
            <div className="absolute top-1/4 -left-6 text-[10px] text-zinc-500">{t('projectDetails.medium')}</div>
          </div>
        </section>
      </aside>
    </>
  );
}
