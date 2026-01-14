import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-white py-4 border-b border-gray-100' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className={`text-xl font-serif font-bold tracking-tight z-50 transition-colors ${scrolled || isOpen ? 'text-arch-dark' : 'text-white'}`}>
            DQ Visualization
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className={`text-xs font-medium tracking-widest hover:text-arch-accent transition-colors ${
                  scrolled ? 'text-arch-dark' : 'text-white'
                }`}
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-arch-dark" /> : <Menu size={24} className={scrolled ? 'text-arch-dark' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {NAV_LINKS.map((link) => (
          <a 
            key={link.label}
            href={link.href}
            className="text-arch-dark text-2xl font-serif hover:text-arch-accent transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
};