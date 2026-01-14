import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ClientsSection } from './components/ClientsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-[#111111] bg-white selection:bg-[#c5a059] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;