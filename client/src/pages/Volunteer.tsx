import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Beach {
  id: string;
  name: { en: string; ar: string };
  location: { en: string; ar: string };
  image: string;
  targetVolunteers: number;
  currentVolunteers: number;
  date: string;
  status: 'upcoming' | 'active' | 'completed';
}

const beaches: Beach[] = [
  {
    id: 'gold-mohur',
    name: { en: 'Gold Mohur Beach', ar: 'شاطئ جولد موهور' },
    location: { en: 'Khormaksar, Aden', ar: 'خور مكسر، عدن' },
    image: '/images/04_aden_coastal_lifestyle(1).png',
    targetVolunteers: 100,
    currentVolunteers: 67,
    date: '2026-03-15',
    status: 'upcoming'
  },
  {
    id: 'elephant-bay',
    name: { en: 'Elephant Bay Beach', ar: 'شاطئ خليج الفيل' },
    location: { en: 'Little Aden', ar: 'عدن الصغرى' },
    image: '/images/03_outdoor_event_aden_scene(1).png',
    targetVolunteers: 80,
    currentVolunteers: 45,
    date: '2026-04-20',
    status: 'upcoming'
  },
  {
    id: 'lovers-bay',
    name: { en: "Lovers' Bay", ar: 'خليج العشاق' },
    location: { en: 'Crater, Aden', ar: 'كريتر، عدن' },
    image: '/images/hero-aden-skyline.png',
    targetVolunteers: 60,
    currentVolunteers: 32,
    date: '2026-05-10',
    status: 'upcoming'
  },
  {
    id: 'abyan-beach',
    name: { en: 'Abyan Beach', ar: 'شاطئ أبين' },
    location: { en: 'Abyan Governorate', ar: 'محافظة أبين' },
    image: '/images/traditional-yemeni-hospitality.png',
    targetVolunteers: 120,
    currentVolunteers: 28,
    date: '2026-06-15',
    status: 'upcoming'
  }
];

const initiatives = [
  {
    icon: '🏖️',
    title: { en: 'Beach Cleanup Days', ar: 'أيام تنظيف الشواطئ' },
    description: { en: 'Monthly beach cleanup events across Aden\'s coastline', ar: 'فعاليات شهرية لتنظيف شواطئ عدن' },
    impact: { en: '5 tons of waste collected', ar: '5 أطنان نفايات تم جمعها' }
  },
  {
    icon: '🌳',
    title: { en: 'Tree Planting', ar: 'زراعة الأشجار' },
    description: { en: 'Greening Aden\'s streets and public spaces', ar: 'تخضير شوارع عدن والأماكن العامة' },
    impact: { en: '500 trees planted', ar: '500 شجرة تم زراعتها' }
  },
  {
    icon: '🗑️',
    title: { en: 'Street Cleaning', ar: 'تنظيف الشوارع' },
    description: { en: 'Community-led street beautification projects', ar: 'مشاريع تجميل الشوارع بقيادة المجتمع' },
    impact: { en: '20 streets transformed', ar: '20 شارع تم تحويله' }
  },
  {
    icon: '♻️',
    title: { en: 'Recycling Education', ar: 'التوعية بإعادة التدوير' },
    description: { en: 'Teaching communities about waste separation', ar: 'تعليم المجتمعات فرز النفايات' },
    impact: { en: '1,000 families reached', ar: '1,000 عائلة تم الوصول إليها' }
  }
];

