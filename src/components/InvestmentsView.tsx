import { TrendingUp, ArrowRight, MoreVertical, PieChart, Sparkles, ChevronRight } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

export function InvestmentsView() {
  const { t } = useLanguage();

  return (
    <>
      {/* Center Column: Primary Ledger */}
      <div className="col-span-12 lg:col-span-8 space-y-8">
        <header className="flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight font-headline text-zinc-100">{t('investments.title')}</h2>
            <p className="text-zinc-400 mt-2 font-body text-sm">{t('investments.subtitle')}</p>
          </div>
          <div className="flex bg-zinc-900 p-1 rounded-xl">
            <button className="px-5 py-2 text-sm font-semibold bg-zinc-800 text-emerald-400 rounded-lg shadow-sm">{t('investments.active')}</button>
            <button className="px-5 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors">{t('investments.completed')}</button>
            <button className="px-5 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors">{t('investments.pending')}</button>
          </div>
        </header>

        {/* Detailed Ledger Table */}
        <div className="bg-zinc-900/40 rounded-xl overflow-hidden border border-zinc-800/50">
          <table className="w-full text-left border-collapse">
            <thead className="bg-zinc-950/50 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
              <tr>
                <th className="px-6 py-5">{t('investments.projectName')}</th>
                <th className="px-6 py-5">{t('investments.amountInvested')}</th>
                <th className="px-6 py-5 text-center">{t('investments.yield')}</th>
                <th className="px-6 py-5">{t('investments.status')}</th>
                <th className="px-6 py-5 text-right">{t('investments.action')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50 font-body text-sm">
              <tr className="group hover:bg-zinc-800/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        className="w-full h-full object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAemKKMqL69q6jCdGtQtHc-3IcuMdScyz9glq0JB4-A5x0NhAeRwIYaapkfQelDVd9f3rfwc32__Jr3NmjjdVgJZAlK5lOnC46IdcAsXQcnTulN9JHetSQ3l7o01lGa9cHgDwwDJgu4EsuPRH9ovyqgdEppoVSplz6o2DUcKa_FoYI65cf58KvmqnkZaym2Jrb4EY2PD6D4m5-xwhrIvIsCqYngvVBcf7WgRDbji2eRo0dNN0DC_TqEPolisI6-xDy3Q-nCgt-aJQKX"
                        alt="Azure Solis IV"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-100">Azure Solis IV</div>
                      <div className="text-[10px] uppercase text-zinc-500 tracking-wider">Solar PV • Spain</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-zinc-300">$12,450.00</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold">
                    <span>8.4%</span>
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">{t('investments.generating')}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-zinc-500 hover:text-emerald-400 transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
              <tr className="group hover:bg-zinc-800/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        className="w-full h-full object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbKp2XQqnmZjxqHLSvWYtYd9MPXC9KXjWHaPRPPdCmZ-vxqUINwf0yoFf7LnMYJ_3fVVuWY7d0DyM_qfvXeOSGDkOfp65VKCA0wSZu_G9d-mQegRbCiNf180EPMXdzc6BuSHbVcbodDag2ThdFScJq6EKJFrA4Z00-hqMVV49JGzJwhrVRBQGVkngGgVsFNtQAh_Q_MpQOn0yc5AcaEKkgFgwiqW9evpPdUnrJ0owbT61S98DcYSLqKUnPE4buC1TO0O8C3u1-yLPY"
                        alt="Nordic Zephyr"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-100">Nordic Zephyr</div>
                      <div className="text-[10px] uppercase text-zinc-500 tracking-wider">Wind Farm • Denmark</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-zinc-300">$25,000.00</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold">
                    <span>12.1%</span>
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">{t('investments.generating')}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-zinc-500 hover:text-emerald-400 transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
              <tr className="group hover:bg-zinc-800/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        className="w-full h-full object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkpYIu_E59WDE1H8PEKfoa-0b8Pa36Ojd6LWCQJI1PYJHRlFm9AgJzMIF7svjGiJW3z_0GLRC6cyQds5OoyIc8CDnJJ3jkdNCTocjRBkahep5TteeAZ3jH8892fBIS2VlTzFp3vhs1DIvmsqQURyyZX3Z9a3z-aCaKlc1kzrIvQ3xlbhl_EJ4L4rjf5JqGsqcVkf6P97Npk-n4XKI3OiBJxnQOs_EIJH0yK2zOg_jKZxpUu6p09Qce7Z9WVmmRfU10JrH0mM67bULg"
                        alt="Andean Flow"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-100">Andean Flow</div>
                      <div className="text-[10px] uppercase text-zinc-500 tracking-wider">Hydro • Chile</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-zinc-300">$8,200.00</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-1 text-zinc-400 font-bold">
                    <span>6.5%</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-[10px] font-bold uppercase tracking-wider">{t('investments.optimization')}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-zinc-500 hover:text-emerald-400 transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-zinc-900/40 p-6 rounded-xl border border-zinc-800/50">
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-2">{t('investments.totalCapital')}</p>
            <h4 className="text-3xl font-black text-zinc-100">$90,650.00</h4>
          </div>
          <div className="bg-zinc-900/40 p-6 rounded-xl border border-zinc-800/50">
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-2">{t('investments.portfolioApr')}</p>
            <h4 className="text-3xl font-black text-emerald-400">10.45%</h4>
          </div>
          <div className="bg-zinc-900/40 p-6 rounded-xl border border-zinc-800/50">
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-2">{t('investments.co2Offset')}</p>
            <h4 className="text-3xl font-black text-emerald-400">12.4t</h4>
          </div>
        </div>
      </div>

      {/* Right Column: Visual Ledger & Insights */}
      <aside className="hidden lg:block lg:col-span-4 space-y-6">
        {/* Portfolio Allocation */}
        <section className="bg-zinc-900/40 rounded-xl p-6 border-l-2 border-emerald-500">
          <h3 className="font-headline font-bold text-zinc-200 mb-6 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-emerald-400" />
            {t('investments.portfolioAllocation')}
          </h3>
          <div className="relative w-40 h-40 mx-auto mb-8">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" fill="transparent" r="15.9" className="text-emerald-600" stroke="currentColor" strokeDasharray="45 100" strokeWidth="3.5"></circle>
              <circle cx="18" cy="18" fill="transparent" r="15.9" className="text-sky-600" stroke="currentColor" strokeDasharray="35 100" strokeDashoffset="-45" strokeWidth="3.5"></circle>
              <circle cx="18" cy="18" fill="transparent" r="15.9" className="text-emerald-400" stroke="currentColor" strokeDasharray="20 100" strokeDashoffset="-80" strokeWidth="3.5"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-zinc-100">14</span>
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">{t('investments.assets')}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-zinc-950/40 p-3 rounded-lg border border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                <span className="text-xs font-medium text-zinc-300">{t('investments.windEnergy')}</span>
              </div>
              <span className="text-xs font-bold text-zinc-100">45%</span>
            </div>
            <div className="flex justify-between items-center bg-zinc-950/40 p-3 rounded-lg border border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sky-600"></div>
                <span className="text-xs font-medium text-zinc-300">{t('investments.hydroPower')}</span>
              </div>
              <span className="text-xs font-bold text-zinc-100">35%</span>
            </div>
            <div className="flex justify-between items-center bg-zinc-950/40 p-3 rounded-lg border border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span className="text-xs font-medium text-zinc-300">{t('investments.solarPv')}</span>
              </div>
              <span className="text-xs font-bold text-zinc-100">20%</span>
            </div>
          </div>
        </section>

        {/* Yield Forecast Summary */}
        <section className="bg-zinc-900/40 rounded-xl p-6">
          <h3 className="font-headline font-bold text-zinc-200 mb-6 flex items-center gap-2 uppercase text-xs tracking-[0.2em]">
            {t('investments.yieldForecast')}
          </h3>
          <div className="p-6 rounded-xl bg-zinc-950/40 border border-emerald-500/20">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-1">{t('investments.expectedReturns')}</p>
                <h4 className="text-2xl font-black text-zinc-100">$9,472.92</h4>
              </div>
              <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded">+14.2%</span>
            </div>
            <div className="space-y-4">
              <div className="relative h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-emerald-400 w-3/4 shadow-[0_0_12px_rgba(48,227,117,0.3)]"></div>
              </div>
              <div className="flex justify-between text-[11px] text-zinc-500 font-bold uppercase tracking-wider">
                <span>{t('investments.target')}: $12.5k</span>
                <span>{t('investments.remain')}: $3.0k</span>
              </div>
            </div>
          </div>
          <button className="w-full mt-6 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-between group transition-all">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-bold text-zinc-300">{t('investments.optimizePortfolio')}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
          </button>
        </section>

        {/* Pulse Component */}
        <section className="bg-zinc-900/40 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{t('investments.networkPulse')}</span>
          </div>
          <p className="text-xs leading-relaxed text-zinc-300 italic">
            "Solar yields in southern Spain are trending 15% above forecast. Consider increasing allocation in Azure Solis IV for optimized APR."
          </p>
        </section>
      </aside>
    </>
  );
}
