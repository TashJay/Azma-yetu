import { motion } from 'motion/react';
import aboutImage from '../assets/images/kenyan_children_1780696307562.png';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white/80 backdrop-blur-md overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(#8D6E6333_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Subtle Kenyan inspired pattern element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-forest-900 animate-[spin_60s_linear_infinite]">
                 <polygon points="50,0 60,35 100,35 65,55 80,95 50,70 20,95 35,55 0,35 40,35" />
              </svg>
            </div>
            
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src={aboutImage} 
                alt="Smiling Kenyan children" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-ochre-500 rounded-3xl z-0 hidden sm:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-earth-600 font-semibold tracking-wide uppercase text-sm mb-3"
            >
              {lang === 'en' ? 'About Azma Yetu' : 'Kuhusu Azma Yetu'}
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-bold text-earth-900 mb-6"
            >
              {lang === 'en' ? 'Our Mission is to Uplift & Empower' : 'Dhamira Yetu ni Kuinua na Kuwezesha'}
            </motion.h3>
            <div className="space-y-6 text-lg text-earth-700/80">
              <p>
                {lang === 'en' 
                  ? '"Azma Yetu" translates to "Our Resolve" in Swahili. We are a passionate, grassroots Community-Based Organization operating in the heart of Kenya. Our firm belief is that true development must start from within the community itself.'
                  : '"Azma Yetu" inamaanisha dhamira yetu thabiti ya kuleta mabadiliko. Sisi ni shirika la kijamii la mashinani linalofanya kazi katikati mwa Kenya. Tunaamini kuwa maendeleo ya kweli lazima yaanzie ndani ya jamii yenyewe.'}
              </p>
              <p>
                {lang === 'en'
                  ? 'Founded by dedicated leaders, we bridge the gap between resources and those who need them most. We believe in providing a hand-up, not just a hand-out, fostering resilience and independence.'
                  : 'Tumeanzishwa na viongozi waliojitolea kuunganisha rasilimali na wale wanaozihitaji zaidi. Tunaamini katika kutoa msaada wa kujiinua, sio tu msaada wa kukuweka tegemezi, ili kujenga ustahimilivu na uhuru.'}
              </p>
            </div>
            
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="border border-earth-100 rounded-2xl p-6 bg-earth-50/50 hover:bg-earth-50 transition-colors">
                <h4 className="text-earth-900 font-bold text-xl mb-2">{lang === 'en' ? 'Our Vision' : 'Maono Yetu'}</h4>
                <p className="text-earth-700/80">{lang === 'en' ? 'A thriving, self-reliant Kenyan society where every individual reaches their full potential.' : 'Jamii ya Kenya inayostawi, inayojitegemea ambapo kila mtu anafikia uwezo wake kamili.'}</p>
              </div>
              <div className="border border-earth-100 rounded-2xl p-6 bg-earth-50/50 hover:bg-earth-50 transition-colors">
                <h4 className="text-earth-900 font-bold text-xl mb-2">{lang === 'en' ? 'Our Approach' : 'Mbinu Zetu'}</h4>
                <p className="text-earth-700/80">{lang === 'en' ? 'Community-led, sustainable initiatives that prioritize long-term holistic impact.' : 'Mipango endelevu inayoongozwa na jamii inayojali athari za muda mrefu za kimfumo.'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
