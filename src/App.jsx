import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowUpRight,
  FolderGit2,
  Cpu,
  FileText,
  User,
  Sun,
  Moon,
  Command,
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Code2,
  ExternalLink,
  Layers,
  Terminal,
  Compass,
  Flame,
} from 'lucide-react';
import {
  PROFILE,
  CURRENT_WORK,
  FEATURED_PROJECTS,
  MORE_REPOS,
} from './data/portfolioData';
import {
  MagneticGlowButton,
  LiquidCurtainButton,
  BorderBeamButton,
  Flip3DButton,
  CyberBracketButton,
} from './components/ui/MultiEffectButtons';
import { SpotlightCard } from './components/ui/SpotlightCard';
import { HeroWaveform } from './components/HeroWaveform';
import { PipelineVisualizer } from './components/PipelineVisualizer';
import { CVSection } from './components/CVSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CommandPalette } from './components/CommandPalette';

const NAV_ITEMS = [
  { id: 'hero-section', label: { en: 'Home', vi: 'Trang chủ' } },
  { id: 'now-section', label: { en: 'In Progress', vi: 'Đang thực hiện' } },
  { id: 'projects-section', label: { en: 'Projects', vi: 'Dự án' } },
  { id: 'cv-section', label: { en: 'CV / Resume', vi: 'Hồ sơ CV' } },
  { id: 'about-section', label: { en: 'About & Contact', vi: 'Giới thiệu & Liên hệ' } },
];

const PROJECT_FILTERS = [
  { id: 'all', label: { en: 'All Systems (5)', vi: 'Tất cả (5)' } },
  { id: 'speech', label: { en: 'Speech & Audio AI', vi: 'AI Giọng nói & Âm thanh' } },
  { id: 'nlp', label: { en: 'NLP & RAG', vi: 'NLP & Truy hồi RAG' } },
  { id: 'fullstack', label: { en: 'Full-Stack & IoT', vi: 'Full-Stack & IoT' } },
];

