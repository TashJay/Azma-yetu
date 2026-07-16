import { motion } from 'motion/react';
import { GraduationCap, Sparkles, Heart, Users, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    num: '01',
    icon: GraduationCap,
    iconBg: 'bg-sky-500/15 text-sky-300 border-sky-400/20',
    accent: 'from-sky-500/20 to-transparent',
    bar: 'bg-sky-400',
    tag: 'Mentorship · Leadership · Education',
    title: 'Boy Child Empowerment',
    desc: "In Kenya, the boy child has long been overlooked in development conversations. We run structured mentorship cohorts that meet young men where they are — in schools, communities, and streets — giving them frameworks for emotional intelligence, personal responsibility, and purposeful ambition. Our programs cover academic support, life-skills coaching, and peer mentorship networks designed to outlast formal program cycles and become a culture of excellence.",
  },
  {
    num: '02',
    icon: Sparkles,
    iconBg: 'bg-rose-500/15 text-rose-300 border-rose-400/20',
    accent: 'from-rose-500/20 to-transparent',
    bar: 'bg-rose-400',
    tag: 'Skills · Enterprise · Advocacy',
    title: 'Women Empowerment',
    desc: 'Women are the backbone of Kenyan households and communities, yet systemic barriers continue to limit their economic and social participation. Our programs deliver vocational training, micro-enterprise support, savings group formation, and confidence-building workshops — all designed so that skills gained translate into real, lasting opportunity. We work to ensure that every woman we reach finishes stronger, more independent, and more connected than when she started.',
  },
  {
    num: '03',
    icon: Heart,
    iconBg: 'bg-amber-500/15 text-amber-300 border-amber-400/20',
    accent: 'from-amber-500/20 to-transparent',
    bar: 'bg-amber-400',
    tag: 'Grief Support · Livelihood · Belonging',
    title: 'Widows & Widowers Support',
    desc: 'Loss does not end with grief — it often begins a cascade of economic vulnerability, social isolation, and psychological trauma. Our program provides structured psychosocial support, livelihood training, and meaningful integration into community networks so that healing and rebuilding happen together. We walk alongside those who have lost spouses not just in the immediate aftermath, but through the long journey of reclaiming a whole life.',
  },
  {
    num: '04',
    icon: Users,
    iconBg: 'bg-forest-600/20 text-forest-400 border-forest-600/20',
    accent: 'from-forest-600/20 to-transparent',
    bar: 'bg-forest-600',
    tag: 'Social Capital · Preparedness · Recovery',
    title: 'Community Resilience',
    desc: "A resilient community bends without breaking — absorbing shocks, adapting under pressure, and emerging stronger than before. We work with local leaders to map vulnerabilities, build social capital, and establish peer support structures that activate automatically when hardship strikes. Our approach is long-term, relationship-first, and rooted in the understanding that resilience is built person by person, connection by connection.",
  },
  {
    num: '05',
    icon: ShieldCheck,
    iconBg: 'bg-ochre-500/15 text-ochre-300 border-ochre-400/20',
    accent: 'from-ochre-500/20 to-transparent',
    bar: 'bg-ochre-400',
    tag: 'Prevention · Outreach · Rehabilitation',
    title: 'Fighting Drug Abuse',
    desc: 'Substance abuse is a symptom of deeper fractures — hopelessness, idleness, trauma, and the absence of belonging. We address root causes, not just behaviour, through school outreach programs, rehabilitation referral networks, and peer-led recovery communities. Our work helps individuals reclaim their futures and equips communities with the tools to protect their most vulnerable members before crisis strikes.',
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
              Our Focus Areas
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Five pillars, one mission.
            </h2>
            <p className="text-white/45 text-lg">
              Every program we run connects back to one of these five areas of sustained community impact. Together, they form a complete approach to human dignity.
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
            return (
              <motion.div
                key={pillar.num}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-white/25 rounded-3xl p-8 md:p-10 transition-colors duration-300 overflow-hidden cursor-default"
              >
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${pillar.accent} rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl border ${pillar.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-display text-5xl font-bold text-white/5 leading-none select-none">{pillar.num}</span>
                  </div>
                  <div className={`w-8 h-0.5 ${pillar.bar} rounded-full mb-5`} />
                  <h3 className="font-display text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-ochre-400/50 text-xs font-semibold uppercase tracking-wider mb-4">{pillar.tag}</p>
                  <p className="text-white/50 leading-relaxed">{pillar.desc}</p>
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
            return (
              <motion.div
                key={pillar.num}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-white/25 rounded-3xl p-7 transition-colors duration-300 overflow-hidden cursor-default"
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
                  <h3 className="font-display text-lg font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-ochre-400/50 text-xs font-semibold uppercase tracking-wider mb-3">{pillar.tag}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
