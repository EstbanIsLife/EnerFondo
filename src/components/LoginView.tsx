import { useState } from 'react';
import { Mail, Lock, Wallet, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

interface LoginViewProps {
  onLogin: () => void;
  onBack: () => void;
}

export function LoginView({ onLogin, onBack }: LoginViewProps) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    onLogin();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-body flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Back Button */}
      <button 
        onClick={onBack}
        className="absolute top-8 left-8 flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors z-20 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-bold uppercase tracking-widest">{t('login.back')}</span>
      </button>

      {/* Login Card */}
      <div className="z-10 w-full max-w-md p-8 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/50 rounded-2xl shadow-2xl shadow-emerald-900/10">
        <div className="text-center mb-8">
          <div className="large grid centered square-grid mx-auto mb-4 w-16 h-16">
            <h2 className="text-2xl font-bold tracking-tighter text-emerald-400 font-headline flex items-center justify-center h-full">
              E
            </h2>
          </div>
          <h1 className="text-3xl font-headline font-bold text-zinc-100 mb-2">{t('login.title')}</h1>
          <p className="text-zinc-400 text-sm">{t('login.subtitle')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">{t('login.email')}</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-zinc-500" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-950/50 border border-zinc-800 text-zinc-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                placeholder="investor@syndicate.org"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">{t('login.password')}</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-zinc-500" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-950/50 border border-zinc-800 text-zinc-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-emerald-900/20 mt-4"
          >
            {t('login.signIn')}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-800"></div>
          </div>
          <div className="relative px-4 bg-zinc-900/60 text-xs font-bold uppercase tracking-widest text-zinc-500">
            {t('login.or')}
          </div>
        </div>

        <button
          type="button"
          onClick={onLogin}
          className="mt-8 w-full bg-zinc-950 text-zinc-300 font-bold py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-800 border border-zinc-800 transition-all"
        >
          <Wallet className="w-5 h-5 text-emerald-400" />
          {t('login.connectWallet')}
        </button>
      </div>
    </div>
  );
}
