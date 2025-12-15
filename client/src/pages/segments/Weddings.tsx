import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';

// Real Aden venue data from research
const venues = [
  {
    name: { en: 'Gold Mohur Hotel & Resort', ar: 'فندق ومنتجع جولد موهر' },
    capacity: '150-800',
    priceRange: { usd: '$3,000-$10,000', yer: '5,100,000-17,000,000 ر.ي' },
    features: { en: 'Private beach, 5-star service, Ballroom', ar: 'شاطئ خاص، خدمة 5 نجوم، قاعة كبرى' },
    phone: '+967 2 204010',
    image: '/images/luxury-wedding-venue.png'
  },
  {
    name: { en: 'Coral Hotel - Aden', ar: 'فندق كورال - عدن' },
    capacity: '100-400',
    priceRange: { usd: '$2,000-$6,000', yer: '3,400,000-10,200,000 ر.ي' },
    features: { en: 'Near airport, Multiple halls, Modern tech', ar: 'قرب المطار، قاعات متعددة، تقنية حديثة' },
    phone: '+967 776 365 267',
    image: '/images/corporate-conference.png'
  },
  {
    name: { en: 'Qasr Al Arab Hall', ar: 'قاعة قصر العرب' },
    capacity: '200-600',
    priceRange: { usd: '$1,500-$4,000', yer: '2,550,000-6,800,000 ر.ي' },
    features: { en: 'Traditional style, Ma\'alla area, Affordable', ar: 'طراز تقليدي، منطقة المعلا، أسعار مناسبة' },
    phone: '248889',
    image: '/images/traditional-yemeni-hospitality.png'
  }
];

