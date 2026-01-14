import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-100 pb-8">
          <div>
            <h3 className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-4">Portafolio</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-arch-dark">Obras Recientes</h2>
          </div>
          <a href="#" className="hidden md:flex items-center text-arch-dark hover:text-arch-accent transition-colors mt-6 md:mt-0 group text-xs font-bold tracking-widest uppercase">
            <span className="mr-2">Ver archivo completo</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-gray-100">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                  {project.category} — {project.year}
                </span>
                <h4 className="text-2xl font-serif text-arch-dark mb-1 group-hover:text-arch-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-500 text-sm font-light mt-2 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center md:hidden">
           <a href="#" className="inline-block border-b border-black pb-1 text-xs tracking-widest uppercase font-bold">
            Ver Todo
          </a>
        </div>
      </div>
    </section>
  );
};