import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  GraduationCap, 
  Leaf, 
  Calendar, 
  Award, 
  Users, 
  Globe, 
  TreePine,
  Droplets,
  Sun,
  Wind,
  Recycle,
  Heart,
  BookOpen,
  Target,
  CheckCircle,
  ArrowRight,
  Building2,
  Handshake
} from 'lucide-react';

// Environmental awareness days calendar
const environmentalDays = [
  { date: 'February 2', name: { en: 'World Wetlands Day', ar: 'اليوم العالمي للأراضي الرطبة' }, icon: Droplets, color: 'bg-blue-500' },
  { date: 'March 3', name: { en: 'World Wildlife Day', ar: 'اليوم العالمي للحياة البرية' }, icon: TreePine, color: 'bg-green-600' },
  { date: 'March 21', name: { en: 'International Day of Forests', ar: 'اليوم الدولي للغابات' }, icon: TreePine, color: 'bg-emerald-600' },
  { date: 'March 22', name: { en: 'World Water Day', ar: 'اليوم العالمي للمياه' }, icon: Droplets, color: 'bg-cyan-500' },
  { date: 'April 22', name: { en: 'Earth Day', ar: 'يوم الأرض' }, icon: Globe, color: 'bg-green-500' },
  { date: 'May 22', name: { en: 'International Day for Biological Diversity', ar: 'اليوم الدولي للتنوع البيولوجي' }, icon: Leaf, color: 'bg-lime-500' },
  { date: 'June 5', name: { en: 'World Environment Day', ar: 'اليوم العالمي للبيئة' }, icon: Globe, color: 'bg-green-600' },
  { date: 'June 8', name: { en: 'World Oceans Day', ar: 'اليوم العالمي للمحيطات' }, icon: Droplets, color: 'bg-blue-600' },
  { date: 'June 17', name: { en: 'World Day to Combat Desertification', ar: 'اليوم العالمي لمكافحة التصحر' }, icon: Sun, color: 'bg-amber-500' },
  { date: 'September 16', name: { en: 'International Day for the Preservation of the Ozone Layer', ar: 'اليوم الدولي لحماية طبقة الأوزون' }, icon: Wind, color: 'bg-sky-500' },
  { date: 'November 6', name: { en: 'International Day for Preventing Environmental Exploitation in War', ar: 'اليوم الدولي لمنع استغلال البيئة في الحروب' }, icon: Heart, color: 'bg-red-500' },
  { date: 'December 5', name: { en: 'World Soil Day', ar: 'اليوم العالمي للتربة' }, icon: Leaf, color: 'bg-amber-700' },
];

