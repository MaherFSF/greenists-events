import { useLanguage } from '../contexts/LanguageContext';

interface TeamMember {
  id: string;
  name: { en: string; ar: string };
  position: { en: string; ar: string };
  department: string;
  image: string;
  email: string;
  phone?: string;
}

const leadership: TeamMember[] = [
  {
    id: 'ceo',
    name: { en: 'Maher Faidal Saeed Farea', ar: 'ماهر فيصل سعيد فارع' },
    position: { en: 'Chief Executive Officer', ar: 'الرئيس التنفيذي' },
    department: 'leadership',
    image: '/images/CEO_realistic_mockup_02(1).png',
    email: 'maher@greenists-events.com',
    phone: '+967 773 673 918'
  },
  {
    id: 'deputy',
    name: { en: 'Ahmed Al-Adeni', ar: 'أحمد العدني' },
    position: { en: 'Deputy CEO', ar: 'نائب الرئيس التنفيذي' },
    department: 'leadership',
    image: '/images/greenists_card_deputy_premium(2).png',
    email: 'ahmed@greenists-events.com'
  },
  {
    id: 'bdm',
    name: { en: 'Tariq Al-Yafei', ar: 'طارق اليافعي' },
    position: { en: 'Business Development Manager', ar: 'مدير تطوير الأعمال' },
    department: 'leadership',
    image: '/images/greenists_card_bdm_premium(2).png',
    email: 'tariq@greenists-events.com'
  }
];

const departments = [
  {
    id: 'events',
    name: { en: 'Events Department', ar: 'قسم الفعاليات' },
    icon: '🎪',
    color: 'from-purple-500 to-purple-600',
    members: [
      { name: { en: 'Noor Al-Shamiri', ar: 'نور الشميري' }, position: { en: 'Events Director', ar: 'مدير الفعاليات' } },
      { name: { en: 'Faris Al-Hadrami', ar: 'فارس الحضرمي' }, position: { en: 'Senior Event Coordinator', ar: 'منسق فعاليات أول' } },
      { name: { en: 'Yasmin Al-Lahji', ar: 'ياسمين اللحجي' }, position: { en: 'Event Coordinator', ar: 'منسقة فعاليات' } },
      { name: { en: 'Salem Al-Abadi', ar: 'سالم العبادي' }, position: { en: 'Event Coordinator', ar: 'منسق فعاليات' } }
    ]
  },
  {
    id: 'weddings',
    name: { en: 'Greenists Weddings', ar: 'جرينستس للأعراس' },
    icon: '💒',
    color: 'from-pink-500 to-rose-500',
    members: [
      { name: { en: 'Farah Al-Zubairi', ar: 'فرح الزبيري' }, position: { en: 'Weddings Director', ar: 'مديرة قسم الأعراس' } },
      { name: { en: 'Huda Al-Makki', ar: 'هدى المكي' }, position: { en: 'Bridal Consultant', ar: 'مستشارة العرائس' } },
      { name: { en: 'Amira Al-Kathiri', ar: 'أميرة الكثيري' }, position: { en: 'Decor Specialist', ar: 'أخصائية الديكور' } }
    ]
  },
  {
    id: 'corporate',
    name: { en: 'Greenists Corporate', ar: 'جرينستس للشركات' },
    icon: '🏢',
    color: 'from-blue-500 to-blue-600',
    members: [
      { name: { en: 'Sultan Al-Aulaqi', ar: 'سلطان العولقي' }, position: { en: 'Corporate Events Manager', ar: 'مدير فعاليات الشركات' } },
      { name: { en: 'Rashid Al-Fadli', ar: 'راشد الفضلي' }, position: { en: 'Account Executive', ar: 'مسؤول الحسابات' } }
    ]
  },
  {
    id: 'government',
    name: { en: 'Greenists Government', ar: 'جرينستس الحكومي' },
    icon: '🏛️',
    color: 'from-amber-500 to-amber-600',
    members: [
      { name: { en: 'Karim Al-Sallal', ar: 'كريم السلال' }, position: { en: 'Government Relations', ar: 'العلاقات الحكومية' } },
      { name: { en: 'Mona Al-Barakani', ar: 'منى البركاني' }, position: { en: 'Protocol Officer', ar: 'مسؤولة البروتوكول' } }
    ]
  },
  {
    id: 'creative',
    name: { en: 'Creative Department', ar: 'القسم الإبداعي' },
    icon: '🎨',
    color: 'from-orange-500 to-red-500',
    members: [
      { name: { en: 'Layla Al-Jundi', ar: 'ليلى الجندي' }, position: { en: 'Creative Director', ar: 'المدير الإبداعي' } },
      { name: { en: 'Omar Al-Saqqaf', ar: 'عمر السقاف' }, position: { en: 'Graphic Designer', ar: 'مصمم جرافيك' } },
      { name: { en: 'Dina Al-Amoudi', ar: 'دينا العمودي' }, position: { en: 'Content Creator', ar: 'صانعة محتوى' } }
    ]
  },
  {
    id: 'operations',
    name: { en: 'Operations & Logistics', ar: 'العمليات واللوجستيات' },
    icon: '⚙️',
    color: 'from-gray-600 to-gray-700',
    members: [
      { name: { en: 'Hassan Al-Jabri', ar: 'حسن الجابري' }, position: { en: 'Operations Manager', ar: 'مدير العمليات' } },
      { name: { en: 'Khalid Al-Naqib', ar: 'خالد النقيب' }, position: { en: 'Logistics Coordinator', ar: 'منسق اللوجستيات' } },
      { name: { en: 'Yusuf Al-Hamdi', ar: 'يوسف الحمدي' }, position: { en: 'Warehouse Supervisor', ar: 'مشرف المستودع' } }
    ]
  },
  {
    id: 'finance',
    name: { en: 'Finance & Admin', ar: 'المالية والإدارة' },
    icon: '💰',
    color: 'from-green-600 to-green-700',
    members: [
      { name: { en: 'Samira Al-Qadhi', ar: 'سميرة القاضي' }, position: { en: 'Finance Manager', ar: 'مديرة المالية' } },
      { name: { en: 'Nadia Al-Baidani', ar: 'نادية البيضاني' }, position: { en: 'HR Officer', ar: 'مسؤولة الموارد البشرية' } },
      { name: { en: 'Fatima Al-Habshi', ar: 'فاطمة الحبشي' }, position: { en: 'Admin Assistant', ar: 'مساعدة إدارية' } }
    ]
  },
  {
    id: 'kids',
    name: { en: 'Greenists Kids Corner', ar: 'ركن أطفال جرينستس' },
    icon: '👶',
    color: 'from-cyan-500 to-teal-500',
    members: [
      { name: { en: 'Amal Al-Sharabi', ar: 'أمل الشرعبي' }, position: { en: 'Kids Activities Manager', ar: 'مديرة أنشطة الأطفال' } },
      { name: { en: 'Nurse Salwa', ar: 'الممرضة سلوى' }, position: { en: 'Pediatric Nurse', ar: 'ممرضة أطفال' } },
      { name: { en: 'Reem Al-Dhubhani', ar: 'ريم الذبحاني' }, position: { en: 'Child Care Specialist', ar: 'أخصائية رعاية أطفال' } }
    ]
  }
];

