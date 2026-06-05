import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-display font-bold text-2xl text-forest-900 tracking-tight">
              Azma Yetu<span className="text-ochre-500">.</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-forest-900 font-medium transition-colors">About Us</a>
            <a href="#initiatives" className="text-gray-600 hover:text-forest-900 font-medium transition-colors">Initiatives</a>
            <a href="#impact" className="text-gray-600 hover:text-forest-900 font-medium transition-colors">Our Impact</a>
            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-full bg-forest-900 text-white font-medium hover:bg-forest-800 transition-colors shadow-sm"
            >
              Get Involved
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-forest-900 focus:outline-none"
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
          className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-lg"
        >
          <a href="#about" className="block text-gray-600 font-medium hover:text-forest-900" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          <a href="#initiatives" className="block text-gray-600 font-medium hover:text-forest-900" onClick={() => setIsMobileMenuOpen(false)}>Initiatives</a>
          <a href="#impact" className="block text-gray-600 font-medium hover:text-forest-900" onClick={() => setIsMobileMenuOpen(false)}>Our Impact</a>
          <a href="#contact" className="block text-forest-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Get Involved</a>
        </motion.div>
      )}
    </header>
  );
}
