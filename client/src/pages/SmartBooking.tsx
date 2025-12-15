import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Calendar, Users, MapPin, Clock, Sparkles, CheckCircle2, 
  ArrowRight, ArrowLeft, Star, Leaf, Award, Shield, 
  Building2, Heart, GraduationCap, Stethoscope, Baby,
  Landmark, Banknote, Globe, Music, HardHat, Zap, Plane,
  Camera, Utensils, Mic2, Flower2, Gift, Truck, Wifi,
  Video, Palette, FileText, Phone, Mail, MessageCircle
} from 'lucide-react';

// Intelligent pricing algorithm
const calculateSmartPrice = (config: BookingConfig): PricingResult => {
  const baseRates = {
    corporate: { base: 800, perGuest: 15, complexity: 1.2 },
    wedding: { base: 1200, perGuest: 25, complexity: 1.5 },
    government: { base: 1000, perGuest: 18, complexity: 1.3 },
    healthcare: { base: 700, perGuest: 12, complexity: 1.1 },
    education: { base: 500, perGuest: 10, complexity: 1.0 },
    kids: { base: 600, perGuest: 20, complexity: 1.2 },
    banking: { base: 900, perGuest: 16, complexity: 1.25 },
    ngo: { base: 450, perGuest: 8, complexity: 0.9 },
    entertainment: { base: 1500, perGuest: 30, complexity: 1.6 },
    construction: { base: 650, perGuest: 12, complexity: 1.1 },
    energy: { base: 850, perGuest: 14, complexity: 1.2 },
    travel: { base: 750, perGuest: 18, complexity: 1.3 },
    condolences: { base: 400, perGuest: 8, complexity: 0.8 },
  };

  const rate = baseRates[config.eventType as keyof typeof baseRates] || baseRates.corporate;
  
  // Base calculation
  let basePrice = rate.base + (config.guestCount * rate.perGuest);
  
  // Duration multiplier
  const durationMultiplier = config.duration <= 4 ? 1 : config.duration <= 8 ? 1.3 : 1.6;
  basePrice *= durationMultiplier;
  
  // Venue complexity
  const venueMultiplier = config.venueType === 'outdoor' ? 1.2 : config.venueType === 'hybrid' ? 1.35 : 1;
  basePrice *= venueMultiplier;
  
  // Season pricing (peak season: Oct-Dec, Mar-May)
  const month = new Date(config.eventDate).getMonth();
  const isPeakSeason = [2, 3, 4, 9, 10, 11].includes(month);
  const seasonMultiplier = isPeakSeason ? 1.15 : 1;
  basePrice *= seasonMultiplier;
  
  // Add-ons pricing
  let addOnsTotal = 0;
  const addOnPrices: Record<string, number> = {
    photography: 300,
    videography: 500,
    catering: config.guestCount * 12,
    decoration: 400,
    sound: 250,
    lighting: 350,
    entertainment: 600,
    transportation: 200,
    security: 150,
    wifi: 100,
    liveStreaming: 400,
    giftBags: config.guestCount * 5,
  };
  
  config.addOns.forEach(addon => {
    addOnsTotal += addOnPrices[addon] || 0;
  });
  
  // Sustainability discount
  const sustainabilityDiscount = config.sustainableOptions ? 0.05 : 0;
  
  // Early booking discount (more than 30 days)
  const daysUntilEvent = Math.ceil((new Date(config.eventDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  const earlyBookingDiscount = daysUntilEvent > 60 ? 0.1 : daysUntilEvent > 30 ? 0.05 : 0;
  
  // Loyalty discount
  const loyaltyDiscount = config.isReturningClient ? 0.08 : 0;
  
  const subtotal = basePrice + addOnsTotal;
  const totalDiscount = sustainabilityDiscount + earlyBookingDiscount + loyaltyDiscount;
  const discountAmount = subtotal * totalDiscount;
  const finalPrice = subtotal - discountAmount;
  
  // Calculate sustainability score
  const sustainabilityScore = calculateSustainabilityScore(config);
  
  return {
    basePrice: Math.round(basePrice),
    addOnsTotal: Math.round(addOnsTotal),
    subtotal: Math.round(subtotal),
    discounts: {
      sustainability: Math.round(subtotal * sustainabilityDiscount),
      earlyBooking: Math.round(subtotal * earlyBookingDiscount),
      loyalty: Math.round(subtotal * loyaltyDiscount),
      total: Math.round(discountAmount),
    },
    finalPrice: Math.round(finalPrice),
    priceInYER: Math.round(finalPrice * 1700),
    priceInSAR: Math.round(finalPrice * 3.75),
    sustainabilityScore,
    estimatedROI: calculateROI(config, finalPrice),
    confidenceLevel: calculateConfidence(config),
  };
};

const calculateSustainabilityScore = (config: BookingConfig): number => {
  let score = 50; // Base score
  if (config.sustainableOptions) score += 20;
  if (config.venueType === 'indoor') score += 5;
  if (config.guestCount <= 100) score += 10;
  if (config.addOns.includes('giftBags')) score -= 5;
  if (config.duration <= 4) score += 5;
  return Math.min(100, Math.max(0, score));
};

const calculateROI = (config: BookingConfig, price: number): number => {
  // Estimated ROI based on event type and configuration
  const baseROI: Record<string, number> = {
    corporate: 250,
    wedding: 150,
    government: 180,
    banking: 220,
    entertainment: 300,
  };
  return baseROI[config.eventType] || 200;
};

const calculateConfidence = (config: BookingConfig): number => {
  let confidence = 70;
  if (config.eventDate) confidence += 10;
  if (config.guestCount > 0) confidence += 10;
  if (config.addOns.length > 0) confidence += 5;
  if (config.venueType) confidence += 5;
  return Math.min(100, confidence);
};

interface BookingConfig {
  eventType: string;
  guestCount: number;
  eventDate: string;
  duration: number;
  venueType: 'indoor' | 'outdoor' | 'hybrid';
  addOns: string[];
  sustainableOptions: boolean;
  isReturningClient: boolean;
  specialRequirements: string;
}

interface PricingResult {
  basePrice: number;
  addOnsTotal: number;
  subtotal: number;
  discounts: {
    sustainability: number;
    earlyBooking: number;
    loyalty: number;
    total: number;
  };
  finalPrice: number;
  priceInYER: number;
  priceInSAR: number;
  sustainabilityScore: number;
  estimatedROI: number;
  confidenceLevel: number;
}

export default function SmartBooking() {
  const { language, t } = useLanguage();
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState<BookingConfig>({
    eventType: '',
    guestCount: 50,
    eventDate: '',
    duration: 4,
    venueType: 'indoor',
    addOns: [],
    sustainableOptions: true,
    isReturningClient: false,
    specialRequirements: '',
  });
  const [pricing, setPricing] = useState<PricingResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    if (config.eventType && config.guestCount > 0) {
      setIsCalculating(true);
      // Simulate AI processing
      setTimeout(() => {
        setPricing(calculateSmartPrice(config));
        setIsCalculating(false);
      }, 500);
    }
  }, [config]);

  const eventTypes = [
    { id: 'corporate', icon: Building2, nameAr: 'فعاليات الشركات', nameEn: 'Corporate Events', color: 'from-blue-500 to-blue-700' },
    { id: 'wedding', icon: Heart, nameAr: 'حفلات الزفاف', nameEn: 'Weddings', color: 'from-pink-500 to-rose-600' },
    { id: 'government', icon: Landmark, nameAr: 'الفعاليات الحكومية', nameEn: 'Government Events', color: 'from-amber-500 to-amber-700' },
    { id: 'healthcare', icon: Stethoscope, nameAr: 'فعاليات الصحة', nameEn: 'Healthcare Events', color: 'from-teal-500 to-teal-700' },
    { id: 'education', icon: GraduationCap, nameAr: 'فعاليات التعليم', nameEn: 'Education Events', color: 'from-indigo-500 to-indigo-700' },
    { id: 'kids', icon: Baby, nameAr: 'حفلات الأطفال', nameEn: 'Kids Parties', color: 'from-orange-400 to-orange-600' },
    { id: 'banking', icon: Banknote, nameAr: 'فعاليات البنوك', nameEn: 'Banking Events', color: 'from-emerald-500 to-emerald-700' },
    { id: 'ngo', icon: Globe, nameAr: 'فعاليات المنظمات', nameEn: 'NGO Events', color: 'from-cyan-500 to-cyan-700' },
    { id: 'entertainment', icon: Music, nameAr: 'فعاليات الترفيه', nameEn: 'Entertainment', color: 'from-purple-500 to-purple-700' },
    { id: 'construction', icon: HardHat, nameAr: 'فعاليات البناء', nameEn: 'Construction Events', color: 'from-yellow-500 to-yellow-700' },
    { id: 'energy', icon: Zap, nameAr: 'فعاليات الطاقة', nameEn: 'Energy Events', color: 'from-green-500 to-green-700' },
    { id: 'travel', icon: Plane, nameAr: 'فعاليات السياحة', nameEn: 'Travel Events', color: 'from-sky-500 to-sky-700' },
    { id: 'condolences', icon: Flower2, nameAr: 'مراسم العزاء', nameEn: 'Condolences', color: 'from-gray-500 to-gray-700' },
  ];

  const addOnOptions = [
    { id: 'photography', icon: Camera, nameAr: 'التصوير الفوتوغرافي', nameEn: 'Photography', price: 300 },
    { id: 'videography', icon: Video, nameAr: 'التصوير الفيديو', nameEn: 'Videography', price: 500 },
    { id: 'catering', icon: Utensils, nameAr: 'الضيافة والطعام', nameEn: 'Catering', price: 'variable' },
    { id: 'decoration', icon: Palette, nameAr: 'الديكور والتزيين', nameEn: 'Decoration', price: 400 },
    { id: 'sound', icon: Mic2, nameAr: 'نظام الصوت', nameEn: 'Sound System', price: 250 },
    { id: 'lighting', icon: Sparkles, nameAr: 'الإضاءة', nameEn: 'Lighting', price: 350 },
    { id: 'entertainment', icon: Music, nameAr: 'الترفيه', nameEn: 'Entertainment', price: 600 },
    { id: 'transportation', icon: Truck, nameAr: 'النقل', nameEn: 'Transportation', price: 200 },
    { id: 'wifi', icon: Wifi, nameAr: 'إنترنت عالي السرعة', nameEn: 'High-Speed WiFi', price: 100 },
    { id: 'liveStreaming', icon: Video, nameAr: 'البث المباشر', nameEn: 'Live Streaming', price: 400 },
    { id: 'giftBags', icon: Gift, nameAr: 'حقائب الهدايا', nameEn: 'Gift Bags', price: 'variable' },
  ];

  const toggleAddOn = (id: string) => {
    setConfig(prev => ({
      ...prev,
      addOns: prev.addOns.includes(id) 
        ? prev.addOns.filter(a => a !== id)
        : [...prev.addOns, id]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6f0] to-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Elegant Header with Gold Accents */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a5c36] via-[#2D7A4A] to-[#1a5c36]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
        </div>
        
        {/* Gold Border Decoration */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-2 rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            {language === 'ar' ? 'نظام الحجز الذكي' : 'Smart Booking System'}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {language === 'ar' ? 'احجز فعاليتك بذكاء' : 'Book Your Event Intelligently'}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'نظام حجز متطور يستخدم الذكاء الاصطناعي لتقديم أفضل الأسعار والتوصيات المخصصة لفعاليتك'
              : 'Advanced booking system using AI to provide the best prices and personalized recommendations for your event'}
          </p>
          
          {/* Progress Steps */}
          <div className="flex justify-center items-center gap-4 mt-12">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  step >= s 
                    ? 'bg-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/30' 
                    : 'bg-white/20 text-white/60'
                }`}>
                  {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                </div>
                {s < 4 && (
                  <div className={`w-16 h-1 mx-2 rounded ${step > s ? 'bg-[#D4AF37]' : 'bg-white/20'}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-4 text-sm text-white/60">
            <span className={step >= 1 ? 'text-[#D4AF37]' : ''}>{language === 'ar' ? 'نوع الفعالية' : 'Event Type'}</span>
            <span className={step >= 2 ? 'text-[#D4AF37]' : ''}>{language === 'ar' ? 'التفاصيل' : 'Details'}</span>
            <span className={step >= 3 ? 'text-[#D4AF37]' : ''}>{language === 'ar' ? 'الإضافات' : 'Add-ons'}</span>
            <span className={step >= 4 ? 'text-[#D4AF37]' : ''}>{language === 'ar' ? 'التأكيد' : 'Confirm'}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form Area */}
          <div className="lg:col-span-2">
            {/* Step 1: Event Type Selection */}
            {step === 1 && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#D4AF37]/20">
                <h2 className="text-2xl font-bold text-[#1a5c36] mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  {language === 'ar' ? 'اختر نوع فعاليتك' : 'Choose Your Event Type'}
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {eventTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => {
                        setConfig(prev => ({ ...prev, eventType: type.id }));
                        setStep(2);
                      }}
                      className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                        config.eventType === type.id
                          ? 'border-[#D4AF37] bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 shadow-lg'
                          : 'border-gray-200 hover:border-[#D4AF37]/50 hover:shadow-md'
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                        <type.icon className="w-7 h-7 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 text-center">
                        {language === 'ar' ? type.nameAr : type.nameEn}
                      </p>
                      {config.eventType === type.id && (
                        <div className="absolute top-2 right-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Event Details */}
            {step === 2 && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#D4AF37]/20">
                <h2 className="text-2xl font-bold text-[#1a5c36] mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  {language === 'ar' ? 'تفاصيل الفعالية' : 'Event Details'}
                </h2>
                
                <div className="space-y-6">
                  {/* Guest Count */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      {language === 'ar' ? 'عدد الضيوف' : 'Number of Guests'}
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="10"
                        max="1000"
                        value={config.guestCount}
                        onChange={(e) => setConfig(prev => ({ ...prev, guestCount: parseInt(e.target.value) }))}
                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                      />
                      <div className="w-20 text-center">
                        <span className="text-2xl font-bold text-[#1a5c36]">{config.guestCount}</span>
                        <span className="text-sm text-gray-500 block">{language === 'ar' ? 'ضيف' : 'guests'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Event Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      {language === 'ar' ? 'تاريخ الفعالية' : 'Event Date'}
                    </label>
                    <input
                      type="date"
                      value={config.eventDate}
                      onChange={(e) => setConfig(prev => ({ ...prev, eventDate: e.target.value }))}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    />
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      {language === 'ar' ? 'مدة الفعالية (ساعات)' : 'Event Duration (hours)'}
                    </label>
                    <div className="flex gap-3">
                      {[2, 4, 6, 8, 12].map((hours) => (
                        <button
                          key={hours}
                          onClick={() => setConfig(prev => ({ ...prev, duration: hours }))}
                          className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                            config.duration === hours
                              ? 'bg-[#D4AF37] text-white shadow-lg'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {hours}h
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Venue Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      {language === 'ar' ? 'نوع المكان' : 'Venue Type'}
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'indoor', nameAr: 'داخلي', nameEn: 'Indoor' },
                        { id: 'outdoor', nameAr: 'خارجي', nameEn: 'Outdoor' },
                        { id: 'hybrid', nameAr: 'مختلط', nameEn: 'Hybrid' },
                      ].map((venue) => (
                        <button
                          key={venue.id}
                          onClick={() => setConfig(prev => ({ ...prev, venueType: venue.id as any }))}
                          className={`py-3 rounded-xl font-medium transition-all ${
                            config.venueType === venue.id
                              ? 'bg-[#1a5c36] text-white shadow-lg'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {language === 'ar' ? venue.nameAr : venue.nameEn}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sustainability Option */}
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center gap-3">
                      <Leaf className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-medium text-green-800">
                          {language === 'ar' ? 'فعالية مستدامة' : 'Sustainable Event'}
                        </p>
                        <p className="text-sm text-green-600">
                          {language === 'ar' ? 'خصم 5% + شهادة ISO 20121' : '5% discount + ISO 20121 certificate'}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setConfig(prev => ({ ...prev, sustainableOptions: !prev.sustainableOptions }))}
                      className={`w-14 h-8 rounded-full transition-all ${
                        config.sustainableOptions ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                        config.sustainableOptions ? 'translate-x-7' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    {language === 'ar' ? 'السابق' : 'Previous'}
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex items-center gap-2 px-8 py-3 bg-[#D4AF37] text-white rounded-xl font-medium hover:bg-[#c9a432] transition-colors shadow-lg"
                  >
                    {language === 'ar' ? 'التالي' : 'Next'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Add-ons */}
            {step === 3 && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#D4AF37]/20">
                <h2 className="text-2xl font-bold text-[#1a5c36] mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <Gift className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  {language === 'ar' ? 'الخدمات الإضافية' : 'Additional Services'}
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {addOnOptions.map((addon) => (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        config.addOns.includes(addon.id)
                          ? 'border-[#D4AF37] bg-[#D4AF37]/5'
                          : 'border-gray-200 hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <addon.icon className={`w-6 h-6 ${config.addOns.includes(addon.id) ? 'text-[#D4AF37]' : 'text-gray-400'}`} />
                        {config.addOns.includes(addon.id) && (
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                        )}
                      </div>
                      <p className="font-medium text-gray-700 mt-2">
                        {language === 'ar' ? addon.nameAr : addon.nameEn}
                      </p>
                      <p className="text-sm text-[#D4AF37] font-medium">
                        {typeof addon.price === 'number' ? `$${addon.price}` : language === 'ar' ? 'حسب العدد' : 'Variable'}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    {language === 'ar' ? 'السابق' : 'Previous'}
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="flex items-center gap-2 px-8 py-3 bg-[#D4AF37] text-white rounded-xl font-medium hover:bg-[#c9a432] transition-colors shadow-lg"
                  >
                    {language === 'ar' ? 'مراجعة الطلب' : 'Review Booking'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#D4AF37]/20">
                <h2 className="text-2xl font-bold text-[#1a5c36] mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  {language === 'ar' ? 'مراجعة وتأكيد الحجز' : 'Review & Confirm Booking'}
                </h2>

                {/* Booking Summary */}
                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h3 className="font-medium text-gray-700 mb-3">{language === 'ar' ? 'ملخص الفعالية' : 'Event Summary'}</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">{language === 'ar' ? 'نوع الفعالية:' : 'Event Type:'}</span>
                        <span className="font-medium text-gray-800 mr-2">
                          {eventTypes.find(t => t.id === config.eventType)?.[language === 'ar' ? 'nameAr' : 'nameEn']}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">{language === 'ar' ? 'عدد الضيوف:' : 'Guests:'}</span>
                        <span className="font-medium text-gray-800 mr-2">{config.guestCount}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{language === 'ar' ? 'التاريخ:' : 'Date:'}</span>
                        <span className="font-medium text-gray-800 mr-2">{config.eventDate || 'Not set'}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{language === 'ar' ? 'المدة:' : 'Duration:'}</span>
                        <span className="font-medium text-gray-800 mr-2">{config.duration} {language === 'ar' ? 'ساعات' : 'hours'}</span>
                      </div>
                    </div>
                  </div>

                  {config.addOns.length > 0 && (
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <h3 className="font-medium text-gray-700 mb-3">{language === 'ar' ? 'الخدمات الإضافية' : 'Add-ons'}</h3>
                      <div className="flex flex-wrap gap-2">
                        {config.addOns.map(addon => (
                          <span key={addon} className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm">
                            {addOnOptions.find(a => a.id === addon)?.[language === 'ar' ? 'nameAr' : 'nameEn']}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Form */}
                <div className="space-y-4 mb-8">
                  <h3 className="font-medium text-gray-700">{language === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder={language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                      className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                    />
                    <input
                      type="tel"
                      placeholder={language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                      className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                    />
                    <input
                      type="email"
                      placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                      className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                    />
                    <input
                      type="text"
                      placeholder={language === 'ar' ? 'اسم الشركة (اختياري)' : 'Company Name (optional)'}
                      className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                    />
                  </div>
                  <textarea
                    placeholder={language === 'ar' ? 'متطلبات خاصة أو ملاحظات...' : 'Special requirements or notes...'}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(3)}
                    className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    {language === 'ar' ? 'السابق' : 'Previous'}
                  </button>
                  <button
                    className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1a5c36] to-[#2D7A4A] text-white rounded-xl font-bold hover:shadow-xl transition-all shadow-lg"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    {language === 'ar' ? 'تأكيد الحجز' : 'Confirm Booking'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Live Pricing Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#D4AF37]/20">
                <div className="bg-gradient-to-r from-[#1a5c36] to-[#2D7A4A] p-6 text-white">
                  <h3 className="text-lg font-medium opacity-80">{language === 'ar' ? 'التكلفة المقدرة' : 'Estimated Cost'}</h3>
                  {isCalculating ? (
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{language === 'ar' ? 'جاري الحساب...' : 'Calculating...'}</span>
                    </div>
                  ) : pricing ? (
                    <>
                      <div className="text-4xl font-bold mt-2">${pricing.finalPrice.toLocaleString()}</div>
                      <div className="text-sm opacity-70 mt-1">
                        ≈ {pricing.priceInYER.toLocaleString()} YER | {pricing.priceInSAR.toLocaleString()} SAR
                      </div>
                    </>
                  ) : (
                    <div className="text-2xl font-bold mt-2 opacity-50">---</div>
                  )}
                </div>
                
                {pricing && (
                  <div className="p-6 space-y-4">
                    {/* Price Breakdown */}
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">{language === 'ar' ? 'السعر الأساسي' : 'Base Price'}</span>
                        <span className="font-medium">${pricing.basePrice}</span>
                      </div>
                      {pricing.addOnsTotal > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">{language === 'ar' ? 'الإضافات' : 'Add-ons'}</span>
                          <span className="font-medium">${pricing.addOnsTotal}</span>
                        </div>
                      )}
                      {pricing.discounts.total > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>{language === 'ar' ? 'الخصومات' : 'Discounts'}</span>
                          <span className="font-medium">-${pricing.discounts.total}</span>
                        </div>
                      )}
                      <div className="border-t pt-2 flex justify-between font-bold">
                        <span>{language === 'ar' ? 'الإجمالي' : 'Total'}</span>
                        <span className="text-[#1a5c36]">${pricing.finalPrice}</span>
                      </div>
                    </div>

                    {/* Sustainability Score */}
                    <div className="p-4 bg-green-50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-green-800 flex items-center gap-2">
                          <Leaf className="w-4 h-4" />
                          {language === 'ar' ? 'نقاط الاستدامة' : 'Sustainability Score'}
                        </span>
                        <span className="text-lg font-bold text-green-600">{pricing.sustainabilityScore}/100</span>
                      </div>
                      <div className="w-full h-2 bg-green-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500"
                          style={{ width: `${pricing.sustainabilityScore}%` }}
                        />
                      </div>
                    </div>

                    {/* Confidence Level */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        {language === 'ar' ? 'دقة التقدير' : 'Estimate Accuracy'}
                      </span>
                      <span className="font-medium text-[#D4AF37]">{pricing.confidenceLevel}%</span>
                    </div>

                    {/* ROI Estimate */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        {language === 'ar' ? 'العائد المتوقع' : 'Expected ROI'}
                      </span>
                      <span className="font-medium text-[#1a5c36]">{pricing.estimatedROI}%</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <Award className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-xs text-gray-600">{language === 'ar' ? 'معتمد ISO 20121' : 'ISO 20121 Certified'}</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-[#1a5c36] mx-auto mb-2" />
                    <p className="text-xs text-gray-600">{language === 'ar' ? 'ضمان الجودة' : 'Quality Guaranteed'}</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 rounded-2xl p-6 border border-[#D4AF37]/20">
                <h4 className="font-medium text-gray-800 mb-4">{language === 'ar' ? 'تحتاج مساعدة؟' : 'Need Help?'}</h4>
                <div className="space-y-3">
                  <a href="tel:+967773673918" className="flex items-center gap-3 text-gray-600 hover:text-[#1a5c36]">
                    <Phone className="w-5 h-5" />
                    +967 773 673 918
                  </a>
                  <a href="mailto:info@greenists-events.com" className="flex items-center gap-3 text-gray-600 hover:text-[#1a5c36]">
                    <Mail className="w-5 h-5" />
                    info@greenists-events.com
                  </a>
                  <a href="https://wa.me/967773673918" className="flex items-center gap-3 text-gray-600 hover:text-[#1a5c36]">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
