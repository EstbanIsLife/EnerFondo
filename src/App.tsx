import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { CommunityFeed } from './components/CommunityFeed';
import { RightSidebar } from './components/RightSidebar';
import { DashboardView } from './components/DashboardView';
import { ImpactReportView } from './components/ImpactReportView';
import { InvestmentsView } from './components/InvestmentsView';
import { ProjectsView } from './components/ProjectsView';
import { HomeView } from './components/HomeView';
import { SettingsView } from './components/SettingsView';
import { MarketplaceView } from './components/MarketplaceView';
import { ProjectDetailsView } from './components/ProjectDetailsView';
import { PenSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LanguageProvider, useLanguage } from './lib/i18n/LanguageContext';

function AppContent() {
  const [currentView, setCurrentView] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedProject, setSelectedProject] = useState('gamma');
  const { t } = useLanguage();

  if (currentView === 'home') {
    return <HomeView onEnter={() => setCurrentView('dashboard')} />;
  }

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
      <Sidebar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        isOpen={isSidebarOpen} 
      />
      
      <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <TopNav 
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
          setCurrentView={setCurrentView}
          currentView={currentView}
        />
        
        <main className="flex-1 p-8 mt-16">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-[1600px] mx-auto grid grid-cols-12 gap-8"
            >
              {currentView === 'community' ? (
                <>
                  <CommunityFeed />
                  <RightSidebar />
                </>
              ) : currentView === 'impact' ? (
                <ImpactReportView />
              ) : currentView === 'investments' ? (
                <InvestmentsView />
              ) : currentView === 'projects' ? (
                <ProjectsView />
              ) : currentView === 'settings' ? (
                <SettingsView />
              ) : currentView === 'marketplace' ? (
                <MarketplaceView onInvestClick={(id) => { setSelectedProject(id); setCurrentView('projectDetails'); }} />
              ) : currentView === 'projectDetails' ? (
                <ProjectDetailsView projectId={selectedProject} onBack={() => setCurrentView('marketplace')} />
              ) : (
                <DashboardView />
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* FAB for Discussion */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-emerald-500 text-zinc-950 rounded-full shadow-xl shadow-emerald-900/40 flex items-center justify-center hover:scale-110 transition-all active:scale-95 group z-50">
        <PenSquare className="w-6 h-6" />
        <div className="absolute right-full mr-4 bg-zinc-900 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-emerald-900/20 whitespace-nowrap">
          {t('common.startDiscussion')}
        </div>
      </button>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
