import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer id="contact" className="bg-earth-900 border-t border-earth-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <a href="#" className="font-display font-bold text-3xl text-white mb-6 block">
              Azma Yetu<span className="text-ochre-500">.</span>
            </a>
            <p className="text-stone-200 max-w-md leading-relaxed mb-8">
              {lang === 'en'
                ? 'A community-based organization striving for sustainable development, empowering the youth and marginalized groups in Kenya. Join us to make a lasting difference.'
                : 'Shirika la kijamii linalopigania maendeleo endelevu, kuwawezesha vijana na makundi yaliyotengwa nchini Kenya. Jiunge nasi kuleta mabadiliko ya kudumu.'}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">{lang === 'en' ? 'Quick Links' : 'Viungo Haraka'}</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-stone-200 hover:text-ochre-400 transition-colors">{lang === 'en' ? 'About Us' : 'Kutuhusu'}</a></li>
              <li><a href="#initiatives" className="text-stone-200 hover:text-ochre-400 transition-colors">{lang === 'en' ? 'Our Initiatives' : 'Mipango Yetu'}</a></li>
              <li><a href="#impact" className="text-stone-200 hover:text-ochre-400 transition-colors">{lang === 'en' ? 'Impact Stories' : 'Hadithi za Athari'}</a></li>
              <li><a href="#volunteer" className="text-stone-200 hover:text-ochre-400 transition-colors">{lang === 'en' ? 'Volunteer' : 'Jitolee'}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{lang === 'en' ? 'Contact Us' : 'Wasiliana Nasi'}</h4>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-stone-300 text-sm mb-1">{lang === 'en' ? 'Email us at' : 'Tutumie barua pepe'}</span>
                <a href="mailto:Azmayetucbo@gmail.com" className="text-ochre-400 hover:text-ochre-300 font-medium transition-colors">
                  Azmayetucbo@gmail.com
                </a>
              </li>
              <li className="flex flex-col mt-4">
                <span className="text-stone-300 text-sm mb-1">{lang === 'en' ? 'Location' : 'Eneo'}</span>
                <span className="text-stone-200">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-earth-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-300 text-sm">
            &copy; {new Date().getFullYear()} Azma Yetu CBO. {lang === 'en' ? 'All rights reserved.' : 'Haki zote zimehifadhiwa.'}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-stone-300 hover:text-ochre-400 transition-colors text-sm">{lang === 'en' ? 'Privacy Policy' : 'Sera ya Faragha'}</a>
            <a href="#" className="text-stone-300 hover:text-ochre-400 transition-colors text-sm">{lang === 'en' ? 'Terms of Service' : 'Vigezo na Masharti'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