const weddingPackages = [
  {
    id: 'basic',
    name: { en: 'Jasmine Package', ar: 'باقة الياسمين' },
    subtitle: { en: 'Simple & Elegant', ar: 'بسيطة وأنيقة' },
    priceUSD: 2500,
    priceYER: 4250000,
    guests: '50-100',
    color: 'from-green-400 to-green-600',
    features: {
      en: [
        'Basic hall decoration',
        'Standard kousha (bridal stage)',
        'Basic lighting setup',
        'Background music system',
        'Event coordinator',
        'Basic photography (4 hours)',
        'Traditional coffee & dates service'
      ],
      ar: [
        'ديكور قاعة أساسي',
        'كوشة عروس قياسية',
        'إضاءة أساسية',
        'نظام موسيقى خلفية',
        'منسق فعاليات',
        'تصوير أساسي (4 ساعات)',
        'خدمة القهوة والتمر التقليدية'
      ]
    }
  },
  {
    id: 'silver',
    name: { en: 'Rose Package', ar: 'باقة الورد' },
    subtitle: { en: 'Classic Celebration', ar: 'احتفال كلاسيكي' },
    priceUSD: 5000,
    priceYER: 8500000,
    guests: '100-200',
    color: 'from-gray-300 to-gray-500',
    features: {
      en: [
        'Elegant hall decoration',
        'Premium kousha with flowers',
        'Professional lighting & effects',
        'DJ with sound system',
        'Senior event coordinator',
        'Full photography & videography',
        'Yemeni coffee corner',
        'Basic catering (appetizers)',
        'Bride entrance coordination',
        'Guest welcome service'
      ],
      ar: [
        'ديكور قاعة أنيق',
        'كوشة فاخرة مع زهور',
        'إضاءة وتأثيرات احترافية',
        'DJ مع نظام صوت',
        'منسق فعاليات أول',
        'تصوير فوتوغرافي وفيديو كامل',
        'ركن القهوة اليمنية',
        'ضيافة أساسية (مقبلات)',
        'تنسيق دخول العروس',
        'خدمة استقبال الضيوف'
      ]
    }
  },
  {
    id: 'gold',
    name: { en: 'Diamond Package', ar: 'باقة الماس' },
    subtitle: { en: 'Luxury Experience', ar: 'تجربة فاخرة' },
    priceUSD: 10000,
    priceYER: 17000000,
    guests: '200-400',
    color: 'from-yellow-400 to-yellow-600',
    popular: true,
    features: {
      en: [
        'Luxury hall decoration',
        'Custom designer kousha',
        'Advanced lighting & laser show',
        'Live band OR premium DJ',
        'VIP event management team',
        'Cinematic photography & 4K video',
        'Full Yemeni hospitality corner',
        'Premium catering (full dinner)',
        'Bride & groom entrance show',
        'Valet parking service',
        'Drone aerial photography',
        'Digital invitation design',
        'Wedding hashtag & social media',
        'Kids corner with supervisor'
      ],
      ar: [
        'ديكور قاعة فاخر',
        'كوشة مصممة خصيصاً',
        'إضاءة متقدمة وعرض ليزر',
        'فرقة موسيقية حية أو DJ مميز',
        'فريق إدارة فعاليات VIP',
        'تصوير سينمائي وفيديو 4K',
        'ركن الضيافة اليمنية الكامل',
        'ضيافة فاخرة (عشاء كامل)',
        'عرض دخول العروسين',
        'خدمة صف السيارات',
        'تصوير جوي بالدرون',
        'تصميم دعوة رقمية',
        'هاشتاق الزفاف ووسائل التواصل',
        'ركن أطفال مع مشرفة'
      ]
    }
  },
  {
    id: 'royal',
    name: { en: 'Royal Package', ar: 'الباقة الملكية' },
    subtitle: { en: 'Once in a Lifetime', ar: 'مرة في العمر' },
    priceUSD: 25000,
    priceYER: 42500000,
    guests: '400-800',
    color: 'from-purple-500 to-purple-700',
    features: {
      en: [
        'Everything in Diamond Package',
        'Multi-day celebration (3 days)',
        'Henna night organization',
        'Hammam day coordination',
        'Multiple venue coordination',
        'International photographer',
        'Fireworks display',
        'Luxury car for bride & groom',
        'Full catering for all events',
        'Dedicated bridal suite',
        'Personal stylist & makeup artist',
        'Live streaming for overseas guests',
        'Custom wedding website',
        'Professional wedding planner',
        'Post-wedding honeymoon planning'
      ],
      ar: [
        'كل ما في باقة الماس',
        'احتفال متعدد الأيام (3 أيام)',
        'تنظيم ليلة الحناء',
        'تنسيق يوم الحمام',
        'تنسيق أماكن متعددة',
        'مصور دولي',
        'عرض ألعاب نارية',
        'سيارة فاخرة للعروسين',
        'ضيافة كاملة لجميع الفعاليات',
        'جناح خاص للعروس',
        'مصمم أزياء وخبيرة تجميل',
        'بث مباشر للضيوف في الخارج',
        'موقع زفاف مخصص',
        'منظم زفاف محترف',
        'تخطيط شهر العسل'
      ]
    }
  }
];

const addOns = [
  { id: 'saffron', name: { en: 'Saffron Water Service', ar: 'خدمة ماء الزعفران' }, price: 50, icon: '🌸' },
  { id: 'honey', name: { en: 'Honey Water Service', ar: 'خدمة ماء العسل' }, price: 40, icon: '🍯' },
  { id: 'henna', name: { en: 'Henna Artist', ar: 'فنانة حناء' }, price: 150, icon: '✋' },
  { id: 'bakhoor', name: { en: 'Premium Bakhoor & Oud', ar: 'بخور وعود فاخر' }, price: 100, icon: '🌿' },
  { id: 'flowers', name: { en: 'Fresh Flower Arrangements', ar: 'تنسيقات زهور طبيعية' }, price: 300, icon: '💐' },
  { id: 'chocolate', name: { en: 'Chocolate Fountain', ar: 'نافورة شوكولاتة' }, price: 200, icon: '🍫' },
  { id: 'photobooth', name: { en: 'Photo Booth Station', ar: 'ركن التصوير الفوري' }, price: 250, icon: '📸' },
  { id: 'fireworks', name: { en: 'Indoor Sparklers Show', ar: 'عرض الشرارات الداخلية' }, price: 400, icon: '✨' },
  { id: 'ladies_bags', name: { en: 'Ladies Gift Bags', ar: 'حقائب هدايا للسيدات' }, price: 10, perUnit: true, icon: '👜' },
  { id: 'kids_corner', name: { en: 'Kids Corner + Nurse', ar: 'ركن أطفال + ممرضة' }, price: 300, icon: '👶' }
];

