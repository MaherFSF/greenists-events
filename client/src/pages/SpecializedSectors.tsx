import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

// Specialized sector data
const sectors = [
  {
    id: 'medical',
    name: { en: 'Medical & Healthcare', ar: 'الطبي والصحي' },
    icon: '🏥',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    description: {
      en: 'Bringing together healthcare professionals, medical equipment suppliers, and health policymakers to advance Yemen\'s healthcare sector.',
      ar: 'نجمع المتخصصين في الرعاية الصحية وموردي المعدات الطبية وصناع السياسات الصحية للنهوض بقطاع الرعاية الصحية في اليمن.'
    },
    eventTypes: [
      {
        name: { en: 'Medical Conferences', ar: 'المؤتمرات الطبية' },
        description: { en: 'Annual medical symposiums bringing together doctors, researchers, and healthcare administrators', ar: 'ندوات طبية سنوية تجمع الأطباء والباحثين ومديري الرعاية الصحية' },
        icon: '👨‍⚕️'
      },
      {
        name: { en: 'Medical Equipment Exhibitions', ar: 'معارض المعدات الطبية' },
        description: { en: 'Showcasing latest medical technology and equipment from international suppliers', ar: 'عرض أحدث التقنيات والمعدات الطبية من الموردين الدوليين' },
        icon: '🔬'
      },
      {
        name: { en: 'Dental Symposiums', ar: 'ملتقيات طب الأسنان' },
        description: { en: 'Specialized events for dental professionals featuring new techniques and equipment', ar: 'فعاليات متخصصة لأطباء الأسنان تعرض التقنيات والمعدات الجديدة' },
        icon: '🦷'
      },
      {
        name: { en: 'Nursing Workshops', ar: 'ورش عمل التمريض' },
        description: { en: 'Training and development programs for nursing professionals', ar: 'برامج تدريب وتطوير للمتخصصين في التمريض' },
        icon: '💉'
      },
      {
        name: { en: 'Pharmaceutical Forums', ar: 'منتديات الأدوية' },
        description: { en: 'Connecting pharmaceutical companies with healthcare providers', ar: 'ربط شركات الأدوية بمقدمي الرعاية الصحية' },
        icon: '💊'
      }
    ],
    packages: [
      { name: { en: 'Basic Medical Event', ar: 'فعالية طبية أساسية' }, price: 5000, guests: '50-100' },
      { name: { en: 'Professional Conference', ar: 'مؤتمر احترافي' }, price: 15000, guests: '100-300' },
      { name: { en: 'International Medical Summit', ar: 'قمة طبية دولية' }, price: 50000, guests: '300-1000' }
    ],
    partners: ['Ministry of Health', 'Aden University Hospital', 'WHO Yemen', 'MSF']
  },
  {
    id: 'investment',
    name: { en: 'Investment & Business', ar: 'الاستثمار والأعمال' },
    icon: '💰',
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50',
    description: {
      en: 'Attracting international investors and facilitating business opportunities in Yemen\'s recovering economy.',
      ar: 'جذب المستثمرين الدوليين وتسهيل الفرص التجارية في اقتصاد اليمن المتعافي.'
    },
    eventTypes: [
      {
        name: { en: 'Investor Forums', ar: 'منتديات المستثمرين' },
        description: { en: 'Connecting international investors with Yemeni business opportunities', ar: 'ربط المستثمرين الدوليين بالفرص التجارية اليمنية' },
        icon: '📈'
      },
      {
        name: { en: 'Reconstruction Conferences', ar: 'مؤتمرات إعادة الإعمار' },
        description: { en: 'Coordinating reconstruction efforts and infrastructure development', ar: 'تنسيق جهود إعادة الإعمار وتطوير البنية التحتية' },
        icon: '🏗️'
      },
      {
        name: { en: 'Business Matchmaking', ar: 'ملتقيات رجال الأعمال' },
        description: { en: 'Facilitating partnerships between local and international businesses', ar: 'تسهيل الشراكات بين الشركات المحلية والدولية' },
        icon: '🤝'
      },
      {
        name: { en: 'Trade Exhibitions', ar: 'المعارض التجارية' },
        description: { en: 'Showcasing Yemeni products and attracting export opportunities', ar: 'عرض المنتجات اليمنية وجذب فرص التصدير' },
        icon: '🏪'
      },
      {
        name: { en: 'Banking & Finance Summits', ar: 'قمم البنوك والمالية' },
        description: { en: 'Advancing financial sector development and banking services', ar: 'تطوير القطاع المالي والخدمات المصرفية' },
        icon: '🏦'
      }
    ],
    packages: [
      { name: { en: 'Business Networking', ar: 'شبكات الأعمال' }, price: 8000, guests: '50-100' },
      { name: { en: 'Investment Forum', ar: 'منتدى استثماري' }, price: 25000, guests: '100-300' },
      { name: { en: 'International Business Summit', ar: 'قمة أعمال دولية' }, price: 75000, guests: '300-500' }
    ],
    partners: ['Chamber of Commerce', 'Central Bank of Yemen', 'UNDP', 'World Bank']
  },
  {
    id: 'government',
    name: { en: 'Government & Strategy', ar: 'الحكومي والاستراتيجي' },
    icon: '🏛️',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    description: {
      en: 'Supporting government initiatives, national strategies, and international cooperation for Yemen\'s development.',
      ar: 'دعم المبادرات الحكومية والاستراتيجيات الوطنية والتعاون الدولي لتنمية اليمن.'
    },
    eventTypes: [
      {
        name: { en: 'National Strategy Launches', ar: 'إطلاق الاستراتيجيات الوطنية' },
        description: { en: 'Official launches of government development strategies and plans', ar: 'الإطلاق الرسمي لاستراتيجيات وخطط التنمية الحكومية' },
        icon: '📋'
      },
      {
        name: { en: 'Sustainable Development Conferences', ar: 'مؤتمرات التنمية المستدامة' },
        description: { en: 'Advancing SDGs and sustainable development in Yemen', ar: 'تعزيز أهداف التنمية المستدامة في اليمن' },
        icon: '🌱'
      },
      {
        name: { en: 'International Cooperation Forums', ar: 'ملتقيات التعاون الدولي' },
        description: { en: 'Facilitating partnerships with international organizations and donors', ar: 'تسهيل الشراكات مع المنظمات الدولية والمانحين' },
        icon: '🌍'
      },
      {
        name: { en: 'Ministerial Meetings', ar: 'الاجتماعات الوزارية' },
        description: { en: 'High-level government meetings and cabinet sessions', ar: 'اجتماعات حكومية رفيعة المستوى وجلسات مجلس الوزراء' },
        icon: '👔'
      },
      {
        name: { en: 'Public Policy Workshops', ar: 'ورش السياسات العامة' },
        description: { en: 'Developing and reviewing public policies with stakeholders', ar: 'تطوير ومراجعة السياسات العامة مع أصحاب المصلحة' },
        icon: '📊'
      }
    ],
    packages: [
      { name: { en: 'Government Workshop', ar: 'ورشة حكومية' }, price: 10000, guests: '30-100' },
      { name: { en: 'Ministerial Conference', ar: 'مؤتمر وزاري' }, price: 35000, guests: '100-300' },
      { name: { en: 'National Summit', ar: 'قمة وطنية' }, price: 100000, guests: '300-1000' }
    ],
    partners: ['Prime Minister Office', 'Ministry of Planning', 'UN Agencies', 'EU Delegation']
  },
  {
    id: 'energy',
    name: { en: 'Energy & Oil', ar: 'الطاقة والنفط' },
    icon: '🛢️',
    color: 'from-gray-700 to-gray-800',
    bgColor: 'bg-gray-100',
    description: {
      en: 'Revitalizing Yemen\'s energy sector through conferences, exhibitions, and stakeholder engagement.',
      ar: 'إحياء قطاع الطاقة في اليمن من خلال المؤتمرات والمعارض وإشراك أصحاب المصلحة.'
    },
    eventTypes: [
      {
        name: { en: 'Oil & Gas Conferences', ar: 'مؤتمرات النفط والغاز' },
        description: { en: 'Industry conferences for oil and gas sector development', ar: 'مؤتمرات صناعية لتطوير قطاع النفط والغاز' },
        icon: '⛽'
      },
      {
        name: { en: 'Renewable Energy Forums', ar: 'منتديات الطاقة المتجددة' },
        description: { en: 'Promoting solar and wind energy solutions for Yemen', ar: 'تعزيز حلول الطاقة الشمسية وطاقة الرياح لليمن' },
        icon: '☀️'
      },
      {
        name: { en: 'Energy Investment Summits', ar: 'قمم الاستثمار في الطاقة' },
        description: { en: 'Attracting investment in Yemen\'s energy infrastructure', ar: 'جذب الاستثمار في البنية التحتية للطاقة في اليمن' },
        icon: '💡'
      }
    ],
    packages: [
      { name: { en: 'Energy Workshop', ar: 'ورشة طاقة' }, price: 12000, guests: '50-100' },
      { name: { en: 'Industry Conference', ar: 'مؤتمر صناعي' }, price: 40000, guests: '100-300' },
      { name: { en: 'Energy Summit', ar: 'قمة الطاقة' }, price: 80000, guests: '300-500' }
    ],
    partners: ['Ministry of Oil', 'PetroMasila', 'Yemen LNG', 'OPEC']
  },
  {
    id: 'education',
    name: { en: 'Education & Academia', ar: 'التعليم والأكاديمي' },
    icon: '🎓',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    description: {
      en: 'Advancing education quality and academic cooperation in Yemen through conferences and workshops.',
      ar: 'تطوير جودة التعليم والتعاون الأكاديمي في اليمن من خلال المؤتمرات وورش العمل.'
    },
    eventTypes: [
      {
        name: { en: 'University Conferences', ar: 'مؤتمرات الجامعات' },
        description: { en: 'Academic conferences and research symposiums', ar: 'مؤتمرات أكاديمية وندوات بحثية' },
        icon: '🏫'
      },
      {
        name: { en: 'Graduation Ceremonies', ar: 'حفلات التخرج' },
        description: { en: 'University and school graduation celebrations', ar: 'احتفالات تخرج الجامعات والمدارس' },
        icon: '🎓'
      },
      {
        name: { en: 'Education Technology Expos', ar: 'معارض تكنولوجيا التعليم' },
        description: { en: 'Showcasing educational technology and e-learning solutions', ar: 'عرض تكنولوجيا التعليم وحلول التعلم الإلكتروني' },
        icon: '💻'
      },
      {
        name: { en: 'Teacher Training Workshops', ar: 'ورش تدريب المعلمين' },
        description: { en: 'Professional development for educators', ar: 'التطوير المهني للمعلمين' },
        icon: '👩‍🏫'
      }
    ],
    packages: [
      { name: { en: 'Academic Workshop', ar: 'ورشة أكاديمية' }, price: 3000, guests: '30-100' },
      { name: { en: 'University Conference', ar: 'مؤتمر جامعي' }, price: 15000, guests: '100-500' },
      { name: { en: 'Education Summit', ar: 'قمة التعليم' }, price: 40000, guests: '500-1000' }
    ],
    partners: ['Ministry of Education', 'Aden University', 'UNESCO', 'UNICEF']
  },
  {
    id: 'technology',
    name: { en: 'Technology & Innovation', ar: 'التكنولوجيا والابتكار' },
    icon: '💻',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    description: {
      en: 'Fostering technological innovation and digital transformation in Yemen.',
      ar: 'تعزيز الابتكار التكنولوجي والتحول الرقمي في اليمن.'
    },
    eventTypes: [
      {
        name: { en: 'Tech Startup Events', ar: 'فعاليات الشركات الناشئة' },
        description: { en: 'Hackathons, pitch competitions, and startup showcases', ar: 'هاكاثون ومسابقات العروض ومعارض الشركات الناشئة' },
        icon: '🚀'
      },
      {
        name: { en: 'Digital Transformation Forums', ar: 'منتديات التحول الرقمي' },
        description: { en: 'Advancing digital services and e-government', ar: 'تطوير الخدمات الرقمية والحكومة الإلكترونية' },
        icon: '📱'
      },
      {
        name: { en: 'Cybersecurity Conferences', ar: 'مؤتمرات الأمن السيبراني' },
        description: { en: 'Protecting Yemen\'s digital infrastructure', ar: 'حماية البنية التحتية الرقمية لليمن' },
        icon: '🔒'
      }
    ],
    packages: [
      { name: { en: 'Tech Meetup', ar: 'لقاء تقني' }, price: 2000, guests: '30-100' },
      { name: { en: 'Innovation Forum', ar: 'منتدى الابتكار' }, price: 10000, guests: '100-300' },
      { name: { en: 'Tech Summit', ar: 'قمة التكنولوجيا' }, price: 30000, guests: '300-500' }
    ],
    partners: ['Ministry of Telecom', 'TeleYemen', 'Google Yemen', 'Tech Hubs']
  },
  {
    id: 'agriculture',
    name: { en: 'Agriculture & Food Security', ar: 'الزراعة والأمن الغذائي' },
    icon: '🌾',
    color: 'from-green-600 to-green-700',
    bgColor: 'bg-green-50',
    description: {
      en: 'Supporting Yemen\'s agricultural sector and food security initiatives.',
      ar: 'دعم القطاع الزراعي ومبادرات الأمن الغذائي في اليمن.'
    },
    eventTypes: [
      {
        name: { en: 'Agricultural Exhibitions', ar: 'المعارض الزراعية' },
        description: { en: 'Showcasing agricultural products and farming technology', ar: 'عرض المنتجات الزراعية وتكنولوجيا الزراعة' },
        icon: '🚜'
      },
      {
        name: { en: 'Food Security Conferences', ar: 'مؤتمرات الأمن الغذائي' },
        description: { en: 'Addressing food security challenges and solutions', ar: 'معالجة تحديات وحلول الأمن الغذائي' },
        icon: '🍞'
      },
      {
        name: { en: 'Fisheries Forums', ar: 'منتديات الثروة السمكية' },
        description: { en: 'Developing Yemen\'s fishing industry', ar: 'تطوير صناعة الصيد في اليمن' },
        icon: '🐟'
      }
    ],
    packages: [
      { name: { en: 'Farmers Workshop', ar: 'ورشة المزارعين' }, price: 3000, guests: '50-100' },
      { name: { en: 'Agricultural Fair', ar: 'معرض زراعي' }, price: 20000, guests: '200-500' },
      { name: { en: 'Food Security Summit', ar: 'قمة الأمن الغذائي' }, price: 50000, guests: '300-1000' }
    ],
    partners: ['Ministry of Agriculture', 'FAO', 'WFP', 'IFAD']
  },
  {
    id: 'tourism',
    name: { en: 'Tourism & Heritage', ar: 'السياحة والتراث' },
    icon: '🏛️',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
    description: {
      en: 'Promoting Yemen\'s rich cultural heritage and tourism potential.',
      ar: 'تعزيز التراث الثقافي الغني لليمن وإمكاناته السياحية.'
    },
    eventTypes: [
      {
        name: { en: 'Tourism Promotion Events', ar: 'فعاليات الترويج السياحي' },
        description: { en: 'Showcasing Yemen\'s tourism destinations', ar: 'عرض الوجهات السياحية في اليمن' },
        icon: '✈️'
      },
      {
        name: { en: 'Heritage Festivals', ar: 'مهرجانات التراث' },
        description: { en: 'Celebrating Yemeni culture and traditions', ar: 'الاحتفال بالثقافة والتقاليد اليمنية' },
        icon: '🎭'
      },
      {
        name: { en: 'Hotel Industry Conferences', ar: 'مؤتمرات صناعة الفنادق' },
        description: { en: 'Developing hospitality sector standards', ar: 'تطوير معايير قطاع الضيافة' },
        icon: '🏨'
      }
    ],
    packages: [
      { name: { en: 'Cultural Event', ar: 'فعالية ثقافية' }, price: 5000, guests: '100-300' },
      { name: { en: 'Heritage Festival', ar: 'مهرجان تراثي' }, price: 25000, guests: '500-2000' },
      { name: { en: 'Tourism Summit', ar: 'قمة السياحة' }, price: 60000, guests: '300-500' }
    ],
    partners: ['Ministry of Tourism', 'UNESCO', 'Aden Hotels Association', 'Yemen Tourism Board']
  }
];

