import { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { trpc } from '@/lib/trpc';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  CheckCircle2,
  Info,
  DollarSign,
  Banknote,
  RefreshCw,
  Leaf,
  Coffee,
  Camera,
  Music,
  Baby,
  Gift,
  Droplets,
  Flower2,
  Star,
  TrendingUp,
  PieChart,
  Target,
  Award,
  Zap
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
  addOnsCost: number;
  subtotal: number;
  serviceFee: number;
  total: number;
  sustainabilityScore: number;
}

// Premium Add-ons (10 items from homepage)
const premiumAddOns = [
  { id: 'saffron_water', nameEn: 'Saffron Water Service', nameAr: 'خدمة ماء الزعفران', price: 150, icon: Droplets, sustainable: true, description: { en: 'Traditional Yemeni hospitality with premium saffron-infused water', ar: 'ضيافة يمنية تقليدية بماء الزعفران الفاخر' } },
  { id: 'kids_corner', nameEn: 'Kids Entertainment Corner', nameAr: 'ركن ترفيه الأطفال', price: 300, icon: Baby, sustainable: false, description: { en: 'Professional childcare with games and activities', ar: 'رعاية أطفال احترافية مع ألعاب وأنشطة' } },
  { id: 'photo_booth', nameEn: 'Premium Photo Booth', nameAr: 'كشك تصوير فاخر', price: 250, icon: Camera, sustainable: false, description: { en: 'Professional photo booth with instant prints', ar: 'كشك تصوير احترافي مع طباعة فورية' } },
  { id: 'live_music', nameEn: 'Live Oud & Traditional Music', nameAr: 'موسيقى عود حية', price: 400, icon: Music, sustainable: false, description: { en: 'Authentic Yemeni musicians with traditional instruments', ar: 'موسيقيون يمنيون أصيلون بآلات تقليدية' } },
  { id: 'vip_gifts', nameEn: 'VIP Gift Bags', nameAr: 'حقائب هدايا VIP', price: 50, icon: Gift, sustainable: true, description: { en: 'Eco-friendly gift bags with local products', ar: 'حقائب هدايا صديقة للبيئة بمنتجات محلية' } },
  { id: 'floral', nameEn: 'Premium Floral Arrangements', nameAr: 'تنسيقات زهور فاخرة', price: 350, icon: Flower2, sustainable: true, description: { en: 'Locally sourced sustainable flower arrangements', ar: 'تنسيقات زهور مستدامة من مصادر محلية' } },
  { id: 'coffee_corner', nameEn: 'Yemeni Coffee Corner', nameAr: 'ركن القهوة اليمنية', price: 200, icon: Coffee, sustainable: true, description: { en: 'Premium Yemeni coffee service with traditional brewing', ar: 'خدمة قهوة يمنية فاخرة بطريقة تقليدية' } },
  { id: 'green_decor', nameEn: 'Sustainable Green Décor', nameAr: 'ديكور أخضر مستدام', price: 280, icon: Leaf, sustainable: true, description: { en: 'Eco-friendly decorations with living plants', ar: 'ديكورات صديقة للبيئة بنباتات حية' } },
  { id: 'premium_av', nameEn: 'Premium AV Equipment', nameAr: 'معدات صوت وصورة فاخرة', price: 500, icon: Zap, sustainable: false, description: { en: 'High-end audio-visual equipment and technicians', ar: 'معدات صوت وصورة عالية الجودة مع فنيين' } },
  { id: 'valet', nameEn: 'Valet Parking Service', nameAr: 'خدمة صف السيارات', price: 180, icon: Star, sustainable: false, description: { en: 'Professional valet parking for all guests', ar: 'خدمة صف سيارات احترافية لجميع الضيوف' } },
];

