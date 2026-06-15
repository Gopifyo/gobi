import React from 'react';
import { PROJECTS, EXPERIENCES, SKILLS, PUBLICATIONS, SOCIAL_LINKS, PROFILE_IMAGE } from '../constants';
import { MapPin, Briefcase, Mail, Linkedin, Github, ExternalLink, ArrowUpRight, BookOpen, ChevronRight, Zap } from 'lucide-react';

export const HeroWidget = () => (
  <div className="glass-card rounded-3xl p-8 flex flex-col justify-between col-span-1 md:col-span-2 lg:col-span-2 row-span-2 h-full">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/50 shadow-lg">
        <img src={PROFILE_IMAGE} alt="Gobinath" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
      </div>
      <div>
        <h1 className="text-3xl font-black text-neutral-900 tracking-tight">Gobinath</h1>
        <p className="text-neutral-500 font-mono text-sm uppercase tracking-widest mt-1">Bioengineer & Founder</p>
      </div>
    </div>
    <div className="space-y-4">
      <p className="text-neutral-600 text-lg font-light leading-relaxed">
        Building the future at the intersection of <strong className="text-neutral-900">agentic AI workflows</strong> and <strong className="text-neutral-900">human health</strong>.
      </p>
      <div className="flex gap-2 flex-wrap">
        <span className="px-3 py-1 bg-neutral-900 text-white text-xs font-bold rounded-full uppercase tracking-wider">Tissue Engineering</span>
        <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-bold rounded-full border border-neutral-200 uppercase tracking-wider">AI Orchestration</span>
      </div>
    </div>
  </div>
);

export const LocationWidget = () => (
  <div className="glass-card rounded-3xl p-6 flex flex-col justify-center items-center text-center col-span-1 row-span-1 h-full group hover:bg-neutral-900 hover:text-white transition-all duration-500 cursor-default">
    <MapPin className="w-8 h-8 text-neutral-400 group-hover:text-white mb-3" />
    <h3 className="text-lg font-bold tracking-tight">Corvallis, OR</h3>
    <p className="text-neutral-500 group-hover:text-neutral-300 text-sm mt-1">Pacific Northwest</p>
  </div>
);

export const StatusWidget = () => (
  <div className="glass-card rounded-3xl p-6 flex flex-col justify-center items-center text-center col-span-1 row-span-1 h-full group">
    <div className="relative mb-3">
      <div className="absolute inset-0 bg-emerald-500 rounded-full blur animate-pulse"></div>
      <div className="relative w-4 h-4 bg-emerald-500 rounded-full ring-4 ring-emerald-500/30"></div>
    </div>
    <h3 className="text-lg font-bold tracking-tight text-neutral-900">Founder</h3>
    <p className="text-neutral-500 text-sm mt-1">@ Antigravity</p>
  </div>
);

export const ProjectsWidget = () => (
  <div className="glass-card rounded-3xl p-6 md:p-8 flex flex-col col-span-1 md:col-span-2 lg:col-span-2 row-span-2 h-[400px] lg:h-auto">
    <div className="flex items-center justify-between mb-6 shrink-0">
      <h2 className="text-xl font-black uppercase tracking-widest text-neutral-900 flex items-center gap-2">
        <Zap className="w-5 h-5" /> The Vault
      </h2>
      <span className="text-xs font-mono text-neutral-400 bg-neutral-100 px-2 py-1 rounded-full">{PROJECTS.length} Active</span>
    </div>
    <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
      {PROJECTS.map((project, i) => (
        <a key={i} href={project.link !== '#' ? project.link : undefined} target="_blank" rel="noreferrer" className="block group p-4 rounded-2xl bg-white/40 hover:bg-white transition-all border border-neutral-100 hover:border-neutral-300 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-neutral-900 group-hover:text-neutral-900">{project.title}</h3>
            {project.link !== '#' && <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />}
          </div>
          <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">{project.description}</p>
        </a>
      ))}
    </div>
  </div>
);

