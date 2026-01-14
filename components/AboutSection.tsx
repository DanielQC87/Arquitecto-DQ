import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-arch-gray">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop" 
              alt="Architectural Detail" 
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-6">El Estudio</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-arch-dark mb-10 leading-tight">
              Diseño puro. <br /> Esencia atemporal.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed mb-12">
              <p>
                En ArchiVision, esculpimos el vacío. Creemos que la arquitectura más impactante es aquella que se siente inevitable. Eliminamos lo superfluo para revelar la estructura fundamental.
              </p>
              <p>
                La luz no es solo un recurso, es nuestro material de construcción principal. Cada proyecto es un estudio de proporciones, materiales honestos y contexto.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 border-t border-gray-200 pt-10">
              <div>
                <span className="block text-5xl font-serif text-arch-dark mb-2">50+</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">Obras Maestras</span>
              </div>
              <div>
                <span className="block text-5xl font-serif text-arch-dark mb-2">12</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">Galardones</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};