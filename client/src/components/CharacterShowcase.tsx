import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, Star, Award, Heart, Users } from 'lucide-react';

const characters = [
  {
    id: 'salim',
    nameEn: 'Salim',
    nameAr: 'سالم',
    roleEn: 'Senior Advisor',
    roleAr: 'المستشار الأول',
    descEn: 'With 20+ years of experience in Aden\'s event industry, Salim guides our most prestigious ceremonies.',
    descAr: 'بخبرة تزيد عن 20 عاماً في صناعة الفعاليات في عدن، يقود سالم أرقى احتفالاتنا.',
    image: '/mascots/salim-final.png',
    sectorImage: '/sectors/weddings-salim.png',
    color: '#1B4332',
    stats: { events: 500, rating: 4.9 }
  },
  {
    id: 'noor',
    nameEn: 'Noor',
    nameAr: 'نور',
    roleEn: 'Creative Director',
    roleAr: 'المديرة الإبداعية',
    descEn: 'Noor transforms visions into reality with innovative designs that blend tradition with modernity.',
    descAr: 'تحول نور الرؤى إلى واقع بتصاميم مبتكرة تمزج التراث بالحداثة.',
    image: '/mascots/noor-final.png',
    sectorImage: '/sectors/corporate-noor.png',
    color: '#7B2CBF',
    stats: { events: 350, rating: 4.8 }
  },
  {
    id: 'faris',
    nameEn: 'Faris',
    nameAr: 'فارس',
    roleEn: 'Operations Manager',
    roleAr: 'مدير العمليات',
    descEn: 'Faris ensures every detail is perfect, from logistics to execution, with military precision.',
    descAr: 'يضمن فارس كل التفاصيل بدقة عسكرية، من اللوجستيات إلى التنفيذ.',
    image: '/mascots/faris-final.png',
    sectorImage: '/sectors/healthcare-faris.png',
    color: '#0077B6',
    stats: { events: 420, rating: 4.9 }
  },
  {
    id: 'yasmin',
    nameEn: 'Yasmin',
    nameAr: 'ياسمين',
    roleEn: 'Kids Specialist',
    roleAr: 'أخصائية الأطفال',
    descEn: 'Yasmin creates magical moments for children with creativity and boundless energy.',
    descAr: 'تصنع ياسمين لحظات سحرية للأطفال بإبداع وطاقة لا حدود لها.',
    image: '/mascots/yasmin-final.png',
    sectorImage: '/sectors/kids-yasmin.png',
    color: '#FF6B6B',
    stats: { events: 280, rating: 5.0 }
  },
  {
    id: 'little-aden',
    nameEn: 'Little Aden',
    nameAr: 'عدن الصغير',
    roleEn: 'Brand Ambassador',
    roleAr: 'سفير العلامة',
    descEn: 'Our beloved mascot represents the spirit of Aden - vibrant, welcoming, and full of life!',
    descAr: 'تميمتنا المحبوبة تمثل روح عدن - نابضة بالحياة، مرحبة، ومليئة بالحيوية!',
    image: '/mascots/little-aden-final.png',
    sectorImage: '/mascots/little-aden-final.png',
    color: '#2D7A4A',
    stats: { events: 100, rating: 5.0 }
  }
];

export function CharacterShowcase() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate characters
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % characters.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeChar = characters[activeIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-[#1a3a2a] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {isRTL ? 'تعرف على فريقنا' : 'Meet Our Team'}
          </h2>
          <p className="text-xl text-gray-400">
            {isRTL ? 'خبراء متخصصون لخدمتك' : 'Dedicated experts at your service'}
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mt-8 rounded-full" />
        </div>

        {/* Character Display */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Character Image */}
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-3xl blur-3xl opacity-30 transition-colors duration-500"
                style={{ backgroundColor: activeChar.color }}
              />
              <div className={`relative transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <img 
                  src={activeChar.image}
                  alt={isRTL ? activeChar.nameAr : activeChar.nameEn}
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full shadow-lg">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Star className="w-5 h-5 fill-white" />
                    <span>{activeChar.stats.rating}</span>
                    <span className="text-white/70">|</span>
                    <span>{activeChar.stats.events}+ {isRTL ? 'فعالية' : 'Events'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Character Info */}
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'}`}>
              <div 
                className="inline-block px-4 py-2 rounded-full text-white text-sm font-medium mb-4"
                style={{ backgroundColor: activeChar.color }}
              >
                {isRTL ? activeChar.roleAr : activeChar.roleEn}
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {isRTL ? activeChar.nameAr : activeChar.nameEn}
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {isRTL ? activeChar.descAr : activeChar.descEn}
              </p>

              {/* Chat CTA */}
              <button 
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                <span>{isRTL ? `تحدث مع ${activeChar.nameAr}` : `Chat with ${activeChar.nameEn}`}</span>
              </button>
            </div>
          </div>

          {/* Character Selector */}
          <div className="flex justify-center gap-4 mt-16">
            {characters.map((char, index) => (
              <button
                key={char.id}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveIndex(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                  index === activeIndex 
                    ? 'border-amber-400 scale-110 shadow-lg shadow-amber-400/30' 
                    : 'border-white/20 opacity-60 hover:opacity-100 hover:border-white/40'
                }`}
              >
                <img 
                  src={char.image}
                  alt={char.nameEn}
                  className="w-full h-full object-cover"
                />
                {index === activeIndex && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CharacterShowcase;
