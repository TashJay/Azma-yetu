import { useLanguage } from '../contexts/LanguageContext';
import { Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const { lang } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const links = [
    { href: '#about', en: 'About Us', sw: 'Kutuhusu' },
    { href: '#our-work', en: 'Our Work', sw: 'Kazi Yetu' },
    { href: '#founders', en: 'Leadership', sw: 'Uongozi' },
    { href: '#donate', en: 'Donate', sw: 'Changia' },
    { href: '#contact', en: 'Contact', sw: 'Wasiliana' },
  ];

  return (
    <footer className="bg-earth-900 text-white">
      {/* Top strip */}
      <div className="h-1 bg-gradient-to-r from-ochre-600 via-ochre-400 to-ochre-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              {!imgError ? (
                <img
                  src="/logo/azmalogo.png"
                  alt="Azma Yetu"
                  className="h-12 w-auto object-contain brightness-0 invert opacity-90"
                  onError={() => setImgError(true)}
                />
              ) : null}
              <span className="font-display font-bold text-lg">
                AZMA <span className="text-ochre-400">YETU</span> CBO.
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {lang === 'en'
                ? 'Empowering communities across Kenya through grassroots action, dignity, and hope.'
                : 'Kuwawezesha jamii Kenya nzima kupitia hatua za msingi, heshima, na matumaini.'}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-widest text-ochre-400">
              {lang === 'en' ? 'Quick Links' : 'Viungo vya Haraka'}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {lang === 'en' ? link.en : link.sw}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-widest text-ochre-400">
              {lang === 'en' ? 'Get in Touch' : 'Wasiliana Nasi'}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-ochre-400 mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 text-ochre-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:Azmayetucbo@gmail.com"
                  className="text-white/50 hover:text-white transition-colors break-all"
                >
                  Azmayetucbo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Azma Yetu CBO.{' '}
            {lang === 'en' ? 'All rights reserved.' : 'Haki zote zimehifadhiwa.'}
          </p>
          <p className="text-white/20 text-xs">
            {lang === 'en'
              ? 'Community Based Organization · Nairobi, Kenya'
              : 'Shirika la Jamii · Nairobi, Kenya'}
          </p>
        </div>
      </div>
    </footer>
  );
}
