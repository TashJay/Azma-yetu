import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function FAQ() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: lang === 'en' ? 'How can I volunteer with Azma Yetu?' : 'Nawezaje kujitolea na Azma Yetu?',
      answer: lang === 'en'
        ? 'You can join our on-ground team by filling out the contact form below. Our team will get back to you with upcoming events and volunteer roles across our five focus areas.'
        : 'Unaweza kujiunga na timu yetu kwa kujaza fomu ya mawasiliano hapa chini. Timu yetu itawasiliana nawe kuhusu matukio yajayo na nafasi za kujitolea.',
    },
    {
      question: lang === 'en' ? 'Where do your funds go?' : 'Pesa zenu zinaenda wapi?',
      answer: lang === 'en'
        ? '100% of public donations go directly to our community initiatives — boy child mentorship, women skills training, widows support programs, and drug abuse prevention. Administrative costs are covered by our core partners.'
        : 'Asilimia 100 ya michango ya umma inaenda moja kwa moja kwenye mipango yetu ya jamii. Gharama za utawala zinalipiwa na wabia wetu wakuu.',
    },
    {
      question: lang === 'en' ? 'Who can apply for your scholarships?' : 'Nani anayeweza kuomba ufadhili wenu wa masomo?',
      answer: lang === 'en'
        ? 'We focus on marginalized children and youth within the counties we operate in. Applications are circulated locally through our field coordinators.'
        : 'Tunalenga watoto na vijana walio katika mazingira magumu. Maombi husambazwa katika jamii kupitia waratibu wetu wa nyanjani.',
    },
    {
      question: lang === 'en' ? 'Can my company partner with Azma Yetu?' : 'Je, kampuni yangu inaweza kushirikiana na Azma Yetu?',
      answer: lang === 'en'
        ? 'Yes! We actively seek corporate partnerships for CSR initiatives. Reach out to us at Azmayetucbo@gmail.com to schedule a discussion.'
        : 'Ndiyo! Tunatafuta ushirikiano wa makampuni kikamilifu. Wasiliana nasi kwa Azmayetucbo@gmail.com ili kupanga mazungumzo.',
    },
  ];

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
            {lang === 'en' ? 'Questions & Answers' : 'Maswali na Majibu'}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
            {lang === 'en' ? 'Got questions?' : 'Una maswali?'}
          </h2>
          <p className="text-earth-500 text-lg">
            {lang === 'en' ? "Here are the ones we hear most often." : "Haya ndiyo yanayoulizwa mara nyingi."}
          </p>
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
                transition={{ duration: 0.5, delay: index * 0.08 }}
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
                  <span className={`font-semibold text-lg transition-colors duration-200 ${isOpen ? 'text-earth-900' : 'text-earth-800 group-hover:text-earth-900'}`}>
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