export default function Weddings() {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    const pkg = weddingPackages.find(p => p.id === selectedPackage);
    if (!pkg) return { usd: 0, yer: 0 };
    
    let totalUSD = pkg.priceUSD;
    selectedAddOns.forEach(id => {
      const addon = addOns.find(a => a.id === id);
      if (addon) totalUSD += addon.price;
    });
    
    return { usd: totalUSD, yer: totalUSD * 1700 };
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-pink-50 to-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src="/images/luxury-wedding-venue.png" 
          alt="Luxury Wedding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            {/* Character */}
            <img 
              src="/images/characters/greenists_weddings_character.png" 
              alt="Farah"
              className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-gold-400 shadow-2xl object-cover"
            />
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-green-400">Greenists</span>{' '}
              <span className="text-pink-300">{isRTL ? 'أعراس' : 'Weddings'}</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-pink-100">
              {isRTL 
                ? 'نحول أحلامك إلى حقيقة... من ليلة الحناء إلى ليلة العمر'
                : 'Turning your dreams into reality... from Henna night to the night of a lifetime'}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#packages" className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg">
                {isRTL ? 'اكتشف الباقات' : 'Explore Packages'}
              </a>
              <a href="/calculator" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-pink-600 transition-all">
                {isRTL ? 'احسب التكلفة' : 'Calculate Cost'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Yemeni Wedding Traditions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            {isRTL ? 'نحتفل بالتقاليد اليمنية الأصيلة' : 'Celebrating Authentic Yemeni Traditions'}
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '🛁', name: { en: 'Hammam Day', ar: 'يوم الحمام' }, desc: { en: 'Traditional bridal bath ceremony', ar: 'حفل الاستحمام التقليدي للعروس' } },
              { icon: '✋', name: { en: 'Henna Night', ar: 'ليلة الحناء' }, desc: { en: 'Beautiful henna designs & celebration', ar: 'تصاميم حناء جميلة واحتفال' } },
              { icon: '💃', name: { en: 'Zaffa Entrance', ar: 'الزفة' }, desc: { en: 'Grand musical bridal entrance', ar: 'دخول العروس الموسيقي الكبير' } },
              { icon: '🎉', name: { en: 'Wedding Night', ar: 'ليلة الزفاف' }, desc: { en: 'The magical celebration', ar: 'الاحتفال السحري' } }
            ].map((tradition, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-b from-pink-50 to-white border border-pink-100 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{tradition.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tradition.name[language]}</h3>
                <p className="text-gray-600">{tradition.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            {isRTL ? 'باقات الزفاف' : 'Wedding Packages'}
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            {isRTL ? 'اختر الباقة المناسبة لحفل أحلامك' : 'Choose the perfect package for your dream celebration'}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weddingPackages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`relative rounded-3xl overflow-hidden shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedPackage === pkg.id ? 'ring-4 ring-pink-500 scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                    {isRTL ? 'الأكثر طلباً' : 'Most Popular'}
                  </div>
                )}
                
                <div className={`bg-gradient-to-br ${pkg.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-1">{pkg.name[language]}</h3>
                  <p className="text-white/80 text-sm">{pkg.subtitle[language]}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${pkg.priceUSD.toLocaleString()}</span>
                    <span className="text-white/80 text-sm block">{pkg.priceYER.toLocaleString()} ر.ي</span>
                  </div>
                  <p className="mt-2 text-white/80">
                    {isRTL ? `${pkg.guests} ضيف` : `${pkg.guests} guests`}
                  </p>
                </div>
                
                <div className="bg-white p-6">
                  <ul className="space-y-2">
                    {pkg.features[language].slice(0, 6).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-500 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                    {pkg.features[language].length > 6 && (
                      <li className="text-pink-500 text-sm font-medium">
                        +{pkg.features[language].length - 6} {isRTL ? 'مزايا أخرى' : 'more features'}
                      </li>
                    )}
                  </ul>
                  
                  <button className={`w-full mt-4 py-3 rounded-xl font-bold transition-all ${
                    selectedPackage === pkg.id 
                      ? 'bg-pink-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-pink-100'
                  }`}>
                    {selectedPackage === pkg.id 
                      ? (isRTL ? 'تم الاختيار ✓' : 'Selected ✓')
                      : (isRTL ? 'اختر هذه الباقة' : 'Select Package')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            {isRTL ? 'إضافات مميزة' : 'Premium Add-ons'}
          </h2>
          <p className="text-center text-gray-600 mb-12">
            {isRTL ? 'أضف لمسات خاصة لجعل يومك أكثر تميزاً' : 'Add special touches to make your day even more memorable'}
          </p>
          
          <div className="grid md:grid-cols-5 gap-4">
            {addOns.map((addon) => (
              <div 
                key={addon.id}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  selectedAddOns.includes(addon.id)
                    ? 'border-pink-500 bg-pink-50'
                    : 'border-gray-200 hover:border-pink-300'
                }`}
                onClick={() => toggleAddOn(addon.id)}
              >
                <div className="text-3xl mb-2">{addon.icon}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{addon.name[language]}</h3>
                <p className="text-pink-600 font-bold">
                  ${addon.price}{addon.perUnit ? (isRTL ? '/وحدة' : '/unit') : ''}
                </p>
                {selectedAddOns.includes(addon.id) && (
                  <span className="text-green-500 text-sm">✓ {isRTL ? 'مضاف' : 'Added'}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            {isRTL ? 'قاعات وفنادق شركائنا في عدن' : 'Our Partner Venues in Aden'}
          </h2>
          <p className="text-center text-gray-600 mb-12">
            {isRTL ? 'أفضل القاعات والفنادق لحفل زفافك' : 'The finest halls and hotels for your wedding'}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {venues.map((venue, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <img src={venue.image} alt={venue.name[language]} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{venue.name[language]}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>👥 {isRTL ? 'السعة:' : 'Capacity:'} {venue.capacity} {isRTL ? 'ضيف' : 'guests'}</p>
                    <p>💰 {venue.priceRange.usd} / {venue.priceRange.yer}</p>
                    <p>✨ {venue.features[language]}</p>
                    <p>📞 {venue.phone}</p>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl font-bold hover:from-pink-600 hover:to-pink-700 transition-all">
                    {isRTL ? 'احجز الآن' : 'Book Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Summary */}
      {selectedPackage && (
        <section className="py-8 bg-pink-600 text-white sticky bottom-0 shadow-2xl">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">
                  {isRTL ? 'ملخص طلبك' : 'Your Selection'}
                </h3>
                <p className="text-pink-200">
                  {weddingPackages.find(p => p.id === selectedPackage)?.name[language]} + {selectedAddOns.length} {isRTL ? 'إضافات' : 'add-ons'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">${calculateTotal().usd.toLocaleString()}</p>
                <p className="text-pink-200">{calculateTotal().yer.toLocaleString()} ر.ي</p>
              </div>
              <a 
                href={`/booking?type=wedding&package=${selectedPackage}&addons=${selectedAddOns.join(',')}`}
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-100 transition-all"
              >
                {isRTL ? 'احجز الآن' : 'Book Now'}
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
