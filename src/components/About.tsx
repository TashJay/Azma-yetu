import { motion } from 'motion/react';
import aboutImage from '../assets/images/kenyan_children_1780696307562.png';

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Smiling Kenyan children" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-ochre-500 rounded-3xl -z-10 hidden sm:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-forest-700 font-semibold tracking-wide uppercase text-sm mb-3">About Azma Yetu</h2>
            <h3 className="font-display text-4xl font-bold text-gray-900 mb-6">Our Mission is to Uplift & Empower</h3>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                "Azma Yetu" translates to "Our Resolve" in Swahili. We are a passionate, grassroots Community-Based Organization operating in the heart of Kenya. Our firm belief is that true development must start from within the community itself.
              </p>
              <p>
                Founded by dedicated leaders, we bridge the gap between resources and those who need them most. We believe in providing a hand-up, not just a hand-out, fostering resilience and independence.
              </p>
            </div>
            
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="border border-gray-100 rounded-2xl p-6 bg-gray-50">
                <h4 className="text-forest-900 font-bold text-xl mb-2">Our Vision</h4>
                <p className="text-gray-600">A thriving, self-reliant Kenyan society where every individual reaches their full potential.</p>
              </div>
              <div className="border border-gray-100 rounded-2xl p-6 bg-gray-50">
                <h4 className="text-forest-900 font-bold text-xl mb-2">Our Approach</h4>
                <p className="text-gray-600">Community-led, sustainable initiatives that prioritize long-term holistic impact.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
