import React from 'react';
import { HeroWidget, LocationWidget, StatusWidget, ProjectsWidget, ExperienceWidget, SkillsWidget, PublicationsWidget, SocialWidget } from './components/BentoWidgets';

const App: React.FC = () => {
  return (
    <div className="min-h-[100dvh] bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-200/50 relative overflow-x-hidden flex flex-col justify-center py-12 md:py-24">
      
      {/* Ambient Animated Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-sky-200/40 mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-200/40 mix-blend-multiply filter blur-[100px] opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-emerald-100/40 mix-blend-multiply filter blur-[120px] opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Bento Box Grid */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[220px] gap-4 md:gap-6">
          
          <HeroWidget />
          <LocationWidget />
          <StatusWidget />
          
          <ProjectsWidget />
          <PublicationsWidget />
          <SocialWidget />
          
          <ExperienceWidget />
          <SkillsWidget />

        </div>
      </main>

    </div>
  );
};

export default App;
