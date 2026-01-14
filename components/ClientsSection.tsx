import React from 'react';
import { CLIENTS } from '../constants';
import { Quote } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  return (
    <section id="clients" className="py-32 relative overflow-hidden bg-white">
       {/* Background - Light Liquid Style */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Subtle background texture for depth */}
         <div className="absolute top-0 right-0 w-3/4 h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop')] bg-cover bg-center opacity-5 grayscale"></div>
         {/* Fade to white to ensure text readability */}
         <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20">
           <div>
             <h3 className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-4 font-bold">Confianza</h3>
             <h2 className="text-4xl md:text-5xl font-serif text-arch-dark">Nuestros Aliados</h2>
           </div>
           <p className="text-gray-500 max-w-md text-left md:text-right mt-6 md:mt-0 font-light leading-relaxed">
             Colaboramos con visionarios que entienden el valor del diseño excepcional y la arquitectura atemporal.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Logos Grid - Light Glass Blocks */}
             <div className="grid grid-cols-2 gap-6">
              {CLIENTS.map((client) => (
                  <div key={`logo-${client.id}`} className="bg-white/60 backdrop-blur-sm border border-gray-100 h-40 flex items-center justify-center p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group cursor-default">
                      <div className="text-center">
                        {/* Placeholder for logo - utilizing typography as logo for minimalism */}
                        <span className="font-serif text-xl md:text-2xl text-gray-400 group-hover:text-arch-dark transition-colors duration-300 block">
                            {client.name.split(' ')[0]}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-arch-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 block">
                           Partner
                        </span>
                      </div>
                  </div>
              ))}
             </div>

             {/* Testimonial - Large Light Glass Card */}
             <div className="bg-white/80 backdrop-blur-xl border border-gray-100 p-10 md:p-14 rounded-[3rem] relative mt-10 lg:mt-0 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                <div className="absolute -top-6 -right-6 text-gray-100 select-none">
                    <Quote size={120} />
                </div>
                
                <Quote className="text-arch-accent w-8 h-8 mb-8 relative z-10" />
                
                <p className="text-2xl md:text-3xl font-serif italic text-arch-dark mb-10 leading-relaxed relative z-10">
                  "{CLIENTS[0].testimonial}"
                </p>
                
                <div className="flex items-center space-x-4 relative z-10">
                    <div className="w-12 h-12 rounded-full border border-gray-100 p-[2px] bg-white shadow-sm">
                        <div className="w-full h-full rounded-full bg-gray-50 overflow-hidden flex items-center justify-center text-gray-400 font-serif text-sm">
                           {CLIENTS[0].name.charAt(0)}
                        </div>
                    </div>
                    <div>
                         <p className="text-sm font-bold text-arch-dark tracking-wider uppercase">
                          {CLIENTS[0].name}
                        </p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">
                          Cliente Destacado
                        </p>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};