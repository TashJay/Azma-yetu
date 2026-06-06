import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function FAQ() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: lang === 'en' ? 'How can I volunteer with Azma Yetu?' : 'Nawezaje kujitolea na Azma Yetu?',
      answer: lang === 'en' 
        ? 'You can join our on-ground team by filling out the contact form below and selecting "Volunteer Opportunities" as the subject. Our team will get back to you with upcoming events and roles.'
        : 'Unaweza kujiunga na timu yetu kwa kujaza fomu ya mawasiliano hapa chini na kuchagua "Nafasi za Kujitolea". Timu yetu itawasiliana nawe kuhusu matukio yajayo.'
    },
    {
      question: lang === 'en' ? 'Where do your funds go?' : 'Pesa zenu zinaenda wapi?',
      answer: lang === 'en'
        ? '100% of public donations go directly towards our community initiatives: education resources, health camps, and micro-loans for local entrepreneurs. Administrative costs are covered by our core partners.'
        : 'Asilimia 100 ya michango ya umma inaenda moja kwa moja kwenye mipango yetu ya kijamii: elimu, afya, na mikopo midogo kwa wafanyabiashara. Gharama za utawala zinalipiwa na wabia wetu wakuu.'
    },
    {
      question: lang === 'en' ? 'Who can apply for your scholarships?' : 'Nani anayeweza kuomba ufadhili wenu wa masomo?',
      answer: lang === 'en'
        ? 'We focus on marginalized children and youth within the specific counties we operate in. Applications are circulated locally in communities through our field coordinators.'
        : 'Tunalenga watoto na vijana walio katika mazingira magumu ndani ya kaunti tunazohudumia. Maombi husambazwa katika jamii kupitia waratibu wetu wa nyanjani.'
    },
    {
      question: lang === 'en' ? 'Can my company partner with Azma Yetu?' : 'Je, kampuni yangu inaweza kushirikiana na Azma Yetu?',
      answer: lang === 'en'
        ? 'Yes! We actively seek corporate partnerships for CSR (Corporate Social Responsibility) initiatives. Please reach out to us to schedule a discussion.'
        : 'Ndiyo! Tunatafuta ushirikiano wa makampuni kikamilifu. Tafadhali wasiliana nasi ili kupanga mazungumzo.'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-earth-50/80 backdrop-blur-md">
      <div className="absolute inset-0 bg-[radial-gradient(#8D6E6333_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-earth-600 font-semibold tracking-wide uppercase text-sm mb-3">
            {lang === 'en' ? 'Questions & Answers' : 'Maswali na Majibu'}
          </h2>
          <h3 className="font-display text-4xl font-bold text-earth-900 mb-6">
            {lang === 'en' ? 'Frequently Asked Questions' : 'Maswali Yanayoulizwa Sana'}
          </h3>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-earth-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-earth-900 text-lg pr-8">{faq.question}</span>
                <motion.div 
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-earth-500"
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-earth-700/80 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
