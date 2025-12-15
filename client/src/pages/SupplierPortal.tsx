import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Building2, 
  Hotel, 
  UtensilsCrossed, 
  Palette, 
  Camera, 
  Car, 
  MapPin,
  Leaf,
  Award,
  CheckCircle2,
  Shield,
  Recycle,
  TreePine,
  Handshake,
  Star,
  BadgeCheck
} from 'lucide-react';

const supplierCategories = [
  { id: 'hotels', icon: Hotel, labelEn: 'Hotels & Venues', labelAr: 'الفنادق والقاعات' },
  { id: 'catering', icon: UtensilsCrossed, labelEn: 'Catering & Food', labelAr: 'التموين والطعام' },
  { id: 'decoration', icon: Palette, labelEn: 'Decoration & Flowers', labelAr: 'الديكور والزهور' },
  { id: 'photography', icon: Camera, labelEn: 'Photography & Video', labelAr: 'التصوير والفيديو' },
  { id: 'transport', icon: Car, labelEn: 'Transportation', labelAr: 'النقل والمواصلات' },
  { id: 'venues', icon: MapPin, labelEn: 'Outdoor Venues', labelAr: 'المواقع الخارجية' },
  { id: 'equipment', icon: Building2, labelEn: 'Equipment Rental', labelAr: 'تأجير المعدات' },
];

const sustainabilityPledges = [
  { id: 'waste', labelEn: 'Minimize waste and use recyclable materials', labelAr: 'تقليل النفايات واستخدام مواد قابلة لإعادة التدوير' },
  { id: 'energy', labelEn: 'Use energy-efficient practices', labelAr: 'استخدام ممارسات موفرة للطاقة' },
  { id: 'local', labelEn: 'Support local communities and suppliers', labelAr: 'دعم المجتمعات والموردين المحليين' },
  { id: 'water', labelEn: 'Conserve water resources', labelAr: 'الحفاظ على الموارد المائية' },
  { id: 'carbon', labelEn: 'Work towards reducing carbon footprint', labelAr: 'العمل على تقليل البصمة الكربونية' },
  { id: 'ethics', labelEn: 'Maintain ethical business practices', labelAr: 'الحفاظ على ممارسات تجارية أخلاقية' },
];

const certificationLevels = [
  { level: 'bronze', labelEn: 'Bronze Partner', labelAr: 'شريك برونزي', color: '#CD7F32', requirements: 3 },
  { level: 'silver', labelEn: 'Silver Partner', labelAr: 'شريك فضي', color: '#C0C0C0', requirements: 4 },
  { level: 'gold', labelEn: 'Gold Partner', labelAr: 'شريك ذهبي', color: '#D4AF37', requirements: 5 },
  { level: 'platinum', labelEn: 'Platinum Partner', labelAr: 'شريك بلاتيني', color: '#E5E4E2', requirements: 6 },
];

