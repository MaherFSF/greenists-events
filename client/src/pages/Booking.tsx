import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Calendar,
  Clock,
  Users,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Building2,
  Heart,
  Flower2,
  Landmark,
  Globe2,
  GraduationCap,
  Building,
  Baby,
  DollarSign,
  FileText,
  Send
} from 'lucide-react';

const eventTypes = [
  { id: 'corporate', icon: Building2, nameEn: 'Corporate', nameAr: 'شركات', color: '#1E3A5F' },
  { id: 'wedding', icon: Heart, nameEn: 'Wedding', nameAr: 'زفاف', color: '#B76E79' },
  { id: 'condolences', icon: Flower2, nameEn: 'Condolences', nameAr: 'عزاء', color: '#4A3B5C' },
  { id: 'banking', icon: Landmark, nameEn: 'Banking', nameAr: 'بنوك', color: '#D4AF37' },
  { id: 'ngo', icon: Globe2, nameEn: 'NGO', nameAr: 'منظمات', color: '#87CEEB' },
  { id: 'education', icon: GraduationCap, nameEn: 'Education', nameAr: 'تعليم', color: '#FF8C00' },
  { id: 'government', icon: Building, nameEn: 'Government', nameAr: 'حكومي', color: '#800020' },
  { id: 'kids', icon: Baby, nameEn: 'Kids', nameAr: 'أطفال', color: '#FFD700' },
];

const venueOptions = [
  { id: 'indoor', nameEn: 'Indoor Venue', nameAr: 'قاعة داخلية', price: 0 },
  { id: 'outdoor', nameEn: 'Outdoor Venue', nameAr: 'مكان خارجي', price: 200 },
  { id: 'beach', nameEn: 'Beach/Waterfront', nameAr: 'شاطئ/واجهة بحرية', price: 500 },
  { id: 'hotel', nameEn: 'Hotel Ballroom', nameAr: 'قاعة فندقية', price: 300 },
  { id: 'garden', nameEn: 'Garden/Park', nameAr: 'حديقة/منتزه', price: 250 },
];

const cateringOptions = [
  { id: 'basic', nameEn: 'Basic Package', nameAr: 'باقة أساسية', pricePerPerson: 15 },
  { id: 'standard', nameEn: 'Standard Package', nameAr: 'باقة قياسية', pricePerPerson: 25 },
  { id: 'premium', nameEn: 'Premium Package', nameAr: 'باقة مميزة', pricePerPerson: 40 },
  { id: 'luxury', nameEn: 'Luxury Package', nameAr: 'باقة فاخرة', pricePerPerson: 60 },
];

const additionalServices = [
  { id: 'photography', nameEn: 'Photography', nameAr: 'تصوير فوتوغرافي', price: 300 },
  { id: 'videography', nameEn: 'Videography', nameAr: 'تصوير فيديو', price: 500 },
  { id: 'decoration', nameEn: 'Premium Decoration', nameAr: 'ديكور فاخر', price: 400 },
  { id: 'entertainment', nameEn: 'Entertainment', nameAr: 'ترفيه', price: 350 },
  { id: 'flowers', nameEn: 'Flower Arrangements', nameAr: 'تنسيق زهور', price: 200 },
  { id: 'sound', nameEn: 'Sound System', nameAr: 'نظام صوتي', price: 250 },
  { id: 'lighting', nameEn: 'Special Lighting', nameAr: 'إضاءة خاصة', price: 300 },
  { id: 'kids_corner', nameEn: 'Kids Corner', nameAr: 'ركن الأطفال', price: 150 },
];

