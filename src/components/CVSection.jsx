import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Cpu,
  Code2,
  Layers,
  Briefcase,
  Printer,
  Check,
  Copy,
  MapPin,
  ExternalLink,
  Award,
  FileText,
} from 'lucide-react';
import { PROFILE, CV_DATA, FEATURED_PROJECTS } from '../data/portfolioData';
import { SpotlightCard } from './ui/SpotlightCard';
import {
  BorderBeamButton,
  LiquidCurtainButton,
  CyberBracketButton,
} from './ui/MultiEffectButtons';

const ICON_MAP = {
  Cpu,
  Code2,
  Layers,
};

export function CVSection({ lang = 'en' }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState('all');

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrintCV = () => {
    window.print();
  };

  return (
    <section id="cv-section" aria-labelledby="cv-heading" className="scroll-mt-24 space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col justify-between gap-4 border-b border-slate-200/80 pb-6 dark:border-slate-800/80 md:flex-row md:items-end">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 font-mono text-xs font-medium text-indigo-600 dark:text-indigo-300">
            <FileText className="h-3.5 w-3.5" />
            <span>{lang === 'vi' ? 'HỒ SƠ NĂNG LỰC & CV TƯƠNG TÁC' : 'INTERACTIVE CURRICULUM VITAE'}</span>
          </div>
          <h2
            id="cv-heading"
            className="font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            {lang === 'vi' ? 'CV & Năng lực Kỹ thuật' : 'Curriculum Vitae & Engineering Profile'}
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-400">
            {lang === 'vi'
              ? 'Tổng hợp quá trình học tập tại ĐH Khoa học Tự nhiên (HCMUS), kỹ năng chuyên môn AI/NLP/Speech và kinh nghiệm phát triển dự án thực tế.'
              : 'Academic background at VNUHCM – University of Science (HCMUS), technical proficiency across AI/NLP/Speech, and end-to-end engineering experience.'}
          </p>
        </div>

        {/* Multi-effect Action Buttons for CV */}
        <div className="no-print flex flex-wrap items-center gap-3">
          <BorderBeamButton onClick={handlePrintCV} icon={Printer}>
            {lang === 'vi' ? 'In / Lưu CV PDF (Chuẩn A4)' : 'Print / Export A4 PDF'}
          </BorderBeamButton>

          <CyberBracketButton onClick={handleCopyEmail} icon={copiedEmail ? Check : Copy}>
            {copiedEmail
              ? lang === 'vi'
                ? 'Đã sao chép Email!'
                : 'Email Copied!'
              : PROFILE.email}
          </CyberBracketButton>
        </div>
      </div>

      {/* Main CV Sheet Container */}
      <div className="cv-print-sheet rounded-3xl border border-slate-200/90 bg-white/95 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-md dark:border-slate-800/90 dark:bg-[#0d1326]/95 sm:p-8 lg:p-10">
        {/* Top CV Identity Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200/80 pb-8 dark:border-slate-800/80 lg:flex-row lg:items-center">
          <div className="flex items-start gap-4 sm:items-center">
            <img
              src={PROFILE.avatar}
              alt={PROFILE.name}
              className="h-16 w-16 rounded-2xl border-2 border-indigo-500/40 object-cover shadow-md sm:h-20 sm:w-20"
            />
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="font-display text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
                  {PROFILE.name}
                </h3>
                <span className="rounded-md bg-indigo-500/15 px-2.5 py-0.5 font-mono text-xs font-semibold text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-300">
                  HCMUS · K23
                </span>
              </div>
              <p className="font-medium text-indigo-600 dark:text-amber-400">
                {PROFILE.role[lang]}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {PROFILE.location[lang]}
                </span>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-indigo-500"
                >
                  github.com/TiiAyyLuvBear
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-indigo-500"
                >
                  linkedin.com/in/theanhvu2005
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="no-print flex flex-wrap gap-2">
            <LiquidCurtainButton href={PROFILE.linkedin} external icon={ExternalLink}>
              LinkedIn Profile
            </LiquidCurtainButton>
            <LiquidCurtainButton href={PROFILE.github} external icon={ExternalLink}>
              GitHub ({PROFILE.handle})
            </LiquidCurtainButton>
          </div>
        </div>

        {/* Two-column CV Layout */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Left Column: Education + Experience + Selected Projects */}
          <div className="space-y-8 lg:col-span-7">
            {/* Education */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  {lang === 'vi' ? 'Học vấn (Education)' : 'Education'}
                </h4>
              </div>

              {CV_DATA.education.map((edu, i) => (
                <SpotlightCard key={i} tilt={false} className="p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h5 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      {edu.school[lang]}
                    </h5>
                    <span className="rounded-full bg-amber-500/15 px-3 py-0.5 font-mono text-xs font-semibold text-amber-700 dark:text-amber-300">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-indigo-600 dark:text-indigo-300">
                    {edu.degree[lang]}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {edu.highlights[lang].map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              ))}
            </div>

            {/* Engineering & Research Experience */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400">
                  <Briefcase className="h-4 w-4" />
                </div>
                <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  {lang === 'vi'
                    ? 'Kinh nghiệm Dự án & Nghiên cứu (Experience)'
                    : 'Research & Engineering Experience'}
                </h4>
              </div>

              <div className="relative space-y-5 border-l-2 border-indigo-500/30 pl-5 dark:border-indigo-400/30">
                {CV_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-indigo-500 bg-white dark:bg-slate-950" />
                    <SpotlightCard tilt={false} className="p-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h5 className="font-display text-base font-bold text-slate-900 dark:text-white">
                          {exp.role[lang]}
                        </h5>
                        <span className="font-mono text-xs text-amber-600 dark:text-amber-400">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-indigo-600 dark:text-indigo-300">
                        {exp.org[lang]}
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        {exp.bullets[lang].map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </SpotlightCard>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Technical Skills Matrix & Key Highlights */}
          <div className="space-y-6 lg:col-span-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                  <Award className="h-4 w-4" />
                </div>
                <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  {lang === 'vi' ? 'Kỹ năng Chuyên môn' : 'Technical Skills Matrix'}
                </h4>
              </div>

              <div className="no-print flex gap-1">
                {['all', '0', '1', '2'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveSkillTab(tab)}
                    className={`rounded-md px-2 py-1 font-mono text-[11px] transition ${
                      activeSkillTab === tab
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                    }`}
                  >
                    {tab === 'all'
                      ? lang === 'vi'
                        ? 'Tất cả'
                        : 'All'
                      : `#${Number(tab) + 1}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {CV_DATA.skillGroups.map((group, gIdx) => {
                if (activeSkillTab !== 'all' && Number(activeSkillTab) !== gIdx) return null;
                const IconComp = ICON_MAP[group.icon] || Cpu;
                return (
                  <SpotlightCard key={gIdx} tilt={false} className="p-5">
                    <div className="mb-3.5 flex items-center gap-2">
                      <IconComp className="h-4 w-4 text-indigo-500 dark:text-amber-400" />
                      <h5 className="font-display text-base font-bold text-slate-900 dark:text-white">
                        {group.title[lang]}
                      </h5>
                    </div>
                    <div className="space-y-3">
                      {group.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-slate-700 dark:text-slate-200">
                              {skill.name}
                            </span>
                            <span className="font-mono text-[11px] text-indigo-600 dark:text-amber-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.9, ease: 'easeOut' }}
                              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-amber-400"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>

            {/* Quick Summary of Flagship Projects for Print/Recruiters */}
            <SpotlightCard tilt={false} className="p-5">
              <h5 className="font-display text-base font-bold text-slate-900 dark:text-white">
                {lang === 'vi'
                  ? 'Danh mục Đồ án & Hệ thống Tiêu biểu'
                  : 'Key Portfolio Systems Index'}
              </h5>
              <ul className="mt-3 space-y-2.5 text-xs">
                {FEATURED_PROJECTS.map((p) => (
                  <li
                    key={p.slug}
                    className="flex items-start justify-between gap-2 border-b border-slate-200/60 pb-2 last:border-none last:pb-0 dark:border-slate-800/60"
                  >
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">{p.title}</span>
                      <span className="ml-1.5 font-mono text-[11px] text-indigo-600 dark:text-amber-400">
                        ({p.language})
                      </span>
                      <p className="text-slate-500 dark:text-slate-400">{p.subtitle[lang]}</p>
                    </div>
                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 font-mono text-[11px] text-indigo-600 hover:underline dark:text-indigo-400"
                    >
                      GitHub ↗
                    </a>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
