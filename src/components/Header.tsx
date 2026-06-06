import { motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { lang, toggleLang } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Title */}
          <div className="flex-shrink-0 flex items-center z-10">
            <a href="#" className="font-display font-bold text-xl sm:text-2xl text-earth-900 tracking-tight">
              Azma Yetu<span className="text-ochre-500">.</span>
            </a>
          </div>
          
          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            {!imgError ? (
              <img 
                src="/logo/azmalogo.png" 
                alt="Azma Yetu Logo" 
                className="h-16 sm:h-20 w-auto object-contain" 
                onError={() => setImgError(true)} 
              />
            ) : (
              <div className="h-12 w-12 sm:h-16 sm:w-16 bg-ochre-100 border-2 border-dashed border-ochre-300 rounded-full flex items-center justify-center text-[10px] sm:text-xs text-ochre-700 font-medium text-center leading-tight">
                Logo
              </div>
            )}
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-earth-700 hover:text-earth-900 font-medium transition-colors">{lang === 'en' ? 'About Us' : 'Kutuhusu'}</a>
            <a href="#initiatives" className="text-earth-700 hover:text-earth-900 font-medium transition-colors">{lang === 'en' ? 'Initiatives' : 'Mipango'}</a>
            <a href="#impact" className="text-earth-700 hover:text-earth-900 font-medium transition-colors">{lang === 'en' ? 'Our Impact' : 'Athari Zetu'}</a>
            
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 text-earth-800 hover:text-ochre-600 font-medium transition-colors"
              title="Toggle Language"
            >
              <Globe className="h-5 w-5" />
              <span>{lang === 'en' ? 'SW' : 'EN'}</span>
            </button>

            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-full bg-earth-900 text-white font-medium hover:bg-earth-800 transition-colors shadow-sm"
            >
              {lang === 'en' ? 'Get Involved' : 'Shiriki'}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleLang}
              className="flex items-center text-earth-800 hover:text-ochre-600 font-medium transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-sm">{lang === 'en' ? 'SW' : 'EN'}</span>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-earth-700 hover:text-earth-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-earth-100 px-4 pt-2 pb-6 space-y-4 shadow-lg"
        >
          <a href="#about" className="block text-earth-700 font-medium hover:text-earth-900" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'en' ? 'About Us' : 'Kutuhusu'}</a>
          <a href="#initiatives" className="block text-earth-700 font-medium hover:text-earth-900" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'en' ? 'Initiatives' : 'Mipango'}</a>
          <a href="#impact" className="block text-earth-700 font-medium hover:text-earth-900" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'en' ? 'Our Impact' : 'Athari Zetu'}</a>
          <a href="#contact" className="block text-earth-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'en' ? 'Get Involved' : 'Shiriki'}</a>
        </motion.div>
      )}
    </header>
  );
}
