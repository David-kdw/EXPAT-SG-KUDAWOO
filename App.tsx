
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Program from './components/Program';
import Vision from './components/Vision';
import Footer from './components/Footer';
import AICampaignAssistant from './components/AICampaignAssistant';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'bio', 'program', 'vision'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="bio" className="py-20 bg-slate-50 text-slate-900">
          <Bio />
        </section>
        
        <section id="program" className="py-20 sky-gradient text-white">
          <Program />
        </section>
        
        <section id="vision" className="py-20 bg-slate-900">
          <Vision />
        </section>
      </main>

      <Footer />
      
      {/* Floating AI Assistant */}
      <AICampaignAssistant />
    </div>
  );
};

export default App;
