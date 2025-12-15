import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { GreenistsLogo, GreenistsLeaf } from './GreenistsLogo';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/calculator', label: t('nav.calculator') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') },
    { path: '/products', label: t('nav.products') },
    { path: '/ai-planner', label: t('nav.ai') },
    { path: '/brands', label: t('nav.brands') },
    { path: '/suppliers', label: t('nav.suppliers') },
    { path: '/sectors', label: t('nav.sectors') },
  ];
  
  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <GreenistsLeaf className="w-8 h-8" />
            <GreenistsLogo size="md" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-[#2D7A4A] ${
                  location === item.path ? 'text-[#2D7A4A]' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-1"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
            </Button>
            
            {/* Client Portal Button */}
            <Link href="/portal">
              <Button variant="default" size="sm" className="hidden sm:flex bg-[#2D7A4A] hover:bg-[#236339]">
                {t('nav.portal')}
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                    location === item.path 
                      ? 'bg-[#2D7A4A]/10 text-[#2D7A4A]' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/portal" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" size="sm" className="w-full bg-[#2D7A4A] hover:bg-[#236339]">
                  {t('nav.portal')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
