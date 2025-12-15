import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { trpc } from '@/lib/trpc';
import { 
  CheckCircle2, 
  Calendar, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Building2,
  Sparkles,
  CreditCard,
  Clock,
  FileText,
  ArrowRight
} from 'lucide-react';

export default function BookingConfirmationPage() {
  const { language } = useLanguage();
  
  // Form state
  const [step, setStep] = useState(1);
  const [bookingCode, setBookingCode] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    // Client info
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    clientCompany: '',
    
    // Event details
    eventType: 'corporate',
    eventTitle: '',
    eventDate: '',
    eventEndDate: '',
    guestCount: 100,
    venueType: 'indoor',
    venueAddress: '',
    
    // Services
    packageTier: 'silver' as 'essential' | 'silver' | 'gold' | 'diamond',
    cateringLevel: 'standard',
    decorationLevel: 'standard',
    specialRequests: '',
  });
  
  // Create booking mutation
  const createBookingMutation = trpc.greenists.bookings.create.useMutation({
    onSuccess: (data) => {
      setBookingCode(data.bookingCode);
      setStep(4); // Success step
      setIsSubmitting(false);
    },
    onError: (error) => {
      console.error('Booking failed:', error);
      setIsSubmitting(false);
    },
  });
  
  // Package prices
  const packagePrices = {
    essential: { base: 500, perGuest: 15 },
    silver: { base: 1000, perGuest: 25 },
    gold: { base: 2000, perGuest: 40 },
    diamond: { base: 5000, perGuest: 75 },
  };
  
  // Calculate total
  const calculateTotal = () => {
    const pkg = packagePrices[formData.packageTier];
    return pkg.base + (pkg.perGuest * formData.guestCount);
  };
  
  const totalUsd = calculateTotal();
  const depositUsd = totalUsd * 0.3;
  
  // Handle form submission
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    createBookingMutation.mutate({
      clientName: formData.clientName,
      clientEmail: formData.clientEmail,
      clientPhone: formData.clientPhone,
      clientCompany: formData.clientCompany || undefined,
      eventType: formData.eventType,
      eventTitle: formData.eventTitle,
      eventDate: formData.eventDate,
      eventEndDate: formData.eventEndDate || undefined,
      guestCount: formData.guestCount,
      venueType: formData.venueType || undefined,
      venueAddress: formData.venueAddress || undefined,
      packageTier: formData.packageTier,
      cateringLevel: formData.cateringLevel || undefined,
      decorationLevel: formData.decorationLevel || undefined,
      specialRequests: formData.specialRequests || undefined,
      totalUsd,
    });
  };
  
  // Update form field
  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  // Event types
  const eventTypes = [
    { value: 'corporate', labelEn: 'Corporate Event', labelAr: 'فعالية شركات' },
    { value: 'wedding', labelEn: 'Wedding', labelAr: 'زفاف' },
    { value: 'conference', labelEn: 'Conference', labelAr: 'مؤتمر' },
    { value: 'government', labelEn: 'Government Event', labelAr: 'فعالية حكومية' },
    { value: 'kids', labelEn: 'Kids Party', labelAr: 'حفلة أطفال' },
    { value: 'healthcare', labelEn: 'Healthcare Event', labelAr: 'فعالية صحية' },
    { value: 'education', labelEn: 'Educational Event', labelAr: 'فعالية تعليمية' },
    { value: 'entertainment', labelEn: 'Entertainment', labelAr: 'ترفيه' },
  ];
  
  // Package tiers
  const packageTiers = [
    { value: 'essential', labelEn: 'Essential', labelAr: 'أساسية', color: 'bg-gray-100' },
    { value: 'silver', labelEn: 'Silver', labelAr: 'فضية', color: 'bg-gray-200' },
    { value: 'gold', labelEn: 'Gold', labelAr: 'ذهبية', color: 'bg-amber-100' },
    { value: 'diamond', labelEn: 'Diamond', labelAr: 'ماسية', color: 'bg-blue-100' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2D7A4A] via-[#236339] to-[#1a4d2e] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {language === 'ar' ? 'احجز فعاليتك' : 'Book Your Event'}
              </h1>
              <p className="text-xl text-white/80">
                {language === 'ar' 
                  ? 'أكمل حجزك في 3 خطوات بسيطة'
                  : 'Complete your booking in 3 simple steps'}
              </p>
            </div>
          </div>
        </section>
        
        {/* Progress Steps */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between">
                {[
                  { num: 1, labelEn: 'Your Details', labelAr: 'بياناتك' },
                  { num: 2, labelEn: 'Event Details', labelAr: 'تفاصيل الفعالية' },
                  { num: 3, labelEn: 'Confirm', labelAr: 'تأكيد' },
                  { num: 4, labelEn: 'Done', labelAr: 'تم' },
                ].map((s, i) => (
                  <div key={s.num} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= s.num 
                        ? 'bg-[#2D7A4A] text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step > s.num ? <CheckCircle2 className="w-5 h-5" /> : s.num}
                    </div>
                    <span className={`ml-2 hidden sm:block ${step >= s.num ? 'text-[#2D7A4A] font-semibold' : 'text-gray-500'}`}>
                      {language === 'ar' ? s.labelAr : s.labelEn}
                    </span>
                    {i < 3 && (
                      <div className={`w-12 sm:w-24 h-1 mx-2 ${step > s.num ? 'bg-[#2D7A4A]' : 'bg-gray-200'}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Form Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              
              {/* Step 1: Client Details */}
              {step === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#2D7A4A]" />
                      {language === 'ar' ? 'معلوماتك الشخصية' : 'Your Information'}
                    </CardTitle>
                    <CardDescription>
                      {language === 'ar' 
                        ? 'أدخل بيانات الاتصال الخاصة بك'
                        : 'Enter your contact details'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>{language === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}</Label>
                        <Input 
                          value={formData.clientName}
                          onChange={(e) => updateField('clientName', e.target.value)}
                          placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>{language === 'ar' ? 'البريد الإلكتروني *' : 'Email *'}</Label>
                        <Input 
                          type="email"
                          value={formData.clientEmail}
                          onChange={(e) => updateField('clientEmail', e.target.value)}
                          placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>{language === 'ar' ? 'رقم الهاتف *' : 'Phone Number *'}</Label>
                        <Input 
                          value={formData.clientPhone}
                          onChange={(e) => updateField('clientPhone', e.target.value)}
                          placeholder="+967 XXX XXX XXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>{language === 'ar' ? 'اسم الشركة (اختياري)' : 'Company Name (Optional)'}</Label>
                        <Input 
                          value={formData.clientCompany}
                          onChange={(e) => updateField('clientCompany', e.target.value)}
                          placeholder={language === 'ar' ? 'اسم شركتك' : 'Your company name'}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end pt-4">
                      <Button 
                        onClick={() => setStep(2)}
                        disabled={!formData.clientName || !formData.clientEmail || !formData.clientPhone}
                        className="bg-[#2D7A4A] hover:bg-[#236339]"
                      >
                        {language === 'ar' ? 'التالي' : 'Next'}
                        <ArrowRight className="w-4 h-4 ms-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Step 2: Event Details */}
              {step === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#2D7A4A]" />
                      {language === 'ar' ? 'تفاصيل الفعالية' : 'Event Details'}
                    </CardTitle>
                    <CardDescription>
                      {language === 'ar' 
                        ? 'أخبرنا عن فعاليتك'
                        : 'Tell us about your event'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>{language === 'ar' ? 'نوع الفعالية *' : 'Event Type *'}</Label>
                        <Select value={formData.eventType} onValueChange={(v) => updateField('eventType', v)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {eventTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {language === 'ar' ? type.labelAr : type.labelEn}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>{language === 'ar' ? 'عنوان الفعالية *' : 'Event Title *'}</Label>
                        <Input 
                          value={formData.eventTitle}
                          onChange={(e) => updateField('eventTitle', e.target.value)}
                          placeholder={language === 'ar' ? 'مثال: حفل إطلاق المنتج' : 'e.g., Product Launch Event'}
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>{language === 'ar' ? 'تاريخ الفعالية *' : 'Event Date *'}</Label>
                        <Input 
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => updateField('eventDate', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>{language === 'ar' ? 'عدد الضيوف *' : 'Guest Count *'}</Label>
                        <Input 
                          type="number"
                          value={formData.guestCount}
                          onChange={(e) => updateField('guestCount', parseInt(e.target.value) || 0)}
                          min={10}
                          max={5000}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>{language === 'ar' ? 'الباقة *' : 'Package *'}</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {packageTiers.map((tier) => (
                          <button
                            key={tier.value}
                            onClick={() => updateField('packageTier', tier.value)}
                            className={`p-4 rounded-lg border-2 text-center transition-all ${
                              formData.packageTier === tier.value
                                ? 'border-[#2D7A4A] bg-[#2D7A4A]/10'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-full ${tier.color} mx-auto mb-2`} />
                            <p className="font-semibold">{language === 'ar' ? tier.labelAr : tier.labelEn}</p>
                            <p className="text-sm text-gray-500">
                              ${packagePrices[tier.value as keyof typeof packagePrices].base}+
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>{language === 'ar' ? 'طلبات خاصة' : 'Special Requests'}</Label>
                      <Textarea 
                        value={formData.specialRequests}
                        onChange={(e) => updateField('specialRequests', e.target.value)}
                        placeholder={language === 'ar' 
                          ? 'أي متطلبات أو طلبات خاصة...'
                          : 'Any special requirements or requests...'}
                        rows={3}
                      />
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button variant="outline" onClick={() => setStep(1)}>
                        {language === 'ar' ? 'السابق' : 'Back'}
                      </Button>
                      <Button 
                        onClick={() => setStep(3)}
                        disabled={!formData.eventTitle || !formData.eventDate}
                        className="bg-[#2D7A4A] hover:bg-[#236339]"
                      >
                        {language === 'ar' ? 'التالي' : 'Next'}
                        <ArrowRight className="w-4 h-4 ms-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Step 3: Confirmation */}
              {step === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#2D7A4A]" />
                      {language === 'ar' ? 'تأكيد الحجز' : 'Confirm Booking'}
                    </CardTitle>
                    <CardDescription>
                      {language === 'ar' 
                        ? 'راجع تفاصيل حجزك قبل التأكيد'
                        : 'Review your booking details before confirming'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Summary */}
                    <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                      <h3 className="font-semibold text-lg border-b pb-2">
                        {language === 'ar' ? 'ملخص الحجز' : 'Booking Summary'}
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">{language === 'ar' ? 'الاسم' : 'Name'}</p>
                          <p className="font-medium">{formData.clientName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</p>
                          <p className="font-medium">{formData.clientEmail}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{language === 'ar' ? 'الفعالية' : 'Event'}</p>
                          <p className="font-medium">{formData.eventTitle}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{language === 'ar' ? 'التاريخ' : 'Date'}</p>
                          <p className="font-medium">{formData.eventDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{language === 'ar' ? 'عدد الضيوف' : 'Guests'}</p>
                          <p className="font-medium">{formData.guestCount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{language === 'ar' ? 'الباقة' : 'Package'}</p>
                          <p className="font-medium capitalize">{formData.packageTier}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Pricing */}
                    <div className="bg-[#2D7A4A]/10 rounded-xl p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">{language === 'ar' ? 'الإجمالي' : 'Total'}</span>
                        <span className="text-2xl font-bold text-[#2D7A4A]">${totalUsd.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-[#2D7A4A]/20">
                        <span className="text-gray-600">{language === 'ar' ? 'العربون (30%)' : 'Deposit (30%)'}</span>
                        <span className="text-xl font-bold text-amber-600">${depositUsd.toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-4">
                        {language === 'ar' 
                          ? 'سيتم التواصل معك خلال 24 ساعة لتأكيد التفاصيل وترتيب الدفع'
                          : 'We will contact you within 24 hours to confirm details and arrange payment'}
                      </p>
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button variant="outline" onClick={() => setStep(2)}>
                        {language === 'ar' ? 'السابق' : 'Back'}
                      </Button>
                      <Button 
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="bg-[#2D7A4A] hover:bg-[#236339]"
                      >
                        {isSubmitting 
                          ? (language === 'ar' ? 'جاري الحجز...' : 'Booking...')
                          : (language === 'ar' ? 'تأكيد الحجز' : 'Confirm Booking')
                        }
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Step 4: Success */}
              {step === 4 && bookingCode && (
                <Card className="text-center">
                  <CardContent className="py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      {language === 'ar' ? 'تم الحجز بنجاح!' : 'Booking Confirmed!'}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {language === 'ar' 
                        ? 'شكراً لاختيارك جرينيستس. سنتواصل معك قريباً.'
                        : 'Thank you for choosing Greenists. We will contact you soon.'}
                    </p>
                    
                    <div className="bg-[#2D7A4A]/10 rounded-xl p-6 max-w-md mx-auto mb-8">
                      <p className="text-sm text-gray-600 mb-2">
                        {language === 'ar' ? 'رقم الحجز' : 'Booking Code'}
                      </p>
                      <p className="text-3xl font-bold text-[#2D7A4A]">{bookingCode}</p>
                    </div>
                    
                    <div className="space-y-4 max-w-md mx-auto text-left">
                      <h3 className="font-semibold text-gray-800">
                        {language === 'ar' ? 'الخطوات التالية:' : 'Next Steps:'}
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-[#2D7A4A] text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                          <p className="text-gray-600">
                            {language === 'ar' 
                              ? 'ستصلك رسالة تأكيد على بريدك الإلكتروني'
                              : 'You will receive a confirmation email'}
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-[#2D7A4A] text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                          <p className="text-gray-600">
                            {language === 'ar' 
                              ? 'سيتصل بك منسق الفعاليات خلال 24 ساعة'
                              : 'Our event coordinator will call you within 24 hours'}
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-[#2D7A4A] text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                          <p className="text-gray-600">
                            {language === 'ar' 
                              ? 'ادفع العربون لتأكيد حجزك'
                              : 'Pay the deposit to secure your booking'}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center gap-4 mt-8">
                      <Button variant="outline" onClick={() => window.location.href = '/'}>
                        {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
                      </Button>
                      <Button 
                        className="bg-[#2D7A4A] hover:bg-[#236339]"
                        onClick={() => window.location.href = `/client-portal?code=${bookingCode}`}
                      >
                        {language === 'ar' ? 'تتبع حجزك' : 'Track Your Booking'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
