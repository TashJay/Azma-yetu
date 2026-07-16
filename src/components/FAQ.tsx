import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How can I volunteer with Azma Yetu?',
    answer: 'You can join our on-ground team by filling out the contact form on this page. Our team will reach out with upcoming events, field opportunities, and volunteer roles across our five focus areas. We welcome professionals, students, and community members alike — whatever your background, there is a place for you.',
  },
  {
    question: 'Where do your funds go?',
    answer: '100% of public donations go directly to our community initiatives — boy child mentorship, women skills training, widows and widowers support programs, and drug abuse prevention. Administrative and operational costs are fully covered by our core institutional partners, which means every shilling you donate reaches the people it is meant for.',
  },
  {
    question: 'Who can apply for your programs and scholarships?',
    answer: 'Our programs are open to marginalized children, youth, women, and families within the counties we operate in. Scholarship and training applications are circulated locally through our field coordinators, community leaders, and partner schools. We prioritise those with the greatest need and least access to existing services.',
  },
  {
    question: 'Can my company partner with Azma Yetu?',
    answer: 'Yes — we actively seek corporate partnerships for CSR initiatives, employee volunteer programs, and co-funded community projects. We work with businesses of all sizes and structure partnerships that are transparent, outcomes-focused, and tailored to your organisation\'s values. Reach out to us at Azmayetucbo@gmail.com to start a conversation.',
  },
  {
    question: 'Is Azma Yetu a registered organisation?',
    answer: 'Yes. Azma Yetu CBO is a duly registered Community Based Organization in Kenya, operating in full compliance with the legal frameworks governing civil society and community organisations. We are committed to transparency, accountability, and good governance in all our operations.',
  },
  {
    question: 'How do you measure and report on impact?',
    answer: 'We track program participants across all five pillars and follow up with community field coordinators to assess outcomes at 3, 6, and 12-month intervals. Impact data is reviewed quarterly and used directly to refine programming. We share updates through our social media channels and are available to provide detailed reports to donors and partners on request.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#fafafa]">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #8D6E63 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-earth-100 text-earth-600 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <HelpCircle className="w-4 h-4" />
            Questions &amp; Answers
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
            Got questions?
          </h2>
          <p className="text-earth-500 text-lg">Here are the ones we hear most often.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-ochre-400/50 bg-white shadow-md shadow-ochre-500/5'
                    : 'border-earth-200 bg-white hover:border-earth-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-base md:text-lg transition-colors duration-200 ${isOpen ? 'text-earth-900' : 'text-earth-800 group-hover:text-earth-900'}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isOpen ? 'bg-ochre-500 text-earth-900' : 'bg-earth-100 text-earth-500 group-hover:bg-earth-200'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-6 pb-6 text-earth-600 leading-relaxed border-t border-earth-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
