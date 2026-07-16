import { Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '#about',    label: 'About Us'   },
  { href: '#our-work', label: 'Our Work'   },
  { href: '#founders', label: 'Leadership' },
  { href: '#donate',   label: 'Donate'     },
  { href: '#contact',  label: 'Contact'    },
];

export function Footer() {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="bg-earth-900 text-white">
      <div className="h-1 bg-gradient-to-r from-ochre-600 via-ochre-400 to-ochre-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              {!imgError && (
                <img
                  src="/logo/azmalogo.png"
                  alt="Azma Yetu"
                  className="h-16 w-auto object-contain brightness-0 invert opacity-90"
                  onError={() => setImgError(true)}
                />
              )}
              <span className="font-display font-bold text-lg">
                AZMA <span className="text-ochre-400">YETU</span> CBO.
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Empowering communities across Kenya through grassroots action, dignity, and an unshakeable belief in human potential.
            </p>
          </div>

          {/* Quick Links — faded logo watermark */}
          <div className="relative overflow-hidden">
            {/* Faded logo watermark */}
            {!imgError && (
              <img
                src="/logo/azmalogo.png"
                alt=""
                aria-hidden="true"
                className="absolute -right-6 -bottom-4 h-40 w-auto object-contain brightness-0 invert opacity-[0.06] pointer-events-none select-none"
              />
            )}
            <h4 className="font-display font-bold text-ochre-400 mb-5 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-ochre-400 mb-5 text-sm uppercase tracking-widest">
              Get in Touch
            </h4>
            <ul className="space-y-4 mb-6">
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
            <p className="text-white/30 text-xs">
              Follow us on all platforms:{' '}
              <span className="text-ochre-400/70 font-medium">@azmayetucbo</span>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Azma Yetu CBO. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Community Based Organization · Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
