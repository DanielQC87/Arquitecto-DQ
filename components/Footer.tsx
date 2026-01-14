import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
           <h2 className="text-xl font-serif font-bold tracking-tighter">DQ Visualization</h2>
           <p className="text-gray-500 text-xs mt-1">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Instagram</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Behance</a>
        </div>
      </div>
    </footer>
  );
};