// Aden recovery narrative
const adenRecoveryNarrative = {
  en: {
    title: 'Aden: Yemen\'s Recovering Capital',
    subtitle: 'A City Rising from Challenges to Opportunities',
    description: 'As Yemen\'s temporary capital, Aden is experiencing a remarkable recovery. The city is becoming a hub for international conferences, business forums, and development initiatives. Greenists is proud to be at the forefront of this transformation, organizing world-class events that bring together stakeholders from across the globe.',
    stats: [
      { value: '50+', label: 'International Organizations Present' },
      { value: '200+', label: 'Active NGOs' },
      { value: '$2B+', label: 'Reconstruction Investment' },
      { value: '1M+', label: 'Population' }
    ]
  },
  ar: {
    title: 'عدن: عاصمة اليمن المتعافية',
    subtitle: 'مدينة تنهض من التحديات إلى الفرص',
    description: 'كعاصمة مؤقتة لليمن، تشهد عدن تعافياً ملحوظاً. أصبحت المدينة مركزاً للمؤتمرات الدولية ومنتديات الأعمال ومبادرات التنمية. تفخر جرينستس بأن تكون في طليعة هذا التحول، حيث تنظم فعاليات عالمية المستوى تجمع أصحاب المصلحة من جميع أنحاء العالم.',
    stats: [
      { value: '+50', label: 'منظمة دولية موجودة' },
      { value: '+200', label: 'منظمة غير حكومية نشطة' },
      { value: '+$2 مليار', label: 'استثمار إعادة الإعمار' },
      { value: '+1 مليون', label: 'عدد السكان' }
    ]
  }
};

