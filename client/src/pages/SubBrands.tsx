import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Heart, 
  Flower2,
  Landmark,
  Globe2,
  GraduationCap,
  Building,
  Baby,
  Music,
  Stethoscope,
  HardHat,
  Fuel,
  Plane,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'wouter';

const subBrands = [
  {
    id: 'corporate',
    icon: Building2,
    nameEn: 'Greenists Corporate',
    nameAr: 'جرينستس للشركات',
    color: '#1E3A5F',
    descEn: 'Professional business events, conferences, product launches, and corporate gatherings',
    descAr: 'فعاليات الأعمال الاحترافية والمؤتمرات وإطلاق المنتجات وتجمعات الشركات',
    servicesEn: ['Conferences', 'Product Launches', 'Annual Meetings', 'Team Building', 'Award Ceremonies'],
    servicesAr: ['المؤتمرات', 'إطلاق المنتجات', 'الاجتماعات السنوية', 'بناء الفريق', 'حفلات التكريم'],
  },
  {
    id: 'weddings',
    icon: Heart,
    nameEn: 'Greenists Weddings',
    nameAr: 'جرينستس للأعراس',
    color: '#B76E79',
    descEn: 'Luxury weddings, engagement parties, and romantic celebrations',
    descAr: 'حفلات الزفاف الفاخرة وحفلات الخطوبة والاحتفالات الرومانسية',
    servicesEn: ['Luxury Weddings', 'Engagement Parties', 'Henna Nights', 'Bridal Showers', 'Anniversary Celebrations'],
    servicesAr: ['حفلات الزفاف الفاخرة', 'حفلات الخطوبة', 'ليالي الحناء', 'حفلات العروس', 'احتفالات الذكرى السنوية'],
  },
  {
    id: 'condolences',
    icon: Flower2,
    nameEn: 'Greenists Condolences',
    nameAr: 'جرينستس للعزاء',
    color: '#4A3B5C',
    descEn: 'Dignified funeral services and memorial events with respect and care',
    descAr: 'خدمات جنازة كريمة وفعاليات تأبينية باحترام وعناية',
    servicesEn: ['Funeral Services', 'Memorial Events', 'Condolence Halls', 'Catering Services', 'Flower Arrangements'],
    servicesAr: ['خدمات الجنازة', 'فعاليات التأبين', 'قاعات العزاء', 'خدمات الضيافة', 'تنسيق الزهور'],
  },
  {
    id: 'banking',
    icon: Landmark,
    nameEn: 'Greenists Banking',
    nameAr: 'جرينستس للبنوك',
    color: '#D4AF37',
    descEn: 'Financial sector events, bank openings, and investor meetings',
    descAr: 'فعاليات القطاع المالي وافتتاحات البنوك واجتماعات المستثمرين',
    servicesEn: ['Bank Openings', 'Investor Meetings', 'Financial Seminars', 'VIP Client Events', 'Award Galas'],
    servicesAr: ['افتتاحات البنوك', 'اجتماعات المستثمرين', 'الندوات المالية', 'فعاليات كبار العملاء', 'حفلات التكريم'],
  },
  {
    id: 'ngo',
    icon: Globe2,
    nameEn: 'Greenists NGO',
    nameAr: 'جرينستس للمنظمات',
    color: '#87CEEB',
    descEn: 'Humanitarian events, development conferences, and charity galas',
    descAr: 'الفعاليات الإنسانية ومؤتمرات التنمية والحفلات الخيرية',
    servicesEn: ['Charity Galas', 'Development Conferences', 'Awareness Campaigns', 'Fundraising Events', 'Volunteer Gatherings'],
    servicesAr: ['الحفلات الخيرية', 'مؤتمرات التنمية', 'حملات التوعية', 'فعاليات جمع التبرعات', 'تجمعات المتطوعين'],
  },
  {
    id: 'education',
    icon: GraduationCap,
    nameEn: 'Greenists Education',
    nameAr: 'جرينستس للتعليم',
    color: '#FF8C00',
    descEn: 'School events, graduations, academic conferences, and educational workshops',
    descAr: 'فعاليات المدارس والتخرج والمؤتمرات الأكاديمية وورش العمل التعليمية',
    servicesEn: ['Graduation Ceremonies', 'Academic Conferences', 'School Events', 'Educational Workshops', 'Science Fairs'],
    servicesAr: ['حفلات التخرج', 'المؤتمرات الأكاديمية', 'فعاليات المدارس', 'ورش العمل التعليمية', 'معارض العلوم'],
  },
  {
    id: 'government',
    icon: Building,
    nameEn: 'Greenists Government',
    nameAr: 'جرينستس الحكومية',
    color: '#800020',
    descEn: 'Official ceremonies, national celebrations, and diplomatic events',
    descAr: 'المراسم الرسمية والاحتفالات الوطنية والفعاليات الدبلوماسية',
    servicesEn: ['Official Ceremonies', 'National Celebrations', 'Diplomatic Events', 'Inauguration Events', 'State Dinners'],
    servicesAr: ['المراسم الرسمية', 'الاحتفالات الوطنية', 'الفعاليات الدبلوماسية', 'حفلات التدشين', 'العشاء الرسمي'],
  },
  {
    id: 'kids',
    icon: Baby,
    nameEn: 'Greenists Kids',
    nameAr: 'جرينستس للأطفال',
    color: '#FFD700',
    descEn: 'Children\'s parties, family events, and kid-friendly entertainment',
    descAr: 'حفلات الأطفال والفعاليات العائلية والترفيه المناسب للأطفال',
    servicesEn: ['Birthday Parties', 'Kids Festivals', 'Family Days', 'School Carnivals', 'Baby Showers'],
    servicesAr: ['حفلات أعياد الميلاد', 'مهرجانات الأطفال', 'الأيام العائلية', 'كرنفالات المدارس', 'حفلات المواليد'],
  },
  {
    id: 'entertainment',
    icon: Music,
    nameEn: 'Greenists Entertainment',
    nameAr: 'جرينستس للترفيه',
    color: '#8B00FF',
    descEn: 'Concerts, festivals, shows, and entertainment productions',
    descAr: 'الحفلات الموسيقية والمهرجانات والعروض والإنتاجات الترفيهية',
    servicesEn: ['Concerts', 'Festivals', 'Cultural Shows', 'Comedy Nights', 'Art Exhibitions'],
    servicesAr: ['الحفلات الموسيقية', 'المهرجانات', 'العروض الثقافية', 'ليالي الكوميديا', 'المعارض الفنية'],
  },
  {
    id: 'healthcare',
    icon: Stethoscope,
    nameEn: 'Greenists Healthcare',
    nameAr: 'جرينستس للصحة',
    color: '#008080',
    descEn: 'Medical conferences, hospital events, and healthcare seminars',
    descAr: 'المؤتمرات الطبية وفعاليات المستشفيات والندوات الصحية',
    servicesEn: ['Medical Conferences', 'Hospital Openings', 'Health Awareness', 'Medical Workshops', 'Pharmaceutical Events'],
    servicesAr: ['المؤتمرات الطبية', 'افتتاحات المستشفيات', 'التوعية الصحية', 'ورش العمل الطبية', 'فعاليات الأدوية'],
  },
  {
    id: 'construction',
    icon: HardHat,
    nameEn: 'Greenists Construction',
    nameAr: 'جرينستس للبناء',
    color: '#FF6600',
    descEn: 'Groundbreaking ceremonies, building inaugurations, and project launches',
    descAr: 'احتفالات وضع حجر الأساس وافتتاحات المباني وإطلاق المشاريع',
    servicesEn: ['Groundbreaking', 'Building Inaugurations', 'Project Launches', 'Safety Events', 'Milestone Celebrations'],
    servicesAr: ['وضع حجر الأساس', 'افتتاحات المباني', 'إطلاق المشاريع', 'فعاليات السلامة', 'احتفالات الإنجازات'],
  },
  {
    id: 'energy',
    icon: Fuel,
    nameEn: 'Greenists Energy',
    nameAr: 'جرينستس للطاقة',
    color: '#004E7C',
    descEn: 'Oil & gas sector events, energy conferences, and industrial gatherings',
    descAr: 'فعاليات قطاع النفط والغاز ومؤتمرات الطاقة والتجمعات الصناعية',
    servicesEn: ['Energy Conferences', 'Oil & Gas Events', 'Renewable Energy Forums', 'Industrial Exhibitions', 'Safety Seminars'],
    servicesAr: ['مؤتمرات الطاقة', 'فعاليات النفط والغاز', 'منتديات الطاقة المتجددة', 'المعارض الصناعية', 'ندوات السلامة'],
  },
  {
    id: 'travel',
    icon: Plane,
    nameEn: 'Greenists Travel',
    nameAr: 'جرينستس للسياحة',
    color: '#FF4500',
    descEn: 'Tourism events, travel exhibitions, and hospitality industry gatherings',
    descAr: 'فعاليات السياحة ومعارض السفر وتجمعات صناعة الضيافة',
    servicesEn: ['Tourism Exhibitions', 'Travel Fairs', 'Hotel Openings', 'Destination Events', 'Hospitality Awards'],
    servicesAr: ['معارض السياحة', 'معارض السفر', 'افتتاحات الفنادق', 'فعاليات الوجهات', 'جوائز الضيافة'],
  },
];

