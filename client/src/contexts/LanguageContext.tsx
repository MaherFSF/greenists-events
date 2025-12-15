import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.calculator': 'Event Calculator',
    'nav.contact': 'Contact',
    'nav.products': 'Products',
    'nav.ai': 'AI Planner',
    'nav.suppliers': 'Suppliers',
    'nav.brands': 'Our Brands',
    'nav.login': 'Login',
    'nav.portal': 'Client Portal',
    
    // Hero Section
    'hero.title': 'Event Experts & Business Innovators',
    'hero.subtitle': 'Yemen\'s Premier Sustainable Event Management Company',
    'hero.cta': 'Plan Your Event',
    'hero.secondary': 'Learn More',
    
    // Brand
    'brand.name': 'Greenists',
    'brand.tagline': 'Event Experts & Business Innovators',
    
    // About
    'about.title': 'About Greenists',
    'about.vision.title': 'Our Vision',
    'about.vision.text': 'To be Yemen\'s leading sustainable event management company, setting the standard for environmental responsibility and professional excellence in the Middle East.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'Delivering world-class events and business services while promoting sustainability, supporting local communities, and preserving Yemen\'s cultural heritage.',
    
    // Services
    'services.title': 'Our Services',
    'services.corporate': 'Corporate Events',
    'services.corporate.desc': 'Conferences, seminars, product launches, and corporate gatherings',
    'services.wedding': 'Weddings & Social',
    'services.wedding.desc': 'Luxury weddings, engagement parties, and social celebrations',
    'services.conference': 'Conferences',
    'services.conference.desc': 'Professional conferences with full technical support',
    'services.government': 'Government Events',
    'services.government.desc': 'Official ceremonies, national celebrations, and diplomatic events',
    'services.tradeshow': 'Trade Shows',
    'services.tradeshow.desc': 'Exhibitions, trade fairs, and business expos',
    
    // Calculator
    'calc.title': 'Event Cost Calculator',
    'calc.subtitle': 'Get an instant estimate for your event',
    'calc.event_type': 'Event Type',
    'calc.guests': 'Number of Guests',
    'calc.venue': 'Venue Type',
    'calc.catering': 'Catering Level',
    'calc.decoration': 'Decoration Level',
    'calc.calculate': 'Calculate Cost',
    'calc.estimate': 'Estimated Cost',
    'calc.currency': 'YER',
    'calc.usd_rate': '1 USD = 1,700 YER',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.address': 'Next to Relax Hotel, Khor Maksar, Aden, Yemen',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.website': 'Website',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.sustainability': 'Committed to Sustainability',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.success': 'Success!',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.gallery': 'معرض الصور',
    'nav.calculator': 'حاسبة الفعاليات',
    'nav.contact': 'اتصل بنا',
    'nav.products': 'المنتجات',
    'nav.ai': 'المخطط الذكي',
    'nav.suppliers': 'الموردون',
    'nav.brands': 'علاماتنا',
    'nav.login': 'تسجيل الدخول',
    'nav.portal': 'بوابة العملاء',
    
    // Hero Section
    'hero.title': 'خبراء الفعاليات ومبتكرو الأعمال',
    'hero.subtitle': 'شركة إدارة الفعاليات المستدامة الرائدة في اليمن',
    'hero.cta': 'خطط لفعاليتك',
    'hero.secondary': 'اعرف المزيد',
    
    // Brand
    'brand.name': 'جرينستس',
    'brand.tagline': 'خبراء الفعاليات ومبتكرو الأعمال',
    
    // About
    'about.title': 'عن جرينستس',
    'about.vision.title': 'رؤيتنا',
    'about.vision.text': 'أن نكون الشركة الرائدة في إدارة الفعاليات المستدامة في اليمن، ووضع معايير المسؤولية البيئية والتميز المهني في الشرق الأوسط.',
    'about.mission.title': 'مهمتنا',
    'about.mission.text': 'تقديم فعاليات وخدمات أعمال عالمية المستوى مع تعزيز الاستدامة ودعم المجتمعات المحلية والحفاظ على التراث الثقافي اليمني.',
    
    // Services
    'services.title': 'خدماتنا',
    'services.corporate': 'فعاليات الشركات',
    'services.corporate.desc': 'المؤتمرات والندوات وإطلاق المنتجات وتجمعات الشركات',
    'services.wedding': 'الأعراس والمناسبات',
    'services.wedding.desc': 'حفلات الزفاف الفاخرة وحفلات الخطوبة والاحتفالات الاجتماعية',
    'services.conference': 'المؤتمرات',
    'services.conference.desc': 'مؤتمرات احترافية مع دعم تقني كامل',
    'services.government': 'الفعاليات الحكومية',
    'services.government.desc': 'المراسم الرسمية والاحتفالات الوطنية والفعاليات الدبلوماسية',
    'services.tradeshow': 'المعارض التجارية',
    'services.tradeshow.desc': 'المعارض والأسواق التجارية ومعارض الأعمال',
    
    // Calculator
    'calc.title': 'حاسبة تكلفة الفعاليات',
    'calc.subtitle': 'احصل على تقدير فوري لفعاليتك',
    'calc.event_type': 'نوع الفعالية',
    'calc.guests': 'عدد الضيوف',
    'calc.venue': 'نوع المكان',
    'calc.catering': 'مستوى الضيافة',
    'calc.decoration': 'مستوى الديكور',
    'calc.calculate': 'احسب التكلفة',
    'calc.estimate': 'التكلفة التقديرية',
    'calc.currency': 'ريال يمني',
    'calc.usd_rate': '١ دولار = ١٧٠٠ ريال يمني',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.address': 'شارع الكورنيش، بجانب فندق ريلاكس، خور ماكسر، عدن، اليمن',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.website': 'الموقع الإلكتروني',
    'contact.form.name': 'اسمك',
    'contact.form.email': 'بريدك الإلكتروني',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال الرسالة',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.sustainability': 'ملتزمون بالاستدامة',
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'حدث خطأ',
    'common.success': 'تم بنجاح!',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar'); // Default to Arabic

  useEffect(() => {
    // Check for saved language preference
    const saved = localStorage.getItem('greenists-language') as Language;
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('greenists-language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  // Set initial direction
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
