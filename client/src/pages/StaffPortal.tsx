import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

// Staff data structure
interface StaffMember {
  id: string;
  name: { en: string; ar: string };
  role: { en: string; ar: string };
  department: string;
  email: string;
  phone: string;
  avatar: string;
  joinDate: string;
  salary: number;
  leaveBalance: number;
  pendingTasks: number;
}

// Mock staff data
const staffMembers: StaffMember[] = [
  {
    id: 'EMP001',
    name: { en: 'Ahmed Al-Adeni', ar: 'أحمد العدني' },
    role: { en: 'Event Coordinator', ar: 'منسق فعاليات' },
    department: 'operations',
    email: 'ahmed@greenists-events.com',
    phone: '+967 773 111 222',
    avatar: '/images/characters/greenists_corporate_character.png',
    joinDate: '2022-01-15',
    salary: 500,
    leaveBalance: 21,
    pendingTasks: 5
  },
  {
    id: 'EMP002',
    name: { en: 'Fatima Hassan', ar: 'فاطمة حسن' },
    role: { en: 'Wedding Planner', ar: 'منظمة أعراس' },
    department: 'weddings',
    email: 'fatima@greenists-events.com',
    phone: '+967 773 222 333',
    avatar: '/images/characters/greenists_weddings_character.png',
    joinDate: '2021-06-01',
    salary: 600,
    leaveBalance: 18,
    pendingTasks: 8
  }
];

// Leave request types
const leaveTypes = [
  { id: 'annual', name: { en: 'Annual Leave', ar: 'إجازة سنوية' }, icon: '🏖️' },
  { id: 'sick', name: { en: 'Sick Leave', ar: 'إجازة مرضية' }, icon: '🏥' },
  { id: 'emergency', name: { en: 'Emergency Leave', ar: 'إجازة طارئة' }, icon: '🚨' },
  { id: 'maternity', name: { en: 'Maternity Leave', ar: 'إجازة أمومة' }, icon: '👶' },
  { id: 'unpaid', name: { en: 'Unpaid Leave', ar: 'إجازة بدون راتب' }, icon: '📋' }
];

