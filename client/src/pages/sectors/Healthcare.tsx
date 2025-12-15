import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { Heart, Stethoscope, Users, Award, Calendar, BookOpen, Phone, Mail, MapPin, ArrowLeft, Activity, Pill, Building2, Shield, Brain, Microscope } from 'lucide-react';

export default function HealthcareSector() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const services = [
    { icon: Stethoscope, titleAr: 'المؤتمرات الطبية', titleEn: 'Medical Conferences', descAr: 'تنظيم مؤتمرات طبية دولية ومحلية بأعلى المعايير', descEn: 'Organizing international and local medical conferences with highest standards' },
    { icon: Activity, titleAr: 'ورش العمل الصحية', titleEn: 'Health Workshops', descAr: 'ورش تدريبية للكوادر الطبية والصحية', descEn: 'Training workshops for medical and health staff' },
    { icon: Pill, titleAr: 'إطلاق الأدوية', titleEn: 'Drug Launches', descAr: 'فعاليات إطلاق منتجات صيدلانية جديدة', descEn: 'New pharmaceutical product launch events' },
    { icon: Shield, titleAr: 'حملات التوعية', titleEn: 'Awareness Campaigns', descAr: 'تنظيم حملات توعية صحية مجتمعية', descEn: 'Organizing community health awareness campaigns' },
    { icon: Brain, titleAr: 'ندوات الصحة النفسية', titleEn: 'Mental Health Seminars', descAr: 'فعاليات متخصصة في الصحة النفسية', descEn: 'Specialized mental health events' },
    { icon: Microscope, titleAr: 'معارض المعدات الطبية', titleEn: 'Medical Equipment Expos', descAr: 'معارض لأحدث التقنيات والمعدات الطبية', descEn: 'Exhibitions for latest medical technologies and equipment' }
  ];

  const partners = [
    { name: 'WHO Yemen', nameAr: 'منظمة الصحة العالمية - اليمن' },
    { name: 'MSF', nameAr: 'أطباء بلا حدود' },
    { name: 'Ministry of Health', nameAr: 'وزارة الصحة العامة' },
    { name: 'UNICEF Yemen', nameAr: 'يونيسف اليمن' }
  ];

  const news = [
    { dateAr: '14 ديسمبر 2025', dateEn: 'December 14, 2025', titleAr: 'مؤتمر الصحة العامة في عدن', titleEn: 'Public Health Conference in Aden', descAr: 'تنظيم مؤتمر بحضور 150 طبيب من مختلف المحافظات', descEn: 'Conference with 150 doctors from various governorates' },
    { dateAr: '8 ديسمبر 2025', dateEn: 'December 8, 2025', titleAr: 'ورشة التمريض المتقدم', titleEn: 'Advanced Nursing Workshop', descAr: 'تدريب 50 ممرض على أحدث البروتوكولات', descEn: 'Training 50 nurses on latest protocols' },
    { dateAr: '1 ديسمبر 2025', dateEn: 'December 1, 2025', titleAr: 'يوم الإيدز العالمي', titleEn: 'World AIDS Day', descAr: 'حملة توعية بالتعاون مع وزارة الصحة', descEn: 'Awareness campaign in collaboration with Ministry of Health' }
  ];

  const stats = [
    { value: '80+', labelAr: 'فعالية طبية', labelEn: 'Medical Events' },
    { value: '5K+', labelAr: 'متخصص صحي', labelEn: 'Health Professionals' },
    { value: '15+', labelAr: 'شريك دولي', labelEn: 'International Partners' },
    { value: '100%', labelAr: 'التزام بالمعايير', labelEn: 'Standards Compliance' }
  ];

  return (
    <div className={`min-h-screen bg-teal-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section with Teal/White Accent */}
      <div className="relative h-[500px] overflow-hidden">
        <img src="/images/sectors/healthcare-yemen.png" alt="Greenists Healthcare" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 to-green-900/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <Link href="/brands" className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>{isRTL ? 'العودة للعلامات التجارية' : 'Back to Brands'}</span>
          </Link>
          <Stethoscope className="w-16 h-16 text-teal-300 mb-4" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{isRTL ? 'جرينستس للصحة' : 'Greenists Healthcare'}</h1>
          <p className="text-xl md:text-2xl max-w-3xl">{isRTL ? 'شريكك في تنظيم الفعاليات الطبية والصحية في اليمن' : 'Your partner in organizing medical and health events in Yemen'}</p>
          <div className="mt-8 flex gap-4">
            <Link href="/booking" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">{isRTL ? 'احجز فعاليتك' : 'Book Your Event'}</Link>
            <Link href="/contact" className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold transition-colors backdrop-blur-sm">{isRTL ? 'تواصل معنا' : 'Contact Us'}</Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-teal-700 to-green-600 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-teal-100">{isRTL ? stat.labelAr : stat.labelEn}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">{isRTL ? 'خدماتنا الصحية' : 'Our Healthcare Services'}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-teal-500">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{isRTL ? service.titleAr : service.titleEn}</h3>
              <p className="text-gray-600">{isRTL ? service.descAr : service.descEn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* News */}
      <section className="py-16 px-4 bg-teal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">{isRTL ? 'آخر الأخبار الصحية' : 'Latest Health News'}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-40 bg-gradient-to-br from-teal-600 to-green-600 flex items-center justify-center">
                  <Stethoscope className="w-16 h-16 text-white/50" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-teal-600 mb-2">{isRTL ? item.dateAr : item.dateEn}</div>
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
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">{isRTL ? 'شركاؤنا في القطاع الصحي' : 'Our Healthcare Partners'}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <p className="font-semibold text-gray-800">{isRTL ? partner.nameAr : partner.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal-700 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">{isRTL ? 'هل تخطط لفعالية صحية؟' : 'Planning a Healthcare Event?'}</h2>
          <p className="text-xl mb-8 text-teal-100">{isRTL ? 'تواصل معنا للحصول على استشارة متخصصة' : 'Contact us for specialized consultation'}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+967773673918" className="flex items-center justify-center gap-2 bg-white text-teal-700 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-colors">
              <Phone className="w-5 h-5" /> +967 773 673 918
            </a>
            <a href="mailto:healthcare@greenists-events.com" className="flex items-center justify-center gap-2 bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors">
              <Mail className="w-5 h-5" /> healthcare@greenists-events.com
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Stethoscope className="w-8 h-8 text-teal-500" />
            <span className="font-bold text-xl">{isRTL ? 'جرينستس للصحة' : 'Greenists Healthcare'}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-5 h-5" />
            <span>{isRTL ? 'بجانب فندق ريلاكس، خور مكسر، عدن، اليمن' : 'Next to Relax Hotel, Khormaksar, Aden, Yemen'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