export default function App() {
  const [lang, setLang] = useState('vi');
  const [theme, setTheme] = useState('dark');
  const [activeNav, setActiveNav] = useState('hero-section');
  const [projectFilter, setProjectFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === 'open-cmd') {
      setCmdOpen(true);
      return;
    }
    setActiveNav(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredProjects =
    projectFilter === 'all'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === projectFilter);

  return (
    <div className="bg-engineering-grid relative min-h-screen selection:bg-indigo-500 selection:text-white">
      {/* Ambient Background Glow Orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden no-print">
        <div className="animate-pulse-glow absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-500/12" />
        <div className="animate-pulse-glow absolute right-0 top-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl dark:bg-amber-500/10" />
        <div className="animate-pulse-glow absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/10" />
      </div>

      {/* Skip Link for Accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      {/* Sticky Glassmorphic Header */}
      <header className="site-header no-print sticky top-0 z-40 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl transition-colors dark:border-slate-800/80 dark:bg-[#090d1a]/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
          {/* Brand */}
          <a
            href="#hero-section"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero-section');
            }}
            className="brand group inline-flex items-center gap-2 font-display text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 font-mono text-sm font-bold text-white shadow-md shadow-indigo-500/30 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              A
            </span>
            <span>
              {PROFILE.brand}
              <span className="text-indigo-600 dark:text-amber-400">{PROFILE.brandSuffix}</span>
            </span>
          </a>

          {/* Navigation with Shared Layout Pill */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-slate-100/80 p-1 md:flex dark:border-slate-800 dark:bg-slate-900/80"
          >
            {NAV_ITEMS.map((item) => {
              const isCurrent = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isCurrent ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    isCurrent
                      ? 'text-white dark:text-slate-950'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {isCurrent && (
                    <motion.span
                      layoutId="activeNavPill"
                      transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                      className="absolute inset-0 -z-10 rounded-full bg-indigo-600 shadow-sm dark:bg-amber-400"
                    />
                  )}
                  {item.label[lang]}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Command Palette, Language Toggle (EN/VI), Theme Toggle */}
          <div className="flex items-center gap-2">
            <CyberBracketButton
              onClick={() => setCmdOpen(true)}
              icon={Command}
              className="hidden sm:inline-flex"
              title="Open Command Palette (Ctrl+K)"
            >
              Ctrl+K
            </CyberBracketButton>

            {/* Bilingual Toggle Button with Morphing Pill */}
            <button
              type="button"
              onClick={() => setLang((l) => (l === 'vi' ? 'en' : 'vi'))}
              aria-label="Toggle language between Vietnamese and English"
              className="group relative inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-xs font-bold text-slate-800 shadow-sm transition hover:border-indigo-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-amber-400"
            >
              <span
                className={`rounded-full px-1.5 py-0.5 transition ${
                  lang === 'vi'
                    ? 'bg-indigo-600 text-white dark:bg-amber-400 dark:text-slate-950'
                    : 'text-slate-400'
                }`}
              >
                VI
              </span>
              <span
                className={`rounded-full px-1.5 py-0.5 transition ${
                  lang === 'en'
                    ? 'bg-indigo-600 text-white dark:bg-amber-400 dark:text-slate-950'
                    : 'text-slate-400'
                }`}
              >
                EN
              </span>
            </button>

            {/* Theme Toggle with Rotation Micro-interaction */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.88, rotate: 90 }}
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-amber-300 dark:hover:border-amber-400"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Secondary Nav Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto border-t border-slate-200/60 px-4 py-2 md:hidden dark:border-slate-800/60">
          {NAV_ITEMS.map((item) => {
            const isCurrent = activeNav === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition ${
                  isCurrent
                    ? 'bg-indigo-600 text-white dark:bg-amber-400 dark:text-slate-950'
                    : 'bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-300'
                }`}
              >
                {item.label[lang]}
              </a>
            );
          })}
        </div>
      </header>

      {/* Main Content Container */}
      <main id="main" className="relative z-10 mx-auto max-w-6xl space-y-24 px-4 py-10 sm:px-6 sm:py-16">
        {/* ==================== 1. HERO & BENTO OVERVIEW ==================== */}
        <section id="hero-section" className="hero scroll-mt-24 space-y-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Hero Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 lg:col-span-8"
            >
              {/* Status & Handle Row */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span>{PROFILE.statusBadge[lang]}</span>
                </div>

                <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 font-mono text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400">
                  {PROFILE.handle} · {PROFILE.domain}
                </span>
              </div>

              {/* Kinetic Display Heading */}
              <div className="space-y-3">
                <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-[64px] lg:leading-[1.04] dark:text-white">
                  {PROFILE.name}
                  <span className="mt-2 block bg-gradient-to-r from-indigo-600 via-violet-500 to-amber-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl dark:from-indigo-300 dark:via-violet-300 dark:to-amber-300">
                    {PROFILE.heroHeadline[lang]}
                  </span>
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                  {PROFILE.heroLede[lang]}
                </p>
              </div>

              {/* Distinct Multi-Effect Button Showcase (Each button has its own signature motion!) */}
              <div className="no-print flex flex-wrap items-center gap-3.5 pt-1">
                {/* Effect 1: Magnetic Glow Button */}
                <MagneticGlowButton
                  onClick={() => scrollToSection('projects-section')}
                  icon={Compass}
                >
                  {lang === 'vi' ? 'Khám phá Dự án' : 'Explore Projects'}
                </MagneticGlowButton>

                {/* Effect 2: Conic Border Beam + Shimmer Button */}
                <BorderBeamButton
                  onClick={() => scrollToSection('cv-section')}
                  icon={FileText}
                >
                  {lang === 'vi' ? 'Xem Hồ sơ CV Tương tác' : 'Interactive CV / Resume'}
                </BorderBeamButton>

                {/* Effect 3: Liquid Curtain Fill Button */}
                <LiquidCurtainButton href={PROFILE.github} external icon={Github}>
                  GitHub Profile
                </LiquidCurtainButton>

                {/* Effect 4: 3D Cube Flip Button */}
                <Flip3DButton
                  frontLabel="LinkedIn"
                  backLabel="@theanhvu2005 ↗"
                  href={PROFILE.linkedin}
                  external
                  icon={Linkedin}
                />
              </div>
            </motion.div>

            {/* Hero Right Column: Interactive Profile Bento Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-4"
            >
              <SpotlightCard className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={PROFILE.avatar}
                      alt={PROFILE.name}
                      width="72"
                      height="72"
                      className="h-18 w-18 rounded-2xl border-2 border-indigo-500/40 object-cover shadow-lg"
                    />
                    <span className="absolute -bottom-1 -right-1 rounded-md bg-indigo-600 px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">
                      K23
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-indigo-600 dark:text-amber-400">
                      VNUHCM · HCMUS
                    </span>
                    <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                      {PROFILE.name}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {PROFILE.location[lang]}
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-2.5 border-t border-slate-200/80 pt-4 text-xs dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="font-mono uppercase text-slate-400">
                      {lang === 'vi' ? 'Chuyên ngành' : 'Focus'}
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Speech AI · NLP · RAG
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono uppercase text-slate-400">
                      {lang === 'vi' ? 'Ngôn ngữ' : 'Core Stack'}
                    </span>
                    <span className="font-mono font-semibold text-indigo-600 dark:text-amber-300">
                      Python · JS/React · C++
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono uppercase text-slate-400">
                      {lang === 'vi' ? 'Trường' : 'University'}
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      ĐH KHTN - ĐHQG-HCM
                    </span>
                  </div>
                </div>

                {/* Quick Stats Mini Grid */}
                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {PROFILE.quickStats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200/70 bg-slate-50/80 p-3 dark:border-slate-800/80 dark:bg-slate-900/60"
                    >
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-display text-xl font-extrabold text-indigo-600 dark:text-white">
                          {stat.value}
                        </span>
                        <span className="font-mono text-[10px] text-amber-600 dark:text-amber-400">
                          {stat.sub}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                        {stat.label[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          </div>

          {/* Interactive Speech & NLP Waveform Synthesizer */}
          <HeroWaveform lang={lang} />
        </section>

        {/* ==================== 2. CURRENT WORK / IN-PROGRESS RESEARCH ==================== */}
        <section id="now-section" aria-labelledby="now-h" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                <Flame className="h-4 w-4" />
                <span>{lang === 'vi' ? 'ĐANG THỰC HIỆN (NOW)' : 'CURRENT WORK & ONGOING RESEARCH'}</span>
              </div>
              <h2
                id="now-h"
                className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
              >
                {lang === 'vi'
                  ? 'Các dự án & nghiên cứu đang triển khai'
                  : "What I'm working on right now"}
              </h2>
            </div>
            <p className="max-w-md text-xs text-slate-500 dark:text-slate-400">
              {lang === 'vi'
                ? 'Theo dõi tiến độ các hướng nghiên cứu Khai phá Văn bản (RAG), Generative AI và công cụ đóng gói tự động.'
                : 'Live progress on active research in Vietnamese Retrieval-Augmented Generation, Generative AI, and reproducible tooling.'}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {CURRENT_WORK.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(245, 158, 11, 0.16)"
                  className="flex h-full flex-col justify-between p-6"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-amber-700 dark:text-amber-300">
                        {item.when[lang]}
                      </span>
                      <span className="font-mono text-[11px] text-indigo-600 dark:text-indigo-300">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                      {item.title[lang]}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.description[lang]}
                    </p>
                  </div>

                  <div className="mt-6 space-y-4 pt-2">
                    {/* Animated Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between font-mono text-[11px] text-slate-500 dark:text-slate-400">
                        <span>{lang === 'vi' ? 'Tiến độ' : 'Milestone Progress'}</span>
                        <span className="font-semibold text-indigo-600 dark:text-amber-400">
                          {item.progress}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-amber-400"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:bg-slate-800/90 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-1">
                      <CyberBracketButton href={item.repoUrl} external icon={ArrowUpRight}>
                        {lang === 'vi' ? 'Xem Kho mã nguồn' : 'Inspect Repository'}
                      </CyberBracketButton>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ==================== 3. FEATURED PROJECTS & INTERACTIVE PIPELINES ==================== */}
        <section id="projects-section" aria-labelledby="projects-h" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                <FolderGit2 className="h-4 w-4" />
                <span>{lang === 'vi' ? 'DỰ ÁN TRỌNG ĐIỂM' : 'FEATURED ENGINEERING SYSTEMS'}</span>
              </div>
              <h2
                id="projects-h"
                className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
              >
                {lang === 'vi'
                  ? 'Hệ thống AI, Giọng nói, RAG & Full-Stack'
                  : 'Featured Projects & Interactive Architectures'}
              </h2>
              <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-400">
                {lang === 'vi'
                  ? 'Nhấn trực tiếp vào từng bước trong sơ đồ Pipeline bên dưới mỗi dự án để khám phá luồng xử lý, hoặc mở chế độ Chi tiết Kỹ thuật.'
                  : 'Click any stage inside a project’s interactive pipeline below to inspect how data flows, or open the deep-dive modal.'}
              </p>
            </div>

            {/* Category Filter Pills with Framer Motion Shared Layout */}
            <div className="no-print flex flex-wrap gap-1.5 rounded-2xl border border-slate-200/80 bg-white/80 p-1.5 dark:border-slate-800 dark:bg-slate-900/80">
              {PROJECT_FILTERS.map((f) => {
                const active = projectFilter === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setProjectFilter(f.id)}
                    className={`relative rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                      active
                        ? 'text-white dark:text-slate-950'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="projectFilterPill"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="absolute inset-0 -z-10 rounded-xl bg-indigo-600 dark:bg-amber-400"
                      />
                    )}
                    {f.label[lang]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Projects Grid */}
          <motion.div layout className="project-grid grid gap-6 lg:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, scale: 0.95, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -12 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={
                    index === 0 && projectFilter === 'all' ? 'lg:col-span-2' : 'col-span-1'
                  }
                >
                  <SpotlightCard className="project-card flex h-full flex-col justify-between p-6 sm:p-7">
                    <div>
                      {/* Card Top Visual + Meta */}
                      <div
                        className={`grid gap-6 ${
                          index === 0 && projectFilter === 'all'
                            ? 'lg:grid-cols-12 lg:items-center'
                            : 'grid-cols-1'
                        }`}
                      >
                        {/* SVG Illustration Preview */}
                        <div
                          onClick={() => setSelectedProject(project)}
                          className={`group/img relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-[#171936] p-3 dark:border-slate-800 ${
                            index === 0 && projectFilter === 'all' ? 'lg:col-span-5' : ''
                          }`}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            width="320"
                            height="240"
                            className="h-48 w-full object-contain transition-transform duration-500 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/img:opacity-100">
                            <span className="rounded-full bg-white px-4 py-1.5 font-mono text-xs font-bold text-slate-900 shadow-lg">
                              {lang === 'vi' ? 'Mở chi tiết & Demo ↗' : 'Inspect Architecture ↗'}
                            </span>
                          </div>
                        </div>

                        {/* Project Copy */}
                        <div
                          className={`space-y-3 ${
                            index === 0 && projectFilter === 'all' ? 'lg:col-span-7' : ''
                          }`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="rounded-full bg-indigo-500/15 px-3 py-1 font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                              {project.categoryLabel[lang]}
                            </span>
                            <span className="font-mono text-xs text-amber-600 dark:text-amber-400">
                              {project.metrics}
                            </span>
                          </div>

                          <h3
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer font-display text-2xl font-extrabold text-slate-900 transition hover:text-indigo-600 dark:text-white dark:hover:text-amber-300 sm:text-3xl"
                          >
                            {project.title}
                          </h3>

                          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                            {project.subtitle[lang]}
                          </p>

                          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            {project.summary[lang]}
                          </p>

                          {/* Tech Stack Chips */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-slate-200 bg-slate-100/80 px-2.5 py-0.5 font-mono text-[11px] text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Interactive Pipeline Visualizer embedded directly in each project card */}
                      <div className="mt-5">
                        <PipelineVisualizer
                          pipeline={project.pipeline}
                          lang={lang}
                          accentColor={project.accentColor}
                        />
                      </div>
                    </div>

                    {/* Multi-effect Card Footer Buttons */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/80 pt-4 dark:border-slate-800/80">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <Flip3DButton
                          frontLabel={
                            lang === 'vi' ? 'Chi tiết Kỹ thuật & Demo' : 'Deep-Dive & Demo'
                          }
                          backLabel={
                            lang === 'vi' ? 'Mở Modal Tương tác ↗' : 'Launch Modal View ↗'
                          }
                          onClick={() => setSelectedProject(project)}
                          icon={Layers}
                        />

                        {project.liveUrl && (
                          <MagneticGlowButton
                            href={project.liveUrl}
                            external
                            icon={ExternalLink}
                            className="!px-4 !py-2 !text-xs"
                          >
                            {lang === 'vi' ? 'Mở Live Demo' : 'Open Live Demo'}
                          </MagneticGlowButton>
                        )}
                      </div>

                      <LiquidCurtainButton
                        href={project.codeUrl}
                        external
                        icon={Code2}
                        className="!px-4 !py-2 !text-xs"
                      >
                        {lang === 'vi' ? 'Mã nguồn GitHub' : 'View Code'}
                      </LiquidCurtainButton>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Additional Repositories & Labs */}
          <div className="pt-8">
            <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {lang === 'vi' ? 'KHO MÃ NGUỒN KHÁC & THỰC NGHIỆM' : 'MORE REPOSITORIES & LABS'}
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  {lang === 'vi'
                    ? 'Các thực nghiệm Fine-tuning, SemEval, MLOps & C++'
                    : 'Labs, Benchmarks & Smaller Builds'}
                </h3>
              </div>
              <CyberBracketButton href={PROFILE.github} external icon={Github}>
                {lang === 'vi' ? 'Xem tất cả 16+ Repo trên GitHub' : 'View all 16+ Repos on GitHub'}
              </CyberBracketButton>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {MORE_REPOS.map((repo) => (
                <SpotlightCard key={repo.name} tilt={false} className="flex flex-col justify-between p-5">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] text-amber-600 dark:text-amber-400">
                        {repo.meta}
                      </span>
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={repo.name}
                        className="text-slate-400 transition hover:text-indigo-500 dark:hover:text-amber-400"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-600 dark:hover:text-amber-300"
                      >
                        {repo.name}
                      </a>
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      {repo.description[lang]}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-2">
                    <div className="flex flex-wrap gap-1">
                      {repo.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {repo.liveUrl && (
                      <a
                        href={repo.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] font-semibold text-indigo-600 hover:underline dark:text-amber-400"
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== 4. INTERACTIVE CV / RESUME ==================== */}
        <CVSection lang={lang} />

        {/* ==================== 5. ABOUT & CONTACT BENTO ==================== */}
        <section id="about-section" aria-labelledby="contact-h" className="no-print scroll-mt-24">
          <SpotlightCard tilt={false} className="p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="space-y-4 lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-3 py-1 font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                  <User className="h-3.5 w-3.5" />
                  <span>{lang === 'vi' ? 'VỀ BẢN THÂN & KẾT NỐI' : 'ABOUT & COLLABORATION'}</span>
                </div>
                <h2
                  id="contact-h"
                  className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
                >
                  {lang === 'vi' ? 'Cùng kết nối & Hợp tác!' : "Let's talk & build together"}
                </h2>
                {PROFILE.aboutBio[lang].map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-col justify-center space-y-4 rounded-2xl border border-slate-200/80 bg-slate-50/90 p-6 dark:border-slate-800 dark:bg-slate-900/70 lg:col-span-5">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {lang === 'vi'
                    ? 'Sẵn sàng cho cơ hội Thực tập & Dự án AI/NLP'
                    : 'Open for AI/NLP Internships & Research'}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {lang === 'vi'
                    ? 'Cách nhanh nhất để liên hệ với mình là qua LinkedIn hoặc Email. Bạn cũng có thể nhấn Ctrl+K ở bất kỳ đâu trên trang để tra cứu nhanh.'
                    : 'The quickest way to reach me is via LinkedIn or Email. You can also press Ctrl+K anywhere on this site for quick navigation.'}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <MagneticGlowButton href={PROFILE.linkedin} external icon={Linkedin}>
                    {lang === 'vi' ? 'Nhắn tin qua LinkedIn' : 'Message on LinkedIn'}
                  </MagneticGlowButton>

                  <LiquidCurtainButton href={PROFILE.github} external icon={Github}>
                    {lang === 'vi' ? 'Theo dõi GitHub' : 'Follow on GitHub'}
                  </LiquidCurtainButton>

                  <BorderBeamButton href={`mailto:${PROFILE.email}`} icon={Mail}>
                    {PROFILE.email}
                  </BorderBeamButton>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer no-print border-t border-slate-200/80 py-8 text-center font-mono text-xs text-slate-500 dark:border-slate-800/80 dark:text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6">
          <span>
            {PROFILE.name} ({PROFILE.brand}
            {PROFILE.brandSuffix}) · Ho Chi Minh City · Built with React, Tailwind CSS & Framer Motion
          </span>
          <div className="flex items-center gap-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500"
            >
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500"
            >
              LinkedIn
            </a>
            <button
              type="button"
              onClick={() => setCmdOpen(true)}
              className="hover:text-indigo-500"
            >
              [Ctrl+K]
            </button>
          </div>
        </div>
      </footer>

      {/* Project Deep-Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={cmdOpen}
        onClose={() => setCmdOpen(false)}
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onNavigateSection={scrollToSection}
      />
    </div>
  );
}
