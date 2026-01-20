
import React from 'react';
import { CANDIDATE_NAME } from '../constants';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'bio', label: 'Biography' },
    { id: 'program', label: 'Campaign Program' },
    { id: 'vision', label: 'Our Vision' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none">
      <div className="max-w-6xl mx-auto glass-dark rounded-full px-6 py-3 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <span className="font-aviation text-lg font-bold tracking-wider hidden sm:block">
            {CANDIDATE_NAME.split(' ')[1].toUpperCase()} 2025
          </span>
        </div>
        
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                activeSection === item.id ? 'text-blue-500' : 'text-slate-300'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-900/40 hidden md:block">
            Support Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
