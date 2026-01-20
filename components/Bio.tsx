
import React from 'react';
import { TimelineEvent } from '../types';

const Bio: React.FC = () => {
  const timeline: TimelineEvent[] = [
    {
      year: "2010 - 2014",
      title: "Flight Operations Manager",
      description: "Spearheaded regional air traffic control modernization projects across the Sahel region."
    },
    {
      year: "2015 - 2019",
      title: "Senior Liaison Officer, Expat Affairs",
      description: "Successfully negotiated staff welfare packages and improved healthcare access for expatriate families."
    },
    {
      year: "2020 - Present",
      title: "Strategic Advisor for Safety & Training",
      description: "Developed the 2030 ASECNA Safety Roadmap, focusing on satellite-based navigation systems."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-100 rounded-3xl transform -rotate-3 transition-transform group-hover:rotate-0"></div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="https://picsum.photos/id/64/800/1000" 
              alt="Marc Diop Candidate Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Badge */}
          <div className="absolute bottom-6 right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl transform rotate-3">
             <p className="text-sm font-bold uppercase">15+ Years</p>
             <p className="text-2xl font-aviation font-bold">Experience</p>
          </div>
        </div>

        <div>
          <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2">The Journey</h2>
          <h3 className="text-4xl md:text-5xl font-aviation font-bold mb-6">Experience You Can <span className="text-blue-800 underline decoration-blue-200">Trust</span></h3>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            With over 15 years of dedicated service in ASECNA, Marc Diop understands the intricate challenges of air navigation safety and the unique needs of our expatriate community. His career is built on the pillars of transparency, innovation, and unwavering advocacy for staff rights.
          </p>

          <div className="space-y-8">
            {timeline.map((event, idx) => (
              <div key={idx} className="flex space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-200"></div>
                  {idx !== timeline.length - 1 && <div className="w-0.5 h-full bg-blue-100 mt-2"></div>}
                </div>
                <div className="pb-4">
                  <span className="text-blue-600 font-bold text-sm tracking-tighter">{event.year}</span>
                  <h4 className="text-xl font-bold text-slate-800">{event.title}</h4>
                  <p className="text-slate-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
