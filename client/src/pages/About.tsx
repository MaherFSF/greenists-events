import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Leaf, 
  Award, 
  Globe, 
  Users, 
  Heart,
  Target,
  Eye,
  Lightbulb,
  Shield
} from 'lucide-react';

export default function About() {
  const { language, t } = useLanguage();
  
  const values = [
    {
      icon: Leaf,
      title: language === 'ar' ? 'الاستدامة' : 'Sustainability',
      description: language === 'ar' 
        ? 'نضع البيئة في صميم كل قرار نتخذه، من اختيار المواد إلى إدارة النفايات.'
        : 'We put the environment at the heart of every decision we make, from material selection to waste management.',
    },
    {
      icon: Award,
      title: language === 'ar' ? 'التميز' : 'Excellence',
      description: language === 'ar'
        ? 'نسعى لتحقيق أعلى معايير الجودة في كل فعالية نديرها.'
        : 'We strive to achieve the highest quality standards in every event we manage.',
    },
    {
      icon: Lightbulb,
      title: language === 'ar' ? 'الابتكار' : 'Innovation',
      description: language === 'ar'
        ? 'نبحث دائماً عن حلول إبداعية ومبتكرة لتجاوز توقعات عملائنا.'
        : 'We constantly seek creative and innovative solutions to exceed our clients\' expectations.',
    },
    {
      icon: Users,
      title: language === 'ar' ? 'المجتمع' : 'Community',
      description: language === 'ar'
        ? 'ندعم المجتمعات المحلية ونساهم في تنمية اليمن.'
        : 'We support local communities and contribute to Yemen\'s development.',
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'النزاهة' : 'Integrity',
      description: language === 'ar'
        ? 'نلتزم بالشفافية والأخلاق في جميع تعاملاتنا.'
        : 'We are committed to transparency and ethics in all our dealings.',
    },
  ];
  
  const team = [
    {
      name: language === 'ar' ? 'ماهر العدني' : 'Maher Al-Adeni',
      role: language === 'ar' ? 'الرئيس التنفيذي' : 'Chief Executive Officer',
      email: 'maher@greenists-events.com',
    },
    {
      name: language === 'ar' ? 'طارق حسن' : 'Tariq Hassan',
      role: language === 'ar' ? 'نائب الرئيس التنفيذي' : 'Deputy CEO',
      email: 'tariq@greenists-events.com',
    },
    {
      name: language === 'ar' ? 'صالح أحمد' : 'Saleh Ahmed',
      role: language === 'ar' ? 'مدير تطوير الأعمال' : 'Business Development Manager',
      email: 'saleh@greenists-events.com',
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
              {t('about.title')}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'شركة رائدة في إدارة الفعاليات المستدامة في اليمن'
                : 'A leading sustainable event management company in Yemen'}
            </p>
          </div>
        </section>
        
        {/* Vision & Mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision */}
              <Card className="border-t-4 border-t-[#2D7A4A]">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#2D7A4A]/10 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-[#2D7A4A]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {t('about.vision.title')}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.vision.text')}
                  </p>
                </CardContent>
              </Card>
              
              {/* Mission */}
              <Card className="border-t-4 border-t-[#D4AF37]">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {t('about.mission.title')}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.mission.text')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === 'ar' ? 'قصتنا' : 'Our Story'}
              </h2>
              <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
                <p>
                  {language === 'ar'
                    ? 'تأسست جرينستس في عدن، اليمن، برؤية واضحة: تقديم خدمات إدارة فعاليات عالمية المستوى مع الحفاظ على البيئة ودعم المجتمع المحلي.'
                    : 'Greenists was founded in Aden, Yemen, with a clear vision: to provide world-class event management services while preserving the environment and supporting the local community.'}
                </p>
                <p>
                  {language === 'ar'
                    ? 'نؤمن بأن الفعاليات الناجحة يمكن أن تكون صديقة للبيئة، ونعمل على إثبات ذلك في كل مشروع نقوم به.'
                    : 'We believe that successful events can be environmentally friendly, and we work to prove this in every project we undertake.'}
                </p>
                <p>
                  {language === 'ar'
                    ? 'من خلال فريقنا المتخصص وشراكاتنا القوية، نقدم حلولاً متكاملة للفعاليات تجمع بين الإبداع والاستدامة.'
                    : 'Through our specialized team and strong partnerships, we provide integrated event solutions that combine creativity and sustainability.'}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {language === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-[#2D7A4A]/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-[#2D7A4A]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {language === 'ar' ? 'فريق القيادة' : 'Leadership Team'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 rounded-full bg-[#2D7A4A] flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#2D7A4A] font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {member.email}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Location */}
        <section className="py-16 bg-[#2D7A4A] text-white">
          <div className="container mx-auto px-4 text-center">
            <Globe className="w-12 h-12 mx-auto mb-4 text-white/80" />
            <h2 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'موقعنا' : 'Our Location'}
            </h2>
            <p className="text-xl text-white/90 mb-2">
              {t('contact.address')}
            </p>
            <p className="text-white/70">
              www.greenists-events.com
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
