import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { 
  Menu, X, Globe, ChevronDown, Building2, Heart, Stethoscope, Baby,
  Building, Banknote, GraduationCap, Laugh, HardHat, Zap, Plane,
  Calculator, Users, Briefcase, ShoppingBag, BookOpen, Camera,
  Phone, Mail, Sparkles, Award, Home, Info, Wrench, CalendarDays
} from 'lucide-react';

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const sectors = [
    { id: 'corporate', nameEn: 'Corporate', nameAr: 'الشركات', icon: Building2, color: '#1E3A5F' },
    { id: 'weddings', nameEn: 'Weddings', nameAr: 'الأعراس', icon: Heart, color: '#C41E3A' },
    { id: 'government', nameEn: 'Government', nameAr: 'الحكومة', icon: Building, color: '#1B4332' },
    { id: 'healthcare', nameEn: 'Healthcare', nameAr: 'الصحة', icon: Stethoscope, color: '#0077B6' },
    { id: 'education', nameEn: 'Education', nameAr: 'التعليم', icon: GraduationCap, color: '#7B2CBF' },
    { id: 'kids', nameEn: 'Kids', nameAr: 'الأطفال', icon: Baby, color: '#FF6B6B' },
    { id: 'banking', nameEn: 'Banking', nameAr: 'البنوك', icon: Banknote, color: '#0A4D68' },
    { id: 'ngo', nameEn: 'NGO', nameAr: 'المنظمات', icon: Globe, color: '#2D7A4A' },
    { id: 'entertainment', nameEn: 'Entertainment', nameAr: 'الترفيه', icon: Laugh, color: '#FF006E' },
    { id: 'construction', nameEn: 'Construction', nameAr: 'البناء', icon: HardHat, color: '#E85D04' },
    { id: 'energy', nameEn: 'Energy', nameAr: 'الطاقة', icon: Zap, color: '#023E8A' },
    { id: 'travel', nameEn: 'Travel', nameAr: 'السياحة', icon: Plane, color: '#006D77' },
    { id: 'condolences', nameEn: 'Condolences', nameAr: 'العزاء', icon: Heart, color: '#495057' },
  ];
  
  const mainNavItems = [
    { path: '/', labelEn: 'Home', labelAr: 'الرئيسية', icon: Home },
    { path: '/about', labelEn: 'About', labelAr: 'من نحن', icon: Info },
    { path: '/services', labelEn: 'Services', labelAr: 'الخدمات', icon: Wrench },
  ];
  
  const toolsNavItems = [
    { path: '/calculator', labelEn: 'Calculator', labelAr: 'الحاسبة', icon: Calculator },
    { path: '/ai-planner', labelEn: 'AI Planner', labelAr: 'المخطط الذكي', icon: Sparkles },
    { path: '/booking', labelEn: 'Book Now', labelAr: 'احجز الآن', icon: CalendarDays },
  ];
  
  const moreNavItems = [
    { path: '/gallery', labelEn: 'Gallery', labelAr: 'المعرض', icon: Camera },
    { path: '/products', labelEn: 'Products', labelAr: 'المنتجات', icon: ShoppingBag },
    { path: '/store', labelEn: 'Store', labelAr: 'المتجر', icon: ShoppingBag },
    { path: '/academy', labelEn: 'Academy', labelAr: 'الأكاديمية', icon: BookOpen },
    { path: '/heritage', labelEn: 'Heritage', labelAr: 'التراث', icon: Award },
    { path: '/team', labelEn: 'Team', labelAr: 'الفريق', icon: Users },
    { path: '/volunteer', labelEn: 'Volunteer', labelAr: 'تطوع', icon: Heart },
    { path: '/suppliers', labelEn: 'Suppliers', labelAr: 'الموردين', icon: Briefcase },
  ];
  
  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };
  
  const isRTL = language === 'ar';
  

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#2D7A4A] to-[#1B4D2E] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+967773673918" className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors">
              <Phone className="w-3 h-3" />
              <span>+967 773 673 918</span>
            </a>
            <a href="mailto:info@greenists-events.com" className="hidden sm:flex items-center gap-1 hover:text-[#D4AF37] transition-colors">
              <Mail className="w-3 h-3" />
              <span>info@greenists-events.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/portal" className="hover:text-[#D4AF37] transition-colors">
              {language === 'ar' ? 'بوابة العملاء' : 'Client Portal'}
            </Link>
            <span className="text-white/50">|</span>
            <Link href="/staff" className="hover:text-[#D4AF37] transition-colors">
              {language === 'ar' ? 'بوابة الموظفين' : 'Staff Portal'}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4" ref={dropdownRef}>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/images/branding/greenists_logo_variations_sheet2(1).png" 
              alt="Greenists" 
              className="h-14 object-contain"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Main Items */}
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-[#2D7A4A]/10 hover:text-[#2D7A4A] ${
                  location === item.path ? 'text-[#2D7A4A] bg-[#2D7A4A]/10' : 'text-gray-700'
                }`}
              >
                {language === 'ar' ? item.labelAr : item.labelEn}
              </Link>
            ))}
            
            {/* Sectors Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'sectors' ? null : 'sectors')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 hover:bg-[#2D7A4A]/10 hover:text-[#2D7A4A] ${
                  activeDropdown === 'sectors' || location.startsWith('/sectors') ? 'text-[#2D7A4A] bg-[#2D7A4A]/10' : 'text-gray-700'
                }`}
              >
                {language === 'ar' ? 'القطاعات' : 'Sectors'}
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'sectors' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'sectors' && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-3 gap-3 z-50">
                  <div className="col-span-3 pb-3 mb-3 border-b border-gray-100">
                    <Link 
                      href="/sectors" 
                      onClick={() => setActiveDropdown(null)}
                      className="text-[#2D7A4A] font-semibold hover:underline"
                    >
                      {language === 'ar' ? 'عرض جميع القطاعات →' : 'View All Sectors →'}
                    </Link>
                  </div>
                  {sectors.map((sector) => (
                    <Link
                      key={sector.id}
                      href={`/sectors/${sector.id}`}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${sector.color}15` }}
                      >
                        <sector.icon className="w-5 h-5" style={{ color: sector.color }} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#2D7A4A]">
                        {language === 'ar' ? sector.nameAr : sector.nameEn}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'tools' ? null : 'tools')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 hover:bg-[#2D7A4A]/10 hover:text-[#2D7A4A] ${
                  activeDropdown === 'tools' ? 'text-[#2D7A4A] bg-[#2D7A4A]/10' : 'text-gray-700'
                }`}
              >
                {language === 'ar' ? 'الأدوات' : 'Tools'}
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'tools' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'tools' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 p-3 z-50">
                  {toolsNavItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <item.icon className="w-5 h-5 text-[#2D7A4A]" />
                      <span className="text-sm font-medium text-gray-700">
                        {language === 'ar' ? item.labelAr : item.labelEn}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'more' ? null : 'more')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 hover:bg-[#2D7A4A]/10 hover:text-[#2D7A4A] ${
                  activeDropdown === 'more' ? 'text-[#2D7A4A] bg-[#2D7A4A]/10' : 'text-gray-700'
                }`}
              >
                {language === 'ar' ? 'المزيد' : 'More'}
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'more' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'more' && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 p-3 z-50">
                  {moreNavItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <item.icon className="w-5 h-5 text-[#2D7A4A]" />
                      <span className="text-sm font-medium text-gray-700">
                        {language === 'ar' ? item.labelAr : item.labelEn}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Contact */}
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-[#2D7A4A]/10 hover:text-[#2D7A4A] ${
                location === '/contact' ? 'text-[#2D7A4A] bg-[#2D7A4A]/10' : 'text-gray-700'
              }`}
            >
              {language === 'ar' ? 'تواصل معنا' : 'Contact'}
            </Link>
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:bg-[#2D7A4A]/10"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language === 'ar' ? 'EN' : 'عربي'}</span>
            </Button>
            
            {/* Book Now Button */}
            <Link href="/booking">
              <Button className="hidden sm:flex bg-[#D4AF37] hover:bg-[#C9A227] text-black font-semibold rounded-full px-6">
                {language === 'ar' ? 'احجز الآن' : 'Book Now'}
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col gap-2">
              {/* Main Items */}
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 text-sm font-medium py-3 px-4 rounded-lg transition-colors ${
                    location === item.path 
                      ? 'bg-[#2D7A4A]/10 text-[#2D7A4A]' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {language === 'ar' ? item.labelAr : item.labelEn}
                </Link>
              ))}
              
              {/* Sectors Section */}
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">
                  {language === 'ar' ? 'القطاعات' : 'Sectors'}
                </p>
                <div className="grid grid-cols-2 gap-2 px-2">
                  {sectors.slice(0, 6).map((sector) => (
                    <Link
                      key={sector.id}
                      href={`/sectors/${sector.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
                    >
                      <sector.icon className="w-4 h-4" style={{ color: sector.color }} />
                      <span className="text-xs font-medium text-gray-700">
                        {language === 'ar' ? sector.nameAr : sector.nameEn}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/sectors"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center text-sm text-[#2D7A4A] font-medium mt-2 py-2"
                >
                  {language === 'ar' ? 'عرض الكل →' : 'View All →'}
                </Link>
              </div>
              
              {/* Tools Section */}
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">
                  {language === 'ar' ? 'الأدوات' : 'Tools'}
                </p>
                {toolsNavItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 text-sm font-medium py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    <item.icon className="w-5 h-5 text-[#2D7A4A]" />
                    {language === 'ar' ? item.labelAr : item.labelEn}
                  </Link>
                ))}
              </div>
              
              {/* More Section */}
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">
                  {language === 'ar' ? 'المزيد' : 'More'}
                </p>
                {moreNavItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 text-sm font-medium py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    <item.icon className="w-5 h-5 text-[#2D7A4A]" />
                    {language === 'ar' ? item.labelAr : item.labelEn}
                  </Link>
                ))}
              </div>
              
              {/* Contact & Book */}
              <div className="mt-4 pt-4 border-t space-y-2 px-2">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-center">
                    {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                  </Button>
                </Link>
                <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full justify-center bg-[#D4AF37] hover:bg-[#C9A227] text-black">
                    {language === 'ar' ? 'احجز الآن' : 'Book Now'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
