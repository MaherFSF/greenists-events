import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Globe, Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowUp, Leaf, Award, Shield, Clock } from 'lucide-react';

export function Footer() {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="relative">
      {/* Premium CTA Section */}
      <div className="bg-gradient-to-r from-[#1a5c36] via-[#2D7A4A] to-[#1a5c36] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === 'ar' ? 'هل أنت مستعد لفعالية استثنائية؟' : 'Ready for an Exceptional Event?'}
            </h2>
            <p className="text-white/80 text-lg mb-8">
              {language === 'ar' 
                ? 'تواصل معنا اليوم واحصل على استشارة مجانية من خبرائنا'
                : 'Contact us today and get a free consultation from our experts'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c9a432] text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg">
                <Phone className="w-5 h-5" />
                {language === 'ar' ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
              </Link>
              <a href="tel:+967773673918" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all border border-white/30">
                +967 773 673 918
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-[#1a5c36] py-8 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <span className="text-white/80 text-sm">{language === 'ar' ? 'معتمد ISO 20121' : 'ISO 20121 Certified'}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <span className="text-white/80 text-sm">{language === 'ar' ? 'مرخص حكومياً' : 'Government Licensed'}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <span className="text-white/80 text-sm">{language === 'ar' ? 'فعاليات مستدامة' : 'Sustainable Events'}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <span className="text-white/80 text-sm">{language === 'ar' ? '+7 سنوات خبرة' : '7+ Years Experience'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#143d28] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column - Larger */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src="/images/branding/greenists_logo_primary.png" 
                  alt="Greenists" 
                  className="h-16 object-contain"
                />
              </div>
              <p className="text-white/70 text-base leading-relaxed max-w-md">
                {language === 'ar' 
                  ? 'جرينستس - خبراء الفعاليات ومبتكرو الأعمال. نحول رؤيتك إلى واقع مذهل من خلال فعاليات مستدامة لا تُنسى. من عدن إلى العالم.'
                  : 'Greenists - Event Experts & Business Innovators. We transform your vision into stunning reality through unforgettable sustainable events. From Aden to the World.'}
              </p>
              
              {/* Social Media - Premium Style */}
              <div className="flex gap-3">
                <a href="https://facebook.com/greenists" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center hover:from-[#D4AF37]/30 hover:to-[#D4AF37]/10 transition-all group">
                  <Facebook className="w-5 h-5 group-hover:text-[#D4AF37]" />
                </a>
                <a href="https://instagram.com/greenists" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center hover:from-[#D4AF37]/30 hover:to-[#D4AF37]/10 transition-all group">
                  <Instagram className="w-5 h-5 group-hover:text-[#D4AF37]" />
                </a>
                <a href="https://twitter.com/greenists" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center hover:from-[#D4AF37]/30 hover:to-[#D4AF37]/10 transition-all group">
                  <Twitter className="w-5 h-5 group-hover:text-[#D4AF37]" />
                </a>
                <a href="https://linkedin.com/company/greenists" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center hover:from-[#D4AF37]/30 hover:to-[#D4AF37]/10 transition-all group">
                  <Linkedin className="w-5 h-5 group-hover:text-[#D4AF37]" />
                </a>
                <a href="https://youtube.com/greenists" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center hover:from-[#D4AF37]/30 hover:to-[#D4AF37]/10 transition-all group">
                  <Youtube className="w-5 h-5 group-hover:text-[#D4AF37]" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-[#D4AF37]">
                {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              </h3>
              <ul className="space-y-3">
                {[
                  { path: '/', label: language === 'ar' ? 'الرئيسية' : 'Home' },
                  { path: '/about', label: language === 'ar' ? 'من نحن' : 'About Us' },
                  { path: '/services', label: language === 'ar' ? 'خدماتنا' : 'Services' },
                  { path: '/calculator', label: language === 'ar' ? 'حاسبة الفعاليات' : 'Event Calculator' },
                  { path: '/gallery', label: language === 'ar' ? 'معرض الصور' : 'Gallery' },
                  { path: '/academy', label: language === 'ar' ? 'الأكاديمية' : 'Academy' },
                ].map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} className="text-white/70 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50 group-hover:bg-[#D4AF37] transition-colors"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Sectors */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-[#D4AF37]">
                {language === 'ar' ? 'القطاعات' : 'Sectors'}
              </h3>
              <ul className="space-y-3">
                {[
                  { path: '/sectors/corporate', label: language === 'ar' ? 'الشركات' : 'Corporate' },
                  { path: '/sectors/weddings', label: language === 'ar' ? 'الأعراس' : 'Weddings' },
                  { path: '/sectors/government', label: language === 'ar' ? 'الحكومة' : 'Government' },
                  { path: '/sectors/healthcare', label: language === 'ar' ? 'الصحة' : 'Healthcare' },
                  { path: '/sectors/education', label: language === 'ar' ? 'التعليم' : 'Education' },
                  { path: '/sectors/banking', label: language === 'ar' ? 'البنوك' : 'Banking' },
                ].map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} className="text-white/70 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50 group-hover:bg-[#D4AF37] transition-colors"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-[#D4AF37]">
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <span className="text-white/70 text-sm leading-relaxed">
                    {language === 'ar' 
                      ? 'شارع الكورنيش، بجانب فندق ريلاكس، خور مكسر، عدن، اليمن'
                      : 'Corniche Street, Next to Relax Hotel, Khormaksar, Aden, Yemen'}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div className="text-white/70 text-sm">
                    <a href="tel:+967773673918" className="hover:text-[#D4AF37] transition-colors block">+967 773 673 918</a>
                    <a href="tel:+967771017680" className="hover:text-[#D4AF37] transition-colors block">+967 771 017 680</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <a href="mailto:info@greenists-events.com" className="text-white/70 text-sm hover:text-[#D4AF37] transition-colors">
                    info@greenists-events.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <a href="https://www.greenists-events.com" target="_blank" rel="noopener noreferrer" className="text-white/70 text-sm hover:text-[#D4AF37] transition-colors">
                    www.greenists-events.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-[#0d2a1b] border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} Greenists Events. {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}.
            </p>
            <div className="flex items-center gap-6 text-white/50 text-sm">
              <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">
                {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </Link>
              <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">
                {language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
              </Link>
            </div>
            <p className="text-white/50 text-sm flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#2D7A4A]" />
              {language === 'ar' ? 'ملتزمون بالاستدامة' : 'Committed to Sustainability'}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#D4AF37] text-white shadow-lg hover:bg-[#c9a432] transition-all transform hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

export default Footer;
