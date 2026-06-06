import { motion } from 'motion/react';
import { Heart, Handshake, Landmark, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function GetInvolved() {
  const { lang } = useLanguage();

  const waysToHelp = [
    {
      title: lang === 'en' ? 'Volunteer' : 'Jitolee',
      description: lang === 'en' ? 'Offer your time and skills. Join our on-ground team to facilitate workshops, health drives, and clean-ups.' : 'Jiunge na timu yetu ya mashinani kuwezesha warsha, kampeni za afya na usafi.',
      action: lang === 'en' ? 'Join the team' : 'Jiunge na timu',
      icon: Heart,
      color: 'bg-rose-50 text-rose-600',
      link: '#contact'
    },
    {
      title: lang === 'en' ? 'Partner With Us' : 'Shirikiana Nasi',
      description: lang === 'en' ? 'We welcome corporate and institutional partnerships to scale our impact across various Kenyan counties.' : 'Tunakaribisha ubia na mashirika ili kupanua wigo wetu katika kaunti mbalimbali za Kenya.',
      action: lang === 'en' ? 'Become a partner' : 'Kuwa mbia',
      icon: Handshake,
      color: 'bg-earth-50 text-earth-700',
      link: '#contact'
    },
    {
      title: lang === 'en' ? 'Donate' : 'Tuma Mchango',
      description: lang === 'en' ? 'Your financial contributions directly fund our essential community projects, education, and health initiatives.' : 'Michango yako inafadhili moja kwa moja miradi yetu muhimu ya kijamii, elimu na afya.',
      action: lang === 'en' ? 'Make a donation' : 'Changia',
      icon: Landmark,
      color: 'bg-ochre-50 text-ochre-600',
      link: '#contact'
    }
  ];

  return (
    <section className="py-24 bg-earth-50/50 backdrop-blur-sm border-t border-earth-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#8D6E6333_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-earth-700 font-semibold tracking-wide uppercase text-sm mb-3">{lang === 'en' ? 'Get Involved' : 'Shiriki Leo'}</h2>
          <h3 className="font-display text-4xl font-bold text-earth-900 mb-6">{lang === 'en' ? 'Be the Catalyst for Change' : 'Kuwa Kichocheo cha Mabadiliko'}</h3>
          <p className="text-lg text-earth-700/80">
            {lang === 'en' 
              ? 'Azma Yetu thrives on the collective effort of individuals and partners. Here is how you can step in and make a monumental difference.'
              : 'Azma Yetu inastawi kupitia juhudi za pamoja za watu na wabia. Hivi ndivyo unavyoweza kuingilia kati na kuleta mabadiliko makubwa.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {waysToHelp.map((way, index) => {
            const Icon = way.icon;
            return (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-earth-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${way.color}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-bold text-earth-900 mb-3">{way.title}</h4>
                <p className="text-earth-700/80 leading-relaxed flex-grow mb-8">
                  {way.description}
                </p>
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={way.link} 
                  className="font-medium text-earth-800 hover:text-ochre-600 transition-colors inline-flex items-center mt-auto"
                >
                  {way.action} <ArrowRight className="ml-1 h-4 w-4" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-earth-100 relative overflow-hidden">
            {/* Decorative element for the form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-ochre-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="text-center mb-8 relative z-10">
              <h3 className="font-display text-3xl font-bold text-earth-900 mb-2">
                {lang === 'en' ? 'Reach Out to Us' : 'Wasiliana Nasi'}
              </h3>
              <p className="text-earth-600">
                {lang === 'en' ? 'Have questions or want to collaborate? Send us a message.' : 'Una maswali au unataka kushirikiana? Tutumie ujumbe.'}
              </p>
            </div>
            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                const form = e.currentTarget as HTMLFormElement;
                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                const subject = (form.elements.namedItem('subject') as HTMLSelectElement).value;
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                
                const mailtoUrl = `mailto:Azmayetucbo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                window.location.href = mailtoUrl;
              }} 
              className="space-y-6 relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label htmlFor="name" className="block text-sm font-medium text-earth-800 mb-2">{lang === 'en' ? 'Full Name' : 'Jina Kamili'}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-earth-200 focus:ring-2 focus:ring-ochre-500 focus:border-ochre-500 bg-earth-50/60 focus:bg-white transition-colors"
                    placeholder={lang === 'en' ? "Jane Doe" : "Amina Juma"}
                  />
                </div>
                <div className="text-left">
                  <label htmlFor="email" className="block text-sm font-medium text-earth-800 mb-2">{lang === 'en' ? 'Email Address' : 'Barua Pepe'}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-earth-200 focus:ring-2 focus:ring-ochre-500 focus:border-ochre-500 bg-earth-50/60 focus:bg-white transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              
              <div className="text-left">
                <label htmlFor="subject" className="block text-sm font-medium text-earth-800 mb-2">{lang === 'en' ? 'Subject' : 'Kichwa cha Habari'}</label>
                <select id="subject" name="subject" className="w-full px-4 py-3 rounded-xl border border-earth-200 focus:ring-2 focus:ring-ochre-500 focus:border-ochre-500 bg-earth-50/60 focus:bg-white transition-colors">
                  <option>{lang === 'en' ? 'General Inquiry' : 'Swali la Ujumla'}</option>
                  <option>{lang === 'en' ? 'Volunteer Opportunities' : 'Nafasi za Kujitolea'}</option>
                  <option>{lang === 'en' ? 'Partnership Proposal' : 'Pendekezo la Ubia'}</option>
                  <option>{lang === 'en' ? 'Make a Donation' : 'Tuma Mchango'}</option>
                </select>
              </div>

              <div className="text-left">
                <label htmlFor="message" className="block text-sm font-medium text-earth-800 mb-2">{lang === 'en' ? 'Message' : 'Ujumbe'}</label>
                <textarea 
                  id="message" 
                  name="message"
                  required 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl border border-earth-200 focus:ring-2 focus:ring-ochre-500 focus:border-ochre-500 bg-earth-50/60 focus:bg-white transition-colors resize-none"
                  placeholder={lang === 'en' ? "How can we build a brighter tomorrow together?" : "Tunawezaje kujenga kesho bora pamoja?"}
                ></textarea>
              </div>

              <div className="text-center mt-8">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-earth-800 text-white font-bold hover:bg-earth-900 focus:ring-4 focus:ring-earth-200 transition-all text-lg shadow-md hover:-translate-y-1"
                >
                  {lang === 'en' ? 'Send Message' : 'Tuma Ujumbe'}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