export default function SpecializedSectors() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const narrative = adenRecoveryNarrative[language];

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("/images/hero-aden-skyline.png")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              {isRTL ? '🌍 فعاليات متخصصة لقطاعات متنوعة' : '🌍 Specialized Events for Diverse Sectors'}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {isRTL ? 'نجمع أصحاب المصلحة' : 'Bringing Stakeholders Together'}
            </h1>
            
            <p className="text-xl text-green-100 mb-8">
              {isRTL 
                ? 'من المؤتمرات الطبية إلى منتديات الاستثمار، نحن شريككم الاستراتيجي لكل فعالية متخصصة في عدن واليمن'
                : 'From medical conferences to investment forums, we are your strategic partner for every specialized event in Aden and Yemen'}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#sectors" className="bg-white text-green-800 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-all">
                {isRTL ? 'استكشف القطاعات' : 'Explore Sectors'}
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                {isRTL ? 'تواصل معنا' : 'Contact Us'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Aden Recovery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{narrative.title}</h2>
            <p className="text-xl text-green-600 font-medium mb-6">{narrative.subtitle}</p>
            <p className="text-gray-600 text-lg">{narrative.description}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {narrative.stats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
                <p className="text-4xl font-bold text-green-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section id="sectors" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            {isRTL ? 'القطاعات المتخصصة' : 'Specialized Sectors'}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {isRTL 
              ? 'نقدم خدمات تنظيم الفعاليات المتخصصة لمختلف القطاعات، مع فهم عميق لاحتياجات كل قطاع'
              : 'We provide specialized event management services for various sectors, with deep understanding of each sector\'s needs'}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector) => (
              <div 
                key={sector.id}
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 ${
                  selectedSector === sector.id ? 'ring-4 ring-green-500' : ''
                }`}
                onClick={() => setSelectedSector(selectedSector === sector.id ? null : sector.id)}
              >
                <div className={`bg-gradient-to-br ${sector.color} p-6 text-white`}>
                  <span className="text-4xl block mb-3">{sector.icon}</span>
                  <h3 className="text-xl font-bold">{sector.name[language]}</h3>
                </div>
                <div className="bg-white p-4">
                  <p className="text-gray-600 text-sm line-clamp-2">{sector.description[language]}</p>
                  <p className="text-green-600 font-medium text-sm mt-2">
                    {sector.eventTypes.length} {isRTL ? 'أنواع فعاليات' : 'event types'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Sector Detail */}
      {selectedSector && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {(() => {
              const sector = sectors.find(s => s.id === selectedSector);
              if (!sector) return null;

              return (
                <div className="max-w-6xl mx-auto">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-5xl">{sector.icon}</span>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800">{sector.name[language]}</h2>
                      <p className="text-gray-600">{sector.description[language]}</p>
                    </div>
                  </div>

                  {/* Event Types */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {isRTL ? 'أنواع الفعاليات' : 'Event Types'}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-12">
                    {sector.eventTypes.map((eventType, idx) => (
                      <div key={idx} className={`p-6 rounded-xl ${sector.bgColor} border`}>
                        <span className="text-3xl block mb-3">{eventType.icon}</span>
                        <h4 className="font-bold text-gray-800 mb-2">{eventType.name[language]}</h4>
                        <p className="text-gray-600 text-sm">{eventType.description[language]}</p>
                      </div>
                    ))}
                  </div>

                  {/* Packages */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {isRTL ? 'الباقات المتاحة' : 'Available Packages'}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {sector.packages.map((pkg, idx) => (
                      <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border hover:shadow-xl transition-all">
                        <h4 className="font-bold text-gray-800 text-lg mb-2">{pkg.name[language]}</h4>
                        <p className="text-3xl font-bold text-green-600 mb-1">${pkg.price.toLocaleString()}</p>
                        <p className="text-gray-500 text-sm mb-4">{(pkg.price * 1700).toLocaleString()} ر.ي</p>
                        <p className="text-gray-600">
                          <span className="font-medium">{isRTL ? 'الضيوف:' : 'Guests:'}</span> {pkg.guests}
                        </p>
                        <button 
                          onClick={() => setShowInquiryForm(true)}
                          className={`w-full mt-4 py-3 rounded-xl font-bold transition-all bg-gradient-to-r ${sector.color} text-white hover:opacity-90`}
                        >
                          {isRTL ? 'استفسار' : 'Inquire'}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Partners */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {isRTL ? 'شركاؤنا في هذا القطاع' : 'Our Partners in This Sector'}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {sector.partners.map((partner, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isRTL ? 'هل لديك فعالية متخصصة؟' : 'Have a Specialized Event?'}
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            {isRTL 
              ? 'تواصل معنا لمناقشة احتياجاتك. فريقنا المتخصص جاهز لتحويل رؤيتك إلى حقيقة.'
              : 'Contact us to discuss your needs. Our specialized team is ready to turn your vision into reality.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-all">
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
            </a>
            <a href="/calculator" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              {isRTL ? 'احسب التكلفة' : 'Calculate Cost'}
            </a>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      {showInquiryForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {isRTL ? 'استفسار عن فعالية متخصصة' : 'Specialized Event Inquiry'}
            </h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder={isRTL ? 'الاسم الكامل' : 'Full Name'}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500"
              />
              <input 
                type="email" 
                placeholder={isRTL ? 'البريد الإلكتروني' : 'Email'}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500"
              />
              <input 
                type="tel" 
                placeholder={isRTL ? 'رقم الهاتف' : 'Phone Number'}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500"
              />
              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500">
                <option value="">{isRTL ? 'اختر القطاع' : 'Select Sector'}</option>
                {sectors.map(s => (
                  <option key={s.id} value={s.id}>{s.name[language]}</option>
                ))}
              </select>
              <textarea 
                rows={3}
                placeholder={isRTL ? 'تفاصيل الفعالية' : 'Event Details'}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500"
              />
              <div className="flex gap-3">
                <button 
                  type="button"
                  onClick={() => setShowInquiryForm(false)}
                  className="flex-1 py-3 rounded-xl border border-gray-300 font-bold hover:bg-gray-50"
                >
                  {isRTL ? 'إلغاء' : 'Cancel'}
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700"
                >
                  {isRTL ? 'إرسال' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