export default function Volunteer() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [selectedBeach, setSelectedBeach] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tshirtSize: 'M',
    hasTransport: false
  });

  const handleRegister = (beachId: string) => {
    setSelectedBeach(beachId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(isRTL ? 'شكراً لتسجيلك! سنتواصل معك قريباً.' : 'Thank you for registering! We will contact you soon.');
    setSelectedBeach(null);
    setFormData({ name: '', phone: '', email: '', tshirtSize: 'M', hasTransport: false });
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src="/images/01_sustainability_campaign_hero.png" 
          alt="Volunteer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D7A4A]/80 via-[#2D7A4A]/60 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <div className="inline-block bg-[#D4AF37] text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
              🌿 {isRTL ? 'مدعوم من جرينستس' : 'SUPPORTED BY GREENISTS'}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {isRTL ? 'معاً لعدن أنظف' : 'Together for a Cleaner Aden'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {isRTL 
                ? 'انضم إلينا في مبادراتنا التطوعية لتنظيف شواطئ وشوارع عدن الجميلة'
                : 'Join our volunteer initiatives to clean Aden\'s beautiful beaches and streets'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#beaches" className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#c4a030] transition-colors">
                {isRTL ? '🏖️ تنظيف الشواطئ' : '🏖️ Beach Cleanup'}
              </a>
              <a href="#initiatives" className="bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors border border-white/30">
                {isRTL ? '🌳 مبادراتنا' : '🌳 Our Initiatives'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D7A4A] mb-4">
              {isRTL ? 'نهجنا: التحديات كفرص' : 'Our Approach: Challenges as Opportunities'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isRTL 
                ? 'نحن لا نرى التحديات البيئية كعقبات، بل كفرص لبناء مجتمع أقوى وأكثر استدامة'
                : 'We don\'t see environmental challenges as obstacles, but as opportunities to build a stronger, more sustainable community'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                challenge: { en: 'Waste on beaches', ar: 'النفايات على الشواطئ' },
                opportunity: { en: 'Community bonding through cleanup events', ar: 'ترابط المجتمع من خلال فعاليات التنظيف' },
                icon: '🏖️'
              },
              {
                challenge: { en: 'Lack of green spaces', ar: 'نقص المساحات الخضراء' },
                opportunity: { en: 'Urban greening and tree planting programs', ar: 'برامج التخضير الحضري وزراعة الأشجار' },
                icon: '🌳'
              },
              {
                challenge: { en: 'Limited recycling', ar: 'محدودية إعادة التدوير' },
                opportunity: { en: 'Education and awareness campaigns', ar: 'حملات التوعية والتثقيف' },
                icon: '♻️'
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border border-green-100">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="mb-4">
                  <span className="text-red-500 font-medium">{isRTL ? 'التحدي:' : 'Challenge:'}</span>
                  <p className="text-gray-600">{isRTL ? item.challenge.ar : item.challenge.en}</p>
                </div>
                <div>
                  <span className="text-green-600 font-medium">{isRTL ? 'الفرصة:' : 'Opportunity:'}</span>
                  <p className="text-gray-800 font-medium">{isRTL ? item.opportunity.ar : item.opportunity.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beach Cleanup Events */}
      <section id="beaches" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D7A4A] mb-4">
              {isRTL ? '🏖️ فعاليات تنظيف الشواطئ القادمة' : '🏖️ Upcoming Beach Cleanup Events'}
            </h2>
            <p className="text-xl text-gray-600">
              {isRTL 
                ? 'سجل الآن وكن جزءاً من التغيير - نوفر التيشيرت والقبعة والماء!'
                : 'Register now and be part of the change - We provide t-shirt, cap, and water!'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {beaches.map(beach => {
              const progress = (beach.currentVolunteers / beach.targetVolunteers) * 100;
              return (
                <div key={beach.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <img src={beach.image} alt={isRTL ? beach.name.ar : beach.name.en} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-[#2D7A4A] text-white px-3 py-1 rounded-full text-sm font-bold">
                      📅 {new Date(beach.date).toLocaleDateString(isRTL ? 'ar-YE' : 'en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {isRTL ? beach.name.ar : beach.name.en}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      📍 {isRTL ? beach.location.ar : beach.location.en}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">
                          {isRTL ? 'المتطوعون المسجلون' : 'Registered Volunteers'}
                        </span>
                        <span className="font-bold text-[#2D7A4A]">
                          {beach.currentVolunteers} / {beach.targetVolunteers}
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#2D7A4A] to-[#4CAF50] rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {isRTL 
                          ? `نحتاج ${beach.targetVolunteers - beach.currentVolunteers} متطوع إضافي`
                          : `Need ${beach.targetVolunteers - beach.currentVolunteers} more volunteers`}
                      </p>
                    </div>

                    <button
                      onClick={() => handleRegister(beach.id)}
                      className="w-full bg-[#D4AF37] text-black py-3 rounded-lg font-bold hover:bg-[#c4a030] transition-colors"
                    >
                      {isRTL ? '✋ سجل الآن' : '✋ Register Now'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-16 bg-[#2D7A4A] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            {isRTL ? '🎁 ماذا نوفر للمتطوعين؟' : '🎁 What We Provide to Volunteers'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '👕', item: { en: 'Greenists T-Shirt', ar: 'تيشيرت جرينستس' }, image: '/images/greenists_tshirt_mockup(3).png' },
              { icon: '🧢', item: { en: 'Baseball Cap', ar: 'قبعة' }, image: '/images/greenists_baseball_cap(3).png' },
              { icon: '💧', item: { en: 'Water (Carton Caps)', ar: 'ماء (أغطية كرتون)' }, image: null },
              { icon: '🧤', item: { en: 'Gloves & Bags', ar: 'قفازات وأكياس' }, image: null }
            ].map((item, i) => (
              <div key={i} className="text-center">
                {item.image ? (
                  <img src={item.image} alt="" className="w-24 h-24 mx-auto rounded-lg object-cover mb-4" />
                ) : (
                  <div className="text-6xl mb-4">{item.icon}</div>
                )}
                <p className="font-bold">{isRTL ? item.item.ar : item.item.en}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-green-200 mt-8 text-lg">
            {isRTL 
              ? '🌿 جميع المواد صديقة للبيئة - نستخدم أغطية كرتونية بدلاً من البلاستيك!'
              : '🌿 All materials are eco-friendly - We use carton caps instead of plastic!'}
          </p>
        </div>
      </section>

      {/* Initiatives */}
      <section id="initiatives" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2D7A4A] mb-12">
            {isRTL ? '🌿 مبادراتنا البيئية' : '🌿 Our Environmental Initiatives'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((init, i) => (
              <div key={i} className="flex gap-6 p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-5xl">{init.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {isRTL ? init.title.ar : init.title.en}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {isRTL ? init.description.ar : init.description.en}
                  </p>
                  <div className="inline-block bg-[#2D7A4A] text-white px-4 py-1 rounded-full text-sm">
                    ✅ {isRTL ? init.impact.ar : init.impact.en}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {selectedBeach && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b bg-[#2D7A4A] text-white rounded-t-xl">
              <h2 className="text-2xl font-bold">
                {isRTL ? '✋ تسجيل متطوع' : '✋ Volunteer Registration'}
              </h2>
              <p className="text-green-200">
                {isRTL 
                  ? beaches.find(b => b.id === selectedBeach)?.name.ar
                  : beaches.find(b => b.id === selectedBeach)?.name.en}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {isRTL ? 'الاسم الكامل' : 'Full Name'} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#2D7A4A] focus:border-transparent"
                  placeholder={isRTL ? 'أدخل اسمك' : 'Enter your name'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {isRTL ? 'رقم الهاتف' : 'Phone Number'} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#2D7A4A] focus:border-transparent"
                  placeholder="+967 7XX XXX XXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {isRTL ? 'البريد الإلكتروني' : 'Email'}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#2D7A4A] focus:border-transparent"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {isRTL ? 'مقاس التيشيرت' : 'T-Shirt Size'} *
                </label>
                <select
                  value={formData.tshirtSize}
                  onChange={e => setFormData({...formData, tshirtSize: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#2D7A4A] focus:border-transparent"
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="transport"
                  checked={formData.hasTransport}
                  onChange={e => setFormData({...formData, hasTransport: e.target.checked})}
                  className="w-5 h-5 text-[#2D7A4A] rounded"
                />
                <label htmlFor="transport" className="text-gray-700">
                  {isRTL ? 'لدي وسيلة نقل خاصة' : 'I have my own transportation'}
                </label>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedBeach(null)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50"
                >
                  {isRTL ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-[#2D7A4A] text-white rounded-lg font-bold hover:bg-[#1a5a32]"
                >
                  {isRTL ? 'تأكيد التسجيل' : 'Confirm Registration'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Contact */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isRTL ? 'هل لديك فكرة لمبادرة بيئية؟' : 'Have an idea for an environmental initiative?'}
          </h2>
          <p className="text-gray-600 mb-8">
            {isRTL 
              ? 'نرحب بأفكاركم ومقترحاتكم لجعل عدن أكثر اخضراراً'
              : 'We welcome your ideas and suggestions to make Aden greener'}
          </p>
          <a 
            href="mailto:volunteer@greenists-events.com"
            className="inline-flex items-center gap-2 bg-[#2D7A4A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1a5a32] transition-colors"
          >
            ✉️ volunteer@greenists-events.com
          </a>
        </div>
      </section>
    </div>
  );
}