// Sustainability courses
const courses = [
  {
    id: 1,
    title: { en: 'ISO 20121 Event Sustainability Management', ar: 'إدارة استدامة الفعاليات ISO 20121' },
    description: { 
      en: 'Learn the international standard for sustainable event management systems based on Plan-Do-Check-Act methodology.',
      ar: 'تعلم المعيار الدولي لأنظمة إدارة الفعاليات المستدامة القائم على منهجية التخطيط-التنفيذ-التحقق-التصحيح.'
    },
    duration: { en: '4 weeks', ar: '4 أسابيع' },
    level: { en: 'Professional', ar: 'احترافي' },
    topics: [
      { en: 'Understanding ISO 20121 framework', ar: 'فهم إطار عمل ISO 20121' },
      { en: 'Implementing sustainability policies', ar: 'تنفيذ سياسات الاستدامة' },
      { en: 'Measuring environmental impact', ar: 'قياس الأثر البيئي' },
      { en: 'Certification process', ar: 'عملية الحصول على الشهادة' },
    ],
    icon: Award,
    color: 'from-green-600 to-emerald-500',
  },
  {
    id: 2,
    title: { en: 'Green Event Planning Fundamentals', ar: 'أساسيات تخطيط الفعاليات الخضراء' },
    description: { 
      en: 'Master the fundamentals of planning eco-friendly events that minimize environmental impact.',
      ar: 'إتقان أساسيات تخطيط الفعاليات الصديقة للبيئة التي تقلل من الأثر البيئي.'
    },
    duration: { en: '2 weeks', ar: 'أسبوعان' },
    level: { en: 'Beginner', ar: 'مبتدئ' },
    topics: [
      { en: 'Waste reduction strategies', ar: 'استراتيجيات تقليل النفايات' },
      { en: 'Sustainable catering options', ar: 'خيارات التموين المستدام' },
      { en: 'Eco-friendly venue selection', ar: 'اختيار الأماكن الصديقة للبيئة' },
      { en: 'Carbon footprint calculation', ar: 'حساب البصمة الكربونية' },
    ],
    icon: Leaf,
    color: 'from-lime-600 to-green-500',
  },
  {
    id: 3,
    title: { en: 'Climate Change & Yemen: Understanding the Impact', ar: 'التغير المناخي واليمن: فهم الأثر' },
    description: { 
      en: 'Explore how climate change affects Yemen and learn adaptation strategies for event planning.',
      ar: 'استكشف كيف يؤثر التغير المناخي على اليمن وتعلم استراتيجيات التكيف لتخطيط الفعاليات.'
    },
    duration: { en: '3 weeks', ar: '3 أسابيع' },
    level: { en: 'Intermediate', ar: 'متوسط' },
    topics: [
      { en: 'Climate hazards in Aden region', ar: 'المخاطر المناخية في منطقة عدن' },
      { en: 'Water scarcity solutions', ar: 'حلول ندرة المياه' },
      { en: 'Heat-resilient event planning', ar: 'تخطيط فعاليات مقاومة للحرارة' },
      { en: 'Flood risk management', ar: 'إدارة مخاطر الفيضانات' },
    ],
    icon: Sun,
    color: 'from-amber-600 to-orange-500',
  },
  {
    id: 4,
    title: { en: 'Plastic-Free Events Workshop', ar: 'ورشة الفعاليات الخالية من البلاستيك' },
    description: { 
      en: 'Practical workshop on eliminating single-use plastics from events in alignment with WED 2025 theme.',
      ar: 'ورشة عملية حول التخلص من البلاستيك أحادي الاستخدام من الفعاليات تماشياً مع موضوع يوم البيئة العالمي 2025.'
    },
    duration: { en: '1 week', ar: 'أسبوع واحد' },
    level: { en: 'All Levels', ar: 'جميع المستويات' },
    topics: [
      { en: 'Alternative materials', ar: 'المواد البديلة' },
      { en: 'Supplier partnerships', ar: 'شراكات الموردين' },
      { en: 'Guest communication', ar: 'التواصل مع الضيوف' },
      { en: 'Waste management systems', ar: 'أنظمة إدارة النفايات' },
    ],
    icon: Recycle,
    color: 'from-teal-600 to-cyan-500',
  },
];

// Partner organizations
const partners = [
  {
    name: { en: 'Holm Akhdar', ar: 'حلم أخضر' },
    description: { 
      en: 'Environmental research and consulting firm based in Aden, Yemen, founded in 2012. Specializes in Environmental Impact Assessment (EIA) and climate research.',
      ar: 'شركة أبحاث واستشارات بيئية مقرها عدن، اليمن، تأسست عام 2012. متخصصة في تقييم الأثر البيئي وأبحاث المناخ.'
    },
    services: [
      { en: 'Environmental Impact Assessment', ar: 'تقييم الأثر البيئي' },
      { en: 'Climate Research', ar: 'أبحاث المناخ' },
      { en: 'Environmental Policies', ar: 'السياسات البيئية' },
    ],
    logo: '🌿',
  },
  {
    name: { en: 'UNDP Yemen', ar: 'برنامج الأمم المتحدة الإنمائي - اليمن' },
    description: { 
      en: 'Supporting climate-resilient development and green economic recovery in Yemen.',
      ar: 'دعم التنمية المرنة مناخياً والتعافي الاقتصادي الأخضر في اليمن.'
    },
    services: [
      { en: 'Green Economic Recovery', ar: 'التعافي الاقتصادي الأخضر' },
      { en: 'Climate Adaptation', ar: 'التكيف المناخي' },
      { en: 'Sustainable Development', ar: 'التنمية المستدامة' },
    ],
    logo: '🇺🇳',
  },
  {
    name: { en: 'PERSGA', ar: 'المنظمة الإقليمية لحماية البحر الأحمر وخليج عدن' },
    description: { 
      en: 'Regional Organization for the Conservation of the Environment of the Red Sea and Gulf of Aden.',
      ar: 'المنظمة الإقليمية للحفاظ على بيئة البحر الأحمر وخليج عدن.'
    },
    services: [
      { en: 'Marine Conservation', ar: 'الحفاظ على البيئة البحرية' },
      { en: 'Coastal Management', ar: 'إدارة السواحل' },
      { en: 'Environmental Protection', ar: 'حماية البيئة' },
    ],
    logo: '🌊',
  },
];

