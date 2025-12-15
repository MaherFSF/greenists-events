// Comprehensive Event Packages for Greenists
// All prices in USD - can be converted to YER (x1700) or SAR (x3.75)

export interface EventPackage {
  id: string;
  nameEn: string;
  nameAr: string;
  tier: 'essential' | 'professional' | 'premium' | 'luxury';
  basePrice: number;
  pricePerGuest: number;
  minGuests: number;
  maxGuests: number;
  duration: string;
  features: { en: string; ar: string }[];
  addOns: string[];
  image: string;
  popular?: boolean;
  bestValue?: boolean;
}

export const eventPackages: EventPackage[] = [
  // CORPORATE PACKAGES
  {
    id: 'corp-essential',
    nameEn: 'Corporate Essential',
    nameAr: 'الشركات الأساسي',
    tier: 'essential',
    basePrice: 500,
    pricePerGuest: 8,
    minGuests: 20,
    maxGuests: 100,
    duration: '4 hours',
    features: [
      { en: 'Venue coordination', ar: 'تنسيق المكان' },
      { en: 'Basic sound system', ar: 'نظام صوت أساسي' },
      { en: 'Registration desk', ar: 'مكتب التسجيل' },
      { en: 'Standard seating', ar: 'جلوس قياسي' },
      { en: 'Event coordinator', ar: 'منسق الفعالية' },
    ],
    addOns: ['photography', 'catering', 'wifi'],
    image: '/images/event-types/corporate-event.png',
  },
  {
    id: 'corp-professional',
    nameEn: 'Corporate Professional',
    nameAr: 'الشركات المهني',
    tier: 'professional',
    basePrice: 1200,
    pricePerGuest: 15,
    minGuests: 50,
    maxGuests: 300,
    duration: '6 hours',
    features: [
      { en: 'Premium venue selection', ar: 'اختيار مكان مميز' },
      { en: 'Professional AV equipment', ar: 'معدات صوت وصورة احترافية' },
      { en: 'Branded materials', ar: 'مواد مطبوعة بالعلامة التجارية' },
      { en: 'Catering service', ar: 'خدمة ضيافة' },
      { en: 'Photography coverage', ar: 'تغطية تصوير فوتوغرافي' },
      { en: 'Dedicated event manager', ar: 'مدير فعالية مخصص' },
      { en: 'Stage setup', ar: 'إعداد المسرح' },
    ],
    addOns: ['videography', 'liveStreaming', 'vipLounge'],
    image: '/images/event-types/corporate-event.png',
    popular: true,
  },
  {
    id: 'corp-premium',
    nameEn: 'Corporate Premium',
    nameAr: 'الشركات المتميز',
    tier: 'premium',
    basePrice: 3000,
    pricePerGuest: 25,
    minGuests: 100,
    maxGuests: 500,
    duration: '8 hours',
    features: [
      { en: 'Luxury venue booking', ar: 'حجز مكان فاخر' },
      { en: 'Full AV production', ar: 'إنتاج صوت وصورة كامل' },
      { en: 'Custom branding package', ar: 'حزمة علامة تجارية مخصصة' },
      { en: 'Gourmet catering', ar: 'ضيافة فاخرة' },
      { en: 'Photo & video coverage', ar: 'تغطية صور وفيديو' },
      { en: 'Live streaming setup', ar: 'إعداد البث المباشر' },
      { en: 'VIP lounge area', ar: 'منطقة صالة VIP' },
      { en: 'Executive transportation', ar: 'نقل تنفيذي' },
      { en: 'Post-event report', ar: 'تقرير ما بعد الفعالية' },
    ],
    addOns: ['droneFootage', 'redCarpet', 'entertainment'],
    image: '/images/event-types/corporate-event.png',
    bestValue: true,
  },

  // WEDDING PACKAGES
  {
    id: 'wedding-intimate',
    nameEn: 'Intimate Wedding',
    nameAr: 'زفاف حميم',
    tier: 'essential',
    basePrice: 800,
    pricePerGuest: 20,
    minGuests: 30,
    maxGuests: 80,
    duration: '5 hours',
    features: [
      { en: 'Venue decoration', ar: 'تزيين المكان' },
      { en: 'Floral arrangements', ar: 'تنسيقات زهور' },
      { en: 'Sound system', ar: 'نظام صوت' },
      { en: 'Wedding coordinator', ar: 'منسق الزفاف' },
      { en: 'Basic photography', ar: 'تصوير أساسي' },
    ],
    addOns: ['videography', 'catering', 'entertainment'],
    image: '/images/event-types/wedding-event.png',
  },
  {
    id: 'wedding-classic',
    nameEn: 'Classic Wedding',
    nameAr: 'زفاف كلاسيكي',
    tier: 'professional',
    basePrice: 2500,
    pricePerGuest: 35,
    minGuests: 100,
    maxGuests: 300,
    duration: '7 hours',
    features: [
      { en: 'Premium venue & decoration', ar: 'مكان وتزيين مميز' },
      { en: 'Luxury floral design', ar: 'تصميم زهور فاخر' },
      { en: 'Professional DJ & sound', ar: 'دي جي ونظام صوت احترافي' },
      { en: 'Full catering service', ar: 'خدمة ضيافة كاملة' },
      { en: 'Photo & video package', ar: 'حزمة صور وفيديو' },
      { en: 'Bridal suite access', ar: 'غرفة العروس' },
      { en: 'Guest transportation', ar: 'نقل الضيوف' },
    ],
    addOns: ['droneFootage', 'liveStreaming', 'fireworks'],
    image: '/images/event-types/wedding-event.png',
    popular: true,
  },
  {
    id: 'wedding-royal',
    nameEn: 'Royal Wedding',
    nameAr: 'زفاف ملكي',
    tier: 'luxury',
    basePrice: 8000,
    pricePerGuest: 60,
    minGuests: 200,
    maxGuests: 1000,
    duration: '10 hours',
    features: [
      { en: 'Exclusive luxury venue', ar: 'مكان فاخر حصري' },
      { en: 'Custom theme design', ar: 'تصميم موضوع مخصص' },
      { en: 'International floral artist', ar: 'فنان زهور دولي' },
      { en: 'Live orchestra/band', ar: 'أوركسترا/فرقة حية' },
      { en: 'Michelin-star catering', ar: 'ضيافة نجمة ميشلان' },
      { en: 'Cinematic video production', ar: 'إنتاج فيديو سينمائي' },
      { en: 'Drone aerial coverage', ar: 'تغطية جوية بالدرون' },
      { en: 'Fireworks display', ar: 'عرض ألعاب نارية' },
      { en: 'Luxury car service', ar: 'خدمة سيارات فاخرة' },
      { en: 'Honeymoon planning', ar: 'تخطيط شهر العسل' },
    ],
    addOns: ['helicopter', 'yacht', 'celebrity'],
    image: '/images/event-types/wedding-event.png',
    bestValue: true,
  },

  // CONFERENCE PACKAGES
  {
    id: 'conf-basic',
    nameEn: 'Conference Basic',
    nameAr: 'مؤتمر أساسي',
    tier: 'essential',
    basePrice: 600,
    pricePerGuest: 10,
    minGuests: 50,
    maxGuests: 150,
    duration: '6 hours',
    features: [
      { en: 'Conference hall booking', ar: 'حجز قاعة المؤتمرات' },
      { en: 'Basic AV setup', ar: 'إعداد صوت وصورة أساسي' },
      { en: 'Registration system', ar: 'نظام التسجيل' },
      { en: 'Coffee breaks', ar: 'استراحات القهوة' },
      { en: 'Printed materials', ar: 'مواد مطبوعة' },
    ],
    addOns: ['lunch', 'wifi', 'translation'],
    image: '/images/event-types/conference-event.png',
  },
  {
    id: 'conf-executive',
    nameEn: 'Executive Conference',
    nameAr: 'مؤتمر تنفيذي',
    tier: 'premium',
    basePrice: 2000,
    pricePerGuest: 20,
    minGuests: 100,
    maxGuests: 500,
    duration: '8 hours',
    features: [
      { en: 'Premium conference center', ar: 'مركز مؤتمرات مميز' },
      { en: 'Professional production', ar: 'إنتاج احترافي' },
      { en: 'Simultaneous translation', ar: 'ترجمة فورية' },
      { en: 'Full catering', ar: 'ضيافة كاملة' },
      { en: 'Live streaming', ar: 'بث مباشر' },
      { en: 'Networking app', ar: 'تطبيق التواصل' },
      { en: 'Speaker management', ar: 'إدارة المتحدثين' },
      { en: 'Media coverage', ar: 'تغطية إعلامية' },
    ],
    addOns: ['exhibition', 'gala', 'awards'],
    image: '/images/event-types/conference-event.png',
    popular: true,
  },

  // KIDS PARTY PACKAGES
  {
    id: 'kids-fun',
    nameEn: 'Fun Party',
    nameAr: 'حفلة مرحة',
    tier: 'essential',
    basePrice: 300,
    pricePerGuest: 15,
    minGuests: 10,
    maxGuests: 30,
    duration: '3 hours',
    features: [
      { en: 'Theme decoration', ar: 'تزيين موضوعي' },
      { en: 'Balloon arrangements', ar: 'تنسيقات بالونات' },
      { en: 'Birthday cake', ar: 'كعكة عيد الميلاد' },
      { en: 'Party games', ar: 'ألعاب الحفلة' },
      { en: 'Party favors', ar: 'هدايا الحفلة' },
    ],
    addOns: ['clown', 'facepainting', 'bouncy'],
    image: '/images/event-types/kids-event.png',
  },
  {
    id: 'kids-magical',
    nameEn: 'Magical Adventure',
    nameAr: 'مغامرة سحرية',
    tier: 'professional',
    basePrice: 800,
    pricePerGuest: 25,
    minGuests: 20,
    maxGuests: 50,
    duration: '4 hours',
    features: [
      { en: 'Custom theme design', ar: 'تصميم موضوع مخصص' },
      { en: 'Character appearances', ar: 'ظهور شخصيات' },
      { en: 'Magic show', ar: 'عرض سحري' },
      { en: 'Face painting', ar: 'رسم على الوجه' },
      { en: 'Bouncy castle', ar: 'قلعة نطاطة' },
      { en: 'Professional photography', ar: 'تصوير احترافي' },
      { en: 'Custom cake', ar: 'كعكة مخصصة' },
    ],
    addOns: ['videography', 'puppetshow', 'animals'],
    image: '/images/event-types/kids-event.png',
    popular: true,
  },
];

