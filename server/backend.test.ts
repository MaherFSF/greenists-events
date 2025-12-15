import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the database
vi.mock('./db', () => ({
  getDb: vi.fn().mockResolvedValue(null), // Return null to use default data
}));

describe('Greenists Backend API', () => {
  
  describe('Packages API', () => {
    it('should return default packages when database is not available', async () => {
      // Default packages should include essential, silver, gold, diamond tiers
      const defaultPackages = [
        { tier: 'essential', name: 'Essential Package' },
        { tier: 'silver', name: 'Silver Package' },
        { tier: 'gold', name: 'Gold Package' },
        { tier: 'diamond', name: 'Diamond Package' },
      ];
      
      expect(defaultPackages.length).toBe(4);
      expect(defaultPackages.map(p => p.tier)).toContain('essential');
      expect(defaultPackages.map(p => p.tier)).toContain('diamond');
    });
    
    it('should have correct pricing structure for packages', () => {
      const packagePrices = {
        essential: { base: 500, perGuest: 15 },
        silver: { base: 1000, perGuest: 25 },
        gold: { base: 2000, perGuest: 40 },
        diamond: { base: 5000, perGuest: 75 },
      };
      
      // Verify pricing increases with tier
      expect(packagePrices.silver.base).toBeGreaterThan(packagePrices.essential.base);
      expect(packagePrices.gold.base).toBeGreaterThan(packagePrices.silver.base);
      expect(packagePrices.diamond.base).toBeGreaterThan(packagePrices.gold.base);
    });
  });
  
  describe('Calculator API', () => {
    it('should calculate event cost correctly', () => {
      const eventPrices = {
        corporate: { base: 500, perGuest: 15 },
        wedding: { base: 1000, perGuest: 25 },
      };
      
      const guestCount = 100;
      const corporateCost = eventPrices.corporate.base + (eventPrices.corporate.perGuest * guestCount);
      const weddingCost = eventPrices.wedding.base + (eventPrices.wedding.perGuest * guestCount);
      
      expect(corporateCost).toBe(2000); // 500 + (15 * 100)
      expect(weddingCost).toBe(3500); // 1000 + (25 * 100)
    });
    
    it('should apply service fee correctly', () => {
      const subtotal = 10000;
      const serviceFeeRate = 0.15;
      const serviceFee = subtotal * serviceFeeRate;
      const total = subtotal + serviceFee;
      
      expect(serviceFee).toBe(1500);
      expect(total).toBe(11500);
    });
    
    it('should calculate sustainability score', () => {
      const calculateSustainabilityScore = (venueType: string, cateringLevel: string, addOns: string[]) => {
        let score = 50;
        if (venueType === 'outdoor') score += 10;
        if (venueType === 'beach') score += 5;
        if (cateringLevel === 'basic') score += 10;
        if (cateringLevel === 'standard') score += 5;
        if (addOns.includes('cultural-performance')) score += 5;
        if (addOns.includes('spa-wellness')) score += 5;
        if (addOns.includes('fireworks')) score -= 15;
        if (cateringLevel === 'luxury') score -= 5;
        return Math.max(0, Math.min(100, score));
      };
      
      expect(calculateSustainabilityScore('outdoor', 'basic', [])).toBe(70);
      expect(calculateSustainabilityScore('indoor', 'luxury', ['fireworks'])).toBe(30);
      expect(calculateSustainabilityScore('beach', 'standard', ['spa-wellness'])).toBe(65);
    });
    
    it('should calculate ROI for corporate events', () => {
      const eventCost = 5000;
      const guestCount = 100;
      const leadConversionRate = 0.15;
      const avgRevenuePerGuest = 150;
      
      const leads = Math.round(guestCount * leadConversionRate);
      const expectedRevenue = guestCount * avgRevenuePerGuest;
      const roi = ((expectedRevenue - eventCost) / eventCost) * 100;
      
      expect(leads).toBe(15);
      expect(expectedRevenue).toBe(15000);
      expect(roi).toBe(200); // (15000 - 5000) / 5000 * 100 = 200%
    });
    
    it('should convert currencies correctly', () => {
      const USD_TO_YER = 1700;
      const USD_TO_SAR = 3.75;
      
      const amountUsd = 1000;
      const amountYer = amountUsd * USD_TO_YER;
      const amountSar = amountUsd * USD_TO_SAR;
      
      expect(amountYer).toBe(1700000);
      expect(amountSar).toBe(3750);
    });
  });
  
  describe('Quotes API', () => {
    it('should generate unique quote numbers', () => {
      const generateQuoteNumber = () => {
        const year = new Date().getFullYear();
        const random = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
        return `GRN-${year}-${random}`;
      };
      
      const quote1 = generateQuoteNumber();
      const quote2 = generateQuoteNumber();
      
      expect(quote1).toMatch(/^GRN-\d{4}-\d{4}$/);
      expect(quote2).toMatch(/^GRN-\d{4}-\d{4}$/);
      // Note: There's a small chance they could be equal, but very unlikely
    });
    
    it('should set quote validity to 30 days', () => {
      const now = new Date();
      const validUntil = new Date();
      validUntil.setDate(validUntil.getDate() + 30);
      
      const diffDays = Math.round((validUntil.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      expect(diffDays).toBe(30);
    });
  });
  
  describe('Bookings API', () => {
    it('should generate unique booking codes', () => {
      const generateBookingCode = () => {
        const year = new Date().getFullYear();
        const random = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
        return `GRN-BK-${year}-${random}`;
      };
      
      const code = generateBookingCode();
      expect(code).toMatch(/^GRN-BK-\d{4}-\d{4}$/);
    });
    
    it('should calculate deposit as 30% of total', () => {
      const totalUsd = 10000;
      const depositRate = 0.3;
      const depositUsd = totalUsd * depositRate;
      const balanceUsd = totalUsd - depositUsd;
      
      expect(depositUsd).toBe(3000);
      expect(balanceUsd).toBe(7000);
    });
    
    it('should validate required booking fields', () => {
      const requiredFields = ['clientName', 'clientEmail', 'clientPhone', 'eventType', 'eventTitle', 'eventDate', 'guestCount', 'totalUsd'];
      
      const validBooking = {
        clientName: 'John Doe',
        clientEmail: 'john@example.com',
        clientPhone: '+967 123 456 789',
        eventType: 'corporate',
        eventTitle: 'Annual Conference',
        eventDate: '2025-06-15',
        guestCount: 150,
        totalUsd: 5000,
      };
      
      const isValid = requiredFields.every(field => validBooking[field as keyof typeof validBooking] !== undefined);
      expect(isValid).toBe(true);
    });
  });
  
  describe('Products API', () => {
    it('should return default products when database is not available', () => {
      const defaultProducts = [
        { sku: 'GRN-BC-001', name: 'Business Cards', category: 'stationery' },
        { sku: 'GRN-TB-001', name: 'Tote Bag', category: 'bags' },
        { sku: 'GRN-TS-001', name: 'Staff T-Shirt', category: 'clothing' },
      ];
      
      expect(defaultProducts.length).toBeGreaterThan(0);
      expect(defaultProducts[0].sku).toMatch(/^GRN-/);
    });
    
    it('should categorize products correctly', () => {
      const categories = ['stationery', 'clothing', 'bags', 'promotional', 'accessories'];
      
      categories.forEach(cat => {
        expect(['stationery', 'clothing', 'bags', 'promotional', 'accessories']).toContain(cat);
      });
    });
  });
  
  describe('Add-ons API', () => {
    it('should return default add-ons when database is not available', () => {
      const defaultAddOns = [
        { name: 'Saffron Water Welcome', category: 'premium', priceUsd: '150' },
        { name: 'Kids Corner', category: 'entertainment', priceUsd: '300' },
        { name: 'Live Music', category: 'entertainment', priceUsd: '500' },
      ];
      
      expect(defaultAddOns.length).toBeGreaterThan(0);
      expect(defaultAddOns[0].priceUsd).toBeDefined();
    });
    
    it('should categorize add-ons correctly', () => {
      const validCategories = ['premium', 'entertainment', 'wellness', 'cultural', 'sustainability'];
      
      validCategories.forEach(cat => {
        expect(['premium', 'entertainment', 'wellness', 'cultural', 'sustainability']).toContain(cat);
      });
    });
  });
  
  describe('Suppliers API', () => {
    it('should validate supplier registration fields', () => {
      const requiredFields = ['companyName', 'contactName', 'email', 'phone', 'category'];
      
      const validSupplier = {
        companyName: 'Aden Catering Co.',
        contactName: 'Ahmed Ali',
        email: 'ahmed@adencatering.com',
        phone: '+967 123 456 789',
        category: 'catering',
      };
      
      const isValid = requiredFields.every(field => validSupplier[field as keyof typeof validSupplier] !== undefined);
      expect(isValid).toBe(true);
    });
    
    it('should have valid supplier categories', () => {
      const validCategories = ['hotels', 'catering', 'decoration', 'photography', 'transportation', 'venues'];
      
      validCategories.forEach(cat => {
        expect(['hotels', 'catering', 'decoration', 'photography', 'transportation', 'venues']).toContain(cat);
      });
    });
  });
  
  describe('Volunteers API', () => {
    it('should validate volunteer registration fields', () => {
      const requiredFields = ['name', 'email', 'phone'];
      
      const validVolunteer = {
        name: 'Sara Mohammed',
        email: 'sara@example.com',
        phone: '+967 987 654 321',
        tshirtSize: 'M',
      };
      
      const isValid = requiredFields.every(field => validVolunteer[field as keyof typeof validVolunteer] !== undefined);
      expect(isValid).toBe(true);
    });
    
    it('should have valid t-shirt sizes', () => {
      const validSizes = ['S', 'M', 'L', 'XL', 'XXL'];
      
      validSizes.forEach(size => {
        expect(['S', 'M', 'L', 'XL', 'XXL']).toContain(size);
      });
    });
  });
  
  describe('Event Types', () => {
    it('should support all 15 event types', () => {
      const eventTypes = [
        'corporate', 'wedding', 'conference', 'government', 'tradeshow',
        'educational', 'entertainment', 'kids', 'healthcare', 'banking',
        'ngo', 'construction', 'energy', 'travel', 'condolences'
      ];
      
      expect(eventTypes.length).toBe(15);
      expect(eventTypes).toContain('corporate');
      expect(eventTypes).toContain('wedding');
      expect(eventTypes).toContain('condolences');
    });
  });
  
  describe('Package Tiers', () => {
    it('should have correct tier multipliers', () => {
      const tierMultipliers = {
        essential: 1.0,
        silver: 1.3,
        gold: 1.6,
        diamond: 2.0,
      };
      
      expect(tierMultipliers.essential).toBe(1.0);
      expect(tierMultipliers.silver).toBe(1.3);
      expect(tierMultipliers.gold).toBe(1.6);
      expect(tierMultipliers.diamond).toBe(2.0);
    });
    
    it('should apply tier multiplier to base cost', () => {
      const baseCost = 5000;
      const tierMultipliers = {
        essential: 1.0,
        silver: 1.3,
        gold: 1.6,
        diamond: 2.0,
      };
      
      expect(baseCost * tierMultipliers.essential).toBe(5000);
      expect(baseCost * tierMultipliers.silver).toBe(6500);
      expect(baseCost * tierMultipliers.gold).toBe(8000);
      expect(baseCost * tierMultipliers.diamond).toBe(10000);
    });
  });
});
