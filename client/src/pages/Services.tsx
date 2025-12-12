import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building2, 
  Heart, 
  Users, 
  Landmark, 
  Store,
  Mic,
  GraduationCap,
  PartyPopper,
  Briefcase,
  Camera,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function Services() {
  const { language, t } = useLanguage();
  
  const services = [
    {
      icon: Building2,
      title: t('services.corporate'),
      titleAr: 'فعاليات الشركات',
      description: t('services.corporate.desc'),
      features: language === 'ar' 
        ? ['إطلاق المنتجات', 'الاجتماعات السنوية', 'حفلات الشركات', 'ورش العمل']
        : ['Product Launches', 'Annual Meetings', 'Corporate Parties', 'Workshops'],
      color: 'bg-blue-500',
    },
    {
      icon: Heart,
      title: t('services.wedding'),
      titleAr: 'الأعراس والمناسبات',
      description: t('services.wedding.desc'),
      features: language === 'ar'
        ? ['حفلات الزفاف', 'حفلات الخطوبة', 'أعياد الميلاد', 'حفلات التخرج']
        : ['Weddings', 'Engagement Parties', 'Birthday Celebrations', 'Graduation Parties'],
      color: 'bg-pink-500',
    },
    {
      icon: Users,
      title: t('services.conference'),
      titleAr: 'المؤتمرات',
      description: t('services.conference.desc'),
      features: language === 'ar'
        ? ['المؤتمرات الدولية', 'الندوات', 'ورش العمل', 'الدعم التقني']
        : ['International Conferences', 'Seminars', 'Workshops', 'Technical Support'],
      color: 'bg-purple-500',
    },
    {
      icon: Landmark,
      title: t('services.government'),
      titleAr: 'الفعاليات الحكومية',
      description: t('services.government.desc'),
      features: language === 'ar'
        ? ['المراسم الرسمية', 'الاحتفالات الوطنية', 'الفعاليات الدبلوماسية', 'التوقيعات الرسمية']
        : ['Official Ceremonies', 'National Celebrations', 'Diplomatic Events', 'Official Signings'],
      color: 'bg-amber-500',
    },
    {
      icon: Store,
      title: t('services.tradeshow'),
      titleAr: 'المعارض التجارية',
      description: t('services.tradeshow.desc'),
      features: language === 'ar'
        ? ['تصميم الأجنحة', 'إدارة المعارض', 'التسويق والترويج', 'الخدمات اللوجستية']
        : ['Booth Design', 'Exhibition Management', 'Marketing & Promotion', 'Logistics'],
      color: 'bg-green-500',
    },
    {
      icon: GraduationCap,
      title: language === 'ar' ? 'الفعاليات التعليمية' : 'Educational Events',
      titleAr: 'الفعاليات التعليمية',
      description: language === 'ar'
        ? 'حفلات التخرج والفعاليات الأكاديمية'
        : 'Graduation ceremonies and academic events',
      features: language === 'ar'
        ? ['حفلات التخرج', 'الأيام المفتوحة', 'المعارض العلمية', 'الندوات الأكاديمية']
        : ['Graduation Ceremonies', 'Open Days', 'Science Fairs', 'Academic Seminars'],
      color: 'bg-indigo-500',
    },
    {
      icon: Mic,
      title: language === 'ar' ? 'الحفلات والترفيه' : 'Entertainment Events',
      titleAr: 'الحفلات والترفيه',
      description: language === 'ar'
        ? 'الحفلات الموسيقية والفعاليات الترفيهية'
        : 'Concerts and entertainment events',
      features: language === 'ar'
        ? ['الحفلات الموسيقية', 'العروض الفنية', 'المهرجانات', 'الأمسيات الثقافية']
        : ['Concerts', 'Art Shows', 'Festivals', 'Cultural Evenings'],
      color: 'bg-red-500',
    },
    {
      icon: Briefcase,
      title: language === 'ar' ? 'خدمات الأعمال' : 'Business Services',
      titleAr: 'خدمات الأعمال',
      description: language === 'ar'
        ? 'استشارات وخدمات أعمال متكاملة'
        : 'Comprehensive business consulting and services',
      features: language === 'ar'
        ? ['استشارات الأعمال', 'التخطيط الاستراتيجي', 'التسويق', 'العلاقات العامة']
        : ['Business Consulting', 'Strategic Planning', 'Marketing', 'Public Relations'],
      color: 'bg-teal-500',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2D7A4A] to-[#1a5c35] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('services.title')}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'نقدم مجموعة شاملة من خدمات إدارة الفعاليات لتلبية جميع احتياجاتك'
                : 'We offer a comprehensive range of event management services to meet all your needs'}
            </p>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow overflow-hidden">
                  <div className={`h-2 ${service.color}`} />
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl ${service.color}/10 flex items-center justify-center mb-4`}>
                      <service.icon className={`w-7 h-7 ${service.color.replace('bg-', 'text-')}`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#2D7A4A]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {language === 'ar' ? 'كيف نعمل' : 'How We Work'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: language === 'ar' ? 'الاستشارة' : 'Consultation',
                  description: language === 'ar' 
                    ? 'نستمع لرؤيتك ونفهم احتياجاتك'
                    : 'We listen to your vision and understand your needs',
                },
                {
                  step: '02',
                  title: language === 'ar' ? 'التخطيط' : 'Planning',
                  description: language === 'ar'
                    ? 'نضع خطة مفصلة ومستدامة'
                    : 'We create a detailed and sustainable plan',
                },
                {
                  step: '03',
                  title: language === 'ar' ? 'التنفيذ' : 'Execution',
                  description: language === 'ar'
                    ? 'ننفذ الفعالية بأعلى معايير الجودة'
                    : 'We execute the event with the highest quality standards',
                },
                {
                  step: '04',
                  title: language === 'ar' ? 'المتابعة' : 'Follow-up',
                  description: language === 'ar'
                    ? 'نقيم الفعالية ونضمن رضاكم'
                    : 'We evaluate the event and ensure your satisfaction',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#2D7A4A] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-[#2D7A4A] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'مستعد لبدء فعاليتك؟' : 'Ready to Start Your Event?'}
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'احصل على تقدير فوري لتكلفة فعاليتك باستخدام حاسبتنا الذكية'
                : 'Get an instant estimate for your event cost using our smart calculator'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" className="bg-white text-[#2D7A4A] hover:bg-white/90">
                  {t('nav.calculator')}
                  <ArrowRight className="w-4 h-4 ms-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  {t('nav.contact')}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
