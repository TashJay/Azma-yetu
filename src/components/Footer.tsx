import { Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z" />
    </svg>
  );
}

const links = [
  { href: '#about',    label: 'About Us'   },
  { href: '#our-work', label: 'Our Work'   },
  { href: '#founders', label: 'Leadership' },
  { href: '#donate',   label: 'Donate'     },
  { href: '#contact',  label: 'Contact'    },
];

const socials = [
  { Icon: FacebookIcon,  href: 'https://facebook.com/azmayetucbo',  label: 'Facebook'    },
  { Icon: InstagramIcon, href: 'https://instagram.com/azmayetucbo', label: 'Instagram'   },
  { Icon: TikTokIcon,    href: 'https://tiktok.com/@azmayetucbo',   label: 'TikTok'      },
  { Icon: XIcon,         href: 'https://x.com/azmayetucbo',         label: 'X (Twitter)' },
  { Icon: YouTubeIcon,   href: 'https://youtube.com/@azmayetucbo',  label: 'YouTube'     },
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
                  className="h-12 w-auto object-contain brightness-0 invert opacity-90"
                  onError={() => setImgError(true)}
                />
              )}
              <span className="font-display font-bold text-lg">
                AZMA <span className="text-ochre-400">YETU</span> CBO.
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Empowering communities across Kenya through grassroots action, dignity, and an unshakeable belief in human potential.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-ochre-500 flex items-center justify-center text-white/60 hover:text-earth-900 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
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
