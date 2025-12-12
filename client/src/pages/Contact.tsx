import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock,
  Send,
  MessageSquare,
  Building
} from 'lucide-react';

export default function Contact() {
  const { language, t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
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
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'نحن هنا لمساعدتك في تحقيق رؤيتك'
                : 'We are here to help you achieve your vision'}
            </p>
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
        
        {/* Contact Form & Map */}
        <section className="py-16 bg-white">
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
                {/* Map Placeholder */}
                <Card className="overflow-hidden">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>{language === 'ar' ? 'خريطة الموقع' : 'Location Map'}</p>
                      <p className="text-sm">Aden, Yemen</p>
                    </div>
                  </div>
                </Card>
                
                {/* Office Details */}
                <Card className="bg-[#2D7A4A] text-white">
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
