import { 
  Target, 
  Shield, 
  Cpu, 
  Activity, 
  Cloud, 
  Smartphone, 
  Languages, 
  Clock, 
  FileCheck,
  LayoutDashboard,
  Lightbulb,
  Store,
  FolderOpen,
  UserCheck,
  GitCommit,
  X
} from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const { t } = useLanguage();

  const nfrs = [
    { icon: Shield, text: t('about.nfrSecurity') },
    { icon: FileCheck, text: t('about.nfrIp') },
    { icon: Activity, text: t('about.nfrPerformance') },
    { icon: Cloud, text: t('about.nfrArchitecture') },
    { icon: Smartphone, text: t('about.nfrUsability') },
    { icon: Languages, text: t('about.nfrLanguage') },
    { icon: Clock, text: t('about.nfrAvailability') },
    { icon: FileCheck, text: t('about.nfrCompliance') },
  ];

  const navModules = [
    { icon: LayoutDashboard, title: t('about.navLanding'), desc: t('about.navLandingDesc') },
    { icon: Lightbulb, title: t('about.navIncubator'), desc: t('about.navIncubatorDesc') },
    { icon: Store, title: t('about.navMarket'), desc: t('about.navMarketDesc') },
    { icon: FolderOpen, title: t('about.navRepo'), desc: t('about.navRepoDesc') },
    { icon: UserCheck, title: t('about.navProfile'), desc: t('about.navProfileDesc') },
  ];

  const lifecycleSteps = [
    t('about.step1'),
    t('about.step2'),
    t('about.step3'),
    t('about.step4'),
    t('about.step5'),
    t('about.step6'),
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl z-[101] p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-8">
              <header className="mb-10 pr-12">
                <h1 className="text-3xl font-headline font-bold text-zinc-100 mb-2">{t('about.title')}</h1>
                <p className="text-zinc-400">{t('about.subtitle')}</p>
              </header>

              {/* 1. Context & Objectives */}
              <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/10 transition-colors"></div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                    <Target className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-100">{t('about.contextTitle')}</h2>
                </div>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                    <div>
                      <p className="font-bold text-zinc-200">{t('about.contextTarget')}</p>
                      <p className="text-zinc-400 text-sm mt-1">{t('about.contextGoal')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                    <p className="text-zinc-300">{t('about.contextMetrics')}</p>
                  </div>
                </div>
              </section>

              {/* 2. Non-Functional Requirements */}
              <section>
                <h2 className="text-xl font-bold text-zinc-100 mb-6 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                  {t('about.nfrTitle')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {nfrs.map((nfr, i) => {
                    const Icon = nfr.icon;
                    return (
                      <div key={i} className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-4 flex items-start gap-3 hover:border-emerald-500/30 transition-colors">
                        <Icon className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-zinc-300">{nfr.text}</p>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 3. Navigation & Functional Modules */}
              <section>
                <h2 className="text-xl font-bold text-zinc-100 mb-6 flex items-center gap-2">
                  <LayoutDashboard className="w-5 h-5 text-emerald-400" />
                  {t('about.navTitle')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {navModules.map((mod, i) => {
                    const Icon = mod.icon;
                    return (
                      <div key={i} className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5 hover:bg-zinc-800/50 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-zinc-800 rounded-lg text-emerald-400">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="font-bold text-zinc-100">{mod.title}</h3>
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed">{mod.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 4. Project Lifecycle */}
              <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-zinc-100 mb-8 flex items-center gap-2">
                  <GitCommit className="w-5 h-5 text-emerald-400" />
                  {t('about.lifecycleTitle')}
                </h2>
                <div className="relative">
                  <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-zinc-800"></div>
                  <div className="space-y-8">
                    {lifecycleSteps.map((step, i) => (
                      <div key={i} className="flex items-center gap-6 relative">
                        <div className="w-8 h-8 rounded-full bg-zinc-950 border-2 border-emerald-500 flex items-center justify-center shrink-0 z-10 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                          <span className="text-xs font-bold text-emerald-400">{i + 1}</span>
                        </div>
                        <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 flex-1 hover:border-emerald-500/50 transition-colors">
                          <p className="text-zinc-200 font-medium">{step.replace(/^\d+\.\s*/, '')}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