export default function StaffPortal() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [staffId, setStaffId] = useState('');
  const [password, setPassword] = useState('');
  const [currentStaff, setCurrentStaff] = useState<StaffMember | null>(null);

  // Mock login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const staff = staffMembers.find(s => s.id === staffId.toUpperCase());
    if (staff) {
      setCurrentStaff(staff);
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-900 flex items-center justify-center p-4 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <img src="/images/greenists_logo.png" alt="Greenists" className="h-20 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800">
              {isRTL ? 'بوابة الموظفين' : 'Staff Portal'}
            </h1>
            <p className="text-gray-600">
              {isRTL ? 'سجل دخولك للوصول إلى لوحة التحكم' : 'Login to access your dashboard'}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {isRTL ? 'رقم الموظف' : 'Employee ID'}
              </label>
              <input
                type="text"
                value={staffId}
                onChange={(e) => setStaffId(e.target.value)}
                placeholder="EMP001"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {isRTL ? 'كلمة المرور' : 'Password'}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all"
            >
              {isRTL ? 'تسجيل الدخول' : 'Login'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            {isRTL ? 'للتجربة: استخدم EMP001 أو EMP002' : 'Demo: Use EMP001 or EMP002'}
          </p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'dashboard', name: { en: 'Dashboard', ar: 'لوحة التحكم' }, icon: '📊' },
    { id: 'tasks', name: { en: 'My Tasks', ar: 'مهامي' }, icon: '✅' },
    { id: 'leave', name: { en: 'Leave Requests', ar: 'طلبات الإجازة' }, icon: '🏖️' },
    { id: 'finance', name: { en: 'Finance', ar: 'المالية' }, icon: '💰' },
    { id: 'schedule', name: { en: 'Schedule', ar: 'الجدول' }, icon: '📅' },
    { id: 'documents', name: { en: 'Documents', ar: 'المستندات' }, icon: '📁' },
    { id: 'profile', name: { en: 'My Profile', ar: 'ملفي' }, icon: '👤' }
  ];

  return (
    <div className={`min-h-screen bg-gray-100 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-green-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/images/greenists_logo.png" alt="Greenists" className="h-10" />
              <div>
                <h1 className="text-xl font-bold">{isRTL ? 'بوابة الموظفين' : 'Staff Portal'}</h1>
                <p className="text-green-200 text-sm">{isRTL ? 'نظام إدارة الموارد البشرية' : 'HR Management System'}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-bold">{currentStaff?.name[language]}</p>
                <p className="text-green-200 text-sm">{currentStaff?.role[language]}</p>
              </div>
              <img 
                src={currentStaff?.avatar} 
                alt={currentStaff?.name[language]}
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm"
              >
                {isRTL ? 'خروج' : 'Logout'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-64 bg-white rounded-2xl shadow-lg p-4 h-fit sticky top-6">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-green-100 text-green-700 font-bold'
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span>{tab.name[language]}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Welcome Banner */}
                <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">
                    {isRTL ? `مرحباً، ${currentStaff?.name.ar}!` : `Welcome, ${currentStaff?.name.en}!`}
                  </h2>
                  <p className="text-green-100">
                    {isRTL ? 'إليك ملخص يومك' : "Here's your day at a glance"}
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">✅</span>
                      <span className="text-green-500 text-sm font-bold">+2 {isRTL ? 'اليوم' : 'today'}</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">{currentStaff?.pendingTasks}</p>
                    <p className="text-gray-500">{isRTL ? 'مهام معلقة' : 'Pending Tasks'}</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">🏖️</span>
                      <span className="text-blue-500 text-sm font-bold">{isRTL ? 'متاح' : 'Available'}</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">{currentStaff?.leaveBalance}</p>
                    <p className="text-gray-500">{isRTL ? 'أيام إجازة' : 'Leave Days'}</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">💰</span>
                      <span className="text-yellow-500 text-sm font-bold">{isRTL ? 'هذا الشهر' : 'This month'}</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">${currentStaff?.salary}</p>
                    <p className="text-gray-500">{isRTL ? 'الراتب' : 'Salary'}</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">📅</span>
                      <span className="text-purple-500 text-sm font-bold">{isRTL ? 'هذا الأسبوع' : 'This week'}</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">3</p>
                    <p className="text-gray-500">{isRTL ? 'فعاليات قادمة' : 'Upcoming Events'}</p>
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {isRTL ? 'الفعاليات القادمة' : 'Upcoming Events'}
                  </h3>
                  <div className="space-y-4">
                    {[
                      { date: '2025-12-20', type: 'wedding', client: 'Al-Hamdi Family', venue: 'Gold Mohur Hotel' },
                      { date: '2025-12-22', type: 'corporate', client: 'Yemen Bank', venue: 'Coral Hotel' },
                      { date: '2025-12-25', type: 'government', client: 'Ministry of Education', venue: 'Aden Conference Center' }
                    ].map((event, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="text-center bg-green-100 rounded-xl p-3 min-w-[60px]">
                          <p className="text-2xl font-bold text-green-700">{new Date(event.date).getDate()}</p>
                          <p className="text-xs text-green-600">{new Date(event.date).toLocaleDateString(language === 'ar' ? 'ar-YE' : 'en-US', { month: 'short' })}</p>
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-gray-800">{event.client}</p>
                          <p className="text-sm text-gray-500">{event.venue}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          event.type === 'wedding' ? 'bg-pink-100 text-pink-700' :
                          event.type === 'corporate' ? 'bg-blue-100 text-blue-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'leave' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    {isRTL ? 'طلب إجازة جديد' : 'New Leave Request'}
                  </h3>
                  
                  <div className="grid md:grid-cols-5 gap-4 mb-6">
                    {leaveTypes.map((type) => (
                      <button
                        key={type.id}
                        className="p-4 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-center"
                      >
                        <span className="text-3xl block mb-2">{type.icon}</span>
                        <span className="text-sm font-medium text-gray-700">{type.name[language]}</span>
                      </button>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {isRTL ? 'من تاريخ' : 'From Date'}
                      </label>
                      <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {isRTL ? 'إلى تاريخ' : 'To Date'}
                      </label>
                      <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isRTL ? 'السبب' : 'Reason'}
                    </label>
                    <textarea 
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500"
                      placeholder={isRTL ? 'اكتب سبب الإجازة...' : 'Enter reason for leave...'}
                    />
                  </div>

                  <button className="mt-6 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-xl font-bold hover:from-green-700 hover:to-green-800">
                    {isRTL ? 'إرسال الطلب' : 'Submit Request'}
                  </button>
                </div>

                {/* Leave History */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {isRTL ? 'سجل الإجازات' : 'Leave History'}
                  </h3>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-right py-3 text-gray-600">{isRTL ? 'النوع' : 'Type'}</th>
                        <th className="text-right py-3 text-gray-600">{isRTL ? 'من' : 'From'}</th>
                        <th className="text-right py-3 text-gray-600">{isRTL ? 'إلى' : 'To'}</th>
                        <th className="text-right py-3 text-gray-600">{isRTL ? 'الأيام' : 'Days'}</th>
                        <th className="text-right py-3 text-gray-600">{isRTL ? 'الحالة' : 'Status'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">🏖️ {isRTL ? 'سنوية' : 'Annual'}</td>
                        <td className="py-3">2025-11-01</td>
                        <td className="py-3">2025-11-05</td>
                        <td className="py-3">5</td>
                        <td className="py-3"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">{isRTL ? 'موافق' : 'Approved'}</span></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">🏥 {isRTL ? 'مرضية' : 'Sick'}</td>
                        <td className="py-3">2025-10-15</td>
                        <td className="py-3">2025-10-16</td>
                        <td className="py-3">2</td>
                        <td className="py-3"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">{isRTL ? 'موافق' : 'Approved'}</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'finance' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    {isRTL ? 'ملخص الراتب' : 'Salary Summary'}
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
                      <p className="text-green-100 mb-2">{isRTL ? 'الراتب الأساسي' : 'Basic Salary'}</p>
                      <p className="text-3xl font-bold">${currentStaff?.salary}</p>
                      <p className="text-green-200 text-sm">{((currentStaff?.salary || 0) * 1700).toLocaleString()} ر.ي</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                      <p className="text-blue-100 mb-2">{isRTL ? 'البدلات' : 'Allowances'}</p>
                      <p className="text-3xl font-bold">$100</p>
                      <p className="text-blue-200 text-sm">170,000 ر.ي</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 text-white">
                      <p className="text-yellow-100 mb-2">{isRTL ? 'صافي الراتب' : 'Net Salary'}</p>
                      <p className="text-3xl font-bold">${(currentStaff?.salary || 0) + 100}</p>
                      <p className="text-yellow-200 text-sm">{(((currentStaff?.salary || 0) + 100) * 1700).toLocaleString()} ر.ي</p>
                    </div>
                  </div>
                </div>

                {/* Payslips */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {isRTL ? 'كشوف الرواتب' : 'Payslips'}
                  </h3>
                  <div className="space-y-3">
                    {['December 2025', 'November 2025', 'October 2025'].map((month, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">📄</span>
                          <span className="font-medium">{month}</span>
                        </div>
                        <button className="text-green-600 hover:text-green-700 font-medium">
                          {isRTL ? 'تحميل PDF' : 'Download PDF'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-6 mb-8">
                  <img 
                    src={currentStaff?.avatar} 
                    alt={currentStaff?.name[language]}
                    className="w-24 h-24 rounded-full border-4 border-green-500 object-cover"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{currentStaff?.name[language]}</h2>
                    <p className="text-green-600 font-medium">{currentStaff?.role[language]}</p>
                    <p className="text-gray-500">{isRTL ? 'رقم الموظف:' : 'Employee ID:'} {currentStaff?.id}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isRTL ? 'البريد الإلكتروني' : 'Email'}
                    </label>
                    <input 
                      type="email" 
                      value={currentStaff?.email}
                      readOnly
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isRTL ? 'رقم الهاتف' : 'Phone'}
                    </label>
                    <input 
                      type="tel" 
                      value={currentStaff?.phone}
                      readOnly
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isRTL ? 'تاريخ الانضمام' : 'Join Date'}
                    </label>
                    <input 
                      type="text" 
                      value={currentStaff?.joinDate}
                      readOnly
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isRTL ? 'القسم' : 'Department'}
                    </label>
                    <input 
                      type="text" 
                      value={currentStaff?.department}
                      readOnly
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50"
                    />
                  </div>
                </div>

                <button className="mt-6 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-xl font-bold hover:from-green-700 hover:to-green-800">
                  {isRTL ? 'تحديث الملف الشخصي' : 'Update Profile'}
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