export default function CalculatorPage() {
  const { language } = useLanguage();
  
  // Form state
  const [eventType, setEventType] = useState('corporate');
  const [venueType, setVenueType] = useState('indoor');
  const [cateringLevel, setCateringLevel] = useState('standard');
  const [decorationLevel, setDecorationLevel] = useState('standard');
  const [guestCount, setGuestCount] = useState([100]);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  
  // ROI Calculator state
  const [expectedRevenue, setExpectedRevenue] = useState([50000]);
  const [leadConversion, setLeadConversion] = useState([15]);
  const [brandAwareness, setBrandAwareness] = useState([30]);
  
  // Quote state
  const [quoteNumber, setQuoteNumber] = useState<string | null>(null);
  const [isSavingQuote, setIsSavingQuote] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  
  // tRPC mutation for saving quotes
  const createQuoteMutation = trpc.greenists.quotes.create.useMutation({
    onSuccess: (data) => {
      setQuoteNumber(data.quoteNumber);
      setIsSavingQuote(false);
    },
    onError: (error) => {
      console.error('Failed to save quote:', error);
      setIsSavingQuote(false);
    },
  });
  
  // Save quote to database
  const handleSaveQuote = async () => {
    setIsSavingQuote(true);
    
    createQuoteMutation.mutate({
      clientName: clientInfo.name || undefined,
      clientEmail: clientInfo.email || undefined,
      clientPhone: clientInfo.phone || undefined,
      clientCompany: clientInfo.company || undefined,
      eventType,
      guestCount: guestCount[0],
      venueType,
      cateringLevel,
      decorationLevel,
      addOns: selectedAddOns,
      baseCostUsd: breakdown.subtotal - breakdown.addOnsCost,
      addOnsCostUsd: breakdown.addOnsCost,
      subtotalUsd: breakdown.subtotal,
      taxUsd: 0,
      totalUsd: breakdown.total,
      displayCurrency: currency,
      expectedRevenue: expectedRevenue[0],
      expectedRoi: roiCalculation.roi,
      sustainabilityScore: breakdown.sustainabilityScore,
    });
  };
  
  // Download quote as PDF (opens in new tab)
  const handleDownloadQuote = () => {
    if (quoteNumber) {
      window.open(`/api/quotes/${quoteNumber}/pdf`, '_blank');
    } else {
      // Save quote first, then download
      setShowQuoteModal(true);
    }
  };
  
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
  
  // Toggle add-on selection
  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
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
    
    // Calculate add-ons cost
    const addOnsCost = selectedAddOns.reduce((total, id) => {
      const addOn = premiumAddOns.find(a => a.id === id);
      if (addOn) {
        // Some add-ons are per-guest, others are flat
        if (['vip_gifts'].includes(id)) {
          return total + (addOn.price * Math.ceil(guests / 10)); // Per 10 guests
        }
        return total + addOn.price;
      }
      return total;
    }, 0);
    
    // Calculate sustainability score
    const sustainableAddOns = selectedAddOns.filter(id => 
      premiumAddOns.find(a => a.id === id)?.sustainable
    ).length;
    const sustainabilityScore = Math.min(100, 
      40 + // Base score
      (sustainableAddOns * 10) + // +10 for each sustainable add-on
      (decorationLevel === 'minimal' ? 10 : 0) + // Minimal decoration bonus
      (venueType === 'outdoor' ? 10 : 0) // Outdoor venue bonus
    );
    
    const subtotal = eventCost + venueCost + cateringCost + decorationCost + addOnsCost;
    const serviceFee = subtotal * 0.15;
    const total = subtotal + serviceFee;
    
    return {
      eventCost,
      venueCost,
      cateringCost,
      decorationCost,
      addOnsCost,
      subtotal,
      serviceFee,
      total,
      sustainabilityScore,
    };
  }, [eventType, venueType, cateringLevel, decorationLevel, guestCount, selectedAddOns]);
  
  // Calculate ROI
  const roiCalculation = useMemo(() => {
    const eventCost = breakdown.total;
    const revenue = expectedRevenue[0];
    const leads = Math.round(guestCount[0] * (leadConversion[0] / 100));
    const avgDealValue = revenue / Math.max(leads, 1);
    const roi = ((revenue - eventCost) / eventCost) * 100;
    const costPerLead = eventCost / Math.max(leads, 1);
    const brandValue = eventCost * (brandAwareness[0] / 100) * 2; // Estimated brand value
    
    return {
      eventCost,
      expectedRevenue: revenue,
      leads,
      avgDealValue,
      roi,
      costPerLead,
      brandValue,
      totalValue: revenue + brandValue,
    };
  }, [breakdown.total, expectedRevenue, guestCount, leadConversion, brandAwareness]);
  
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
    setSelectedAddOns([]);
    setExpectedRevenue([50000]);
    setLeadConversion([15]);
    setBrandAwareness([30]);
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
              {language === 'ar' ? 'حاسبة تكلفة الفعاليات المتقدمة' : 'Advanced Event Cost Calculator'}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'احصل على تقدير فوري ودقيق لتكلفة فعاليتك مع حساب العائد على الاستثمار'
                : 'Get an instant estimate with ROI calculation and sustainability scoring'}
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
            <Tabs defaultValue="calculator" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="calculator" className="flex items-center gap-2">
                  <Calculator className="w-4 h-4" />
                  {language === 'ar' ? 'الحاسبة' : 'Calculator'}
                </TabsTrigger>
                <TabsTrigger value="addons" className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  {language === 'ar' ? 'الإضافات' : 'Add-ons'}
                </TabsTrigger>
                <TabsTrigger value="roi" className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  {language === 'ar' ? 'العائد' : 'ROI'}
                </TabsTrigger>
              </TabsList>

              {/* Main Calculator Tab */}
              <TabsContent value="calculator">
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
                    
                    {/* Sustainability Score */}
                    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Leaf className="w-5 h-5 text-green-600" />
                            <span className="font-semibold text-green-800">
                              {language === 'ar' ? 'نقاط الاستدامة' : 'Sustainability Score'}
                            </span>
                          </div>
                          <Badge className="bg-green-600">{breakdown.sustainabilityScore}/100</Badge>
                        </div>
                        <div className="w-full bg-green-200 rounded-full h-3">
                          <div 
                            className="bg-green-600 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${breakdown.sustainabilityScore}%` }}
                          />
                        </div>
                        <p className="text-xs text-green-700 mt-2">
                          {language === 'ar' 
                            ? 'أضف خيارات مستدامة لزيادة النقاط'
                            : 'Add sustainable options to increase your score'}
                        </p>
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
                          {breakdown.addOnsCost > 0 && (
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span className="text-gray-600 flex items-center gap-1">
                                <Sparkles className="w-4 h-4 text-amber-500" />
                                {language === 'ar' ? 'الإضافات المميزة' : 'Premium Add-ons'}
                              </span>
                              <span className="font-semibold text-amber-600">{formatCurrency(breakdown.addOnsCost)}</span>
                            </div>
                          )}
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
                            <Button 
                              className="w-full bg-[#2D7A4A] hover:bg-[#236339]"
                              onClick={() => setShowQuoteModal(true)}
                              disabled={isSavingQuote}
                            >
                              <Download className="w-4 h-4 me-2" />
                              {isSavingQuote 
                                ? (language === 'ar' ? 'جاري الحفظ...' : 'Saving...')
                                : quoteNumber 
                                  ? (language === 'ar' ? 'تحميل عرض السعر' : 'Download Quote')
                                  : (language === 'ar' ? 'حفظ وتحميل عرض السعر' : 'Save & Download Quote')
                              }
                            </Button>
                            {quoteNumber && (
                              <div className="text-center mt-2">
                                <Badge variant="outline" className="text-green-600 border-green-600">
                                  {language === 'ar' ? 'رقم العرض: ' : 'Quote #'}{quoteNumber}
                                </Badge>
                              </div>
                            )}
                            <Button variant="outline" className="w-full border-[#2D7A4A] text-[#2D7A4A]" onClick={resetCalculator}>
                              <RefreshCw className="w-4 h-4 me-2" />
                              {language === 'ar' ? 'إعادة تعيين' : 'Reset'}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Premium Add-ons Tab */}
              <TabsContent value="addons">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {language === 'ar' ? '10 إضافات مميزة' : '10 Premium Add-ons'}
                    </h2>
                    <p className="text-gray-600">
                      {language === 'ar' 
                        ? 'اختر الإضافات لتخصيص فعاليتك'
                        : 'Select add-ons to customize your event'}
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        <Leaf className="w-3 h-3 mr-1" />
                        {language === 'ar' ? 'مستدام' : 'Sustainable'}
                      </Badge>
                      <Badge variant="secondary">
                        {selectedAddOns.length} {language === 'ar' ? 'مختار' : 'selected'}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {premiumAddOns.map((addOn) => (
                      <Card 
                        key={addOn.id}
                        className={`cursor-pointer transition-all hover:shadow-lg ${
                          selectedAddOns.includes(addOn.id) 
                            ? 'border-[#2D7A4A] bg-[#2D7A4A]/5 ring-2 ring-[#2D7A4A]' 
                            : 'border-gray-200'
                        }`}
                        onClick={() => toggleAddOn(addOn.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-xl ${
                              selectedAddOns.includes(addOn.id) 
                                ? 'bg-[#2D7A4A] text-white' 
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              <addOn.icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-gray-800">
                                  {language === 'ar' ? addOn.nameAr : addOn.nameEn}
                                </h3>
                                {addOn.sustainable && (
                                  <Badge className="bg-green-100 text-green-700 text-xs">
                                    <Leaf className="w-3 h-3 mr-1" />
                                    {language === 'ar' ? 'مستدام' : 'Eco'}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-500 mb-2">
                                {addOn.description[language]}
                              </p>
                              <p className="font-bold text-[#2D7A4A]">
                                {formatCurrency(addOn.price)}
                              </p>
                            </div>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              selectedAddOns.includes(addOn.id) 
                                ? 'border-[#2D7A4A] bg-[#2D7A4A]' 
                                : 'border-gray-300'
                            }`}>
                              {selectedAddOns.includes(addOn.id) && (
                                <CheckCircle2 className="w-4 h-4 text-white" />
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {/* Add-ons Summary */}
                  {selectedAddOns.length > 0 && (
                    <Card className="mt-8 bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-amber-800">
                              {language === 'ar' ? 'إجمالي الإضافات' : 'Add-ons Total'}
                            </h3>
                            <p className="text-sm text-amber-600">
                              {selectedAddOns.length} {language === 'ar' ? 'إضافة مختارة' : 'add-ons selected'}
                            </p>
                          </div>
                          <p className="text-2xl font-bold text-amber-700">
                            {formatCurrency(breakdown.addOnsCost)}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>

              {/* ROI Calculator Tab */}
              <TabsContent value="roi">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {language === 'ar' ? 'حاسبة العائد على الاستثمار' : 'ROI Calculator'}
                    </h2>
                    <p className="text-gray-600">
                      {language === 'ar' 
                        ? 'احسب العائد المتوقع من فعاليتك التجارية'
                        : 'Calculate the expected return on your business event'}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* ROI Inputs */}
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-[#2D7A4A]" />
                            {language === 'ar' ? 'الإيرادات المتوقعة' : 'Expected Revenue'}
                          </CardTitle>
                          <CardDescription>
                            {language === 'ar' 
                              ? 'الإيرادات المتوقعة من العملاء المحتملين'
                              : 'Expected revenue from potential clients'}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="text-center">
                              <span className="text-4xl font-bold text-[#2D7A4A]">
                                {formatCurrency(expectedRevenue[0])}
                              </span>
                            </div>
                            <Slider
                              value={expectedRevenue}
                              onValueChange={setExpectedRevenue}
                              min={1000}
                              max={500000}
                              step={1000}
                              className="w-full"
                            />
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-[#2D7A4A]" />
                            {language === 'ar' ? 'معدل تحويل العملاء' : 'Lead Conversion Rate'}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="text-center">
                              <span className="text-4xl font-bold text-[#2D7A4A]">{leadConversion[0]}%</span>
                            </div>
                            <Slider
                              value={leadConversion}
                              onValueChange={setLeadConversion}
                              min={1}
                              max={50}
                              step={1}
                              className="w-full"
                            />
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-[#2D7A4A]" />
                            {language === 'ar' ? 'تأثير الوعي بالعلامة' : 'Brand Awareness Impact'}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="text-center">
                              <span className="text-4xl font-bold text-[#2D7A4A]">{brandAwareness[0]}%</span>
                            </div>
                            <Slider
                              value={brandAwareness}
                              onValueChange={setBrandAwareness}
                              min={5}
                              max={100}
                              step={5}
                              className="w-full"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* ROI Results */}
                    <div className="space-y-6">
                      <Card className="bg-gradient-to-br from-[#2D7A4A] to-[#1a4d2e] text-white">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            {language === 'ar' ? 'العائد على الاستثمار' : 'Return on Investment'}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center mb-6">
                            <p className="text-6xl font-bold">
                              {roiCalculation.roi > 0 ? '+' : ''}{roiCalculation.roi.toFixed(0)}%
                            </p>
                            <p className="text-white/80">
                              {language === 'ar' ? 'العائد المتوقع' : 'Expected ROI'}
                            </p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 rounded-lg p-3 text-center">
                              <p className="text-2xl font-bold">{roiCalculation.leads}</p>
                              <p className="text-xs text-white/80">
                                {language === 'ar' ? 'عملاء محتملين' : 'Leads'}
                              </p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-center">
                              <p className="text-2xl font-bold">{formatCurrency(roiCalculation.costPerLead)}</p>
                              <p className="text-xs text-white/80">
                                {language === 'ar' ? 'تكلفة/عميل' : 'Cost/Lead'}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <PieChart className="w-5 h-5 text-[#2D7A4A]" />
                            {language === 'ar' ? 'تحليل القيمة' : 'Value Analysis'}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span className="text-gray-600">
                                {language === 'ar' ? 'تكلفة الفعالية' : 'Event Cost'}
                              </span>
                              <span className="font-semibold text-red-600">
                                -{formatCurrency(roiCalculation.eventCost)}
                              </span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span className="text-gray-600">
                                {language === 'ar' ? 'الإيرادات المتوقعة' : 'Expected Revenue'}
                              </span>
                              <span className="font-semibold text-green-600">
                                +{formatCurrency(roiCalculation.expectedRevenue)}
                              </span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span className="text-gray-600">
                                {language === 'ar' ? 'قيمة العلامة التجارية' : 'Brand Value'}
                              </span>
                              <span className="font-semibold text-blue-600">
                                +{formatCurrency(roiCalculation.brandValue)}
                              </span>
                            </div>
                            <div className="bg-green-50 rounded-xl p-4">
                              <div className="flex justify-between items-center">
                                <span className="font-semibold text-green-800">
                                  {language === 'ar' ? 'القيمة الإجمالية' : 'Total Value'}
                                </span>
                                <span className="text-2xl font-bold text-green-600">
                                  {formatCurrency(roiCalculation.totalValue)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-amber-50 border-amber-200">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-amber-600 mt-0.5" />
                            <div>
                              <p className="font-semibold text-amber-800 mb-1">
                                {language === 'ar' ? 'ملاحظة' : 'Note'}
                              </p>
                              <p className="text-sm text-amber-700">
                                {language === 'ar' 
                                  ? 'هذه التقديرات مبنية على افتراضات عامة. النتائج الفعلية قد تختلف بناءً على عوامل متعددة.'
                                  : 'These estimates are based on general assumptions. Actual results may vary based on multiple factors.'}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
