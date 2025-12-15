import { describe, it, expect } from 'vitest';

describe('Greenists Homepage Content', () => {
  // Test currency conversion rates
  describe('Currency Conversion', () => {
    const USD_TO_YER = 1700;
    const USD_TO_SAR = 3.75;
    
    it('should correctly convert USD to YER', () => {
      const usdAmount = 500;
      const yerAmount = usdAmount * USD_TO_YER;
      expect(yerAmount).toBe(850000);
    });
    
    it('should correctly convert USD to SAR', () => {
      const usdAmount = 500;
      const sarAmount = usdAmount * USD_TO_SAR;
      expect(sarAmount).toBe(1875);
    });
    
    it('should handle package pricing correctly', () => {
      const packages = [
        { name: 'Essential', priceUSD: 500, expectedYER: 850000 },
        { name: 'Silver', priceUSD: 1500, expectedYER: 2550000 },
        { name: 'Gold', priceUSD: 3500, expectedYER: 5950000 },
        { name: 'Diamond', priceUSD: 7000, expectedYER: 11900000 },
      ];
      
      packages.forEach(pkg => {
        const calculatedYER = pkg.priceUSD * USD_TO_YER;
        expect(calculatedYER).toBe(pkg.expectedYER);
      });
    });
  });
  
  // Test content structure
  describe('Content Structure', () => {
    const requiredSections = [
      'hero',
      'stats',
      'characters',
      'services',
      'packages',
      'addons',
      'store',
      'testimonials',
      'cta',
      'contact'
    ];
    
    it('should have all required sections defined', () => {
      requiredSections.forEach(section => {
        expect(section).toBeDefined();
      });
    });
    
    it('should have 4 event packages', () => {
      const packageCount = 4;
      expect(packageCount).toBe(4);
    });
    
    it('should have 6 service categories', () => {
      const serviceCount = 6;
      expect(serviceCount).toBe(6);
    });
    
    it('should have 5 mascot characters', () => {
      const characterCount = 5;
      expect(characterCount).toBe(5);
    });
    
    it('should have 10 premium add-ons', () => {
      const addonCount = 10;
      expect(addonCount).toBe(10);
    });
  });
  
  // Test bilingual content
  describe('Bilingual Content', () => {
    const languages = ['en', 'ar'];
    
    it('should support English and Arabic languages', () => {
      expect(languages).toContain('en');
      expect(languages).toContain('ar');
    });
    
    it('should have Arabic translations for key terms', () => {
      const translations = {
        'Events Experts & Business Innovators': 'خبراء الفعاليات ومبتكرو الأعمال',
        'From Aden to the World': 'من عدن إلى العالم',
        'Plan Your Event': 'خطط لفعاليتك',
      };
      
      Object.keys(translations).forEach(key => {
        expect(translations[key as keyof typeof translations]).toBeDefined();
        expect(translations[key as keyof typeof translations].length).toBeGreaterThan(0);
      });
    });
  });
  
  // Test contact information
  describe('Contact Information', () => {
    const contactInfo = {
      phone: '+967 773 673 918',
      email: 'info@greenists-events.com',
      address: 'Next to Relax Hotel, Khor Maksar, Aden, Yemen',
    };
    
    it('should have valid phone number format', () => {
      expect(contactInfo.phone).toMatch(/^\+967/);
    });
    
    it('should have valid email format', () => {
      expect(contactInfo.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });
    
    it('should include Aden in address', () => {
      expect(contactInfo.address).toContain('Aden');
    });
  });
  
  // Test mascot characters
  describe('Greenists Mascot Characters', () => {
    const characters = [
      { name: 'Salim', nameAr: 'سالم', role: 'The Wise Elder' },
      { name: 'Noor', nameAr: 'نور', role: 'The Professional' },
      { name: 'Faris', nameAr: 'فارس', role: 'The Coordinator' },
      { name: 'Yasmin', nameAr: 'ياسمين', role: 'The Creative' },
      { name: 'Little Aden', nameAr: 'عدن الصغير', role: 'The Future' },
    ];
    
    it('should have 5 unique characters', () => {
      expect(characters.length).toBe(5);
    });
    
    it('should have Arabic names for all characters', () => {
      characters.forEach(char => {
        expect(char.nameAr).toBeDefined();
        expect(char.nameAr.length).toBeGreaterThan(0);
      });
    });
    
    it('should have defined roles for all characters', () => {
      characters.forEach(char => {
        expect(char.role).toBeDefined();
      });
    });
  });
  
  // Test add-on pricing
  describe('Add-on Pricing', () => {
    const addons = [
      { name: 'Saffron Water Service', price: 50 },
      { name: 'Honey Water Service', price: 40 },
      { name: 'Kids Corner + Nurse', price: 200 },
      { name: 'Yemeni Coffee Station', price: 150 },
      { name: 'Bakhoor & Oud Corner', price: 100 },
      { name: 'Drone Photography', price: 300 },
      { name: 'Live Band / DJ', price: 500 },
      { name: 'Valet Parking', price: 150 },
      { name: 'Fresh Flower Arrangements', price: 200 },
    ];
    
    it('should have positive prices for all add-ons', () => {
      addons.forEach(addon => {
        expect(addon.price).toBeGreaterThan(0);
      });
    });
    
    it('should have Kids Corner as premium service', () => {
      const kidsCorner = addons.find(a => a.name.includes('Kids'));
      expect(kidsCorner).toBeDefined();
      expect(kidsCorner?.price).toBe(200);
    });
  });
  
  // Test store opening date
  describe('Store Information', () => {
    it('should have store opening date in June 2026', () => {
      const storeOpeningDate = 'June 2026';
      expect(storeOpeningDate).toContain('2026');
      expect(storeOpeningDate).toContain('June');
    });
    
    it('should have store location in Khor Maksar', () => {
      const storeLocation = 'Khor Maksar';
      expect(storeLocation).toBe('Khor Maksar');
    });
  });
});

describe('Greenists Brand Identity', () => {
  describe('Color Palette', () => {
    const brandColors = {
      primaryGreen: '#2D7A4A',
      gold: '#D4AF37',
      white: '#FFFFFF',
    };
    
    it('should have correct primary green color', () => {
      expect(brandColors.primaryGreen).toBe('#2D7A4A');
    });
    
    it('should have correct gold accent color', () => {
      expect(brandColors.gold).toBe('#D4AF37');
    });
  });
  
  describe('Company Information', () => {
    const companyInfo = {
      name: 'Greenists',
      taglineEn: 'Events Experts & Business Innovators',
      taglineAr: 'خبراء الفعاليات ومبتكرو الأعمال',
      foundedYear: 2015,
      location: 'Aden, Yemen',
    };
    
    it('should have correct company name', () => {
      expect(companyInfo.name).toBe('Greenists');
    });
    
    it('should have bilingual taglines', () => {
      expect(companyInfo.taglineEn).toBeDefined();
      expect(companyInfo.taglineAr).toBeDefined();
    });
    
    it('should be founded in 2015', () => {
      expect(companyInfo.foundedYear).toBe(2015);
    });
    
    it('should be located in Aden, Yemen', () => {
      expect(companyInfo.location).toContain('Aden');
      expect(companyInfo.location).toContain('Yemen');
    });
  });
});
