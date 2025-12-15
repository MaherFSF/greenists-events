import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Product {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  isEcoFriendly: boolean;
}

const products: Product[] = [
  // Stationery
  {
    id: 'pen-luxury',
    name: { en: 'Greenists Luxury Pen', ar: 'قلم جرينستس الفاخر' },
    description: { en: 'Premium metal pen with gold accents and Greenists branding', ar: 'قلم معدني فاخر بلمسات ذهبية وشعار جرينستس' },
    price: 15,
    image: '/images/greenists_luxury_pen_collection(2).png',
    category: 'stationery',
    inStock: true,
    isEcoFriendly: true
  },
  {
    id: 'notebook',
    name: { en: 'Eco Notebook A5', ar: 'دفتر صديق للبيئة A5' },
    description: { en: 'Recycled paper notebook with Greenists cover', ar: 'دفتر ورق معاد تدويره بغلاف جرينستس' },
    price: 8,
    image: '/images/print_ready_notepad_A5(1).png',
    category: 'stationery',
    inStock: true,
    isEcoFriendly: true
  },
  {
    id: 'folder',
    name: { en: 'Presentation Folder', ar: 'ملف العروض التقديمية' },
    description: { en: 'Professional folder with document pockets', ar: 'ملف احترافي مع جيوب للمستندات' },
    price: 12,
    image: '/images/greenists_presentation_folder(2).PNG',
    category: 'stationery',
    inStock: true,
    isEcoFriendly: true
  },
  // Apparel
  {
    id: 'tshirt-green',
    name: { en: 'Greenists T-Shirt (Green)', ar: 'تيشيرت جرينستس (أخضر)' },
    description: { en: 'Organic cotton t-shirt with embroidered logo', ar: 'تيشيرت قطن عضوي مع شعار مطرز' },
    price: 25,
    image: '/images/greenists_tshirt_mockup(3).png',
    category: 'apparel',
    inStock: true,
    isEcoFriendly: true
  },
  {
    id: 'cap',
    name: { en: 'Greenists Baseball Cap', ar: 'قبعة جرينستس' },
    description: { en: 'Adjustable cap with embroidered logo', ar: 'قبعة قابلة للتعديل مع شعار مطرز' },
    price: 18,
    image: '/images/greenists_baseball_cap(3).png',
    category: 'apparel',
    inStock: true,
    isEcoFriendly: true
  },
  {
    id: 'tote-bag',
    name: { en: 'Eco Tote Bag', ar: 'حقيبة توت صديقة للبيئة' },
    description: { en: 'Reusable canvas tote bag with Greenists print', ar: 'حقيبة قماشية قابلة لإعادة الاستخدام' },
    price: 15,
    image: '/images/greenists_tote_bag(3).png',
    category: 'apparel',
    inStock: true,
    isEcoFriendly: true
  },
  // Gift Sets
  {
    id: 'executive-gift',
    name: { en: 'Executive Gift Set', ar: 'طقم الهدايا التنفيذي' },
    description: { en: 'Premium gift box with pen, wallet, and card holder', ar: 'صندوق هدايا فاخر مع قلم ومحفظة وحامل بطاقات' },
    price: 85,
    image: '/images/01_executive_gift_set_luxury.png',
    category: 'gifts',
    inStock: true,
    isEcoFriendly: true
  },
  {
    id: 'wallet',
    name: { en: 'Luxury Leather Wallet', ar: 'محفظة جلد فاخرة' },
    description: { en: 'Genuine leather wallet with Greenists embossing', ar: 'محفظة جلد أصلي مع نقش جرينستس' },
    price: 45,
    image: '/images/greenists_luxury_wallet_collection(3).png',
    category: 'gifts',
    inStock: true,
    isEcoFriendly: false
  },
  // Event Supplies
  {
    id: 'backdrop',
    name: { en: 'Event Backdrop Banner', ar: 'خلفية الفعاليات' },
    description: { en: 'Reusable backdrop with modular branding panels', ar: 'خلفية قابلة لإعادة الاستخدام مع لوحات قابلة للتخصيص' },
    price: 150,
    image: '/images/greenists_event_backdrop_banner(1).png',
    category: 'events',
    inStock: true,
    isEcoFriendly: true
  },
  {
    id: 'rollup',
    name: { en: 'Roll-up Banner Stand', ar: 'ستاند رول أب' },
    description: { en: 'Portable roll-up banner with carrying case', ar: 'بانر رول أب محمول مع حقيبة حمل' },
    price: 75,
    image: '/images/greenists_rollup_banner_stand(3).png',
    category: 'events',
    inStock: true,
    isEcoFriendly: true
  },
  // Cultural
  {
    id: 'hospitality-set',
    name: { en: 'Yemeni Hospitality Set', ar: 'طقم الضيافة اليمنية' },
    description: { en: 'Traditional dallah, cups, and dates presentation set', ar: 'طقم دلة تقليدية وفناجين وتمر' },
    price: 120,
    image: '/images/greenists_yemeni_hospitality_collection(5).png',
    category: 'cultural',
    inStock: true,
    isEcoFriendly: true
  },
  {
    id: 'ramadan-collection',
    name: { en: 'Ramadan Gift Collection', ar: 'مجموعة هدايا رمضان' },
    description: { en: 'Special Ramadan-themed gift set with dates and sweets', ar: 'طقم هدايا رمضاني خاص مع تمر وحلويات' },
    price: 65,
    image: '/images/greenists_ramadan_eid_collection(3).png',
    category: 'cultural',
    inStock: true,
    isEcoFriendly: true
  },
  // Calendars
  {
    id: 'calendar-2026',
    name: { en: 'Desk Calendar 2026', ar: 'تقويم مكتبي 2026' },
    description: { en: 'Desktop calendar featuring Yemen landscapes', ar: 'تقويم مكتبي يعرض مناظر اليمن الطبيعية' },
    price: 12,
    image: '/images/greenists_calendar_2026_april(2).png',
    category: 'stationery',
    inStock: true,
    isEcoFriendly: true
  },
  // Car Accessories
  {
    id: 'car-sticker',
    name: { en: 'Car Door Decal', ar: 'ملصق باب السيارة' },
    description: { en: 'Removable vinyl decal for vehicle branding', ar: 'ملصق فينيل قابل للإزالة لتمييز المركبات' },
    price: 25,
    image: '/images/greenists_car_door_decal(2).png',
    category: 'events',
    inStock: true,
    isEcoFriendly: true
  }
];

