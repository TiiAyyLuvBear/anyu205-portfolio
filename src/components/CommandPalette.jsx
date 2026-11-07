import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  FolderGit2,
  FileText,
  Sun,
  Moon,
  Languages,
  ExternalLink,
  Sparkles,
  CornerDownLeft,
} from 'lucide-react';
import { FEATURED_PROJECTS, PROFILE } from '../data/portfolioData';

export function CommandPalette({
  isOpen,
  onClose,
  lang,
  setLang,
  theme,
  toggleTheme,
  onSelectProject,
  onNavigateSection,
}) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onNavigateSection('open-cmd');
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigateSection]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'nav-projects',
      label: lang === 'vi' ? 'Đi tới: Dự án nổi bật' : 'Go to: Featured Projects',
      category: 'Navigation',
      icon: FolderGit2,
      run: () => {
        onNavigateSection('projects-section');
        onClose();
      },
    },
    {
      id: 'nav-now',
      label: lang === 'vi' ? 'Đi tới: Dự án đang thực hiện (Now)' : 'Go to: Current Work & Research',
      category: 'Navigation',
      icon: Sparkles,
      run: () => {
        onNavigateSection('now-section');
        onClose();
      },
    },
    {
      id: 'nav-cv',
      label: lang === 'vi' ? 'Đi tới: Hồ sơ CV Tương tác' : 'Go to: Interactive CV / Resume',
      category: 'Navigation',
      icon: FileText,
      run: () => {
        onNavigateSection('cv-section');
        onClose();
      },
    },
    {
      id: 'toggle-lang',
      label:
        lang === 'vi'
          ? 'Chuyển ngôn ngữ sang Tiếng Anh (EN)'
          : 'Switch Language to Vietnamese (VI)',
      category: 'Preferences',
      icon: Languages,
      run: () => {
        setLang(lang === 'vi' ? 'en' : 'vi');
        onClose();
      },
    },
    {
      id: 'toggle-theme',
      label:
        theme === 'dark'
          ? lang === 'vi'
            ? 'Chuyển sang Giao diện Sáng (Light Mode)'
            : 'Switch to Light Mode'
          : lang === 'vi'
          ? 'Chuyển sang Giao diện Tối (Dark Mode)'
          : 'Switch to Dark Mode',
      category: 'Preferences',
      icon: theme === 'dark' ? Sun : Moon,
      run: () => {
        toggleTheme();
        onClose();
      },
    },
    ...FEATURED_PROJECTS.map((p) => ({
      id: `proj-${p.slug}`,
      label: `${p.title} — ${p.subtitle[lang]}`,
      category: 'Projects',
      icon: FolderGit2,
      run: () => {
        onSelectProject(p);
        onClose();
      },
    })),
    {
      id: 'ext-github',
      label: `GitHub (${PROFILE.handle})`,
      category: 'Links',
      icon: ExternalLink,
      run: () => {
        window.open(PROFILE.github, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      id: 'ext-linkedin',
      label: 'LinkedIn (Vũ Thế Anh)',
      category: 'Links',
      icon: ExternalLink,
      run: () => {
        window.open(PROFILE.linkedin, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
  ];

  const filtered = actions.filter((item) =>
    item.label.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/70 px-4 pt-20 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -12 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-[#0e1529]"
        >
          <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3.5 dark:border-slate-800">
            <Search className="h-4 w-4 text-indigo-500" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                lang === 'vi'
                  ? 'Tìm nhanh dự án, CV, đổi ngôn ngữ EN/VI, giao diện...'
                  : 'Jump to project, CV, switch EN/VI, or toggle theme...'
              }
              className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
            />
            <kbd className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
              ESC
            </kbd>
          </div>

          <div className="max-h-80 overflow-y-auto p-2">
            {filtered.length === 0 ? (
              <p className="py-8 text-center font-mono text-xs text-slate-500">
                {lang === 'vi' ? 'Không tìm thấy kết quả phù hợp.' : 'No matching command found.'}
              </p>
            ) : (
              filtered.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={item.run}
                    className="group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-slate-700 transition hover:bg-indigo-500/10 hover:text-indigo-600 dark:text-slate-200 dark:hover:bg-indigo-500/20 dark:hover:text-amber-300"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-amber-400" />
                      <span className="line-clamp-1 font-medium">{item.label}</span>
                    </div>
                    <CornerDownLeft className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                  </button>
                );
              })
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
