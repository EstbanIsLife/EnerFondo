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
import { CreatePostModal } from './components/CreatePostModal';

export interface PostData {
  id: string;
  title: string;
  content: string;
  tag: string;
  author: string;
  time: string;
  votes: number | string;
  comments: number;
  image?: string;
}

const INITIAL_POSTS: PostData[] = [
  {
    id: '1',
    title: 'Standardizing PV Inverter telemetry for cross-chain carbon credits',
    content: 'We are proposing a new standard for telemetry ingestion that reduces latency by 40% when syncing with the mainnet. This would significantly lower gas costs for small-scale solar providers and improve real-time verification accuracy.',
    tag: 'PROJECT SOLARIS',
    author: 'u/alex_chains',
    time: '4h',
    votes: '1.2k',
    comments: 84
  },
  {
    id: '2',
    title: 'VGP-04: Allocation of $4M treasury for African Off-grid Wind',
    content: 'Official proposal to initiate the Series B funding for regional wind microgrids. Discussion is now open for technical due diligence and community feedback before the final vote.',
    tag: 'GOVERNANCE',
    author: 'u/veridian_labs',
    time: '12h',
    votes: 856,
    comments: 212,
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80'
  },
  {
    id: '3',
    title: 'New milestone reached for Hydro Plant Alpha!',
    content: 'The final turbine has been installed and we are beginning the testing phase. Expected grid connection by next month.',
    tag: 'PROJECT ALPHA',
    author: 'u/hydro_eng',
    time: '1d',
    votes: 432,
    comments: 45,
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80'
  }
];

function AppContent() {
  const [currentView, setCurrentView] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedProject, setSelectedProject] = useState('gamma');
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostData[]>(INITIAL_POSTS);
  const { t } = useLanguage();

  const handleCreatePost = (newPost: { title: string; content: string; tag: string }) => {
    const post: PostData = {
      id: Date.now().toString(),
      title: newPost.title,
      content: newPost.content,
      tag: newPost.tag || 'GENERAL',
      author: 'u/current_user',
      time: '0m',
      votes: 0,
      comments: 0
    };
    setPosts([post, ...posts]);
    setCurrentView('community');
  };

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

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
                  <CommunityFeed posts={posts} onOpenCreatePost={() => setIsCreatePostModalOpen(true)} onDeletePost={handleDeletePost} />
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
      <button 
        onClick={() => setIsCreatePostModalOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-emerald-500 text-zinc-950 rounded-full shadow-xl shadow-emerald-900/40 flex items-center justify-center hover:scale-110 transition-all active:scale-95 group z-50"
      >
        <PenSquare className="w-6 h-6" />
        <div className="absolute right-full mr-4 bg-zinc-900 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-emerald-900/20 whitespace-nowrap">
          {t('common.startDiscussion')}
        </div>
      </button>

      <CreatePostModal 
        isOpen={isCreatePostModalOpen} 
        onClose={() => setIsCreatePostModalOpen(false)} 
        onSubmit={handleCreatePost} 
      />
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
