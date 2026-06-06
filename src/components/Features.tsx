import { BookOpen, Stethoscope, Sprout, HandCoins } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function Features() {
  const { lang } = useLanguage();

  const features = [
    {
      title: lang === 'en' ? 'Elimu (Education)' : 'Elimu',
      description: lang === 'en' ? 'Providing resources, scholarships, and after-school programs to ensure every child has the opportunity to learn and thrive in Kenya.' : 'Kutoa rasilimali, ufadhili wa masomo, na programu za baada ya shule ili kuhakikisha kila mtoto anapata fursa ya kujifunza.',
      icon: BookOpen,
    },
    {
      title: lang === 'en' ? 'Afya (Health)' : 'Afya',
      description: lang === 'en' ? 'Organizing medical camps, health awareness campaigns, and supporting local clinics to improve community wellbeing across the region.' : 'Kuandaa kambi za matibabu, kampeni za uhamasishaji afya, na kusaidia zahanati za mitaa ili kuboresha ustawi.',
      icon: Stethoscope,
    },
    {
      title: lang === 'en' ? 'Mazingira (Environment)' : 'Mazingira',
      description: lang === 'en' ? 'Promoting sustainable farming, tree planting drives, and clean-up initiatives for a greener, healthier ecosystem.' : 'Kuhamasisha kilimo endelevu, upandaji miti, na mipango ya usafi kwa mazingira bora zaidi.',
      icon: Sprout,
    },
    {
      title: lang === 'en' ? 'Uwezeshaji (Empowerment)' : 'Uwezeshaji',
      description: lang === 'en' ? 'Empowering local youth and women through skills training, micro-loans, and entrepreneurial mentorship.' : 'Kuwezesha vijana na wanawake kwa mafunzo ya ujuzi, mikopo midogo, na ushauri wa ujasiriamali.',
      icon: HandCoins,
    },
  ];

  return (
    <section id="initiatives" className="py-24 bg-earth-50/80 backdrop-blur-md relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#8D6E6333_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-earth-600 font-semibold tracking-wide uppercase text-sm mb-3">
            {lang === 'en' ? 'Our Key Initiatives' : 'Mipango Yetu Muhimu'}
          </h2>
          <h3 className="font-display text-4xl font-bold text-earth-900 mb-6">
            {lang === 'en' ? 'Driving Sustainable Impact' : 'Kuleta Athari Endelevu'}
          </h3>
          <p className="text-lg text-earth-700/80">
            {lang === 'en' 
              ? 'Azma Yetu focuses on four core pillars to generate holistic, long-lasting positive change within our communities.'
              : 'Azma Yetu inaangazia nguzo nne kuu ili kuleta mabadiliko chanya ya kudumu na thabiti ndani ya jamii zetu.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-earth-100 hover:shadow-lg hover:border-earth-200 transition-all hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-earth-50 text-earth-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold text-earth-900 mb-3">{feature.title}</h4>
                <p className="text-earth-700/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
