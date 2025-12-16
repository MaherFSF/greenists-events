import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { 
  ArrowRight, ArrowLeft, Star, Users, Calendar, Award, Leaf, Heart, 
  Sparkles, Building2, GraduationCap, Baby, Music, MapPin, Phone, Mail, 
  CheckCircle2, Play, ChevronDown, Banknote, Stethoscope, Plane, Zap, 
  HardHat, Globe, Target, TrendingUp, Shield, Gem, Crown, Landmark,
  HeartHandshake
} from 'lucide-react';

// Sector data with unique colors
const sectors = [
  { id: 'corporate', nameEn: 'Corporate', nameAr: 'الشركات', icon: Building2, color: '#1E3A5F', gradient: 'from-[#1E3A5F] to-[#2E5A8F]', image: '/images/event-types/corporate-event.png' },
  { id: 'weddings', nameEn: 'Weddings', nameAr: 'الأعراس', icon: Heart, color: '#C41E3A', gradient: 'from-[#C41E3A] to-[#E91E63]', image: '/images/event-types/wedding-event.png' },
  { id: 'government', nameEn: 'Government', nameAr: 'الحكومة', icon: Landmark, color: '#1B4332', gradient: 'from-[#1B4332] to-[#2D6A4F]', image: '/images/event-types/government-event.png' },
  { id: 'healthcare', nameEn: 'Healthcare', nameAr: 'الصحة', icon: Stethoscope, color: '#0077B6', gradient: 'from-[#0077B6] to-[#00B4D8]', image: '/images/event-types/healthcare-event.png' },
  { id: 'education', nameEn: 'Education', nameAr: 'التعليم', icon: GraduationCap, color: '#7B2CBF', gradient: 'from-[#7B2CBF] to-[#9D4EDD]', image: '/images/event-types/education-event.png' },
  { id: 'kids', nameEn: 'Kids', nameAr: 'الأطفال', icon: Baby, color: '#FF6B6B', gradient: 'from-[#FF6B6B] to-[#FFE66D]', image: '/images/event-types/kids-event.png' },
  { id: 'banking', nameEn: 'Banking', nameAr: 'البنوك', icon: Banknote, color: '#0A4D68', gradient: 'from-[#0A4D68] to-[#088395]', image: '/images/event-types/banking-event.png' },
  { id: 'ngo', nameEn: 'NGO', nameAr: 'المنظمات', icon: Globe, color: '#2D7A4A', gradient: 'from-[#2D7A4A] to-[#52B788]', image: '/images/sectors/ngo-yemen.png' },
  { id: 'entertainment', nameEn: 'Entertainment', nameAr: 'الترفيه', icon: Music, color: '#FF006E', gradient: 'from-[#FF006E] to-[#FB5607]', image: '/images/event-types/entertainment-event.png' },
  { id: 'construction', nameEn: 'Construction', nameAr: 'البناء', icon: HardHat, color: '#E85D04', gradient: 'from-[#E85D04] to-[#FAA307]', image: '/images/sectors/construction-yemen.png' },
  { id: 'energy', nameEn: 'Energy', nameAr: 'الطاقة', icon: Zap, color: '#023E8A', gradient: 'from-[#023E8A] to-[#0077B6]', image: '/images/sectors/energy-yemen.png' },
  { id: 'travel', nameEn: 'Travel', nameAr: 'السياحة', icon: Plane, color: '#006D77', gradient: 'from-[#006D77] to-[#83C5BE]', image: '/images/sectors/travel-yemen.png' },
  { id: 'condolences', nameEn: 'Condolences', nameAr: 'العزاء', icon: HeartHandshake, color: '#495057', gradient: 'from-[#495057] to-[#6C757D]', image: '/images/sectors/condolences-yemen.png' },
];

// Animated counter component
const AnimatedCounter = ({ value, suffix = '', visible }: { value: number; suffix?: string; visible: boolean }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!visible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value, visible]);
  
  return <span>{count}{suffix}</span>;
};