// Climate facts about Yemen
const climateFacts = [
  { 
    stat: '3.9%', 
    label: { en: 'Annual GDP decline by 2040 under pessimistic climate scenarios', ar: 'انخفاض الناتج المحلي السنوي بحلول 2040 في السيناريوهات المناخية المتشائمة' }
  },
  { 
    stat: '50%', 
    label: { en: 'Population exposed to at least one significant climate hazard', ar: 'من السكان معرضون لخطر مناخي كبير واحد على الأقل' }
  },
  { 
    stat: '23%', 
    label: { en: 'Potential decline in fish stocks due to climate change', ar: 'انخفاض محتمل في مخزون الأسماك بسبب التغير المناخي' }
  },
  { 
    stat: '$5B+', 
    label: { en: 'Projected excess health costs by 2050 from climate-related issues', ar: 'تكاليف صحية إضافية متوقعة بحلول 2050 من المشاكل المتعلقة بالمناخ' }
  },
];

export default function Academy() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  return (
    <div className={`min-h-screen bg-gradient-to-b from-green-50 to-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <GraduationCap className="w-16 h-16" />
            <Leaf className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            {isRTL ? 'أكاديمية جرينستس' : 'Greenists Academy'}
          </h1>
          <p className="text-xl md:text-2xl text-center text-green-100 max-w-3xl mx-auto mb-8">
            {isRTL 
              ? 'مركز التميز للتعليم البيئي وإدارة الفعاليات المستدامة في اليمن'
              : 'Center of Excellence for Environmental Education & Sustainable Event Management in Yemen'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-white/20 text-white text-lg px-4 py-2">
              <Award className="w-5 h-5 mr-2" />
              {isRTL ? 'معتمد ISO 20121' : 'ISO 20121 Certified'}
            </Badge>
            <Badge className="bg-white/20 text-white text-lg px-4 py-2">
              <Users className="w-5 h-5 mr-2" />
              {isRTL ? '+500 متدرب' : '500+ Trainees'}
            </Badge>
            <Badge className="bg-white/20 text-white text-lg px-4 py-2">
              <Globe className="w-5 h-5 mr-2" />
              {isRTL ? 'شراكات دولية' : 'Global Partnerships'}
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              {isRTL ? 'الدورات' : 'Courses'}
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {isRTL ? 'التقويم البيئي' : 'Eco Calendar'}
            </TabsTrigger>
            <TabsTrigger value="climate" className="flex items-center gap-2">
              <Sun className="w-4 h-4" />
              {isRTL ? 'المناخ واليمن' : 'Climate & Yemen'}
            </TabsTrigger>
            <TabsTrigger value="partners" className="flex items-center gap-2">
              <Handshake className="w-4 h-4" />
              {isRTL ? 'الشركاء' : 'Partners'}
            </TabsTrigger>
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                {isRTL ? 'دورات الاستدامة والفعاليات الخضراء' : 'Sustainability & Green Events Courses'}
              </h2>
              <p className="text-gray-600 max-w-3xl">
                {isRTL 
                  ? 'برامج تدريبية شاملة مصممة لتأهيل المحترفين في مجال إدارة الفعاليات المستدامة وفق أعلى المعايير الدولية.'
                  : 'Comprehensive training programs designed to qualify professionals in sustainable event management according to the highest international standards.'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Card 
                  key={course.id} 
                  className={`overflow-hidden hover:shadow-xl transition-all cursor-pointer ${selectedCourse === course.id ? 'ring-2 ring-green-500' : ''}`}
                  onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
                >
                  <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${course.color} text-white`}>
                        <course.icon className="w-6 h-6" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline">{course.level[language]}</Badge>
                        <Badge variant="secondary">{course.duration[language]}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl mt-4">{course.title[language]}</CardTitle>
                    <CardDescription>{course.description[language]}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-gray-700">
                        {isRTL ? 'المواضيع المغطاة:' : 'Topics Covered:'}
                      </p>
                      <ul className="space-y-1">
                        {course.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {topic[language]}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {selectedCourse === course.id && (
                      <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                        {isRTL ? 'سجل الآن' : 'Enroll Now'}
                        <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* ISO 20121 Section */}
            <Card className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-green-600 rounded-xl text-white">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-green-800">
                      {isRTL ? 'شهادة ISO 20121' : 'ISO 20121 Certification'}
                    </CardTitle>
                    <CardDescription className="text-green-700">
                      {isRTL 
                        ? 'المعيار الدولي الرائد لأنظمة إدارة استدامة الفعاليات'
                        : 'The leading international standard for event sustainability management systems'
                      }
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {['Plan', 'Do', 'Check', 'Act'].map((step, idx) => (
                    <div key={step} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-lg">
                        {idx + 1}
                      </div>
                      <p className="font-semibold text-green-800">{step}</p>
                      <p className="text-sm text-gray-600">
                        {isRTL 
                          ? ['التخطيط', 'التنفيذ', 'التحقق', 'التصحيح'][idx]
                          : ['Planning', 'Implementation', 'Verification', 'Improvement'][idx]
                        }
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Environmental Calendar Tab */}
          <TabsContent value="calendar">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                {isRTL ? 'تقويم الأيام البيئية العالمية' : 'International Environmental Days Calendar'}
              </h2>
              <p className="text-gray-600 max-w-3xl">
                {isRTL 
                  ? 'أيام التوعية البيئية العالمية التي نحتفل بها ونستخدمها لنشر الوعي من خلال فعالياتنا.'
                  : 'Global environmental awareness days that we celebrate and use to spread awareness through our events.'
                }
              </p>
            </div>

            {/* World Environment Day 2025 Highlight */}
            <Card className="mb-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="p-6 bg-white/20 rounded-full">
                    <Globe className="w-16 h-16" />
                  </div>
                  <div className="flex-1 text-center md:text-start">
                    <Badge className="bg-white/30 text-white mb-2">
                      {isRTL ? '5 يونيو 2025' : 'June 5, 2025'}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2">
                      {isRTL ? 'يوم البيئة العالمي 2025' : 'World Environment Day 2025'}
                    </h3>
                    <p className="text-green-100 mb-4">
                      {isRTL 
                        ? 'الموضوع: إنهاء التلوث البلاستيكي - تستضيفه جمهورية كوريا'
                        : 'Theme: Ending Plastic Pollution - Hosted by Republic of Korea'
                      }
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <div className="text-center">
                        <p className="text-3xl font-bold">400M</p>
                        <p className="text-sm text-green-200">{isRTL ? 'طن بلاستيك/سنة' : 'tons plastic/year'}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold">9%</p>
                        <p className="text-sm text-green-200">{isRTL ? 'فقط يتم إعادة تدويره' : 'only recycled'}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold">23M</p>
                        <p className="text-sm text-green-200">{isRTL ? 'طن تتسرب للمحيطات' : 'tons leak to oceans'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {environmentalDays.map((day, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${day.color} text-white`}>
                        <day.icon className="w-5 h-5" />
                      </div>
                      <Badge variant="outline" className="text-xs">{day.date}</Badge>
                    </div>
                    <p className="font-semibold text-gray-800 text-sm">{day.name[language]}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Climate & Yemen Tab */}
          <TabsContent value="climate">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                {isRTL ? 'التغير المناخي وتأثيره على اليمن' : 'Climate Change Impact on Yemen'}
              </h2>
              <p className="text-gray-600 max-w-3xl">
                {isRTL 
                  ? 'اليمن من أكثر الدول تأثراً بالتغير المناخي. نعمل على رفع الوعي وتطوير حلول مستدامة.'
                  : 'Yemen is one of the most climate-vulnerable countries. We work to raise awareness and develop sustainable solutions.'
                }
              </p>
            </div>

            {/* Climate Statistics */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {climateFacts.map((fact, idx) => (
                <Card key={idx} className="text-center bg-gradient-to-b from-amber-50 to-orange-50 border-amber-200">
                  <CardContent className="p-6">
                    <p className="text-4xl font-bold text-amber-600 mb-2">{fact.stat}</p>
                    <p className="text-sm text-gray-600">{fact.label[language]}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Climate Challenges */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-700">
                    <Sun className="w-5 h-5" />
                    {isRTL ? 'التحديات المناخية في عدن' : 'Climate Challenges in Aden'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      { en: 'Rising temperatures faster than global average', ar: 'ارتفاع درجات الحرارة أسرع من المعدل العالمي' },
                      { en: 'Increased frequency of flash floods', ar: 'زيادة تكرار الفيضانات المفاجئة' },
                      { en: 'Water scarcity and drought conditions', ar: 'ندرة المياه وظروف الجفاف' },
                      { en: 'Coastal erosion and sea level rise', ar: 'تآكل السواحل وارتفاع مستوى البحر' },
                      { en: 'Heat waves affecting outdoor events', ar: 'موجات الحر تؤثر على الفعاليات الخارجية' },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item[language]}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Leaf className="w-5 h-5" />
                    {isRTL ? 'حلول جرينستس المستدامة' : 'Greenists Sustainable Solutions'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      { en: 'Solar-powered event equipment', ar: 'معدات فعاليات تعمل بالطاقة الشمسية' },
                      { en: 'Water-efficient event planning', ar: 'تخطيط فعاليات موفرة للمياه' },
                      { en: 'Climate-resilient venue selection', ar: 'اختيار أماكن مقاومة للمناخ' },
                      { en: 'Carbon offset programs', ar: 'برامج تعويض الكربون' },
                      { en: 'Waste reduction and recycling', ar: 'تقليل النفايات وإعادة التدوير' },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item[language]}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Holm Akhdar Research Highlight */}
            <Card className="mt-8 bg-gradient-to-r from-green-100 to-emerald-100 border-green-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="text-6xl">🌿</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">
                      {isRTL ? 'بحث حلم أخضر (مايو 2025)' : 'Holm Akhdar Research (May 2025)'}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {isRTL 
                        ? 'وجدت دراسة حلم أخضر أن حوالي 13.9% من النزوح في اليمن كان بسبب التغير المناخي، مع تأثر 69.8% من النازحين بأضرار الفيضانات على مصادر المياه.'
                        : 'A Holm Akhdar study found that approximately 13.9% of displacement in Yemen was due to climate change, with 69.8% of IDPs affected by flood damage to water sources.'
                      }
                    </p>
                    <div className="flex gap-4">
                      <Badge className="bg-green-600">13.9% {isRTL ? 'نزوح مناخي' : 'Climate Displacement'}</Badge>
                      <Badge className="bg-blue-600">69.8% {isRTL ? 'تأثر بالفيضانات' : 'Flood Affected'}</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Partners Tab */}
          <TabsContent value="partners">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                {isRTL ? 'شركاؤنا في الاستدامة' : 'Our Sustainability Partners'}
              </h2>
              <p className="text-gray-600 max-w-3xl">
                {isRTL 
                  ? 'نتعاون مع منظمات محلية ودولية رائدة لتعزيز الاستدامة البيئية في اليمن.'
                  : 'We collaborate with leading local and international organizations to promote environmental sustainability in Yemen.'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {partners.map((partner, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="text-5xl mb-4">{partner.logo}</div>
                    <CardTitle className="text-xl">{partner.name[language]}</CardTitle>
                    <CardDescription>{partner.description[language]}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-sm text-gray-700 mb-2">
                      {isRTL ? 'الخدمات:' : 'Services:'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {partner.services.map((service, sidx) => (
                        <Badge key={sidx} variant="secondary" className="text-xs">
                          {service[language]}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <CardContent className="p-8 text-center">
                <Building2 className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">
                  {isRTL ? 'انضم إلى شبكة شركاء جرينستس' : 'Join the Greenists Partner Network'}
                </h3>
                <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                  {isRTL 
                    ? 'هل أنت منظمة بيئية أو شركة ملتزمة بالاستدامة؟ انضم إلينا لبناء مستقبل أخضر لليمن.'
                    : 'Are you an environmental organization or a company committed to sustainability? Join us to build a green future for Yemen.'
                  }
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-green-50">
                  {isRTL ? 'تواصل معنا' : 'Contact Us'}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
