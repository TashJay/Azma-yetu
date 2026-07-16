import { motion } from 'motion/react';
import { Landmark, Smartphone } from 'lucide-react';

export function Payment() {
  return (
    <section id="donate" className="py-24 md:py-32 bg-earth-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#8D6E6322_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-ochre-100 text-ochre-700 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Make a Difference
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-5 tracking-tight">
              Every shilling counts.
            </h2>
            <p className="text-earth-500 text-lg leading-relaxed mb-4">
              Your contribution goes directly to the people who need it most — mentoring a boy at risk, supporting a widow rebuilding her life, or equipping a woman with skills for independence. There is no overhead, no intermediary, and no delay.
            </p>
            <p className="text-earth-400 text-base">
              Donate safely via M-PESA, KCB Bank, or Vooma using the details below.
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
            <h3 className="font-display text-2xl font-bold text-earth-900 mb-4">M-PESA Paybill</h3>
            <div className="space-y-4 text-earth-700 mb-6">
              <div className="flex justify-between items-center border-b border-earth-100 pb-2">
                <span className="text-earth-500">Business No:</span>
                <span className="font-mono font-bold text-lg text-earth-900">522533</span>
              </div>
              <div className="flex justify-between items-center border-b border-earth-100 pb-2">
                <span className="text-earth-500">Account No:</span>
                <span className="font-mono font-bold text-lg text-earth-900">8106815</span>
              </div>
            </div>
            <ol className="text-sm text-earth-600 space-y-2 list-decimal list-inside">
              <li>Open M-PESA App or Toolkit</li>
              <li>Select Lipa na M-PESA → Paybill</li>
              <li>Enter details and amount</li>
              <li>Enter PIN to confirm</li>
            </ol>
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
            <h3 className="font-display text-2xl font-bold text-earth-900 mb-4">KCB Bank</h3>
            <div className="space-y-4 text-earth-700 mb-6">
              <div className="flex flex-col border-b border-earth-100 pb-2">
                <span className="text-earth-500 text-sm">Account Name:</span>
                <span className="font-bold text-earth-900">Azma Yetu Community Based Organisation</span>
              </div>
              <div className="flex flex-col border-b border-earth-100 pb-2">
                <span className="text-earth-500 text-sm">Account No:</span>
                <span className="font-mono font-bold text-lg text-earth-900">1353323358</span>
                <span className="text-xs text-earth-500 mt-1">Kerugoya Branch</span>
              </div>
            </div>
            <ul className="text-sm text-earth-600 space-y-3">
              <li className="flex gap-2">
                <span className="font-bold text-earth-900">App:</span>
                <span>Transfer to Account 1353323358</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-earth-900">USSD:</span>
                <span>Dial *522# and follow prompts</span>
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
            <h3 className="font-display text-2xl font-bold text-earth-900 mb-4">Vooma</h3>
            <div className="space-y-4 text-earth-700 mb-6">
              <div className="flex flex-col border-b border-earth-100 pb-2">
                <span className="text-earth-500 text-sm">Paybill:</span>
                <span className="font-mono font-bold text-lg text-earth-900">522533</span>
              </div>
              <div className="flex flex-col border-b border-earth-100 pb-2">
                <span className="text-earth-500 text-sm">Account No:</span>
                <span className="font-mono font-bold text-lg text-earth-900">8106815</span>
              </div>
            </div>
            <ul className="text-sm text-earth-600 space-y-3">
              <li className="flex gap-2">
                <span className="font-bold text-earth-900">App:</span>
                <span>Search Paybill 522533, Acc 8106815</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-earth-900">USSD:</span>
                <span>Dial *844# and follow prompts</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
