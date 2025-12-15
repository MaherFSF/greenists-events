import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { Heart, Users, Camera, Music, Utensils, Sparkles, Calendar, BookOpen, Phone, Mail, MapPin, ArrowLeft, Flower2, Gift, Star } from 'lucide-react';

export default function WeddingsSector() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const services = [
    {
      icon: Heart,
      titleAr: 'تنظيم حفلات الزفاف',
      titleEn: 'Wedding Planning',
      descAr: 'تخطيط وتنظيم حفلات زفاف أحلامك من الألف إلى الياء',
      descEn: 'Planning and organizing your dream wedding from A to Z'
    },
    {
      icon: Flower2,
      titleAr: 'تنسيق الزهور والديكور',
      titleEn: 'Floral & Decor Design',
      descAr: 'تصاميم زهور وديكورات فاخرة تعكس ذوقك الرفيع',
      descEn: 'Luxurious floral and decor designs reflecting your refined taste'
    },
    {
      icon: Camera,
      titleAr: 'التصوير الاحترافي',
      titleEn: 'Professional Photography',
      descAr: 'توثيق لحظاتك الثمينة بأحدث تقنيات التصوير',
      descEn: 'Capturing your precious moments with the latest photography techniques'
    },
    {
      icon: Music,
      titleAr: 'الترفيه والموسيقى',
      titleEn: 'Entertainment & Music',
      descAr: 'فرق موسيقية ومنشدين وعروض ترفيهية متنوعة',
      descEn: 'Music bands, singers, and diverse entertainment shows'
    },
    {
      icon: Utensils,
      titleAr: 'الضيافة والطعام',
      titleEn: 'Catering & Cuisine',
      descAr: 'قوائم طعام يمنية وعالمية فاخرة',
      descEn: 'Luxurious Yemeni and international cuisine menus'
    },
    {
      icon: Gift,
      titleAr: 'هدايا الضيوف',
      titleEn: 'Guest Favors',
      descAr: 'تصميم وتوزيع هدايا مميزة للضيوف',
      descEn: 'Design and distribution of unique guest favors'
    }
  ];

  const packages = [
    {
      nameAr: 'باقة الياسمين',
      nameEn: 'Jasmine Package',
      priceUSD: 3000,
      priceYER: 5100000,
      featuresAr: ['حتى 100 ضيف', 'ديكور أساسي', 'تصوير 4 ساعات', 'ضيافة خفيفة'],
      featuresEn: ['Up to 100 guests', 'Basic decor', '4-hour photography', 'Light catering']
    },
    {
      nameAr: 'باقة الورد',
      nameEn: 'Rose Package',
      priceUSD: 7000,
      priceYER: 11900000,
      featuresAr: ['حتى 250 ضيف', 'ديكور فاخر', 'تصوير كامل', 'ضيافة شاملة', 'فرقة موسيقية'],
      featuresEn: ['Up to 250 guests', 'Luxury decor', 'Full photography', 'Full catering', 'Music band'],
      popular: true
    },
    {
      nameAr: 'باقة الماس',
      nameEn: 'Diamond Package',
      priceUSD: 15000,
      priceYER: 25500000,
      featuresAr: ['ضيوف بلا حدود', 'تصميم حصري', 'تصوير درون', 'ضيافة VIP', 'ترفيه نجوم', 'ليموزين'],
      featuresEn: ['Unlimited guests', 'Exclusive design', 'Drone photography', 'VIP catering', 'Star entertainment', 'Limousine']
    }
  ];

  const traditions = [
    {
      titleAr: 'ليلة الحناء',
      titleEn: 'Henna Night',
      descAr: 'احتفال تقليدي يمني بالحناء والأغاني الشعبية',
      descEn: 'Traditional Yemeni celebration with henna and folk songs'
    },
    {
      titleAr: 'الزفة اليمنية',
      titleEn: 'Yemeni Zaffa',
      descAr: 'موكب زفاف تقليدي بالطبول والمزمار',
      descEn: 'Traditional wedding procession with drums and mizmar'
    },
    {
      titleAr: 'العرضة العدنية',
      titleEn: 'Adeni Ardha',
      descAr: 'رقصة تقليدية عدنية للرجال',
      descEn: 'Traditional Adeni dance for men'
    },
    {
      titleAr: 'الشرح والبرع',
      titleEn: 'Sharh & Bara',
      descAr: 'رقصات يمنية تقليدية للاحتفال',
      descEn: 'Traditional Yemeni celebration dances'
    }
  ];

  const testimonials = [
    {
      nameAr: 'سارة وأحمد',
      nameEn: 'Sara & Ahmed',
      textAr: 'جرينستس حولت حلمنا إلى حقيقة. كل تفصيلة كانت مثالية!',
      textEn: 'Greenists turned our dream into reality. Every detail was perfect!'
    },
    {
      nameAr: 'فاطمة ومحمد',
      nameEn: 'Fatima & Mohammed',
      textAr: 'احترافية عالية واهتمام بأدق التفاصيل. شكراً جرينستس!',
      textEn: 'High professionalism and attention to the finest details. Thank you Greenists!'
    }
  ];

  const stats = [
    { value: '200+', labelAr: 'حفل زفاف', labelEn: 'Weddings' },
    { value: '50K+', labelAr: 'ضيف سعيد', labelEn: 'Happy Guests' },
    { value: '100%', labelAr: 'رضا العرسان', labelEn: 'Couple Satisfaction' },
    { value: '10+', labelAr: 'سنوات خبرة', labelEn: 'Years Experience' }
  ];

  return (
    <div className={`min-h-screen bg-pink-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section with Pink/Gold Accent */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="/images/sectors/weddings-yemen.png" 
          alt="Greenists Weddings" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/60 to-amber-900/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <Link href="/brands" className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>{isRTL ? 'العودة للعلامات التجارية' : 'Back to Brands'}</span>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-12 h-12 text-pink-300" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {isRTL ? 'جرينستس للأعراس' : 'Greenists Weddings'}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            {isRTL 
              ? 'نصنع أجمل ذكريات حياتك بلمسة يمنية أصيلة'
              : 'Creating the most beautiful memories of your life with authentic Yemeni touch'}
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/booking" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              {isRTL ? 'احجز موعدك' : 'Book Consultation'}
            </Link>
            <Link href="/gallery" className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold transition-colors backdrop-blur-sm">
              {isRTL ? 'معرض الأعراس' : 'Wedding Gallery'}
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-pink-600 to-amber-500 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-pink-100">{isRTL ? stat.labelAr : stat.labelEn}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          {isRTL ? 'خدمات الأعراس' : 'Wedding Services'}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {isRTL 
            ? 'كل ما تحتاجه لجعل يوم زفافك لا يُنسى'
            : 'Everything you need to make your wedding day unforgettable'}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-pink-500">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {isRTL ? service.titleAr : service.titleEn}
              </h3>
              <p className="text-gray-600">
                {isRTL ? service.descAr : service.descEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-pink-100 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {isRTL ? 'باقات الزفاف' : 'Wedding Packages'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg relative ${pkg.popular ? 'ring-2 ring-pink-500' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {isRTL ? 'الأكثر طلباً' : 'Most Popular'}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                  {isRTL ? pkg.nameAr : pkg.nameEn}
                </h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-pink-600">${pkg.priceUSD.toLocaleString()}</span>
                  <div className="text-sm text-gray-500">{pkg.priceYER.toLocaleString()} YER</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {(isRTL ? pkg.featuresAr : pkg.featuresEn).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <Star className="w-5 h-5 text-amber-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${pkg.popular ? 'bg-pink-600 hover:bg-pink-700 text-white' : 'bg-pink-100 hover:bg-pink-200 text-pink-700'}`}>
                  {isRTL ? 'احجز الآن' : 'Book Now'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yemeni Traditions Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          {isRTL ? 'التقاليد اليمنية' : 'Yemeni Traditions'}
        </h2>
        <p className="text-center text-gray-600 mb-12">
          {isRTL 
            ? 'نحافظ على تراثنا اليمني الأصيل في كل حفل'
            : 'We preserve our authentic Yemeni heritage in every celebration'}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traditions.map((tradition, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-100 to-pink-100 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Sparkles className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {isRTL ? tradition.titleAr : tradition.titleEn}
              </h3>
              <p className="text-gray-600 text-sm">
                {isRTL ? tradition.descAr : tradition.descEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-pink-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {isRTL ? 'قصص حب سعيدة' : 'Happy Love Stories'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{isRTL ? testimonial.textAr : testimonial.textEn}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <span className="font-semibold text-gray-800">
                    {isRTL ? testimonial.nameAr : testimonial.nameEn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-amber-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Heart className="w-16 h-16 mx-auto mb-6 text-white/80" />
          <h2 className="text-4xl font-bold mb-6">
            {isRTL ? 'ابدأ رحلة زفافك معنا' : 'Start Your Wedding Journey With Us'}
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            {isRTL 
              ? 'احجز استشارة مجانية مع خبراء الأعراس لدينا'
              : 'Book a free consultation with our wedding experts'}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="tel:+967773673918" className="flex items-center gap-2 bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors">
              <Phone className="w-5 h-5" />
              +967 773 673 918
            </a>
            <a href="mailto:weddings@greenists-events.com" className="flex items-center gap-2 bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors">
              <Mail className="w-5 h-5" />
              weddings@greenists-events.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Heart className="w-8 h-8 text-pink-500" />
            <span className="font-bold text-xl">{isRTL ? 'جرينستس للأعراس' : 'Greenists Weddings'}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-5 h-5" />
            <span>{isRTL ? 'بجانب فندق ريلاكس، خور مكسر، عدن، اليمن' : 'Next to Relax Hotel, Khormaksar, Aden, Yemen'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
