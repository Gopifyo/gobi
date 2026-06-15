import React, { useState, useEffect } from 'react';
import { PROJECTS, EXPERIENCES, SKILLS, PUBLICATIONS, EDUCATION, MEDIA, SOCIAL_LINKS, PROFILE_IMAGE, GALLERY, PATENTS } from '../constants';
import { ExternalLink, Github, Linkedin, MapPin, FileText, ArrowUpRight, Newspaper, X, Eye, BookOpen, ChevronLeft, ChevronRight as ChevronRightIcon, Download, ZoomIn, ZoomOut, User, Maximize2, ImageOff, Bot, Mail, ShieldCheck, Sparkles, Cpu, Camera, Database, Zap, Code2, Layout, Box } from 'lucide-react';
import { MediaItem, GalleryItem } from '../types/app';
import { DigitalCard } from './DigitalCard';

// Premium Bio-Digital Core Replacement for Bot Icon
// Premium Bio-Digital Core Replacement for Bot Icon
export const BioDigitalCore = ({ size = "w-full h-full", glowColor = "rgba(251, 191, 36, 0.5)" }) => (
  <div className={`relative ${size} flex items-center justify-center`}>
    {/* Outer Organic Membrane */}
    <div className="absolute inset-0 border border-amber-500/30 rounded-full animate-[pulse_4s_ease-in-out_infinite] scale-90"></div>
    {/* Inner Neural Core */}
    <div className="relative w-1/2 h-1/2 bg-gradient-to-tr from-amber-900 to-violet-900 rounded-full shadow-sm animate-pulse">
      <div className="absolute inset-0 bg-zinc-100 rounded-full blur-sm"></div>
    </div>
    {/* Orbiting Electrons/Data Points */}
    <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full shadow-sm"></div>
    </div>
    <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-violet-400 rounded-full shadow-sm"></div>
    </div>
  </div>
);

export const RecentLearningSection = () => (
  <div className="space-y-8 mt-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="group glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 hover:bg-zinc-50 transition-all shadow-xl overflow-hidden relative border border-zinc-200">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
          <Database size={80} className="text-zinc-900" />
        </div>
        <div className="px-4 py-2 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest border bg-zinc-100 text-zinc-900 border-zinc-200 w-fit mb-8">
          Deep Dive // 2025
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 group-hover:text-zinc-900 transition-colors">Database Architecture</h3>
        <p className="text-lg text-zinc-600 leading-relaxed font-light">
          Mastering relational modeling, indexing strategies, and high-throughput data pipelines for managing massive biological datasets.
        </p>
      </div>

      <div className="group glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 hover:bg-zinc-50 transition-all shadow-xl overflow-hidden relative border border-zinc-200">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
          <Zap size={80} className="text-zinc-900" />
        </div>
        <div className="px-4 py-2 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest border bg-zinc-100 text-zinc-900 border-zinc-200 w-fit mb-8">
          In Progress
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 group-hover:text-zinc-900 transition-colors">MySQL Optimization</h3>
        <p className="text-lg text-zinc-600 leading-relaxed font-light">
          Advanced query tuning and schema design to ensure milliseconds-level response times for social consumer platform backends.
        </p>
      </div>
    </div>
  </div>
);

