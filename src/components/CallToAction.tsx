import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function CallToAction() {
  const { lang } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-earth-800/80 backdrop-blur-sm">
      <div className="absolute inset-0 bg-earth-900/40"></div>
      
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-ochre-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-earth-600/50 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            {lang === 'en' ? 'Ready to Make a Difference?' : 'Uko Tayari Kuleta Mabadiliko?'}
          </h2>
          <p className="text-xl text-stone-200 mb-10 leading-relaxed font-light">
            {lang === 'en' 
              ? 'Whether you want to volunteer your time, donate, or partner with us, your contribution helps us empower more lives across Kenya.'
              : 'Iwe unataka kujitolea muda wako, kuchangia, au kushirikiana nasi, mchango wako unatusaidia kuwezesha maisha zaidi kote nchini Kenya.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-ochre-500 text-earth-900 font-bold hover:bg-ochre-400 transition-colors text-lg"
            >
              {lang === 'en' ? 'Get Involved Now' : 'Shiriki Sasa'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:Azmayetucbo@gmail.com" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-colors text-lg"
            >
              {lang === 'en' ? 'Contact Us' : 'Wasiliana Nasi'}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
