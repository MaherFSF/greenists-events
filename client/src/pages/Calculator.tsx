import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Calculator, Users, MapPin, UtensilsCrossed, Palette, Download, RefreshCw } from 'lucide-react';

// Exchange rate: 1 USD = 1700 YER
const USD_TO_YER = 1700;

interface PricingOption {
  id: string;
  labelEn: string;
  labelAr: string;
  basePrice: number; // in USD
  perGuestPrice: number; // in USD
}

const eventTypes: PricingOption[] = [
  { id: 'corporate', labelEn: 'Corporate Event', labelAr: 'فعالية شركات', basePrice: 500, perGuestPrice: 15 },
  { id: 'wedding', labelEn: 'Wedding', labelAr: 'حفل زفاف', basePrice: 1000, perGuestPrice: 25 },
  { id: 'conference', labelEn: 'Conference', labelAr: 'مؤتمر', basePrice: 800, perGuestPrice: 20 },
  { id: 'government', labelEn: 'Government Event', labelAr: 'فعالية حكومية', basePrice: 1200, perGuestPrice: 30 },
  { id: 'tradeshow', labelEn: 'Trade Show', labelAr: 'معرض تجاري', basePrice: 1500, perGuestPrice: 10 },
];

const venueTypes: PricingOption[] = [
  { id: 'indoor', labelEn: 'Indoor Venue', labelAr: 'قاعة داخلية', basePrice: 200, perGuestPrice: 5 },
  { id: 'outdoor', labelEn: 'Outdoor Venue', labelAr: 'موقع خارجي', basePrice: 300, perGuestPrice: 7 },
  { id: 'hotel', labelEn: 'Hotel Ballroom', labelAr: 'قاعة فندق', basePrice: 500, perGuestPrice: 10 },
  { id: 'beach', labelEn: 'Beach/Resort', labelAr: 'شاطئ/منتجع', basePrice: 800, perGuestPrice: 15 },
];

const cateringLevels: PricingOption[] = [
  { id: 'basic', labelEn: 'Basic', labelAr: 'أساسي', basePrice: 0, perGuestPrice: 10 },
  { id: 'standard', labelEn: 'Standard', labelAr: 'قياسي', basePrice: 100, perGuestPrice: 20 },
  { id: 'premium', labelEn: 'Premium', labelAr: 'متميز', basePrice: 300, perGuestPrice: 35 },
  { id: 'luxury', labelEn: 'Luxury', labelAr: 'فاخر', basePrice: 500, perGuestPrice: 50 },
];

const decorationLevels: PricingOption[] = [
  { id: 'minimal', labelEn: 'Minimal', labelAr: 'بسيط', basePrice: 100, perGuestPrice: 2 },
  { id: 'standard', labelEn: 'Standard', labelAr: 'قياسي', basePrice: 300, perGuestPrice: 5 },
  { id: 'elegant', labelEn: 'Elegant', labelAr: 'أنيق', basePrice: 600, perGuestPrice: 8 },
  { id: 'luxury', labelEn: 'Luxury', labelAr: 'فاخر', basePrice: 1000, perGuestPrice: 12 },
];