export default function Booking() {
  const { language } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: '',
    eventName: '',
    eventDate: '',
    eventTime: '',
    guestCount: 100,
    venue: '',
    catering: '',
    services: [] as string[],
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    notes: '',
  });

  const toggleService = (id: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(id) 
        ? prev.services.filter(s => s !== id)
        : [...prev.services, id]
    }));
  };

  const calculateTotal = () => {
    let total = 500; // Base price
    
    // Venue price
    const venue = venueOptions.find(v => v.id === formData.venue);
    if (venue) total += venue.price;
    
    // Catering price
    const catering = cateringOptions.find(c => c.id === formData.catering);
    if (catering) total += catering.pricePerPerson * formData.guestCount;
    
    // Additional services
    formData.services.forEach(serviceId => {
      const service = additionalServices.find(s => s.id === serviceId);
      if (service) total += service.price;
    });
    
    return total;
  };

  const totalUSD = calculateTotal();
  const totalYER = totalUSD * 1700;
  const totalSAR = totalUSD * 3.75;

  const steps = [
    { id: 1, nameEn: 'Event Type', nameAr: 'نوع الفعالية' },
    { id: 2, nameEn: 'Details', nameAr: 'التفاصيل' },
    { id: 3, nameEn: 'Services', nameAr: 'الخدمات' },
    { id: 4, nameEn: 'Contact', nameAr: 'التواصل' },
    { id: 5, nameEn: 'Review', nameAr: 'المراجعة' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2D7A4A] via-[#236339] to-[#1a4d2e] text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 leaf-pattern" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {language === 'ar' ? 'احجز فعاليتك' : 'Book Your Event'}
            </h1>
            <p className="text-white/80 max-w-xl mx-auto">
              {language === 'ar' 
                ? 'أكمل النموذج لحجز فعاليتك مع جرينستس'
                : 'Complete the form to book your event with Greenists'}
            </p>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="py-6 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 md:gap-4">
              {steps.map((s, index) => (
                <React.Fragment key={s.id}>
                  <button
                    onClick={() => s.id < step && setStep(s.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                      step === s.id 
                        ? 'bg-[#2D7A4A] text-white' 
                        : step > s.id 
                          ? 'bg-green-100 text-green-700 cursor-pointer hover:bg-green-200'
                          : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                      step > s.id ? 'bg-green-500 text-white' : ''
                    }`}>
                      {step > s.id ? <CheckCircle2 className="w-4 h-4" /> : s.id}
                    </span>
                    <span className="hidden md:inline text-sm font-medium">
                      {language === 'ar' ? s.nameAr : s.nameEn}
                    </span>
                  </button>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 ${step > s.id ? 'bg-green-500' : 'bg-gray-200'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Form Content */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Step 1: Event Type */}
            {step === 1 && (
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>{language === 'ar' ? 'اختر نوع الفعالية' : 'Select Event Type'}</CardTitle>
                  <CardDescription>
                    {language === 'ar' ? 'اختر نوع الفعالية التي تريد تنظيمها' : 'Choose the type of event you want to organize'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {eventTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setFormData({...formData, eventType: type.id})}
                        className={`p-6 rounded-xl border-2 transition-all text-center ${
                          formData.eventType === type.id
                            ? 'border-[#2D7A4A] bg-[#2D7A4A]/10 scale-105'
                            : 'border-gray-200 hover:border-[#2D7A4A]/50'
                        }`}
                      >
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                          style={{ backgroundColor: `${type.color}20` }}
                        >
                          <type.icon className="w-6 h-6" style={{ color: type.color }} />
                        </div>
                        <span className="font-medium text-gray-900">
                          {language === 'ar' ? type.nameAr : type.nameEn}
                        </span>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Event Details */}
            {step === 2 && (
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>{language === 'ar' ? 'تفاصيل الفعالية' : 'Event Details'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {language === 'ar' ? 'اسم الفعالية' : 'Event Name'}
                      </label>
                      <Input 
                        value={formData.eventName}
                        onChange={(e) => setFormData({...formData, eventName: e.target.value})}
                        placeholder={language === 'ar' ? 'مثال: حفل زفاف أحمد وسارة' : 'e.g., Ahmed & Sara Wedding'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {language === 'ar' ? 'عدد الضيوف' : 'Guest Count'}
                      </label>
                      <Input 
                        type="number"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({...formData, guestCount: parseInt(e.target.value) || 0})}
                        min={10}
                        max={5000}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {language === 'ar' ? 'تاريخ الفعالية' : 'Event Date'}
                      </label>
                      <Input 
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {language === 'ar' ? 'وقت الفعالية' : 'Event Time'}
                      </label>
                      <Input 
                        type="time"
                        value={formData.eventTime}
                        onChange={(e) => setFormData({...formData, eventTime: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      {language === 'ar' ? 'نوع المكان' : 'Venue Type'}
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {venueOptions.map((venue) => (
                        <button
                          key={venue.id}
                          onClick={() => setFormData({...formData, venue: venue.id})}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${
                            formData.venue === venue.id
                              ? 'border-[#2D7A4A] bg-[#2D7A4A]/10'
                              : 'border-gray-200 hover:border-[#2D7A4A]/50'
                          }`}
                        >
                          <MapPin className={`w-5 h-5 mx-auto mb-2 ${
                            formData.venue === venue.id ? 'text-[#2D7A4A]' : 'text-gray-400'
                          }`} />
                          <span className="text-sm font-medium block">
                            {language === 'ar' ? venue.nameAr : venue.nameEn}
                          </span>
                          {venue.price > 0 && (
                            <span className="text-xs text-gray-500">+${venue.price}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      {language === 'ar' ? 'باقة التموين' : 'Catering Package'}
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {cateringOptions.map((catering) => (
                        <button
                          key={catering.id}
                          onClick={() => setFormData({...formData, catering: catering.id})}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${
                            formData.catering === catering.id
                              ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                              : 'border-gray-200 hover:border-[#D4AF37]/50'
                          }`}
                        >
                          <span className="text-sm font-medium block mb-1">
                            {language === 'ar' ? catering.nameAr : catering.nameEn}
                          </span>
                          <span className="text-xs text-gray-500">
                            ${catering.pricePerPerson}/{language === 'ar' ? 'شخص' : 'person'}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Additional Services */}
            {step === 3 && (
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>{language === 'ar' ? 'خدمات إضافية' : 'Additional Services'}</CardTitle>
                  <CardDescription>
                    {language === 'ar' ? 'اختر الخدمات الإضافية التي تريدها' : 'Select additional services you need'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {additionalServices.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                          formData.services.includes(service.id)
                            ? 'border-[#2D7A4A] bg-[#2D7A4A]/10'
                            : 'border-gray-200 hover:border-[#2D7A4A]/50'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full border-2 mx-auto mb-2 flex items-center justify-center ${
                          formData.services.includes(service.id)
                            ? 'border-[#2D7A4A] bg-[#2D7A4A]'
                            : 'border-gray-300'
                        }`}>
                          {formData.services.includes(service.id) && (
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <span className="text-sm font-medium block mb-1">
                          {language === 'ar' ? service.nameAr : service.nameEn}
                        </span>
                        <span className="text-xs text-[#D4AF37] font-medium">${service.price}</span>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Contact Information */}
            {step === 4 && (
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>{language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                      </label>
                      <Input 
                        value={formData.clientName}
                        onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                      </label>
                      <Input 
                        value={formData.clientPhone}
                        onChange={(e) => setFormData({...formData, clientPhone: e.target.value})}
                        placeholder="+967"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    </label>
                    <Input 
                      type="email"
                      value={formData.clientEmail}
                      onChange={(e) => setFormData({...formData, clientEmail: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'ar' ? 'ملاحظات إضافية' : 'Additional Notes'}
                    </label>
                    <Textarea 
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      rows={4}
                      placeholder={language === 'ar' ? 'أي متطلبات خاصة أو ملاحظات...' : 'Any special requirements or notes...'}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 5: Review & Submit */}
            {step === 5 && (
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-[#2D7A4A] to-[#236339] text-white rounded-t-lg">
                  <CardTitle>{language === 'ar' ? 'مراجعة الحجز' : 'Booking Review'}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <h3 className="font-bold text-gray-900 border-b pb-2">
                        {language === 'ar' ? 'تفاصيل الفعالية' : 'Event Details'}
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-gray-500">{language === 'ar' ? 'النوع:' : 'Type:'}</span> {eventTypes.find(t => t.id === formData.eventType)?.nameEn}</p>
                        <p><span className="text-gray-500">{language === 'ar' ? 'الاسم:' : 'Name:'}</span> {formData.eventName}</p>
                        <p><span className="text-gray-500">{language === 'ar' ? 'التاريخ:' : 'Date:'}</span> {formData.eventDate}</p>
                        <p><span className="text-gray-500">{language === 'ar' ? 'الوقت:' : 'Time:'}</span> {formData.eventTime}</p>
                        <p><span className="text-gray-500">{language === 'ar' ? 'الضيوف:' : 'Guests:'}</span> {formData.guestCount}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-bold text-gray-900 border-b pb-2">
                        {language === 'ar' ? 'معلومات التواصل' : 'Contact Info'}
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-gray-500">{language === 'ar' ? 'الاسم:' : 'Name:'}</span> {formData.clientName}</p>
                        <p><span className="text-gray-500">{language === 'ar' ? 'الهاتف:' : 'Phone:'}</span> {formData.clientPhone}</p>
                        <p><span className="text-gray-500">{language === 'ar' ? 'البريد:' : 'Email:'}</span> {formData.clientEmail}</p>
                      </div>
                    </div>
                  </div>

                  {/* Price Summary */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-[#D4AF37]" />
                      {language === 'ar' ? 'ملخص التكلفة' : 'Cost Summary'}
                    </h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-white rounded-xl shadow-sm">
                        <p className="text-xs text-gray-500 mb-1">USD</p>
                        <p className="text-2xl font-bold text-[#2D7A4A]">${totalUSD.toLocaleString()}</p>
                      </div>
                      <div className="p-4 bg-white rounded-xl shadow-sm">
                        <p className="text-xs text-gray-500 mb-1">YER</p>
                        <p className="text-2xl font-bold text-[#D4AF37]">{totalYER.toLocaleString()}</p>
                      </div>
                      <div className="p-4 bg-white rounded-xl shadow-sm">
                        <p className="text-xs text-gray-500 mb-1">SAR</p>
                        <p className="text-2xl font-bold text-[#3B82F6]">{totalSAR.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                {language === 'ar' ? 'السابق' : 'Previous'}
              </Button>
              
              {step < 5 ? (
                <Button
                  onClick={() => setStep(step + 1)}
                  disabled={
                    (step === 1 && !formData.eventType) ||
                    (step === 2 && (!formData.eventDate || !formData.venue || !formData.catering))
                  }
                  className="bg-[#2D7A4A] hover:bg-[#236339] gap-2"
                >
                  {language === 'ar' ? 'التالي' : 'Next'}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button className="bg-[#D4AF37] hover:bg-[#C4A030] gap-2">
                  <Send className="w-4 h-4" />
                  {language === 'ar' ? 'إرسال الحجز' : 'Submit Booking'}
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
