import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
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

        {/* Grid de Proyectos usando clases de styles.css */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-card">
              
              {/* Imagen con Zoom CSS */}
              <div className="project-image-wrapper">
                <div className="project-overlay" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="project-image"
                />
              </div>
              
              {/* Contenido de Texto con Hover CSS */}
              <div className="overflow-hidden">
                <span className="project-meta">
                  {project.category} — {project.year}
                </span>
                
                <div className="project-title-wrapper">
                  <h4 className="project-title">
                    {project.title}
                  </h4>
                  <ArrowRight size={18} className="project-arrow" />
                </div>
                
                <p className="project-description">
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