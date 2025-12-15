import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { GreenistsLogo, GreenistsLeaf } from '@/components/GreenistsLogo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { 
  Calendar, 
  Users, 
  Award, 
  Leaf, 
  ArrowRight,
  Building2,
  Heart,
  Briefcase,
  GraduationCap,
  PartyPopper,
  Globe,
  Phone,
  Mail,
  MapPin,
  Star,
  Sparkles,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';
  
  const stats = [
    { 
      value: 500, 
      suffix: '+', 
      labelEn: 'Events Delivered', 
      labelAr: 'فعالية منفذة',
      icon: Calendar 
    },
    { 
      value: 50, 
      suffix: '+', 
      labelEn: 'Happy Clients', 
      labelAr: 'عميل سعيد',
      icon: Users 
    },
    { 
      value: 10, 
      suffix: '+', 
      labelEn: 'Years Experience', 
      labelAr: 'سنوات خبرة',
      icon: Award 
    },
    { 
      value: 100, 
      suffix: '%', 
      labelEn: 'Eco-Friendly', 
      labelAr: 'صديق للبيئة',
      icon: Leaf 
    },
  ];
  
  const eventTypes = [
    {
      icon: Building2,
      titleEn: 'Corporate Events',
      titleAr: 'فعاليات الشركات',
      descEn: 'Professional conferences, seminars, and business gatherings',
      descAr: 'مؤتمرات احترافية وندوات واجتماعات أعمال',
    },
    {
      icon: Heart,
      titleEn: 'Weddings',
      titleAr: 'حفلات الزفاف',
      descEn: 'Elegant and memorable wedding celebrations',
      descAr: 'حفلات زفاف أنيقة ولا تُنسى',
    },
    {
      icon: Briefcase,
      titleEn: 'Government Events',
      titleAr: 'الفعاليات الحكومية',
      descEn: 'Official ceremonies and public sector events',
      descAr: 'احتفالات رسمية وفعاليات القطاع العام',
    },
    {
      icon: GraduationCap,
      titleEn: 'Educational',
      titleAr: 'التعليمية',
      descEn: 'Workshops, training sessions, and academic events',
      descAr: 'ورش عمل ودورات تدريبية وفعاليات أكاديمية',
    },
    {
      icon: PartyPopper,
      titleEn: 'Entertainment',
      titleAr: 'الترفيهية',
      descEn: 'Festivals, concerts, and entertainment shows',
      descAr: 'مهرجانات وحفلات وعروض ترفيهية',
    },
    {
      icon: Globe,
      titleEn: 'Trade Shows',
      titleAr: 'المعارض التجارية',
      descEn: 'Exhibitions, expos, and trade fairs',
      descAr: 'معارض ومعارض تجارية',
    },
  ];
  
  const whyChooseUs = [
    {
      icon: Leaf,
      titleEn: 'Eco-Friendly Approach',
      titleAr: 'نهج صديق للبيئة',
      descEn: 'We prioritize sustainable practices in every event we organize',
      descAr: 'نعطي الأولوية للممارسات المستدامة في كل فعالية ننظمها',
    },
    {
      icon: Star,
      titleEn: 'Premium Quality',
      titleAr: 'جودة متميزة',
      descEn: 'World-class standards with attention to every detail',
      descAr: 'معايير عالمية مع الاهتمام بكل التفاصيل',
    },
    {
      icon: Shield,
      titleEn: 'Trusted Partner',
      titleAr: 'شريك موثوق',
      descEn: 'Reliable service with transparent pricing',
      descAr: 'خدمة موثوقة مع تسعير شفاف',
    },
    {
      icon: Clock,
      titleEn: 'On-Time Delivery',
      titleAr: 'التسليم في الوقت المحدد',
      descEn: 'We respect deadlines and deliver as promised',
      descAr: 'نحترم المواعيد النهائية ونسلم كما وعدنا',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section - Unique Design */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D7A4A] via-[#236339] to-[#1a4d2e]">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            {/* Leaf Pattern Overlay */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5C30 5 20 15 20 30C20 45 30 55 30 55C30 55 40 45 40 30C40 15 30 5 30 5Z' fill='white'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              {/* Logo */}
              <div className="mb-8 flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
                  <GreenistsLeaf className="w-20 h-20 text-white" />
                </div>
              </div>
              
              {/* Company Name */}
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
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
              
              {/* Tagline */}
              <p className="text-lg md:text-xl text-white/90 mb-6 font-medium">
                {language === 'ar' ? 'خبراء الفعاليات ومبتكرو الأعمال' : 'Event Experts & Business Innovators'}
              </p>
              
              {/* Main Headline */}
              <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
                {language === 'ar' 
                  ? 'نصنع فعاليات استثنائية تترك أثراً'
                  : 'Creating Exceptional Events That Leave a Legacy'}
              </h2>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                {language === 'ar'
                  ? 'من عدن إلى العالم، نقدم خدمات فعاليات مستدامة بمعايير عالمية'
                  : 'From Aden to the World, Delivering Sustainable Events with World-Class Standards'}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/calculator">
                  <Button size="lg" className="bg-white text-[#2D7A4A] hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-xl">
                    <Sparkles className="w-5 h-5 me-2" />
                    {language === 'ar' ? 'احسب تكلفة فعاليتك' : 'Calculate Your Event Cost'}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full">
                    <Phone className="w-5 h-5 me-2" />
                    {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                  </Button>
                </Link>
              </div>
              
              {/* Location Badge */}
              <div className="mt-12 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <MapPin className="w-5 h-5" />
                <span>{language === 'ar' ? 'خور ماكسر، عدن، اليمن' : 'Khor Maksar, Aden, Yemen'}</span>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-white relative -mt-20 z-20">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#2D7A4A]/10 flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-[#2D7A4A]" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-[#2D7A4A] mb-2">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-gray-600 font-medium">
                      {language === 'ar' ? stat.labelAr : stat.labelEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Event Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#2D7A4A]/10 text-[#2D7A4A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {language === 'ar' ? 'خدماتنا' : 'Our Services'}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                {language === 'ar' ? 'أنواع الفعاليات التي ننظمها' : 'Events We Organize'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {language === 'ar'
                  ? 'من المؤتمرات الحكومية إلى حفلات الزفاف الفاخرة، نقدم خدمات شاملة لجميع أنواع الفعاليات'
                  : 'From government conferences to luxury weddings, we provide comprehensive services for all event types'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventTypes.map((event, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2D7A4A] to-[#236339] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <event.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {language === 'ar' ? event.titleAr : event.titleEn}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'ar' ? event.descAr : event.descEn}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/services">
                <Button size="lg" className="bg-[#2D7A4A] hover:bg-[#236339] rounded-full px-8">
                  {language === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'me-2 rotate-180' : 'ms-2'}`} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block bg-[#2D7A4A]/10 text-[#2D7A4A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {language === 'ar' ? 'لماذا نحن' : 'Why Choose Us'}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  {language === 'ar' 
                    ? 'الشريك الأمثل لفعالياتك'
                    : 'Your Ideal Event Partner'}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {language === 'ar'
                    ? 'نجمع بين الخبرة المحلية والمعايير العالمية لنقدم لك تجربة فعاليات لا مثيل لها'
                    : 'We combine local expertise with global standards to deliver an unparalleled event experience'}
                </p>
                
                <div className="space-y-6">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#2D7A4A]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-[#2D7A4A]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {language === 'ar' ? item.titleAr : item.titleEn}
                        </h3>
                        <p className="text-gray-600">
                          {language === 'ar' ? item.descAr : item.descEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Brand Showcase */}
              <div className="relative">
                <div className="bg-gradient-to-br from-[#2D7A4A] to-[#1a4d2e] rounded-3xl p-8 text-white">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">
                      {language === 'ar' ? 'رؤيتنا 2030' : 'Our Vision 2030'}
                    </h3>
                    <p className="text-white/80">
                      {language === 'ar'
                        ? 'أن نكون الشركة الرائدة في تنظيم الفعاليات المستدامة في اليمن والمنطقة'
                        : 'To be the leading sustainable event management company in Yemen and the region'}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">
                        {language === 'ar' ? 'نمو مستمر' : 'Continuous Growth'}
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <Leaf className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">
                        {language === 'ar' ? 'استدامة بيئية' : 'Environmental Sustainability'}
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <Globe className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">
                        {language === 'ar' ? 'معايير عالمية' : 'Global Standards'}
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <Users className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">
                        {language === 'ar' ? 'فريق محترف' : 'Professional Team'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Link href="/calculator">
                      <Button size="lg" className="w-full bg-white text-[#2D7A4A] hover:bg-white/90">
                        <Sparkles className="w-5 h-5 me-2" />
                        {language === 'ar' ? 'احسب تكلفة فعاليتك' : 'Calculate Event Cost'}
                      </Button>
                    </Link>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#2D7A4A]/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#2D7A4A]/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#2D7A4A] to-[#1a4d2e] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {language === 'ar' 
                ? 'جاهز لتنظيم فعاليتك القادمة؟'
                : 'Ready to Plan Your Next Event?'}
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'احصل على تقدير فوري لتكلفة فعاليتك باستخدام حاسبتنا الذكية'
                : 'Get an instant estimate for your event cost using our smart calculator'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" className="bg-white text-[#2D7A4A] hover:bg-white/90 text-lg px-8 py-6 rounded-full">
                  <Sparkles className="w-5 h-5 me-2" />
                  {language === 'ar' ? 'احسب التكلفة الآن' : 'Calculate Cost Now'}
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full">
                  {language === 'ar' ? 'تحدث مع خبير' : 'Talk to an Expert'}
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Contact Info Bar */}
        <section className="py-8 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#2D7A4A]" />
                <span dir="ltr">+967 773 673 918</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#2D7A4A]" />
                <span>info@greenists-events.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#2D7A4A]" />
                <span>
                  {language === 'ar' 
                    ? 'خور ماكسر، عدن، اليمن'
                    : 'Khor Maksar, Aden, Yemen'}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
