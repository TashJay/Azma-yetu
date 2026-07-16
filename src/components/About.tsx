import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-36 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-ochre-500/10 rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-forest-900/10 rounded-3xl -z-10" />
            <img
              src="/src/assets/images/kenyan_children_1780696307562.png"
              alt="Kenyan community"
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-5 left-6 bg-earth-900 text-white rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-ochre-400 font-display font-bold text-2xl">Azma Yetu</p>
              <p className="text-white/60 text-sm">{lang === 'en' ? 'Our Resolve' : 'Azma Yetu'}</p>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="inline-block bg-ochre-100 text-ochre-700 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              {lang === 'en' ? 'Who We Are' : 'Sisi Ni Nani'}
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 leading-tight mb-6">
              {lang === 'en'
                ? 'Built from the grassroots, for the grassroots.'
                : 'Imejengwa kutoka chini, kwa ajili ya chini.'}
            </h2>

            <div className="w-16 h-1 bg-ochre-500 rounded-full mb-8" />

            <div className="space-y-5 text-earth-700 text-lg leading-relaxed">
              <p>
                {lang === 'en'
                  ? "Azma Yetu — meaning 'Our Resolve' — is a Kenyan community-based organization committed to transforming lives from the ground up. We work at the intersection of empowerment, healing, and resilience."
                  : "Azma Yetu — maana yake 'Azma Yetu' — ni shirika la jamii la Kenya linalojitahidi kubadilisha maisha kutoka chini. Tunafanya kazi mahali ambapo nguvu, uponyaji, na uthabiti vinakutana."}
              </p>
              <p>
                {lang === 'en'
                  ? "From mentoring young boys to standing beside widows and widowers, from uplifting women to fighting drug abuse — everything we do is rooted in community, dignity, and hope."
                  : "Kuanzia kusaidia wavulana wadogo hadi kusimama karibu na wajane, kuinua wanawake hadi kupambana na dawa za kulevya — kila tunachofanya kimejengwa juu ya jamii, heshima, na matumaini."}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { label: lang === 'en' ? 'Nairobi, Kenya' : 'Nairobi, Kenya', sub: lang === 'en' ? 'Based in' : 'Makao makuu' },
                { label: lang === 'en' ? '5 Pillars' : 'Nguzo 5', sub: lang === 'en' ? 'of focus' : 'za msingi' },
                { label: lang === 'en' ? 'Bilingual' : 'Lugha mbili', sub: lang === 'en' ? 'English & Swahili' : 'Kiingereza & Kiswahili' },
                { label: lang === 'en' ? '100%' : '100%', sub: lang === 'en' ? 'Grassroots driven' : 'Imejengwa na jamii' },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-earth-100 rounded-2xl p-4 shadow-sm">
                  <p className="font-display font-bold text-earth-900 text-lg">{item.label}</p>
                  <p className="text-earth-500 text-sm">{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
