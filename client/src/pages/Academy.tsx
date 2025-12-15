import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
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
  Handshake,
  Play,
  Clock,
  Star,
  Trophy,
  Zap,
  FileText,
  Video,
  Download
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

// Enhanced sustainability courses with more details
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
    price: { en: '$299', ar: '299 دولار' },
    students: 234,
    rating: 4.9,
    lessons: 24,
    certificate: true,
    topics: [
      { en: 'Understanding ISO 20121 framework', ar: 'فهم إطار عمل ISO 20121' },
      { en: 'Implementing sustainability policies', ar: 'تنفيذ سياسات الاستدامة' },
      { en: 'Measuring environmental impact', ar: 'قياس الأثر البيئي' },
      { en: 'Certification process', ar: 'عملية الحصول على الشهادة' },
    ],
    modules: [
      { en: 'Introduction to ISO 20121', ar: 'مقدمة في ISO 20121', duration: '2h' },
      { en: 'Sustainability Policy Development', ar: 'تطوير سياسة الاستدامة', duration: '3h' },
      { en: 'Stakeholder Engagement', ar: 'إشراك أصحاب المصلحة', duration: '2.5h' },
      { en: 'Environmental Impact Assessment', ar: 'تقييم الأثر البيئي', duration: '4h' },
      { en: 'Implementation & Monitoring', ar: 'التنفيذ والمراقبة', duration: '3h' },
      { en: 'Certification Preparation', ar: 'التحضير للشهادة', duration: '2h' },
    ],
    icon: Award,
    color: 'from-green-600 to-emerald-500',
    image: '/images/courses/iso-20121.png',
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
    price: { en: '$149', ar: '149 دولار' },
    students: 567,
    rating: 4.8,
    lessons: 16,
    certificate: true,
    topics: [
      { en: 'Waste reduction strategies', ar: 'استراتيجيات تقليل النفايات' },
      { en: 'Sustainable catering options', ar: 'خيارات التموين المستدام' },
      { en: 'Eco-friendly venue selection', ar: 'اختيار الأماكن الصديقة للبيئة' },
      { en: 'Carbon footprint calculation', ar: 'حساب البصمة الكربونية' },
    ],
    modules: [
      { en: 'What is Green Events?', ar: 'ما هي الفعاليات الخضراء؟', duration: '1.5h' },
      { en: 'Sustainable Venue Selection', ar: 'اختيار المكان المستدام', duration: '2h' },
      { en: 'Zero-Waste Strategies', ar: 'استراتيجيات صفر نفايات', duration: '2.5h' },
      { en: 'Green Catering & Food', ar: 'التموين والطعام الأخضر', duration: '2h' },
    ],
    icon: Leaf,
    color: 'from-lime-600 to-green-500',
    image: '/images/courses/green-planning.png',
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
    price: { en: '$199', ar: '199 دولار' },
    students: 189,
    rating: 4.7,
    lessons: 20,
    certificate: true,
    topics: [
      { en: 'Climate hazards in Aden region', ar: 'المخاطر المناخية في منطقة عدن' },
      { en: 'Water scarcity solutions', ar: 'حلول ندرة المياه' },
      { en: 'Heat-resilient event planning', ar: 'تخطيط فعاليات مقاومة للحرارة' },
      { en: 'Flood risk management', ar: 'إدارة مخاطر الفيضانات' },
    ],
    modules: [
      { en: 'Climate Science Basics', ar: 'أساسيات علم المناخ', duration: '2h' },
      { en: 'Yemen Climate Challenges', ar: 'تحديات المناخ في اليمن', duration: '3h' },
      { en: 'Adaptation Strategies', ar: 'استراتيجيات التكيف', duration: '2.5h' },
      { en: 'Case Studies from Aden', ar: 'دراسات حالة من عدن', duration: '2h' },
    ],
    icon: Sun,
    color: 'from-amber-600 to-orange-500',
    image: '/images/courses/climate-yemen.png',
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
    price: { en: '$79', ar: '79 دولار' },
    students: 892,
    rating: 4.9,
    lessons: 8,
    certificate: true,
    topics: [
      { en: 'Alternative materials', ar: 'المواد البديلة' },
      { en: 'Supplier partnerships', ar: 'شراكات الموردين' },
      { en: 'Guest communication', ar: 'التواصل مع الضيوف' },
      { en: 'Waste management systems', ar: 'أنظمة إدارة النفايات' },
    ],
    modules: [
      { en: 'The Plastic Problem', ar: 'مشكلة البلاستيك', duration: '1h' },
      { en: 'Sustainable Alternatives', ar: 'البدائل المستدامة', duration: '2h' },
      { en: 'Implementation Guide', ar: 'دليل التنفيذ', duration: '1.5h' },
      { en: 'Measuring Success', ar: 'قياس النجاح', duration: '1h' },
    ],
    icon: Recycle,
    color: 'from-teal-600 to-cyan-500',
    image: '/images/courses/plastic-free.png',
  },
  {
    id: 5,
    title: { en: 'Corporate Event Management Masterclass', ar: 'ماستركلاس إدارة فعاليات الشركات' },
    description: { 
      en: 'Comprehensive training on managing large-scale corporate events with sustainability focus.',
      ar: 'تدريب شامل على إدارة فعاليات الشركات الكبيرة مع التركيز على الاستدامة.'
    },
    duration: { en: '6 weeks', ar: '6 أسابيع' },
    level: { en: 'Advanced', ar: 'متقدم' },
    price: { en: '$499', ar: '499 دولار' },
    students: 156,
    rating: 4.8,
    lessons: 36,
    certificate: true,
    topics: [
      { en: 'Corporate event strategy', ar: 'استراتيجية فعاليات الشركات' },
      { en: 'Budget management', ar: 'إدارة الميزانية' },
      { en: 'Vendor negotiations', ar: 'التفاوض مع الموردين' },
      { en: 'ROI measurement', ar: 'قياس العائد على الاستثمار' },
    ],
    modules: [
      { en: 'Corporate Event Fundamentals', ar: 'أساسيات فعاليات الشركات', duration: '4h' },
      { en: 'Strategic Planning', ar: 'التخطيط الاستراتيجي', duration: '5h' },
      { en: 'Budget & Finance', ar: 'الميزانية والمالية', duration: '4h' },
      { en: 'Execution Excellence', ar: 'التميز في التنفيذ', duration: '5h' },
    ],
    icon: Building2,
    color: 'from-blue-600 to-indigo-500',
    image: '/images/courses/corporate.png',
  },
  {
    id: 6,
    title: { en: 'Wedding Planning Certification', ar: 'شهادة تخطيط حفلات الزفاف' },
    description: { 
      en: 'Become a certified wedding planner with expertise in Yemeni traditions and modern sustainability.',
      ar: 'احصل على شهادة مخطط حفلات زفاف مع خبرة في التقاليد اليمنية والاستدامة الحديثة.'
    },
    duration: { en: '8 weeks', ar: '8 أسابيع' },
    level: { en: 'Professional', ar: 'احترافي' },
    price: { en: '$599', ar: '599 دولار' },
    students: 312,
    rating: 4.9,
    lessons: 48,
    certificate: true,
    topics: [
      { en: 'Yemeni wedding traditions', ar: 'تقاليد الزفاف اليمنية' },
      { en: 'Sustainable decorations', ar: 'الديكورات المستدامة' },
      { en: 'Vendor management', ar: 'إدارة الموردين' },
      { en: 'Client relations', ar: 'علاقات العملاء' },
    ],
    modules: [
      { en: 'Wedding Industry Overview', ar: 'نظرة عامة على صناعة الزفاف', duration: '3h' },
      { en: 'Yemeni Traditions & Culture', ar: 'التقاليد والثقافة اليمنية', duration: '4h' },
      { en: 'Sustainable Wedding Design', ar: 'تصميم زفاف مستدام', duration: '5h' },
      { en: 'Business & Marketing', ar: 'الأعمال والتسويق', duration: '4h' },
    ],
    icon: Heart,
    color: 'from-pink-600 to-rose-500',
    image: '/images/courses/wedding.png',
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

// Certifications offered
const certifications = [
  {
    name: { en: 'Certified Sustainable Event Professional (CSEP)', ar: 'محترف فعاليات مستدامة معتمد' },
    description: { en: 'Industry-recognized certification for sustainable event management', ar: 'شهادة معترف بها في الصناعة لإدارة الفعاليات المستدامة' },
    requirements: { en: '3 courses + final exam', ar: '3 دورات + امتحان نهائي' },
    icon: Trophy,
  },
  {
    name: { en: 'Green Event Planner Certificate', ar: 'شهادة مخطط الفعاليات الخضراء' },
    description: { en: 'Foundation certification for eco-friendly event planning', ar: 'شهادة أساسية لتخطيط الفعاليات الصديقة للبيئة' },
    requirements: { en: '2 courses + project', ar: 'دورتان + مشروع' },
    icon: Leaf,
  },
  {
    name: { en: 'ISO 20121 Lead Implementer', ar: 'قائد تنفيذ ISO 20121' },
    description: { en: 'Advanced certification for ISO 20121 implementation', ar: 'شهادة متقدمة لتنفيذ ISO 20121' },
    requirements: { en: 'ISO course + 2 years experience', ar: 'دورة ISO + سنتان خبرة' },
    icon: Award,
  },
];

export default function Academy() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className={`min-h-screen bg-gradient-to-b from-green-50 to-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section with Video Background */}
      <section className="relative py-24 bg-gradient-to-r from-green-800 via-green-700 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="/videos/greenists-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-900/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <GraduationCap className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 font-serif">
            {isRTL ? 'أكاديمية جرينستس' : 'Greenists Academy'}
          </h1>
          <p className="text-xl md:text-2xl text-center text-green-100 max-w-3xl mx-auto mb-8">
            {isRTL 
              ? 'مركز التميز للتعليم البيئي وإدارة الفعاليات المستدامة في اليمن'
              : 'Center of Excellence for Environmental Education & Sustainable Event Management in Yemen'
            }
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-amber-400">6+</div>
              <div className="text-sm text-green-100">{isRTL ? 'دورات معتمدة' : 'Certified Courses'}</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-amber-400">2,350+</div>
              <div className="text-sm text-green-100">{isRTL ? 'متدرب' : 'Students'}</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-amber-400">4.8</div>
              <div className="text-sm text-green-100">{isRTL ? 'متوسط التقييم' : 'Avg Rating'}</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-amber-400">3</div>
              <div className="text-sm text-green-100">{isRTL ? 'شهادات مهنية' : 'Certifications'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="courses" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {isRTL ? 'الدورات' : 'Courses'}
              </TabsTrigger>
              <TabsTrigger value="certifications" className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                {isRTL ? 'الشهادات' : 'Certifications'}
              </TabsTrigger>
              <TabsTrigger value="calendar" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {isRTL ? 'التقويم' : 'Calendar'}
              </TabsTrigger>
              <TabsTrigger value="partners" className="flex items-center gap-2">
                <Handshake className="w-4 h-4" />
                {isRTL ? 'الشركاء' : 'Partners'}
              </TabsTrigger>
            </TabsList>

            {/* Courses Tab */}
            <TabsContent value="courses">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                  <Card 
                    key={course.id} 
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white"
                  >
                    <div className={`h-48 bg-gradient-to-br ${course.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <course.icon className="w-20 h-20 text-white/30" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-gray-800">
                          {course.level[language]}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <div className="flex items-center gap-1 text-white">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-semibold">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-white/80 text-sm">
                          <Users className="w-4 h-4" />
                          <span>{course.students}</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                        {course.title[language]}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {course.description[language]}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration[language]}
                        </div>
                        <div className="flex items-center gap-1">
                          <Video className="w-4 h-4" />
                          {course.lessons} {isRTL ? 'درس' : 'lessons'}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-600">{course.price[language]}</span>
                        <Button className="bg-green-600 hover:bg-green-700">
                          {isRTL ? 'سجل الآن' : 'Enroll Now'}
                          <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                        </Button>
                      </div>
                      
                      {course.certificate && (
                        <div className="mt-4 pt-4 border-t flex items-center gap-2 text-sm text-amber-600">
                          <Award className="w-4 h-4" />
                          {isRTL ? 'شهادة معتمدة' : 'Certificate Included'}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Certifications Tab */}
            <TabsContent value="certifications">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {isRTL ? 'الشهادات المهنية' : 'Professional Certifications'}
                  </h2>
                  <p className="text-gray-600">
                    {isRTL 
                      ? 'احصل على شهادات معترف بها دولياً في مجال إدارة الفعاليات المستدامة'
                      : 'Earn internationally recognized certifications in sustainable event management'
                    }
                  </p>
                </div>
                
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-6">
                          <div className="p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl text-white">
                            <cert.icon className="w-8 h-8" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                              {cert.name[language]}
                            </h3>
                            <p className="text-gray-600 mb-4">
                              {cert.description[language]}
                            </p>
                            <div className="flex items-center gap-4">
                              <Badge variant="outline" className="text-green-600 border-green-600">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                {cert.requirements[language]}
                              </Badge>
                              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                                {isRTL ? 'تعرف أكثر' : 'Learn More'}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Calendar Tab */}
            <TabsContent value="calendar">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {isRTL ? 'تقويم الأيام البيئية العالمية' : 'Environmental Awareness Calendar'}
                  </h2>
                  <p className="text-gray-600">
                    {isRTL 
                      ? 'أيام التوعية البيئية المهمة التي نحتفل بها ونقدم فعاليات خاصة لها'
                      : 'Important environmental awareness days we celebrate with special events'
                    }
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {environmentalDays.map((day, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-all group">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 ${day.color} rounded-xl text-white group-hover:scale-110 transition-transform`}>
                            <day.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">{day.name[language]}</div>
                            <div className="text-sm text-gray-500">{day.date}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Partners Tab */}
            <TabsContent value="partners">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {isRTL ? 'شركاؤنا' : 'Our Partners'}
                  </h2>
                  <p className="text-gray-600">
                    {isRTL 
                      ? 'نتعاون مع منظمات رائدة في مجال البيئة والاستدامة'
                      : 'We collaborate with leading organizations in environment and sustainability'
                    }
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {partners.map((partner, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                      <CardHeader className="text-center">
                        <div className="text-5xl mb-4">{partner.logo}</div>
                        <CardTitle>{partner.name[language]}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm mb-4">
                          {partner.description[language]}
                        </p>
                        <div className="space-y-2">
                          {partner.services.map((service, i) => (
                            <Badge key={i} variant="outline" className="mr-2 mb-2">
                              {service[language]}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Climate Facts Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isRTL ? 'التغير المناخي في اليمن' : 'Climate Change in Yemen'}
            </h2>
            <p className="text-amber-100 max-w-2xl mx-auto">
              {isRTL 
                ? 'حقائق مهمة عن تأثير التغير المناخي على اليمن ولماذا الفعاليات المستدامة مهمة'
                : 'Important facts about climate change impact on Yemen and why sustainable events matter'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {climateFacts.map((fact, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-white mb-2">{fact.stat}</div>
                <div className="text-amber-100 text-sm">{fact.label[language]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isRTL ? 'ابدأ رحلتك في الاستدامة اليوم' : 'Start Your Sustainability Journey Today'}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {isRTL 
              ? 'انضم إلى آلاف المتدربين الذين يصنعون فرقاً في مجال الفعاليات المستدامة'
              : 'Join thousands of trainees making a difference in sustainable events'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
              {isRTL ? 'تصفح الدورات' : 'Browse Courses'}
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              {isRTL ? 'تحدث مع مستشار' : 'Talk to Advisor'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
