import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { 
  ArrowRight, ArrowLeft, Star, Users, Calendar, Award, Leaf, Heart, 
  Sparkles, Building2, PartyPopper, Briefcase, GraduationCap, Baby,
  Music, MapPin, Phone, Mail, Clock, CheckCircle2, Play, ChevronDown,
  Banknote, Stethoscope, Building, Plane, Zap, HardHat, Laugh,
  Globe, Target, TrendingUp, Shield, Gem, Crown
} from 'lucide-react';

// Sector data with unique colors and icons
const sectors = [
  { id: 'corporate', nameEn: 'Corporate', nameAr: 'الشركات', icon: Building2, color: '#1E3A5F', gradient: 'from-[#1E3A5F] to-[#2E5A8F]' },
  { id: 'weddings', nameEn: 'Weddings', nameAr: 'الأعراس', icon: Heart, color: '#C41E3A', gradient: 'from-[#C41E3A] to-[#E91E63]' },
  { id: 'government', nameEn: 'Government', nameAr: 'الحكومة', icon: Building, color: '#1B4332', gradient: 'from-[#1B4332] to-[#2D6A4F]' },
  { id: 'healthcare', nameEn: 'Healthcare', nameAr: 'الصحة', icon: Stethoscope, color: '#0077B6', gradient: 'from-[#0077B6] to-[#00B4D8]' },
  { id: 'education', nameEn: 'Education', nameAr: 'التعليم', icon: GraduationCap, color: '#7B2CBF', gradient: 'from-[#7B2CBF] to-[#9D4EDD]' },
  { id: 'kids', nameEn: 'Kids', nameAr: 'الأطفال', icon: Baby, color: '#FF6B6B', gradient: 'from-[#FF6B6B] to-[#FFE66D]' },
  { id: 'banking', nameEn: 'Banking', nameAr: 'البنوك', icon: Banknote, color: '#0A4D68', gradient: 'from-[#0A4D68] to-[#088395]' },
  { id: 'ngo', nameEn: 'NGO', nameAr: 'المنظمات', icon: Globe, color: '#2D7A4A', gradient: 'from-[#2D7A4A] to-[#52B788]' },
  { id: 'entertainment', nameEn: 'Entertainment', nameAr: 'الترفيه', icon: Laugh, color: '#FF006E', gradient: 'from-[#FF006E] to-[#FB5607]' },
  { id: 'construction', nameEn: 'Construction', nameAr: 'البناء', icon: HardHat, color: '#E85D04', gradient: 'from-[#E85D04] to-[#FAA307]' },
  { id: 'energy', nameEn: 'Energy', nameAr: 'الطاقة', icon: Zap, color: '#023E8A', gradient: 'from-[#023E8A] to-[#0077B6]' },
  { id: 'travel', nameEn: 'Travel', nameAr: 'السياحة', icon: Plane, color: '#006D77', gradient: 'from-[#006D77] to-[#83C5BE]' },
  { id: 'condolences', nameEn: 'Condolences', nameAr: 'العزاء', icon: Heart, color: '#495057', gradient: 'from-[#495057] to-[#6C757D]' },
];

// Hero images
const heroImages = [
  '/images/aden-skyline.png',
  '/images/yemen-wedding.png',
  '/images/corporate-event.png',
  '/images/branding/greenists_billboard_design(2).png',
];

// Animated counter component
const AnimatedCounter = ({ value, suffix = '' }: { value: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [numericValue]);
  
  return <span>{count}{value.includes('+') ? '+' : ''}{suffix}</span>;
};

