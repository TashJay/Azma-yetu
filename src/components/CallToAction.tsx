import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
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
          <p className="text-earth-800/60 text-sm font-semibold uppercase tracking-widest mb-4">
            The work continues
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-6 leading-tight">
            The change Kenya needs is already inside its communities.
          </h2>
          <p className="text-earth-800/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Azma Yetu exists to make space for it. Join us as a volunteer, partner, or donor — and help build something that lasts long after the programs end.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-earth-900 text-white font-bold rounded-full hover:bg-earth-800 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
            >
              Get Involved
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#donate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/30 text-earth-900 font-bold rounded-full border-2 border-earth-900/20 hover:bg-white/50 transition-all duration-200 hover:-translate-y-0.5"
            >
              Donate Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
