import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, ArrowDown } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Dark Glass Background Concept */}
      <div className="absolute inset-0 bg-[#111111]">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/90 to-[#111111]/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-[#c5a059] text-xs tracking-[0.3em] uppercase mb-4 font-bold">Contacto</h3>
            <h2 className="text-5xl md:text-6xl font-serif mb-8">Creemos algo <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Atmosférico</span></h2>
            <p className="text-white/60 font-light text-lg mb-12 max-w-md leading-relaxed">
              La arquitectura comienza con una conversación. Cuéntanos tu visión y nosotros le daremos forma y materialidad.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 glass-panel-dark flex items-center justify-center rounded-2xl text-[#c5a059] group-hover:scale-110 transition-transform duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-white/40 tracking-widest mb-1">Email</p>
                  <p className="text-xl font-serif">contacto@archivision.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 glass-panel-dark flex items-center justify-center rounded-2xl text-[#c5a059] group-hover:scale-110 transition-transform duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-white/40 tracking-widest mb-1">Teléfono</p>
                  <p className="text-xl font-serif">+52 55 1234 5678</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 glass-panel-dark flex items-center justify-center rounded-2xl text-[#c5a059] group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-white/40 tracking-widest mb-1">Estudio</p>
                  <p className="text-xl font-serif">Florida, Estados Unidos</p>
                </div>
              </div>
            </div>
          </div>

          <form className="glass-panel-dark p-10 md:p-12 rounded-[3rem] space-y-8 border-white/5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-white/50 ml-2">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full rounded-2xl py-4 px-6 text-white custom-input placeholder-white/20"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/50 ml-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full rounded-2xl py-4 px-6 text-white custom-input placeholder-white/20"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label htmlFor="interest" className="text-xs uppercase tracking-widest text-white/50 ml-2">Interés</label>
              <div className="relative">
                <select id="interest" className="w-full rounded-2xl py-4 px-6 text-white custom-input appearance-none cursor-pointer">
                    <option className="bg-gray-900 text-white">Diseño Residencial</option>
                    <option className="bg-gray-900 text-white">Diseño Comercial</option>
                    <option className="bg-gray-900 text-white">Interiorismo</option>
                    <option className="bg-gray-900 text-white">Otro</option>
                </select>
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-white/40">
                    <ArrowDown size={16} className="rotate-0" /> 
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/50 ml-2">Mensaje</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full rounded-2xl py-4 px-6 text-white custom-input placeholder-white/20 resize-none"
                placeholder="Detalles del proyecto..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-white text-[#111111] py-4 rounded-2xl text-xs font-bold tracking-[0.2em] hover:bg-[#c5a059] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-white/10"
            >
              <span>ENVIAR MENSAJE</span>
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};