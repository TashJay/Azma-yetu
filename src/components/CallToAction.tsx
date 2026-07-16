import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function CallToAction() {
  const { lang } = useLanguage();

  return (
    <section className="py-24 bg-ochre-500 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-ochre-400 rounded-full opacity-40" />
      <div className="absolute -bottom-24 -left-16 w-64 h-64 bg-ochre-600 rounded-full opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-6 leading-tight">
            {lang === 'en'
              ? 'Be part of the change.'
              : 'Kuwa sehemu ya mabadiliko.'}
          </h2>
          <p className="text-earth-800/70 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            {lang === 'en'
              ? 'Whether you volunteer, partner, or donate — every action builds a stronger community.'
              : 'Iwe unajitolea, unashirikiana, au kuchangia — kila hatua inajenga jamii imara zaidi.'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-earth-900 text-white font-bold rounded-full hover:bg-earth-800 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
            >
              {lang === 'en' ? 'Get Involved' : 'Shiriki Nasi'}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#donate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/30 text-earth-900 font-bold rounded-full border-2 border-earth-900/20 hover:bg-white/50 transition-all duration-200 hover:-translate-y-0.5"
            >
              {lang === 'en' ? 'Donate Now' : 'Changia Sasa'}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