export const FavoriteToolsSection = () => {
  const tools = [
    { name: "Google Antigravity", desc: "Advanced physics engine orchestration.", icon: <Box className="text-zinc-900" /> },
    { name: "Claude Code", desc: "Elite logic & reasoning for complex codebases.", icon: <Zap className="text-zinc-900" /> },
    { name: "Cursor Agent", desc: "AI-native IDE for rapid prototype scaling.", icon: <Layout className="text-zinc-900" /> },
    { name: "VS Code", desc: "The foundational environment for all vibes.", icon: <Code2 className="text-zinc-900" /> },
    { name: "ChatGPT", desc: "Strategic brainstorming and logic verification.", icon: <Sparkles className="text-zinc-900" /> },
    { name: "R Studio", desc: "Statistical depth for biological data synthesis.", icon: <Database className="text-indigo-400" /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {tools.map((tool, i) => (
        <div key={i} className="group glass-card rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-lg border border-zinc-200">
          <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 border border-zinc-200 group-hover:scale-110 transition-transform shadow-sm group-hover:border-zinc-300">
            {tool.icon}
          </div>
          <h3 className="text-xl font-bold text-zinc-900 mb-2">{tool.name}</h3>
          <p className="text-zinc-500 text-sm font-light leading-relaxed">{tool.desc}</p>
        </div>
      ))}
    </div>
  );
};

export const AboutSection = () => {
  const imgSrc = PROFILE_IMAGE;

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[70vh] animate-in fade-in slide-in-from-bottom-8 duration-1000">
      
      {/* Centered Profile Image */}
      <div className="relative mb-12 group">
        <div className="absolute inset-0 bg-zinc-200 rounded-full blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition duration-700"></div>
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-zinc-200/50 shadow-2xl ring-4 ring-white">
          <img
            src={imgSrc}
            alt="Gobinath"
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
          />
        </div>
        {/* Minimal Ping */}
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-zinc-900 rounded-full ring-4 ring-white flex items-center justify-center">
           <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Massive Typography */}
      <div className="text-center space-y-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-zinc-900 leading-[0.85] uppercase selection:bg-zinc-200">
          Bioengineer.<br />
          Builder.<br />
          <span className="text-zinc-400">Founder.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-zinc-500 font-light leading-relaxed max-w-2xl mx-auto pt-8">
          Operating at the intersection of <strong className="font-semibold text-zinc-900">human health research</strong>, <strong className="font-semibold text-zinc-900">consumer products</strong>, and <strong className="font-semibold text-zinc-900">agentic AI workflows</strong>.
        </p>
      </div>

      {/* Action Badges */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-16">
        <StatusBadge color="bg-zinc-900" text="Tissue Engineering" />
        <StatusBadge color="bg-zinc-900" text="AI Orchestration" />
        <StatusBadge color="bg-zinc-900" text="Bioinformatics" />
      </div>

    </div>
  );
};

const StatusBadge = ({ color, text }: { color: string; text: string }) => {
  // Extract color name for the shadow if possible, otherwise use a fallback
  const glowColor = color.replace('bg-', '');

  return (
    <div className="glass-card bg-zinc-50 border border-zinc-200 px-4 md:px-5 py-2.5 md:py-3 rounded-2xl text-zinc-600 text-[10px] md:text-xs font-mono tracking-[0.1em] flex items-center gap-3 hover:border-zinc-300 hover:bg-zinc-100 transition-all cursor-default shadow-sm hover:shadow-md group shrink-0 uppercase">
      <div
        className={`w-1.5 h-1.5 rounded-full ${color} animate-pulse group-hover:scale-125 transition-transform shadow-lg`}
        style={{ boxShadow: `0 0 12px var(--tw-shadow-color)` }}
      ></div>
      {text}
    </div>
  );
};

