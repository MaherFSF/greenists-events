import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { 
  Calculator as CalcIcon, Users, Calendar, Clock, MapPin, 
  Sparkles, CheckCircle2, ArrowRight, Star, Leaf, Award, 
  Shield, TrendingUp, DollarSign, Percent, Download, Share2,
  Building2, Heart, GraduationCap, Stethoscope, Baby,
  Landmark, Banknote, Globe, Music, HardHat, Zap, Plane,
  Camera, Utensils, Mic2, Flower2, Gift, Truck, Wifi,
  Video, Palette, FileText, Info, ChevronDown, ChevronUp,
  RefreshCw, Printer, Mail, MessageCircle, Phone
} from 'lucide-react';

// Premium pricing algorithm with AI-like intelligence
const calculateEventCost = (config: EventConfig): PricingResult => {
  const baseRates: Record<string, { base: number; perGuest: number; complexity: number }> = {
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

  const rate = baseRates[config.eventType] || baseRates.corporate;
  
  // Base calculation
  let basePrice = rate.base + (config.guestCount * rate.perGuest);
  
  // Duration multiplier (non-linear for longer events)
  const durationMultiplier = config.duration <= 4 ? 1 : config.duration <= 8 ? 1.3 : 1.6;
  basePrice *= durationMultiplier;
  
  // Venue complexity
  const venueMultiplier = config.venueType === 'outdoor' ? 1.2 : config.venueType === 'hybrid' ? 1.35 : 1;
  basePrice *= venueMultiplier;
  
  // Season pricing (peak season: Oct-Dec, Mar-May)
  const month = config.eventDate ? new Date(config.eventDate).getMonth() : new Date().getMonth();
  const isPeakSeason = [2, 3, 4, 9, 10, 11].includes(month);
  const seasonMultiplier = isPeakSeason ? 1.15 : 1;
  basePrice *= seasonMultiplier;
  
  // Add-ons pricing with detailed breakdown
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
    vipLounge: 800,
    redCarpet: 300,
    droneFootage: 450,
    photoWall: 200,
  };
  
  let addOnsTotal = 0;
  const addOnBreakdown: { name: string; price: number }[] = [];
  config.addOns.forEach(addon => {
    const price = addOnPrices[addon] || 0;
    addOnsTotal += price;
    addOnBreakdown.push({ name: addon, price });
  });
  
  // Discounts
  const sustainabilityDiscount = config.sustainableOptions ? 0.05 : 0;
  const daysUntilEvent = config.eventDate 
    ? Math.ceil((new Date(config.eventDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : 30;
  const earlyBookingDiscount = daysUntilEvent > 60 ? 0.1 : daysUntilEvent > 30 ? 0.05 : 0;
  const bulkDiscount = config.guestCount > 500 ? 0.08 : config.guestCount > 200 ? 0.05 : 0;
  
  const subtotal = basePrice + addOnsTotal;
  const totalDiscountRate = sustainabilityDiscount + earlyBookingDiscount + bulkDiscount;
  const discountAmount = subtotal * totalDiscountRate;
  const finalPrice = subtotal - discountAmount;
  
  // Calculate sustainability score
  let sustainabilityScore = 50;
  if (config.sustainableOptions) sustainabilityScore += 25;
  if (config.venueType === 'indoor') sustainabilityScore += 10;
  if (config.guestCount <= 100) sustainabilityScore += 10;
  if (config.addOns.includes('giftBags')) sustainabilityScore -= 5;
  sustainabilityScore = Math.min(100, Math.max(0, sustainabilityScore));
  
  // ROI calculation
  const baseROI: Record<string, number> = {
    corporate: 250, wedding: 150, government: 180, banking: 220, entertainment: 300,
    healthcare: 160, education: 140, kids: 120, ngo: 100, construction: 200,
    energy: 230, travel: 180, condolences: 80,
  };
  const estimatedROI = baseROI[config.eventType] || 150;
  
  // Confidence level
  let confidence = 70;
  if (config.eventDate) confidence += 10;
  if (config.guestCount > 0) confidence += 10;
  if (config.addOns.length > 0) confidence += 5;
  if (config.venueType) confidence += 5;
  confidence = Math.min(100, confidence);
  
  // AI recommendations
  const recommendations: string[] = [];
  if (!config.sustainableOptions) {
    recommendations.push('Enable sustainable options for 5% discount and ISO 20121 certification');
  }
  if (daysUntilEvent < 30) {
    recommendations.push('Book earlier for up to 10% early booking discount');
  }
  if (config.eventType === 'corporate' && !config.addOns.includes('wifi')) {
    recommendations.push('Consider adding high-speed WiFi for corporate events');
  }
  if (config.eventType === 'wedding' && !config.addOns.includes('photography')) {
    recommendations.push('Photography is essential for wedding events');
  }
  if (config.guestCount > 100 && !config.addOns.includes('sound')) {
    recommendations.push('Sound system recommended for events with 100+ guests');
  }
  
  return {
    basePrice: Math.round(basePrice),
    addOnsTotal: Math.round(addOnsTotal),
    addOnBreakdown,
    subtotal: Math.round(subtotal),
    discounts: {
      sustainability: Math.round(subtotal * sustainabilityDiscount),
      earlyBooking: Math.round(subtotal * earlyBookingDiscount),
      bulk: Math.round(subtotal * bulkDiscount),
      total: Math.round(discountAmount),
      totalRate: Math.round(totalDiscountRate * 100),
    },
    finalPrice: Math.round(finalPrice),
    priceInYER: Math.round(finalPrice * 1700),
    priceInSAR: Math.round(finalPrice * 3.75),
    sustainabilityScore,
    estimatedROI,
    confidenceLevel: confidence,
    recommendations,
    isPeakSeason,
  };
};

interface EventConfig {
  eventType: string;
  guestCount: number;
  eventDate: string;
  duration: number;
  venueType: 'indoor' | 'outdoor' | 'hybrid';
  addOns: string[];
  sustainableOptions: boolean;
}

interface PricingResult {
  basePrice: number;
  addOnsTotal: number;
  addOnBreakdown: { name: string; price: number }[];
  subtotal: number;
  discounts: {
    sustainability: number;
    earlyBooking: number;
    bulk: number;
    total: number;
    totalRate: number;
  };
  finalPrice: number;
  priceInYER: number;
  priceInSAR: number;
  sustainabilityScore: number;
  estimatedROI: number;
  confidenceLevel: number;
  recommendations: string[];
  isPeakSeason: boolean;
}

export default function Calculator() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'calculator' | 'addons' | 'roi'>('calculator');
  const [currency, setCurrency] = useState<'USD' | 'YER' | 'SAR'>('USD');
  const [showBreakdown, setShowBreakdown] = useState(false);
  
  const [config, setConfig] = useState<EventConfig>({
    eventType: 'corporate',
    guestCount: 100,
    eventDate: '',
    duration: 4,
    venueType: 'indoor',
    addOns: [],
    sustainableOptions: true,
  });

  const pricing = useMemo(() => calculateEventCost(config), [config]);

  const eventTypes = [
    { id: 'corporate', icon: Building2, nameAr: 'شركات', nameEn: 'Corporate', color: 'from-blue-500 to-blue-700' },
    { id: 'wedding', icon: Heart, nameAr: 'زفاف', nameEn: 'Wedding', color: 'from-pink-500 to-rose-600' },
    { id: 'government', icon: Landmark, nameAr: 'حكومي', nameEn: 'Government', color: 'from-amber-500 to-amber-700' },
    { id: 'healthcare', icon: Stethoscope, nameAr: 'صحي', nameEn: 'Healthcare', color: 'from-teal-500 to-teal-700' },
    { id: 'education', icon: GraduationCap, nameAr: 'تعليمي', nameEn: 'Education', color: 'from-indigo-500 to-indigo-700' },
    { id: 'kids', icon: Baby, nameAr: 'أطفال', nameEn: 'Kids', color: 'from-orange-400 to-orange-600' },
    { id: 'banking', icon: Banknote, nameAr: 'بنوك', nameEn: 'Banking', color: 'from-emerald-500 to-emerald-700' },
    { id: 'entertainment', icon: Music, nameAr: 'ترفيهي', nameEn: 'Entertainment', color: 'from-purple-500 to-purple-700' },
  ];

  const addOnOptions = [
    { id: 'photography', icon: Camera, nameAr: 'تصوير فوتوغرافي', nameEn: 'Photography', price: 300 },
    { id: 'videography', icon: Video, nameAr: 'تصوير فيديو', nameEn: 'Videography', price: 500 },
    { id: 'catering', icon: Utensils, nameAr: 'ضيافة', nameEn: 'Catering', price: 'per guest' },
    { id: 'decoration', icon: Palette, nameAr: 'ديكور', nameEn: 'Decoration', price: 400 },
    { id: 'sound', icon: Mic2, nameAr: 'صوتيات', nameEn: 'Sound System', price: 250 },
    { id: 'lighting', icon: Sparkles, nameAr: 'إضاءة', nameEn: 'Lighting', price: 350 },
    { id: 'entertainment', icon: Music, nameAr: 'ترفيه', nameEn: 'Entertainment', price: 600 },
    { id: 'transportation', icon: Truck, nameAr: 'نقل', nameEn: 'Transportation', price: 200 },
    { id: 'wifi', icon: Wifi, nameAr: 'واي فاي', nameEn: 'High-Speed WiFi', price: 100 },
    { id: 'liveStreaming', icon: Video, nameAr: 'بث مباشر', nameEn: 'Live Streaming', price: 400 },
    { id: 'giftBags', icon: Gift, nameAr: 'حقائب هدايا', nameEn: 'Gift Bags', price: 'per guest' },
    { id: 'vipLounge', icon: Star, nameAr: 'صالة VIP', nameEn: 'VIP Lounge', price: 800 },
    { id: 'redCarpet', icon: Award, nameAr: 'سجادة حمراء', nameEn: 'Red Carpet', price: 300 },
    { id: 'droneFootage', icon: Camera, nameAr: 'تصوير درون', nameEn: 'Drone Footage', price: 450 },
  ];

  const toggleAddOn = (id: string) => {
    setConfig(prev => ({
      ...prev,
      addOns: prev.addOns.includes(id) 
        ? prev.addOns.filter(a => a !== id)
        : [...prev.addOns, id]
    }));
  };

  const getDisplayPrice = (usdPrice: number) => {
    switch (currency) {
      case 'YER': return `${(usdPrice * 1700).toLocaleString()} ر.ي`;
      case 'SAR': return `${(usdPrice * 3.75).toLocaleString()} ر.س`;
      default: return `$${usdPrice.toLocaleString()}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6f0] to-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Premium Header with Gold Accents */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a5c36] via-[#2D7A4A] to-[#1a5c36]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
        </div>
        
        {/* Gold Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-2 rounded-full text-sm mb-6">
            <CalcIcon className="w-4 h-4" />
            {language === 'ar' ? 'حاسبة تكلفة الفعاليات المتقدمة' : 'Advanced Event Cost Calculator'}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {language === 'ar' ? 'احسب تكلفة فعاليتك بدقة' : 'Calculate Your Event Cost Accurately'}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            {language === 'ar' 
              ? 'خوارزمية ذكية تقدم لك تقديرات دقيقة مع توصيات مخصصة لتحسين ميزانيتك'
              : 'Smart algorithm providing accurate estimates with personalized recommendations to optimize your budget'}
          </p>
          
          {/* Currency Selector */}
          <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-full p-1">
            {(['USD', 'YER', 'SAR'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  currency === curr 
                    ? 'bg-[#D4AF37] text-white shadow-lg' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Calculator Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-lg p-2 flex gap-2">
              {[
                { id: 'calculator', icon: CalcIcon, labelAr: 'الحاسبة', labelEn: 'Calculator' },
                { id: 'addons', icon: Sparkles, labelAr: 'الإضافات', labelEn: 'Add-ons' },
                { id: 'roi', icon: TrendingUp, labelAr: 'العائد', labelEn: 'ROI' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#1a5c36] to-[#2D7A4A] text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {language === 'ar' ? tab.labelAr : tab.labelEn}
                </button>
              ))}
            </div>

            {/* Calculator Tab */}
            {activeTab === 'calculator' && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#D4AF37]/20">
                {/* Event Type Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#1a5c36] mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                    {language === 'ar' ? 'نوع الفعالية' : 'Event Type'}
                  </h3>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                    {eventTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setConfig(prev => ({ ...prev, eventType: type.id }))}
                        className={`group p-4 rounded-2xl border-2 transition-all duration-300 ${
                          config.eventType === type.id
                            ? 'border-[#D4AF37] bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 shadow-lg scale-105'
                            : 'border-gray-200 hover:border-[#D4AF37]/50 hover:shadow-md'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform`}>
                          <type.icon className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-xs font-medium text-gray-700 text-center">
                          {language === 'ar' ? type.nameAr : type.nameEn}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guest Count */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#1a5c36] mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#D4AF37]" />
                    {language === 'ar' ? 'عدد الضيوف' : 'Number of Guests'}
                  </h3>
                  <div className="flex items-center gap-6">
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="10"
                      value={config.guestCount}
                      onChange={(e) => setConfig(prev => ({ ...prev, guestCount: parseInt(e.target.value) }))}
                      className="flex-1 h-3 bg-gradient-to-r from-[#1a5c36]/20 to-[#D4AF37]/20 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                    />
                    <div className="w-24 text-center bg-gradient-to-br from-[#1a5c36] to-[#2D7A4A] rounded-2xl p-3">
                      <span className="text-2xl font-bold text-white">{config.guestCount}</span>
                      <span className="text-xs text-white/70 block">{language === 'ar' ? 'ضيف' : 'guests'}</span>
                    </div>
                  </div>
                </div>

                {/* Duration */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#1a5c36] mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                    {language === 'ar' ? 'مدة الفعالية (ساعات)' : 'Event Duration (hours)'}
                  </h3>
                  <div className="flex gap-3">
                    {[2, 4, 6, 8, 12].map((hours) => (
                      <button
                        key={hours}
                        onClick={() => setConfig(prev => ({ ...prev, duration: hours }))}
                        className={`flex-1 py-4 rounded-xl font-bold transition-all ${
                          config.duration === hours
                            ? 'bg-gradient-to-r from-[#D4AF37] to-[#c9a432] text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {hours}h
                      </button>
                    ))}
                  </div>
                </div>

                {/* Venue Type */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#1a5c36] mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                    {language === 'ar' ? 'نوع المكان' : 'Venue Type'}
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { id: 'indoor', nameAr: 'داخلي', nameEn: 'Indoor', icon: Building2 },
                      { id: 'outdoor', nameAr: 'خارجي', nameEn: 'Outdoor', icon: Globe },
                      { id: 'hybrid', nameAr: 'مختلط', nameEn: 'Hybrid', icon: Sparkles },
                    ].map((venue) => (
                      <button
                        key={venue.id}
                        onClick={() => setConfig(prev => ({ ...prev, venueType: venue.id as any }))}
                        className={`p-4 rounded-xl font-medium transition-all flex flex-col items-center gap-2 ${
                          config.venueType === venue.id
                            ? 'bg-gradient-to-br from-[#1a5c36] to-[#2D7A4A] text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <venue.icon className="w-6 h-6" />
                        {language === 'ar' ? venue.nameAr : venue.nameEn}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Event Date */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#1a5c36] mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#D4AF37]" />
                    {language === 'ar' ? 'تاريخ الفعالية' : 'Event Date'}
                  </h3>
                  <input
                    type="date"
                    value={config.eventDate}
                    onChange={(e) => setConfig(prev => ({ ...prev, eventDate: e.target.value }))}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 transition-all text-lg"
                  />
                  {pricing.isPeakSeason && (
                    <p className="mt-2 text-sm text-amber-600 flex items-center gap-2">
                      <Info className="w-4 h-4" />
                      {language === 'ar' ? 'موسم الذروة - قد تكون الأسعار أعلى' : 'Peak season - prices may be higher'}
                    </p>
                  )}
                </div>

                {/* Sustainability Toggle */}
                <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                        <Leaf className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-green-800 text-lg">
                          {language === 'ar' ? 'فعالية مستدامة' : 'Sustainable Event'}
                        </p>
                        <p className="text-sm text-green-600">
                          {language === 'ar' ? 'خصم 5% + شهادة ISO 20121' : '5% discount + ISO 20121 certificate'}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setConfig(prev => ({ ...prev, sustainableOptions: !prev.sustainableOptions }))}
                      className={`w-16 h-9 rounded-full transition-all ${
                        config.sustainableOptions ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-7 h-7 bg-white rounded-full shadow-md transition-transform ${
                        config.sustainableOptions ? 'translate-x-8' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Add-ons Tab */}
            {activeTab === 'addons' && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#D4AF37]/20">
                <h3 className="text-xl font-bold text-[#1a5c36] mb-6 flex items-center gap-2">
                  <Gift className="w-6 h-6 text-[#D4AF37]" />
                  {language === 'ar' ? 'الخدمات الإضافية المميزة' : 'Premium Add-on Services'}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {addOnOptions.map((addon) => (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-4 rounded-2xl border-2 transition-all text-left group ${
                        config.addOns.includes(addon.id)
                          ? 'border-[#D4AF37] bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 shadow-lg'
                          : 'border-gray-200 hover:border-[#D4AF37]/50 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          config.addOns.includes(addon.id) 
                            ? 'bg-[#D4AF37] text-white' 
                            : 'bg-gray-100 text-gray-500 group-hover:bg-[#D4AF37]/20 group-hover:text-[#D4AF37]'
                        }`}>
                          <addon.icon className="w-5 h-5" />
                        </div>
                        {config.addOns.includes(addon.id) && (
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                        )}
                      </div>
                      <p className="font-medium text-gray-800 text-sm">
                        {language === 'ar' ? addon.nameAr : addon.nameEn}
                      </p>
                      <p className="text-xs text-[#D4AF37] font-bold mt-1">
                        {typeof addon.price === 'number' ? `$${addon.price}` : language === 'ar' ? 'حسب العدد' : addon.price}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ROI Tab */}
            {activeTab === 'roi' && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#D4AF37]/20">
                <h3 className="text-xl font-bold text-[#1a5c36] mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
                  {language === 'ar' ? 'تحليل العائد على الاستثمار' : 'Return on Investment Analysis'}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* ROI Gauge */}
                  <div className="bg-gradient-to-br from-[#1a5c36]/5 to-[#D4AF37]/5 rounded-2xl p-6 text-center">
                    <div className="relative w-40 h-40 mx-auto mb-4">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="80" cy="80" r="70" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                        <circle 
                          cx="80" cy="80" r="70" 
                          stroke="url(#roiGradient)" 
                          strokeWidth="12" 
                          fill="none"
                          strokeDasharray={`${(pricing.estimatedROI / 300) * 440} 440`}
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="roiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1a5c36" />
                            <stop offset="100%" stopColor="#D4AF37" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold text-[#1a5c36]">{pricing.estimatedROI}%</span>
                        <span className="text-sm text-gray-500">{language === 'ar' ? 'العائد المتوقع' : 'Expected ROI'}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {language === 'ar' 
                        ? 'بناءً على نوع الفعالية وحجم الضيوف'
                        : 'Based on event type and guest count'}
                    </p>
                  </div>

                  {/* ROI Breakdown */}
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">{language === 'ar' ? 'الاستثمار' : 'Investment'}</span>
                        <span className="font-bold text-[#1a5c36]">{getDisplayPrice(pricing.finalPrice)}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">{language === 'ar' ? 'القيمة المتوقعة' : 'Expected Value'}</span>
                        <span className="font-bold text-[#D4AF37]">
                          {getDisplayPrice(Math.round(pricing.finalPrice * (1 + pricing.estimatedROI / 100)))}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t">
                        <span className="text-gray-600">{language === 'ar' ? 'صافي الربح' : 'Net Profit'}</span>
                        <span className="font-bold text-green-600">
                          +{getDisplayPrice(Math.round(pricing.finalPrice * (pricing.estimatedROI / 100)))}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                      <p className="text-sm text-amber-800">
                        <Info className="w-4 h-4 inline mr-2" />
                        {language === 'ar' 
                          ? 'هذا تقدير بناءً على بيانات الصناعة. النتائج الفعلية قد تختلف.'
                          : 'This is an estimate based on industry data. Actual results may vary.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Pricing Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Main Price Card */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#D4AF37]/20">
                <div className="bg-gradient-to-r from-[#1a5c36] to-[#2D7A4A] p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl" />
                  <h3 className="text-sm font-medium opacity-80 mb-1">
                    {language === 'ar' ? 'التكلفة الإجمالية' : 'Total Cost'}
                  </h3>
                  <div className="text-4xl font-bold mb-2">{getDisplayPrice(pricing.finalPrice)}</div>
                  <div className="text-sm opacity-70">
                    {currency !== 'USD' && `≈ $${pricing.finalPrice.toLocaleString()} USD`}
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Price Breakdown Toggle */}
                  <button
                    onClick={() => setShowBreakdown(!showBreakdown)}
                    className="w-full flex items-center justify-between text-gray-700 hover:text-[#1a5c36] transition-colors mb-4"
                  >
                    <span className="font-medium">{language === 'ar' ? 'تفاصيل التكلفة' : 'Cost Breakdown'}</span>
                    {showBreakdown ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  
                  {showBreakdown && (
                    <div className="space-y-3 text-sm border-t pt-4 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-500">{language === 'ar' ? 'السعر الأساسي' : 'Base Price'}</span>
                        <span className="font-medium">{getDisplayPrice(pricing.basePrice)}</span>
                      </div>
                      {pricing.addOnsTotal > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">{language === 'ar' ? 'الإضافات' : 'Add-ons'}</span>
                          <span className="font-medium">{getDisplayPrice(pricing.addOnsTotal)}</span>
                        </div>
                      )}
                      {pricing.discounts.total > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>{language === 'ar' ? 'الخصومات' : 'Discounts'} ({pricing.discounts.totalRate}%)</span>
                          <span className="font-medium">-{getDisplayPrice(pricing.discounts.total)}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Sustainability Score */}
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-green-800 flex items-center gap-2">
                        <Leaf className="w-4 h-4" />
                        {language === 'ar' ? 'نقاط الاستدامة' : 'Sustainability'}
                      </span>
                      <span className="text-lg font-bold text-green-600">{pricing.sustainabilityScore}/100</span>
                    </div>
                    <div className="w-full h-2 bg-green-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500"
                        style={{ width: `${pricing.sustainabilityScore}%` }}
                      />
                    </div>
                  </div>

                  {/* Confidence Level */}
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-gray-500 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      {language === 'ar' ? 'دقة التقدير' : 'Estimate Accuracy'}
                    </span>
                    <span className="font-bold text-[#D4AF37]">{pricing.confidenceLevel}%</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#c9a432] text-white rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                      <Download className="w-5 h-5" />
                      {language === 'ar' ? 'تحميل عرض السعر' : 'Download Quote'}
                    </button>
                    <button className="w-full py-4 bg-gradient-to-r from-[#1a5c36] to-[#2D7A4A] text-white rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                      <ArrowRight className="w-5 h-5" />
                      {language === 'ar' ? 'احجز الآن' : 'Book Now'}
                    </button>
                  </div>
                </div>
              </div>

              {/* AI Recommendations */}
              {pricing.recommendations.length > 0 && (
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
                  <h4 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    {language === 'ar' ? 'توصيات ذكية' : 'Smart Recommendations'}
                  </h4>
                  <ul className="space-y-3">
                    {pricing.recommendations.slice(0, 3).map((rec, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-amber-700">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-4">
                  {language === 'ar' ? 'تحتاج مساعدة؟' : 'Need Help?'}
                </h4>
                <div className="space-y-3">
                  <a href="tel:+967773673918" className="flex items-center gap-3 text-gray-600 hover:text-[#1a5c36] transition-colors">
                    <Phone className="w-5 h-5" />
                    +967 773 673 918
                  </a>
                  <a href="mailto:info@greenists-events.com" className="flex items-center gap-3 text-gray-600 hover:text-[#1a5c36] transition-colors">
                    <Mail className="w-5 h-5" />
                    info@greenists-events.com
                  </a>
                  <a href="https://wa.me/967773673918" className="flex items-center gap-3 text-gray-600 hover:text-[#1a5c36] transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
