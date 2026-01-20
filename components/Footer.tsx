
import React from 'react';
import { CANDIDATE_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <h4 className="font-aviation text-2xl font-bold mb-6">{CANDIDATE_NAME}</h4>
            <p className="text-slate-400 max-w-sm mb-6">
              Leading ASECNA into a new era of safety, technology, and staff empowerment. Join the flight toward a better future for all expatriate personnel.
            </p>
            <div className="flex space-x-4">
              {/* Social icons placeholders */}
              {[1, 2, 3, 4].map(i => (
                <a key={i} href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                   <div className="w-5 h-5 bg-slate-400 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 uppercase text-sm tracking-widest text-slate-500">Navigation</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#bio" className="hover:text-white transition-colors">Biography</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">Flight Plan</a></li>
              <li><a href="#vision" className="hover:text-white transition-colors">Vision</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 uppercase text-sm tracking-widest text-slate-500">Action</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Join Campaign</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Press</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2025 Campaign for {CANDIDATE_NAME}. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
