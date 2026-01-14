import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop" 
          alt="Architecture Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Minimalist Content */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-white/80 text-xs tracking-[0.4em] uppercase mb-6 animate-fade-in-up">
          DQ Visualization
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-none mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Arquitectura
        </h1>
        <p className="text-white/80 text-lg md:text-xl font-light max-w-xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Donde la estructura se encuentra con la transparencia. Espacios diseñados para fluir.
        </p>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a 
            href="#projects"
            className="inline-block border border-white px-10 py-4 text-xs font-bold tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            EXPLORAR
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
         <ArrowDown size={24} strokeWidth={1} />
      </div>
    </section>
  );
};