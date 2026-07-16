import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function StickyDonate() {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-5 left-4 right-4 z-50 md:hidden"
        >
          <a
            href="#donate"
            className="flex items-center justify-center gap-2 w-full py-4 bg-ochre-500 hover:bg-ochre-400 text-earth-900 font-bold rounded-2xl shadow-xl shadow-ochre-500/30 transition-all duration-200 active:scale-95"
          >
            <Heart className="w-5 h-5 fill-earth-900/20" />
            {lang === 'en' ? 'Donate via M-PESA' : 'Changia kupitia M-PESA'}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
