import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { 
  Camera, 
  MapPin,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  titleAr: string;
  location: string;
  locationAr: string;
  category: string;
  description: string;
  descriptionAr: string;
}

export default function Gallery() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  
  const categories = [
    { id: 'all', labelEn: 'All', labelAr: 'الكل' },
    { id: 'yemen', labelEn: 'Yemen Heritage', labelAr: 'تراث اليمن' },
    { id: 'events', labelEn: 'Events', labelAr: 'الفعاليات' },
    { id: 'venues', labelEn: 'Venues', labelAr: 'الأماكن' },
  ];
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Aden Corniche Sunset',
      titleAr: 'غروب كورنيش عدن',
      location: 'Aden',
      locationAr: 'عدن',
      category: 'yemen',
      description: 'Beautiful sunset view from Aden Corniche',
      descriptionAr: 'منظر غروب الشمس الجميل من كورنيش عدن',
    },
    {
      id: 2,
      title: 'Sana\'a Old City',
      titleAr: 'صنعاء القديمة',
      location: 'Sana\'a',
      locationAr: 'صنعاء',
      category: 'yemen',
      description: 'UNESCO World Heritage Site - Historic old city of Sana\'a',
      descriptionAr: 'موقع التراث العالمي لليونسكو - المدينة القديمة التاريخية في صنعاء',
    },
    {
      id: 3,
      title: 'Socotra Dragon Blood Trees',
      titleAr: 'أشجار دم الأخوين في سقطرى',
      location: 'Socotra Island',
      locationAr: 'جزيرة سقطرى',
      category: 'yemen',
      description: 'The unique Dragon Blood Trees of Socotra',
      descriptionAr: 'أشجار دم الأخوين الفريدة في سقطرى',
    },
    {
      id: 4,
      title: 'Shibam Hadramout',
      titleAr: 'شبام حضرموت',
      location: 'Hadramout',
      locationAr: 'حضرموت',
      category: 'yemen',
      description: 'The Manhattan of the Desert - Ancient mud skyscrapers',
      descriptionAr: 'مانهاتن الصحراء - ناطحات السحاب الطينية القديمة',
    },
    {
      id: 5,
      title: 'Yemeni Coffee Heritage',
      titleAr: 'تراث القهوة اليمنية',
      location: 'Mocha',
      locationAr: 'المخا',
      category: 'yemen',
      description: 'Traditional Yemeni coffee preparation',
      descriptionAr: 'تحضير القهوة اليمنية التقليدية',
    },
    {
      id: 6,
      title: 'Corporate Conference',
      titleAr: 'مؤتمر شركات',
      location: 'Aden',
      locationAr: 'عدن',
      category: 'events',
      description: 'Professional corporate conference setup',
      descriptionAr: 'إعداد مؤتمر شركات احترافي',
    },
    {
      id: 7,
      title: 'Wedding Celebration',
      titleAr: 'حفل زفاف',
      location: 'Aden',
      locationAr: 'عدن',
      category: 'events',
      description: 'Elegant wedding celebration',
      descriptionAr: 'حفل زفاف أنيق',
    },
    {
      id: 8,
      title: 'Trade Exhibition',
      titleAr: 'معرض تجاري',
      location: 'Aden',
      locationAr: 'عدن',
      category: 'events',
      description: 'Business trade exhibition',
      descriptionAr: 'معرض تجاري للأعمال',
    },
    {
      id: 9,
      title: 'Thula Village',
      titleAr: 'قرية ثلا',
      location: 'Amran',
      locationAr: 'عمران',
      category: 'yemen',
      description: 'Historic stone village of Thula',
      descriptionAr: 'قرية ثلا الحجرية التاريخية',
    },
    {
      id: 10,
      title: 'Al-Hajjarah Village',
      titleAr: 'قرية الحجرة',
      location: 'Haraz Mountains',
      locationAr: 'جبال حراز',
      category: 'yemen',
      description: 'Mountain-top village in Haraz',
      descriptionAr: 'قرية على قمة الجبل في حراز',
    },
    {
      id: 11,
      title: 'Marib Dam',
      titleAr: 'سد مأرب',
      location: 'Marib',
      locationAr: 'مأرب',
      category: 'yemen',
      description: 'Ancient engineering marvel',
      descriptionAr: 'أعجوبة هندسية قديمة',
    },
    {
      id: 12,
      title: 'Ibb Green Mountains',
      titleAr: 'جبال إب الخضراء',
      location: 'Ibb',
      locationAr: 'إب',
      category: 'yemen',
      description: 'The green paradise of Yemen',
      descriptionAr: 'الجنة الخضراء في اليمن',
    },
  ];
  
  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2D7A4A] to-[#1a5c35] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Camera className="w-12 h-12 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'ar' ? 'معرض الصور' : 'Photo Gallery'}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'استكشف جمال اليمن وفعالياتنا المميزة'
                : 'Explore the beauty of Yemen and our distinguished events'}
            </p>
          </div>
        </section>
        
        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={selectedCategory === cat.id 
                    ? 'bg-[#2D7A4A] hover:bg-[#236339]' 
                    : 'border-[#2D7A4A] text-[#2D7A4A] hover:bg-[#2D7A4A] hover:text-white'}
                >
                  {language === 'ar' ? cat.labelAr : cat.labelEn}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gallery Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <Card 
                  key={item.id} 
                  className="overflow-hidden cursor-pointer hover:shadow-xl transition-all group"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#2D7A4A]/20 to-[#2D7A4A]/40 flex items-center justify-center relative">
                    <Camera className="w-12 h-12 text-[#2D7A4A]/50" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === 'ar' ? item.titleAr : item.title}
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {language === 'ar' ? item.locationAr : item.location}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0">
            <DialogTitle className="sr-only">
              {selectedImage ? (language === 'ar' ? selectedImage.titleAr : selectedImage.title) : 'Image'}
            </DialogTitle>
            {selectedImage && (
              <div>
                <div className="aspect-video bg-gradient-to-br from-[#2D7A4A]/20 to-[#2D7A4A]/40 flex items-center justify-center">
                  <Camera className="w-20 h-20 text-[#2D7A4A]/50" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {language === 'ar' ? selectedImage.titleAr : selectedImage.title}
                  </h2>
                  <p className="text-[#2D7A4A] flex items-center gap-1 mb-3">
                    <MapPin className="w-4 h-4" />
                    {language === 'ar' ? selectedImage.locationAr : selectedImage.location}
                  </p>
                  <p className="text-gray-600">
                    {language === 'ar' ? selectedImage.descriptionAr : selectedImage.description}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      
      <Footer />
    </div>
  );
}
