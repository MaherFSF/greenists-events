import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { 
  Camera, 
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Heart,
  Sparkles,
  Crown,
  Leaf,
  BookOpen,
  ShoppingBag,
  Award,
  Globe,
  History,
  Mountain,
  Building2,
  TreeDeciduous,
  Waves,
  Coffee,
  Castle
} from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  titleAr: string;
  location: string;
  locationAr: string;
  category: string;
  description: string;
  descriptionAr: string;
  year?: string;
  image: string;
  historicalContext?: string;
  historicalContextAr?: string;
  isHistorical?: boolean;
}

interface YemenPrideProduct {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  dimensions: string;
  culturalNote: string;
  culturalNoteAr: string;
  price: number;
  priceYER: number;
  icon: React.ElementType;
}

export default function Gallery() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection observer for animations
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
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  
  const categories = [
    { id: 'all', labelEn: 'All', labelAr: 'الكل', icon: Globe },
    { id: 'historical', labelEn: 'Historical Archives', labelAr: 'الأرشيف التاريخي', icon: History },
    { id: 'yemen', labelEn: 'Yemen Heritage', labelAr: 'تراث اليمن', icon: Castle },
    { id: 'events', labelEn: 'Our Events', labelAr: 'فعالياتنا', icon: Sparkles },
    { id: 'nature', labelEn: 'Natural Wonders', labelAr: 'عجائب الطبيعة', icon: Mountain },
  ];

  // Yemen Pride Collection Products
  const yemenPrideProducts: YemenPrideProduct[] = [
    {
      id: 'map-wall-art',
      title: 'Yemen Map Wall Art',
      titleAr: 'لوحة خريطة اليمن',
      description: 'Yemen - Land of Sustainability | اليمن - أرض الاستدامة. Dimensions: 60x80cm. Ready for framing. Printed on recycled paper.',
      descriptionAr: 'اليمن - أرض الاستدامة. الأبعاد: 60×80 سم. جاهزة للتأطير. مطبوعة على ورق معاد تدويره.',
      dimensions: '60x80cm',
      culturalNote: 'Celebrating Yemen\'s ancient history and diverse landscapes through eco-conscious art.',
      culturalNoteAr: 'الاحتفاء بتاريخ اليمن العريق ومناظره الطبيعية المتنوعة من خلال الفن الصديق للبيئة.',
      price: 45,
      priceYER: 76500,
      icon: MapPin
    },
    {
      id: 'heritage-book',
      title: 'Yemeni Heritage Book',
      titleAr: 'كتاب التراث اليمني',
      description: 'Sustainable Yemen | اليمن المستدامة. Hardcover 30x30cm, 120 pages. Features photography and stories celebrating Yemeni culture. Bilingual (English/Arabic). Printed on FSC certified paper.',
      descriptionAr: 'اليمن المستدامة. غلاف صلب 30×30 سم، 120 صفحة. يضم صوراً وقصصاً تحتفي بالثقافة اليمنية. ثنائي اللغة. مطبوع على ورق معتمد FSC.',
      dimensions: '30x30cm, 120 pages',
      culturalNote: 'Preserving the stories and wisdom of Yemen\'s people and their harmonious relationship with nature.',
      culturalNoteAr: 'الحفاظ على قصص وحكمة شعب اليمن وعلاقتهم المتناغمة مع الطبيعة.',
      price: 85,
      priceYER: 144500,
      icon: BookOpen
    },
    {
      id: 'socotra-collection',
      title: 'Socotra Island Collection',
      titleAr: 'مجموعة جزيرة سقطرى',
      description: 'Special edition featuring Socotra\'s unique dragon blood trees and biodiversity. Includes tote bag, t-shirt, and poster. Celebrates Yemen\'s natural UNESCO heritage. Made from organic materials.',
      descriptionAr: 'إصدار خاص يضم أشجار دم الأخوين الفريدة والتنوع البيولوجي في سقطرى. يشمل حقيبة وتيشيرت وملصق. يحتفي بتراث اليمن الطبيعي المدرج في اليونسكو. مصنوع من مواد عضوية.',
      dimensions: 'Multiple items',
      culturalNote: 'Honoring the extraordinary and fragile ecosystem of the Socotra archipelago.',
      culturalNoteAr: 'تكريم النظام البيئي الاستثنائي والهش لأرخبيل سقطرى.',
      price: 120,
      priceYER: 204000,
      icon: TreeDeciduous
    },
    {
      id: 'aden-port-print',
      title: 'Aden Port Historical Print',
      titleAr: 'طباعة تاريخية لميناء عدن',
      description: 'Aden - Gateway to Yemen | عدن - بوابة اليمن. Dimensions: 40x60cm. Vintage-style art print. Ready for framing. Printed on archival recycled paper.',
      descriptionAr: 'عدن - بوابة اليمن. الأبعاد: 40×60 سم. طباعة فنية بأسلوب عتيق. جاهزة للتأطير. مطبوعة على ورق أرشيفي معاد تدويره.',
      dimensions: '40x60cm',
      culturalNote: 'Commemorating Aden\'s historical significance as a vital maritime hub and cultural crossroads.',
      culturalNoteAr: 'إحياء ذكرى الأهمية التاريخية لعدن كمركز بحري حيوي وملتقى ثقافي.',
      price: 55,
      priceYER: 93500,
      icon: Waves
    },
    {
      id: 'mocha-coffee-set',
      title: 'Mocha Coffee Heritage Set',
      titleAr: 'مجموعة تراث قهوة المخا',
      description: 'Premium Yemeni coffee beans from Mocha with traditional ceramic cups. Includes origin story booklet. Sustainably sourced.',
      descriptionAr: 'حبوب قهوة يمنية فاخرة من المخا مع فناجين سيراميك تقليدية. يشمل كتيب قصة المنشأ. مصدر مستدام.',
      dimensions: '500g beans + 2 cups',
      culturalNote: 'Celebrating the birthplace of coffee trade that gave the world "Mocha".',
      culturalNoteAr: 'الاحتفاء بمهد تجارة القهوة التي أعطت العالم اسم "موكا".',
      price: 95,
      priceYER: 161500,
      icon: Coffee
    },
    {
      id: 'shibam-architecture',
      title: 'Shibam Architecture Print',
      titleAr: 'طباعة معمارية شبام',
      description: 'Manhattan of the Desert - Shibam Hadramout. Limited edition architectural print. 50x70cm. Numbered and signed.',
      descriptionAr: 'مانهاتن الصحراء - شبام حضرموت. طباعة معمارية محدودة الإصدار. 50×70 سم. مرقمة وموقعة.',
      dimensions: '50x70cm',
      culturalNote: 'Showcasing the world\'s oldest skyscraper city and UNESCO World Heritage Site.',
      culturalNoteAr: 'عرض أقدم مدينة ناطحات سحاب في العالم وموقع التراث العالمي لليونسكو.',
      price: 75,
      priceYER: 127500,
      icon: Building2
    }
  ];
  
  // Historical Gallery Items with real photos
  const galleryItems: GalleryItem[] = [
    // Historical Archives
    {
      id: 1,
      title: 'Aden Harbor, Late 19th Century',
      titleAr: 'ميناء عدن، أواخر القرن التاسع عشر',
      location: 'Aden Port',
      locationAr: 'ميناء عدن',
      category: 'historical',
      year: '1890s',
      description: 'A rare photograph showing the port of Aden during the British colonial era.',
      descriptionAr: 'صورة نادرة تظهر ميناء عدن خلال الحقبة الاستعمارية البريطانية.',
      historicalContext: 'Aden\'s strategic location made it a vital coaling station for ships traveling between Europe and Asia, especially after the opening of the Suez Canal in 1869. The British declared Aden a free port in 1850, which further boosted its importance.',
      historicalContextAr: 'جعل موقع عدن الاستراتيجي منها محطة تزويد بالوقود حيوية للسفن المسافرة بين أوروبا وآسيا، خاصة بعد افتتاح قناة السويس عام 1869.',
      image: '/gallery/historical/aden-harbor-1890s.jpg',
      isHistorical: true
    },
    {
      id: 2,
      title: 'Dragon\'s Blood Tree, Socotra 1918',
      titleAr: 'شجرة دم الأخوين، سقطرى 1918',
      location: 'Socotra Island',
      locationAr: 'جزيرة سقطرى',
      category: 'historical',
      year: '1918',
      description: 'Photograph by Charles K. Moser for National Geographic\'s "The Isle of Frankincense".',
      descriptionAr: 'صورة التقطها تشارلز ك. موسر لمجلة ناشيونال جيوغرافيك بعنوان "جزيرة اللبان".',
      historicalContext: 'This photograph was taken by the former United States Consul-General to Aden at an altitude of 2,800 feet. It is one of the earliest documented images of Socotra\'s unique flora.',
      historicalContextAr: 'التقطت هذه الصورة من قبل القنصل العام الأمريكي السابق في عدن على ارتفاع 2800 قدم. وهي من أقدم الصور الموثقة لنباتات سقطرى الفريدة.',
      image: '/gallery/historical/socotra-dragon-blood-1918.jpeg',
      isHistorical: true
    },
    {
      id: 3,
      title: 'Shibam - Manhattan of the Desert',
      titleAr: 'شبام - مانهاتن الصحراء',
      location: 'Hadramout',
      locationAr: 'حضرموت',
      category: 'historical',
      year: '19th-20th Century',
      description: 'Vintage image of Shibam, the UNESCO World Heritage site known for its mud-brick high-rise buildings.',
      descriptionAr: 'صورة عتيقة لشبام، موقع التراث العالمي لليونسكو المعروف بمبانيه الشاهقة من الطوب الطيني.',
      historicalContext: 'Shibam\'s architectural style dates back to the 16th century and represents an outstanding example of traditional urban planning. The city\'s 500+ mud-brick towers rise 5-11 stories high.',
      historicalContextAr: 'يعود الطراز المعماري لشبام إلى القرن السادس عشر ويمثل نموذجاً بارزاً للتخطيط الحضري التقليدي. ترتفع أكثر من 500 برج طيني من 5 إلى 11 طابقاً.',
      image: '/gallery/historical/shibam-manhattan-desert.jpg',
      isHistorical: true
    },
    {
      id: 4,
      title: 'Mocha Coffee Port, c.1890',
      titleAr: 'ميناء قهوة المخا، حوالي 1890',
      location: 'Mocha (Al Mukha)',
      locationAr: 'المخا',
      category: 'historical',
      year: 'c.1890',
      description: 'Engraving depicting the legendary coffee port that gave the world the term "Mocha".',
      descriptionAr: 'نقش يصور ميناء القهوة الأسطوري الذي أعطى العالم مصطلح "موكا".',
      historicalContext: 'For centuries, Mocha was the principal port for Yemen\'s capital and the primary marketplace for coffee. The port\'s significance declined in the 19th century, but its legacy in global coffee trade remains.',
      historicalContextAr: 'لقرون، كان المخا الميناء الرئيسي لعاصمة اليمن والسوق الأساسي للقهوة. تراجعت أهمية الميناء في القرن التاسع عشر، لكن إرثه في تجارة القهوة العالمية باقٍ.',
      image: '/gallery/historical/mocha-coffee-port-1890.webp',
      isHistorical: true
    },
    {
      id: 5,
      title: 'Cisterns of Tawila, 1950s',
      titleAr: 'صهاريج الطويلة، الخمسينيات',
      location: 'Aden',
      locationAr: 'عدن',
      category: 'historical',
      year: '1950s',
      description: 'Historical photograph of the ancient water reservoirs during the British colonial period.',
      descriptionAr: 'صورة تاريخية للخزانات المائية القديمة خلال فترة الاستعمار البريطاني.',
      historicalContext: 'The Cisterns of Tawila are an ancient system designed to collect rainwater from the surrounding mountains. Initially constructed by the Himyarite Kingdom (115 BC - 525 AD), they were later restored by the British in the 19th century.',
      historicalContextAr: 'صهاريج الطويلة نظام قديم صُمم لجمع مياه الأمطار من الجبال المحيطة. بُنيت في الأصل من قبل المملكة الحميرية (115 ق.م - 525 م)، ورُممت لاحقاً من قبل البريطانيين في القرن التاسع عشر.',
      image: '/gallery/historical/aden-cisterns-tawila-1950s.jpg',
      isHistorical: true
    },
    {
      id: 6,
      title: 'Aden Waterfront, 1870s',
      titleAr: 'واجهة عدن البحرية، السبعينيات من القرن التاسع عشر',
      location: 'Aden Port',
      locationAr: 'ميناء عدن',
      category: 'historical',
      year: '1870s',
      description: 'The port of Aden during the British colonial era, one of the busiest ports in the world.',
      descriptionAr: 'ميناء عدن خلال الحقبة الاستعمارية البريطانية، أحد أكثر الموانئ ازدحاماً في العالم.',
      historicalContext: 'Aden served as a critical coaling station and commercial hub for the British Empire. Its strategic location on the sea route between Europe and India made it invaluable.',
      historicalContextAr: 'خدمت عدن كمحطة تزويد بالوقود ومركز تجاري حيوي للإمبراطورية البريطانية. جعلها موقعها الاستراتيجي على طريق البحر بين أوروبا والهند لا تقدر بثمن.',
      image: '/gallery/historical/aden-waterfront-1870s.jpg',
      isHistorical: true
    },
    {
      id: 7,
      title: 'Great Dam of Marib Ruins',
      titleAr: 'أطلال سد مأرب العظيم',
      location: 'Marib',
      locationAr: 'مأرب',
      category: 'historical',
      year: '8th Century BC',
      description: 'The ruins of the ancient engineering marvel that sustained the Kingdom of Sheba.',
      descriptionAr: 'أطلال الأعجوبة الهندسية القديمة التي أعالت مملكة سبأ.',
      historicalContext: 'The Great Dam of Marib dates back to the 8th century BC. It was a masterpiece of engineering that irrigated the surrounding plains for over a millennium. Its collapse in the 6th century AD is mentioned in the Quran.',
      historicalContextAr: 'يعود سد مأرب العظيم إلى القرن الثامن قبل الميلاد. كان تحفة هندسية روت السهول المحيطة لأكثر من ألف عام. انهياره في القرن السادس الميلادي مذكور في القرآن الكريم.',
      image: '/gallery/historical/marib-dam-ruins.jpg',
      isHistorical: true
    },
    {
      id: 8,
      title: 'Aden Port Buildings, 19th Century',
      titleAr: 'مباني ميناء عدن، القرن التاسع عشر',
      location: 'Aden',
      locationAr: 'عدن',
      category: 'historical',
      year: 'Late 19th Century',
      description: 'Port buildings during a period of significant growth after the Suez Canal opening.',
      descriptionAr: 'مباني الميناء خلال فترة نمو كبير بعد افتتاح قناة السويس.',
      historicalContext: 'Under British control, Aden became a crucial coaling station for steamships, leading to the expansion of its port services and its emergence as a major global entrepot.',
      historicalContextAr: 'تحت السيطرة البريطانية، أصبحت عدن محطة تزويد بالوقود حاسمة للبواخر، مما أدى إلى توسع خدماتها المينائية وظهورها كمركز تجاري عالمي رئيسي.',
      image: '/gallery/historical/aden-port-19th-century.jpg',
      isHistorical: true
    },
    // Yemen Heritage (Modern)
    {
      id: 9,
      title: 'Sana\'a Old City',
      titleAr: 'صنعاء القديمة',
      location: 'Sana\'a',
      locationAr: 'صنعاء',
      category: 'yemen',
      description: 'UNESCO World Heritage Site - The historic old city with its distinctive tower houses.',
      descriptionAr: 'موقع التراث العالمي لليونسكو - المدينة القديمة التاريخية بمنازلها البرجية المميزة.',
      image: '/gallery/yemen/sanaa-old-city.jpg'
    },
    {
      id: 10,
      title: 'Socotra Dragon Blood Trees',
      titleAr: 'أشجار دم الأخوين في سقطرى',
      location: 'Socotra Island',
      locationAr: 'جزيرة سقطرى',
      category: 'nature',
      description: 'The unique Dragon Blood Trees found nowhere else on Earth.',
      descriptionAr: 'أشجار دم الأخوين الفريدة التي لا توجد في أي مكان آخر على الأرض.',
      image: '/gallery/yemen/socotra-trees.jpg'
    },
    {
      id: 11,
      title: 'Taiz Terraced Mountains',
      titleAr: 'جبال تعز المدرجة',
      location: 'Taiz',
      locationAr: 'تعز',
      category: 'nature',
      description: 'The green terraced mountains of Taiz, Yemen\'s cultural capital.',
      descriptionAr: 'الجبال الخضراء المدرجة في تعز، العاصمة الثقافية لليمن.',
      image: '/gallery/yemen/taiz-mountains.jpg'
    },
    {
      id: 12,
      title: 'Corporate Conference',
      titleAr: 'مؤتمر شركات',
      location: 'Aden',
      locationAr: 'عدن',
      category: 'events',
      description: 'Professional corporate conference organized by Greenists.',
      descriptionAr: 'مؤتمر شركات احترافي نظمته جرينستس.',
      image: '/gallery/events/corporate-conference.jpg'
    },
    {
      id: 13,
      title: 'Wedding Celebration',
      titleAr: 'حفل زفاف',
      location: 'Aden',
      locationAr: 'عدن',
      category: 'events',
      description: 'Elegant wedding celebration with traditional Yemeni touches.',
      descriptionAr: 'حفل زفاف أنيق بلمسات يمنية تقليدية.',
      image: '/gallery/events/wedding.jpg'
    },
    {
      id: 14,
      title: 'Ibb Green Paradise',
      titleAr: 'جنة إب الخضراء',
      location: 'Ibb',
      locationAr: 'إب',
      category: 'nature',
      description: 'The lush green landscapes of Ibb, known as the green paradise of Yemen.',
      descriptionAr: 'المناظر الطبيعية الخضراء الخصبة في إب، المعروفة بجنة اليمن الخضراء.',
      image: '/gallery/yemen/ibb-green.jpg'
    }
  ];
  
  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a1810]">
      <Navigation />
      
      <main className="flex-1">
        {/* Magical Hero Section */}
        <section 
          ref={heroRef}
          className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0a1810 0%, #0d1f17 30%, #1a3a2a 60%, #0d1f17 100%)'
          }}
        >
          {/* Animated gradient orbs */}
          <div 
            className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #2D7A4A 0%, transparent 70%)',
              left: `${mousePosition.x * 0.02}px`,
              top: `${mousePosition.y * 0.02}px`,
              transition: 'left 0.3s ease-out, top 0.3s ease-out'
            }}
          />
          <div 
            className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
              right: `${mousePosition.x * 0.01}px`,
              bottom: `${mousePosition.y * 0.01}px`,
              transition: 'right 0.3s ease-out, bottom 0.3s ease-out'
            }}
          />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-green-500/20 border border-amber-400/30 rounded-full mb-8">
              <Crown className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">
                {language === 'ar' ? 'مجموعة فخر اليمن' : 'Yemen Pride Collection'}
              </span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-[#2D7A4A]">
                {language === 'ar' ? 'معرض' : 'Gallery'}
              </span>
              <br />
              <span className="text-white">
                {language === 'ar' ? 'التراث والإبداع' : 'Heritage & Art'}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-amber-400 font-semibold mb-4">
              {language === 'ar' 
                ? 'التراث الثقافي والاستدامة' 
                : 'Cultural Heritage & Sustainability'}
            </p>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              {language === 'ar'
                ? 'اكتشف صوراً نادرة من أرشيف اليمن التاريخي ومنتجات حصرية تحتفي بتراثنا العريق'
                : 'Discover rare photos from Yemen\'s historical archives and exclusive products celebrating our rich heritage'}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { value: '50+', label: language === 'ar' ? 'صورة تاريخية' : 'Historical Photos' },
                { value: '6', label: language === 'ar' ? 'مجموعات حصرية' : 'Exclusive Collections' },
                { value: '1800s', label: language === 'ar' ? 'أقدم صورة' : 'Oldest Photo' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-amber-400 rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Yemen Pride Collection Section */}
        <section 
          id="yemen-pride" 
          data-animate
          className={`py-20 bg-gradient-to-b from-[#0a1810] to-[#0d1f17] transition-all duration-1000 ${
            visibleSections.has('yemen-pride') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
                <ShoppingBag className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm">
                  {language === 'ar' ? 'منتجات حصرية' : 'Exclusive Products'}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {language === 'ar' ? 'مجموعة فخر اليمن' : 'Yemen Pride Collection'}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {language === 'ar'
                  ? 'منتجات فاخرة تحتفي بالتراث اليمني والاستدامة البيئية'
                  : 'Premium products celebrating Yemeni heritage and environmental sustainability'}
              </p>
              <p className="text-amber-400 text-sm mt-2">
                300 DPI, CMYK. Flat print-ready design. © Greenists.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {yemenPrideProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/50 transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Green matte frame effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D7A4A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Product Image Area */}
                  <div className="aspect-square bg-gradient-to-br from-[#2D7A4A]/30 to-[#1a5c35]/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-4 border-4 border-[#2D7A4A]/50 rounded-lg" />
                    <product.icon className="w-20 h-20 text-amber-400/80 group-hover:scale-110 transition-transform duration-500" />
                    
                    {/* Price badge */}
                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      ${product.price}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {language === 'ar' ? product.titleAr : product.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {language === 'ar' ? product.descriptionAr : product.description}
                    </p>
                    
                    {/* Cultural Note */}
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                      <p className="text-green-400 text-xs italic">
                        <strong>{language === 'ar' ? 'ملاحظة ثقافية:' : 'Cultural Note:'}</strong>{' '}
                        {language === 'ar' ? product.culturalNoteAr : product.culturalNote}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-amber-400">${product.price}</span>
                        <span className="text-gray-500 text-sm ml-2">
                          {product.priceYER.toLocaleString()} YER
                        </span>
                      </div>
                      <Button className="bg-[#2D7A4A] hover:bg-[#236339] text-white">
                        {language === 'ar' ? 'اطلب الآن' : 'Order Now'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Framed Photos Showcase */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {language === 'ar' ? 'صور مؤطرة للمكاتب والمنازل' : 'Framed Photos for Offices & Homes'}
                </h3>
                <p className="text-gray-400">
                  {language === 'ar'
                    ? 'لوحات فنية بإطارات خشبية فاخرة وخلفية خضراء مميزة'
                    : 'Art prints with premium wooden frames and distinctive green matte'}
                </p>
              </div>
              
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 overflow-hidden">
                <img 
                  src="/gallery/yemen-pride/framed-photos.webp" 
                  alt="Greenists Framed Photos Collection"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-[#2D7A4A] font-bold">© Greenists</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-[#0d1f17] border-y border-white/10 sticky top-0 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 ${
                      selectedCategory === cat.id 
                        ? 'bg-gradient-to-r from-[#2D7A4A] to-[#236339] border-0 text-white' 
                        : 'border-white/20 text-gray-400 hover:bg-white/10 hover:text-white hover:border-amber-400/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {language === 'ar' ? cat.labelAr : cat.labelEn}
                  </Button>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Historical Archives Section */}
        {(selectedCategory === 'all' || selectedCategory === 'historical') && (
          <section 
            id="historical-section"
            data-animate
            className={`py-16 bg-[#0a1810] transition-all duration-1000 ${
              visibleSections.has('historical-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
                  <History className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 text-sm">
                    {language === 'ar' ? 'أرشيف نادر' : 'Rare Archives'}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {language === 'ar' ? 'الأرشيف التاريخي' : 'Historical Archives'}
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  {language === 'ar'
                    ? 'صور نادرة من القرن التاسع عشر والعشرين توثق تاريخ اليمن العريق'
                    : 'Rare photographs from the 19th and 20th centuries documenting Yemen\'s rich history'}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Gallery Grid */}
        <section className="py-12 bg-[#0d1f17]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
                  onClick={() => setSelectedImage(item)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-amber-400/20 to-green-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group-hover:border-amber-400/50 transition-colors">
                    {/* Image */}
                    <div className="aspect-[4/3] relative overflow-hidden">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={language === 'ar' ? item.titleAr : item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <div className={`${item.image ? 'hidden' : ''} absolute inset-0 bg-gradient-to-br from-[#2D7A4A]/40 to-[#1a5c35]/60 flex items-center justify-center`}>
                        <Camera className="w-12 h-12 text-white/50" />
                      </div>
                      
                      {/* Historical badge */}
                      {item.isHistorical && (
                        <div className="absolute top-3 left-3 bg-amber-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <History className="w-3 h-3" />
                          {item.year}
                        </div>
                      )}
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Hover content */}
                      <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div>
                          <h3 className="font-bold text-white text-lg mb-1">
                            {language === 'ar' ? item.titleAr : item.title}
                          </h3>
                          <p className="text-amber-400 text-sm flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {language === 'ar' ? item.locationAr : item.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card content */}
                    <div className="p-4">
                      <h3 className="font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors">
                        {language === 'ar' ? item.titleAr : item.title}
                      </h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {language === 'ar' ? item.locationAr : item.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-[#0a1810] border-white/10">
            <DialogTitle className="sr-only">
              {selectedImage ? (language === 'ar' ? selectedImage.titleAr : selectedImage.title) : 'Image'}
            </DialogTitle>
            {selectedImage && (
              <div className="relative">
                {/* Navigation arrows */}
                <button 
                  onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image */}
                <div className="aspect-video bg-black flex items-center justify-center relative">
                  {selectedImage.image ? (
                    <img 
                      src={selectedImage.image} 
                      alt={language === 'ar' ? selectedImage.titleAr : selectedImage.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <Camera className="w-20 h-20 text-white/30" />
                  )}
                  
                  {/* Historical badge */}
                  {selectedImage.isHistorical && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                      <History className="w-4 h-4" />
                      {selectedImage.year}
                    </div>
                  )}
                </div>
                
                {/* Info */}
                <div className="p-6 bg-[#0d1f17]">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {language === 'ar' ? selectedImage.titleAr : selectedImage.title}
                      </h2>
                      <p className="text-amber-400 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {language === 'ar' ? selectedImage.locationAr : selectedImage.location}
                        {selectedImage.year && (
                          <>
                            <span className="text-gray-500">•</span>
                            <Calendar className="w-4 h-4" />
                            {selectedImage.year}
                          </>
                        )}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="border-white/20 text-gray-400 hover:text-white hover:border-amber-400">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="border-white/20 text-gray-400 hover:text-white hover:border-amber-400">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="border-white/20 text-gray-400 hover:text-white hover:border-amber-400">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4">
                    {language === 'ar' ? selectedImage.descriptionAr : selectedImage.description}
                  </p>
                  
                  {/* Historical Context */}
                  {selectedImage.historicalContext && (
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                      <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2">
                        <History className="w-4 h-4" />
                        {language === 'ar' ? 'السياق التاريخي' : 'Historical Context'}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {language === 'ar' ? selectedImage.historicalContextAr : selectedImage.historicalContext}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-[#0d1f17] to-[#0a1810] relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] bg-gradient-to-br from-[#2D7A4A]/20 to-amber-500/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Award className="w-16 h-16 text-amber-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {language === 'ar' 
                  ? 'احصل على مجموعة فخر اليمن' 
                  : 'Get the Yemen Pride Collection'}
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                {language === 'ar'
                  ? 'منتجات حصرية تحتفي بتراث اليمن - مثالية للمكاتب والمنازل والهدايا'
                  : 'Exclusive products celebrating Yemen\'s heritage - perfect for offices, homes, and gifts'}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 text-lg">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'تسوق الآن' : 'Shop Now'}
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
                  <Download className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'تحميل الكتالوج' : 'Download Catalog'}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
}
