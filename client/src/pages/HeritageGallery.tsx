import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { 
  MapPin, 
  Calendar, 
  Info, 
  Camera, 
  Building, 
  Mountain,
  Waves,
  TreePine,
  Castle,
  Landmark,
  Globe,
  AlertTriangle,
  Heart,
  ExternalLink
} from 'lucide-react';

// UNESCO World Heritage Sites in Yemen
const unescoSites = [
  {
    id: 1,
    name: { en: 'Old Walled City of Shibam', ar: 'مدينة شبام القديمة المسورة' },
    nickname: { en: 'Manhattan of the Desert', ar: 'مانهاتن الصحراء' },
    location: { en: 'Hadramaut Governorate', ar: 'محافظة حضرموت' },
    yearInscribed: 1982,
    description: {
      en: 'The oldest metropolis in the world to use vertical construction, featuring mud-brick tower houses rising 5-8 stories high. A stunning example of urban planning based on vertical construction.',
      ar: 'أقدم مدينة في العالم تستخدم البناء العمودي، تتميز بمنازل برجية من الطوب اللبن ترتفع 5-8 طوابق. مثال مذهل للتخطيط الحضري القائم على البناء العمودي.'
    },
    facts: [
      { en: '500+ tower houses', ar: '+500 منزل برجي' },
      { en: 'Built in 16th century', ar: 'بُنيت في القرن السادس عشر' },
      { en: 'Mud-brick construction', ar: 'بناء من الطوب اللبن' },
    ],
    status: 'danger',
    icon: Building,
    image: '/images/greenists_yemen_cultural_collection(4).png',
  },
  {
    id: 2,
    name: { en: 'Old City of Sana\'a', ar: 'مدينة صنعاء القديمة' },
    nickname: { en: 'Pearl of Arabia', ar: 'لؤلؤة الجزيرة العربية' },
    location: { en: 'Sana\'a Governorate', ar: 'محافظة صنعاء' },
    yearInscribed: 1986,
    description: {
      en: 'Situated at 2,200m altitude, inhabited for over 2,500 years. Contains over 6,000 houses built before the 11th century, featuring distinctive multi-story tower houses with geometric patterns.',
      ar: 'تقع على ارتفاع 2,200 متر، مأهولة منذ أكثر من 2,500 عام. تحتوي على أكثر من 6,000 منزل بُنيت قبل القرن الحادي عشر، تتميز بمنازل برجية متعددة الطوابق بأنماط هندسية مميزة.'
    },
    facts: [
      { en: '6,000+ historic houses', ar: '+6,000 منزل تاريخي' },
      { en: '103 mosques', ar: '103 مسجد' },
      { en: '14 hammams (bathhouses)', ar: '14 حمام' },
    ],
    status: 'danger',
    icon: Landmark,
    image: '/images/greenists_yemen_pride_collection(6).png',
  },
  {
    id: 3,
    name: { en: 'Historic Town of Zabid', ar: 'مدينة زبيد التاريخية' },
    nickname: { en: 'City of Knowledge', ar: 'مدينة العلم' },
    location: { en: 'Al Hudaydah Governorate', ar: 'محافظة الحديدة' },
    yearInscribed: 1993,
    description: {
      en: 'Capital of Yemen from 13th to 15th century, famous for its Islamic university which was a center of learning for the entire Islamic world. The city played an important role in spreading Islam.',
      ar: 'عاصمة اليمن من القرن الثالث عشر إلى الخامس عشر، اشتهرت بجامعتها الإسلامية التي كانت مركزاً للتعلم في العالم الإسلامي بأسره. لعبت المدينة دوراً مهماً في نشر الإسلام.'
    },
    facts: [
      { en: 'Historic Islamic university', ar: 'جامعة إسلامية تاريخية' },
      { en: 'Former capital of Yemen', ar: 'عاصمة اليمن السابقة' },
      { en: '86 mosques', ar: '86 مسجد' },
    ],
    status: 'danger',
    icon: Castle,
    image: '/images/greenists_yemen_pride_collection(7).png',
  },
  {
    id: 4,
    name: { en: 'Socotra Archipelago', ar: 'أرخبيل سقطرى' },
    nickname: { en: 'Galapagos of the Indian Ocean', ar: 'غالاباغوس المحيط الهندي' },
    location: { en: 'Socotra Governorate', ar: 'محافظة سقطرى' },
    yearInscribed: 2008,
    description: {
      en: 'A natural site of global importance for biodiversity conservation. 37% of its 825 plant species are endemic, including the iconic Dragon Blood Tree. Home to unique wildlife found nowhere else on Earth.',
      ar: 'موقع طبيعي ذو أهمية عالمية للحفاظ على التنوع البيولوجي. 37% من أنواعها النباتية البالغة 825 نوعاً متوطنة، بما في ذلك شجرة دم الأخوين الشهيرة. موطن لحياة برية فريدة لا توجد في أي مكان آخر على الأرض.'
    },
    facts: [
      { en: '37% endemic plant species', ar: '37% أنواع نباتية متوطنة' },
      { en: 'Dragon Blood Trees', ar: 'أشجار دم الأخوين' },
      { en: 'Unique wildlife', ar: 'حياة برية فريدة' },
    ],
    status: 'safe',
    icon: TreePine,
    image: '/images/greenists_aden_climate_collection(4).png',
  },
  {
    id: 5,
    name: { en: 'Landmarks of the Ancient Kingdom of Saba, Marib', ar: 'معالم مملكة سبأ القديمة، مأرب' },
    nickname: { en: 'Land of the Queen of Sheba', ar: 'أرض ملكة سبأ' },
    location: { en: 'Marib Governorate', ar: 'محافظة مأرب' },
    yearInscribed: 2023,
    description: {
      en: 'The most recent addition to Yemen\'s UNESCO sites, featuring the legendary Marib Dam and temples of the ancient Sabaean civilization. Represents one of the most important pre-Islamic civilizations.',
      ar: 'أحدث إضافة لمواقع اليونسكو في اليمن، تضم سد مأرب الأسطوري ومعابد الحضارة السبئية القديمة. تمثل واحدة من أهم الحضارات ما قبل الإسلام.'
    },
    facts: [
      { en: 'Ancient Marib Dam', ar: 'سد مأرب القديم' },
      { en: 'Sabaean temples', ar: 'معابد سبئية' },
      { en: 'Queen of Sheba legacy', ar: 'إرث ملكة سبأ' },
    ],
    status: 'danger',
    icon: Mountain,
    image: '/images/greenists_yemen_cultural_collection(4).png',
  },
];

