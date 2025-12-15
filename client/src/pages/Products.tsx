import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { 
  Package, 
  Gift, 
  Briefcase, 
  Heart, 
  Building2,
  GraduationCap,
  Star,
  ShoppingBag,
  Shirt,
  PenTool,
  Calendar,
  Image,
  FileText,
  Coffee,
  Sparkles
} from 'lucide-react';

interface Product {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  category: string;
  image?: string;
  icon: React.ElementType;
}

interface Collection {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: React.ElementType;
  color: string;
}

export default function Products() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const collections: Collection[] = [
    {
      id: 'corporate',
      nameEn: 'Corporate Event Kit',
      nameAr: 'مجموعة فعاليات الشركات',
      descriptionEn: 'Professional materials for business events',
      descriptionAr: 'مواد احترافية لفعاليات الأعمال',
      icon: Building2,
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'wedding',
      nameEn: 'Wedding Event Kit',
      nameAr: 'مجموعة حفلات الزفاف',
      descriptionEn: 'Elegant items for wedding celebrations',
      descriptionAr: 'عناصر أنيقة لحفلات الزفاف',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
    },
    {
      id: 'government',
      nameEn: 'Government Event Kit',
      nameAr: 'مجموعة الفعاليات الحكومية',
      descriptionEn: 'Official materials for government events',
      descriptionAr: 'مواد رسمية للفعاليات الحكومية',
      icon: Briefcase,
      color: 'from-amber-500 to-orange-500',
    },
    {
      id: 'ramadan',
      nameEn: 'Ramadan & Eid Collection',
      nameAr: 'مجموعة رمضان والعيد',
      descriptionEn: 'Special items for holy month celebrations',
      descriptionAr: 'عناصر خاصة لاحتفالات الشهر الكريم',
      icon: Star,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      id: 'yemen',
      nameEn: 'Yemen Cultural Collection',
      nameAr: 'مجموعة التراث اليمني',
      descriptionEn: 'Products celebrating Yemeni heritage',
      descriptionAr: 'منتجات تحتفي بالتراث اليمني',
      icon: Coffee,
      color: 'from-amber-600 to-yellow-600',
    },
    {
      id: 'luxury',
      nameEn: 'Luxury Gift Set',
      nameAr: 'مجموعة الهدايا الفاخرة',
      descriptionEn: 'Premium gifts for VIP clients',
      descriptionAr: 'هدايا فاخرة لكبار العملاء',
      icon: Gift,
      color: 'from-purple-500 to-violet-500',
    },
  ];
  
  const products: Product[] = [
    // Stationery
    { id: 'business-cards', nameEn: 'Business Cards', nameAr: 'بطاقات الأعمال', descriptionEn: 'Premium business cards with gold foil', descriptionAr: 'بطاقات أعمال فاخرة مع طباعة ذهبية', category: 'stationery', icon: FileText, image: '/images/greenists_business_cards(3).png' },
    { id: 'letterhead', nameEn: 'Letterhead', nameAr: 'ورق رسمي', descriptionEn: 'Professional letterhead design', descriptionAr: 'تصميم ورق رسمي احترافي', category: 'stationery', icon: FileText, image: '/images/greenists_letterhead(3).png' },
    { id: 'notepad', nameEn: 'Notepad A5', nameAr: 'دفتر ملاحظات A5', descriptionEn: 'Branded notepads for meetings', descriptionAr: 'دفاتر ملاحظات للاجتماعات', category: 'stationery', icon: PenTool, image: '/images/print_ready_notepad_A5(1).png' },
    { id: 'envelope', nameEn: 'Envelopes', nameAr: 'مظاريف', descriptionEn: 'Professional envelopes DL & C4', descriptionAr: 'مظاريف احترافية DL و C4', category: 'stationery', icon: FileText, image: '/images/greenists_envelope(3).png' },
    { id: 'folder', nameEn: 'Presentation Folder', nameAr: 'مجلد العروض', descriptionEn: 'A4 presentation folders', descriptionAr: 'مجلدات عروض A4', category: 'stationery', icon: FileText, image: '/images/greenists_presentation_folder(2).PNG' },
    
    // Apparel
    { id: 'tshirt', nameEn: 'Staff T-Shirt', nameAr: 'قميص الموظفين', descriptionEn: 'Branded staff uniforms', descriptionAr: 'زي موحد للموظفين', category: 'apparel', icon: Shirt, image: '/images/greenists_tshirt_mockup(3).png' },
    { id: 'polo', nameEn: 'Polo Shirt', nameAr: 'قميص بولو', descriptionEn: 'Premium polo for management', descriptionAr: 'بولو فاخر للإدارة', category: 'apparel', icon: Shirt, image: '/images/products/polo-shirt-yemen.png' },
    { id: 'cap', nameEn: 'Baseball Cap', nameAr: 'قبعة', descriptionEn: 'Branded caps for events', descriptionAr: 'قبعات للفعاليات', category: 'apparel', icon: Shirt, image: '/images/greenists_baseball_cap(3).png' },
    { id: 'vest', nameEn: 'Event Vest', nameAr: 'سترة الفعاليات', descriptionEn: 'Lightweight vests for staff', descriptionAr: 'سترات خفيفة للموظفين', category: 'apparel', icon: Shirt, image: '/images/greenists_vest(3).png' },
    
    // Bags
    { id: 'tote', nameEn: 'Tote Bag', nameAr: 'حقيبة تسوق', descriptionEn: 'Eco-friendly tote bags', descriptionAr: 'حقائب صديقة للبيئة', category: 'bags', icon: ShoppingBag, image: '/images/greenists_tote_bag(3).png' },
    { id: 'formal-bag', nameEn: 'Formal Bag', nameAr: 'حقيبة رسمية', descriptionEn: 'Professional document bags', descriptionAr: 'حقائب مستندات احترافية', category: 'bags', icon: Briefcase, image: '/images/products/briefcase-yemen.png' },
    { id: 'gift-bag', nameEn: 'Gift Bag', nameAr: 'حقيبة هدايا', descriptionEn: 'Premium gift packaging', descriptionAr: 'تغليف هدايا فاخر', category: 'bags', icon: Gift, image: '/images/products/gift-box-yemen.png' },
    
    // Promotional
    { id: 'calendar', nameEn: 'Desk Calendar', nameAr: 'تقويم مكتبي', descriptionEn: '2026 desk calendar', descriptionAr: 'تقويم مكتبي 2026', category: 'promotional', icon: Calendar },
    { id: 'wall-photos', nameEn: 'Framed Wall Photos', nameAr: 'صور جدارية مؤطرة', descriptionEn: 'Yemen heritage photos', descriptionAr: 'صور التراث اليمني', category: 'promotional', icon: Image },
    { id: 'rollup', nameEn: 'Roll-Up Banner', nameAr: 'لافتة قابلة للطي', descriptionEn: 'Portable display banners', descriptionAr: 'لافتات عرض محمولة', category: 'promotional', icon: Image },
    { id: 'stickers', nameEn: 'Stickers', nameAr: 'ملصقات', descriptionEn: 'Various branded stickers', descriptionAr: 'ملصقات متنوعة', category: 'promotional', icon: Sparkles },
    { id: 'car-sticker', nameEn: 'Car Sticker', nameAr: 'ملصق سيارة', descriptionEn: 'Vehicle branding stickers', descriptionAr: 'ملصقات العلامة التجارية للسيارات', category: 'promotional', icon: Sparkles },
    
    // Accessories
    { id: 'pen', nameEn: 'Executive Pen', nameAr: 'قلم تنفيذي', descriptionEn: 'Premium branded pens', descriptionAr: 'أقلام فاخرة', category: 'accessories', icon: PenTool, image: '/images/greenists_luxury_pen_collection(2).png' },
    { id: 'wallet', nameEn: 'Luxury Wallet', nameAr: 'محفظة فاخرة', descriptionEn: 'Premium leather wallets', descriptionAr: 'محافظ جلدية فاخرة', category: 'accessories', icon: Gift, image: '/images/greenists_luxury_wallet_collection(3).png' },
    { id: 'desk-set', nameEn: 'Desk Accessories', nameAr: 'إكسسوارات مكتبية', descriptionEn: 'Complete desk set', descriptionAr: 'مجموعة مكتبية كاملة', category: 'accessories', icon: PenTool, image: '/images/01_executive_gift_set_luxury.png' },
  ];
  
  const categories = [
    { id: 'all', labelEn: 'All Products', labelAr: 'جميع المنتجات' },
    { id: 'stationery', labelEn: 'Stationery', labelAr: 'القرطاسية' },
    { id: 'apparel', labelEn: 'Apparel', labelAr: 'الملابس' },
    { id: 'bags', labelEn: 'Bags', labelAr: 'الحقائب' },
    { id: 'promotional', labelEn: 'Promotional', labelAr: 'الترويجية' },
    { id: 'accessories', labelEn: 'Accessories', labelAr: 'الإكسسوارات' },
  ];
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2D7A4A] to-[#1a4d2e] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Package className="w-12 h-12 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'ar' ? 'منتجاتنا ومجموعاتنا' : 'Our Products & Collections'}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'مجموعة شاملة من المنتجات المميزة لجميع أنواع الفعاليات'
                : 'A comprehensive collection of premium products for all event types'}
            </p>
          </div>
        </section>
        
        {/* Collections Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {language === 'ar' ? 'مجموعات الفعاليات' : 'Event Collections'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((collection) => (
                <Card key={collection.id} className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                  <div className={`h-32 bg-gradient-to-br ${collection.color} flex items-center justify-center`}>
                    <collection.icon className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {language === 'ar' ? collection.nameAr : collection.nameEn}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'ar' ? collection.descriptionAr : collection.descriptionEn}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              {language === 'ar' ? 'جميع المنتجات' : 'All Products'}
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
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
            
            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="aspect-square bg-gradient-to-br from-[#2D7A4A]/10 to-[#2D7A4A]/20 flex items-center justify-center overflow-hidden">
                    {product.image ? (
                      <img src={product.image} alt={language === 'ar' ? product.nameAr : product.nameEn} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    ) : (
                      <product.icon className="w-12 h-12 text-[#2D7A4A] group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {language === 'ar' ? product.nameAr : product.nameEn}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {language === 'ar' ? product.descriptionAr : product.descriptionEn}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Product Modal */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-lg">
            <DialogTitle>
              {selectedProduct && (language === 'ar' ? selectedProduct.nameAr : selectedProduct.nameEn)}
            </DialogTitle>
            {selectedProduct && (
              <div>
                <div className="aspect-video bg-gradient-to-br from-[#2D7A4A]/10 to-[#2D7A4A]/20 flex items-center justify-center rounded-lg mb-4 overflow-hidden">
                  {selectedProduct.image ? (
                    <img src={selectedProduct.image} alt={language === 'ar' ? selectedProduct.nameAr : selectedProduct.nameEn} className="w-full h-full object-cover" />
                  ) : (
                    <selectedProduct.icon className="w-20 h-20 text-[#2D7A4A]" />
                  )}
                </div>
                <p className="text-gray-600 mb-4">
                  {language === 'ar' ? selectedProduct.descriptionAr : selectedProduct.descriptionEn}
                </p>
                <Button className="w-full bg-[#2D7A4A] hover:bg-[#236339]">
                  {language === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
        
        {/* CTA Section */}
        <section className="py-16 bg-[#2D7A4A] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'هل تحتاج منتجات مخصصة؟' : 'Need Custom Products?'}
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'نقدم خدمات تصميم وإنتاج مخصصة لتلبية احتياجاتك الخاصة'
                : 'We offer custom design and production services to meet your specific needs'}
            </p>
            <Button size="lg" className="bg-white text-[#2D7A4A] hover:bg-white/90">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
