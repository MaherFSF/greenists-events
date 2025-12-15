import { describe, it, expect } from 'vitest';

// Exchange rates
const EXCHANGE_RATES = {
  USD: 1,
  YER: 1700,
  SAR: 3.75,
};

type Currency = 'USD' | 'YER' | 'SAR';

// Calculator logic extracted for testing
interface PriceBreakdown {
  eventCost: number;
  venueCost: number;
  cateringCost: number;
  decorationCost: number;
  subtotal: number;
  serviceFee: number;
  total: number;
}

const eventPrices: Record<string, { base: number; perGuest: number }> = {
  corporate: { base: 500, perGuest: 15 },
  wedding: { base: 1000, perGuest: 25 },
  conference: { base: 800, perGuest: 20 },
  government: { base: 1200, perGuest: 30 },
  tradeshow: { base: 1500, perGuest: 10 },
  educational: { base: 400, perGuest: 12 },
  entertainment: { base: 700, perGuest: 18 },
};

const venuePrices: Record<string, { base: number; perGuest: number }> = {
  indoor: { base: 200, perGuest: 5 },
  outdoor: { base: 300, perGuest: 7 },
  hotel: { base: 500, perGuest: 10 },
  beach: { base: 800, perGuest: 15 },
};

const cateringPrices: Record<string, { base: number; perGuest: number }> = {
  basic: { base: 0, perGuest: 10 },
  standard: { base: 100, perGuest: 20 },
  premium: { base: 300, perGuest: 35 },
  luxury: { base: 500, perGuest: 50 },
};

const decorationPrices: Record<string, { base: number; perGuest: number }> = {
  minimal: { base: 100, perGuest: 2 },
  standard: { base: 300, perGuest: 5 },
  elegant: { base: 600, perGuest: 8 },
  luxury: { base: 1000, perGuest: 12 },
};

function calculateEventCost(
  eventType: string,
  venueType: string,
  cateringLevel: string,
  decorationLevel: string,
  guestCount: number
): PriceBreakdown {
  const event = eventPrices[eventType];
  const venue = venuePrices[venueType];
  const catering = cateringPrices[cateringLevel];
  const decoration = decorationPrices[decorationLevel];

  const eventCost = event.base + (event.perGuest * guestCount);
  const venueCost = venue.base + (venue.perGuest * guestCount);
  const cateringCost = catering.base + (catering.perGuest * guestCount);
  const decorationCost = decoration.base + (decoration.perGuest * guestCount);

  const subtotal = eventCost + venueCost + cateringCost + decorationCost;
  const serviceFee = subtotal * 0.15;
  const total = subtotal + serviceFee;

  return {
    eventCost,
    venueCost,
    cateringCost,
    decorationCost,
    subtotal,
    serviceFee,
    total,
  };
}

function convertCurrency(amountUsd: number, currency: Currency): number {
  return amountUsd * EXCHANGE_RATES[currency];
}

describe('Event Cost Calculator', () => {
  describe('calculateEventCost', () => {
    it('should calculate corporate event with 100 guests correctly', () => {
      const result = calculateEventCost('corporate', 'indoor', 'standard', 'standard', 100);
      
      // Event: 500 + (15 * 100) = 2000
      expect(result.eventCost).toBe(2000);
      // Venue: 200 + (5 * 100) = 700
      expect(result.venueCost).toBe(700);
      // Catering: 100 + (20 * 100) = 2100
      expect(result.cateringCost).toBe(2100);
      // Decoration: 300 + (5 * 100) = 800
      expect(result.decorationCost).toBe(800);
      // Subtotal: 2000 + 700 + 2100 + 800 = 5600
      expect(result.subtotal).toBe(5600);
      // Service fee: 5600 * 0.15 = 840
      expect(result.serviceFee).toBe(840);
      // Total: 5600 + 840 = 6440
      expect(result.total).toBe(6440);
    });

    it('should calculate wedding event with 300 guests correctly', () => {
      const result = calculateEventCost('wedding', 'beach', 'luxury', 'luxury', 300);
      
      // Event: 1000 + (25 * 300) = 8500
      expect(result.eventCost).toBe(8500);
      // Venue: 800 + (15 * 300) = 5300
      expect(result.venueCost).toBe(5300);
      // Catering: 500 + (50 * 300) = 15500
      expect(result.cateringCost).toBe(15500);
      // Decoration: 1000 + (12 * 300) = 4600
      expect(result.decorationCost).toBe(4600);
      // Subtotal: 8500 + 5300 + 15500 + 4600 = 33900
      expect(result.subtotal).toBe(33900);
      // Service fee: 33900 * 0.15 = 5085
      expect(result.serviceFee).toBe(5085);
      // Total: 33900 + 5085 = 38985
      expect(result.total).toBe(38985);
    });

    it('should calculate government event with 500 guests correctly', () => {
      const result = calculateEventCost('government', 'hotel', 'premium', 'elegant', 500);
      
      // Event: 1200 + (30 * 500) = 16200
      expect(result.eventCost).toBe(16200);
      // Venue: 500 + (10 * 500) = 5500
      expect(result.venueCost).toBe(5500);
      // Catering: 300 + (35 * 500) = 17800
      expect(result.cateringCost).toBe(17800);
      // Decoration: 600 + (8 * 500) = 4600
      expect(result.decorationCost).toBe(4600);
      // Subtotal: 16200 + 5500 + 17800 + 4600 = 44100
      expect(result.subtotal).toBe(44100);
      // Service fee: 44100 * 0.15 = 6615
      expect(result.serviceFee).toBe(6615);
      // Total: 44100 + 6615 = 50715
      expect(result.total).toBe(50715);
    });

    it('should handle minimum guests (10)', () => {
      const result = calculateEventCost('educational', 'indoor', 'basic', 'minimal', 10);
      
      // Event: 400 + (12 * 10) = 520
      expect(result.eventCost).toBe(520);
      // Venue: 200 + (5 * 10) = 250
      expect(result.venueCost).toBe(250);
      // Catering: 0 + (10 * 10) = 100
      expect(result.cateringCost).toBe(100);
      // Decoration: 100 + (2 * 10) = 120
      expect(result.decorationCost).toBe(120);
      // Subtotal: 520 + 250 + 100 + 120 = 990
      expect(result.subtotal).toBe(990);
    });
  });

  describe('Currency Conversion', () => {
    it('should convert USD to YER correctly (1 USD = 1700 YER)', () => {
      expect(convertCurrency(100, 'YER')).toBe(170000);
      expect(convertCurrency(1, 'YER')).toBe(1700);
      expect(convertCurrency(6440, 'YER')).toBe(10948000);
    });

    it('should convert USD to SAR correctly (1 USD = 3.75 SAR)', () => {
      expect(convertCurrency(100, 'SAR')).toBe(375);
      expect(convertCurrency(1, 'SAR')).toBe(3.75);
      expect(convertCurrency(6440, 'SAR')).toBe(24150);
    });

    it('should keep USD as is', () => {
      expect(convertCurrency(100, 'USD')).toBe(100);
      expect(convertCurrency(6440, 'USD')).toBe(6440);
    });
  });

  describe('Exchange Rates', () => {
    it('should have correct exchange rates defined', () => {
      expect(EXCHANGE_RATES.USD).toBe(1);
      expect(EXCHANGE_RATES.YER).toBe(1700);
      expect(EXCHANGE_RATES.SAR).toBe(3.75);
    });
  });
});
