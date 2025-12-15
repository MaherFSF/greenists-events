import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, ArrowLeft, Phone, Mail, MapPin, Calendar, Users, Award, Leaf, Star,
  CheckCircle2, Building2, Heart, Landmark, GraduationCap, Globe2, Sparkles,
  ChevronDown, TrendingUp, Shield, Clock, Play, Store, Truck, Camera, Music,
  Utensils, Gift, Baby, Moon, Sun, Mountain, Waves, TreePine, Palmtree
} from 'lucide-react';

// Animated Counter Hook
function useCounter(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, hasStarted]);

  return { count, ref };
}

// Stat Counter Component
function StatCounter({ value, suffix, label, labelAr, icon: Icon }: { 
  value: number; suffix: string; label: string; labelAr: string; icon: React.ElementType 
}) {
  const { language } = useLanguage();
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center group">
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-[#D4AF37]" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{count.toLocaleString()}{suffix}</div>
      <div className="text-white/70 text-sm md:text-base">{language === 'ar' ? labelAr : label}</div>
    </div>
  );
}

// Service Card Component
function ServiceCard({ icon: Icon, color, nameEn, nameAr, descEn, descAr, image }: {
  icon: React.ElementType; color: string; nameEn: string; nameAr: string; 
  descEn: string; descAr: string; image?: string;
}) {
  const { language } = useLanguage();
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={nameEn} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110" 
               style={{ backgroundColor: `${color}15` }}>
            <Icon className="w-7 h-7" style={{ color }} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2D7A4A] transition-colors">
              {language === 'ar' ? nameAr : nameEn}
            </h3>
            <p className="text-gray-600 text-sm">{language === 'ar' ? descAr : descEn}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// City Character Component - Representing South Yemen Cities
function CityCharacter({ city, cityAr, icon: Icon, color, description, descriptionAr }: {
  city: string; cityAr: string; icon: React.ElementType; color: string; 
  description: string; descriptionAr: string;
}) {
  const { language } = useLanguage();
  return (
    <div className="text-center group cursor-pointer">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-xl"
           style={{ background: `linear-gradient(135deg, ${color}20, ${color}40)`, border: `3px solid ${color}` }}>
        <Icon className="w-12 h-12" style={{ color }} />
      </div>
      <h4 className="font-bold text-lg text-gray-900 mb-1">{language === 'ar' ? cityAr : city}</h4>
      <p className="text-sm text-gray-600">{language === 'ar' ? descriptionAr : description}</p>
    </div>
  );
}

