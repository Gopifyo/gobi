import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AboutSection, ProjectsSection, ExperienceSection, SkillsSection, EducationSection, PublicationsSection, MediaSection, GallerySection, PatentsSection, ContactSection } from './components/ContentRenderer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'patents', label: 'Patents' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 font-sans selection:bg-neutral-200/50 pb-32">
      
      {/* Unique Floating Navigation Pill */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-panel rounded-full p-2 flex items-center gap-1 md:gap-2 shadow-2xl border border-neutral-200/50 bg-white/80 backdrop-blur-xl">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`
                  relative px-4 py-2.5 rounded-full text-xs md:text-sm font-mono tracking-widest uppercase transition-all duration-500 overflow-hidden group
                  ${isActive ? 'text-white' : 'text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100'}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-neutral-900 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isActive ? 'bg-white shadow-[0_0_8px_white]' : 'bg-neutral-300 group-hover:bg-neutral-400'}`} />
                  <span className={`transition-all duration-300 ${isActive ? 'w-auto opacity-100 ml-1' : 'w-0 opacity-0 md:w-auto md:opacity-100 md:ml-1 hidden md:block'}`}>
                    {section.label}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Stack */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-32 md:space-y-48 pt-20 md:pt-40 overflow-hidden w-full">
        
        {/* Section: Home / Identity */}
        <section id="home" className="min-h-[100vh] flex items-center justify-center">
          <div className="w-full">
            <AboutSection />
          </div>
        </section>

        {/* Section: Experience */}
        <section id="experience" className="scroll-mt-32">
          <SectionHeader title="Professional Timeline" subtitle="Where I have worked." />
          <ExperienceSection />
        </section>

        {/* Section: Projects & Portfolio */}
        <section id="projects" className="scroll-mt-32">
          <SectionHeader title="The Vault" subtitle="Projects & Open Source" />
          <ProjectsSection />
        </section>

        {/* Section: Skills */}
        <section id="skills" className="scroll-mt-32">
          <SectionHeader title="Technical Arsenal" subtitle="Core capabilities." />
          <SkillsSection />
        </section>

        {/* Section: Patents */}
        <section id="patents" className="scroll-mt-32">
          <SectionHeader title="Intellectual Property" subtitle="Patents filed." />
          <PatentsSection />
        </section>

        {/* Section: Education & Academics */}
        <section id="education" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
               <SectionHeader title="Education" subtitle="Academic background." />
               <EducationSection />
            </div>
            <div>
               <SectionHeader title="Publications" subtitle="Academic research footprint." />
               <PublicationsSection />
            </div>
          </div>
          
          <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
               <SectionHeader title="Media" subtitle="Press and features." />
               <MediaSection />
            </div>
            <div>
               <SectionHeader title="Visual Archive" subtitle="Lab and project documentation." />
               <GallerySection />
            </div>
          </div>
        </section>

        {/* Section: Contact */}
        <section id="contact" className="scroll-mt-32 pt-20 border-t border-neutral-200">
          <ContactSection />
        </section>

      </main>
    </div>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-16">
    <div className="flex items-center gap-6 mb-4">
      <div className="w-12 h-[1px] bg-neutral-300"></div>
      <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-neutral-500">{subtitle}</h2>
    </div>
    <h3 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900">{title}</h3>
  </div>
);

export default App;
