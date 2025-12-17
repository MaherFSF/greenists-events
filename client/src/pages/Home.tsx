import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import CharacterShowcase from '@/components/CharacterShowcase';
import { 
  ArrowRight, ArrowLeft, Star, Users, Calendar, Award, Leaf, Heart, 
  Sparkles, Building2, GraduationCap, Baby, Music, MapPin, Phone, Mail, 
  CheckCircle2, Play, ChevronDown, Banknote, Stethoscope, Plane, Zap, 
  HardHat, Globe, Target, TrendingUp, Shield, Gem, Crown, Landmark,
  HeartHandshake, MessageCircle
} from 'lucide-react';

// Character data with their images and roles
const characters = [
  { 
    id: 'salim', 
    nameEn: 'Salim', 
    nameAr: 'سالم', 
    roleEn: 'Senior Advisor', 
    roleAr: 'المستشار الأول',
    image: '/mascots/salim-final.png',
    greetingEn: "Welcome! I'm here to guide you through our services.",
    greetingAr: "أهلاً وسهلاً! أنا هنا لمساعدتك في خدماتنا.",
    color: '#8B4513'
  },
  { 
    id: 'noor', 
    nameEn: 'Noor', 
    nameAr: 'نور', 
    roleEn: 'Business Expert', 
    roleAr: 'خبيرة الأعمال',
    image: '/mascots/noor-final.png',
    greetingEn: "Let me help you plan the perfect corporate event!",
    greetingAr: "دعيني أساعدك في تخطيط فعالية مؤسسية مثالية!",
    color: '#2D7A4A'
  },
  { 
    id: 'faris', 
    nameEn: 'Faris', 
    nameAr: 'فارس', 
    roleEn: 'Event Coordinator', 
    roleAr: 'منسق الفعاليات',
    image: '/mascots/faris-final.png',
    greetingEn: "Ready to coordinate your dream event!",
    greetingAr: "جاهز لتنسيق فعاليتك المثالية!",
    color: '#1E3A5F'
  },
  { 
    id: 'yasmin', 
    nameEn: 'Yasmin', 
    nameAr: 'ياسمين', 
    roleEn: 'Creative Designer', 
    roleAr: 'المصممة المبدعة',
    image: '/mascots/yasmin-final.png',
    greetingEn: "Let's create something beautiful together!",
    greetingAr: "لنصنع شيئاً جميلاً معاً!",
    color: '#C41E3A'
  },
  { 
    id: 'aden', 
    nameEn: 'Little Aden', 
    nameAr: 'عدن الصغير', 
    roleEn: 'Fun Ambassador', 
    roleAr: 'سفير المرح',
    image: '/mascots/little-aden-final.png',
    greetingEn: "Hi! Let's make your event super fun!",
    greetingAr: "مرحباً! لنجعل فعاليتك ممتعة جداً!",
    color: '#FF6B6B'
  },
];

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
  const [activeCharacter, setActiveCharacter] = useState(0);
  const [showSpeechBubble, setShowSpeechBubble] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const isRTL = language === 'ar';
  
  const tagline = isRTL 
    ? 'من عدن إلى العالم - نصنع فعاليات مستدامة لا تُنسى'
    : 'From Aden to the World - Creating Unforgettable Sustainable Events';

  // Auto-rotate characters
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCharacter(prev => (prev + 1) % characters.length);
      setShowSpeechBubble(true);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
      meetTeam: "Meet Our Team",
      meetTeamSub: "Your dedicated Adeni experts ready to serve you",
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
      talkTo: "Talk to",
    },
    ar: {
      heroTagline: "خبراء الفعاليات ومبتكرو الأعمال",
      meetTeam: "تعرف على فريقنا",
      meetTeamSub: "خبراء عدنيون متخصصون لخدمتك",
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
      talkTo: "تحدث مع",
    }
  };

  const t = content[language];
  const currentChar = characters[activeCharacter];

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* ========== HERO SECTION WITH ALL 5 CHARACTERS ========== */}
      <section 
        ref={heroRef}
        className="relative min-h-screen overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1810] via-[#0d1f17] to-[#1a3a2a]" />
          
          {/* Aden Skyline Silhouette */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-64 opacity-20"
            style={{
              background: 'linear-gradient(to top, #1a3a2a, transparent)',
              maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 200\'%3E%3Cpath d=\'M0,200 L0,150 L50,150 L50,100 L100,100 L100,80 L150,80 L150,120 L200,120 L200,60 L250,60 L250,90 L300,90 L300,70 L350,70 L350,110 L400,110 L400,50 L450,50 L450,100 L500,100 L500,80 L550,80 L550,130 L600,130 L600,40 L650,40 L650,90 L700,90 L700,60 L750,60 L750,100 L800,100 L800,70 L850,70 L850,120 L900,120 L900,50 L950,50 L950,110 L1000,110 L1000,80 L1050,80 L1050,140 L1100,140 L1100,90 L1150,90 L1150,150 L1200,150 L1200,200 Z\' fill=\'white\'/%3E%3C/svg%3E")',
              maskSize: 'cover',
              WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 200\'%3E%3Cpath d=\'M0,200 L0,150 L50,150 L50,100 L100,100 L100,80 L150,80 L150,120 L200,120 L200,60 L250,60 L250,90 L300,90 L300,70 L350,70 L350,110 L400,110 L400,50 L450,50 L450,100 L500,100 L500,80 L550,80 L550,130 L600,130 L600,40 L650,40 L650,90 L700,90 L700,60 L750,60 L750,100 L800,100 L800,70 L850,70 L850,120 L900,120 L900,50 L950,50 L950,110 L1000,110 L1000,80 L1050,80 L1050,140 L1100,140 L1100,90 L1150,90 L1150,150 L1200,150 L1200,200 Z\' fill=\'white\'/%3E%3C/svg%3E")',
              WebkitMaskSize: 'cover'
            }}
          />
          
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
          
          {/* Islamic geometric pattern overlay */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Hero Content with Characters */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10">
          {/* Top Section - Logo and Tagline */}
          <div 
            className="text-center mb-8"
            style={{ 
              transform: `translateY(${scrollY * 0.2}px)`,
              opacity: Math.max(0, 1 - scrollY * 0.002)
            }}
          >
            {/* Animated Logo with Sparkles */}
            <div className="relative inline-block mb-6">
              <img 
                src="/images/branding/official-logo.png" 
                alt="Greenists" 
                className="h-20 md:h-28 lg:h-36 mx-auto drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(45, 122, 74, 0.4))'
                }}
              />
              <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-amber-400 animate-pulse" />
              <Sparkles className="absolute -bottom-2 -left-6 w-6 h-6 text-amber-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent drop-shadow-lg">
                Green
              </span>
              <span className="text-white drop-shadow-lg">ists</span>
            </h1>

            {/* Animated Tagline */}
            <p className="text-lg md:text-xl lg:text-2xl text-amber-400 font-semibold mb-2">
              {t.heroTagline}
            </p>

            {/* Typewriter Effect */}
            <div className="h-12 mb-6 flex items-center justify-center">
              <p className="text-base md:text-lg lg:text-xl text-gray-300/90 max-w-2xl">
                {typedText}
                <span className={`inline-block w-0.5 h-5 bg-amber-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </p>
            </div>
          </div>

          {/* ========== ALL 5 CHARACTERS SHOWCASE ========== */}
          <div className="w-full max-w-7xl mx-auto mb-8">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-2">
              {t.meetTeam}
            </h2>
            <p className="text-center text-gray-400 mb-8">{t.meetTeamSub}</p>
            
            {/* Main Character Display */}
            <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
              {/* Left Characters (Salim, Noor) */}
              <div className="flex gap-4 lg:gap-8">
                {characters.slice(0, 2).map((char, idx) => (
                  <div 
                    key={char.id}
                    className={`relative cursor-pointer transition-all duration-500 ${activeCharacter === idx ? 'scale-110 z-20' : 'scale-90 opacity-70 hover:opacity-100 hover:scale-95'}`}
                    onClick={() => { setActiveCharacter(idx); setShowSpeechBubble(true); }}
                  >
                    <div 
                      className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 transition-all duration-300"
                      style={{ 
                        borderColor: activeCharacter === idx ? char.color : 'rgba(255,255,255,0.2)',
                        boxShadow: activeCharacter === idx ? `0 0 30px ${char.color}50` : 'none'
                      }}
                    >
                      <img 
                        src={char.image} 
                        alt={isRTL ? char.nameAr : char.nameEn}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-center text-white text-sm mt-2 font-medium">
                      {isRTL ? char.nameAr : char.nameEn}
                    </p>
                    <p className="text-center text-gray-400 text-xs">
                      {isRTL ? char.roleAr : char.roleEn}
                    </p>
                  </div>
                ))}
              </div>

              {/* Center - Active Character with Speech Bubble */}
              <div className="relative">
                {/* Speech Bubble */}
                {showSpeechBubble && (
                  <div 
                    className={`absolute -top-20 ${isRTL ? 'right-0' : 'left-0'} w-64 bg-white rounded-2xl p-4 shadow-2xl z-30 animate-fadeIn`}
                    style={{
                      animation: 'fadeIn 0.5s ease-out'
                    }}
                  >
                    <p className="text-gray-800 text-sm">
                      {isRTL ? currentChar.greetingAr : currentChar.greetingEn}
                    </p>
                    <div 
                      className={`absolute -bottom-3 ${isRTL ? 'right-8' : 'left-8'} w-6 h-6 bg-white transform rotate-45`}
                    />
                  </div>
                )}
                
                {/* Main Character Image */}
                <div 
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 transition-all duration-500"
                  style={{ 
                    borderColor: currentChar.color,
                    boxShadow: `0 0 60px ${currentChar.color}60, 0 0 100px ${currentChar.color}30`
                  }}
                >
                  <img 
                    src={currentChar.image} 
                    alt={isRTL ? currentChar.nameAr : currentChar.nameEn}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                {/* Character Name Badge */}
                <div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-white font-bold shadow-lg"
                  style={{ backgroundColor: currentChar.color }}
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    {t.talkTo} {isRTL ? currentChar.nameAr : currentChar.nameEn}
                  </span>
                </div>
              </div>

              {/* Right Characters (Faris, Yasmin, Little Aden) */}
              <div className="flex gap-4 lg:gap-8">
                {characters.slice(2).map((char, idx) => (
                  <div 
                    key={char.id}
                    className={`relative cursor-pointer transition-all duration-500 ${activeCharacter === idx + 2 ? 'scale-110 z-20' : 'scale-90 opacity-70 hover:opacity-100 hover:scale-95'}`}
                    onClick={() => { setActiveCharacter(idx + 2); setShowSpeechBubble(true); }}
                  >
                    <div 
                      className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 transition-all duration-300"
                      style={{ 
                        borderColor: activeCharacter === idx + 2 ? char.color : 'rgba(255,255,255,0.2)',
                        boxShadow: activeCharacter === idx + 2 ? `0 0 30px ${char.color}50` : 'none'
                      }}
                    >
                      <img 
                        src={char.image} 
                        alt={isRTL ? char.nameAr : char.nameEn}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-center text-white text-sm mt-2 font-medium">
                      {isRTL ? char.nameAr : char.nameEn}
                    </p>
                    <p className="text-center text-gray-400 text-xs">
                      {isRTL ? char.roleAr : char.roleEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Character Selection Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {characters.map((char, idx) => (
                <button
                  key={char.id}
                  onClick={() => { setActiveCharacter(idx); setShowSpeechBubble(true); }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeCharacter === idx ? 'scale-150' : 'opacity-50 hover:opacity-100'}`}
                  style={{ backgroundColor: char.color }}
                />
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                className="px-10 py-7 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                {t.heroSecondary}
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/50" />
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section 
        id="stats-section" 
        data-animate
        className="py-16 bg-gradient-to-b from-[#0d1f17] to-[#1a3a2a]"
      >
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${visibleSections.has('stats-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {t.stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative inline-block mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-10 h-10 text-amber-400" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} visible={visibleSections.has('stats-section')} />
                </div>
                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTORS SECTION ========== */}
      <section 
        id="sectors-section" 
        data-animate
        className="py-20 bg-gradient-to-b from-[#1a3a2a] to-[#0d1f17]"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('sectors-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.sectorsTitle}</h2>
            <p className="text-xl text-gray-400">{t.sectorsSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {sectors.map((sector, index) => (
              <Link key={sector.id} href={`/sectors/${sector.id}`}>
                <div 
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${visibleSections.has('sectors-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    aspectRatio: '1'
                  }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${sector.image})` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${sector.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
                    <sector.icon className="w-10 h-10 md:w-12 md:h-12 text-white mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {isRTL ? sector.nameAr : sector.nameEn}
                    </h3>
                  </div>
                  
                  {/* Hover Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ boxShadow: `inset 0 0 60px ${sector.color}` }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY GREENISTS SECTION ========== */}
      <section 
        id="why-section" 
        data-animate
        className="py-20 bg-gradient-to-b from-[#0d1f17] to-[#1a3a2a]"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('why-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.whyTitle}</h2>
            <p className="text-xl text-gray-400">{t.whySubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.whyItems.map((item, index) => (
              <div 
                key={index}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:scale-105 ${visibleSections.has('why-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VIDEO SECTION ========== */}
      <section 
        id="video-section" 
        data-animate
        className="py-20 bg-gradient-to-b from-[#1a3a2a] to-[#0d1f17]"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 ${visibleSections.has('video-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.videoTitle}</h2>
            <p className="text-xl text-gray-400">{t.videoSubtitle}</p>
          </div>
          
          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${visibleSections.has('video-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <video 
                className="w-full aspect-video object-cover"
                controls
                poster="/images/video-poster.jpg"
              >
                <source src="/videos/greenists-promo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== PACKAGES SECTION ========== */}
      <section 
        id="packages-section" 
        data-animate
        className="py-20 bg-gradient-to-b from-[#0d1f17] to-[#1a3a2a]"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('packages-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.packagesTitle}</h2>
            <p className="text-xl text-gray-400">{t.packagesSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.packages.map((pkg, index) => (
              <div 
                key={index}
                className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${visibleSections.has('packages-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${pkg.popular ? 'bg-gradient-to-br from-amber-500/20 to-yellow-600/20 border-2 border-amber-400/50' : 'bg-gradient-to-br from-white/5 to-white/10 border border-white/10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full text-white text-sm font-bold">
                    {isRTL ? 'الأكثر طلباً' : 'Most Popular'}
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-6`}>
                  <pkg.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-amber-400">${pkg.price}</span>
                  <span className="text-gray-400 text-sm ml-2">/ {pkg.priceYER} YER</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href="/calculator">
                  <Button 
                    className={`w-full py-6 rounded-xl font-bold transition-all duration-300 ${pkg.popular ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                  >
                    {isRTL ? 'احسب التكلفة' : 'Calculate Cost'}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CHARACTER SHOWCASE (DETAILED) ========== */}
      <CharacterShowcase />

      {/* ========== CTA SECTION ========== */}
      <section className="py-20 bg-gradient-to-b from-[#1a3a2a] to-[#0d1f17]">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto text-center p-12 rounded-3xl overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-amber-500/20 to-green-500/20 blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.ctaTitle}</h2>
              <p className="text-xl text-gray-300 mb-8">{t.ctaSubtitle}</p>
              
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="px-12 py-8 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold text-xl rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(212,175,55,0.5)]"
                >
                  {t.ctaButton}
                </Button>
              </Link>
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
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          25% { transform: translateY(-30px) rotate(90deg) scale(1.1); }
          50% { transform: translateY(-10px) rotate(180deg) scale(1); }
          75% { transform: translateY(-40px) rotate(270deg) scale(0.9); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
