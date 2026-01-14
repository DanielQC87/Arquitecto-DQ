import React, { useState } from 'react';
import { PenTool, Layers, LayoutTemplate, ArrowRight, X, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    icon: <LayoutTemplate size={32} strokeWidth={1} />,
    title: "Arquitectura",
    description: "Desarrollamos proyectos desde la conceptualización hasta el detalle constructivo, priorizando la función y la poética del espacio.",
    longDescription: "Nuestra práctica arquitectónica se fundamenta en la honestidad material y la claridad estructural. No buscamos imponer formas, sino descubrir la solución más elegante y lógica para cada contexto. Cada línea trazada tiene un propósito.",
    features: [
      "Diseño Residencial de Alta Gama",
      "Edificios Comerciales y Corporativos",
      "Arquitectura Sostenible y Bioclimática",
      "Modelado BIM y Visualización 3D",
      "Supervisión Arquitectónica de Obra"
    ]
  },
  {
    id: 2,
    icon: <Layers size={32} strokeWidth={1} />,
    title: "Interiorismo",
    description: "Creamos atmósferas cohesivas mediante una selección rigurosa de materiales, iluminación y mobiliario que dialogan con la arquitectura.",
    longDescription: "El interior es la extensión táctil de la arquitectura. Nos enfocamos en la experiencia sensorial del habitante, curando texturas, controlando la luz y diseñando mobiliario a medida que complementa la narrativa espacial del edificio.",
    features: [
      "Diseño de Mobiliario a Medida (Millwork)",
      "Curaduría de Arte y Accesorios",
      "Diseño de Iluminación Escénica",
      "Selección de Materiales y Acabados",
      "Renovación y Reformas Integrales"
    ]
  },
  {
    id: 3,
    icon: <PenTool size={32} strokeWidth={1} />,
    title: "Master Planning",
    description: "Estrategias de diseño urbano y paisajismo que integran los proyectos en su contexto cultural y geográfico.",
    longDescription: "Entendemos el edificio no como un objeto aislado, sino como parte de un tejido vivo. Nuestros planes maestros analizan flujos, topografía y cultura para crear intervenciones que regeneran y activan su entorno.",
    features: [
      "Análisis de Factibilidad Urbana",
      "Diseño de Paisaje y Hardscape",
      "Desarrollo de Usos Mixtos",
      "Integración de Espacio Público",
      "Estrategias de Regeneración Urbana"
    ]
  }
];

export const ServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<number | null>(null);

  const activeService = SERVICES.find(s => s.id === activeServiceId);

  return (
    <section id="services" className="py-32 bg-white border-b border-gray-100 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
            <h3 className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-4">Especialización</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111111] leading-tight max-w-2xl">
              Enfoque multidisciplinario para espacios complejos.
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SERVICES.map((service, index) => (
            <button 
              key={service.id} 
              onClick={() => setActiveServiceId(service.id)}
              className="group relative border-t border-gray-200 pt-10 hover:border-black transition-colors duration-500 text-left w-full focus:outline-none"
            >
              <div className="absolute top-0 right-0 text-gray-200 text-6xl font-serif opacity-30 group-hover:opacity-10 group-hover:text-black transition-all duration-500">
                0{index + 1}
              </div>
              
              <div className="mb-8 text-gray-400 group-hover:text-[#c5a059] transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-serif text-[#111111] mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-500 font-light text-sm leading-relaxed mb-8 max-w-xs">
                {service.description}
              </p>

              <div className="flex items-center text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-[#111111]">
                <span className="mr-2">Detalles</span>
                <ArrowRight size={14} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Minimalist Modal Overlay */}
      {activeService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setActiveServiceId(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-4xl shadow-2xl overflow-hidden fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-5">
              
              {/* Decorative Side */}
              <div className="hidden md:flex md:col-span-2 bg-[#f9f9f9] items-center justify-center p-12 border-r border-gray-100">
                <div className="text-[#c5a059] opacity-80 scale-150 transform">
                  {activeService.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="col-span-1 md:col-span-3 p-10 md:p-12 relative">
                <button 
                  onClick={() => setActiveServiceId(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
                >
                  <X size={24} />
                </button>

                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#c5a059] mb-4">
                  Servicio 0{activeService.id}
                </h4>
                
                <h3 className="text-3xl md:text-4xl font-serif text-[#111111] mb-6">
                  {activeService.title}
                </h3>
                
                <p className="text-gray-600 font-light leading-relaxed mb-10 text-lg">
                  {activeService.longDescription}
                </p>

                <div className="space-y-4">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-[#111111] mb-4 border-b border-gray-100 pb-2">
                    Capacidades
                  </h5>
                  <ul className="grid grid-cols-1 gap-3">
                    {activeService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle2 size={16} className="text-[#c5a059] mr-3 flex-shrink-0" strokeWidth={1.5} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 pt-6 border-t border-gray-100 flex justify-end">
                   <button 
                      onClick={() => setActiveServiceId(null)}
                      className="text-xs font-bold tracking-widest uppercase text-[#111111] hover:text-[#c5a059] transition-colors"
                   >
                     Cerrar
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};