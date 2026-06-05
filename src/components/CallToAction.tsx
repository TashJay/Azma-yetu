import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden bg-forest-800">
      <div className="absolute inset-0 bg-forest-900/40"></div>
      
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-ochre-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-forest-600/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-emerald-50/90 mb-10 leading-relaxed font-light">
            Whether you want to volunteer your time, donate, or partner with us, your contribution helps us empower more lives across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-ochre-500 text-forest-900 font-bold hover:bg-ochre-400 transition-colors text-lg"
            >
              Get Involved Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="mailto:Azmayetucbo@gmail.com" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-colors text-lg"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
