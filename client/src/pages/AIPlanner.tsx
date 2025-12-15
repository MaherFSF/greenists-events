import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { 
  Sparkles, 
  Wand2, 
  MessageSquare, 
  Lightbulb,
  Calendar,
  Users,
  MapPin,
  Palette,
  Utensils,
  Music,
  Camera,
  Gift,
  CheckCircle2,
  ArrowRight,
  Loader2,
  Star
} from 'lucide-react';

interface Suggestion {
  category: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: React.ElementType;
}

export default function AIPlanner() {
  const { language } = useLanguage();
  const [eventDescription, setEventDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showResults, setShowResults] = useState(false);
  
  // AI-generated suggestions based on event type keywords
  const generateSuggestions = () => {
    setIsAnalyzing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const desc = eventDescription.toLowerCase();
      const newSuggestions: Suggestion[] = [];
      
      // Venue suggestions
      if (desc.includes('wedding') || desc.includes('زفاف')) {
        newSuggestions.push({
          category: 'venue',
          titleEn: 'Beach Resort Venue',
          titleAr: 'منتجع شاطئي',
          descriptionEn: 'Gold Mohur Beach Resort offers stunning sunset views perfect for romantic ceremonies.',
          descriptionAr: 'منتجع شاطئ جولد موهور يوفر إطلالات غروب مذهلة مثالية للاحتفالات الرومانسية.',
          icon: MapPin,
        });
        newSuggestions.push({
          category: 'catering',
          titleEn: 'Traditional Yemeni Feast',
          titleAr: 'وليمة يمنية تقليدية',
          descriptionEn: 'Include Mandi, Zurbian, and traditional sweets for an authentic experience.',
          descriptionAr: 'تشمل المندي والزربيان والحلويات التقليدية لتجربة أصيلة.',
          icon: Utensils,
        });
      } else if (desc.includes('corporate') || desc.includes('شركة') || desc.includes('conference') || desc.includes('مؤتمر')) {
        newSuggestions.push({
          category: 'venue',
          titleEn: 'Aden Hotel Conference Hall',
          titleAr: 'قاعة مؤتمرات فندق عدن',
          descriptionEn: 'Professional setting with full AV equipment and business amenities.',
          descriptionAr: 'بيئة احترافية مع معدات صوتية ومرئية كاملة ووسائل راحة للأعمال.',
          icon: MapPin,
        });
        newSuggestions.push({
          category: 'tech',
          titleEn: 'Live Streaming Setup',
          titleAr: 'إعداد البث المباشر',
          descriptionEn: 'Reach remote attendees with professional live streaming services.',
          descriptionAr: 'الوصول إلى الحضور عن بُعد مع خدمات البث المباشر الاحترافية.',
          icon: Camera,
        });
      } else if (desc.includes('government') || desc.includes('حكوم')) {
        newSuggestions.push({
          category: 'venue',
          titleEn: 'Official Government Hall',
          titleAr: 'القاعة الحكومية الرسمية',
          descriptionEn: 'Formal venue suitable for official ceremonies and diplomatic events.',
          descriptionAr: 'مكان رسمي مناسب للاحتفالات الرسمية والفعاليات الدبلوماسية.',
          icon: MapPin,
        });
      }
      
      // Default suggestions for all events
      newSuggestions.push({
        category: 'decoration',
        titleEn: 'Eco-Friendly Decorations',
        titleAr: 'ديكورات صديقة للبيئة',
        descriptionEn: 'Sustainable decorations using local materials and reusable elements.',
        descriptionAr: 'ديكورات مستدامة باستخدام مواد محلية وعناصر قابلة لإعادة الاستخدام.',
        icon: Palette,
      });
      
      newSuggestions.push({
        category: 'entertainment',
        titleEn: 'Traditional Yemeni Music',
        titleAr: 'موسيقى يمنية تقليدية',
        descriptionEn: 'Live traditional music performance to celebrate Yemeni heritage.',
        descriptionAr: 'عرض موسيقى تقليدية حية للاحتفاء بالتراث اليمني.',
        icon: Music,
      });
      
      newSuggestions.push({
        category: 'gifts',
        titleEn: 'Branded Gift Sets',
        titleAr: 'مجموعات هدايا مميزة',
        descriptionEn: 'Custom gift packages featuring Yemeni coffee and local products.',
        descriptionAr: 'حزم هدايا مخصصة تتضمن القهوة اليمنية والمنتجات المحلية.',
        icon: Gift,
      });
      
      newSuggestions.push({
        category: 'timing',
        titleEn: 'Optimal Event Timing',
        titleAr: 'التوقيت الأمثل للفعالية',
        descriptionEn: 'Evening events recommended for Aden\'s climate (October-March best season).',
        descriptionAr: 'يُنصح بالفعاليات المسائية لمناخ عدن (أكتوبر-مارس أفضل موسم).',
        icon: Calendar,
      });
      
      setSuggestions(newSuggestions);
      setShowResults(true);
      setIsAnalyzing(false);
    }, 2000);
  };
  
  const quickPrompts = [
    { en: 'Plan a corporate conference for 200 guests', ar: 'خطط لمؤتمر شركات لـ 200 ضيف' },
    { en: 'Organize a traditional Yemeni wedding', ar: 'نظم حفل زفاف يمني تقليدي' },
    { en: 'Create a government ceremony event', ar: 'أنشئ فعالية احتفال حكومي' },
    { en: 'Design a product launch event', ar: 'صمم فعالية إطلاق منتج' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2D7A4A] via-[#236339] to-[#1a4d2e] text-white py-20 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {language === 'ar' ? 'مخطط الفعاليات الذكي' : 'AI Event Planner'}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'دع الذكاء الاصطناعي يساعدك في تخطيط فعاليتك المثالية'
                : 'Let AI help you plan your perfect event with smart recommendations'}
            </p>
          </div>
        </section>
        
        {/* AI Input Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-[#2D7A4A]" />
                  {language === 'ar' ? 'صف فعاليتك' : 'Describe Your Event'}
                </CardTitle>
                <CardDescription>
                  {language === 'ar' 
                    ? 'أخبرنا عن فعاليتك وسنقدم لك توصيات مخصصة'
                    : 'Tell us about your event and we\'ll provide personalized recommendations'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder={language === 'ar' 
                    ? 'مثال: أريد تنظيم حفل زفاف تقليدي لـ 300 ضيف في عدن خلال شهر مارس...'
                    : 'Example: I want to organize a traditional wedding for 300 guests in Aden during March...'}
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                  className="min-h-[120px] text-lg"
                />
                
                {/* Quick Prompts */}
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-2">
                    {language === 'ar' ? 'أو جرب:' : 'Or try:'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quickPrompts.map((prompt, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => setEventDescription(language === 'ar' ? prompt.ar : prompt.en)}
                        className="text-xs"
                      >
                        {language === 'ar' ? prompt.ar : prompt.en}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-6 bg-[#2D7A4A] hover:bg-[#236339] text-lg py-6"
                  onClick={generateSuggestions}
                  disabled={!eventDescription.trim() || isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-5 h-5 me-2 animate-spin" />
                      {language === 'ar' ? 'جاري التحليل...' : 'Analyzing...'}
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 me-2" />
                      {language === 'ar' ? 'احصل على التوصيات' : 'Get Recommendations'}
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* AI Results Section */}
        {showResults && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#2D7A4A] flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">
                  {language === 'ar' ? 'توصياتنا لك' : 'Our Recommendations'}
                </h2>
              </div>
              
              <div className="grid gap-4">
                {suggestions.map((suggestion, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#2D7A4A]/10 flex items-center justify-center flex-shrink-0">
                          <suggestion.icon className="w-6 h-6 text-[#2D7A4A]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-1">
                            {language === 'ar' ? suggestion.titleAr : suggestion.titleEn}
                          </h3>
                          <p className="text-gray-600">
                            {language === 'ar' ? suggestion.descriptionAr : suggestion.descriptionEn}
                          </p>
                        </div>
                        <CheckCircle2 className="w-6 h-6 text-[#2D7A4A] flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* CTA */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  {language === 'ar' 
                    ? 'هل تريد تنفيذ هذه التوصيات؟'
                    : 'Want to implement these recommendations?'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-[#2D7A4A] hover:bg-[#236339]">
                    {language === 'ar' ? 'احسب التكلفة' : 'Calculate Cost'}
                    <ArrowRight className="w-4 h-4 ms-2" />
                  </Button>
                  <Button variant="outline" className="border-[#2D7A4A] text-[#2D7A4A]">
                    {language === 'ar' ? 'تحدث مع خبير' : 'Talk to Expert'}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {language === 'ar' ? 'مميزات المخطط الذكي' : 'AI Planner Features'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: MessageSquare,
                  titleEn: 'Natural Language',
                  titleAr: 'لغة طبيعية',
                  descEn: 'Describe your event in your own words',
                  descAr: 'صف فعاليتك بكلماتك الخاصة',
                },
                {
                  icon: Star,
                  titleEn: 'Smart Recommendations',
                  titleAr: 'توصيات ذكية',
                  descEn: 'Get personalized suggestions based on your needs',
                  descAr: 'احصل على اقتراحات مخصصة بناءً على احتياجاتك',
                },
                {
                  icon: MapPin,
                  titleEn: 'Local Expertise',
                  titleAr: 'خبرة محلية',
                  descEn: 'Recommendations tailored for Aden and Yemen',
                  descAr: 'توصيات مصممة لعدن واليمن',
                },
              ].map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#2D7A4A]/10 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-[#2D7A4A]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {language === 'ar' ? feature.titleAr : feature.titleEn}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {language === 'ar' ? feature.descAr : feature.descEn}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
