import { motion } from 'motion/react';
import { GraduationCap, Sparkles, Heart, Users, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const pillars = [
  {
    icon: GraduationCap,
    color: 'bg-sky-50 text-sky-600 border-sky-100',
    accent: 'bg-sky-500',
    en: {
      title: 'Boy Child Empowerment',
      sub: 'Nguvu ya Mtoto wa Kiume',
      desc: 'We mentor young boys in leadership, positive masculinity, and educational excellence — shaping confident, purposeful men for tomorrow\'s Kenya.',
    },
    sw: {
      title: 'Uwezeshaji wa Mtoto wa Kiume',
      sub: 'Boy Child Empowerment',
      desc: 'Tunawaelekeza wavulana wadogo katika uongozi, uanaume chanya, na ubora wa kielimu — tunaunda wanaume wenye ujasiri na kusudi kwa Kenya ya kesho.',
    },
  },
  {
    icon: Sparkles,
    color: 'bg-rose-50 text-rose-500 border-rose-100',
    accent: 'bg-rose-500',
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
    icon: Heart,
    color: 'bg-amber-50 text-amber-600 border-amber-100',
    accent: 'bg-amber-500',
    en: {
      title: 'Widows & Widowers Support',
      sub: 'Msaada kwa Wajane',
      desc: 'Grief should not mean isolation. We walk alongside those who have lost spouses — offering psychosocial care, livelihood support, and community belonging.',
    },
    sw: {
      title: 'Msaada kwa Wajane',
      sub: 'Widows & Widowers Support',
      desc: 'Huzuni haipaswi kumaanisha kutengwa. Tunasimama karibu na wale waliopoteza wenza wao — tukitoa huduma ya kisaikolojia, msaada wa maisha, na ushirikiano wa jamii.',
    },
  },
  {
    icon: Users,
    color: 'bg-forest-900/5 text-forest-700 border-forest-900/10',
    accent: 'bg-forest-700',
    en: {
      title: 'Community Resilience',
      sub: 'Uthabiti wa Jamii',
      desc: 'Resilient communities don\'t happen by accident. We build social cohesion through grassroots programs that equip communities to withstand and recover from crises.',
    },
    sw: {
      title: 'Uthabiti wa Jamii',
      sub: 'Community Resilience',
      desc: 'Jamii imara haijengwi kwa bahati mbaya. Tunajenga mshikamano wa kijamii kupitia programu za msingi zinazowapa jamii uwezo wa kuhimili na kupona kutoka kwa migogoro.',
    },
  },
  {
    icon: ShieldCheck,
    color: 'bg-ochre-400/10 text-ochre-700 border-ochre-200',
    accent: 'bg-ochre-500',
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

export function OurWork() {
  const { lang } = useLanguage();

  return (
    <section id="our-work" className="py-24 md:py-36 bg-earth-900 relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#d97706 1px, transparent 1px), linear-gradient(90deg, #d97706 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-ochre-500/20 text-ochre-400 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-ochre-500/30">
              {lang === 'en' ? 'Our Focus Areas' : 'Maeneo Yetu ya Kuzingatia'}
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              {lang === 'en' ? 'Five pillars, one mission.' : 'Nguzo tano, azma moja.'}
            </h2>
            <p className="text-white/50 text-lg">
              {lang === 'en'
                ? 'Every program we run connects back to one of these five areas of community impact.'
                : 'Kila programu tunayoendesha inaunganika na moja ya maeneo haya matano ya athari za jamii.'}
            </p>
          </motion.div>
        </div>

        {/* Top 2 large cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {pillars.slice(0, 2).map((pillar, i) => {
            const Icon = pillar.icon;
            const content = lang === 'en' ? pillar.en : pillar.sw;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-3xl p-8 md:p-10 transition-all duration-300 cursor-default"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl border ${pillar.color} mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div className={`w-8 h-0.5 ${pillar.accent} rounded-full mb-5`} />
                <h3 className="font-display text-2xl font-bold text-white mb-3">{content.title}</h3>
                <p className="text-ochre-400/70 text-sm font-medium mb-4">{content.sub}</p>
                <p className="text-white/50 leading-relaxed">{content.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom 3 cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.slice(2).map((pillar, i) => {
            const Icon = pillar.icon;
            const content = lang === 'en' ? pillar.en : pillar.sw;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-3xl p-7 transition-all duration-300 cursor-default"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border ${pillar.color} mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`w-6 h-0.5 ${pillar.accent} rounded-full mb-4`} />
                <h3 className="font-display text-xl font-bold text-white mb-2">{content.title}</h3>
                <p className="text-ochre-400/70 text-xs font-medium mb-3">{content.sub}</p>
                <p className="text-white/50 text-sm leading-relaxed">{content.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