const categories = [
  { id: 'all', name: { en: 'All Products', ar: 'جميع المنتجات' } },
  { id: 'stationery', name: { en: 'Stationery', ar: 'قرطاسية' } },
  { id: 'apparel', name: { en: 'Apparel', ar: 'ملابس' } },
  { id: 'gifts', name: { en: 'Gift Sets', ar: 'أطقم الهدايا' } },
  { id: 'events', name: { en: 'Event Supplies', ar: 'مستلزمات الفعاليات' } },
  { id: 'cultural', name: { en: 'Yemeni Cultural', ar: 'تراث يمني' } }
];

export default function Store() {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<{id: string; quantity: number}[]>([]);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (productId: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item => 
          item.id === productId ? {...item, quantity: item.quantity + 1} : item
        );
      }
      return [...prev, { id: productId, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const product = products.find(p => p.id === item.id);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src="/images/greenists-store.png" 
          alt="Greenists Store"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="inline-block bg-[#D4AF37] text-black px-6 py-2 rounded-full text-sm font-bold mb-4">
              {isRTL ? '🏪 قريباً - يونيو 2026' : '🏪 COMING JUNE 2026'}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {isRTL ? 'متجر جرينستس' : 'Greenists Store'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              {isRTL 
                ? 'مستلزمات الفعاليات والهدايا الصديقة للبيئة - من عدن إلى العالم'
                : 'Eco-friendly event supplies and gifts - From Aden to the World'}
            </p>
            <p className="text-lg text-[#D4AF37] mt-4">
              📍 {isRTL ? 'خور ماكسر، عدن' : 'Khor Maksar, Aden'}
            </p>
          </div>
        </div>
      </section>

      {/* Cart Button */}
      <button
        onClick={() => setShowCart(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#2D7A4A] text-white p-4 rounded-full shadow-lg hover:bg-[#1a5a32] transition-all"
      >
        🛒 
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-black w-6 h-6 rounded-full text-sm font-bold flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
      </button>

      {/* Categories */}
      <section className="py-8 bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#2D7A4A] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isRTL ? cat.name.ar : cat.name.en}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={isRTL ? product.name.ar : product.name.en}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {product.isEcoFriendly && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      🌿 {isRTL ? 'صديق للبيئة' : 'Eco-Friendly'}
                    </span>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-bold">{isRTL ? 'نفذت الكمية' : 'Out of Stock'}</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    {isRTL ? product.name.ar : product.name.en}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {isRTL ? product.description.ar : product.description.en}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-[#2D7A4A]">${product.price}</span>
                      <span className="text-sm text-gray-500 block">
                        {(product.price * 1700).toLocaleString()} {isRTL ? 'ر.ي' : 'YER'}
                      </span>
                    </div>
                    <button
                      onClick={() => addToCart(product.id)}
                      disabled={!product.inStock}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        product.inStock
                          ? 'bg-[#D4AF37] text-black hover:bg-[#c4a030]'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {isRTL ? 'أضف للسلة' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Features */}
      <section className="py-16 bg-[#2D7A4A] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {isRTL ? 'لماذا تتسوق من جرينستس؟' : 'Why Shop with Greenists?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '🌿', title: { en: 'Eco-Friendly', ar: 'صديق للبيئة' }, desc: { en: 'Sustainable materials', ar: 'مواد مستدامة' } },
              { icon: '🇾🇪', title: { en: 'Made in Yemen', ar: 'صنع في اليمن' }, desc: { en: 'Supporting local', ar: 'دعم المحلي' } },
              { icon: '🚚', title: { en: 'Free Delivery', ar: 'توصيل مجاني' }, desc: { en: 'Orders over $50', ar: 'للطلبات فوق 50$' } },
              { icon: '💯', title: { en: 'Quality Guarantee', ar: 'ضمان الجودة' }, desc: { en: '30-day returns', ar: 'إرجاع خلال 30 يوم' } }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{isRTL ? feature.title.ar : feature.title.en}</h3>
                <p className="text-green-200">{isRTL ? feature.desc.ar : feature.desc.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {isRTL ? '🛒 سلة التسوق' : '🛒 Shopping Cart'}
              </h2>
              <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                ×
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[50vh]">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-8">
                  {isRTL ? 'السلة فارغة' : 'Your cart is empty'}
                </p>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => {
                    const product = products.find(p => p.id === item.id);
                    if (!product) return null;
                    return (
                      <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                        <img src={product.image} alt="" className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <h4 className="font-medium">{isRTL ? product.name.ar : product.name.en}</h4>
                          <p className="text-sm text-gray-500">${product.price} × {item.quantity}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          🗑️
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">{isRTL ? 'المجموع:' : 'Total:'}</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-[#2D7A4A]">${getCartTotal()}</span>
                    <span className="block text-sm text-gray-500">
                      {(getCartTotal() * 1700).toLocaleString()} {isRTL ? 'ر.ي' : 'YER'}
                    </span>
                  </div>
                </div>
                <button className="w-full bg-[#D4AF37] text-black py-3 rounded-lg font-bold hover:bg-[#c4a030] transition-colors">
                  {isRTL ? 'إتمام الشراء' : 'Checkout'}
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  {isRTL ? '📞 للطلبات الكبيرة: 918 673 773 967+' : '📞 For bulk orders: +967 773 673 918'}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isRTL ? 'طلبات الجملة والشركات' : 'Bulk & Corporate Orders'}
          </h2>
          <p className="text-gray-600 mb-8">
            {isRTL 
              ? 'نقدم أسعار خاصة للطلبات الكبيرة وتخصيص المنتجات بشعار شركتك'
              : 'Special pricing for bulk orders and custom branding with your company logo'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+967773673918"
              className="inline-flex items-center justify-center gap-2 bg-[#2D7A4A] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1a5a32] transition-colors"
            >
              📞 +967 773 673 918
            </a>
            <a 
              href="mailto:info@greenists-events.com"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-bold hover:bg-[#c4a030] transition-colors"
            >
              ✉️ info@greenists-events.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
