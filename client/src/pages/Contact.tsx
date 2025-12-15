import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock,
  Send,
  MessageSquare,
  Building,
  Navigation as NavIcon,
  ExternalLink,
  Thermometer,
  Cloud,
  Sun,
  Image,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Office photos gallery
const officePhotos = [
  { src: '/images/04_modern_office_workspace_scene(2).png', caption: { en: 'Modern Office Space', ar: 'مساحة المكتب الحديثة' } },
  { src: '/images/03_outdoor_event_aden_scene(2).png', caption: { en: 'Event Setup Area', ar: 'منطقة إعداد الفعاليات' } },
  { src: '/images/greenists_conference_materials_kit(2).png', caption: { en: 'Conference Materials', ar: 'مواد المؤتمرات' } },
  { src: '/images/greenists_trade_show_exhibition_kit(1).png', caption: { en: 'Exhibition Setup', ar: 'إعداد المعارض' } },
];

// Aden weather data (simulated - in production would use API)
const getAdenWeather = () => {
  // Typical Aden weather
  const temps = [28, 30, 32, 34, 33, 31, 29];
  const conditions = ['Sunny', 'Partly Cloudy', 'Sunny', 'Hot', 'Sunny'];
  const day = new Date().getDay();
  return {
    temp: temps[day],
    condition: conditions[day % conditions.length],
    humidity: 65 + Math.floor(Math.random() * 15),
  };
};

