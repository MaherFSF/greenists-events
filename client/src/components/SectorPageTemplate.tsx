import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { 
  ArrowRight, ArrowLeft, Calendar, Users, Award, CheckCircle2, 
  Phone, Mail, MapPin, Clock, Star, BookOpen, Newspaper, Building2
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  icon: LucideIcon;
}

interface Course {
  titleEn: string;
  titleAr: string;
  duration: string;
  priceUSD: number;
  priceYER: number;
}

interface NewsItem {
  date: string;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
}

interface Partner {
  name: string;
  logo?: string;
}

interface SectorPageProps {
  sectorId: string;
  nameEn: string;
  nameAr: string;
  taglineEn: string;
  taglineAr: string;
  descriptionEn: string;
  descriptionAr: string;
  primaryColor: string;
  secondaryColor: string;
  gradient: string;
  heroImage: string;
  mascotImage?: string;
  icon: LucideIcon;
  stats: { value: string; labelEn: string; labelAr: string }[];
  services: Service[];
  courses: Course[];
  news: NewsItem[];
  partners: Partner[];
}

export function SectorPageTemplate({
  sectorId,
  nameEn,
  nameAr,
  taglineEn,
  taglineAr,
  descriptionEn,
  descriptionAr,
  primaryColor,
  secondaryColor,
  gradient,
  heroImage,
  mascotImage,
  icon: Icon,
  stats,
  services,
  courses,
  news,
  partners,
}: SectorPageProps) {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [activeTab, setActiveTab] = useState<'services' | 'courses' | 'news'>('services');

  const name = language === 'ar' ? nameAr : nameEn;
  const tagline = language === 'ar' ? taglineAr : taglineEn;
  const description = language === 'ar' ? descriptionAr : descriptionEn;

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroImage} alt={name} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-90`} />
        </div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Back Link */}
            <Link href="/sectors">
              <Button variant="ghost" className="text-white/80 hover:text-white mb-6">
                {isRTL ? <ArrowRight className="mr-2 h-4 w-4" /> : <ArrowLeft className="mr-2 h-4 w-4" />}
                {language === 'ar' ? 'العودة للقطاعات' : 'Back to Sectors'}
              </Button>
            </Link>
            
            {/* Sector Icon */}
            <div 
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
              style={{ backgroundColor: `${secondaryColor}30` }}
            >
              <Icon className="w-10 h-10 text-white" />
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              <span className="text-[#2D7A4A]">Green</span>
              <span className="text-white">ists</span>
              <span className="block text-3xl md:text-4xl mt-2" style={{ color: secondaryColor }}>
                {name}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-6">{tagline}</p>
            <p className="text-lg text-white/70 max-w-2xl mb-8">{description}</p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/calculator">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 py-6 text-lg"
                  style={{ backgroundColor: secondaryColor, color: '#000' }}
                >
                  {language === 'ar' ? 'احجز فعاليتك' : 'Book Your Event'}
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-gray-900"
                >
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mascot */}
          {mascotImage && (
            <div className="absolute bottom-0 right-0 hidden lg:block">
              <img src={mascotImage} alt="Mascot" className="h-80 object-contain" />
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 text-center border-b-4"
                style={{ borderColor: primaryColor }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: primaryColor }}>
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm">
                  {language === 'ar' ? stat.labelAr : stat.labelEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { id: 'services', labelEn: 'Services', labelAr: 'الخدمات', icon: Building2 },
              { id: 'courses', labelEn: 'Courses', labelAr: 'الدورات', icon: BookOpen },
              { id: 'news', labelEn: 'News', labelAr: 'الأخبار', icon: Newspaper },
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'default' : 'outline'}
                onClick={() => setActiveTab(tab.id as any)}
                className={`rounded-full px-6 py-3 ${
                  activeTab === tab.id 
                    ? '' 
                    : 'border-gray-300 text-gray-600'
                }`}
                style={activeTab === tab.id ? { backgroundColor: primaryColor } : {}}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {language === 'ar' ? tab.labelAr : tab.labelEn}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tab */}
      {activeTab === 'services' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: primaryColor }}>
              {language === 'ar' ? `خدمات ${nameAr}` : `${nameEn} Services`}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div 
                    className="h-2"
                    style={{ backgroundColor: primaryColor }}
                  />
                  <CardContent className="p-6">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${primaryColor}15` }}
                    >
                      <service.icon className="w-7 h-7" style={{ color: primaryColor }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {language === 'ar' ? service.titleAr : service.titleEn}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'ar' ? service.descAr : service.descEn}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Courses Tab */}
      {activeTab === 'courses' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: primaryColor }}>
              {language === 'ar' ? 'الدورات التدريبية' : 'Training Courses'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {courses.map((course, index) => (
                <Card 
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all"
                >
                  <div 
                    className="p-6"
                    style={{ backgroundColor: `${primaryColor}10` }}
                  >
                    <BookOpen className="w-10 h-10 mb-4" style={{ color: primaryColor }} />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {language === 'ar' ? course.titleAr : course.titleEn}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold mb-4" style={{ color: primaryColor }}>
                      ${course.priceUSD}
                      <span className="text-sm text-gray-500 font-normal block">
                        {course.priceYER.toLocaleString()} YER
                      </span>
                    </div>
                    <Button 
                      className="w-full rounded-full"
                      style={{ backgroundColor: primaryColor }}
                    >
                      {language === 'ar' ? 'سجل الآن' : 'Enroll Now'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* News Tab */}
      {activeTab === 'news' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: primaryColor }}>
              {language === 'ar' ? 'آخر الأخبار' : 'Latest News'}
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {news.map((item, index) => (
                <Card 
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${primaryColor}15` }}
                      >
                        <Newspaper className="w-8 h-8" style={{ color: primaryColor }} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {language === 'ar' ? item.titleAr : item.titleEn}
                        </h3>
                        <p className="text-gray-600">
                          {language === 'ar' ? item.summaryAr : item.summaryEn}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: primaryColor }}>
            {language === 'ar' ? 'شركاؤنا' : 'Our Partners'}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all min-w-[150px] text-center"
              >
                <span className="font-semibold text-gray-700">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === 'ar' 
                ? `هل أنت مستعد لفعالية ${nameAr} استثنائية؟` 
                : `Ready for an Exceptional ${nameEn} Event?`}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {language === 'ar' 
                ? 'تواصل معنا اليوم للحصول على استشارة مجانية' 
                : 'Contact us today for a free consultation'}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
                >
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </Button>
              </Link>
              <a href="tel:+967773673918">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-gray-900 rounded-full px-8 py-6 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +967 773 673 918
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
