import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { Baby, Cake, Gift, Gamepad2, Music, Camera, Phone, Mail, MapPin, ArrowLeft, Star, Sparkles, PartyPopper, Palette, Smile } from 'lucide-react';

export default function KidsSector() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const services = [
    { icon: Cake, titleAr: 'حفلات أعياد الميلاد', titleEn: 'Birthday Parties', descAr: 'حفلات عيد ميلاد مميزة بثيمات متنوعة', descEn: 'Special birthday parties with various themes' },
    { icon: Gamepad2, titleAr: 'ألعاب ترفيهية', titleEn: 'Entertainment Games', descAr: 'ألعاب تفاعلية ومسابقات ممتعة للأطفال', descEn: 'Interactive games and fun competitions for kids' },
    { icon: Palette, titleAr: 'ورش الفنون', titleEn: 'Art Workshops', descAr: 'ورش رسم وأشغال يدوية إبداعية', descEn: 'Creative drawing and handicraft workshops' },
    { icon: Music, titleAr: 'عروض ترفيهية', titleEn: 'Entertainment Shows', descAr: 'عروض مهرجين وشخصيات كرتونية', descEn: 'Clown shows and cartoon characters' },
    { icon: PartyPopper, titleAr: 'حفلات التخرج', titleEn: 'Graduation Parties', descAr: 'احتفالات تخرج الروضة والمدارس', descEn: 'Kindergarten and school graduation celebrations' },
    { icon: Gift, titleAr: 'توزيعات وهدايا', titleEn: 'Favors & Gifts', descAr: 'تصميم توزيعات وهدايا مميزة للأطفال', descEn: 'Design of special favors and gifts for children' }
  ];

  const themes = [
    { nameAr: 'الأميرات', nameEn: 'Princesses', color: 'bg-pink-400' },
    { nameAr: 'الأبطال الخارقين', nameEn: 'Superheroes', color: 'bg-red-500' },
    { nameAr: 'الديناصورات', nameEn: 'Dinosaurs', color: 'bg-green-500' },
    { nameAr: 'الفضاء', nameEn: 'Space', color: 'bg-indigo-500' },
    { nameAr: 'البحر', nameEn: 'Ocean', color: 'bg-blue-400' },
    { nameAr: 'السيرك', nameEn: 'Circus', color: 'bg-yellow-500' },
    { nameAr: 'الحيوانات', nameEn: 'Animals', color: 'bg-orange-400' },
    { nameAr: 'يمني تراثي', nameEn: 'Yemeni Heritage', color: 'bg-emerald-600' }
  ];

  const packages = [
    { nameAr: 'باقة النجمة', nameEn: 'Star Package', priceUSD: 300, priceYER: 510000, guestsAr: 'حتى 15 طفل', guestsEn: 'Up to 15 kids', featuresAr: ['ديكور أساسي', 'كيكة', 'ألعاب', 'ساعتين'], featuresEn: ['Basic decor', 'Cake', 'Games', '2 hours'] },
    { nameAr: 'باقة القمر', nameEn: 'Moon Package', priceUSD: 600, priceYER: 1020000, guestsAr: 'حتى 30 طفل', guestsEn: 'Up to 30 kids', featuresAr: ['ديكور فاخر', 'كيكة مخصصة', 'مهرج', 'هدايا', '3 ساعات'], featuresEn: ['Luxury decor', 'Custom cake', 'Clown', 'Gifts', '3 hours'], popular: true },
    { nameAr: 'باقة الشمس', nameEn: 'Sun Package', priceUSD: 1200, priceYER: 2040000, guestsAr: 'حتى 50 طفل', guestsEn: 'Up to 50 kids', featuresAr: ['ثيم كامل', 'شخصيات كرتونية', 'نطيطة', 'تصوير', 'ضيافة كاملة'], featuresEn: ['Full theme', 'Cartoon characters', 'Bouncy castle', 'Photography', 'Full catering'] }
  ];

  const stats = [
    { value: '300+', labelAr: 'حفلة أطفال', labelEn: 'Kids Parties' },
    { value: '5K+', labelAr: 'طفل سعيد', labelEn: 'Happy Kids' },
    { value: '50+', labelAr: 'ثيم مختلف', labelEn: 'Different Themes' },
    { value: '100%', labelAr: 'ابتسامات', labelEn: 'Smiles' }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section with Colorful Accent */}
      <div className="relative h-[500px] overflow-hidden">
        <img src="/images/sectors/kids-yemen.png" alt="Greenists Kids" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 to-pink-900/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <Link href="/brands" className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>{isRTL ? 'العودة للعلامات التجارية' : 'Back to Brands'}</span>
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Baby className="w-12 h-12 text-yellow-300" />
            <Sparkles className="w-8 h-8 text-pink-300" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{isRTL ? 'جرينستس للأطفال' : 'Greenists Kids'}</h1>
          <p className="text-xl md:text-2xl max-w-3xl">{isRTL ? 'نصنع ذكريات سعيدة لأطفالكم الأعزاء' : 'Creating happy memories for your beloved children'}</p>
          <div className="mt-8 flex gap-4">
            <Link href="/booking" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">{isRTL ? 'احجز حفلتك' : 'Book Your Party'}</Link>
            <Link href="/gallery" className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold transition-colors backdrop-blur-sm">{isRTL ? 'معرض الحفلات' : 'Party Gallery'}</Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-pink-100">{isRTL ? stat.labelAr : stat.labelEn}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">{isRTL ? 'خدماتنا للأطفال' : 'Our Kids Services'}</h2>
        <p className="text-center text-gray-600 mb-12">{isRTL ? 'كل ما يحتاجه أطفالكم لحفلة لا تُنسى' : 'Everything your kids need for an unforgettable party'}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-purple-500">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{isRTL ? service.titleAr : service.titleEn}</h3>
              <p className="text-gray-600">{isRTL ? service.descAr : service.descEn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Themes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">{isRTL ? 'ثيمات الحفلات' : 'Party Themes'}</h2>
          <p className="text-center text-gray-600 mb-12">{isRTL ? 'اختر الثيم المفضل لطفلك' : 'Choose your child\'s favorite theme'}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {themes.map((theme, index) => (
              <div key={index} className={`${theme.color} rounded-2xl p-6 text-center text-white shadow-lg hover:scale-105 transition-transform cursor-pointer`}>
                <Sparkles className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <h3 className="font-bold text-lg">{isRTL ? theme.nameAr : theme.nameEn}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">{isRTL ? 'باقات الحفلات' : 'Party Packages'}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg relative ${pkg.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {isRTL ? 'الأكثر طلباً' : 'Most Popular'}
                  </div>
                )}
                <div className="text-center mb-6">
                  <Star className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-gray-800">{isRTL ? pkg.nameAr : pkg.nameEn}</h3>
                  <p className="text-gray-500">{isRTL ? pkg.guestsAr : pkg.guestsEn}</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-purple-600">${pkg.priceUSD}</span>
                  <div className="text-sm text-gray-500">{pkg.priceYER.toLocaleString()} YER</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {(isRTL ? pkg.featuresAr : pkg.featuresEn).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <Smile className="w-5 h-5 text-pink-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${pkg.popular ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'}`}>
                  {isRTL ? 'احجز الآن' : 'Book Now'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <PartyPopper className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-4xl font-bold mb-6">{isRTL ? 'اجعل حفلة طفلك لا تُنسى!' : 'Make Your Child\'s Party Unforgettable!'}</h2>
          <p className="text-xl mb-8 text-pink-100">{isRTL ? 'تواصل معنا لحجز موعد استشارة مجانية' : 'Contact us to book a free consultation'}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+967773673918" className="flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">
              <Phone className="w-5 h-5" /> +967 773 673 918
            </a>
            <a href="mailto:kids@greenists-events.com" className="flex items-center justify-center gap-2 bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors">
              <Mail className="w-5 h-5" /> kids@greenists-events.com
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Baby className="w-8 h-8 text-pink-500" />
            <span className="font-bold text-xl">{isRTL ? 'جرينستس للأطفال' : 'Greenists Kids'}</span>
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
