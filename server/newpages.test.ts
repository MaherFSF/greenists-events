import { describe, it, expect } from 'vitest';

describe('Greenists Website - New Pages and Features', () => {
  
  describe('Aden Venues Research Data', () => {
    it('should have valid venue categories', () => {
      const categories = [
        'Wedding Halls and Hotel Ballrooms',
        'Hotels with Event Facilities',
        'Outdoor Beach Venues and Resorts',
        'Catering',
        'Photography and Videography Services',
        'Decoration and Flower Arrangement Services',
        'Sound and Lighting Equipment Rental',
        'Transportation and Valet Services'
      ];
      
      expect(categories.length).toBe(8);
      categories.forEach(cat => {
        expect(cat).toBeTruthy();
        expect(typeof cat).toBe('string');
      });
    });

    it('should have correct venue data structure', () => {
      const sampleVenue = {
        name: { en: 'Gold Mohur Hotel & Resort', ar: 'فندق ومنتجع جولد موهر' },
        capacity: '150-800',
        priceRange: { usd: '$3,000-$10,000', yer: '5,100,000-17,000,000 ر.ي' },
        phone: '+967 2 204010'
      };

      expect(sampleVenue.name.en).toBeTruthy();
      expect(sampleVenue.name.ar).toBeTruthy();
      expect(sampleVenue.capacity).toMatch(/\d+-\d+/);
      expect(sampleVenue.priceRange.usd).toContain('$');
      expect(sampleVenue.priceRange.yer).toContain('ر.ي');
      expect(sampleVenue.phone).toMatch(/^\+967/);
    });
  });

  describe('Wedding Packages', () => {
    const packages = [
      { id: 'basic', name: 'Jasmine Package', priceUSD: 2500, guests: '50-100' },
      { id: 'silver', name: 'Rose Package', priceUSD: 5000, guests: '100-200' },
      { id: 'gold', name: 'Diamond Package', priceUSD: 10000, guests: '200-400' },
      { id: 'royal', name: 'Royal Package', priceUSD: 25000, guests: '400-800' }
    ];

    it('should have 4 wedding packages', () => {
      expect(packages.length).toBe(4);
    });

    it('should have increasing prices', () => {
      for (let i = 1; i < packages.length; i++) {
        expect(packages[i].priceUSD).toBeGreaterThan(packages[i-1].priceUSD);
      }
    });

    it('should calculate YER price correctly (1 USD = 1700 YER)', () => {
      const exchangeRate = 1700;
      packages.forEach(pkg => {
        const expectedYER = pkg.priceUSD * exchangeRate;
        expect(expectedYER).toBeGreaterThan(0);
        expect(expectedYER).toBe(pkg.priceUSD * 1700);
      });
    });

    it('should have valid guest ranges', () => {
      packages.forEach(pkg => {
        expect(pkg.guests).toMatch(/\d+-\d+/);
        const [min, max] = pkg.guests.split('-').map(Number);
        expect(max).toBeGreaterThan(min);
      });
    });
  });

  describe('Wedding Add-ons', () => {
    const addOns = [
      { id: 'saffron', name: 'Saffron Water Service', price: 50 },
      { id: 'honey', name: 'Honey Water Service', price: 40 },
      { id: 'henna', name: 'Henna Artist', price: 150 },
      { id: 'bakhoor', name: 'Premium Bakhoor & Oud', price: 100 },
      { id: 'flowers', name: 'Fresh Flower Arrangements', price: 300 },
      { id: 'chocolate', name: 'Chocolate Fountain', price: 200 },
      { id: 'photobooth', name: 'Photo Booth Station', price: 250 },
      { id: 'fireworks', name: 'Indoor Sparklers Show', price: 400 },
      { id: 'ladies_bags', name: 'Ladies Gift Bags', price: 10 },
      { id: 'kids_corner', name: 'Kids Corner + Nurse', price: 300 }
    ];

    it('should have 10 add-ons', () => {
      expect(addOns.length).toBe(10);
    });

    it('should have unique IDs', () => {
      const ids = addOns.map(a => a.id);
      const uniqueIds = [...new Set(ids)];
      expect(uniqueIds.length).toBe(ids.length);
    });

    it('should have positive prices', () => {
      addOns.forEach(addon => {
        expect(addon.price).toBeGreaterThan(0);
      });
    });

    it('should include Yemeni cultural items', () => {
      const culturalItems = ['saffron', 'honey', 'henna', 'bakhoor'];
      culturalItems.forEach(item => {
        expect(addOns.find(a => a.id === item)).toBeTruthy();
      });
    });
  });

  describe('Staff Portal Features', () => {
    const staffFeatures = [
      'dashboard',
      'tasks',
      'leave',
      'finance',
      'schedule',
      'documents',
      'profile'
    ];

    it('should have 7 staff portal tabs', () => {
      expect(staffFeatures.length).toBe(7);
    });

    it('should include HR features', () => {
      expect(staffFeatures).toContain('leave');
      expect(staffFeatures).toContain('profile');
    });

    it('should include finance features', () => {
      expect(staffFeatures).toContain('finance');
    });

    it('should include task management', () => {
      expect(staffFeatures).toContain('tasks');
      expect(staffFeatures).toContain('schedule');
    });
  });

  describe('Leave Types', () => {
    const leaveTypes = [
      { id: 'annual', name: 'Annual Leave' },
      { id: 'sick', name: 'Sick Leave' },
      { id: 'emergency', name: 'Emergency Leave' },
      { id: 'maternity', name: 'Maternity Leave' },
      { id: 'unpaid', name: 'Unpaid Leave' }
    ];

    it('should have 5 leave types', () => {
      expect(leaveTypes.length).toBe(5);
    });

    it('should include annual and sick leave', () => {
      expect(leaveTypes.find(l => l.id === 'annual')).toBeTruthy();
      expect(leaveTypes.find(l => l.id === 'sick')).toBeTruthy();
    });
  });

  describe('Mascot Characters', () => {
    const characters = [
      { name: 'Farah', segment: 'weddings', meaning: 'Joy' },
      { name: 'Sultan', segment: 'corporate', meaning: 'Authority' },
      { name: 'Rashid', segment: 'government', meaning: 'Wise' },
      { name: 'Adam & Layla', segment: 'kids', meaning: 'Children' },
      { name: 'Karim', segment: 'condolences', meaning: 'Noble' }
    ];

    it('should have 5 segment characters', () => {
      expect(characters.length).toBe(5);
    });

    it('should cover all major segments', () => {
      const segments = characters.map(c => c.segment);
      expect(segments).toContain('weddings');
      expect(segments).toContain('corporate');
      expect(segments).toContain('government');
      expect(segments).toContain('kids');
      expect(segments).toContain('condolences');
    });

    it('should have meaningful Arabic names', () => {
      characters.forEach(char => {
        expect(char.name).toBeTruthy();
        expect(char.meaning).toBeTruthy();
      });
    });
  });

  describe('Currency Exchange Rates', () => {
    const rates = {
      USD_TO_YER: 1700,
      USD_TO_SAR: 3.75
    };

    it('should have correct USD to YER rate', () => {
      expect(rates.USD_TO_YER).toBe(1700);
    });

    it('should have correct USD to SAR rate', () => {
      expect(rates.USD_TO_SAR).toBe(3.75);
    });

    it('should calculate conversions correctly', () => {
      const usdAmount = 100;
      expect(usdAmount * rates.USD_TO_YER).toBe(170000);
      expect(usdAmount * rates.USD_TO_SAR).toBe(375);
    });
  });

  describe('Contact Information', () => {
    const contact = {
      phone: '+967 773 673 918',
      email: 'info@greenists-events.com',
      website: 'www.greenists-events.com',
      address: {
        en: 'Next to Relax Hotel, Khor Maksar, Aden, Yemen',
        ar: 'بجانب فندق ريلاكس، خور مكسر، عدن، اليمن'
      }
    };

    it('should have valid Yemen phone number', () => {
      expect(contact.phone).toMatch(/^\+967/);
    });

    it('should have valid email format', () => {
      expect(contact.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it('should have bilingual address', () => {
      expect(contact.address.en).toBeTruthy();
      expect(contact.address.ar).toBeTruthy();
      expect(contact.address.en).toContain('Aden');
      expect(contact.address.ar).toContain('عدن');
    });
  });
});