export default function SubBrands() {
  const { language } = useLanguage();
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2D7A4A] via-[#236339] to-[#1a4d2e] text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            {subBrands.slice(0, 6).map((brand, i) => (
              <div 
                key={brand.id}
                className="absolute w-20 h-20 rounded-full opacity-10"
                style={{ 
                  backgroundColor: brand.color,
                  top: `${10 + i * 15}%`,
                  left: `${5 + i * 15}%`,
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {language === 'ar' ? 'علاماتنا التجارية' : 'Our Sub-Brands'}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {language === 'ar' 
                ? '13 علامة تجارية متخصصة لخدمة كل قطاع باحترافية وتميز'
                : '13 specialized brands to serve every sector with professionalism and excellence'}
            </p>
          </div>
        </section>

        {/* Sub-Brands Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subBrands.map((brand) => (
                <Card 
                  key={brand.id}
                  className={`cursor-pointer transition-all duration-300 overflow-hidden ${
                    selectedBrand === brand.id 
                      ? 'ring-2 shadow-xl scale-[1.02]' 
                      : 'hover:shadow-lg hover:scale-[1.01]'
                  }`}
                  style={{ 
                    borderTop: `4px solid ${brand.color}`,
                    ...(selectedBrand === brand.id && { ringColor: brand.color })
                  }}
                  onClick={() => setSelectedBrand(selectedBrand === brand.id ? null : brand.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${brand.color}20` }}
                      >
                        <brand.icon className="w-7 h-7" style={{ color: brand.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900">
                          {language === 'ar' ? brand.nameAr : brand.nameEn}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {language === 'ar' ? brand.descAr : brand.descEn}
                        </p>
                      </div>
                    </div>
                    
                    {/* Expanded Services */}
                    {selectedBrand === brand.id && (
                      <div className="mt-6 pt-4 border-t">
                        <h4 className="font-medium text-sm text-gray-500 mb-3">
                          {language === 'ar' ? 'الخدمات:' : 'Services:'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {(language === 'ar' ? brand.servicesAr : brand.servicesEn).map((service, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 rounded-full text-xs font-medium"
                              style={{ 
                                backgroundColor: `${brand.color}15`,
                                color: brand.color
                              }}
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                        <Link href="/calculator">
                          <Button 
                            className="w-full mt-4 text-white"
                            style={{ backgroundColor: brand.color }}
                          >
                            {language === 'ar' ? 'احسب تكلفة فعاليتك' : 'Calculate Event Cost'}
                            <ArrowRight className="w-4 h-4 ms-2" />
                          </Button>
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#2D7A4A] to-[#236339] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'لم تجد ما تبحث عنه؟' : 'Didn\'t Find What You\'re Looking For?'}
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'نحن نقدم حلولاً مخصصة لأي نوع من الفعاليات. تواصل معنا لمناقشة احتياجاتك'
                : 'We offer customized solutions for any type of event. Contact us to discuss your needs'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#2D7A4A] hover:bg-gray-100">
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </Button>
              </Link>
              <Link href="/calculator">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  {language === 'ar' ? 'حاسبة الفعاليات' : 'Event Calculator'}
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
