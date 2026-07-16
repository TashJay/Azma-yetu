import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-earth-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/kenyan_community_hero_1780695687550.png"
          alt="Community"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900/90" />
      </div>

      {/* Decorative ochre line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-ochre-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-ochre-500/20 border border-ochre-500/40 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-ochre-400 animate-pulse" />
            <span className="text-ochre-300 text-sm font-medium tracking-wide uppercase">
              {lang === 'en' ? 'Azma Yetu Community Based Organization' : 'Shirika la Jamii la Azma Yetu'}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
          >
            {lang === 'en' ? (
              <>
                Empowering<br />
                <span className="text-ochre-400">Communities.</span><br />
                Changing Lives.
              </>
            ) : (
              <>
                Kuwawezesha<br />
                <span className="text-ochre-400">Jamii.</span><br />
                Kubadilisha Maisha.
              </>
            )}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-8"
          >
            {lang === 'en'
              ? 'Azma Yetu uplifts boys, women, widows, and youth — building resilient communities free from drug abuse across Kenya.'
              : 'Azma Yetu inainua wavulana, wanawake, wajane, na vijana — ikijenga jamii imara zisizo na dawa za kulevya Kenya nzima.'}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#our-work"
              className="px-8 py-4 bg-ochre-500 hover:bg-ochre-400 text-earth-900 font-bold rounded-full transition-all duration-200 shadow-lg shadow-ochre-500/30 hover:shadow-ochre-400/40 hover:-translate-y-0.5"
            >
              {lang === 'en' ? 'Our Work' : 'Kazi Yetu'}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              {lang === 'en' ? 'Get Involved' : 'Shiriki Nasi'}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs uppercase tracking-widest">
          {lang === 'en' ? 'Scroll' : 'Sogeza'}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-ochre-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
