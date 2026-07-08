import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Landmark, Smartphone } from 'lucide-react';

export function Payment() {
  const { lang } = useLanguage();

  return (
    <section id="donate" className="py-24 md:py-32 bg-earth-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#8D6E6322_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-6 tracking-tight">
              {lang === 'en' ? 'Support Our Initiatives' : 'Saidia Mipango Yetu'}
            </h2>
            <p className="text-earth-700 text-lg leading-relaxed">
              {lang === 'en' 
                ? 'Support our community initiatives safely and securely. You can make payments or donations to Azma Yetu through Kenya Commercial Bank (KCB), M-PESA, or Vooma using the official details below.'
                : 'Saidia mipango yetu ya kijamii kwa usalama. Unaweza kufanya malipo au michango kwa Azma Yetu kupitia Benki ya KCB, M-PESA, au Vooma ukitumia maelezo rasmi hapa chini.'}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* M-PESA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-earth-100 relative overflow-hidden"
          >
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
              <Smartphone className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl font-bold text-earth-900 mb-4">
              {lang === 'en' ? 'M-PESA Paybill' : 'Lipia M-PESA'}
            </h3>
            <div className="space-y-4 text-earth-700 mb-6">
              <div className="flex justify-between items-center border-b border-earth-100 pb-2">
                <span className="text-earth-500">{lang === 'en' ? 'Business No' : 'Namba ya Biashara'}:</span>
                <span className="font-mono font-bold text-lg text-earth-900">522533</span>
              </div>
              <div className="flex justify-between items-center border-b border-earth-100 pb-2">
                <span className="text-earth-500">{lang === 'en' ? 'Account No' : 'Namba ya Akaunti'}:</span>
                <span className="font-mono font-bold text-lg text-earth-900">8106815</span>
              </div>
            </div>
            <ol className="text-sm text-earth-600 space-y-2 list-decimal list-inside">
              <li>{lang === 'en' ? 'Open M-PESA App or Toolkit' : 'Fungua M-PESA App au Toolkit'}</li>
              <li>{lang === 'en' ? 'Select Lipa na M-PESA -> Paybill' : 'Chagua Lipa na M-PESA -> Paybill'}</li>
              <li>{lang === 'en' ? 'Enter details and amount' : 'Ingiza maelezo na kiasi'}</li>
              <li>{lang === 'en' ? 'Enter PIN to confirm' : 'Ingiza PIN kuthibitisha'}</li>
            </ol>
            <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Recommended
            </div>
          </motion.div>

          {/* KCB Bank */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-earth-100"
          >
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Landmark className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl font-bold text-earth-900 mb-4">
              {lang === 'en' ? 'KCB Bank' : 'Benki ya KCB'}
            </h3>
            <div className="space-y-4 text-earth-700 mb-6">
              <div className="flex flex-col border-b border-earth-100 pb-2">
                <span className="text-earth-500 text-sm">{lang === 'en' ? 'Account Name' : 'Jina la Akaunti'}:</span>
                <span className="font-bold text-earth-900">Azma Yetu CBO</span>
              </div>
              <div className="flex flex-col border-b border-earth-100 pb-2">
                <span className="text-earth-500 text-sm">{lang === 'en' ? 'Account No' : 'Namba ya Akaunti'}:</span>
                <span className="font-mono font-bold text-lg text-earth-900">8106815</span>
              </div>
            </div>
            <ul className="text-sm text-earth-600 space-y-3">
              <li className="flex gap-2">
                <span className="font-bold text-earth-900">App:</span>
                <span>{lang === 'en' ? 'Transfer to Account 8106815' : 'Tuma kwenye Akaunti 8106815'}</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-earth-900">USSD:</span>
                <span>{lang === 'en' ? 'Dial *522# and follow prompts' : 'Piga *522# kisha fuata maelekezo'}</span>
              </li>
            </ul>
          </motion.div>

          {/* Vooma */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-earth-100"
          >
            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Smartphone className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl font-bold text-earth-900 mb-4">
              Vooma
            </h3>
            <div className="space-y-4 text-earth-700 mb-6">
              <div className="flex flex-col border-b border-earth-100 pb-2">
                <span className="text-earth-500 text-sm">Paybill:</span>
                <span className="font-mono font-bold text-lg text-earth-900">522533</span>
              </div>
              <div className="flex flex-col border-b border-earth-100 pb-2">
                <span className="text-earth-500 text-sm">{lang === 'en' ? 'Account No' : 'Namba ya Akaunti'}:</span>
                <span className="font-mono font-bold text-lg text-earth-900">8106815</span>
              </div>
            </div>
            <ul className="text-sm text-earth-600 space-y-3">
              <li className="flex gap-2">
                <span className="font-bold text-earth-900">App:</span>
                <span>{lang === 'en' ? 'Search Paybill 522533, Acc 8106815' : 'Tafuta Paybill 522533, Acc 8106815'}</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-earth-900">USSD:</span>
                <span>{lang === 'en' ? 'Dial *844# and follow prompts' : 'Piga *844# kisha fuata maelekezo'}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