// Aden Landmarks
const adenLandmarks = [
  {
    id: 1,
    name: { en: 'Cisterns of Tawila (Aden Tanks)', ar: 'صهاريج الطويلة (خزانات عدن)' },
    location: { en: 'Crater District, Aden', ar: 'منطقة كريتر، عدن' },
    description: {
      en: 'Ancient water cisterns carved into the volcanic rock of Crater, dating back over 2,000 years. These engineering marvels collected rainwater from the surrounding mountains and could hold millions of gallons.',
      ar: 'صهاريج مياه قديمة منحوتة في الصخور البركانية في كريتر، يعود تاريخها إلى أكثر من 2,000 عام. هذه الأعجوبة الهندسية جمعت مياه الأمطار من الجبال المحيطة ويمكنها استيعاب ملايين الجالونات.'
    },
    facts: [
      { en: '18 cisterns total', ar: '18 صهريج إجمالاً' },
      { en: '2,000+ years old', ar: 'عمرها +2,000 عام' },
      { en: 'Volcanic rock construction', ar: 'بناء من الصخور البركانية' },
    ],
    icon: Waves,
    image: '/images/03_outdoor_event_aden_scene(2).png',
  },
  {
    id: 2,
    name: { en: 'Sira Fortress', ar: 'قلعة صيرة' },
    location: { en: 'Sira Island, Aden', ar: 'جزيرة صيرة، عدن' },
    description: {
      en: 'A historic fortress perched on a volcanic rock island connected to Aden by a causeway. Built by the Portuguese in the 16th century, it offers panoramic views of Aden harbor and the Arabian Sea.',
      ar: 'قلعة تاريخية تقع على جزيرة صخرية بركانية متصلة بعدن بجسر. بناها البرتغاليون في القرن السادس عشر، وتوفر إطلالات بانورامية على ميناء عدن والبحر العربي.'
    },
    facts: [
      { en: '16th century construction', ar: 'بناء القرن السادس عشر' },
      { en: 'Portuguese origin', ar: 'أصل برتغالي' },
      { en: 'Strategic harbor views', ar: 'إطلالات استراتيجية على الميناء' },
    ],
    icon: Castle,
    image: '/images/04_aden_coastal_lifestyle(2).png',
  },
  {
    id: 3,
    name: { en: 'Aden Minaret (Big Ben of Aden)', ar: 'منارة عدن (بيج بن عدن)' },
    location: { en: 'Crater District, Aden', ar: 'منطقة كريتر، عدن' },
    description: {
      en: 'An iconic clock tower in the heart of Crater, often called the "Big Ben of Aden." This landmark has been a meeting point and symbol of Aden for generations.',
      ar: 'برج ساعة أيقوني في قلب كريتر، يُطلق عليه غالباً "بيج بن عدن". كان هذا المعلم نقطة التقاء ورمزاً لعدن لأجيال.'
    },
    facts: [
      { en: 'Historic clock tower', ar: 'برج ساعة تاريخي' },
      { en: 'Crater landmark', ar: 'معلم كريتر' },
      { en: 'Meeting point for generations', ar: 'نقطة التقاء لأجيال' },
    ],
    icon: Landmark,
    image: '/images/04_modern_office_workspace_scene(2).png',
  },
  {
    id: 4,
    name: { en: 'Gold Mohur Beach', ar: 'شاطئ جولد مور' },
    location: { en: 'Khormaksar, Aden', ar: 'خور مكسر، عدن' },
    description: {
      en: 'One of Aden\'s most beautiful beaches, known for its golden sand and clear blue waters. A popular destination for locals and visitors, perfect for swimming and relaxation.',
      ar: 'أحد أجمل شواطئ عدن، يشتهر برماله الذهبية ومياهه الزرقاء الصافية. وجهة شعبية للسكان المحليين والزوار، مثالي للسباحة والاسترخاء.'
    },
    facts: [
      { en: 'Golden sand beach', ar: 'شاطئ رملي ذهبي' },
      { en: 'Clear blue waters', ar: 'مياه زرقاء صافية' },
      { en: 'Popular swimming spot', ar: 'مكان سباحة شعبي' },
    ],
    icon: Waves,
    image: '/images/04_aden_coastal_lifestyle(2).png',
  },
];

