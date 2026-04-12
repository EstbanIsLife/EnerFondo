import { User, Bell, Shield, Key, Globe, CreditCard, LogOut } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

export function SettingsView() {
  const { t } = useLanguage();

  return (
    <div className="col-span-12 lg:col-span-8 space-y-8">
      <header>
        <h2 className="font-headline text-4xl font-extrabold tracking-tight text-white mb-2">{t('settings.title')}</h2>
        <p className="text-zinc-400">{t('settings.subtitle')}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Settings Navigation */}
        <div className="md:col-span-4 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-zinc-900 text-emerald-400 rounded-xl font-bold text-sm transition-colors border border-emerald-500/20">
            <User className="w-5 h-5" />
            {t('settings.profile')}
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200 rounded-xl font-bold text-sm transition-colors">
            <Bell className="w-5 h-5" />
            {t('settings.notifications')}
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200 rounded-xl font-bold text-sm transition-colors">
            <Shield className="w-5 h-5" />
            {t('settings.security')}
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200 rounded-xl font-bold text-sm transition-colors">
            <Key className="w-5 h-5" />
            {t('settings.apiKeys')}
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200 rounded-xl font-bold text-sm transition-colors">
            <Globe className="w-5 h-5" />
            {t('settings.preferences')}
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200 rounded-xl font-bold text-sm transition-colors">
            <CreditCard className="w-5 h-5" />
            {t('settings.billing')}
          </button>
          
          <div className="pt-8 mt-8 border-t border-zinc-800/50">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl font-bold text-sm transition-colors">
              <LogOut className="w-5 h-5" />
              {t('settings.logOut')}
            </button>
          </div>
        </div>

        {/* Settings Content Area */}
        <div className="md:col-span-8 space-y-8">
          
          {/* Profile Section */}
          <section className="bg-zinc-900/40 rounded-xl border border-zinc-800/50 p-6">
            <h3 className="font-headline font-bold text-xl text-white mb-6">{t('settings.publicProfile')}</h3>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces" 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full object-cover border-2 border-zinc-800"
                />
                <button className="absolute bottom-0 right-0 bg-emerald-500 text-zinc-950 p-1.5 rounded-full hover:bg-emerald-400 transition-colors">
                  <User className="w-4 h-4" />
                </button>
              </div>
              <div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-zinc-800 text-zinc-200 font-bold text-sm rounded-lg hover:bg-zinc-700 transition-colors">
                    {t('settings.changeAvatar')}
                  </button>
                  <button className="px-4 py-2 text-zinc-400 font-bold text-sm rounded-lg hover:text-zinc-200 transition-colors">
                    {t('settings.remove')}
                  </button>
                </div>
                <p className="text-xs text-zinc-500 mt-2">{t('settings.avatarHint')}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">{t('settings.firstName')}</label>
                  <input 
                    type="text" 
                    defaultValue="Alex"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">{t('settings.lastName')}</label>
                  <input 
                    type="text" 
                    defaultValue="Chains"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">{t('settings.emailAddress')}</label>
                <input 
                  type="email" 
                  defaultValue="alex@veridian.io"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">{t('settings.bio')}</label>
                <textarea 
                  rows={4}
                  defaultValue={t('settings.bioPlaceholder')}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                ></textarea>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button className="px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-colors">
                {t('settings.saveChanges')}
              </button>
            </div>
          </section>

          {/* Connected Accounts */}
          <section className="bg-zinc-900/40 rounded-xl border border-zinc-800/50 p-6">
            <h3 className="font-headline font-bold text-xl text-white mb-2">{t('settings.connectedAccounts')}</h3>
            <p className="text-sm text-zinc-400 mb-6">{t('settings.connectedAccountsDesc')}</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-zinc-950/50 rounded-lg border border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center">
                    <span className="font-bold text-zinc-400">W</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-200">{t('settings.web3Wallet')}</h4>
                    <p className="text-xs text-zinc-500 font-mono">0x71C...9A23</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-zinc-400 hover:text-zinc-200 transition-colors px-3 py-1.5 bg-zinc-800 rounded-md">
                  {t('settings.disconnect')}
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-zinc-950/50 rounded-lg border border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center">
                    <span className="font-bold text-zinc-400">G</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-200">GitHub</h4>
                    <p className="text-xs text-zinc-500">{t('settings.notConnected')}</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors px-3 py-1.5 bg-emerald-500/10 rounded-md">
                  {t('settings.connect')}
                </button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
