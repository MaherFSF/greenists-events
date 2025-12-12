import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { GreenistsLogo, GreenistsLeaf } from '@/components/GreenistsLogo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building2, 
  Heart, 
  Users, 
  Landmark, 
  Store,
  ArrowRight,
  Leaf,
  Globe,
  Award,
  CheckCircle
} from 'lucide-react';

export default function Home() {
  const { language, t } = useLanguage();
  
  const services = [
    {
      icon: Building2,
      title: t('services.corporate'),
      description: t('services.corporate.desc'),
    },
    {
      icon: Heart,
      title: t('services.wedding'),
      description: t('services.wedding.desc'),
    },
    {
      icon: Users,
      title: t('services.conference'),
      description: t('services.conference.desc'),
    },
    {
      icon: Landmark,
      title: t('services.government'),
      description: t('services.government.desc'),
    },
    {
      icon: Store,
      title: t('services.tradeshow'),
      description: t('services.tradeshow.desc'),
    },
  ];
  
  const stats = [
    { value: '500+', label: language === 'ar' ? 'فعالية ناجحة' : 'Successful Events' },
    { value: '50+', label: language === 'ar' ? 'عميل سعيد' : 'Happy Clients' },
    { value: '10+', label: language === 'ar' ? 'سنوات خبرة' : 'Years Experience' },
    { value: '100%', label: language === 'ar' ? 'التزام بالاستدامة' : 'Sustainability' },
  ];
  
  const values = [
    {
      icon: Leaf,
      title: language === 'ar' ? 'الاستدامة' : 'Sustainability',
      description: language === 'ar' 
        ? 'نهج يضع البيئة أولاً في كل فعالية'
        : 'Environment-first approach in every event',
    },
    {
      icon: Award,
      title: language === 'ar' ? 'التميز' : 'Excellence',
      description: language === 'ar'
        ? 'معايير جودة عالمية المستوى'
        : 'World-class quality standards',
    },
    {
      icon: Globe,
      title: language === 'ar' ? 'الابتكار' : 'Innovation',
      description: language === 'ar'
        ? 'حلول إبداعية لكل تحدٍ'
        : 'Creative solutions for every challenge',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#2D7A4A] to-[#1a5c35] text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <GreenistsLeaf className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {language === 'ar' ? (
                  <>
                    <span className="text-white">جرين</span>
                    <span className="text-white/80">ستس</span>
                  </>
                ) : (
                  <>
                    <span className="text-white">Green</span>
                    <span className="text-white/80">ists</span>
                  </>
                )}
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-white/90">
                {t('hero.title')}
              </p>
              <p className="text-lg mb-8 text-white/70">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/calculator">
                  <Button size="lg" className="bg-white text-[#2D7A4A] hover:bg-white/90 w-full sm:w-auto">
                    {t('hero.cta')}
                    <ArrowRight className="w-4 h-4 ms-2" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    {t('hero.secondary')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#2D7A4A]">{stat.value}</div>
                  <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('services.title')}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {language === 'ar' 
                  ? 'نقدم مجموعة شاملة من خدمات إدارة الفعاليات لتلبية جميع احتياجاتك'
                  : 'We offer a comprehensive range of event management services to meet all your needs'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[#2D7A4A]/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-[#2D7A4A]" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link href="/services">
                <Button variant="outline" className="border-[#2D7A4A] text-[#2D7A4A] hover:bg-[#2D7A4A] hover:text-white">
                  {language === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}
                  <ArrowRight className="w-4 h-4 ms-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {language === 'ar' ? 'لماذا تختار جرينستس؟' : 'Why Choose Greenists?'}
                </h2>
                <p className="text-gray-600 mb-8">
                  {language === 'ar'
                    ? 'نحن ملتزمون بتقديم فعاليات استثنائية مع الحفاظ على البيئة ودعم المجتمع المحلي.'
                    : 'We are committed to delivering exceptional events while preserving the environment and supporting the local community.'}
                </p>
                
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#2D7A4A]/10 flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-[#2D7A4A]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#2D7A4A] to-[#1a5c35] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  {language === 'ar' ? 'احصل على تقدير فوري' : 'Get an Instant Estimate'}
                </h3>
                <p className="text-white/80 mb-6">
                  {language === 'ar'
                    ? 'استخدم حاسبة تكلفة الفعاليات للحصول على تقدير سريع لميزانية فعاليتك.'
                    : 'Use our event cost calculator to get a quick estimate for your event budget.'}
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    language === 'ar' ? 'تقدير فوري' : 'Instant estimates',
                    language === 'ar' ? 'أسعار شفافة' : 'Transparent pricing',
                    language === 'ar' ? 'خيارات مرنة' : 'Flexible options',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-white/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/calculator">
                  <Button size="lg" className="w-full bg-white text-[#2D7A4A] hover:bg-white/90">
                    {t('nav.calculator')}
                    <ArrowRight className="w-4 h-4 ms-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'مستعد لبدء فعاليتك؟' : 'Ready to Start Your Event?'}
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'تواصل معنا اليوم ودعنا نساعدك في تحويل رؤيتك إلى واقع.'
                : 'Contact us today and let us help you turn your vision into reality.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#2D7A4A] hover:bg-[#236339] w-full sm:w-auto">
                  {t('nav.contact')}
                </Button>
              </Link>
              <Link href="/portal">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  {t('nav.portal')}
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
