import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { 
  ArrowLeft, ArrowRight, Star, Users, Calendar, Award, Leaf, Heart, 
  Sparkles, Building2, PartyPopper, Briefcase, GraduationCap, Baby,
  Music, Utensils, Camera, Flower2, MapPin, Phone, Mail, Clock,
  CheckCircle2, Play, ChevronDown
} from 'lucide-react';

// Content data
const content = {
  en: {
    heroTagline: "Events Experts & Business Innovators",
    heroSubtitle: "From Aden to the World - Creating Unforgettable Moments Since 2015",
    heroCTA: "Plan Your Event",
    heroSecondary: "Explore Our Work",
    
    // Adeni greeting
    greeting: "Ahlan wa Sahlan! Welcome to Greenists",
    greetingSubtitle: "Where Yemeni hospitality meets world-class event management",
    
    // Stats
    stats: [
      { value: "500+", label: "Events Delivered", icon: Calendar },
      { value: "50+", label: "Corporate Clients", icon: Building2 },
      { value: "10+", label: "Years Experience", icon: Award },
      { value: "98%", label: "Client Satisfaction", icon: Heart },
    ],
    
    // About section
    aboutTitle: "Why Greenists?",
    aboutSubtitle: "We're not just event planners - we're storytellers who bring your vision to life",
    aboutText: "Born in the heart of Aden, Greenists combines the warmth of Yemeni hospitality with international standards of excellence. Our team of passionate professionals understands the unique cultural nuances that make every celebration special in our beloved Yemen.",
    
    // Mission & Vision
    missionTitle: "Our Mission",
    missionText: "To transform every event into an unforgettable experience that honors our rich Yemeni heritage while embracing innovation and sustainability.",
    visionTitle: "Our Vision",
    visionText: "To be the leading sustainable event management company in Yemen and the Arabian Peninsula, setting new standards for excellence, creativity, and environmental responsibility.",
    
    // Values
    valuesTitle: "Our Values",
    values: [
      { icon: Leaf, title: "Sustainability", text: "Eco-friendly practices in every event" },
      { icon: Heart, title: "Hospitality", text: "Authentic Yemeni warmth and care" },
      { icon: Sparkles, title: "Excellence", text: "World-class standards, local expertise" },
      { icon: Users, title: "Inclusivity", text: "Events for everyone, by everyone" },
    ],
    
    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive event solutions for every occasion",
    services: [
      { icon: PartyPopper, title: "Weddings", titleAr: "الأعراس", desc: "Traditional & modern Yemeni weddings", color: "#E91E63" },
      { icon: Building2, title: "Corporate", titleAr: "الشركات", desc: "Conferences, launches & seminars", color: "#2196F3" },
      { icon: Briefcase, title: "Government", titleAr: "الحكومة", desc: "Official ceremonies & state events", color: "#4CAF50" },
      { icon: GraduationCap, title: "Education", titleAr: "التعليم", desc: "Graduations & academic events", color: "#FF9800" },
      { icon: Baby, title: "Family", titleAr: "العائلة", desc: "Baby showers, birthdays & more", color: "#9C27B0" },
      { icon: Heart, title: "Condolences", titleAr: "العزاء", desc: "Dignified memorial services", color: "#607D8B" },
    ],
    
    // Packages
    packagesTitle: "Event Packages",
    packagesSubtitle: "Choose the perfect package for your celebration",
    packages: [
      { 
        name: "Essential", nameAr: "الأساسية",
        price: "500", priceYER: "850,000",
        desc: "Perfect for intimate gatherings",
        features: ["Up to 50 guests", "Basic decoration", "Sound system", "Event coordinator", "4-hour duration"],
        color: "#78909C"
      },
      { 
        name: "Silver", nameAr: "الفضية",
        price: "1,500", priceYER: "2,550,000",
        desc: "Ideal for medium celebrations",
        features: ["Up to 150 guests", "Premium decoration", "Full AV setup", "Catering included", "Photography", "6-hour duration"],
        color: "#9E9E9E",
        popular: false
      },
      { 
        name: "Gold", nameAr: "الذهبية",
        price: "3,500", priceYER: "5,950,000",
        desc: "For memorable occasions",
        features: ["Up to 300 guests", "Luxury decoration", "Live entertainment", "Full catering", "Photo & video", "Kids corner", "8-hour duration"],
        color: "#D4AF37",
        popular: true
      },
      { 
        name: "Diamond", nameAr: "الماسية",
        price: "7,000+", priceYER: "11,900,000+",
        desc: "Ultimate luxury experience",
        features: ["Unlimited guests", "Bespoke design", "Celebrity entertainment", "Gourmet catering", "Drone coverage", "VIP services", "Multi-day events"],
        color: "#00BCD4"
      },
    ],
    
    // Add-ons
    addonsTitle: "Premium Add-ons",
    addonsSubtitle: "Customize your event with these special touches",
    addons: [
      { name: "Saffron Water Service", nameAr: "ماء الزعفران", price: "50", icon: "🌸" },
      { name: "Honey Water Service", nameAr: "ماء العسل", price: "40", icon: "🍯" },
      { name: "Kids Corner + Nurse", nameAr: "ركن أطفال + ممرضة", price: "200", icon: "👶" },
      { name: "Yemeni Coffee Station", nameAr: "ركن القهوة اليمنية", price: "150", icon: "☕" },
      { name: "Bakhoor & Oud Corner", nameAr: "ركن البخور والعود", price: "100", icon: "🪔" },
      { name: "Drone Photography", nameAr: "تصوير بالدرون", price: "300", icon: "🚁" },
      { name: "Live Band / DJ", nameAr: "فرقة موسيقية / DJ", price: "500", icon: "🎵" },
      { name: "Valet Parking", nameAr: "خدمة صف السيارات", price: "150", icon: "🚗" },
      { name: "Ladies Gift Bags", nameAr: "حقائب هدايا للسيدات", price: "10/bag", icon: "👜" },
      { name: "Fresh Flower Arrangements", nameAr: "تنسيقات زهور طبيعية", price: "200", icon: "💐" },
    ],
    
    // Characters section
    charactersTitle: "Meet the Greenists Family",
    charactersSubtitle: "Our mascots represent the diversity and warmth of Aden",
    characters: [
      { name: "Salim", nameAr: "سالم", role: "The Wise Elder", desc: "Represents our respect for tradition and Yemeni heritage" },
      { name: "Noor", nameAr: "نور", role: "The Professional", desc: "Embodies modern excellence and business innovation" },
      { name: "Faris", nameAr: "فارس", role: "The Coordinator", desc: "Your dedicated event partner, always ready to help" },
      { name: "Yasmin", nameAr: "ياسمين", role: "The Creative", desc: "Brings artistic vision and beauty to every event" },
      { name: "Little Aden", nameAr: "عدن الصغير", role: "The Future", desc: "Represents our commitment to the next generation" },
    ],
    
    // Store announcement
    storeTitle: "Greenists Store",
    storeSubtitle: "Coming June 2026",
    storeText: "Visit our flagship store in Khor Maksar for all your event supplies, branded merchandise, and consultation services.",
    
    // Testimonials
    testimonialsTitle: "What Our Clients Say",
    testimonials: [
      { name: "Ahmed Al-Hadrami", event: "Wedding", text: "Greenists made our wedding day absolutely magical. The attention to detail and respect for our traditions was exceptional.", rating: 5 },
      { name: "Fatima Hassan", event: "Corporate Conference", text: "Professional, punctual, and perfect execution. They understood our brand and delivered beyond expectations.", rating: 5 },
      { name: "Mohammed Al-Ahdal", event: "Government Ceremony", text: "The team handled a complex state event with grace and precision. Highly recommended for official functions.", rating: 5 },
    ],
    
    // CTA
    ctaTitle: "Ready to Create Something Amazing?",
    ctaSubtitle: "Let's bring your vision to life together",
    ctaButton: "Get Free Consultation",
    
    // Contact
    contactTitle: "Visit Us",
    address: "Next to Relax Hotel, Khor Maksar, Aden, Yemen",
    phone: "+967 773 673 918",
    email: "info@greenists-events.com",
    hours: "Saturday - Thursday: 9:00 AM - 6:00 PM",
  },
  ar: {
    heroTagline: "خبراء الفعاليات ومبتكرو الأعمال",
    heroSubtitle: "من عدن إلى العالم - نصنع لحظات لا تُنسى منذ 2015",
    heroCTA: "خطط لفعاليتك",
    heroSecondary: "استكشف أعمالنا",
    
    greeting: "أهلاً وسهلاً! مرحباً بكم في جرينستس",
    greetingSubtitle: "حيث تلتقي الضيافة اليمنية بإدارة الفعاليات العالمية",
    
    stats: [
      { value: "+500", label: "فعالية منفذة", icon: Calendar },
      { value: "+50", label: "عميل مؤسسي", icon: Building2 },
      { value: "+10", label: "سنوات خبرة", icon: Award },
      { value: "98%", label: "رضا العملاء", icon: Heart },
    ],
    
    aboutTitle: "لماذا جرينستس؟",
    aboutSubtitle: "لسنا مجرد منظمي فعاليات - نحن رواة قصص نحول رؤيتك إلى واقع",
    aboutText: "ولدنا في قلب عدن، جرينستس تجمع بين دفء الضيافة اليمنية ومعايير التميز العالمية. فريقنا من المحترفين المتحمسين يفهم الفروق الثقافية الدقيقة التي تجعل كل احتفال مميزاً في يمننا الحبيب.",
    
    missionTitle: "رسالتنا",
    missionText: "تحويل كل فعالية إلى تجربة لا تُنسى تكرم تراثنا اليمني الغني مع احتضان الابتكار والاستدامة.",
    visionTitle: "رؤيتنا",
    visionText: "أن نكون الشركة الرائدة في إدارة الفعاليات المستدامة في اليمن والجزيرة العربية، ونضع معايير جديدة للتميز والإبداع والمسؤولية البيئية.",
    
    valuesTitle: "قيمنا",
    values: [
      { icon: Leaf, title: "الاستدامة", text: "ممارسات صديقة للبيئة في كل فعالية" },
      { icon: Heart, title: "الضيافة", text: "دفء ورعاية يمنية أصيلة" },
      { icon: Sparkles, title: "التميز", text: "معايير عالمية، خبرة محلية" },
      { icon: Users, title: "الشمولية", text: "فعاليات للجميع، من الجميع" },
    ],
    
    servicesTitle: "خدماتنا",
    servicesSubtitle: "حلول فعاليات شاملة لكل مناسبة",
    services: [
      { icon: PartyPopper, title: "الأعراس", desc: "أعراس يمنية تقليدية وعصرية", color: "#E91E63" },
      { icon: Building2, title: "الشركات", desc: "مؤتمرات وإطلاقات وندوات", color: "#2196F3" },
      { icon: Briefcase, title: "الحكومة", desc: "مراسم رسمية وفعاليات دولة", color: "#4CAF50" },
      { icon: GraduationCap, title: "التعليم", desc: "تخرجات وفعاليات أكاديمية", color: "#FF9800" },
      { icon: Baby, title: "العائلة", desc: "استقبال مواليد وأعياد ميلاد", color: "#9C27B0" },
      { icon: Heart, title: "العزاء", desc: "خدمات تأبين كريمة", color: "#607D8B" },
    ],
    
    packagesTitle: "باقات الفعاليات",
    packagesSubtitle: "اختر الباقة المثالية لاحتفالك",
    packages: [
      { 
        name: "الأساسية", 
        price: "500", priceYER: "850,000",
        desc: "مثالية للتجمعات الصغيرة",
        features: ["حتى 50 ضيف", "ديكور أساسي", "نظام صوت", "منسق فعاليات", "4 ساعات"],
        color: "#78909C"
      },
      { 
        name: "الفضية",
        price: "1,500", priceYER: "2,550,000",
        desc: "مثالية للاحتفالات المتوسطة",
        features: ["حتى 150 ضيف", "ديكور فاخر", "نظام صوت ومرئيات", "ضيافة شاملة", "تصوير فوتوغرافي", "6 ساعات"],
        color: "#9E9E9E"
      },
      { 
        name: "الذهبية",
        price: "3,500", priceYER: "5,950,000",
        desc: "للمناسبات المميزة",
        features: ["حتى 300 ضيف", "ديكور فاخر", "ترفيه حي", "ضيافة كاملة", "تصوير فوتو وفيديو", "ركن أطفال", "8 ساعات"],
        color: "#D4AF37",
        popular: true
      },
      { 
        name: "الماسية",
        price: "+7,000", priceYER: "+11,900,000",
        desc: "تجربة فاخرة مطلقة",
        features: ["ضيوف بلا حدود", "تصميم حسب الطلب", "ترفيه نجوم", "ضيافة فاخرة", "تصوير درون", "خدمات VIP", "فعاليات متعددة الأيام"],
        color: "#00BCD4"
      },
    ],
    
    addonsTitle: "إضافات مميزة",
    addonsSubtitle: "خصص فعاليتك بهذه اللمسات الخاصة",
    addons: [
      { name: "ماء الزعفران", price: "50", icon: "🌸" },
      { name: "ماء العسل", price: "40", icon: "🍯" },
      { name: "ركن أطفال + ممرضة", price: "200", icon: "👶" },
      { name: "ركن القهوة اليمنية", price: "150", icon: "☕" },
      { name: "ركن البخور والعود", price: "100", icon: "🪔" },
      { name: "تصوير بالدرون", price: "300", icon: "🚁" },
      { name: "فرقة موسيقية / DJ", price: "500", icon: "🎵" },
      { name: "خدمة صف السيارات", price: "150", icon: "🚗" },
      { name: "حقائب هدايا للسيدات", price: "10/حقيبة", icon: "👜" },
      { name: "تنسيقات زهور طبيعية", price: "200", icon: "💐" },
    ],
    
    charactersTitle: "تعرف على عائلة جرينستس",
    charactersSubtitle: "شخصياتنا تمثل تنوع ودفء عدن",
    characters: [
      { name: "سالم", role: "الحكيم", desc: "يمثل احترامنا للتقاليد والتراث اليمني" },
      { name: "نور", role: "المحترفة", desc: "تجسد التميز العصري والابتكار في الأعمال" },
      { name: "فارس", role: "المنسق", desc: "شريكك المخلص في الفعاليات، دائماً جاهز للمساعدة" },
      { name: "ياسمين", role: "المبدعة", desc: "تضيف الرؤية الفنية والجمال لكل فعالية" },
      { name: "عدن الصغير", role: "المستقبل", desc: "يمثل التزامنا بالجيل القادم" },
    ],
    
    storeTitle: "متجر جرينستس",
    storeSubtitle: "قريباً - يونيو 2026",
    storeText: "زوروا متجرنا الرئيسي في خور مكسر لجميع مستلزمات الفعاليات والمنتجات ذات العلامة التجارية وخدمات الاستشارة.",
    
    testimonialsTitle: "ماذا يقول عملاؤنا",
    testimonials: [
      { name: "أحمد الحضرمي", event: "زفاف", text: "جرينستس جعلت يوم زفافنا ساحراً تماماً. الاهتمام بالتفاصيل واحترام تقاليدنا كان استثنائياً.", rating: 5 },
      { name: "فاطمة حسن", event: "مؤتمر شركات", text: "احترافية ودقة في المواعيد وتنفيذ مثالي. فهموا علامتنا التجارية وتجاوزوا التوقعات.", rating: 5 },
      { name: "محمد الأهدل", event: "مراسم حكومية", text: "الفريق تعامل مع فعالية دولة معقدة بأناقة ودقة. أنصح بهم بشدة للمناسبات الرسمية.", rating: 5 },
    ],
    
    ctaTitle: "مستعد لصنع شيء مذهل؟",
    ctaSubtitle: "دعنا نحول رؤيتك إلى واقع معاً",
    ctaButton: "احصل على استشارة مجانية",
    
    contactTitle: "زورونا",
    address: "بجانب فندق ريلاكس، خور مكسر، عدن، اليمن",
    phone: "+967 773 673 918",
    email: "info@greenists-events.com",
    hours: "السبت - الخميس: 9:00 صباحاً - 6:00 مساءً",
  }
};

