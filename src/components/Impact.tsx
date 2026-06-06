import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Counter } from './Counter';

export function Impact() {
  const { lang } = useLanguage();

  const stats = [
    { value: 15, format: (v: number) => `${Math.round(v)}+`, label: lang === 'en' ? 'Communities Reached' : 'Jamii Zilizofikiwa' },
    { value: 5000, format: (v: number) => `${Math.round(v).toLocaleString()}+`, label: lang === 'en' ? 'Trees Planted' : 'Miti Iliyopandwa' },
    { value: 10000, format: (v: number) => `${Math.round(v).toLocaleString()}+`, label: lang === 'en' ? 'Meals Distributed' : 'Milo Iliyotolewa' },
    { value: 100, format: (v: number) => `${Math.round(v)}+`, label: lang === 'en' ? 'Empowered Local Youth' : 'Vijana Waliowezeshwa' }
  ];

  return (
    <section id="impact" className="py-24 bg-white/40 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#8D6E6333_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none"></div>
      {/* Subtle organic background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-earth-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-ochre-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-earth-600 font-semibold tracking-wide uppercase text-sm mb-3">
            {lang === 'en' ? 'Our Impact' : 'Athari Zetu'}
          </h2>
          <h3 className="font-display text-4xl font-bold text-earth-900 mb-6">
            {lang === 'en' ? 'Numbers That Matter' : 'Nambari Zenye Maana'}
          </h3>
          <p className="text-lg text-earth-700/80">
            {lang === 'en' 
              ? 'Behind every number is a story of transformation, hope, and community resilience in Kenya.'
              : 'Nyuma ya kila nambari kuna hadithi ya mabadiliko, matumaini, na ustahimilivu wa jamii nchini Kenya.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              className="text-center p-6 rounded-3xl bg-earth-50/30 border border-earth-100 hover:bg-earth-50 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-earth-800 mb-3">
                <Counter value={stat.value} format={stat.format} />
              </div>
              <div className="text-earth-700/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
