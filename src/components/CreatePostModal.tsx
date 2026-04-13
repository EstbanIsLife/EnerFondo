import { X, Image as ImageIcon, Paperclip, Hash } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: { title: string; content: string; tag: string }) => void;
}

export function CreatePostModal({ isOpen, onClose, onSubmit }: CreatePostModalProps) {
  const { t } = useLanguage();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onSubmit({ title, content, tag });
    setTitle('');
    setContent('');
    setTag('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <h2 className="text-xl font-bold font-headline text-white">{t('community.createPost')}</h2>
              <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-zinc-800">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder={t('community.postTitle')}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors font-bold text-lg"
                  autoFocus
                />
              </div>
              
              <div>
                <textarea
                  placeholder={t('community.postContent')}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors min-h-[150px] resize-y"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <Hash className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input
                    type="text"
                    placeholder={t('community.addTag')}
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-4 py-2 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>
                <div className="flex gap-2">
                  <button type="button" className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-zinc-800 border border-zinc-800">
                    <ImageIcon className="w-5 h-5" />
                  </button>
                  <button type="button" className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-zinc-800 border border-zinc-800">
                    <Paperclip className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 rounded-xl border border-zinc-800 text-zinc-400 font-bold hover:bg-zinc-800 hover:text-zinc-200 transition-colors"
                >
                  {t('common.cancel')}
                </button>
                <button
                  type="submit"
                  disabled={!title.trim() || !content.trim()}
                  className="px-6 py-2 rounded-xl bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t('community.post')}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