export default function SupplierPortal() {
  const { language } = useLanguage();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [acceptedPledges, setAcceptedPledges] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    companyName: '',
    companyNameAr: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    description: '',
    yearsInBusiness: '',
  });

  const toggleCategory = (id: string) => {
    setSelectedCategories(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const togglePledge = (id: string) => {
    setAcceptedPledges(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const getCertificationLevel = () => {
    const count = acceptedPledges.length;
    if (count >= 6) return certificationLevels[3];
    if (count >= 5) return certificationLevels[2];
    if (count >= 4) return certificationLevels[1];
    if (count >= 3) return certificationLevels[0];
    return null;
  };

  const currentLevel = getCertificationLevel();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2D7A4A] via-[#236339] to-[#1a4d2e] text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-40 h-40 border-2 border-white rounded-full" />
            <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/30 rounded-full" />
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {language === 'ar' ? 'بوابة الموردين' : 'Supplier Portal'}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
              {language === 'ar' 
                ? 'انضم إلى شبكة شركاء جرينستس الملتزمين بالاستدامة'
                : 'Join the Greenists network of sustainability-committed partners'}
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Leaf className="w-5 h-5 text-[#90EE90]" />
                <span>{language === 'ar' ? 'صديق للبيئة' : 'Eco-Friendly'}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-[#D4AF37]" />
                <span>{language === 'ar' ? 'شهادة معتمدة' : 'Certified'}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-[#87CEEB]" />
                <span>{language === 'ar' ? 'موثوق' : 'Trusted'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {language === 'ar' ? 'لماذا تصبح شريكاً؟' : 'Why Become a Partner?'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: Star, titleEn: 'Premium Clients', titleAr: 'عملاء مميزون', descEn: 'Access to high-value corporate and government events', descAr: 'الوصول إلى فعاليات الشركات والحكومة عالية القيمة' },
                { icon: BadgeCheck, titleEn: 'Certification', titleAr: 'شهادة معتمدة', descEn: 'Earn sustainability badges for your business', descAr: 'احصل على شارات الاستدامة لعملك' },
                { icon: Recycle, titleEn: 'Sustainability', titleAr: 'الاستدامة', descEn: 'Join Yemen\'s green business movement', descAr: 'انضم إلى حركة الأعمال الخضراء في اليمن' },
                { icon: TreePine, titleEn: 'Growth', titleAr: 'النمو', descEn: 'Expand your business with our network', descAr: 'وسّع عملك مع شبكتنا' },
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2D7A4A] to-[#236339] flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {language === 'ar' ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {language === 'ar' ? item.descAr : item.descEn}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Levels */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              {language === 'ar' ? 'مستويات الشراكة' : 'Partnership Levels'}
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'كلما التزمت بمعايير الاستدامة أكثر، ارتفع مستوى شراكتك'
                : 'The more sustainability standards you commit to, the higher your partnership level'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {certificationLevels.map((level, index) => (
                <Card 
                  key={level.level} 
                  className={`text-center transition-all ${
                    currentLevel?.level === level.level 
                      ? 'ring-2 ring-[#2D7A4A] shadow-xl scale-105' 
                      : 'hover:shadow-lg'
                  }`}
                  style={{ borderTop: `4px solid ${level.color}` }}
                >
                  <CardContent className="pt-8 pb-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: `${level.color}20` }}
                    >
                      <Award className="w-8 h-8" style={{ color: level.color }} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {language === 'ar' ? level.labelAr : level.labelEn}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {language === 'ar' 
                        ? `${level.requirements}+ معايير استدامة`
                        : `${level.requirements}+ sustainability pledges`}
                    </p>
                    {currentLevel?.level === level.level && (
                      <div className="mt-3 text-[#2D7A4A] font-medium text-sm flex items-center justify-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        {language === 'ar' ? 'مستواك الحالي' : 'Your Current Level'}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-[#2D7A4A] to-[#236339] text-white rounded-t-lg">
                <CardTitle className="text-2xl">
                  {language === 'ar' ? 'تسجيل كمورد' : 'Supplier Registration'}
                </CardTitle>
                <CardDescription className="text-white/80">
                  {language === 'ar' 
                    ? 'أكمل النموذج للانضمام إلى شبكة شركاء جرينستس'
                    : 'Complete the form to join the Greenists partner network'}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {/* Company Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#2D7A4A]" />
                    {language === 'ar' ? 'معلومات الشركة' : 'Company Information'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        {language === 'ar' ? 'اسم الشركة (إنجليزي)' : 'Company Name (English)'}
                      </label>
                      <Input 
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        {language === 'ar' ? 'اسم الشركة (عربي)' : 'Company Name (Arabic)'}
                      </label>
                      <Input 
                        value={formData.companyNameAr}
                        onChange={(e) => setFormData({...formData, companyNameAr: e.target.value})}
                        placeholder="اسم الشركة"
                        dir="rtl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        {language === 'ar' ? 'الشخص المسؤول' : 'Contact Person'}
                      </label>
                      <Input 
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </label>
                      <Input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                      </label>
                      <Input 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+967"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        {language === 'ar' ? 'سنوات الخبرة' : 'Years in Business'}
                      </label>
                      <Input 
                        type="number"
                        value={formData.yearsInBusiness}
                        onChange={(e) => setFormData({...formData, yearsInBusiness: e.target.value})}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">
                        {language === 'ar' ? 'العنوان' : 'Address'}
                      </label>
                      <Input 
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">
                        {language === 'ar' ? 'وصف الخدمات' : 'Services Description'}
                      </label>
                      <Textarea 
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Service Categories */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Palette className="w-5 h-5 text-[#2D7A4A]" />
                    {language === 'ar' ? 'فئات الخدمات' : 'Service Categories'}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {supplierCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => toggleCategory(category.id)}
                        className={`p-4 rounded-xl border-2 transition-all text-center ${
                          selectedCategories.includes(category.id)
                            ? 'border-[#2D7A4A] bg-[#2D7A4A]/10'
                            : 'border-gray-200 hover:border-[#2D7A4A]/50'
                        }`}
                      >
                        <category.icon className={`w-8 h-8 mx-auto mb-2 ${
                          selectedCategories.includes(category.id) ? 'text-[#2D7A4A]' : 'text-gray-400'
                        }`} />
                        <span className={`text-sm font-medium ${
                          selectedCategories.includes(category.id) ? 'text-[#2D7A4A]' : 'text-gray-600'
                        }`}>
                          {language === 'ar' ? category.labelAr : category.labelEn}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sustainability Pledge */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-[#2D7A4A]" />
                    {language === 'ar' ? 'تعهد الاستدامة' : 'Sustainability Pledge'}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {language === 'ar' 
                      ? 'اختر المعايير التي تلتزم بها شركتك (3 على الأقل للتأهل)'
                      : 'Select the standards your company commits to (minimum 3 to qualify)'}
                  </p>
                  
                  <div className="space-y-3 bg-gray-50 p-4 rounded-xl">
                    {sustainabilityPledges.map((pledge) => (
                      <label 
                        key={pledge.id}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                          acceptedPledges.includes(pledge.id) 
                            ? 'bg-[#2D7A4A]/10 border border-[#2D7A4A]' 
                            : 'bg-white border border-gray-200 hover:border-[#2D7A4A]/50'
                        }`}
                      >
                        <Checkbox 
                          checked={acceptedPledges.includes(pledge.id)}
                          onCheckedChange={() => togglePledge(pledge.id)}
                          className="data-[state=checked]:bg-[#2D7A4A] data-[state=checked]:border-[#2D7A4A]"
                        />
                        <span className="flex-1">
                          {language === 'ar' ? pledge.labelAr : pledge.labelEn}
                        </span>
                        {acceptedPledges.includes(pledge.id) && (
                          <CheckCircle2 className="w-5 h-5 text-[#2D7A4A]" />
                        )}
                      </label>
                    ))}
                  </div>

                  {/* Current Level Indicator */}
                  {currentLevel && (
                    <div 
                      className="mt-4 p-4 rounded-xl flex items-center gap-3"
                      style={{ backgroundColor: `${currentLevel.color}20` }}
                    >
                      <Award className="w-8 h-8" style={{ color: currentLevel.color }} />
                      <div>
                        <p className="font-bold">
                          {language === 'ar' ? 'مستوى التأهيل:' : 'Qualification Level:'} {language === 'ar' ? currentLevel.labelAr : currentLevel.labelEn}
                        </p>
                        <p className="text-sm text-gray-600">
                          {language === 'ar' 
                            ? `لقد اخترت ${acceptedPledges.length} من ${sustainabilityPledges.length} معايير`
                            : `You've selected ${acceptedPledges.length} of ${sustainabilityPledges.length} pledges`}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-[#2D7A4A] to-[#236339] hover:from-[#236339] hover:to-[#1a4d2e] text-lg py-6"
                  disabled={acceptedPledges.length < 3 || selectedCategories.length === 0}
                >
                  <Handshake className="w-5 h-5 me-2" />
                  {language === 'ar' ? 'تقديم طلب الشراكة' : 'Submit Partnership Application'}
                </Button>

                {(acceptedPledges.length < 3 || selectedCategories.length === 0) && (
                  <p className="text-center text-sm text-gray-500 mt-3">
                    {language === 'ar' 
                      ? 'يرجى اختيار فئة خدمة واحدة على الأقل و3 تعهدات استدامة'
                      : 'Please select at least 1 service category and 3 sustainability pledges'}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