export default function Team() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src="/images/04_modern_office_workspace_scene(1).png" 
          alt="Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D7A4A]/80 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {isRTL ? 'فريقنا' : 'Our Team'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              {isRTL 
                ? 'نخبة من المحترفين العدنيين الملتزمين بتقديم فعاليات استثنائية'
                : 'A team of Adeni professionals committed to delivering exceptional events'}
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2D7A4A] mb-12">
            {isRTL ? '👔 القيادة التنفيذية' : '👔 Executive Leadership'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map(member => (
              <div key={member.id} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={isRTL ? member.name.ar : member.name.en}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {isRTL ? member.name.ar : member.name.en}
                  </h3>
                  <p className="text-[#D4AF37] font-medium mb-3">
                    {isRTL ? member.position.ar : member.position.en}
                  </p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>✉️ {member.email}</p>
                    {member.phone && <p>📞 {member.phone}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2D7A4A] mb-12">
            {isRTL ? '🏢 أقسامنا وفرقنا' : '🏢 Our Departments & Teams'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map(dept => (
              <div key={dept.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${dept.color} p-4 text-white`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{dept.icon}</span>
                    <h3 className="text-xl font-bold">
                      {isRTL ? dept.name.ar : dept.name.en}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <ul className="space-y-3">
                    {dept.members.map((member, i) => (
                      <li key={i} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                          {(isRTL ? member.name.ar : member.name.en).charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">
                            {isRTL ? member.name.ar : member.name.en}
                          </p>
                          <p className="text-sm text-gray-500">
                            {isRTL ? member.position.ar : member.position.en}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Uniforms */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2D7A4A] mb-12">
            {isRTL ? '👕 أزياء الفريق' : '👕 Team Uniforms'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: { en: 'Daily Uniform', ar: 'الزي اليومي' }, image: '/images/greenists_tshirt_mockup(3).png', desc: { en: 'Green polo with embroidered logo', ar: 'بولو أخضر مع شعار مطرز' } },
              { type: { en: 'Event Uniform', ar: 'زي الفعاليات' }, image: '/images/greenists_yemen_pride_collection(5).png', desc: { en: 'Black polo with gold accents', ar: 'بولو أسود بلمسات ذهبية' } },
              { type: { en: 'Volunteer Uniform', ar: 'زي التطوع' }, image: '/images/greenists_baseball_cap(3).png', desc: { en: 'T-shirt and cap for cleanup events', ar: 'تيشيرت وقبعة لفعاليات التنظيف' } }
            ].map((uniform, i) => (
              <div key={i} className="text-center">
                <img src={uniform.image} alt="" className="w-full h-64 object-contain rounded-xl bg-gray-50 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {isRTL ? uniform.type.ar : uniform.type.en}
                </h3>
                <p className="text-gray-600">{isRTL ? uniform.desc.ar : uniform.desc.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-[#2D7A4A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {isRTL ? '🚀 انضم إلى فريقنا' : '🚀 Join Our Team'}
          </h2>
          <p className="text-xl text-green-200 mb-8">
            {isRTL 
              ? 'نبحث دائماً عن مواهب عدنية متميزة للانضمام إلى عائلة جرينستس'
              : 'We\'re always looking for talented Adeni professionals to join the Greenists family'}
          </p>
          <a 
            href="mailto:careers@greenists-events.com"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#c4a030] transition-colors"
          >
            ✉️ careers@greenists-events.com
          </a>
        </div>
      </section>
    </div>
  );
}
