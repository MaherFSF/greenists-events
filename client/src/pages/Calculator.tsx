import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { 
  Calculator, 
  Users, 
  MapPin, 
  Utensils, 
  Palette,
  Building2,
  Heart,
  Briefcase,
  GraduationCap,
  PartyPopper,
  Globe,
  Sparkles,
  Download,
  Share2,
  CheckCircle2,
  Info,
  DollarSign,
  Banknote,
  RefreshCw
} from 'lucide-react';

// Exchange rates
const EXCHANGE_RATES = {
  USD: 1,
  YER: 1700,
  SAR: 3.75,
};

type Currency = 'USD' | 'YER' | 'SAR';

interface PriceBreakdown {
  eventCost: number;
  venueCost: number;
  cateringCost: number;
  decorationCost: number;
  subtotal: number;
  serviceFee: number;
  total: number;
}

export default function CalculatorPage() {
  const { language, t } = useLanguage();
  
  // Form state
  const [eventType, setEventType] = useState('corporate');
  const [venueType, setVenueType] = useState('indoor');
  const [cateringLevel, setCateringLevel] = useState('standard');
  const [decorationLevel, setDecorationLevel] = useState('standard');
  const [guestCount, setGuestCount] = useState([100]);
  const [currency, setCurrency] = useState<Currency>('USD');
  
  // Pricing data (in USD)
  const eventPrices: Record<string, { base: number; perGuest: number; icon: React.ElementType; labelEn: string; labelAr: string }> = {
    corporate: { base: 500, perGuest: 15, icon: Building2, labelEn: 'Corporate', labelAr: 'شركات' },
    wedding: { base: 1000, perGuest: 25, icon: Heart, labelEn: 'Wedding', labelAr: 'زفاف' },
    conference: { base: 800, perGuest: 20, icon: Users, labelEn: 'Conference', labelAr: 'مؤتمر' },
    government: { base: 1200, perGuest: 30, icon: Briefcase, labelEn: 'Government', labelAr: 'حكومي' },
    tradeshow: { base: 1500, perGuest: 10, icon: Globe, labelEn: 'Trade Show', labelAr: 'معرض' },
    educational: { base: 400, perGuest: 12, icon: GraduationCap, labelEn: 'Educational', labelAr: 'تعليمي' },
    entertainment: { base: 700, perGuest: 18, icon: PartyPopper, labelEn: 'Entertainment', labelAr: 'ترفيهي' },
  };
  
  const venuePrices: Record<string, { base: number; perGuest: number; labelEn: string; labelAr: string }> = {
    indoor: { base: 200, perGuest: 5, labelEn: 'Indoor', labelAr: 'داخلي' },
    outdoor: { base: 300, perGuest: 7, labelEn: 'Outdoor', labelAr: 'خارجي' },
    hotel: { base: 500, perGuest: 10, labelEn: 'Hotel', labelAr: 'فندق' },
    beach: { base: 800, perGuest: 15, labelEn: 'Beach', labelAr: 'شاطئ' },
  };
  
  const cateringPrices: Record<string, { base: number; perGuest: number; labelEn: string; labelAr: string }> = {
    basic: { base: 0, perGuest: 10, labelEn: 'Basic', labelAr: 'أساسي' },
    standard: { base: 100, perGuest: 20, labelEn: 'Standard', labelAr: 'قياسي' },
    premium: { base: 300, perGuest: 35, labelEn: 'Premium', labelAr: 'متميز' },
    luxury: { base: 500, perGuest: 50, labelEn: 'Luxury', labelAr: 'فاخر' },
  };
  
  const decorationPrices: Record<string, { base: number; perGuest: number; labelEn: string; labelAr: string }> = {
    minimal: { base: 100, perGuest: 2, labelEn: 'Minimal', labelAr: 'بسيط' },
    standard: { base: 300, perGuest: 5, labelEn: 'Standard', labelAr: 'قياسي' },
    elegant: { base: 600, perGuest: 8, labelEn: 'Elegant', labelAr: 'أنيق' },
    luxury: { base: 1000, perGuest: 12, labelEn: 'Luxury', labelAr: 'فاخر' },
  };
  
  // Calculate prices
  const breakdown = useMemo((): PriceBreakdown => {
    const event = eventPrices[eventType];
    const venue = venuePrices[venueType];
    const catering = cateringPrices[cateringLevel];
    const decoration = decorationPrices[decorationLevel];
    const guests = guestCount[0];
    
    const eventCost = event.base + (event.perGuest * guests);
    const venueCost = venue.base + (venue.perGuest * guests);
    const cateringCost = catering.base + (catering.perGuest * guests);
    const decorationCost = decoration.base + (decoration.perGuest * guests);
    
    const subtotal = eventCost + venueCost + cateringCost + decorationCost;
    const serviceFee = subtotal * 0.15;
    const total = subtotal + serviceFee;
    
    return {
      eventCost,
      venueCost,
      cateringCost,
      decorationCost,
      subtotal,
      serviceFee,
      total,
    };
  }, [eventType, venueType, cateringLevel, decorationLevel, guestCount]);
  
  // Format currency
  const formatCurrency = (amountUsd: number, curr: Currency = currency): string => {
    const converted = amountUsd * EXCHANGE_RATES[curr];
    const symbols: Record<Currency, string> = {
      USD: '$',
      YER: 'ر.ي',
      SAR: 'ر.س',
    };
    
    if (curr === 'YER') {
      return `${Math.round(converted).toLocaleString()} ${symbols[curr]}`;
    }
    return `${symbols[curr]}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };
  
  // Currency buttons
  const currencies: { code: Currency; labelEn: string; labelAr: string; flag: string }[] = [
    { code: 'USD', labelEn: 'US Dollar', labelAr: 'دولار أمريكي', flag: '🇺🇸' },
    { code: 'YER', labelEn: 'Yemeni Rial', labelAr: 'ريال يمني', flag: '🇾🇪' },
    { code: 'SAR', labelEn: 'Saudi Riyal', labelAr: 'ريال سعودي', flag: '🇸🇦' },
  ];
  
  const resetCalculator = () => {
    setEventType('corporate');
    setVenueType('indoor');
    setCateringLevel('standard');
    setDecorationLevel('standard');
    setGuestCount([100]);
    setCurrency('USD');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2D7A4A] to-[#1a4d2e] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {language === 'ar' ? 'حاسبة تكلفة الفعاليات' : 'Event Cost Calculator'}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'احصل على تقدير فوري ودقيق لتكلفة فعاليتك بثلاث عملات'
                : 'Get an instant and accurate estimate for your event in three currencies'}
            </p>
            
            {/* Exchange Rate Info */}
            <div className="mt-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Info className="w-5 h-5" />
              <span className="text-sm">
                {language === 'ar' 
                  ? '1 دولار = 1,700 ريال يمني = 3.75 ريال سعودي'
                  : '1 USD = 1,700 YER = 3.75 SAR'}
              </span>
            </div>
          </div>
        </section>
        
        {/* Calculator Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Options */}
              <div className="lg:col-span-2 space-y-6">
                {/* Event Type */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#2D7A4A]" />
                      {language === 'ar' ? 'نوع الفعالية' : 'Event Type'}
                    </CardTitle>
                    <CardDescription>
                      {language === 'ar' ? 'اختر نوع فعاليتك' : 'Select your event type'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                      {Object.entries(eventPrices).map(([key, value]) => (
                        <button
                          key={key}
                          onClick={() => setEventType(key)}
                          className={`p-3 rounded-xl border-2 transition-all text-center ${
                            eventType === key
                              ? 'border-[#2D7A4A] bg-[#2D7A4A]/10'
                              : 'border-gray-200 hover:border-[#2D7A4A]/50'
                          }`}
                        >
                          <value.icon className={`w-6 h-6 mx-auto mb-2 ${eventType === key ? 'text-[#2D7A4A]' : 'text-gray-500'}`} />
                          <span className={`text-xs font-medium ${eventType === key ? 'text-[#2D7A4A]' : 'text-gray-700'}`}>
                            {language === 'ar' ? value.labelAr : value.labelEn}
                          </span>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Guest Count */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#2D7A4A]" />
                      {language === 'ar' ? 'عدد الضيوف' : 'Number of Guests'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <span className="text-5xl font-bold text-[#2D7A4A]">{guestCount[0]}</span>
                        <span className="text-gray-500 ms-2">{language === 'ar' ? 'ضيف' : 'guests'}</span>
                      </div>
                      <Slider
                        value={guestCount}
                        onValueChange={setGuestCount}
                        min={10}
                        max={1000}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>10</span>
                        <span>250</span>
                        <span>500</span>
                        <span>750</span>
                        <span>1000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Venue Type */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#2D7A4A]" />
                      {language === 'ar' ? 'نوع المكان' : 'Venue Type'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {Object.entries(venuePrices).map(([key, value]) => (
                        <button
                          key={key}
                          onClick={() => setVenueType(key)}
                          className={`p-4 rounded-xl border-2 transition-all text-center ${
                            venueType === key
                              ? 'border-[#2D7A4A] bg-[#2D7A4A]/10'
                              : 'border-gray-200 hover:border-[#2D7A4A]/50'
                          }`}
                        >
                          <span className={`text-sm font-medium ${venueType === key ? 'text-[#2D7A4A]' : 'text-gray-700'}`}>
                            {language === 'ar' ? value.labelAr : value.labelEn}
                          </span>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Catering Level */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Utensils className="w-5 h-5 text-[#2D7A4A]" />
                      {language === 'ar' ? 'مستوى الضيافة' : 'Catering Level'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {Object.entries(cateringPrices).map(([key, value]) => (
                        <button
                          key={key}
                          onClick={() => setCateringLevel(key)}
                          className={`p-4 rounded-xl border-2 transition-all text-center ${
                            cateringLevel === key
                              ? 'border-[#2D7A4A] bg-[#2D7A4A]/10'
                              : 'border-gray-200 hover:border-[#2D7A4A]/50'
                          }`}
                        >
                          <span className={`text-sm font-medium ${cateringLevel === key ? 'text-[#2D7A4A]' : 'text-gray-700'}`}>
                            {language === 'ar' ? value.labelAr : value.labelEn}
                          </span>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Decoration Level */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="w-5 h-5 text-[#2D7A4A]" />
                      {language === 'ar' ? 'مستوى الديكور' : 'Decoration Level'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {Object.entries(decorationPrices).map(([key, value]) => (
                        <button
                          key={key}
                          onClick={() => setDecorationLevel(key)}
                          className={`p-4 rounded-xl border-2 transition-all text-center ${
                            decorationLevel === key
                              ? 'border-[#2D7A4A] bg-[#2D7A4A]/10'
                              : 'border-gray-200 hover:border-[#2D7A4A]/50'
                          }`}
                        >
                          <span className={`text-sm font-medium ${decorationLevel === key ? 'text-[#2D7A4A]' : 'text-gray-700'}`}>
                            {language === 'ar' ? value.labelAr : value.labelEn}
                          </span>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Right Column - Results */}
              <div className="space-y-6">
                {/* Currency Selector */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Banknote className="w-5 h-5 text-[#2D7A4A]" />
                      {language === 'ar' ? 'العملة' : 'Currency'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      {currencies.map((curr) => (
                        <button
                          key={curr.code}
                          onClick={() => setCurrency(curr.code)}
                          className={`flex-1 p-3 rounded-xl border-2 transition-all text-center ${
                            currency === curr.code
                              ? 'border-[#2D7A4A] bg-[#2D7A4A]/10'
                              : 'border-gray-200 hover:border-[#2D7A4A]/50'
                          }`}
                        >
                          <span className="text-2xl mb-1 block">{curr.flag}</span>
                          <span className={`text-xs font-medium ${currency === curr.code ? 'text-[#2D7A4A]' : 'text-gray-700'}`}>
                            {curr.code}
                          </span>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Price Breakdown */}
                <Card className="sticky top-4">
                  <CardHeader className="bg-gradient-to-br from-[#2D7A4A] to-[#1a4d2e] text-white rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      {language === 'ar' ? 'تفاصيل التكلفة' : 'Cost Breakdown'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-gray-600">
                          {language === 'ar' ? 'تكلفة الفعالية' : 'Event Cost'}
                        </span>
                        <span className="font-semibold">{formatCurrency(breakdown.eventCost)}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-gray-600">
                          {language === 'ar' ? 'تكلفة المكان' : 'Venue Cost'}
                        </span>
                        <span className="font-semibold">{formatCurrency(breakdown.venueCost)}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-gray-600">
                          {language === 'ar' ? 'تكلفة الضيافة' : 'Catering Cost'}
                        </span>
                        <span className="font-semibold">{formatCurrency(breakdown.cateringCost)}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-gray-600">
                          {language === 'ar' ? 'تكلفة الديكور' : 'Decoration Cost'}
                        </span>
                        <span className="font-semibold">{formatCurrency(breakdown.decorationCost)}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-gray-600">
                          {language === 'ar' ? 'المجموع الفرعي' : 'Subtotal'}
                        </span>
                        <span className="font-semibold">{formatCurrency(breakdown.subtotal)}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-gray-600">
                          {language === 'ar' ? 'رسوم الخدمة (15%)' : 'Service Fee (15%)'}
                        </span>
                        <span className="font-semibold">{formatCurrency(breakdown.serviceFee)}</span>
                      </div>
                      
                      {/* Total */}
                      <div className="bg-[#2D7A4A]/10 rounded-xl p-4 mt-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-600 mb-1">
                            {language === 'ar' ? 'الإجمالي' : 'Total'}
                          </p>
                          <p className="text-3xl font-bold text-[#2D7A4A]">
                            {formatCurrency(breakdown.total)}
                          </p>
                        </div>
                        
                        {/* Show in all currencies */}
                        <div className="mt-4 pt-4 border-t border-[#2D7A4A]/20">
                          <p className="text-xs text-gray-500 text-center mb-2">
                            {language === 'ar' ? 'بجميع العملات' : 'In all currencies'}
                          </p>
                          <div className="grid grid-cols-3 gap-2 text-center text-xs">
                            {currencies.map((curr) => (
                              <div key={curr.code} className={currency === curr.code ? 'font-bold' : ''}>
                                <span className="text-gray-500">{curr.flag}</span>
                                <p className={`font-semibold ${currency === curr.code ? 'text-[#2D7A4A]' : 'text-gray-700'}`}>
                                  {formatCurrency(breakdown.total, curr.code)}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="space-y-3 mt-6">
                        <Button className="w-full bg-[#2D7A4A] hover:bg-[#236339]">
                          <Download className="w-4 h-4 me-2" />
                          {language === 'ar' ? 'تحميل عرض السعر' : 'Download Quote'}
                        </Button>
                        <Button variant="outline" className="w-full border-[#2D7A4A] text-[#2D7A4A]" onClick={resetCalculator}>
                          <RefreshCw className="w-4 h-4 me-2" />
                          {language === 'ar' ? 'إعادة تعيين' : 'Reset'}
                        </Button>
                      </div>
                      
                      {/* Note */}
                      <p className="text-xs text-gray-500 text-center mt-4">
                        {language === 'ar'
                          ? '* هذا تقدير أولي. الأسعار النهائية قد تختلف.'
                          : '* This is an initial estimate. Final prices may vary.'}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Features */}
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-4">
                      {language === 'ar' ? 'ما يشمله السعر' : 'What\'s Included'}
                    </h4>
                    <ul className="space-y-2">
                      {[
                        language === 'ar' ? 'إدارة الفعالية الكاملة' : 'Full event management',
                        language === 'ar' ? 'التنسيق مع الموردين' : 'Vendor coordination',
                        language === 'ar' ? 'الإشراف في يوم الفعالية' : 'Day-of supervision',
                        language === 'ar' ? 'دعم ما بعد الفعالية' : 'Post-event support',
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-[#2D7A4A]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
