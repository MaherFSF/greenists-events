import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight, ShoppingBag, Sparkles, Eye } from 'lucide-react';

interface Product {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  category: string;
  image: string;
}

interface Collection {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  image: string;
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
      image: '/images/branding/greenists_corporate_event_kit(1).png',
      color: 'from-[#1e3a5f] to-[#2d5a87]',
    },
    {
      id: 'wedding',
      nameEn: 'Wedding Event Kit',
      nameAr: 'مجموعة حفلات الزفاف',
      descriptionEn: 'Elegant items for wedding celebrations',
      descriptionAr: 'عناصر أنيقة لحفلات الزفاف',
      image: '/images/branding/greenists_wedding_event_kit(1).png',
      color: 'from-[#8b5a6b] to-[#c9a0a0]',
    },
    {
      id: 'government',
      nameEn: 'Government Event Kit',
      nameAr: 'مجموعة الفعاليات الحكومية',
      descriptionEn: 'Official materials for government events',
      descriptionAr: 'مواد رسمية للفعاليات الحكومية',
      image: '/images/branding/greenists_government_event_kit(1).png',
      color: 'from-[#1a3c34] to-[#2d5a4e]',
    },
    {
      id: 'ramadan',
      nameEn: 'Ramadan & Eid Collection',
      nameAr: 'مجموعة رمضان والعيد',
      descriptionEn: 'Special items for holy month celebrations',
      descriptionAr: 'عناصر خاصة لاحتفالات الشهر الكريم',
      image: '/images/branding/greenists_ramadan_eid_collection(1).png',
      color: 'from-[#6b5b3d] to-[#8b7355]',
    },
    {
      id: 'yemen',
      nameEn: 'Yemen Cultural Collection',
      nameAr: 'مجموعة التراث اليمني',
      descriptionEn: 'Products celebrating Yemeni heritage',
      descriptionAr: 'منتجات تحتفي بالتراث اليمني',
      image: '/images/branding/greenists_yemen_cultural_collection(1).png',
      color: 'from-[#8b4513] to-[#a0522d]',
    },
    {
      id: 'luxury',
      nameEn: 'Luxury Gift Set',
      nameAr: 'مجموعة الهدايا الفاخرة',
      descriptionEn: 'Premium gifts for VIP clients',
      descriptionAr: 'هدايا فاخرة لكبار العملاء',
      image: '/images/branding/01_executive_gift_set_luxury.png',
      color: 'from-[#4a3728] to-[#6b5344]',
    },
  ];
  
  const products: Product[] = [
    // Stationery
    { id: 'business-cards', nameEn: 'Business Cards', nameAr: 'بطاقات الأعمال', descriptionEn: 'Premium business cards with gold foil', descriptionAr: 'بطاقات أعمال فاخرة مع طباعة ذهبية', category: 'stationery', image: '/images/branding/greenists_business_cards(3).png' },
    { id: 'letterhead', nameEn: 'Letterhead', nameAr: 'ورق رسمي', descriptionEn: 'Professional letterhead design', descriptionAr: 'تصميم ورق رسمي احترافي', category: 'stationery', image: '/images/branding/greenists_letterhead(3).png' },
    { id: 'notepad', nameEn: 'Notepad A5', nameAr: 'دفتر ملاحظات A5', descriptionEn: 'Branded notepads for meetings', descriptionAr: 'دفاتر ملاحظات للاجتماعات', category: 'stationery', image: '/images/branding/print_ready_notepad_A5(1).png' },
    { id: 'envelope', nameEn: 'Envelopes', nameAr: 'مظاريف', descriptionEn: 'Professional envelopes DL & C4', descriptionAr: 'مظاريف احترافية DL و C4', category: 'stationery', image: '/images/branding/print_ready_envelope_DL(1).png' },
    { id: 'folder', nameEn: 'Presentation Folder', nameAr: 'مجلد العروض', descriptionEn: 'A4 presentation folders', descriptionAr: 'مجلدات عروض A4', category: 'stationery', image: '/images/branding/greenists_presentation_folder(2).PNG' },
    
    // Apparel
    { id: 'tshirt', nameEn: 'Staff T-Shirt', nameAr: 'قميص الموظفين', descriptionEn: 'Branded staff uniforms', descriptionAr: 'زي موحد للموظفين', category: 'apparel', image: '/images/branding/greenists_tshirt_mockup(1).png' },
    { id: 'polo', nameEn: 'Polo Shirt', nameAr: 'قميص بولو', descriptionEn: 'Premium polo for management', descriptionAr: 'بولو فاخر للإدارة', category: 'apparel', image: '/images/branding/greenists_polo_shirt(1).png' },
    { id: 'cap', nameEn: 'Baseball Cap', nameAr: 'قبعة', descriptionEn: 'Branded caps for events', descriptionAr: 'قبعات للفعاليات', category: 'apparel', image: '/images/branding/greenists_baseball_cap(1).png' },
    
    // Bags
    { id: 'tote', nameEn: 'Tote Bag', nameAr: 'حقيبة تسوق', descriptionEn: 'Eco-friendly tote bags', descriptionAr: 'حقائب صديقة للبيئة', category: 'bags', image: '/images/branding/greenists_tote_bag(1).png' },
    { id: 'laptop-bag', nameEn: 'Laptop Bag', nameAr: 'حقيبة لابتوب', descriptionEn: 'Professional laptop bags', descriptionAr: 'حقائب لابتوب احترافية', category: 'bags', image: '/images/branding/greenists_laptop_bag(1).png' },
    { id: 'gift-bag', nameEn: 'Gift Bag', nameAr: 'حقيبة هدايا', descriptionEn: 'Premium gift packaging', descriptionAr: 'تغليف هدايا فاخر', category: 'bags', image: '/images/branding/greenists_gift_bag_collection(1).png' },
    
    // Promotional
    { id: 'rollup', nameEn: 'Roll-Up Banner', nameAr: 'لافتة قابلة للطي', descriptionEn: 'Portable display banners', descriptionAr: 'لافتات عرض محمولة', category: 'promotional', image: '/images/branding/greenists_rollup_banner_stand(1).png' },
    { id: 'billboard', nameEn: 'Billboard Design', nameAr: 'تصميم لوحة إعلانية', descriptionEn: 'Large format advertising', descriptionAr: 'إعلانات كبيرة الحجم', category: 'promotional', image: '/images/branding/greenists_billboard_design(1).png' },
    { id: 'stickers', nameEn: 'Stickers', nameAr: 'ملصقات', descriptionEn: 'Various branded stickers', descriptionAr: 'ملصقات متنوعة', category: 'promotional', image: '/images/branding/greenists_stickers_updated.png' },
    { id: 'table-tent', nameEn: 'Table Tent Card', nameAr: 'بطاقة طاولة', descriptionEn: 'Event table displays', descriptionAr: 'عروض طاولات الفعاليات', category: 'promotional', image: '/images/branding/greenists_table_tent_card(1).png' },
    
    // Accessories
    { id: 'pen', nameEn: 'Executive Pen', nameAr: 'قلم تنفيذي', descriptionEn: 'Premium branded pens', descriptionAr: 'أقلام فاخرة', category: 'accessories', image: '/images/branding/greenists_luxury_pen_collection(1).png' },
    { id: 'wallet', nameEn: 'Luxury Wallet', nameAr: 'محفظة فاخرة', descriptionEn: 'Premium leather wallets', descriptionAr: 'محافظ جلدية فاخرة', category: 'accessories', image: '/images/branding/greenists_luxury_wallet_collection(1).png' },
    { id: 'usb', nameEn: 'USB Drive', nameAr: 'فلاش ميموري', descriptionEn: 'Branded USB drives', descriptionAr: 'فلاش ميموري مع الشعار', category: 'accessories', image: '/images/branding/greenists_usb_drive_collection(1).png' },
    { id: 'tech', nameEn: 'Tech Accessories', nameAr: 'إكسسوارات تقنية', descriptionEn: 'Phone stands, cables, etc.', descriptionAr: 'حوامل هواتف، كابلات، إلخ', category: 'accessories', image: '/images/branding/greenists_tech_accessories(1).png' },
    { id: 'desk-set', nameEn: 'Executive Gift Set', nameAr: 'مجموعة هدايا تنفيذية', descriptionEn: 'Complete executive set', descriptionAr: 'مجموعة تنفيذية كاملة', category: 'accessories', image: '/images/branding/01_executive_gift_set_luxury.png' },
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
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      <Navigation />
      
      <main className="flex-1">
        {/* Premium Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1a5c36] via-[#2D7A4A] to-[#1a5c36] text-white py-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm">{language === 'ar' ? 'منتجات حصرية' : 'Exclusive Products'}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {language === 'ar' ? 'منتجاتنا ومجموعاتنا' : 'Our Products & Collections'}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              {language === 'ar' 
                ? 'اكتشف مجموعتنا الحصرية من المنتجات المصممة بعناية لتعكس هويتك وتميز فعالياتك'
                : 'Discover our exclusive collection of carefully designed products that reflect your identity and distinguish your events'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#D4AF37] hover:bg-[#c9a432] text-white px-8 py-6 text-lg rounded-full">
                <ShoppingBag className="w-5 h-5 mr-2" />
                {language === 'ar' ? 'تصفح المنتجات' : 'Browse Products'}
              </Button>
            </div>
          </div>
        </section>
        
        {/* Collections Section - Premium Cards with Real Photos */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">
                {language === 'ar' ? 'مجموعات مميزة' : 'Featured Collections'}
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                {language === 'ar' ? 'مجموعات الفعاليات' : 'Event Collections'}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {language === 'ar' 
                  ? 'مجموعات متكاملة مصممة خصيصاً لكل نوع من الفعاليات'
                  : 'Complete collections specially designed for each type of event'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <Card key={collection.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer border-0 bg-white rounded-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={collection.image} 
                      alt={language === 'ar' ? collection.nameAr : collection.nameEn}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.classList.add('bg-gradient-to-br', collection.color);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {language === 'ar' ? collection.nameAr : collection.nameEn}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {language === 'ar' ? collection.descriptionAr : collection.descriptionEn}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Products Section - Premium Grid with Real Photos */}
        <section className="py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">
                {language === 'ar' ? 'تسوق الآن' : 'Shop Now'}
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                {language === 'ar' ? 'جميع المنتجات' : 'All Products'}
              </h2>
            </div>
            
            {/* Category Filter - Premium Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === cat.id 
                      ? 'bg-[#2D7A4A] text-white shadow-lg shadow-[#2D7A4A]/30' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {language === 'ar' ? cat.labelAr : cat.labelEn}
                </button>
              ))}
            </div>
            
            {/* Products Grid - Premium Cards with Real Photos */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group bg-white border-0 rounded-xl"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="aspect-square bg-gray-100 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={language === 'ar' ? product.nameAr : product.nameEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/branding/official-logo.png';
                        target.className = 'w-full h-full object-contain p-8 opacity-30';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
                        <Eye className="w-5 h-5 text-[#2D7A4A]" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">
                      {language === 'ar' ? product.nameAr : product.nameEn}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {language === 'ar' ? product.descriptionAr : product.descriptionEn}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#1a5c36] to-[#2D7A4A] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'هل تحتاج منتجات مخصصة؟' : 'Need Custom Products?'}
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'نقدم خدمات تصميم وإنتاج مخصصة لتلبية احتياجاتك الخاصة'
                : 'We offer custom design and production services to meet your specific needs'}
            </p>
            <Button className="bg-[#D4AF37] hover:bg-[#c9a432] text-white px-8 py-6 text-lg rounded-full">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          <DialogTitle className="sr-only">
            {selectedProduct && (language === 'ar' ? selectedProduct.nameAr : selectedProduct.nameEn)}
          </DialogTitle>
          {selectedProduct && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src={selectedProduct.image} 
                  alt={language === 'ar' ? selectedProduct.nameAr : selectedProduct.nameEn}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider mb-2">
                  {categories.find(c => c.id === selectedProduct.category)?.[language === 'ar' ? 'labelAr' : 'labelEn']}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {language === 'ar' ? selectedProduct.nameAr : selectedProduct.nameEn}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === 'ar' ? selectedProduct.descriptionAr : selectedProduct.descriptionEn}
                </p>
                <Button className="bg-[#2D7A4A] hover:bg-[#236339] text-white w-full">
                  {language === 'ar' ? 'طلب هذا المنتج' : 'Request This Product'}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