// Animated counter component
function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');
  
  useEffect(() => {
    let start = 0;
    const increment = numericValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [numericValue, duration]);
  
  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const t = content[language as keyof typeof content] || content.en;
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    '/images/hero-aden-skyline.png',
    '/images/luxury-wedding-venue.png',
    '/images/corporate-conference.png',
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Slideshow */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>
        ))}
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-8">
              <img src="/images/greenists_logo.png" alt="Greenists" className="h-20 w-auto" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  <span className="text-[#2D7A4A]">Green</span>
                  <span className="text-white">ists</span>
                </h1>
                <p className="text-[#D4AF37] font-semibold text-lg">{t.heroTagline}</p>
              </div>
            </div>
            
            <p className="text-white/90 text-xl md:text-2xl mb-8 leading-relaxed">
              {t.heroSubtitle}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/booking">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#c9a432] text-black font-bold text-lg px-8 py-6 rounded-full shadow-lg">
                  {t.heroCTA}
                  {isRTL ? <ArrowLeft className="w-5 h-5 ms-2" /> : <ArrowRight className="w-5 h-5 ms-2" />}
                </Button>
              </Link>
              <Link href="/gallery">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-6 rounded-full">
                  <Play className="w-5 h-5 me-2" />
                  {t.heroSecondary}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-[#D4AF37] w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce z-10">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-[#2D7A4A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-[#D4AF37]" />
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Promotional Video Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === 'ar' ? 'شاهد إبداعاتنا' : 'Watch Our Magic'}
            </h2>
            <p className="text-xl text-gray-300">
              {language === 'ar' ? 'لمحة عن فعالياتنا المميزة في عدن' : 'A glimpse of our exceptional events in Aden'}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video 
                className="w-full aspect-video"
                controls
                poster="/images/video/hero-scene.png"
              >
                <source src="/videos/greenists-promo.mp4" type="video/mp4" />
                {language === 'ar' ? 'متصفحك لا يدعم تشغيل الفيديو' : 'Your browser does not support video playback'}
              </video>
            </div>
          </div>
        </div>
      </section>
      
      {/* Characters Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.charactersTitle}</h2>
            <p className="text-xl text-gray-600">{t.charactersSubtitle}</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <img 
              src="/images/characters/greenists_mascot_family.png" 
              alt="Greenists Family" 
              className="max-w-full md:max-w-4xl rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {t.characters.map((char, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-[#2D7A4A]">{char.name}</h3>
                <p className="text-sm text-[#D4AF37] font-medium">{char.role}</p>
                <p className="text-xs text-gray-500 mt-1">{char.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.servicesTitle}</h2>
            <p className="text-xl text-gray-600">{t.servicesSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {t.services.map((service, index) => (
              <Link key={index} href="/services">
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <service.icon className="w-8 h-8" style={{ color: service.color }} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500">{service.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.packagesTitle}</h2>
            <p className="text-xl text-gray-600">{t.packagesSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  pkg.popular ? 'ring-2 ring-[#D4AF37] shadow-xl' : 'hover:shadow-xl'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-[#D4AF37] text-black text-xs font-bold px-4 py-1 rounded-bl-lg">
                    {isRTL ? 'الأكثر طلباً' : 'Most Popular'}
                  </div>
                )}
                <CardContent className="p-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: pkg.color }}
                  >
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{pkg.desc}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#2D7A4A]">${pkg.price}</span>
                    <span className="text-gray-400 text-sm block">{pkg.priceYER} YER</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[#2D7A4A] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/calculator">
                    <Button className="w-full bg-[#2D7A4A] hover:bg-[#236339]">
                      {isRTL ? 'احسب التكلفة' : 'Calculate Cost'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Add-ons Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.addonsTitle}</h2>
            <p className="text-xl text-gray-600">{t.addonsSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {t.addons.map((addon, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-[#2D7A4A]/5 transition-colors">
                <span className="text-3xl mb-2 block">{addon.icon}</span>
                <h4 className="font-medium text-gray-900 text-sm mb-1">{addon.name}</h4>
                <p className="text-[#2D7A4A] font-bold">${addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Store Announcement */}
      <section className="py-20 bg-gradient-to-r from-[#2D7A4A] to-[#1a4d2e] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="inline-block px-4 py-1 bg-[#D4AF37] text-black font-bold rounded-full text-sm mb-4">
                {t.storeSubtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.storeTitle}</h2>
              <p className="text-white/80 text-lg mb-6">{t.storeText}</p>
              <div className="flex items-center gap-4 text-white/70">
                <MapPin className="w-5 h-5" />
                <span>{t.address}</span>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="/images/Store.png" 
                alt="Greenists Store" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.testimonialsTitle}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#2D7A4A]/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#2D7A4A]" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.event}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#2D7A4A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.ctaTitle}</h2>
          <p className="text-xl text-white/80 mb-8">{t.ctaSubtitle}</p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#D4AF37] hover:bg-[#c9a432] text-black font-bold text-lg px-12 py-6 rounded-full">
              {t.ctaButton}
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-start">
            <div>
              <h3 className="font-bold text-[#D4AF37] mb-4">{t.contactTitle}</h3>
              <div className="flex items-center gap-2 justify-center md:justify-start text-white/70">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{t.address}</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[#D4AF37] mb-4">{isRTL ? 'اتصل بنا' : 'Call Us'}</h3>
              <div className="flex items-center gap-2 justify-center md:justify-start text-white/70">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{t.phone}</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[#D4AF37] mb-4">{isRTL ? 'راسلنا' : 'Email Us'}</h3>
              <div className="flex items-center gap-2 justify-center md:justify-start text-white/70">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{t.email}</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[#D4AF37] mb-4">{isRTL ? 'ساعات العمل' : 'Working Hours'}</h3>
              <div className="flex items-center gap-2 justify-center md:justify-start text-white/70">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{t.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