export default function Contact() {
  const { language, t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [weather, setWeather] = useState(getAdenWeather());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  // Auto-rotate photos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % officePhotos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success(
      language === 'ar' 
        ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
        : 'Your message has been sent successfully! We will contact you soon.'
    );
    
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setLoading(false);
  };
  
  const nextPhoto = () => setCurrentPhotoIndex((prev) => (prev + 1) % officePhotos.length);
  const prevPhoto = () => setCurrentPhotoIndex((prev) => (prev - 1 + officePhotos.length) % officePhotos.length);
  
  const contactInfo = [
    {
      icon: MapPin,
      title: language === 'ar' ? 'العنوان' : 'Address',
      details: [
        language === 'ar' 
          ? 'شارع الكورنيش، بجانب فندق ريلاكس'
          : 'Corniche Street, Next to Relax Hotel',
        language === 'ar'
          ? 'خور ماكسر، عدن، اليمن'
          : 'Khor Maksar, Aden, Yemen',
      ],
    },
    {
      icon: Phone,
      title: language === 'ar' ? 'الهاتف' : 'Phone',
      details: [
        '+967 2 123 4567',
        '+967 777 123 456',
        '+967 733 987 654',
      ],
    },
    {
      icon: Mail,
      title: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      details: [
        'info@greenists-events.com',
        'sales@greenists-events.com',
      ],
    },
    {
      icon: Clock,
      title: language === 'ar' ? 'ساعات العمل' : 'Working Hours',
      details: [
        language === 'ar' 
          ? 'السبت - الخميس: 8:00 ص - 6:00 م'
          : 'Sat - Thu: 8:00 AM - 6:00 PM',
        language === 'ar'
          ? 'الجمعة: مغلق'
          : 'Friday: Closed',
      ],
    },
  ];

  // Google Maps embed URL for Aden, Yemen (Khor Maksar area)
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.234567890123!2d45.0123456!3d12.7890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ3JzIwLjQiTiA0NcKwMDAnNDQuNCJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2D7A4A] to-[#1a5c35] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
              {language === 'ar' 
                ? 'نحن هنا لمساعدتك في تحقيق رؤيتك'
                : 'We are here to help you achieve your vision'}
            </p>
            
            {/* Live Weather Widget */}
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="flex items-center gap-2">
                {weather.condition === 'Sunny' ? (
                  <Sun className="w-6 h-6 text-yellow-300" />
                ) : (
                  <Cloud className="w-6 h-6 text-white/80" />
                )}
                <span className="text-lg font-semibold">{weather.temp}°C</span>
              </div>
              <div className="w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <Thermometer className="w-5 h-5" />
                <span className="text-sm">{weather.humidity}% {language === 'ar' ? 'رطوبة' : 'humidity'}</span>
              </div>
              <div className="w-px h-6 bg-white/30" />
              <span className="text-sm">
                {language === 'ar' ? 'عدن، اليمن' : 'Aden, Yemen'}
              </span>
            </div>
          </div>
        </section>
        
        {/* Contact Info Cards */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-[#2D7A4A]/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-[#2D7A4A]" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, dIndex) => (
                        <p key={dIndex} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Office Photos Gallery */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="bg-[#2D7A4A]/10 text-[#2D7A4A] mb-4">
                <Image className="w-4 h-4 mr-1" />
                {language === 'ar' ? 'معرض المكتب' : 'Office Gallery'}
              </Badge>
              <h2 className="text-3xl font-bold text-gray-800">
                {language === 'ar' ? 'مكتبنا في عدن' : 'Our Office in Aden'}
              </h2>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={officePhotos[currentPhotoIndex].src}
                  alt={officePhotos[currentPhotoIndex].caption[language]}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-lg font-semibold">
                    {officePhotos[currentPhotoIndex].caption[language]}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    {officePhotos.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentPhotoIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentPhotoIndex ? 'bg-white w-6' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button 
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
            
            {/* Thumbnail Strip */}
            <div className="flex justify-center gap-4 mt-6">
              {officePhotos.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPhotoIndex(idx)}
                  className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentPhotoIndex ? 'border-[#2D7A4A] scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={photo.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form & Map */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-[#2D7A4A]" />
                      {language === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                    </CardTitle>
                    <CardDescription>
                      {language === 'ar'
                        ? 'املأ النموذج أدناه وسنتواصل معك في أقرب وقت'
                        : 'Fill out the form below and we will get back to you soon'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">{t('contact.form.name')}</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">{t('contact.form.email')}</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">{language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">{language === 'ar' ? 'الموضوع' : 'Subject'}</Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">{t('contact.form.message')}</Label>
                        <Textarea
                          id="message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-[#2D7A4A] hover:bg-[#236339]"
                        disabled={loading}
                      >
                        {loading ? (
                          language === 'ar' ? 'جاري الإرسال...' : 'Sending...'
                        ) : (
                          <>
                            <Send className="w-4 h-4 me-2" />
                            {t('contact.form.submit')}
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Map & Office Info */}
              <div className="space-y-6">
                {/* Interactive Map */}
                <Card className="overflow-hidden">
                  <div className="relative">
                    <iframe
                      src={mapEmbedUrl}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Greenists Office Location"
                      className="w-full"
                    />
                    <div className="absolute top-4 right-4">
                      <Button 
                        size="sm" 
                        className="bg-white text-gray-800 hover:bg-gray-100 shadow-lg"
                        onClick={() => window.open('https://www.google.com/maps/search/Khor+Maksar+Aden+Yemen', '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {language === 'ar' ? 'فتح في خرائط جوجل' : 'Open in Google Maps'}
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600">
                        <NavIcon className="w-4 h-4" />
                        <span className="text-sm">
                          {language === 'ar' ? 'احصل على الاتجاهات' : 'Get Directions'}
                        </span>
                      </div>
                      <Badge variant="outline" className="text-[#2D7A4A] border-[#2D7A4A]">
                        12.7890° N, 45.0123° E
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Office Details */}
                <Card className="bg-gradient-to-br from-[#2D7A4A] to-[#1a5c35] text-white">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Building className="w-8 h-8" />
                      <div>
                        <h3 className="font-bold text-lg">
                          {language === 'ar' ? 'المكتب الرئيسي' : 'Head Office'}
                        </h3>
                        <p className="text-white/80 text-sm">Greenists Events</p>
                      </div>
                    </div>
                    <div className="space-y-3 text-white/90">
                      <p className="flex items-start gap-2">
                        <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>
                          {language === 'ar' 
                            ? 'شارع الكورنيش، بجانب فندق ريلاكس، خور ماكسر، عدن، اليمن'
                            : 'Corniche Street, Next to Relax Hotel, Khor Maksar, Aden, Yemen'}
                        </span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Globe className="w-5 h-5 flex-shrink-0" />
                        <span>www.greenists-events.com</span>
                      </p>
                    </div>
                    
                    {/* Social Media Links */}
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <p className="text-sm text-white/70 mb-3">
                        {language === 'ar' ? 'تابعنا على' : 'Follow us on'}
                      </p>
                      <div className="flex gap-3">
                        {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                          <Button 
                            key={social}
                            size="sm" 
                            variant="ghost" 
                            className="bg-white/10 hover:bg-white/20 text-white"
                          >
                            {social.charAt(0)}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Quick Contact */}
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-auto py-4 flex flex-col items-center gap-2 border-[#2D7A4A] text-[#2D7A4A] hover:bg-[#2D7A4A] hover:text-white"
                    onClick={() => window.open('tel:+9672123456')}
                  >
                    <Phone className="w-6 h-6" />
                    <span>{language === 'ar' ? 'اتصل الآن' : 'Call Now'}</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-auto py-4 flex flex-col items-center gap-2 border-[#2D7A4A] text-[#2D7A4A] hover:bg-[#2D7A4A] hover:text-white"
                    onClick={() => window.open('mailto:info@greenists-events.com')}
                  >
                    <Mail className="w-6 h-6" />
                    <span>{language === 'ar' ? 'راسلنا' : 'Email Us'}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
