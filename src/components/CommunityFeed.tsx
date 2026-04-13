import { ArrowUp, ArrowDown, MessageSquare, Share2, Flag, Image as ImageIcon, Paperclip, Bookmark, Trash2 } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import { PostData } from '../App';

interface CommunityFeedProps {
  posts: PostData[];
  onOpenCreatePost: () => void;
  onDeletePost: (id: string) => void;
}

export function CommunityFeed({ posts, onOpenCreatePost, onDeletePost }: CommunityFeedProps) {
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
          onClick={onOpenCreatePost}
          readOnly
          className="bg-zinc-800/50 border-none text-zinc-300 text-sm rounded-xl px-4 py-3 flex-1 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all cursor-pointer"
        />
        <div className="flex gap-2">
          <button onClick={onOpenCreatePost} className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-zinc-800">
            <ImageIcon className="w-5 h-5" />
          </button>
          <button onClick={onOpenCreatePost} className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-zinc-800">
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
        {posts.map((post) => (
          <article key={post.id} className="bg-zinc-900/40 rounded-xl overflow-hidden hover:bg-zinc-900/60 transition-all group border border-transparent hover:border-emerald-500/10">
            <div className="flex gap-4 p-6">
              {/* Voting Sidebar */}
              <div className="flex flex-col items-center gap-1 text-zinc-500 bg-zinc-950/30 rounded-lg p-2 h-fit">
                <ArrowUp className="w-5 h-5 cursor-pointer hover:text-emerald-400 transition-colors" />
                <span className="text-xs font-bold font-headline text-emerald-400">{post.votes}</span>
                <ArrowDown className="w-5 h-5 cursor-pointer hover:text-red-400 transition-colors" />
              </div>
              
              <div className="flex-1">
                {/* Metadata */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded tracking-widest uppercase">{post.tag}</span>
                  <span className="text-zinc-600 text-xs">•</span>
                  <span className="text-zinc-400 text-[11px] font-medium uppercase tracking-wider">
                    {t('community.postedBy')} <span className="text-emerald-200/80 hover:underline cursor-pointer">{post.author}</span> {post.time} {t('community.ago')}
                  </span>
                  <div className="flex-1"></div>
                  <button 
                    onClick={() => onDeletePost(post.id)} 
                    className="text-zinc-500 hover:text-red-400 transition-colors p-1.5 rounded-lg hover:bg-zinc-800/50 group/delete" 
                    title={t('community.delete')}
                  >
                    <Trash2 className="w-4 h-4 group-hover/delete:scale-110 transition-transform" />
                  </button>
                </div>
                
                {/* Content */}
                <h2 className="text-xl font-bold font-headline text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors cursor-pointer">
                  {post.title}
                </h2>

                {post.image && (
                  <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-zinc-800 cursor-pointer">
                    <img 
                      src={post.image} 
                      alt="Post attachment" 
                      className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent"></div>
                  </div>
                )}

                <p className="text-zinc-400 text-sm line-clamp-2 font-light leading-relaxed mb-6">
                  {post.content}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between border-t border-zinc-800/50 pt-4">
                  <div className="flex gap-6">
                    <button className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group/btn">
                      <MessageSquare className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-[10px] font-bold uppercase tracking-tighter">{post.comments} {t('community.comments')}</span>
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
        ))}
      </div>
    </div>
  );
}