export default function CalculatorPage() {
  const { language, t } = useLanguage();
  
  const [eventType, setEventType] = useState('corporate');
  const [venueType, setVenueType] = useState('indoor');
  const [cateringLevel, setCateringLevel] = useState('standard');
  const [decorationLevel, setDecorationLevel] = useState('standard');
  const [guestCount, setGuestCount] = useState([100]);
  
  const getLabel = (option: PricingOption) => language === 'ar' ? option.labelAr : option.labelEn;
  
  const calculation = useMemo(() => {
    const event = eventTypes.find(e => e.id === eventType) || eventTypes[0];
    const venue = venueTypes.find(v => v.id === venueType) || venueTypes[0];
    const catering = cateringLevels.find(c => c.id === cateringLevel) || cateringLevels[0];
    const decoration = decorationLevels.find(d => d.id === decorationLevel) || decorationLevels[0];
    
    const guests = guestCount[0];
    
    const eventCost = event.basePrice + (event.perGuestPrice * guests);
    const venueCost = venue.basePrice + (venue.perGuestPrice * guests);
    const cateringCost = catering.basePrice + (catering.perGuestPrice * guests);
    const decorationCost = decoration.basePrice + (decoration.perGuestPrice * guests);
    
    const subtotalUSD = eventCost + venueCost + cateringCost + decorationCost;
    const serviceFeeUSD = subtotalUSD * 0.15; // 15% service fee
    const totalUSD = subtotalUSD + serviceFeeUSD;
    const totalYER = totalUSD * USD_TO_YER;
    
    return {
      eventCost,
      venueCost,
      cateringCost,
      decorationCost,
      subtotalUSD,
      serviceFeeUSD,
      totalUSD,
      totalYER,
    };
  }, [eventType, venueType, cateringLevel, decorationLevel, guestCount]);
  
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat(language === 'ar' ? 'ar-YE' : 'en-US').format(Math.round(num));
  };
  
  const resetCalculator = () => {
    setEventType('corporate');
    setVenueType('indoor');
    setCateringLevel('standard');
    setDecorationLevel('standard');
    setGuestCount([100]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 rounded-full bg-[#2D7A4A]/10 flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-[#2D7A4A]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {t('calc.title')}
            </h1>
            <p className="text-gray-600">
              {t('calc.subtitle')}
            </p>
            <p className="text-sm text-[#2D7A4A] mt-2 font-medium">
              {t('calc.usd_rate')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Event Type */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Calculator className="w-5 h-5 text-[#2D7A4A]" />
                    {t('calc.event_type')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={eventType} onValueChange={setEventType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          {getLabel(type)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
              
              {/* Guest Count */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="w-5 h-5 text-[#2D7A4A]" />
                    {t('calc.guests')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Slider
                      value={guestCount}
                      onValueChange={setGuestCount}
                      min={10}
                      max={1000}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>10</span>
                      <span className="font-bold text-[#2D7A4A] text-lg">{guestCount[0]}</span>
                      <span>1000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Venue Type */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="w-5 h-5 text-[#2D7A4A]" />
                    {t('calc.venue')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={venueType} onValueChange={setVenueType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {venueTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          {getLabel(type)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
              
              {/* Catering Level */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <UtensilsCrossed className="w-5 h-5 text-[#2D7A4A]" />
                    {t('calc.catering')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={cateringLevel} onValueChange={setCateringLevel}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {cateringLevels.map((level) => (
                        <SelectItem key={level.id} value={level.id}>
                          {getLabel(level)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
              
              {/* Decoration Level */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Palette className="w-5 h-5 text-[#2D7A4A]" />
                    {t('calc.decoration')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={decorationLevel} onValueChange={setDecorationLevel}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {decorationLevels.map((level) => (
                        <SelectItem key={level.id} value={level.id}>
                          {getLabel(level)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </div>
            
            {/* Results Panel */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 bg-gradient-to-br from-[#2D7A4A] to-[#1a5c35] text-white">
                <CardHeader>
                  <CardTitle className="text-xl">{t('calc.estimate')}</CardTitle>
                  <CardDescription className="text-white/70">
                    {language === 'ar' ? 'تفاصيل التكلفة التقديرية' : 'Cost breakdown details'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Breakdown */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/80">{t('calc.event_type')}</span>
                      <span>${formatNumber(calculation.eventCost)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">{t('calc.venue')}</span>
                      <span>${formatNumber(calculation.venueCost)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">{t('calc.catering')}</span>
                      <span>${formatNumber(calculation.cateringCost)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">{t('calc.decoration')}</span>
                      <span>${formatNumber(calculation.decorationCost)}</span>
                    </div>
                    <div className="border-t border-white/20 pt-2 flex justify-between">
                      <span className="text-white/80">{language === 'ar' ? 'المجموع الفرعي' : 'Subtotal'}</span>
                      <span>${formatNumber(calculation.subtotalUSD)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">{language === 'ar' ? 'رسوم الخدمة (15%)' : 'Service Fee (15%)'}</span>
                      <span>${formatNumber(calculation.serviceFeeUSD)}</span>
                    </div>
                  </div>
                  
                  {/* Total */}
                  <div className="border-t border-white/20 pt-4">
                    <div className="text-center">
                      <p className="text-white/70 text-sm mb-1">{language === 'ar' ? 'الإجمالي بالدولار' : 'Total (USD)'}</p>
                      <p className="text-3xl font-bold">${formatNumber(calculation.totalUSD)}</p>
                    </div>
                    <div className="text-center mt-4 p-3 bg-white/10 rounded-lg">
                      <p className="text-white/70 text-sm mb-1">{language === 'ar' ? 'الإجمالي بالريال اليمني' : 'Total (YER)'}</p>
                      <p className="text-2xl font-bold">{formatNumber(calculation.totalYER)} {t('calc.currency')}</p>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="space-y-2 pt-4">
                    <Button className="w-full bg-white text-[#2D7A4A] hover:bg-white/90">
                      <Download className="w-4 h-4 me-2" />
                      {language === 'ar' ? 'تحميل التقدير' : 'Download Quote'}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-white text-white hover:bg-white/10"
                      onClick={resetCalculator}
                    >
                      <RefreshCw className="w-4 h-4 me-2" />
                      {language === 'ar' ? 'إعادة تعيين' : 'Reset'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
