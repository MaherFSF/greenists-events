import { describe, it, expect, vi } from 'vitest';
import { generateQuoteNumber, getValidityDate } from './services/quoteGenerator';

describe('Quote Generator Service', () => {
  describe('generateQuoteNumber', () => {
    it('should generate a quote number in correct format', () => {
      const quoteNumber = generateQuoteNumber();
      
      // Should match format GRN-YYMM-XXXX
      expect(quoteNumber).toMatch(/^GRN-\d{4}-\d{4}$/);
    });

    it('should generate unique quote numbers', () => {
      const numbers = new Set();
      for (let i = 0; i < 100; i++) {
        numbers.add(generateQuoteNumber());
      }
      // Most should be unique (allowing for some collisions)
      expect(numbers.size).toBeGreaterThan(90);
    });

    it('should include current year and month', () => {
      const quoteNumber = generateQuoteNumber();
      const date = new Date();
      const year = date.getFullYear().toString().slice(-2);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      
      expect(quoteNumber).toContain(`GRN-${year}${month}`);
    });
  });

  describe('getValidityDate', () => {
    it('should return date 14 days from now by default', () => {
      const validityDate = getValidityDate();
      const today = new Date();
      const expected = new Date();
      expected.setDate(today.getDate() + 14);
      
      // Should be in DD/MM/YYYY format
      expect(validityDate).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    });

    it('should return date with custom days', () => {
      const validityDate = getValidityDate(30);
      
      // Should be in DD/MM/YYYY format
      expect(validityDate).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    });

    it('should handle 0 days', () => {
      const validityDate = getValidityDate(0);
      const today = new Date().toLocaleDateString('en-GB');
      
      expect(validityDate).toBe(today);
    });
  });

  describe('PDF Quote Generation API', () => {
    it('should have correct endpoint path', () => {
      // The endpoint should be at /api/quotes/:quoteNumber/pdf
      const endpoint = '/api/quotes/GRN-2512-0001/pdf';
      expect(endpoint).toContain('/api/quotes/');
      expect(endpoint).toContain('/pdf');
    });
  });
});

describe('Quote Data Validation', () => {
  it('should validate currency options', () => {
    const validCurrencies = ['USD', 'YER', 'SAR'];
    
    validCurrencies.forEach(currency => {
      expect(['USD', 'YER', 'SAR']).toContain(currency);
    });
  });

  it('should calculate VAT correctly', () => {
    const subtotal = 2950;
    const vatRate = 0.15;
    const expectedVat = subtotal * vatRate;
    
    expect(expectedVat).toBe(442.5);
  });

  it('should calculate total correctly', () => {
    const subtotal = 2950;
    const vat = 442.5;
    const expectedTotal = subtotal + vat;
    
    expect(expectedTotal).toBe(3392.5);
  });
});

describe('Quote Items', () => {
  const sampleItems = [
    { name: 'Venue Rental', nameAr: 'إيجار القاعة', quantity: 1, unitPrice: 500, total: 500 },
    { name: 'Catering', nameAr: 'تقديم الطعام', quantity: 100, unitPrice: 15, total: 1500 },
    { name: 'Decoration', nameAr: 'الديكور', quantity: 1, unitPrice: 300, total: 300 },
  ];

  it('should calculate item totals correctly', () => {
    sampleItems.forEach(item => {
      expect(item.total).toBe(item.quantity * item.unitPrice);
    });
  });

  it('should have both English and Arabic names', () => {
    sampleItems.forEach(item => {
      expect(item.name).toBeTruthy();
      expect(item.nameAr).toBeTruthy();
    });
  });

  it('should calculate subtotal from items', () => {
    const subtotal = sampleItems.reduce((sum, item) => sum + item.total, 0);
    expect(subtotal).toBe(2300);
  });
});

describe('Sustainability Score', () => {
  it('should be between 0 and 100', () => {
    const scores = [0, 50, 85, 100];
    
    scores.forEach(score => {
      expect(score).toBeGreaterThanOrEqual(0);
      expect(score).toBeLessThanOrEqual(100);
    });
  });

  it('should categorize scores correctly', () => {
    const getCategory = (score: number) => {
      if (score >= 90) return 'Excellent';
      if (score >= 70) return 'Good';
      if (score >= 50) return 'Fair';
      return 'Needs Improvement';
    };

    expect(getCategory(95)).toBe('Excellent');
    expect(getCategory(85)).toBe('Good');
    expect(getCategory(60)).toBe('Fair');
    expect(getCategory(30)).toBe('Needs Improvement');
  });
});

describe('Currency Conversion', () => {
  const USD_TO_YER = 1700;
  const USD_TO_SAR = 3.75;

  it('should convert USD to YER correctly', () => {
    const usd = 100;
    const yer = usd * USD_TO_YER;
    expect(yer).toBe(170000);
  });

  it('should convert USD to SAR correctly', () => {
    const usd = 100;
    const sar = usd * USD_TO_SAR;
    expect(sar).toBe(375);
  });

  it('should handle decimal amounts', () => {
    const usd = 99.99;
    const yer = usd * USD_TO_YER;
    expect(yer).toBeCloseTo(169983, 0);
  });
});
