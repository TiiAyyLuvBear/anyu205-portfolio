import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Code2,
  Terminal,
  Check,
  Copy,
  Sparkles,
  PlayCircle,
  Layers,
} from 'lucide-react';
import { PipelineVisualizer } from './PipelineVisualizer';
import {
  MagneticGlowButton,
  LiquidCurtainButton,
  CyberBracketButton,
} from './ui/MultiEffectButtons';

export function ProjectDetailModal({ project, onClose, lang = 'en' }) {
  const [copiedCli, setCopiedCli] = useState(false);
  const [showVideoNote, setShowVideoNote] = useState(false);

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCli = () => {
    if (!project.cliCommand) return;
    navigator.clipboard?.writeText(project.cliCommand);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md sm:p-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24, rotateX: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-proj-title"
          className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-200/90 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-[#0d1326] sm:p-8"
        >
          {/* Top close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-600 transition hover:rotate-90 hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="pr-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-indigo-500/15 px-3 py-1 font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                {project.categoryLabel[lang]}
              </span>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-0.5 font-mono text-xs text-amber-700 dark:text-amber-300">
                {project.metrics}
              </span>
            </div>

            <h2
              id="modal-proj-title"
              className="mt-3 font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
            >
              {project.title}
            </h2>
            <p className="mt-1 text-base font-medium text-indigo-600 dark:text-amber-400">
              {project.subtitle[lang]}
            </p>
          </div>

          {/* Visual Preview & Demo Grid */}
          <div className="mt-6 grid gap-5 md:grid-cols-12">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#171936] md:col-span-5 dark:border-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="demo-image h-full w-full object-contain p-3"
              />
            </div>

            <div className="flex flex-col justify-between space-y-4 md:col-span-7">
              <div className="space-y-3">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {lang === 'vi' ? 'Tổng quan Hệ thống' : 'System Overview'}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.summary[lang]}
                </p>

                <div className="space-y-2 pt-1">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {lang === 'vi' ? 'Điểm nhấn Kỹ thuật' : 'Engineering Highlights'}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {project.highlights[lang].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-500 dark:text-amber-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Architecture Pipeline */}
          <div className="mt-6">
            <PipelineVisualizer
              pipeline={project.pipeline}
              lang={lang}
              accentColor={project.accentColor}
            />
          </div>

          {/* Optional CLI Run Snippet */}
          {project.cliCommand && (
            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-900 p-4 text-slate-100 dark:border-slate-800">
              <div className="mb-2 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-amber-400">
                  <Terminal className="h-3.5 w-3.5" />
                  {lang === 'vi' ? 'Khởi chạy nhanh (Local Studio)' : 'Quick Start CLI'}
                </span>
                <CyberBracketButton
                  onClick={handleCopyCli}
                  icon={copiedCli ? Check : Copy}
                  className="!border-slate-700 !bg-slate-800 !text-slate-200"
                >
                  {copiedCli ? (lang === 'vi' ? 'Đã chép' : 'Copied') : 'Copy'}
                </CyberBracketButton>
              </div>
              <pre className="overflow-x-auto font-mono text-xs text-indigo-200">
                {project.cliCommand}
              </pre>
            </div>
          )}

          {/* Action Footer */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-5 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <MagneticGlowButton href={project.liveUrl} external icon={ExternalLink}>
                  {lang === 'vi' ? 'Mở Live Demo' : 'Open Live Demo'}
                </MagneticGlowButton>
              )}

              <LiquidCurtainButton href={project.codeUrl} external icon={Code2}>
                {lang === 'vi' ? 'Xem Mã nguồn GitHub' : 'View Source on GitHub'}
              </LiquidCurtainButton>

              <CyberBracketButton
                onClick={() => setShowVideoNote((v) => !v)}
                icon={PlayCircle}
                active={showVideoNote}
              >
                {lang === 'vi' ? 'Video Demo' : 'Video Walkthrough'}
              </CyberBracketButton>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="font-mono text-xs text-slate-500 underline-offset-4 hover:underline dark:text-slate-400"
            >
              {lang === 'vi' ? 'Đóng cửa sổ [ESC]' : 'Close [ESC]'}
            </button>
          </div>

          {showVideoNote && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-3 rounded-xl border border-dashed border-indigo-400/50 bg-indigo-500/5 p-3 text-center font-mono text-xs text-slate-600 dark:text-slate-300"
            >
              {lang === 'vi'
                ? '🎬 Video demo chi tiết đang được biên tập và cập nhật sớm — bạn có thể xem trước kiến trúc luồng dữ liệu tương tác phía trên hoặc mã nguồn trên GitHub.'
                : '🎬 Video walkthrough coming soon — explore the interactive pipeline simulator above or inspect the repository code directly.'}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
