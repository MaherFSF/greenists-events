import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { Building, Flag, Users, Shield, Calendar, Award, Phone, Mail, MapPin, ArrowLeft, Globe, FileText, Landmark, Scale } from 'lucide-react';

export default function GovernmentSector() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const services = [
    { icon: Flag, titleAr: 'الاحتفالات الوطنية', titleEn: 'National Celebrations', descAr: 'تنظيم احتفالات الأعياد الوطنية والمناسبات الرسمية', descEn: 'Organizing national holidays and official occasions' },
    { icon: Landmark, titleAr: 'المؤتمرات الحكومية', titleEn: 'Government Conferences', descAr: 'مؤتمرات وزارية واجتماعات رفيعة المستوى', descEn: 'Ministerial conferences and high-level meetings' },
    { icon: Globe, titleAr: 'الفعاليات الدبلوماسية', titleEn: 'Diplomatic Events', descAr: 'استقبالات السفارات والفعاليات الدولية', descEn: 'Embassy receptions and international events' },
    { icon: FileText, titleAr: 'مراسم التوقيع', titleEn: 'Signing Ceremonies', descAr: 'تنظيم مراسم توقيع الاتفاقيات والمعاهدات', descEn: 'Organizing agreement and treaty signing ceremonies' },
    { icon: Award, titleAr: 'حفلات التكريم', titleEn: 'Honor Ceremonies', descAr: 'تكريم الشخصيات الحكومية والإنجازات الوطنية', descEn: 'Honoring government figures and national achievements' },
    { icon: Scale, titleAr: 'فعاليات العدالة', titleEn: 'Justice Events', descAr: 'مؤتمرات قانونية وفعاليات المحاكم', descEn: 'Legal conferences and court events' }
  ];

  const partners = [
    { name: 'Office of the Prime Minister', nameAr: 'مكتب رئيس الوزراء' },
    { name: 'Ministry of Foreign Affairs', nameAr: 'وزارة الخارجية' },
    { name: 'Aden Governorate', nameAr: 'محافظة عدن' },
    { name: 'UN Agencies', nameAr: 'وكالات الأمم المتحدة' }
  ];

  const news = [
    { dateAr: '14 ديسمبر 2025', dateEn: 'December 14, 2025', titleAr: 'احتفالات عيد الاستقلال', titleEn: 'Independence Day Celebrations', descAr: 'تنظيم احتفالات عيد الاستقلال الوطني في عدن', descEn: 'Organizing national independence day celebrations in Aden' },
    { dateAr: '10 ديسمبر 2025', dateEn: 'December 10, 2025', titleAr: 'مؤتمر إعادة الإعمار', titleEn: 'Reconstruction Conference', descAr: 'استضافة مؤتمر دولي لإعادة إعمار اليمن', descEn: 'Hosting international Yemen reconstruction conference' },
    { dateAr: '5 ديسمبر 2025', dateEn: 'December 5, 2025', titleAr: 'توقيع اتفاقية تنموية', titleEn: 'Development Agreement Signing', descAr: 'مراسم توقيع اتفاقية مع البنك الدولي', descEn: 'Signing ceremony with the World Bank' }
  ];

  const stats = [
    { value: '100+', labelAr: 'فعالية حكومية', labelEn: 'Government Events' },
    { value: '50+', labelAr: 'جهة حكومية', labelEn: 'Government Bodies' },
    { value: '20+', labelAr: 'سفارة', labelEn: 'Embassies' },
    { value: '100%', labelAr: 'سرية وأمان', labelEn: 'Confidentiality' }
  ];

  return (
    <div className={`min-h-screen bg-slate-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section with Navy/Gold Accent */}
      <div className="relative h-[500px] overflow-hidden">
        <img src="/images/sectors/government-yemen.png" alt="Greenists Government" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-amber-900/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <Link href="/brands" className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>{isRTL ? 'العودة للعلامات التجارية' : 'Back to Brands'}</span>
          </Link>
          <Shield className="w-16 h-16 text-amber-400 mb-4" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{isRTL ? 'جرينستس الحكومية' : 'Greenists Government'}</h1>
          <p className="text-xl md:text-2xl max-w-3xl">{isRTL ? 'شريككم الموثوق في تنظيم الفعاليات الرسمية والدبلوماسية' : 'Your trusted partner in organizing official and diplomatic events'}</p>
          <div className="mt-8 flex gap-4">
            <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">{isRTL ? 'تواصل معنا' : 'Contact Us'}</Link>
            <Link href="/about" className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold transition-colors backdrop-blur-sm">{isRTL ? 'عن الشركة' : 'About Us'}</Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl font-bold mb-2 text-amber-400">{stat.value}</div>
              <div className="text-slate-300">{isRTL ? stat.labelAr : stat.labelEn}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">{isRTL ? 'خدماتنا الحكومية' : 'Our Government Services'}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-500">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{isRTL ? service.titleAr : service.titleEn}</h3>
              <p className="text-gray-600">{isRTL ? service.descAr : service.descEn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-12 px-4 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-12 h-12 mx-auto mb-4 text-amber-400" />
          <h3 className="text-2xl font-bold mb-4">{isRTL ? 'السرية والأمان' : 'Confidentiality & Security'}</h3>
          <p className="text-slate-300">{isRTL ? 'نلتزم بأعلى معايير السرية والأمان في جميع الفعاليات الحكومية والدبلوماسية. فريقنا مدرب على التعامل مع المعلومات الحساسة والبروتوكولات الرسمية.' : 'We adhere to the highest standards of confidentiality and security in all government and diplomatic events. Our team is trained to handle sensitive information and official protocols.'}</p>
        </div>
      </section>

      {/* News */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">{isRTL ? 'آخر الفعاليات' : 'Latest Events'}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-40 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <Flag className="w-16 h-16 text-amber-400/50" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-amber-600 mb-2">{isRTL ? item.dateAr : item.dateEn}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{isRTL ? item.titleAr : item.titleEn}</h3>
                  <p className="text-gray-600 text-sm">{isRTL ? item.descAr : item.descEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">{isRTL ? 'شركاؤنا الحكوميون' : 'Our Government Partners'}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center border border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building className="w-8 h-8 text-slate-600" />
              </div>
              <p className="font-semibold text-gray-800">{isRTL ? partner.nameAr : partner.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">{isRTL ? 'هل تخطط لفعالية حكومية؟' : 'Planning a Government Event?'}</h2>
          <p className="text-xl mb-8 text-slate-300">{isRTL ? 'تواصل معنا للحصول على استشارة متخصصة' : 'Contact us for specialized consultation'}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+967773673918" className="flex items-center justify-center gap-2 bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors">
              <Phone className="w-5 h-5" /> +967 773 673 918
            </a>
            <a href="mailto:government@greenists-events.com" className="flex items-center justify-center gap-2 bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors">
              <Mail className="w-5 h-5" /> government@greenists-events.com
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Shield className="w-8 h-8 text-amber-500" />
            <span className="font-bold text-xl">{isRTL ? 'جرينستس الحكومية' : 'Greenists Government'}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-5 h-5" />
            <span>{isRTL ? 'بجانب فندق ريلاكس، خور مكسر، عدن، اليمن' : 'Next to Relax Hotel, Khormaksar, Aden, Yemen'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
