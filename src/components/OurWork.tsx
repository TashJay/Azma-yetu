import { motion } from 'motion/react';
import { GraduationCap, Sparkles, Heart, Users, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const pillars = [
  {
    num: '01',
    icon: GraduationCap,
    iconBg: 'bg-sky-500/15 text-sky-300 border-sky-400/20',
    accent: 'from-sky-500/20 to-transparent',
    bar: 'bg-sky-400',
    en: {
      title: 'Boy Child Empowerment',
      sub: 'Uwezeshaji wa Mtoto wa Kiume',
      desc: "We mentor young boys in leadership, positive masculinity, and educational excellence — shaping confident, purposeful men for tomorrow's Kenya.",
    },
    sw: {
      title: 'Uwezeshaji wa Mtoto wa Kiume',
      sub: 'Boy Child Empowerment',
      desc: 'Tunawaelekeza wavulana wadogo katika uongozi, uanaume chanya, na ubora wa kielimu — tunaunda wanaume wenye ujasiri na kusudi kwa Kenya ya kesho.',
    },
  },
  {
    num: '02',
    icon: Sparkles,
    iconBg: 'bg-rose-500/15 text-rose-300 border-rose-400/20',
    accent: 'from-rose-500/20 to-transparent',
    bar: 'bg-rose-400',
    en: {
      title: 'Women Empowerment',
      sub: 'Uwezeshaji wa Wanawake',
      desc: 'Through skills training, economic programs, and advocacy, we unlock the leadership potential in every woman — building independence and dignity.',
    },
    sw: {
      title: 'Uwezeshaji wa Wanawake',
      sub: 'Women Empowerment',
      desc: 'Kupitia mafunzo ya ujuzi, programu za kiuchumi, na utetezi, tunafungua uwezo wa uongozi kwa kila mwanamke — kujenga uhuru na heshima.',
    },
  },
  {
    num: '03',
    icon: Heart,
    iconBg: 'bg-amber-500/15 text-amber-300 border-amber-400/20',
    accent: 'from-amber-500/20 to-transparent',
    bar: 'bg-amber-400',
    en: {
      title: 'Widows & Widowers Support',
      sub: 'Msaada kwa Wajane',
      desc: 'Grief should not mean isolation. We walk alongside those who have lost spouses — offering psychosocial care, livelihood support, and community belonging.',
    },
    sw: {
      title: 'Msaada kwa Wajane',
      sub: 'Widows & Widowers Support',
      desc: 'Huzuni haipaswi kumaanisha kutengwa. Tunasimama karibu na wale waliopoteza wenza wao — tukitoa huduma ya kisaikolojia na ushirikiano wa jamii.',
    },
  },
  {
    num: '04',
    icon: Users,
    iconBg: 'bg-forest-600/20 text-forest-400 border-forest-600/20',
    accent: 'from-forest-600/20 to-transparent',
    bar: 'bg-forest-600',
    en: {
      title: 'Community Resilience',
      sub: 'Uthabiti wa Jamii',
      desc: "Resilient communities don't happen by accident. We build social cohesion through grassroots programs that equip communities to withstand and recover from crises.",
    },
    sw: {
      title: 'Uthabiti wa Jamii',
      sub: 'Community Resilience',
      desc: 'Jamii imara haijengwi kwa bahati mbaya. Tunajenga mshikamano wa kijamii kupitia programu za msingi zinazowapa jamii uwezo wa kuhimili na kupona.',
    },
  },
  {
    num: '05',
    icon: ShieldCheck,
    iconBg: 'bg-ochre-500/15 text-ochre-300 border-ochre-400/20',
    accent: 'from-ochre-500/20 to-transparent',
    bar: 'bg-ochre-400',
    en: {
      title: 'Fighting Drug Abuse',
      sub: 'Kupambana na Dawa za Kulevya',
      desc: 'We stand against drug abuse through prevention education, youth outreach, and rehabilitation pathways — reclaiming futures one life at a time.',
    },
    sw: {
      title: 'Kupambana na Dawa za Kulevya',
      sub: 'Fighting Drug Abuse',
      desc: 'Tunasimama dhidi ya dawa za kulevya kupitia elimu ya kuzuia, ushirikiano wa vijana, na njia za ukarabati — tukidai tena mustakabali maisha moja kwa wakati.',
    },
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function OurWork() {
  const { lang } = useLanguage();

  return (
    <section id="our-work" className="py-24 md:py-36 bg-earth-900 relative overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#d97706 1px, transparent 1px), linear-gradient(90deg, #d97706 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-ochre-500/20 text-ochre-400 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-ochre-500/30"
            >
              {lang === 'en' ? 'Our Focus Areas' : 'Maeneo Yetu ya Kuzingatia'}
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              {lang === 'en' ? 'Five pillars, one mission.' : 'Nguzo tano, azma moja.'}
            </h2>
            <p className="text-white/45 text-lg">
              {lang === 'en'
                ? 'Every program we run connects back to one of these five areas of community impact.'
                : 'Kila programu tunayoendesha inaunganika na moja ya maeneo haya matano ya athari za jamii.'}
            </p>
          </motion.div>
        </div>

        {/* Top 2 large cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-5 mb-5"
        >
          {pillars.slice(0, 2).map((pillar) => {
            const Icon = pillar.icon;
            const content = lang === 'en' ? pillar.en : pillar.sw;
            return (
              <motion.div
                key={pillar.num}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-white/5 hover:bg-white/9 border border-white/10 hover:border-white/25 rounded-3xl p-8 md:p-10 transition-colors duration-300 overflow-hidden cursor-default"
              >
                {/* accent glow corner */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${pillar.accent} rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-13 h-13 w-12 h-12 rounded-2xl border ${pillar.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-display text-5xl font-bold text-white/5 leading-none select-none">{pillar.num}</span>
                  </div>
                  <div className={`w-8 h-0.5 ${pillar.bar} rounded-full mb-5`} />
                  <h3 className="font-display text-2xl font-bold text-white mb-2">{content.title}</h3>
                  <p className="text-ochre-400/60 text-xs font-semibold uppercase tracking-wider mb-4">{content.sub}</p>
                  <p className="text-white/45 leading-relaxed">{content.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom 3 cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-5"
        >
          {pillars.slice(2).map((pillar) => {
            const Icon = pillar.icon;
            const content = lang === 'en' ? pillar.en : pillar.sw;
            return (
              <motion.div
                key={pillar.num}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-white/5 hover:bg-white/9 border border-white/10 hover:border-white/25 rounded-3xl p-7 transition-colors duration-300 overflow-hidden cursor-default"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${pillar.accent} rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl border ${pillar.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-display text-4xl font-bold text-white/5 leading-none select-none">{pillar.num}</span>
                  </div>
                  <div className={`w-6 h-0.5 ${pillar.bar} rounded-full mb-4`} />
                  <h3 className="font-display text-lg font-bold text-white mb-1">{content.title}</h3>
                  <p className="text-ochre-400/60 text-xs font-semibold uppercase tracking-wider mb-3">{content.sub}</p>
                  <p className="text-white/45 text-sm leading-relaxed">{content.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