export const ExperienceWidget = () => (
  <div className="glass-card rounded-3xl p-6 md:p-8 flex flex-col col-span-1 md:col-span-2 lg:col-span-3 row-span-2 h-[400px] lg:h-auto">
    <div className="flex items-center mb-6 shrink-0">
      <h2 className="text-xl font-black uppercase tracking-widest text-neutral-900 flex items-center gap-2">
        <Briefcase className="w-5 h-5" /> Timeline
      </h2>
    </div>
    <div className="flex-1 overflow-y-auto pr-4 space-y-6 custom-scrollbar">
      {EXPERIENCES.map((exp, i) => (
        <div key={i} className="relative pl-6 border-l-2 border-neutral-200 last:border-transparent pb-2">
          <div className="absolute w-3 h-3 bg-neutral-300 rounded-full -left-[7px] top-1.5 ring-4 ring-neutral-50"></div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
            <h3 className="font-bold text-neutral-900">{exp.role}</h3>
            <span className="text-xs font-mono text-neutral-400 mt-1 md:mt-0">{exp.period}</span>
          </div>
          <p className="text-sm text-neutral-500 font-medium mb-3">{exp.company}</p>
          <ul className="space-y-2">
            {exp.highlights.slice(0, 2).map((highlight, j) => (
              <li key={j} className="text-sm text-neutral-600 leading-relaxed relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-neutral-300 before:rounded-full">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export const SkillsWidget = () => (
  <div className="glass-card rounded-3xl p-6 flex flex-col justify-center col-span-1 md:col-span-2 lg:col-span-3 row-span-1 h-full overflow-hidden">
    <h2 className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-4">Core Arsenal</h2>
    <div className="flex flex-wrap gap-2">
      {SKILLS.flatMap(cat => cat.skills).slice(0, 15).map((skill, i) => (
        <span key={i} className="px-3 py-1.5 bg-white text-neutral-700 text-sm font-medium rounded-xl border border-neutral-200 shadow-sm hover:scale-105 transition-transform cursor-default">
          {skill}
        </span>
      ))}
      <span className="px-3 py-1.5 bg-neutral-50 text-neutral-400 text-sm font-medium rounded-xl border border-neutral-200 border-dashed">
        + More
      </span>
    </div>
  </div>
);

export const PublicationsWidget = () => (
  <div className="glass-card rounded-3xl p-6 flex flex-col justify-center items-center text-center col-span-1 md:col-span-2 lg:col-span-2 row-span-1 h-full group hover:bg-neutral-900 hover:text-white transition-all duration-500 cursor-default">
    <BookOpen className="w-8 h-8 text-neutral-400 group-hover:text-white mb-3" />
    <h3 className="text-3xl font-black tracking-tighter">{PUBLICATIONS.length}</h3>
    <p className="text-sm font-mono text-neutral-500 group-hover:text-neutral-300 uppercase tracking-widest mt-1">Publications</p>
  </div>
);

export const SocialWidget = () => (
  <div className="glass-card rounded-3xl p-6 flex items-center justify-between col-span-1 md:col-span-2 lg:col-span-2 row-span-1 h-full">
    <div className="flex gap-4 w-full justify-center">
      <a href={`mailto:${SOCIAL_LINKS.email}`} className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-neutral-200 shadow-sm hover:scale-110 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all text-neutral-600">
        <Mail size={24} />
      </a>
      <a href={`https://${SOCIAL_LINKS.linkedin}`} target="_blank" rel="noreferrer" className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-neutral-200 shadow-sm hover:scale-110 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all text-neutral-600">
        <Linkedin size={24} />
      </a>
      <a href={`https://${SOCIAL_LINKS.github}`} target="_blank" rel="noreferrer" className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-neutral-200 shadow-sm hover:scale-110 hover:bg-[#333] hover:text-white hover:border-[#333] transition-all text-neutral-600">
        <Github size={24} />
      </a>
    </div>
  </div>
);
