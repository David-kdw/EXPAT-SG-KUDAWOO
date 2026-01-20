
import React from 'react';
import { ICONS } from '../constants';
import { ProgramPillar } from '../types';

const Program: React.FC = () => {
  const pillars: ProgramPillar[] = [
    {
      id: 'safety',
      title: 'Safety Modernization',
      description: 'Implementing next-gen ADS-B surveillance across all member states to eliminate black spots.',
      icon: <ICONS.Shield />
    },
    {
      id: 'welfare',
      title: 'Expat Staff Welfare',
      description: 'Revitalizing the "Expat Premium" and expanding housing allowances for families in remote sectors.',
      icon: <ICONS.Users />
    },
    {
      id: 'transparency',
      title: 'Open Governance',
      description: 'Quarterly Town Hall meetings and a transparent portal for tracking SG budget expenditures.',
      icon: <ICONS.Chart />
    },
    {
      id: 'training',
      title: 'Digital Academy',
      description: 'Launching a remote-first training platform for continuous professional certification.',
      icon: <ICONS.Briefcase />
    },
    {
      id: 'unity',
      title: 'Regional Unity',
      description: 'Bridging the gap between the head office and regional agencies through mobile task forces.',
      icon: <ICONS.Globe />
    },
    {
      id: 'infrastructure',
      title: 'Green Aviation',
      description: 'Initiating solar-powered ground station pilot programs to reduce our carbon footprint.',
      icon: <ICONS.Radar />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-blue-200 font-bold uppercase tracking-wider mb-2">Our Flight Plan</h2>
        <h3 className="text-4xl md:text-6xl font-aviation font-bold">Six Pillars of Progress</h3>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          A comprehensive roadmap designed to modernize ASECNA while prioritizing the human capital that makes safety possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pillars.map((pillar) => (
          <div 
            key={pillar.id} 
            className="group glass p-8 rounded-3xl transition-all hover:bg-white/20 hover:-translate-y-2 border border-white/10"
          >
            <div className="w-14 h-14 bg-white/10 group-hover:bg-blue-500 rounded-2xl flex items-center justify-center mb-6 transition-colors text-white">
              {pillar.icon}
            </div>
            <h4 className="text-2xl font-bold mb-4">{pillar.title}</h4>
            <p className="text-blue-100 leading-relaxed">
              {pillar.description}
            </p>
            <div className="mt-6 flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Read Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
