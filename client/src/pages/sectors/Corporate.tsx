import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { Building2, Users, Award, TrendingUp, Calendar, BookOpen, Phone, Mail, MapPin, ArrowLeft, Briefcase, Target, Globe, CheckCircle } from 'lucide-react';

export default function CorporateSector() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const services = [
    {
      icon: Building2,
      titleAr: 'مؤتمرات الشركات',
      titleEn: 'Corporate Conferences',
      descAr: 'تنظيم مؤتمرات احترافية للشركات الكبرى والمتوسطة',
      descEn: 'Professional conference organization for large and medium enterprises'
    },
    {
      icon: Users,
      titleAr: 'فعاليات بناء الفريق',
      titleEn: 'Team Building Events',
      descAr: 'أنشطة تفاعلية لتعزيز روح الفريق والتعاون',
      descEn: 'Interactive activities to enhance team spirit and collaboration'
    },
    {
      icon: Award,
      titleAr: 'حفلات التكريم',
      titleEn: 'Award Ceremonies',
      descAr: 'تنظيم حفلات تكريم الموظفين والشركاء',
      descEn: 'Employee and partner recognition ceremonies'
    },
    {
      icon: TrendingUp,
      titleAr: 'إطلاق المنتجات',
      titleEn: 'Product Launches',
      descAr: 'فعاليات إطلاق منتجات مبتكرة ومؤثرة',
      descEn: 'Innovative and impactful product launch events'
    },
    {
      icon: Briefcase,
      titleAr: 'اجتماعات مجلس الإدارة',
      titleEn: 'Board Meetings',
      descAr: 'تنظيم اجتماعات رفيعة المستوى بأعلى معايير الخصوصية',
      descEn: 'High-level meetings with the highest privacy standards'
    },
    {
      icon: Globe,
      titleAr: 'المعارض التجارية',
      titleEn: 'Trade Shows',
      descAr: 'تصميم وإدارة أجنحة المعارض التجارية',
      descEn: 'Design and management of trade show booths'
    }
  ];

  const courses = [
    {
      titleAr: 'إدارة الفعاليات المؤسسية',
      titleEn: 'Corporate Event Management',
      durationAr: '4 أسابيع',
      durationEn: '4 weeks',
      priceUSD: 500,
      priceYER: 850000
    },
    {
      titleAr: 'التواصل المؤسسي الفعال',
      titleEn: 'Effective Corporate Communication',
      durationAr: '2 أسابيع',
      durationEn: '2 weeks',
      priceUSD: 300,
      priceYER: 510000
    },
    {
      titleAr: 'قيادة الفرق في الفعاليات',
      titleEn: 'Event Team Leadership',
      durationAr: '3 أسابيع',
      durationEn: '3 weeks',
      priceUSD: 400,
      priceYER: 680000
    }
  ];

  const news = [
    {
      dateAr: '15 ديسمبر 2025',
      dateEn: 'December 15, 2025',
      titleAr: 'جرينستس تنظم مؤتمر الاستثمار السنوي في عدن',
      titleEn: 'Greenists Organizes Annual Investment Conference in Aden',
      descAr: 'نجحت جرينستس في تنظيم مؤتمر الاستثمار السنوي بحضور أكثر من 200 مستثمر',
      descEn: 'Greenists successfully organized the annual investment conference with over 200 investors'
    },
    {
      dateAr: '10 ديسمبر 2025',
      dateEn: 'December 10, 2025',
      titleAr: 'شراكة جديدة مع غرفة تجارة عدن',
      titleEn: 'New Partnership with Aden Chamber of Commerce',
      descAr: 'توقيع اتفاقية شراكة استراتيجية لتنظيم الفعاليات التجارية',
      descEn: 'Signing a strategic partnership agreement for organizing commercial events'
    },
    {
      dateAr: '5 ديسمبر 2025',
      dateEn: 'December 5, 2025',
      titleAr: 'إطلاق برنامج تدريب إدارة الفعاليات',
      titleEn: 'Launch of Event Management Training Program',
      descAr: 'برنامج تدريبي متكامل للشركات الراغبة في تطوير قدراتها',
      descEn: 'Comprehensive training program for companies looking to develop their capabilities'
    }
  ];

  const partners = [
    { name: 'Aden Chamber of Commerce', nameAr: 'غرفة تجارة عدن' },
    { name: 'Yemen Investment Authority', nameAr: 'هيئة الاستثمار اليمنية' },
    { name: 'Central Bank of Yemen', nameAr: 'البنك المركزي اليمني' },
    { name: 'Aden Free Zone', nameAr: 'المنطقة الحرة عدن' }
  ];

  const stats = [
    { value: '150+', labelAr: 'فعالية مؤسسية', labelEn: 'Corporate Events' },
    { value: '50+', labelAr: 'شركة شريكة', labelEn: 'Partner Companies' },
    { value: '10K+', labelAr: 'حاضر', labelEn: 'Attendees' },
    { value: '98%', labelAr: 'رضا العملاء', labelEn: 'Client Satisfaction' }
  ];

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section with Corporate Blue Accent */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="/images/sectors/corporate-yemen.png" 
          alt="Greenists Corporate" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-green-900/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <Link href="/brands" className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>{isRTL ? 'العودة للعلامات التجارية' : 'Back to Brands'}</span>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/greenists_logo.png" alt="Greenists" className="h-16" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {isRTL ? 'جرينستس للشركات' : 'Greenists Corporate'}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            {isRTL 
              ? 'شريكك الموثوق في تنظيم فعاليات الأعمال الاحترافية في اليمن'
              : 'Your trusted partner for professional business events in Yemen'}
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/booking" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              {isRTL ? 'احجز فعاليتك' : 'Book Your Event'}
            </Link>
            <Link href="/contact" className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold transition-colors backdrop-blur-sm">
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-800 to-green-700 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{isRTL ? stat.labelAr : stat.labelEn}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          {isRTL ? 'خدماتنا للشركات' : 'Our Corporate Services'}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {isRTL 
            ? 'نقدم مجموعة شاملة من خدمات تنظيم الفعاليات المؤسسية بأعلى معايير الجودة'
            : 'We offer a comprehensive range of corporate event services with the highest quality standards'}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {isRTL ? service.titleAr : service.titleEn}
              </h3>
              <p className="text-gray-600">
                {isRTL ? service.descAr : service.descEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            <BookOpen className="inline-block w-10 h-10 text-blue-600 mr-3" />
            {isRTL ? 'دورات تدريبية' : 'Training Courses'}
          </h2>
          <p className="text-center text-gray-600 mb-12">
            {isRTL 
              ? 'طور مهاراتك في إدارة الفعاليات المؤسسية'
              : 'Develop your corporate event management skills'}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {isRTL ? course.titleAr : course.titleEn}
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Calendar className="w-5 h-5" />
                  <span>{isRTL ? course.durationAr : course.durationEn}</span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  ${course.priceUSD}
                  <span className="text-sm text-gray-500 font-normal mr-2">
                    / {course.priceYER.toLocaleString()} YER
                  </span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors">
                  {isRTL ? 'سجل الآن' : 'Enroll Now'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          {isRTL ? 'آخر الأخبار' : 'Latest News'}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
                <Building2 className="w-20 h-20 text-white/50" />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">
                  {isRTL ? item.dateAr : item.dateEn}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {isRTL ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isRTL ? item.descAr : item.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {isRTL ? 'شركاؤنا' : 'Our Partners'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="font-semibold text-gray-800">
                    {isRTL ? partner.nameAr : partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-800 to-green-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {isRTL ? 'هل أنت مستعد لفعالية مؤسسية استثنائية؟' : 'Ready for an Exceptional Corporate Event?'}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            {isRTL 
              ? 'تواصل معنا اليوم للحصول على استشارة مجانية'
              : 'Contact us today for a free consultation'}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="tel:+967773673918" className="flex items-center gap-2 bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              <Phone className="w-5 h-5" />
              +967 773 673 918
            </a>
            <a href="mailto:corporate@greenists-events.com" className="flex items-center gap-2 bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors">
              <Mail className="w-5 h-5" />
              corporate@greenists-events.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src="/images/greenists_logo.png" alt="Greenists" className="h-10" />
            <span className="font-bold text-xl">{isRTL ? 'جرينستس للشركات' : 'Greenists Corporate'}</span>
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