export default function Home() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const content = {
    en: {
      heroTagline: "Events Experts & Business Innovators",
      heroSubtitle: "From Aden to the World - Creating Unforgettable Sustainable Events",
      heroCTA: "Plan Your Event",
      heroSecondary: "Explore Sectors",
      stats: [
        { value: "500+", label: "Events Delivered", icon: Calendar },
        { value: "50+", label: "Corporate Partners", icon: Building2 },
        { value: "10+", label: "Years Excellence", icon: Award },
        { value: "98%", label: "Client Satisfaction", icon: Heart },
      ],
      sectorsTitle: "Specialized Sectors",
      sectorsSubtitle: "Dedicated expertise for every industry",
      whyTitle: "Why Choose Greenists?",
      whySubtitle: "The difference is in the details",
      whyItems: [
        { icon: Leaf, title: "Sustainable Events", desc: "ISO 20121 certified eco-friendly practices" },
        { icon: Target, title: "Precision Planning", desc: "Every detail meticulously crafted" },
        { icon: Shield, title: "Trusted Partner", desc: "Government & corporate approved" },
        { icon: TrendingUp, title: "ROI Focused", desc: "Events that deliver measurable results" },
      ],
      packagesTitle: "Event Packages",
      packagesSubtitle: "Tailored solutions for every budget",
      packages: [
        { name: "Essential", price: "$500", priceYER: "850K YER", features: ["50 guests", "Basic setup", "4 hours"], icon: Star },
        { name: "Silver", price: "$1,500", priceYER: "2.5M YER", features: ["150 guests", "Premium setup", "6 hours"], icon: Award },
        { name: "Gold", price: "$3,500", priceYER: "6M YER", features: ["300 guests", "Luxury setup", "8 hours"], icon: Crown, popular: true },
        { name: "Diamond", price: "$7,000+", priceYER: "12M+ YER", features: ["Unlimited", "Bespoke", "Multi-day"], icon: Gem },
      ],
      videoTitle: "See Our Magic",
      videoSubtitle: "Watch how we transform visions into reality",
      ctaTitle: "Ready to Create Something Amazing?",
      ctaSubtitle: "Let's bring your vision to life together",
      ctaButton: "Get Free Consultation",
    },
    ar: {
      heroTagline: "خبراء الفعاليات ومبتكرو الأعمال",
      heroSubtitle: "من عدن إلى العالم - نصنع فعاليات مستدامة لا تُنسى",
      heroCTA: "خطط لفعاليتك",
      heroSecondary: "استكشف القطاعات",
      stats: [
        { value: "500+", label: "فعالية منفذة", icon: Calendar },
        { value: "50+", label: "شريك مؤسسي", icon: Building2 },
        { value: "10+", label: "سنوات تميز", icon: Award },
        { value: "98%", label: "رضا العملاء", icon: Heart },
      ],
      sectorsTitle: "القطاعات المتخصصة",
      sectorsSubtitle: "خبرة مخصصة لكل صناعة",
      whyTitle: "لماذا جرينستس؟",
      whySubtitle: "الفرق في التفاصيل",
      whyItems: [
        { icon: Leaf, title: "فعاليات مستدامة", desc: "ممارسات صديقة للبيئة معتمدة ISO 20121" },
        { icon: Target, title: "تخطيط دقيق", desc: "كل تفصيلة مصممة بعناية" },
        { icon: Shield, title: "شريك موثوق", desc: "معتمد من الحكومة والشركات" },
        { icon: TrendingUp, title: "عائد استثمار", desc: "فعاليات تحقق نتائج قابلة للقياس" },
      ],
      packagesTitle: "باقات الفعاليات",
      packagesSubtitle: "حلول مخصصة لكل ميزانية",
      packages: [
        { name: "الأساسية", price: "$500", priceYER: "850K YER", features: ["50 ضيف", "إعداد أساسي", "4 ساعات"], icon: Star },
        { name: "الفضية", price: "$1,500", priceYER: "2.5M YER", features: ["150 ضيف", "إعداد مميز", "6 ساعات"], icon: Award },
        { name: "الذهبية", price: "$3,500", priceYER: "6M YER", features: ["300 ضيف", "إعداد فاخر", "8 ساعات"], icon: Crown, popular: true },
        { name: "الماسية", price: "$7,000+", priceYER: "12M+ YER", features: ["بلا حدود", "حسب الطلب", "متعدد الأيام"], icon: Gem },
      ],
      videoTitle: "شاهد إبداعاتنا",
      videoSubtitle: "اكتشف كيف نحول الرؤى إلى حقيقة",
      ctaTitle: "مستعد لصنع شيء مذهل؟",
      ctaSubtitle: "دعنا نحول رؤيتك إلى واقع معاً",
      ctaButton: "احصل على استشارة مجانية",
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Hero Section - Cinematic Full Screen */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slideshow */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Logo */}
              <div className="mb-8 animate-fade-in">
                <img 
                  src="/images/branding/greenists_logo_variations_sheet2(1).png" 
                  alt="Greenists" 
                  className="h-24 md:h-32 mx-auto object-contain"
                />
              </div>
              
              {/* Tagline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
                <span className="text-[#2D7A4A]">Green</span>
                <span className="text-white">ists</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#D4AF37] font-semibold mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {t.heroTagline}
              </p>
              
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
                {t.heroSubtitle}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <Link href="/calculator">
                  <Button size="lg" className="bg-[#2D7A4A] hover:bg-[#236339] text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-[#2D7A4A]/50 transition-all transform hover:scale-105">
                    {t.heroCTA}
                    {isRTL ? <ArrowLeft className="ml-2 h-5 w-5" /> : <ArrowRight className="mr-2 h-5 w-5" />}
                  </Button>
                </Link>
                <Link href="/sectors">
                  <Button size="lg" variant="outline" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-6 text-lg rounded-full transition-all">
                    {t.heroSecondary}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'w-12 h-3 bg-[#D4AF37]' 
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce z-10">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Stats Section - Floating Cards */}
      <section className="relative -mt-20 z-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {t.stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:-translate-y-2 transition-all duration-300 border-b-4 border-[#2D7A4A]"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-[#D4AF37]" />
                <div className="text-3xl md:text-4xl font-bold text-[#2D7A4A] mb-1">
                  <AnimatedCounter value={stat.value} />
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Grid - Hexagonal Design */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.sectorsTitle}</h2>
            <p className="text-xl text-gray-600">{t.sectorsSubtitle}</p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {sectors.map((sector, index) => (
              <Link key={sector.id} href={`/sectors/${sector.id}`}>
                <div 
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${sector.gradient} p-6 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  <sector.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-1">
                    {language === 'ar' ? sector.nameAr : sector.nameEn}
                  </h3>
                  <ArrowRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity ${isRTL ? 'rotate-180' : ''}`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.whyTitle}</h2>
            <p className="text-xl text-gray-600">{t.whySubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyItems.map((item, index) => (
              <div 
                key={index}
                className="group p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#2D7A4A] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#2D7A4A]/10 flex items-center justify-center mb-6 group-hover:bg-[#2D7A4A] transition-colors">
                  <item.icon className="w-8 h-8 text-[#2D7A4A] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - Cinematic */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.videoTitle}</h2>
            <p className="text-xl text-gray-400">{t.videoSubtitle}</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <video 
                ref={videoRef}
                className="w-full aspect-video object-cover"
                poster="/images/video/hero-scene.png"
                controls={isVideoPlaying}
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.play();
                    setIsVideoPlaying(true);
                  }
                }}
              >
                <source src="/videos/greenists-promo.mp4" type="video/mp4" />
              </video>
              
              {!isVideoPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer group-hover:bg-black/40 transition-colors"
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.play();
                      setIsVideoPlaying(true);
                    }
                  }}
                >
                  <div className="w-24 h-24 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-white ml-2" fill="white" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section - Premium Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.packagesTitle}</h2>
            <p className="text-xl text-gray-600">{t.packagesSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {t.packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative rounded-3xl p-8 ${
                  pkg.popular 
                    ? 'bg-gradient-to-br from-[#2D7A4A] to-[#1B5E20] text-white shadow-2xl scale-105 z-10' 
                    : 'bg-white border border-gray-200 hover:border-[#2D7A4A] hover:shadow-xl'
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-black text-sm font-bold px-4 py-1 rounded-full">
                    {language === 'ar' ? 'الأكثر طلباً' : 'Most Popular'}
                  </div>
                )}
                
                <pkg.icon className={`w-12 h-12 mb-4 ${pkg.popular ? 'text-[#D4AF37]' : 'text-[#2D7A4A]'}`} />
                
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                
                <div className="mb-6">
                  <span className={`text-3xl font-bold ${pkg.popular ? 'text-[#D4AF37]' : 'text-[#2D7A4A]'}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-sm block ${pkg.popular ? 'text-white/70' : 'text-gray-500'}`}>
                    {pkg.priceYER}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-5 h-5 ${pkg.popular ? 'text-[#D4AF37]' : 'text-[#2D7A4A]'}`} />
                      <span className={pkg.popular ? 'text-white/90' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/calculator">
                  <Button 
                    className={`w-full rounded-full py-6 ${
                      pkg.popular 
                        ? 'bg-[#D4AF37] hover:bg-[#C9A227] text-black' 
                        : 'bg-[#2D7A4A] hover:bg-[#236339] text-white'
                    }`}
                  >
                    {language === 'ar' ? 'احسب التكلفة' : 'Calculate Cost'}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets Showcase */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              {language === 'ar' ? 'هويتنا المؤسسية' : 'Our Brand Identity'}
            </h2>
            <p className="text-gray-400">
              {language === 'ar' ? 'تصميم احترافي يعكس قيمنا' : 'Professional design reflecting our values'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/images/branding/greenists_card_ceo_luxury(10).png" alt="Business Card" className="rounded-xl hover:scale-105 transition-transform" />
            <img src="/images/branding/greenists_folder_updated(7).png" alt="Folder" className="rounded-xl hover:scale-105 transition-transform" />
            <img src="/images/branding/greenists_tote_bag(5).png" alt="Tote Bag" className="rounded-xl hover:scale-105 transition-transform" />
            <img src="/images/branding/greenists_card_consultant_elegant(2).png" alt="Consultant Card" className="rounded-xl hover:scale-105 transition-transform" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2D7A4A] via-[#236339] to-[#1B4D2E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.ctaTitle}</h2>
            <p className="text-xl text-white/80 mb-10">{t.ctaSubtitle}</p>
            
            <Link href="/contact">
              <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C9A227] text-black px-12 py-6 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all">
                {t.ctaButton}
                {isRTL ? <ArrowLeft className="ml-2 h-5 w-5" /> : <ArrowRight className="mr-2 h-5 w-5" />}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <a href="tel:+967773673918" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <Phone className="w-5 h-5" />
              <span>+967 773 673 918</span>
            </a>
            <a href="mailto:info@greenists-events.com" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <Mail className="w-5 h-5" />
              <span>info@greenists-events.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
              <span>{language === 'ar' ? 'بجانب فندق ريلاكس، خور مكسر، عدن' : 'Beside Relax Hotel, Khormaksar, Aden'}</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
