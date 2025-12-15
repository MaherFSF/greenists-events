import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  User, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Circle, 
  ArrowRight,
  FileText,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  Search,
  Filter,
  Download,
  Eye,
  Sparkles,
  TrendingUp,
  Users,
  DollarSign
} from 'lucide-react';

// Mock event data for demonstration
const mockEvents = [
  {
    id: 'EVT-2024-001',
    name: 'Annual Corporate Conference',
    nameAr: 'المؤتمر السنوي للشركات',
    type: 'corporate',
    date: '2024-03-15',
    status: 'in_progress',
    progress: 65,
    budget: 15000,
    milestones: [
      { id: 1, name: 'Venue Booking', nameAr: 'حجز القاعة', completed: true },
      { id: 2, name: 'Catering Selection', nameAr: 'اختيار التموين', completed: true },
      { id: 3, name: 'Decoration Setup', nameAr: 'إعداد الديكور', completed: true },
      { id: 4, name: 'AV Equipment', nameAr: 'معدات الصوت والصورة', completed: false },
      { id: 5, name: 'Final Review', nameAr: 'المراجعة النهائية', completed: false },
    ]
  },
  {
    id: 'EVT-2024-002',
    name: 'Wedding Celebration',
    nameAr: 'حفل زفاف',
    type: 'wedding',
    date: '2024-04-20',
    status: 'planning',
    progress: 30,
    budget: 25000,
    milestones: [
      { id: 1, name: 'Venue Selection', nameAr: 'اختيار المكان', completed: true },
      { id: 2, name: 'Theme Design', nameAr: 'تصميم الثيم', completed: true },
      { id: 3, name: 'Vendor Contracts', nameAr: 'عقود الموردين', completed: false },
      { id: 4, name: 'Guest List Finalization', nameAr: 'قائمة الضيوف', completed: false },
      { id: 5, name: 'Rehearsal', nameAr: 'البروفة', completed: false },
    ]
  },
];

const statusColors = {
  planning: { bg: 'bg-blue-100', text: 'text-blue-700', labelEn: 'Planning', labelAr: 'التخطيط' },
  in_progress: { bg: 'bg-yellow-100', text: 'text-yellow-700', labelEn: 'In Progress', labelAr: 'قيد التنفيذ' },
  completed: { bg: 'bg-green-100', text: 'text-green-700', labelEn: 'Completed', labelAr: 'مكتمل' },
};

