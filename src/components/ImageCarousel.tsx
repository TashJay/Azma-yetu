import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1547471080-7fc2caa6f17f?q=80&w=2070&auto=format&fit=crop',
    alt: 'Maasai community',
    title: { en: 'Cultural Heritage', sw: 'Urithi wa Utamaduni' }
  },
  {
    url: 'https://images.unsplash.com/photo-1515091943-9d5c0ad74baf?q=80&w=2070&auto=format&fit=crop',
    alt: 'Rural Kenya landscape',
    title: { en: 'Rural Development', sw: 'Maendeleo Vijijini' }
  },
  {
    url: 'https://images.unsplash.com/photo-1494883759339-0b042055a4ee?q=80&w=2070&auto=format&fit=crop',
    alt: 'Nairobi city skyline',
    title: { en: 'Urban Integration', sw: 'Ushirikiano wa Kimiji' }
  },
  {
    url: 'https://images.unsplash.com/photo-1489445831510-ad4ccfce988f?q=80&w=2070&auto=format&fit=crop',
    alt: 'African sunset',
    title: { en: 'A Brighter Tomorrow', sw: 'Kesho Iliyo Bora' }
  }
];

export function ImageCarousel() {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Auto scroll
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-earth-50/20 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#8D6E6333_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-earth-900 mb-4">
            {lang === 'en' ? 'Our Impact in Action' : 'Athari Zetu kwa Vitendo'}
          </h2>
          <p className="text-lg text-earth-700 max-w-2xl mx-auto">
            {lang === 'en' ? 'A glimpse into the communities we partner with.' : 'Tazamo la jamii tunazoshirikiana nazo.'}
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video md:aspect-[21/9] bg-earth-200">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-transparent to-transparent flex items-end">
            <div className="p-8 md:p-12 w-full">
              <motion.h3 
                key={`text-${currentIndex}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white font-display text-2xl md:text-4xl font-bold"
              >
                {images[currentIndex].title[lang]}
              </motion.h3>
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-8 right-8 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-ochre-500 w-8' : 'bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
