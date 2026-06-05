import { BookOpen, Stethoscope, Sprout, HandCoins } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    title: 'Education Access',
    description: 'Providing resources, scholarships, and after-school programs to ensure every child has the opportunity to learn and thrive.',
    icon: BookOpen,
  },
  {
    title: 'Health & Wellness',
    description: 'Organizing medical camps, health awareness campaigns, and supporting local clinics to improve community wellbeing.',
    icon: Stethoscope,
  },
  {
    title: 'Environmental Care',
    description: 'Promoting sustainable farming, tree planting drives, and clean-up initiatives for a greener, healthier ecosystem.',
    icon: Sprout,
  },
  {
    title: 'Economic Empowerment',
    description: 'Empowering local youth and women through skills training, micro-loans, and entrepreneurial mentorship.',
    icon: HandCoins,
  },
];

export function Features() {
  return (
    <section id="initiatives" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-forest-700 font-semibold tracking-wide uppercase text-sm mb-3">Our Key Initiatives</h2>
          <h3 className="font-display text-4xl font-bold text-gray-900 mb-6">Driving Sustainable Impact</h3>
          <p className="text-lg text-gray-600">
            Azma Yetu focuses on four core pillars to generate holistic, long-lasting positive change within our communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-forest-50 text-forest-700 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">
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