export default function Home() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { image: '/images/hero-aden-skyline.png', titleEn: 'From Aden to the World', titleAr: 'من عدن إلى العالم' },
    { image: '/images/luxury-wedding-venue.png', titleEn: 'Luxury Weddings', titleAr: 'حفلات زفاف فاخرة' },
    { image: '/images/corporate-conference.png', titleEn: 'Corporate Excellence', titleAr: 'التميز المؤسسي' },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { icon: Building2, color: '#1E3A5F', nameEn: 'Greenists Corporate', nameAr: 'جرينستس للشركات', descEn: 'Conferences, product launches, seminars, and corporate gatherings', descAr: 'مؤتمرات، إطلاق منتجات، ندوات، واجتماعات الشركات', image: '/images/corporate-conference.png' },
    { icon: Heart, color: '#B76E79', nameEn: 'Greenists Weddings', nameAr: 'جرينستس للأعراس', descEn: 'Luxury multi-day celebrations with cultural authenticity', descAr: 'احتفالات فاخرة متعددة الأيام بأصالة ثقافية', image: '/images/luxury-wedding-venue.png' },
    { icon: Landmark, color: '#D4AF37', nameEn: 'Greenists Government', nameAr: 'جرينستس الحكومية', descEn: 'Official ceremonies, diplomatic events, national celebrations', descAr: 'مراسم رسمية، فعاليات دبلوماسية، احتفالات وطنية' },
    { icon: Globe2, color: '#2D7A4A', nameEn: 'Greenists NGO', nameAr: 'جرينستس للمنظمات', descEn: 'Humanitarian conferences, development workshops', descAr: 'مؤتمرات إنسانية، ورش عمل تنموية' },
    { icon: GraduationCap, color: '#FF8C00', nameEn: 'Greenists Education', nameAr: 'جرينستس التعليمية', descEn: 'Graduations, academic conferences, school events', descAr: 'حفلات تخرج، مؤتمرات أكاديمية، فعاليات مدرسية' },
    { icon: Moon, color: '#9B59B6', nameEn: 'Greenists Ramadan', nameAr: 'جرينستس رمضان', descEn: 'Iftar gatherings, Eid celebrations, spiritual events', descAr: 'موائد إفطار، احتفالات العيد، فعاليات روحانية' },
    { icon: Baby, color: '#E91E63', nameEn: 'Greenists Kids', nameAr: 'جرينستس للأطفال', descEn: 'Birthday parties, children entertainment, family events', descAr: 'حفلات أعياد ميلاد، ترفيه أطفال، فعاليات عائلية' },
    { icon: Gift, color: '#00BCD4', nameEn: 'Greenists Condolences', nameAr: 'جرينستس للعزاء', descEn: 'Dignified memorial services with cultural sensitivity', descAr: 'خدمات تأبين كريمة بحساسية ثقافية' },
  ];

  const cityCharacters = [
    { city: 'Aden', cityAr: 'عدن', icon: Waves, color: '#0077B6', description: 'Gateway to Yemen', descriptionAr: 'بوابة اليمن' },
    { city: 'Mukalla', cityAr: 'المكلا', icon: Palmtree, color: '#2D7A4A', description: 'Pearl of the Sea', descriptionAr: 'لؤلؤة البحر' },
    { city: 'Socotra', cityAr: 'سقطرى', icon: TreePine, color: '#8B4513', description: 'Island of Wonders', descriptionAr: 'جزيرة العجائب' },
    { city: 'Hadramout', cityAr: 'حضرموت', icon: Mountain, color: '#D4AF37', description: 'Valley of Heritage', descriptionAr: 'وادي التراث' },
  ];

  const features = [
    { icon: Leaf, titleEn: 'Eco-Friendly', titleAr: 'صديق للبيئة', descEn: 'Sustainable materials & practices', descAr: 'مواد وممارسات مستدامة' },
    { icon: Star, titleEn: 'Yemeni Heritage', titleAr: 'تراث يمني', descEn: 'Authentic cultural elements', descAr: 'عناصر ثقافية أصيلة' },
    { icon: Shield, titleEn: 'Full Service', titleAr: 'خدمة متكاملة', descEn: 'Planning to execution', descAr: 'من التخطيط للتنفيذ' },
    { icon: TrendingUp, titleEn: 'Green Impact Score', titleAr: 'مقياس الأثر الأخضر', descEn: 'Track your event sustainability', descAr: 'تتبع استدامة فعاليتك' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Hero Section with Slideshow */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide.image} alt={slide.titleEn} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
        ))}
        
        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-20" />
        
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-4 text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-2 border-[#D4AF37] p-3 shadow-2xl">
                <img src="/images/greenists-logo.png" alt="Greenists" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Brand Name */}
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
              <span className="text-[#90EE90]">Green</span><span>ists</span>
            </h1>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl text-[#D4AF37] font-medium mb-6 drop-shadow-lg">
              {isRTL ? 'خبراء الفعاليات ومبتكرو الأعمال' : 'Event Experts & Business Innovators'}
            </p>

            {/* Dynamic Title */}
            <h2 className="text-3xl md:text-5xl text-white font-light mb-8 leading-relaxed drop-shadow-lg">
              {isRTL ? heroSlides[currentSlide].titleAr : heroSlides[currentSlide].titleEn}
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/booking">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C4A030] text-black font-bold px-10 py-7 text-xl rounded-full shadow-2xl hover:scale-105 transition-all">
                  <Calendar className="w-6 h-6 mr-3" />
                  {isRTL ? 'احجز فعاليتك' : 'Book Your Event'}
                </Button>
              </Link>
              <Link href="/calculator">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#2D7A4A] font-bold px-10 py-7 text-xl rounded-full backdrop-blur-sm">
                  <Sparkles className="w-6 h-6 mr-3" />
                  {isRTL ? 'احسب التكلفة' : 'Get Quote'}
                </Button>
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-3">
              {heroSlides.map((_, index) => (
                <button key={index} onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-[#D4AF37] w-8' : 'bg-white/50 hover:bg-white/80'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="w-10 h-10 text-[#D4AF37]" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a4d2e] via-[#2D7A4A] to-[#1a4d2e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10L50 30L70 30L55 45L60 65L40 52L20 65L25 45L10 30L30 30Z' fill='%23D4AF37'/%3E%3C/svg%3E")`,
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCounter value={500} suffix="+" label="Events Completed" labelAr="فعالية منجزة" icon={Calendar} />
            <StatCounter value={50} suffix="+" label="Corporate Clients" labelAr="عميل من الشركات" icon={Building2} />
            <StatCounter value={10} suffix="+" label="Years Experience" labelAr="سنوات خبرة" icon={Award} />
            <StatCounter value={98} suffix="%" label="Client Satisfaction" labelAr="رضا العملاء" icon={Heart} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#2D7A4A]/10 text-[#2D7A4A] rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
              {isRTL ? 'علاماتنا التجارية' : 'Our Brands'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isRTL ? 'فعاليات لكل مناسبة' : 'Events for Every Occasion'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isRTL ? 'ثمانية علامات تجارية متخصصة تحت مظلة جرينستس، كل منها مصممة لتقديم تجربة استثنائية' : 'Eight specialized brands under the Greenists umbrella, each designed to deliver an exceptional experience'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/brands">
              <Button className="bg-[#2D7A4A] hover:bg-[#236339] px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                {isRTL ? 'استكشف جميع العلامات' : 'Explore All Brands'}
                <Arrow className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Store Opening Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D4AF37] rounded-3xl" />
              <img src="/images/greenists-store-interior.png" alt="Greenists Store" className="rounded-3xl shadow-2xl relative z-10" />
              <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-black font-bold px-8 py-4 rounded-2xl shadow-xl z-20">
                <span className="text-2xl">{isRTL ? 'يونيو 2026' : 'June 2026'}</span>
              </div>
            </div>
            <div>
              <span className="inline-block px-6 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
                {isRTL ? 'قريباً' : 'Coming Soon'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isRTL ? 'متجر جرينستس' : 'Greenists Store'}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {isRTL 
                  ? 'نفتتح أول متجر متخصص في مستلزمات الفعاليات في عدن. تسوق من مجموعاتنا الحصرية، واحصل على استشارات مجانية من خبرائنا.'
                  : 'Opening our first specialized event supplies store in Aden. Shop from our exclusive collections and get free consultations from our experts.'}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#2D7A4A]" />
                  <span>{isRTL ? 'مستلزمات فعاليات حصرية' : 'Exclusive Event Supplies'}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#2D7A4A]" />
                  <span>{isRTL ? 'استشارات مجانية' : 'Free Consultations'}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#2D7A4A]" />
                  <span>{isRTL ? 'منتجات صديقة للبيئة' : 'Eco-Friendly Products'}</span>
                </div>
              </div>
              <Link href="/store">
                <Button className="bg-[#2D7A4A] hover:bg-[#236339] px-8 py-6 text-lg rounded-full">
                  <Store className="w-5 h-5 mr-2" />
                  {isRTL ? 'اكتشف المتجر' : 'Discover the Store'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* South Yemen Cities Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
              {isRTL ? 'نخدم جنوب اليمن' : 'Serving South Yemen'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {isRTL ? 'من كل مدينة، لكل مناسبة' : 'From Every City, For Every Occasion'}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {cityCharacters.map((city, index) => (
              <CityCharacter key={index} {...city} />
            ))}
          </div>
        </div>
      </section>

      {/* Yemeni Hospitality Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-6 py-2 bg-[#2D7A4A]/10 text-[#2D7A4A] rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
                {isRTL ? 'تراثنا' : 'Our Heritage'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isRTL ? 'ضيافة يمنية أصيلة' : 'Authentic Yemeni Hospitality'}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {isRTL 
                  ? 'نحتفي بتراث الضيافة اليمنية العريق في كل فعالية. من القهوة العربية الأصيلة إلى البخور والتمر، نضمن تجربة لا تُنسى لضيوفك.'
                  : 'We celebrate the rich heritage of Yemeni hospitality in every event. From authentic Arabic coffee to incense and dates, we ensure an unforgettable experience for your guests.'}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2D7A4A]/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-[#2D7A4A]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{isRTL ? feature.titleAr : feature.titleEn}</h4>
                      <p className="text-sm text-gray-600">{isRTL ? feature.descAr : feature.descEn}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img src="/images/traditional-yemeni-hospitality.png" alt="Yemeni Hospitality" className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-aden-skyline.png" alt="Aden" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D7A4A]/95 to-[#1a4d2e]/95" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {isRTL ? 'هل أنت مستعد لفعاليتك القادمة؟' : 'Ready for Your Next Event?'}
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {isRTL 
                ? 'تواصل معنا اليوم واحصل على استشارة مجانية. فريقنا جاهز لتحويل رؤيتك إلى واقع.'
                : 'Contact us today and get a free consultation. Our team is ready to turn your vision into reality.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C4A030] text-black font-bold px-10 py-7 text-xl rounded-full shadow-2xl">
                  <Calendar className="w-6 h-6 mr-3" />
                  {isRTL ? 'احجز الآن' : 'Book Now'}
                </Button>
              </Link>
              <a href="tel:+967773673918">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#2D7A4A] font-bold px-10 py-7 text-xl rounded-full">
                  <Phone className="w-6 h-6 mr-3" />
                  +967 773 673 918
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-6 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm">{isRTL ? 'شارع الكورنيش، بجانب فندق ريلاكس، خور ماكسر، عدن' : 'Next to Relax Hotel, Khor Maksar, Aden'}</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+967773673918" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                <Phone className="w-5 h-5" />
                <span>+967 773 673 918</span>
              </a>
              <a href="mailto:info@greenists-events.com" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@greenists-events.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
