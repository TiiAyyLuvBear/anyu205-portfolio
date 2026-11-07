import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronRight, Sparkles } from 'lucide-react';

export function PipelineVisualizer({ pipeline = [], lang = 'en', accentColor = '#6366f1' }) {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    if (!autoPlay || pipeline.length === 0) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipeline.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [autoPlay, pipeline.length]);

  if (!pipeline || pipeline.length === 0) return null;

  const currentNode = pipeline[activeStep] || pipeline[0];

  return (
    <div className="rounded-xl border border-slate-200/90 bg-slate-50/90 p-3.5 dark:border-slate-800/90 dark:bg-slate-950/60">
      <div className="mb-2.5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-indigo-500 dark:bg-amber-400" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {lang === 'vi'
              ? 'Kiến trúc Pipeline Tương tác (Nhấn từng bước)'
              : 'Interactive Architecture Pipeline (Click any node)'}
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setAutoPlay((p) => !p);
          }}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-300/80 bg-white px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-amber-400 dark:hover:text-amber-300"
        >
          {autoPlay ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
          {autoPlay
            ? lang === 'vi'
              ? 'Tạm dừng'
              : 'Pause Flow'
            : lang === 'vi'
            ? 'Chạy luồng'
            : 'Simulate Flow'}
        </button>
      </div>

      {/* Step nodes */}
      <div className="pipe-wrap flex items-center gap-1.5 overflow-x-auto pb-2 pt-1">
        {pipeline.map((node, idx) => {
          const isSelected = idx === activeStep;
          const isPast = idx < activeStep;
          return (
            <React.Fragment key={node.step}>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveStep(idx);
                  setAutoPlay(false);
                }}
                className={`group relative flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1.5 font-mono text-xs transition-all duration-200 ${
                  isSelected
                    ? ' -translate-y-0.5 border-indigo-500 bg-indigo-600 text-white shadow-md shadow-indigo-500/25 dark:border-amber-400 dark:bg-indigo-500'
                    : isPast
                    ? 'border-indigo-400/40 bg-indigo-500/10 text-indigo-800 dark:border-indigo-500/40 dark:bg-indigo-500/15 dark:text-indigo-200'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-400/60 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                }`}
              >
                <span
                  className={`inline-flex h-4 w-4 items-center justify-center rounded text-[10px] font-bold ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="whitespace-nowrap font-medium">
                  {lang === 'vi' && node.stepVi ? node.stepVi : node.step}
                </span>
              </button>

              {idx < pipeline.length - 1 && (
                <ChevronRight
                  className={`h-3.5 w-3.5 shrink-0 transition-transform duration-300 ${
                    idx === activeStep
                      ? 'translate-x-0.5 scale-125 text-amber-500'
                      : 'text-slate-400 dark:text-slate-600'
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Node technical detail readout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
          className="mt-2 flex items-start gap-2 rounded-lg bg-white/90 px-3 py-2 text-xs text-slate-600 shadow-sm dark:bg-slate-900/90 dark:text-slate-300"
        >
          <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-500 dark:text-amber-400" />
          <div>
            <span className="font-mono font-semibold text-slate-900 dark:text-white">
              [{activeStep + 1}/{pipeline.length}{' '}
              {lang === 'vi' && currentNode.stepVi ? currentNode.stepVi : currentNode.step}]:{' '}
            </span>
            <span>{currentNode.detail[lang]}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
