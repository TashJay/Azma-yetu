import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const credentials = [
  'Communications & PR Expert',
  'Board Member — INVEST in Kenya',
  'Community Development Advocate',
];

const bio = [
  'With a strong background in Communication, Research, and Public Relations, Khadija brings a wealth of expertise and a deeply personal commitment to the work of Azma Yetu CBO.',
  'Before founding Azma Yetu, she spent years working at the intersection of media, civic engagement, and community development — building the relationships and understanding that now shape every program the organisation runs.',
  'She currently serves on the Board of Directors for INVEST in Kenya, demonstrating her standing among Kenya\'s civil society leadership and her commitment to long-term national development.',
  'Her true passion lies in building resilient, empowered communities from the ground up — and in proving that the most powerful force for change is a community that believes in itself.',
];

export function Founders() {
  return (
    <section id="founders" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background circles */}
      <motion.div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-ochre-500/5 pointer-events-none"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-earth-900/4 pointer-events-none"
        animate={{ scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-ochre-100 text-ochre-700 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Leadership
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4 tracking-tight">
            Meet Our Founder
          </h2>
          <motion.div
            className="w-16 h-1 bg-ochre-500 mx-auto rounded-full"
            initial={{ scaleX: 0, originX: 0.5 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-earth-50 rounded-3xl p-8 md:p-12 shadow-sm border border-earth-100 flex flex-col md:flex-row items-center gap-10"
          >
            {/* Photo */}
            <motion.div
              className="flex-shrink-0 relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-ochre-500 rounded-full blur-2xl opacity-20 -z-10"
                animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.28, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ translateX: 16, translateY: 16 }}
              />
              <img
                src="/logo/Khadija.jpg"
                alt="Khadija Mustafa — Founder and Director of Azma Yetu CBO"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=800&auto=format&fit=crop';
                }}
              />
            </motion.div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <motion.div
                animate={{ rotate: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block mb-4"
              >
                <Quote className="w-10 h-10 text-ochre-300 opacity-60 mx-auto md:mx-0" />
              </motion.div>

              <h3 className="font-display text-3xl font-bold text-earth-900 mb-1">Khadija Mustafa</h3>
              <p className="text-ochre-600 font-semibold mb-5">Founder & Director</p>

              {/* Credential tags */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                {credentials.map((c, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
                    className="bg-white border border-earth-200 text-earth-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm"
                  >
                    {c}
                  </motion.span>
                ))}
              </div>

              <div className="space-y-4 text-earth-600 leading-relaxed text-base md:text-lg">
                {bio.map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className={i === bio.length - 1 ? 'font-medium text-earth-800' : ''}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
