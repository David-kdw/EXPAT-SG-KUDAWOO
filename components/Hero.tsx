
import React from 'react';
import { CANDIDATE_NAME, CANDIDATE_TITLE, CAMPAIGN_SLOGAN } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video/Image Background Placeholder Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/401/1920/1080" 
          alt="Aviation Background" 
          className="w-full h-full object-cover opacity-30 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900"></div>
      </div>

      {/* Clouds Animation Layer (Simulated) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600 blur-[100px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="inline-block px-4 py-1.5 mb-6 glass rounded-full border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest animate-pulse">
          Flight Plan: Excellence 2025
        </div>
        
        <h1 className="text-5xl md:text-8xl font-aviation font-bold mb-6 text-white leading-tight">
          {CANDIDATE_NAME.split(' ')[0]} <span className="text-blue-500">{CANDIDATE_NAME.split(' ')[1]}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light italic">
          "{CAMPAIGN_SLOGAN}"
        </p>
        
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {CANDIDATE_TITLE}. Dedicated to empowering our expatriate staff and ensuring ASECNA's safety standards soar to new heights.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#program" 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-900/50 flex items-center justify-center"
          >
            Explore the Flight Plan
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a 
            href="#bio" 
            className="w-full sm:w-auto glass hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
          >
            Candidate Bio
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-slate-500 text-xs uppercase tracking-widest mb-2">Scroll to Takeoff</span>
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Hero;
