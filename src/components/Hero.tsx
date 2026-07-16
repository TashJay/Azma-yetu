import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useRef } from 'react';

const words = ['Empowering', 'Communities.', 'Changing Lives.'];

const heroStats = [
  { value: '5', label: 'Focus Areas' },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY   = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-earth-900">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src="/src/assets/images/kenyan_community_hero_1780695687550.png"
          alt="Kenyan community members working together"
          className="w-full h-full object-cover opacity-35"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-earth-900/50 via-earth-900/30 to-earth-900/95" />

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-ochre-500/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-forest-700/10 blur-3xl pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Top ochre line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-ochre-500" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-ochre-500/20 border border-ochre-500/40 rounded-full px-4 py-1.5 mb-10"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-ochre-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-ochre-300 text-sm font-medium tracking-wide uppercase">
            Azma Yetu Community Based Organization
          </span>
        </motion.div>

        {/* Staggered headline */}
        <div className="mb-8">
          {words.map((word, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className={`block font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight ${
                  i === 1 ? 'text-ochre-400' : 'text-white'
                }`}
              >
                {word}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-white/65 text-base md:text-lg max-w-2xl leading-relaxed mb-10"
        >
          Azma Yetu uplifts boys, women, widows, and youth — building resilient, self-reliant communities rooted in dignity, purpose, and hope across Kenya. Every program we run is a direct investment in the people most often left behind.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-wrap gap-4 mb-14"
        >
          <motion.a
            href="#our-work"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-ochre-500 text-earth-900 font-bold rounded-full shadow-lg shadow-ochre-500/30 transition-colors hover:bg-ochre-400"
          >
            Our Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Get Involved
          </motion.a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10"
        >
          {heroStats.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && <span className="hidden sm:block w-px h-8 bg-white/15" />}
              <div>
                <p className="text-ochre-400 font-display font-bold text-lg leading-none">{s.value}</p>
                <p className="text-white/35 text-xs uppercase tracking-wider mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
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
