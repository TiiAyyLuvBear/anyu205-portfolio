import React, { useState, useEffect, useMemo } from 'react';
import { Volume2, Activity, Sparkles, Radio } from 'lucide-react';
import { SonarPulseButton, CyberBracketButton } from './ui/MultiEffectButtons';

const MODES = [
  {
    id: 'tts',
    label: { en: 'VieNeu-TTS Prosody', vi: 'Ngữ điệu VieNeu-TTS' },
    transcript: {
      en: '“Xin chào, mình là Vũ Thế Anh — xây dựng hệ thống tổng hợp tiếng nói & xử lý ngôn ngữ tự nhiên tiếng Việt.”',
      vi: '“Xin chào, mình là Vũ Thế Anh — xây dựng hệ thống tổng hợp tiếng nói & xử lý ngôn ngữ tự nhiên tiếng Việt.”',
    },
    meta: 'VieNeu-TTS 0.3B · 24kHz Neural Vocoder · Mood: Expressive',
  },
  {
    id: 'speaker',
    label: { en: 'ECAPA-TDNN Voiceprint', vi: 'Sinh trắc ECAPA-TDNN' },
    transcript: {
      en: '[Voice Biometrics Verified] Cosine Similarity: 0.942 > Threshold (0.78) · Speaker: Vũ Thế Anh',
      vi: '[Xác thực Giọng nói Thành công] Độ tương đồng Cosine: 0.942 > Ngưỡng (0.78) · Người nói: Vũ Thế Anh',
    },
    meta: 'ECAPA-TDNN 192-d Embedding + PhoWhisper ASR',
  },
  {
    id: 'rag',
    label: { en: 'Hybrid RAG Stream', vi: 'Luồng Truy hồi RAG' },
    transcript: {
      en: 'Query → BM25 + BAAI/bge-m3 (Qdrant) → RRF Fusion → bge-reranker (Top-5) → Grounded Citation Answer',
      vi: 'Truy vấn → BM25 + BAAI/bge-m3 (Qdrant) → Hợp nhất RRF → bge-reranker (Top-5) → Câu trả lời kèm trích dẫn',
    },
    meta: 'Recall@5: 0.91 · MRR@10: 0.84 · Zero Hallucination Mode',
  },
];

export function HeroWaveform({ lang = 'en' }) {
  const [hoverIdx, setHoverIdx] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeMode, setActiveMode] = useState(0);
  const [tick, setTick] = useState(0);

  const barCount = 88;

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setTick((t) => (t + 1) % 360);
    }, 65);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const bars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < barCount; i++) {
      const t = i / barCount;
      // Syllable-like envelope inspired by speech bursts
      const baseEnv =
        Math.abs(Math.sin(t * Math.PI * 7.3 + activeMode * 1.4)) *
        (0.55 + 0.45 * Math.sin(t * Math.PI));
      const baseH = Math.max(6, (baseEnv * 0.85 + 0.15 * (((i * 37) % 11) / 11)) * 62);
      arr.push({ i, t, baseEnv, baseH });
    }
    return arr;
  }, [activeMode]);

  const currentMode = MODES[activeMode];

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white/85 p-4 shadow-sm backdrop-blur-md dark:border-slate-800/90 dark:bg-[#0e1529]/90 sm:p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <SonarPulseButton
            active={isPlaying}
            onClick={() => setIsPlaying((p) => !p)}
            icon={isPlaying ? Radio : Volume2}
          >
            {isPlaying
              ? lang === 'vi'
                ? 'Đang phát mô phỏng tín hiệu'
                : 'Simulating Live Signal'
              : lang === 'vi'
              ? 'Kích hoạt sóng âm tương tác'
              : 'Interactive Signal Synthesizer'}
          </SonarPulseButton>

          <div className="flex flex-wrap items-center gap-1.5">
            {MODES.map((m, idx) => (
              <CyberBracketButton
                key={m.id}
                active={activeMode === idx}
                onClick={() => {
                  setActiveMode(idx);
                  setIsPlaying(true);
                }}
              >
                {m.label[lang]}
              </CyberBracketButton>
            ))}
          </div>
        </div>

        <span className="hidden items-center gap-1.5 font-mono text-[11px] text-slate-500 dark:text-slate-400 md:inline-flex">
          <Activity className="h-3.5 w-3.5 text-indigo-500 dark:text-amber-400" />
          {lang === 'vi' ? 'Di chuột lên dải sóng để tương tác' : 'Hover waveform to modulate frequency'}
        </span>
      </div>

      {/* Interactive SVG Waveform */}
      <div
        className="relative overflow-hidden rounded-xl bg-slate-100/80 px-2 py-2.5 dark:bg-slate-950/70"
        onMouseLeave={() => setHoverIdx(null)}
      >
        <svg
          id="wave"
          className="wave block h-20 w-full cursor-crosshair select-none"
          viewBox="0 0 920 76"
          preserveAspectRatio="none"
          role="img"
          aria-label="Interactive speech and NLP waveform"
        >
          {bars.map(({ i, baseEnv, baseH }) => {
            const w = 920 / barCount;
            const dist = hoverIdx !== null ? Math.abs(i - hoverIdx) : 999;
            const hoverBoost = dist < 10 ? Math.cos((dist / 10) * (Math.PI / 2)) * 28 : 0;
            const liveWave = isPlaying
              ? Math.sin(tick * 0.25 + i * 0.35 + activeMode) * 14 * baseEnv
              : 0;
            const h = Math.min(72, Math.max(5, baseH + hoverBoost + liveWave));
            const y = (76 - h) / 2;
            const isWarm =
              (hoverIdx !== null && dist <= 3) ||
              (isPlaying && (i + tick) % 14 === 0) ||
              i % 9 === 4;

            return (
              <rect
                key={i}
                x={(i * w + w * 0.18).toFixed(2)}
                width={(w * 0.64).toFixed(2)}
                y={y.toFixed(2)}
                height={h.toFixed(2)}
                rx="2"
                onMouseEnter={() => setHoverIdx(i)}
                className="transition-all duration-150 ease-out"
                style={{
                  fill: isWarm ? '#f59e0b' : '#6366f1',
                  opacity:
                    hoverIdx !== null && dist < 8
                      ? 0.98
                      : (0.4 + baseEnv * 0.6).toFixed(2),
                }}
              />
            );
          })}
        </svg>
      </div>

      {/* Live readout bar */}
      <div className="mt-3 flex flex-col justify-between gap-2 border-t border-slate-200/70 pt-2.5 text-xs dark:border-slate-800/80 sm:flex-row sm:items-center">
        <p className="font-mono text-slate-700 dark:text-slate-200">
          <span className="mr-2 inline-block rounded bg-indigo-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-300">
            STREAM
          </span>
          {currentMode.transcript[lang]}
        </p>
        <span className="shrink-0 font-mono text-[11px] text-amber-600 dark:text-amber-400">
          {currentMode.meta}
        </span>
      </div>
    </div>
  );
}
