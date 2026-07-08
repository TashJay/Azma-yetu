import { motion } from 'motion/react';
import { ArrowRight, Users, HeartHandshake, Leaf } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Counter } from './Counter';
import { TreeAnimation } from './TreeAnimation';

export function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-earth-900">
      {/* Background Image Setup with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542810634-71277d95dc8c?q=80&w=2070&auto=format&fit=crop" 
          alt="Diverse Kenyan community members collaborating cheerfully outdoors" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-earth-900/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-earth-900/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/80 to-transparent"></div>
        
        {/* Animated Horizon Trees as Silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none flex items-end justify-between px-4 sm:px-20 z-0 select-none overflow-hidden">
           <TreeAnimation className="w-48 sm:w-80 h-48 sm:h-80 text-black opacity-70 transform -translate-x-10 translate-y-6" />
           <TreeAnimation className="w-32 h-32 text-black opacity-50 transform translate-y-2 hidden md:block" />
           <TreeAnimation className="w-64 sm:w-96 h-64 sm:h-96 text-black opacity-80 transform translate-x-12 translate-y-12" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-earth-800/80 backdrop-blur-md text-ochre-400 font-medium text-sm mb-6 border border-earth-700 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-ochre-500 mr-2 animate-pulse"></span>
              {lang === 'en' ? 'Azma Yetu Community Based Organization' : 'Shirika la Kijamii la Azma Yetu'}
            </div>
            <h1 className="font-display text-[clamp(2.5rem,10vw,4.5rem)] sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] break-words">
              {lang === 'en' ? 'Community ' : 'Uwezeshaji wa '}
              <span className="text-ochre-500">{lang === 'en' ? 'Empowerment.' : 'Jamii.'}</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-200 mb-10 leading-relaxed max-w-xl font-light">
              {lang === 'en' 
                ? 'We are dedicated to uplifting Kenyan communities through sustainable initiatives, authentic collaboration, and grassroots action. Together, we build a brighter tomorrow.'
                : 'Tumejitolea kuinua jamii za Kenya kupitia mipango endelevu, ushirikiano wa kweli, na hatua za mashinani. Pamoja, tunajenga kesho iliyo bora.'}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="inline-flex items-center px-8 py-4 rounded-full bg-ochre-500 text-earth-900 font-bold hover:bg-ochre-400 transition-colors shadow-lg group text-lg"
              >
                {lang === 'en' ? 'Get Involved' : 'Shiriki Leo'}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#about" 
                className="inline-flex items-center px-8 py-4 rounded-full bg-earth-800/50 backdrop-blur-sm border border-earth-700 text-white font-medium hover:bg-earth-800 transition-colors text-lg"
              >
                {lang === 'en' ? 'Learn More' : 'Jifunze Zaidi'}
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex justify-end"
          >
             {/* Abstract geometry/stats cards overlapping the hero area to give a modern flair */}
             <div className="relative w-full max-w-sm">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-72 h-72 bg-ochre-500/20 rounded-full blur-3xl"></div>
                
                <div className="bg-earth-900/60 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl relative z-20 translate-y-12">
                   <div className="space-y-6">
                       <div className="flex items-start">
                         <motion.div 
                           initial={{ scale: 0 }} 
                           animate={{ scale: 1 }} 
                           transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.5 }}
                           className="flex-shrink-0 bg-ochre-500 p-3 rounded-full"
                         >
                           <Users className="h-6 w-6 text-earth-900" />
                         </motion.div>
                         <div className="ml-5">
                           <h3 className="text-white font-bold text-xl">
                             <Counter value={10} format={(v) => `${Math.round(v)}k+`} />
                           </h3>
                           <p className="text-stone-300 text-sm mt-1">{lang === 'en' ? 'Lives positively impacted' : 'Maisha yaliyoguswa'}</p>
                         </div>
                      </div>
                      <div className="flex items-start">
                         <motion.div 
                           initial={{ scale: 0 }} 
                           animate={{ scale: 1 }} 
                           transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.7 }}
                           className="flex-shrink-0 bg-white p-3 rounded-full"
                         >
                           <HeartHandshake className="h-6 w-6 text-earth-600" />
                         </motion.div>
                         <div className="ml-5">
                           <h3 className="text-white font-bold text-xl">
                             <Counter value={50} format={(v) => `${Math.round(v)}+`} />
                           </h3>
                           <p className="text-stone-300 text-sm mt-1">{lang === 'en' ? 'Active community programs' : 'Miradi ya kijamii inayoendelea'}</p>
                         </div>
                      </div>
                      <div className="flex items-start">
                         <motion.div 
                           initial={{ scale: 0 }} 
                           animate={{ scale: 1 }} 
                           transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.9 }}
                           className="flex-shrink-0 bg-earth-700 p-3 rounded-full border border-earth-600"
                         >
                           <Leaf className="h-6 w-6 text-ochre-400" />
                         </motion.div>
                         <div className="ml-5">
                           <h3 className="text-white font-bold text-xl">
                             <Counter value={100} format={(v) => `${Math.round(v)}%`} />
                           </h3>
                           <p className="text-stone-300 text-sm mt-1">{lang === 'en' ? 'Sustainable approach' : 'Mbinu endelevu'}</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