export const ProjectsSection = () => (
  <div className="space-y-12 mt-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {PROJECTS.map((project, i) => (
        <div key={i} className="group relative glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-500 flex flex-col h-full shadow-2xl border border-zinc-200 overflow-hidden">

          {/* Optional Project Image */}
          {project.imageUrl && (
            <div className="relative h-48 w-full mb-8 rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale-[20%] group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
          )}

          <div className="flex justify-between items-start mb-6">
            <span className="text-[10px] font-mono font-bold text-zinc-900 bg-zinc-100 px-4 py-2 rounded-xl border border-zinc-200 uppercase tracking-[0.2em]">{project.type}</span>
            {project.link && (
              <a href={project.link} target="_blank" className="text-zinc-500 hover:text-zinc-900 transition-all transform hover:rotate-12">
                <ArrowUpRight size={28} />
              </a>
            )}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 group-hover:text-zinc-900 transition-colors leading-tight">{project.title}</h3>

          <div className="flex-1 mb-10">
            <p className="text-lg text-zinc-600 leading-relaxed font-light mb-6">{project.description}</p>

            {project.files && (
              <div className="bg-zinc-100/50 rounded-xl p-4 border border-zinc-200/50 space-y-2">
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3 border-b border-zinc-200/50 pb-2">Core Architecture</p>
                <div className="space-y-2">
                  {project.files.map((file, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm">
                      <span className="font-mono text-zinc-900 shrink-0">{file.name}</span>
                      <span className="text-zinc-500 font-light text-xs mt-0.5">// {file.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3 mt-auto">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-[10px] bg-zinc-50 border border-zinc-200 px-4 py-2 rounded-xl text-zinc-500 font-mono tracking-wider uppercase group-hover:text-zinc-900 transition-colors shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const PatentsSection = () => (
  <div className="space-y-8 mt-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
    {PATENTS.map((patent, i) => (
      <div key={i} className="group relative glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 hover:bg-zinc-50 hover:border-emerald-500/30 transition-all duration-500 shadow-xl border border-zinc-200">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-zinc-100 rounded-2xl border border-zinc-200 text-zinc-900">
              <ShieldCheck size={28} />
            </div>
            <span className="text-[10px] font-mono font-bold text-zinc-900 bg-zinc-100 px-4 py-2 rounded-xl border border-zinc-200 uppercase tracking-[0.2em]">Intellectual Property</span>
          </div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{patent.year}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 leading-tight group-hover:text-zinc-900 transition-colors">{patent.title}</h3>
        <p className="text-lg text-zinc-600 mb-8 leading-relaxed font-light">{patent.description}</p>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-zinc-900 animate-pulse" />
          <span className="text-sm font-mono text-zinc-900 uppercase tracking-widest">{patent.status}</span>
        </div>
      </div>
    ))}
  </div>
);

export const ExperienceSection = () => (
  <div className="space-y-14 mt-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
    {EXPERIENCES.map((exp, i) => (
      <div key={i} className="relative pl-8 md:pl-12 border-l border-zinc-200 hover:border-zinc-400 transition-colors duration-500 group">
        <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] bg-zinc-300 rounded-full ring-4 ring-black group-hover:bg-zinc-800 group-hover:scale-150 transition-all" />
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 group-hover:text-zinc-900 transition-colors">{exp.role}</h3>
          <div className="text-sm font-mono text-zinc-500 mt-2 uppercase tracking-widest">{exp.company} // {exp.period}</div>
        </div>
        <ul className="space-y-4">
          {exp.highlights.map((h: string, j: number) => (
            <li key={j} className="text-lg text-zinc-600 leading-relaxed flex items-start gap-5 font-light">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2.5 shrink-0 group-hover:bg-zinc-900 transition-colors" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export const EducationSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
    {EDUCATION.map((edu, i) => (
      <div key={i} className="group glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 transition-all hover:bg-zinc-50 hover:border-zinc-300 shadow-xl border border-zinc-200">
        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4 leading-tight">{edu.degree}</h3>
        <div className="mb-8">
          {edu.link ? (
            <a
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 font-mono text-xs hover:text-zinc-900 inline-flex items-center gap-2 tracking-widest uppercase"
            >
              {edu.institution}
              <ExternalLink size={12} />
            </a>
          ) : (
            <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase">{edu.institution}</p>
          )}
        </div>
        <span className="inline-block text-[10px] bg-zinc-50 border border-zinc-200 px-4 py-2 rounded-xl text-zinc-500 font-mono tracking-widest uppercase">
          {edu.period}
        </span>
      </div>
    ))}
  </div>
);

export const SkillsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
    {SKILLS.map((cat, i) => (
      <div key={i} className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:border-zinc-300 transition-all duration-500 border border-zinc-200">
        <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-10 border-b border-zinc-200/50 pb-6">{cat.category}</h4>
        <div className="flex flex-wrap gap-3">
          {cat.skills.map((skill: string) => (
            <span key={skill} className="text-sm font-mono text-zinc-600 bg-zinc-50 px-5 py-3 rounded-xl hover:bg-zinc-100 hover:text-zinc-900 transition-all cursor-default border border-transparent hover:border-zinc-200">
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const PublicationsSection = () => (
  <div className="space-y-6 mt-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
    {PUBLICATIONS.map((pub, i) => {
      const url = pub.link || (pub.doi ? `https://doi.org/${pub.doi}` : undefined);
      return (
        <div key={i} className="group relative flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] glass-card hover:bg-zinc-50 transition-all duration-500 border border-zinc-200">
          <div className="shrink-0 pt-1 text-zinc-500 group-hover:text-zinc-900 transition-colors duration-500">
            <FileText size={32} />
          </div>
          <div className="flex-1 pr-12">
            <h4 className="text-xl font-bold text-zinc-900 mb-2 leading-tight group-hover:text-cyan-100 transition-colors">
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900">
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </h4>
            {pub.highlight && (
              <p className="text-sm text-zinc-600 font-light mb-4 italic leading-relaxed">"{pub.highlight}"</p>
            )}
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
              <span className="text-zinc-600 font-bold">{pub.journal}</span>
              <span>{pub.year}</span>
              {pub.doi && <span className="opacity-40">DOI: {pub.doi.split('/')[1]}</span>}
            </div>
          </div>
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="absolute top-10 right-10 text-zinc-600 hover:text-zinc-900 transition-all transform hover:scale-125">
              <ArrowUpRight size={28} />
            </a>
          )}
        </div>
      );
    })}
  </div>
);

const GalleryThumbnail: React.FC<{ item: GalleryItem; onClick: () => void }> = ({ item, onClick }) => {
  const [imgSrc, setImgSrc] = useState(item.imageUrl);
  const [error, setError] = useState(false);

  return (
    <div
      className="group relative aspect-square overflow-hidden rounded-[2rem] border border-zinc-200 glass-card bg-zinc-50 cursor-pointer shadow-xl"
      onClick={!error ? onClick : undefined}
    >
      {!error ? (
        <img
          src={imgSrc}
          alt={item.title}
          onError={() => {
            setError(true);
          }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale-[50%] group-hover:grayscale-0"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-zinc-50">
          <ImageOff size={28} className="text-zinc-600 mb-3" />
          <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Archive Link Missing</p>
        </div>
      )}

      {!error && (
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
          <p className="text-zinc-900 text-[10px] font-mono uppercase tracking-[0.4em] mb-2">{item.category}</p>
          <h4 className="text-zinc-900 font-bold text-lg leading-tight">{item.title}</h4>
        </div>
      )}
    </div>
  );
};

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const handleClose = () => setSelectedImage(null);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') {
        const currentIndex = GALLERY.findIndex(g => g.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + GALLERY.length) % GALLERY.length;
        setSelectedImage(GALLERY[prevIndex]);
      }
      if (e.key === 'ArrowRight') {
        const currentIndex = GALLERY.findIndex(g => g.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % GALLERY.length;
        setSelectedImage(GALLERY[nextIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
        {GALLERY.map((item) => (
          <GalleryThumbnail key={item.id} item={item} onClick={() => setSelectedImage(item)} />
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="absolute inset-0" onClick={handleClose} />

          <div className="relative z-10 max-w-6xl w-full flex items-center justify-between gap-4 animate-in zoom-in-95 duration-500">
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = GALLERY.findIndex(g => g.id === selectedImage.id);
                const prevIndex = (currentIndex - 1 + GALLERY.length) % GALLERY.length;
                setSelectedImage(GALLERY[prevIndex]);
              }}
              className="p-2 md:p-3 text-zinc-900/50 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-all absolute left-2 top-1/2 -translate-y-1/2 md:static md:translate-y-0 z-20 md:z-auto bg-white/50 md:bg-transparent"
            >
              <ChevronLeft size={48} />
            </button>

            <div className="relative flex flex-col items-center flex-1 max-h-[90vh]">
              <button onClick={handleClose} className="absolute -top-12 right-0 md:-right-12 p-2 text-zinc-900/60 hover:text-zinc-900 transition-colors bg-zinc-100 hover:bg-white/20 rounded-full backdrop-blur-md">
                <X size={24} />
              </button>

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-zinc-300 bg-white/50">
                <img src={selectedImage.imageUrl} alt={selectedImage.title} className="max-h-[70vh] w-auto object-contain" loading="lazy" />
              </div>

              <div className="mt-6 text-center max-w-2xl px-4">
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">{selectedImage.title}</h3>
                <p className="text-zinc-600 text-sm md:text-base font-light">{selectedImage.description}</p>
                <div className="flex gap-2 justify-center mt-4">
                  {GALLERY.map((g, idx) => (
                    <div key={g.id} className={`w-2 h-2 rounded-full transition-all ${g.id === selectedImage.id ? 'bg-cyan-400 w-4' : 'bg-white/20'}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = GALLERY.findIndex(g => g.id === selectedImage.id);
                const nextIndex = (currentIndex + 1) % GALLERY.length;
                setSelectedImage(GALLERY[nextIndex]);
              }}
              className="p-2 md:p-3 text-zinc-900/50 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-all absolute right-2 top-1/2 -translate-y-1/2 md:static md:translate-y-0 z-20 md:z-auto bg-white/50 md:bg-transparent"
            >
              <ChevronRightIcon size={48} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export const MediaSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
    {MEDIA.map((item, i) => (
      <div key={i} className="group relative flex flex-col rounded-[2rem] md:rounded-[2.5rem] glass-card hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-500 overflow-hidden shadow-xl border border-zinc-200">
        <div className="relative h-56 w-full overflow-hidden bg-zinc-50 border-b border-zinc-200">
          {item.imageUrl ? (
            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale-[50%] group-hover:grayscale-0" loading="lazy" />
          ) : (
            <div className="w-full h-full flex items-center justify-center"><Newspaper size={48} className="text-zinc-700" /></div>
          )}
          <div className="absolute top-6 left-6">
            <span className="text-[10px] font-mono font-bold text-black bg-white/90 px-4 py-2 rounded-xl shadow-2xl uppercase tracking-widest">{item.type}</span>
          </div>
        </div>
        <div className="p-6 md:p-10 flex-1 flex flex-col">
          <div className="text-[10px] text-zinc-500 font-mono mb-4 flex items-center gap-3 tracking-[0.2em] uppercase">
            <span>{item.source}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
            <span>{item.date}</span>
          </div>
          <h4 className="text-2xl font-bold text-zinc-900 mb-6 leading-tight group-hover:text-zinc-900 transition-colors">{item.title}</h4>
          {item.description && <p className="text-base text-zinc-600 leading-relaxed mb-10 font-light line-clamp-3">{item.description}</p>}
          <div className="mt-auto">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex w-full py-4 rounded-2xl bg-zinc-900 text-white hover:bg-zinc-800 font-bold transition-all items-center justify-center gap-3 group/btn shadow-xl border border-zinc-200 text-sm">
              Launch Source <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const ContactSection = () => (
  <div className="mt-10 p-8 md:p-16 glass-panel rounded-[2rem] md:rounded-[3rem] border border-zinc-200 text-center animate-in fade-in slide-in-from-bottom-6 duration-700 shadow-2xl bg-gradient-to-br from-white/5 to-transparent">
    <h3 className="text-3xl md:text-4xl font-black text-zinc-900 mb-6 uppercase tracking-tight">Direct Synchronization</h3>
    <p className="text-zinc-600 mb-12 text-xl font-light max-w-xl mx-auto leading-relaxed">The best way to reach out for high-impact collaborations, product ventures, or deep-tech research.</p>
    <div className="flex flex-col md:flex-row justify-center gap-6">
      <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex-1 px-8 py-5 bg-zinc-900 text-white hover:bg-zinc-800 rounded-[1.5rem] text-lg font-black transition-all shadow-xl hover:scale-105 active:scale-95 uppercase tracking-widest flex items-center justify-center gap-3">
        <Mail size={22} /> Email Protocol
      </a>
      <a href={`https://${SOCIAL_LINKS.linkedin}`} target="_blank" className="flex-1 px-8 py-5 bg-[#0077b5] hover:bg-[#00a0dc] text-zinc-900 rounded-[1.5rem] text-lg font-black transition-all shadow-xl hover:scale-105 active:scale-95 uppercase tracking-widest flex items-center justify-center gap-3">
        <Linkedin size={22} /> LinkedIn Sync
      </a>
      <a href={`https://${SOCIAL_LINKS.github}`} target="_blank" className="flex-1 px-8 py-5 bg-zinc-100 border border-zinc-300 hover:bg-white/20 text-zinc-900 rounded-[1.5rem] text-lg font-black transition-all flex items-center justify-center gap-4 hover:border-white/40 uppercase tracking-widest backdrop-blur-md">
        <Github size={22} /> Access Git
      </a>
    </div>

    <div className="mt-16 pt-16 border-t border-zinc-200/50">
      <h4 className="text-xl font-bold text-zinc-500 mb-8 uppercase tracking-widest">Digital Identity Token</h4>
      <DigitalCard />
    </div>
  </div>
);