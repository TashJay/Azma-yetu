import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Quote } from 'lucide-react';

export function Founders() {
  const { lang } = useLanguage();

  return (
    <section id="founders" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-6 tracking-tight">
              {lang === 'en' ? 'Meet Our Founder' : 'Kutana na Mwanzilishi Wetu'}
            </h2>
            <div className="w-24 h-1 bg-ochre-500 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-earth-50 rounded-3xl p-8 md:p-12 shadow-sm border border-earth-100 flex flex-col md:flex-row items-center gap-10"
          >
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-ochre-500 rounded-full blur-2xl opacity-20 -z-10 translate-x-4 translate-y-4"></div>
              <img 
                src="/Khadija.jpg" 
                alt="Khadija Mustafa" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <Quote className="w-10 h-10 text-ochre-300 mb-4 mx-auto md:mx-0 opacity-50" />
              <h3 className="font-display text-3xl font-bold text-earth-900 mb-2">
                Khadija Mustafa
              </h3>
              <p className="text-ochre-600 font-semibold mb-6">
                {lang === 'en' ? 'Founder & Director' : 'Mwanzilishi & Mkurugenzi'}
              </p>
              
              <div className="space-y-4 text-earth-700 leading-relaxed text-lg">
                <p>
                  {lang === 'en' 
                    ? 'With a strong background in Communication, Research, and Public Relations, Khadija brings a wealth of expertise to Azma Yetu CBO.'
                    : 'Akiwa na msingi imara katika Mawasiliano, Utafiti, na Mahusiano ya Umma, Khadija analeta utaalamu mkubwa kwa Azma Yetu CBO.'}
                </p>
                <p>
                  {lang === 'en'
                    ? 'She currently serves on the Board of Directors for INVEST in Kenya, demonstrating her commitment to national development.'
                    : 'Kwa sasa anatumika katika Bodi ya Wakurugenzi ya INVEST in Kenya, akionyesha kujitolea kwake katika maendeleo ya kitaifa.'}
                </p>
                <p className="font-medium text-earth-900">
                  {lang === 'en'
                    ? 'Her true passion lies in building resilient, empowered communities from the ground up.'
                    : 'Mapenzi yake ya dhati yapo katika kujenga jamii zenye uthabiti na zilizowezeshwa kuanzia ngazi ya chini.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
