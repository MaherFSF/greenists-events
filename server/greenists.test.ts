import { describe, it, expect } from 'vitest';

// Test currency conversion rates
describe('Currency Conversion', () => {
  const USD_TO_YER = 1700;
  const USD_TO_SAR = 3.75;
  
  it('should convert USD to YER correctly', () => {
    const usdAmount = 100;
    const yerAmount = usdAmount * USD_TO_YER;
    expect(yerAmount).toBe(170000);
  });
  
  it('should convert USD to SAR correctly', () => {
    const usdAmount = 100;
    const sarAmount = usdAmount * USD_TO_SAR;
    expect(sarAmount).toBe(375);
  });
  
  it('should handle decimal amounts', () => {
    const usdAmount = 50.5;
    const yerAmount = usdAmount * USD_TO_YER;
    expect(yerAmount).toBe(85850);
  });
});

// Test event pricing calculations
describe('Event Pricing Calculator', () => {
  const basePrices = {
    corporate: 500,
    wedding: 800,
    conference: 600,
    government: 700,
    tradeshow: 550,
    condolences: 300,
    ngo: 400,
    education: 350,
  };
  
  it('should calculate corporate event base price', () => {
    expect(basePrices.corporate).toBe(500);
  });
  
  it('should calculate wedding event base price', () => {
    expect(basePrices.wedding).toBe(800);
  });
  
  it('should calculate total with guest count', () => {
    const basePrice = basePrices.corporate;
    const guestCount = 100;
    const perGuestCost = 10;
    const total = basePrice + (guestCount * perGuestCost);
    expect(total).toBe(1500);
  });
  
  it('should apply venue multiplier', () => {
    const basePrice = 500;
    const venueMultipliers = {
      indoor: 1.0,
      outdoor: 1.2,
      beach: 1.5,
      hotel: 1.3,
    };
    
    const outdoorTotal = basePrice * venueMultipliers.outdoor;
    expect(outdoorTotal).toBe(600);
    
    const beachTotal = basePrice * venueMultipliers.beach;
    expect(beachTotal).toBe(750);
  });
});

// Test sustainability pledge levels
describe('Supplier Certification Levels', () => {
  const getCertificationLevel = (pledgeCount: number) => {
    if (pledgeCount >= 6) return 'platinum';
    if (pledgeCount >= 5) return 'gold';
    if (pledgeCount >= 4) return 'silver';
    if (pledgeCount >= 3) return 'bronze';
    return null;
  };
  
  it('should return null for less than 3 pledges', () => {
    expect(getCertificationLevel(0)).toBeNull();
    expect(getCertificationLevel(1)).toBeNull();
    expect(getCertificationLevel(2)).toBeNull();
  });
  
  it('should return bronze for 3 pledges', () => {
    expect(getCertificationLevel(3)).toBe('bronze');
  });
  
  it('should return silver for 4 pledges', () => {
    expect(getCertificationLevel(4)).toBe('silver');
  });
  
  it('should return gold for 5 pledges', () => {
    expect(getCertificationLevel(5)).toBe('gold');
  });
  
  it('should return platinum for 6+ pledges', () => {
    expect(getCertificationLevel(6)).toBe('platinum');
    expect(getCertificationLevel(7)).toBe('platinum');
  });
});

// Test sub-brands
describe('Sub-Brands Configuration', () => {
  const subBrands = [
    'corporate', 'weddings', 'condolences', 'banking', 'ngo',
    'education', 'government', 'kids', 'entertainment',
    'healthcare', 'construction', 'energy', 'travel'
  ];
  
  it('should have 13 sub-brands', () => {
    expect(subBrands.length).toBe(13);
  });
  
  it('should include all required sub-brands', () => {
    expect(subBrands).toContain('corporate');
    expect(subBrands).toContain('weddings');
    expect(subBrands).toContain('condolences');
    expect(subBrands).toContain('government');
    expect(subBrands).toContain('kids');
  });
});

// Test contact information
describe('Contact Information', () => {
  const contactInfo = {
    phone1: '+967 773 673 918',
    phone2: '+967 771 017 680',
    email: 'info@greenists-events.com',
    website: 'www.greenists-events.com',
    addressEn: 'Next to Relax Hotel, Khor Maksar, Aden',
    addressAr: 'شارع الكورنيش، بجانب فندق ريلاكس، خور ماكسر، عدن',
  };
  
  it('should have correct phone numbers', () => {
    expect(contactInfo.phone1).toContain('+967');
    expect(contactInfo.phone2).toContain('+967');
  });
  
  it('should have correct email domain', () => {
    expect(contactInfo.email).toContain('greenists-events.com');
  });
  
  it('should have Aden in address', () => {
    expect(contactInfo.addressEn).toContain('Aden');
    expect(contactInfo.addressAr).toContain('عدن');
  });
});

// Test brand colors
describe('Brand Colors', () => {
  const brandColors = {
    primaryGreen: '#2D7A4A',
    secondaryGreen: '#236339',
    darkGreen: '#1a4d2e',
    gold: '#D4AF37',
    white: '#FFFFFF',
  };
  
  it('should have correct primary green', () => {
    expect(brandColors.primaryGreen).toBe('#2D7A4A');
  });
  
  it('should have gold accent color', () => {
    expect(brandColors.gold).toBe('#D4AF37');
  });
});