export default function Home() {
  const { language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const isRTL = language === 'ar';
  
  const tagline = isRTL 
    ? 'من عدن إلى العالم - نصنع فعاليات مستدامة لا تُنسى'
    : 'From Aden to the World - Creating Unforgettable Sustainable Events';

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    setTypedText('');
    const timer = setInterval(() => {
      if (index <= tagline.length) {
        setTypedText(tagline.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, [tagline]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => {
              const newSet = new Set(prev);
              newSet.add(entry.target.id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const content = {
    en: {
      heroTagline: "Event Experts & Business Innovators",
      stats: [
        { value: 500, suffix: '+', label: "Events Delivered", icon: Calendar },
        { value: 50, suffix: '+', label: "Corporate Partners", icon: Building2 },
        { value: 10, suffix: '+', label: "Years Excellence", icon: Award },
        { value: 98, suffix: '%', label: "Client Satisfaction", icon: Heart },
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
        { name: "Essential", price: 500, priceYER: "850K", features: ["50 guests", "Basic setup", "4 hours"], icon: Star, color: 'from-slate-500 to-slate-600' },
        { name: "Silver", price: 1500, priceYER: "2.5M", features: ["150 guests", "Premium setup", "6 hours"], icon: Award, color: 'from-slate-400 to-slate-500' },
        { name: "Gold", price: 3500, priceYER: "6M", features: ["300 guests", "Luxury setup", "8 hours"], icon: Crown, popular: true, color: 'from-amber-500 to-yellow-600' },
        { name: "Diamond", price: 7000, priceYER: "12M+", features: ["Unlimited", "Bespoke", "Multi-day"], icon: Gem, color: 'from-cyan-400 to-blue-500' },
      ],
      videoTitle: "See Our Magic",
      videoSubtitle: "Watch how we transform visions into reality",
      ctaTitle: "Ready to Create Something Amazing?",
      ctaSubtitle: "Let's bring your vision to life together",
      ctaButton: "Get Free Consultation",
      heroCTA: "Plan Your Event",
      heroSecondary: "Explore Sectors",
    },
    ar: {
      heroTagline: "خبراء الفعاليات ومبتكرو الأعمال",
      stats: [
        { value: 500, suffix: '+', label: "فعالية منفذة", icon: Calendar },
        { value: 50, suffix: '+', label: "شريك مؤسسي", icon: Building2 },
        { value: 10, suffix: '+', label: "سنوات تميز", icon: Award },
        { value: 98, suffix: '%', label: "رضا العملاء", icon: Heart },
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
        { name: "الأساسية", price: 500, priceYER: "850K", features: ["50 ضيف", "إعداد أساسي", "4 ساعات"], icon: Star, color: 'from-slate-500 to-slate-600' },
        { name: "الفضية", price: 1500, priceYER: "2.5M", features: ["150 ضيف", "إعداد مميز", "6 ساعات"], icon: Award, color: 'from-slate-400 to-slate-500' },
        { name: "الذهبية", price: 3500, priceYER: "6M", features: ["300 ضيف", "إعداد فاخر", "8 ساعات"], icon: Crown, popular: true, color: 'from-amber-500 to-yellow-600' },
        { name: "الماسية", price: 7000, priceYER: "12M+", features: ["بلا حدود", "حسب الطلب", "متعدد الأيام"], icon: Gem, color: 'from-cyan-400 to-blue-500' },
      ],
      videoTitle: "شاهد إبداعاتنا",
      videoSubtitle: "اكتشف كيف نحول الرؤى إلى حقيقة",
      ctaTitle: "مستعد لصنع شيء مذهل؟",
      ctaSubtitle: "دعنا نحول رؤيتك إلى واقع معاً",
      ctaButton: "احصل على استشارة مجانية",
      heroCTA: "خطط لفعاليتك",
      heroSecondary: "استكشف القطاعات",
    }
  };

  const t = content[language];

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* ========== MAGICAL HERO SECTION ========== */}
      <section 
        ref={heroRef}
        className="relative min-h-screen overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1810] via-[#0d1f17] to-[#1a3a2a]" />
          
          {/* Animated gradient orbs */}
          <div 
            className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #2D7A4A 0%, transparent 70%)',
              top: '10%',
              left: '20%',
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              transition: 'transform 0.3s ease-out',
              animation: 'pulse 6s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
              bottom: '20%',
              right: '10%',
              transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
              transition: 'transform 0.3s ease-out',
              animation: 'pulse 8s ease-in-out infinite alternate'
            }}
          />
          
          {/* Floating particles */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
          
          {/* Floating leaves */}
          {[...Array(10)].map((_, i) => (
            <Leaf
              key={`leaf-${i}`}
              className="absolute text-green-500/15 w-8 h-8"
              style={{
                left: `${5 + Math.random() * 90}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatLeaf ${20 + Math.random() * 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 10}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
          
          {/* Decorative geometric shapes */}
          <div 
            className="absolute top-32 left-16 w-40 h-40 border border-amber-400/20 rounded-full opacity-30"
            style={{ transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)` }}
          />
          <div 
            className="absolute bottom-40 right-24 w-32 h-32 border border-green-400/20 rotate-45 opacity-30"
            style={{ transform: `translate(${-mousePosition.x * 0.6}px, ${-mousePosition.y * 0.6}px)` }}
          />
          <div 
            className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/10 rounded-lg rotate-12 opacity-20"
            style={{ transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)` }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
          <div 
            className="text-center max-w-5xl mx-auto"
            style={{ 
              transform: `translateY(${scrollY * 0.2}px)`,
              opacity: Math.max(0, 1 - scrollY * 0.002)
            }}
          >
            {/* Animated Logo with Sparkles */}
            <div className="relative inline-block mb-8">
              <img 
                src="/images/branding/official-logo.png" 
                alt="Greenists" 
                className="h-24 md:h-32 lg:h-40 mx-auto drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(45, 122, 74, 0.4))'
                }}
              />
              <Sparkles className="absolute -top-4 -right-4 w-10 h-10 text-amber-400 animate-pulse" />
              <Sparkles className="absolute -bottom-2 -left-6 w-7 h-7 text-amber-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Sparkles className="absolute top-1/2 -right-8 w-5 h-5 text-green-400 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Main Title with Gradient */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent drop-shadow-lg">
                Green
              </span>
              <span className="text-white drop-shadow-lg">ists</span>
            </h1>

            {/* Animated Tagline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-amber-400 font-semibold mb-4">
              {t.heroTagline}
            </p>

            {/* Typewriter Effect */}
            <div className="h-16 mb-10 flex items-center justify-center">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300/90 max-w-3xl">
                {typedText}
                <span className={`inline-block w-0.5 h-6 bg-amber-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </p>
            </div>

            {/* CTA Buttons with Glow Effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/calculator">
                <Button 
                  size="lg" 
                  className="group relative px-10 py-7 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(212,175,55,0.5)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t.heroCTA}
                    {isRTL ? <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </span>
                </Button>
              </Link>
              
              <Link href="/sectors">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-10 py-7 border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 font-bold text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(45,122,74,0.3)]"
                >
                  {t.heroSecondary}
                </Button>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <ChevronDown className="w-10 h-10 text-gray-400/60 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section 
        id="stats-section"
        data-animate
        className={`relative py-24 bg-gradient-to-b from-[#0d1f17] to-[#1a3a2a] transition-all duration-1000 ${visibleSections.has('stats-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {t.stats.map((stat, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-amber-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2">
                  <stat.icon className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} visible={visibleSections.has('stats-section')} />
                  </div>
                  <p className="text-gray-400 text-lg">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTORS SECTION ========== */}
      <section 
        id="sectors-section"
        data-animate
        className={`py-24 bg-gradient-to-b from-[#1a3a2a] to-gray-900 transition-all duration-1000 ${visibleSections.has('sectors-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{t.sectorsTitle}</h2>
            <p className="text-xl text-gray-400">{t.sectorsSubtitle}</p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mt-8 rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {sectors.map((sector, index) => (
              <Link key={sector.id} href={`/sectors/${sector.id}`}>
                <div 
                  className="group relative cursor-pointer"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500`} />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-white/30 group-hover:transform group-hover:scale-105 group-hover:-translate-y-3">
                    {/* Image */}
                    <div className="h-32 md:h-40 overflow-hidden">
                      <img 
                        src={sector.image} 
                        alt={sector.nameEn}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${sector.gradient} opacity-60`} />
                    </div>
                    {/* Content */}
                    <div className="p-4 text-center relative">
                      <div className={`w-14 h-14 mx-auto -mt-10 mb-3 rounded-xl bg-gradient-to-br ${sector.gradient} flex items-center justify-center transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg`}>
                        <sector.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-lg">
                        {isRTL ? sector.nameAr : sector.nameEn}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section 
        id="why-section"
        data-animate
        className={`py-24 bg-gray-900 transition-all duration-1000 ${visibleSections.has('why-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{t.whyTitle}</h2>
            <p className="text-xl text-gray-400">{t.whySubtitle}</p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-green-500 mx-auto mt-8 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyItems.map((item, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-amber-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-green-400/50 transition-all duration-500 hover:transform hover:scale-105 h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VIDEO SECTION ========== */}
      <section 
        id="video-section"
        data-animate
        className={`py-24 bg-gradient-to-b from-gray-900 to-[#0d1f17] transition-all duration-1000 ${visibleSections.has('video-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.videoTitle}</h2>
            <p className="text-xl text-gray-400">{t.videoSubtitle}</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/30 via-amber-500/30 to-green-500/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-amber-400/30 transition-colors">
                <video 
                  className="w-full aspect-video object-cover"
                  poster="/images/hero/aden-event-hero.png"
                  controls
                  playsInline
                >
                  <source src="/videos/greenists-hero.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PACKAGES SECTION ========== */}
      <section 
        id="packages-section"
        data-animate
        className={`py-24 bg-[#0d1f17] transition-all duration-1000 ${visibleSections.has('packages-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{t.packagesTitle}</h2>
            <p className="text-xl text-gray-400">{t.packagesSubtitle}</p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mt-8 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative group ${pkg.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm font-bold rounded-full shadow-lg shadow-amber-500/30">
                      {isRTL ? 'الأكثر طلباً' : 'Most Popular'}
                    </span>
                  </div>
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                
                <div className={`relative h-full bg-white/5 backdrop-blur-sm border ${pkg.popular ? 'border-amber-400/50' : 'border-white/10'} rounded-2xl p-8 transition-all duration-500 group-hover:border-white/30 group-hover:transform group-hover:scale-[1.02] overflow-hidden`}>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <div className={`w-14 h-14 mx-auto mb-6 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center`}>
                    <pkg.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 text-center bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                    {pkg.name}
                  </h3>
                  
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-white">${pkg.price.toLocaleString()}</span>
                    <span className="text-gray-400 text-lg block mt-1">{pkg.priceYER} YER</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/calculator">
                    <Button className={`w-full py-6 rounded-xl font-bold transition-all duration-300 ${pkg.popular ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                      {isRTL ? 'احسب التكلفة' : 'Calculate Cost'}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section 
        id="cta-section"
        data-animate
        className={`py-24 bg-gradient-to-b from-[#0d1f17] to-[#1a3a2a] transition-all duration-1000 ${visibleSections.has('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-amber-500/30 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-[#1a3a2a] to-[#0d1f17] border border-white/10 rounded-3xl p-12 md:p-16 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {t.ctaTitle}
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-10">
                  {t.ctaSubtitle}
                </p>
                
                <Link href="/contact">
                  <Button 
                    size="lg"
                    className="px-12 py-8 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold text-xl rounded-full hover:scale-105 transition-all duration-300 hover:shadow-[0_0_50px_rgba(212,175,55,0.5)]"
                  >
                    {t.ctaButton}
                  </Button>
                </Link>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10 text-gray-300">
                  <a href="tel:+967773673918" className="flex items-center gap-2 hover:text-amber-400 transition-colors text-lg">
                    <Phone className="w-5 h-5" />
                    <span dir="ltr">+967 773 673 918</span>
                  </a>
                  <a href="mailto:info@greenists-events.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors text-lg">
                    <Mail className="w-5 h-5" />
                    <span>info@greenists-events.com</span>
                  </a>
                </div>
                
                <div className="mt-8 flex items-center justify-center gap-2 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>
                    {isRTL ? 'بجانب فندق ريلاكس، خور مكسر، عدن' : 'Next to Relax Hotel, Khor Maksar, Aden'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes floatLeaf {
          0% { transform: translateY(0) rotate(0deg) translateX(0); }
          25% { transform: translateY(-30px) rotate(90deg) translateX(20px); }
          50% { transform: translateY(-10px) rotate(180deg) translateX(-10px); }
          75% { transform: translateY(-40px) rotate(270deg) translateX(15px); }
          100% { transform: translateY(0) rotate(360deg) translateX(0); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