export default function ClientPortal() {
  const { language } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clientId, setClientId] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientId.trim()) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
        <Navigation />
        
        <main className="flex-1 flex items-center justify-center py-20">
          <Card className="w-full max-w-md mx-4 shadow-xl border-0">
            <CardHeader className="text-center bg-gradient-to-r from-[#2D7A4A] to-[#236339] text-white rounded-t-lg py-8">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl">
                {language === 'ar' ? 'بوابة العملاء' : 'Client Portal'}
              </CardTitle>
              <CardDescription className="text-white/80">
                {language === 'ar' 
                  ? 'أدخل رقم العميل الخاص بك لمتابعة فعالياتك'
                  : 'Enter your client ID to track your events'}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'ar' ? 'رقم العميل' : 'Client ID'}
                  </label>
                  <Input 
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                    placeholder={language === 'ar' ? 'مثال: GRN-2024-001' : 'e.g., GRN-2024-001'}
                    className="text-center text-lg"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-[#2D7A4A] hover:bg-[#236339] py-6 text-lg"
                >
                  {language === 'ar' ? 'دخول' : 'Login'}
                  <ArrowRight className="w-5 h-5 ms-2" />
                </Button>
              </form>
              
              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-sm text-gray-500 mb-2">
                  {language === 'ar' ? 'ليس لديك حساب؟' : 'Don\'t have an account?'}
                </p>
                <Button variant="outline" className="border-[#2D7A4A] text-[#2D7A4A]">
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </Button>
              </div>
              
              {/* Demo Login */}
              <div className="mt-4 p-3 bg-gray-50 rounded-lg text-center">
                <p className="text-xs text-gray-500 mb-2">
                  {language === 'ar' ? 'للتجربة، استخدم:' : 'For demo, use:'}
                </p>
                <code className="text-sm font-mono text-[#2D7A4A]">DEMO-2024</code>
              </div>
            </CardContent>
          </Card>
        </main>
        
        <Footer />
      </div>
    );
  }

  // Logged in view
  const currentEvent = mockEvents.find(e => e.id === selectedEvent) || mockEvents[0];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      <main className="flex-1">
        {/* Dashboard Header */}
        <section className="bg-gradient-to-r from-[#2D7A4A] to-[#236339] text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="text-white/70 text-sm mb-1">
                  {language === 'ar' ? 'مرحباً بك' : 'Welcome back'}
                </p>
                <h1 className="text-2xl font-bold">
                  {language === 'ar' ? 'لوحة تحكم العميل' : 'Client Dashboard'}
                </h1>
                <p className="text-white/80 text-sm mt-1">
                  {language === 'ar' ? `رقم العميل: ${clientId}` : `Client ID: ${clientId}`}
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Bell className="w-4 h-4 me-2" />
                  {language === 'ar' ? 'الإشعارات' : 'Notifications'}
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Settings className="w-4 h-4 me-2" />
                  {language === 'ar' ? 'الإعدادات' : 'Settings'}
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white hover:bg-white/10"
                  onClick={() => setIsLoggedIn(false)}
                >
                  <LogOut className="w-4 h-4 me-2" />
                  {language === 'ar' ? 'خروج' : 'Logout'}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="py-6 -mt-4">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { icon: Calendar, labelEn: 'Active Events', labelAr: 'الفعاليات النشطة', value: '2', color: '#2D7A4A' },
                { icon: TrendingUp, labelEn: 'Avg. Progress', labelAr: 'متوسط التقدم', value: '47%', color: '#D4AF37' },
                { icon: Users, labelEn: 'Total Guests', labelAr: 'إجمالي الضيوف', value: '350', color: '#3B82F6' },
                { icon: DollarSign, labelEn: 'Total Budget', labelAr: 'إجمالي الميزانية', value: '$40,000', color: '#8B5CF6' },
              ].map((stat, index) => (
                <Card key={index} className="shadow-lg border-0">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${stat.color}15` }}
                    >
                      <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        {language === 'ar' ? stat.labelAr : stat.labelEn}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Events List */}
              <div className="lg:col-span-1">
                <Card className="shadow-lg border-0">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">
                        {language === 'ar' ? 'فعالياتي' : 'My Events'}
                      </CardTitle>
                      <Button variant="ghost" size="sm">
                        <Filter className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {mockEvents.map((event) => (
                      <button
                        key={event.id}
                        onClick={() => setSelectedEvent(event.id)}
                        className={`w-full p-4 rounded-xl text-start transition-all ${
                          selectedEvent === event.id || (!selectedEvent && event.id === mockEvents[0].id)
                            ? 'bg-[#2D7A4A]/10 border-2 border-[#2D7A4A]'
                            : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-medium text-gray-900">
                            {language === 'ar' ? event.nameAr : event.name}
                          </h3>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[event.status as keyof typeof statusColors].bg} ${statusColors[event.status as keyof typeof statusColors].text}`}>
                            {language === 'ar' 
                              ? statusColors[event.status as keyof typeof statusColors].labelAr 
                              : statusColors[event.status as keyof typeof statusColors].labelEn}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">{event.id}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {event.progress}%
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#2D7A4A] rounded-full transition-all"
                            style={{ width: `${event.progress}%` }}
                          />
                        </div>
                      </button>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Event Details */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg border-0">
                  <CardHeader className="border-b">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">
                          {language === 'ar' ? currentEvent.nameAr : currentEvent.name}
                        </CardTitle>
                        <CardDescription>{currentEvent.id}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 me-2" />
                          {language === 'ar' ? 'تقرير' : 'Report'}
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="w-4 h-4 me-2" />
                          {language === 'ar' ? 'رسالة' : 'Message'}
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    {/* Event Info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="text-center p-4 bg-gray-50 rounded-xl">
                        <Calendar className="w-6 h-6 mx-auto mb-2 text-[#2D7A4A]" />
                        <p className="text-xs text-gray-500 mb-1">
                          {language === 'ar' ? 'التاريخ' : 'Date'}
                        </p>
                        <p className="font-medium">{currentEvent.date}</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-xl">
                        <TrendingUp className="w-6 h-6 mx-auto mb-2 text-[#D4AF37]" />
                        <p className="text-xs text-gray-500 mb-1">
                          {language === 'ar' ? 'التقدم' : 'Progress'}
                        </p>
                        <p className="font-medium">{currentEvent.progress}%</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-xl">
                        <DollarSign className="w-6 h-6 mx-auto mb-2 text-[#3B82F6]" />
                        <p className="text-xs text-gray-500 mb-1">
                          {language === 'ar' ? 'الميزانية' : 'Budget'}
                        </p>
                        <p className="font-medium">${currentEvent.budget.toLocaleString()}</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-xl">
                        <Sparkles className="w-6 h-6 mx-auto mb-2 text-[#8B5CF6]" />
                        <p className="text-xs text-gray-500 mb-1">
                          {language === 'ar' ? 'النوع' : 'Type'}
                        </p>
                        <p className="font-medium capitalize">{currentEvent.type}</p>
                      </div>
                    </div>

                    {/* Milestones */}
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#2D7A4A]" />
                      {language === 'ar' ? 'مراحل التنفيذ' : 'Milestones'}
                    </h3>
                    <div className="space-y-3">
                      {currentEvent.milestones.map((milestone, index) => (
                        <div 
                          key={milestone.id}
                          className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                            milestone.completed 
                              ? 'bg-green-50 border border-green-200' 
                              : 'bg-gray-50 border border-gray-200'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            milestone.completed 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-200 text-gray-500'
                          }`}>
                            {milestone.completed ? (
                              <CheckCircle2 className="w-5 h-5" />
                            ) : (
                              <span className="text-sm font-medium">{index + 1}</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className={`font-medium ${milestone.completed ? 'text-green-700' : 'text-gray-700'}`}>
                              {language === 'ar' ? milestone.nameAr : milestone.name}
                            </p>
                          </div>
                          {milestone.completed && (
                            <span className="text-xs text-green-600 font-medium">
                              {language === 'ar' ? 'مكتمل' : 'Completed'}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
