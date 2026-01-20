
import React from 'react';

const Vision: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-slate-800 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-slate-700">
        <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
          <h2 className="text-blue-500 font-bold uppercase tracking-wider mb-2">Our Vision</h2>
          <h3 className="text-4xl md:text-5xl font-aviation font-bold mb-8 text-white">The Sky is <span className="text-blue-500">Not</span> the Limit</h3>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            "We envision an ASECNA that is the global benchmark for air safety, powered by a workforce that feels valued, protected, and inspired. My goal is to transform our agency into a hub of innovation where every expat staff member has a voice and a clear path to leadership."
          </p>
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden">
               <img src="https://picsum.photos/id/100/100/100" alt="Marc Diop" />
            </div>
            <div>
              <p className="font-bold text-white">Marc Diop</p>
              <p className="text-sm text-slate-400">Secretary General Candidate</p>
            </div>
          </div>
          <button className="self-start px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-colors">
            Read the Full Manifesto
          </button>
        </div>
        <div className="lg:w-1/2 relative min-h-[400px]">
          <img 
            src="https://picsum.photos/id/106/1000/1200" 
            alt="Control Tower Visual" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="glass p-8 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