// Cultural preservation initiatives
const preservationInitiatives = [
  {
    title: { en: 'Cash for Work Heritage Program', ar: 'برنامج النقد مقابل العمل للتراث' },
    description: { 
      en: 'Empowering urban youth through cultural heritage rehabilitation, providing employment while preserving Yemen\'s historic sites.',
      ar: 'تمكين الشباب الحضري من خلال إعادة تأهيل التراث الثقافي، وتوفير فرص العمل مع الحفاظ على المواقع التاريخية اليمنية.'
    },
    partners: ['UNESCO', 'Social Fund for Development'],
  },
  {
    title: { en: 'Digital Heritage Documentation', ar: 'التوثيق الرقمي للتراث' },
    description: { 
      en: 'Using 3D scanning and digital photography to create permanent records of Yemen\'s endangered heritage sites.',
      ar: 'استخدام المسح ثلاثي الأبعاد والتصوير الرقمي لإنشاء سجلات دائمة لمواقع التراث اليمنية المهددة.'
    },
    partners: ['ALIPH', 'HERITΛGE'],
  },
  {
    title: { en: 'Community Heritage Guardians', ar: 'حراس التراث المجتمعي' },
    description: { 
      en: 'Training local communities to protect and maintain their cultural heritage sites, creating sustainable preservation models.',
      ar: 'تدريب المجتمعات المحلية على حماية وصيانة مواقع تراثها الثقافي، وإنشاء نماذج حفظ مستدامة.'
    },
    partners: ['General Organization for the Preservation of Historic Cities'],
  },
];

