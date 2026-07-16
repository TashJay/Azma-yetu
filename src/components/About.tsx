import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

const statVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const statItem = {
  hidden: { opacity: 0, scale: 0.88, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function About() {
  const { lang } = useLanguage();

  const stats = [
    { label: 'Nairobi, Kenya', sub: lang === 'en' ? 'Based in' : 'Makao makuu' },
    { label: lang === 'en' ? '5 Pillars' : 'Nguzo 5', sub: lang === 'en' ? 'of focus' : 'za msingi' },
    { label: lang === 'en' ? 'Bilingual' : 'Lugha Mbili', sub: lang === 'en' ? 'EN & Swahili' : 'Kiingereza & Kiswahili' },
    { label: '100%', sub: lang === 'en' ? 'Grassroots driven' : 'Imejengwa na jamii' },
  ];

  return (
    <section id="about" className="py-24 md:py-36 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              className="absolute -top-6 -left-6 w-48 h-48 bg-ochre-500/10 rounded-3xl -z-10"
              animate={{ rotate: [0, 3, 0, -3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-forest-900/10 rounded-3xl -z-10" />
            <motion.img
              src="/src/assets/images/kenyan_children_1780696307562.png"
              alt="Kenyan children supported by Azma Yetu CBO"
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-5 left-6 bg-earth-900 text-white rounded-2xl px-6 py-4 shadow-xl"
            >
              <p className="text-ochre-400 font-display font-bold text-2xl">Azma Yetu</p>
              <p className="text-white/50 text-sm">{lang === 'en' ? 'Our Resolve' : 'Azma Yetu'}</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-ochre-100 text-ochre-700 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            >
              {lang === 'en' ? 'Who We Are' : 'Sisi Ni Nani'}
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 leading-tight mb-6">
              {lang === 'en'
                ? 'Built from the grassroots, for the grassroots.'
                : 'Imejengwa kutoka chini, kwa ajili ya chini.'}
            </h2>

            <motion.div
              className="w-16 h-1 bg-ochre-500 rounded-full mb-8"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />

            <div className="space-y-5 text-earth-600 text-lg leading-relaxed mb-10">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {lang === 'en'
                  ? "Azma Yetu — meaning 'Our Resolve' — is a Kenyan community-based organization committed to transforming lives from the ground up. We work at the intersection of empowerment, healing, and resilience."
                  : "Azma Yetu — maana yake 'Azma Yetu' — ni shirika la jamii la Kenya linalojitahidi kubadilisha maisha kutoka chini. Tunafanya kazi mahali ambapo nguvu, uponyaji, na uthabiti vinakutana."}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                {lang === 'en'
                  ? 'From mentoring young boys to standing beside widows and widowers, from uplifting women to fighting drug abuse — everything we do is rooted in community, dignity, and hope.'
                  : 'Kuanzia kusaidia wavulana wadogo hadi kusimama karibu na wajane, kuinua wanawake hadi kupambana na dawa za kulevya — kila tunachofanya kimejengwa juu ya jamii, heshima, na matumaini.'}
              </motion.p>
            </div>

            {/* Stats grid */}
            <motion.div
              variants={statVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  variants={statItem}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  className="bg-white border border-earth-100 rounded-2xl p-4 shadow-sm cursor-default"
                >
                  <p className="font-display font-bold text-earth-900 text-lg">{s.label}</p>
                  <p className="text-earth-400 text-sm">{s.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
