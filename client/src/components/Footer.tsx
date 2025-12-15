import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { GreenistsLogo, GreenistsLeaf } from './GreenistsLogo';
import { MapPin, Phone, Mail, Globe, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#2D7A4A] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/images/branding/official-logo.png" 
                alt="Greenists" 
                className="h-12 object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/80 text-sm">
              {t('brand.tagline')}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-white/80 hover:text-white transition-colors">
                  {t('nav.calculator')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/80 hover:text-white transition-colors">
                  {t('nav.gallery')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {t('services.title')}
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>{t('services.corporate')}</li>
              <li>{t('services.wedding')}</li>
              <li>{t('services.conference')}</li>
              <li>{t('services.government')}</li>
              <li>{t('services.tradeshow')}</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {t('contact.title')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  {t('contact.address')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <div>+967 773 673 918</div>
                  <div>+967 771 017 680</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/80 text-sm">info@greenists-events.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/80 text-sm">www.greenists-events.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Greenists. {t('footer.rights')}.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-2">
              <GreenistsLeaf className="w-4 h-4 text-white/60" />
              {t('footer.sustainability')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