export default function HeritageGallery() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [selectedSite, setSelectedSite] = useState<typeof unescoSites[0] | typeof adenLandmarks[0] | null>(null);

  return (
    <div className={`min-h-screen bg-gradient-to-b from-amber-50 to-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E")'
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Globe className="w-16 h-16" />
            <Castle className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            {isRTL ? 'معرض التراث اليمني' : 'Yemen Heritage Gallery'}
          </h1>
          <p className="text-xl md:text-2xl text-center text-amber-100 max-w-3xl mx-auto mb-8">
            {isRTL 
              ? 'اكتشف كنوز اليمن التاريخية ومواقع التراث العالمي'
              : 'Discover Yemen\'s Historical Treasures & World Heritage Sites'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-white/20 text-white text-lg px-4 py-2">
              <Globe className="w-5 h-5 mr-2" />
              {isRTL ? '5 مواقع يونسكو' : '5 UNESCO Sites'}
            </Badge>
            <Badge className="bg-white/20 text-white text-lg px-4 py-2">
              <Castle className="w-5 h-5 mr-2" />
              {isRTL ? 'معالم عدن' : 'Aden Landmarks'}
            </Badge>
            <Badge className="bg-white/20 text-white text-lg px-4 py-2">
              <Heart className="w-5 h-5 mr-2" />
              {isRTL ? 'الحفاظ على التراث' : 'Heritage Preservation'}
            </Badge>
          </div>
        </div>
      </section>

      {/* UNESCO World Heritage Sites */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">
              <Globe className="w-4 h-4 mr-1" />
              UNESCO
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              {isRTL ? 'مواقع التراث العالمي في اليمن' : 'Yemen UNESCO World Heritage Sites'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isRTL 
                ? 'خمسة مواقع استثنائية معترف بها من قبل اليونسكو لقيمتها الثقافية والطبيعية العالمية'
                : 'Five exceptional sites recognized by UNESCO for their outstanding universal cultural and natural value'
              }
            </p>
          </div>

          {/* Warning Banner */}
          <Card className="mb-8 bg-amber-50 border-amber-300">
            <CardContent className="p-4 flex items-center gap-4">
              <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-amber-800">
                  {isRTL ? 'ملاحظة مهمة' : 'Important Note'}
                </p>
                <p className="text-amber-700 text-sm">
                  {isRTL 
                    ? 'أربعة من المواقع الخمسة (صنعاء، شبام، زبيد، مأرب) مدرجة حالياً في قائمة التراث العالمي المعرض للخطر بسبب النزاع والتدهور.'
                    : 'Four of the five sites (Sana\'a, Shibam, Zabid, Marib) are currently inscribed on the List of World Heritage in Danger due to conflict and deterioration.'
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unescoSites.map((site) => (
              <Card 
                key={site.id} 
                className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => setSelectedSite(site)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={site.image} 
                    alt={site.name[language]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={site.status === 'danger' ? 'bg-red-500' : 'bg-green-500'}>
                        {site.status === 'danger' 
                          ? (isRTL ? 'معرض للخطر' : 'In Danger')
                          : (isRTL ? 'محمي' : 'Protected')
                        }
                      </Badge>
                      <Badge variant="secondary">{site.yearInscribed}</Badge>
                    </div>
                    <h3 className="text-white font-bold text-lg">{site.name[language]}</h3>
                    <p className="text-white/80 text-sm">{site.nickname[language]}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{site.location[language]}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {site.facts.slice(0, 2).map((fact, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {fact[language]}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aden Landmarks */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-amber-100 text-amber-800 mb-4">
              <MapPin className="w-4 h-4 mr-1" />
              {isRTL ? 'عدن' : 'Aden'}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              {isRTL ? 'معالم عدن التاريخية' : 'Historic Aden Landmarks'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isRTL 
                ? 'اكتشف المعالم الأيقونية لمدينة عدن، من الصهاريج القديمة إلى القلاع التاريخية'
                : 'Discover the iconic landmarks of Aden, from ancient cisterns to historic fortresses'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {adenLandmarks.map((landmark) => (
              <Card 
                key={landmark.id} 
                className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => setSelectedSite(landmark)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-1/2 h-48 md:h-auto overflow-hidden">
                    <img 
                      src={landmark.image} 
                      alt={landmark.name[language]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-amber-100 rounded-lg">
                        <landmark.icon className="w-5 h-5 text-amber-700" />
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {landmark.location[language]}
                      </div>
                    </div>
                    <h3 className="font-bold text-xl text-amber-800 mb-2">{landmark.name[language]}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{landmark.description[language]}</p>
                    <div className="flex flex-wrap gap-2">
                      {landmark.facts.map((fact, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {fact[language]}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Preservation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 mb-4">
              <Heart className="w-4 h-4 mr-1" />
              {isRTL ? 'الحفاظ على التراث' : 'Preservation'}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              {isRTL ? 'مبادرات الحفاظ على التراث' : 'Heritage Preservation Initiatives'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isRTL 
                ? 'جهود محلية ودولية للحفاظ على التراث الثقافي اليمني للأجيال القادمة'
                : 'Local and international efforts to preserve Yemen\'s cultural heritage for future generations'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {preservationInitiatives.map((initiative, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-green-800">{initiative.title[language]}</CardTitle>
                  <CardDescription>{initiative.description[language]}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    {isRTL ? 'الشركاء:' : 'Partners:'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {initiative.partners.map((partner, pidx) => (
                      <Badge key={pidx} variant="secondary" className="text-xs">
                        {partner}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Greenists Heritage Events */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Camera className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isRTL ? 'فعاليات جرينستس التراثية' : 'Greenists Heritage Events'}
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto mb-8">
            {isRTL 
              ? 'نقدم فعاليات تحتفي بالتراث اليمني الغني، من المعارض الثقافية إلى الجولات التراثية والاحتفالات التقليدية.'
              : 'We offer events that celebrate Yemen\'s rich heritage, from cultural exhibitions to heritage tours and traditional celebrations.'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-green-50">
              {isRTL ? 'احجز جولة تراثية' : 'Book Heritage Tour'}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              {isRTL ? 'فعاليات ثقافية' : 'Cultural Events'}
            </Button>
          </div>
        </div>
      </section>

      {/* Detail Dialog */}
      <Dialog open={!!selectedSite} onOpenChange={() => setSelectedSite(null)}>
        <DialogContent className="max-w-2xl">
          {selectedSite && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedSite.name[language]}</DialogTitle>
                {'nickname' in selectedSite && (
                  <DialogDescription className="text-lg text-amber-600">
                    {selectedSite.nickname[language]}
                  </DialogDescription>
                )}
              </DialogHeader>
              <div className="space-y-4">
                <img 
                  src={selectedSite.image} 
                  alt={selectedSite.name[language]}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedSite.location[language]}</span>
                  {'yearInscribed' in selectedSite && (
                    <>
                      <Calendar className="w-4 h-4 ml-4" />
                      <span>{isRTL ? 'أُدرج عام' : 'Inscribed'} {selectedSite.yearInscribed}</span>
                    </>
                  )}
                </div>
                <p className="text-gray-700">{selectedSite.description[language]}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedSite.facts.map((fact, idx) => (
                    <Badge key={idx} variant="outline">
                      {fact[language]}
                    </Badge>
                  ))}
                </div>
                {'status' in selectedSite && selectedSite.status === 'danger' && (
                  <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-4 flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <p className="text-red-700 text-sm">
                        {isRTL 
                          ? 'هذا الموقع مدرج حالياً في قائمة التراث العالمي المعرض للخطر'
                          : 'This site is currently on the List of World Heritage in Danger'
                        }
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
