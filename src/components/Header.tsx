import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about',    label: 'About'      },
  { href: '#our-work', label: 'Our Work'   },
  { href: '#founders', label: 'Leadership' },
  { href: '#contact',  label: 'Contact'    },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-earth-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            {!imgError ? (
              <img
                src="/logo/azmalogo.png"
                alt="Azma Yetu Logo"
                className="h-12 w-auto object-contain drop-shadow-sm"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="h-10 w-10 bg-ochre-100 border-2 border-dashed border-ochre-300 rounded-full flex items-center justify-center text-xs text-ochre-700 font-medium">
                AY
              </div>
            )}
            <span className="font-display font-bold text-base tracking-tight flex items-center whitespace-pre">
              <span className={scrolled ? 'text-earth-900' : 'text-white'}>AZMA </span>
              <span className={scrolled ? 'text-ochre-600' : 'text-ochre-400'}>YETU </span>
              <span className={scrolled ? 'text-earth-900' : 'text-white'}>CBO</span>
              <span className="text-ochre-500">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  scrolled
                    ? 'text-earth-700 hover:text-earth-900'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              className="px-6 py-2.5 rounded-full bg-ochre-500 text-earth-900 font-bold hover:bg-ochre-400 transition-all duration-200 shadow-md shadow-ochre-500/20 hover:-translate-y-0.5"
            >
              Donate
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={scrolled ? 'text-earth-700' : 'text-white'}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-earth-100 shadow-lg"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-earth-700 hover:text-earth-900 hover:bg-earth-50 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#donate"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center px-6 py-3 rounded-full bg-ochre-500 text-earth-900 font-bold hover:bg-ochre-400 transition-colors"
                >
                  Donate
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
