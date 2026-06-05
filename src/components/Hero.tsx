import { motion } from 'motion/react';
import heroImage from '../assets/images/kenyan_community_hero_1780695687550.png';
import { ArrowRight, Users, HeartHandshake, Leaf } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-forest-900">
      {/* Background Image Setup with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Diverse Kenyan community members collaborating cheerfully outdoors" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-forest-900/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-ochre-500/20 text-ochre-400 font-medium text-sm mb-6 border border-ochre-500/30">
              <span className="flex h-2 w-2 rounded-full bg-ochre-500 mr-2"></span>
              Azma Yetu Community Based Organization
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Community <span className="text-ochre-500">Empowerment.</span>
            </h1>
            <p className="text-lg sm:text-xl text-emerald-50 mb-10 leading-relaxed max-w-xl font-light">
              We are dedicated to uplifting Kenyan communities through sustainable initiatives, authentic collaboration, and grassroots action. Together, we build a brighter tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 rounded-full bg-ochre-500 text-forest-900 font-semibold hover:bg-ochre-400 transition-colors shadow-lg group text-lg"
              >
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#about" 
                className="inline-flex items-center px-8 py-4 rounded-full bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-colors text-lg"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-end"
          >
             {/* Abstract geometry/stats cards overlapping the hero area to give a modern flair */}
             <div className="relative w-full max-w-sm">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-72 h-72 bg-ochre-500/20 rounded-full blur-3xl"></div>
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl relative translate-y-12">
                   <div className="space-y-6">
                      <div className="flex items-start">
                         <div className="flex-shrink-0 bg-ochre-500 p-3 rounded-2xl">
                           <Users className="h-6 w-6 text-forest-900" />
                         </div>
                         <div className="ml-5">
                           <h3 className="text-white font-bold text-xl">10k+</h3>
                           <p className="text-emerald-100/80 text-sm mt-1">Lives positively impacted</p>
                         </div>
                      </div>
                      <div className="flex items-start">
                         <div className="flex-shrink-0 bg-white p-3 rounded-2xl">
                           <HeartHandshake className="h-6 w-6 text-forest-600" />
                         </div>
                         <div className="ml-5">
                           <h3 className="text-white font-bold text-xl">50+</h3>
                           <p className="text-emerald-100/80 text-sm mt-1">Active community programs</p>
                         </div>
                      </div>
                      <div className="flex items-start">
                         <div className="flex-shrink-0 bg-forest-700 p-3 rounded-2xl">
                           <Leaf className="h-6 w-6 text-ochre-400" />
                         </div>
                         <div className="ml-5">
                           <h3 className="text-white font-bold text-xl">100%</h3>
                           <p className="text-emerald-100/80 text-sm mt-1">Sustainable approach</p>
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