// Add-on services with pricing
export const addOnServices = [
  { id: 'photography', nameEn: 'Professional Photography', nameAr: 'تصوير فوتوغرافي احترافي', price: 300, image: '/images/services/photography.png' },
  { id: 'videography', nameEn: 'Video Production', nameAr: 'إنتاج فيديو', price: 500, image: '/images/services/videography.png' },
  { id: 'catering', nameEn: 'Catering Service', nameAr: 'خدمة ضيافة', pricePerGuest: 12, image: '/images/services/catering.png' },
  { id: 'decoration', nameEn: 'Premium Decoration', nameAr: 'تزيين مميز', price: 400, image: '/images/services/decoration.png' },
  { id: 'sound', nameEn: 'Sound System', nameAr: 'نظام صوت', price: 250, image: '/images/services/sound.png' },
  { id: 'lighting', nameEn: 'Professional Lighting', nameAr: 'إضاءة احترافية', price: 350, image: '/images/services/lighting.png' },
  { id: 'entertainment', nameEn: 'Live Entertainment', nameAr: 'ترفيه حي', price: 600, image: '/images/services/entertainment.png' },
  { id: 'transportation', nameEn: 'Guest Transportation', nameAr: 'نقل الضيوف', price: 200, image: '/images/services/transportation.png' },
  { id: 'wifi', nameEn: 'High-Speed WiFi', nameAr: 'واي فاي عالي السرعة', price: 100, image: '/images/services/wifi.png' },
  { id: 'liveStreaming', nameEn: 'Live Streaming', nameAr: 'بث مباشر', price: 400, image: '/images/services/streaming.png' },
  { id: 'droneFootage', nameEn: 'Drone Aerial Coverage', nameAr: 'تغطية جوية بالدرون', price: 450, image: '/images/services/drone.png' },
  { id: 'vipLounge', nameEn: 'VIP Lounge Setup', nameAr: 'إعداد صالة VIP', price: 800, image: '/images/services/vip.png' },
  { id: 'redCarpet', nameEn: 'Red Carpet Experience', nameAr: 'تجربة السجادة الحمراء', price: 300, image: '/images/services/redcarpet.png' },
  { id: 'translation', nameEn: 'Simultaneous Translation', nameAr: 'ترجمة فورية', price: 500, image: '/images/services/translation.png' },
];

export default eventPackages;
