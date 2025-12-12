import { describe, it, expect } from 'vitest';

// Exchange rate constant
const USD_TO_YER = 1700;

// Calculator logic (extracted for testing)
function calculateEventCost(input: {
  eventType: string;
  venueType: string;
  cateringLevel: string;
  decorationLevel: string;
  guestCount: number;
}) {
  const { eventType, venueType, cateringLevel, decorationLevel, guestCount } = input;
  
  // Base prices in USD
  const eventPrices: Record<string, { base: number; perGuest: number }> = {
    corporate: { base: 500, perGuest: 15 },
    wedding: { base: 1000, perGuest: 25 },
    conference: { base: 800, perGuest: 20 },
    government: { base: 1200, perGuest: 30 },
    tradeshow: { base: 1500, perGuest: 10 },
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
  
  const event = eventPrices[eventType] || eventPrices.corporate;
  const venue = venuePrices[venueType] || venuePrices.indoor;
  const catering = cateringPrices[cateringLevel] || cateringPrices.standard;
  const decoration = decorationPrices[decorationLevel] || decorationPrices.standard;
  
  const eventCost = event.base + (event.perGuest * guestCount);
  const venueCost = venue.base + (venue.perGuest * guestCount);
  const cateringCost = catering.base + (catering.perGuest * guestCount);
  const decorationCost = decoration.base + (decoration.perGuest * guestCount);
  
  const subtotalUsd = eventCost + venueCost + cateringCost + decorationCost;
  const serviceFeeUsd = subtotalUsd * 0.15;
  const totalUsd = subtotalUsd + serviceFeeUsd;
  const totalYer = totalUsd * USD_TO_YER;
  
  return {
    breakdown: {
      eventCost,
      venueCost,
      cateringCost,
      decorationCost,
      subtotalUsd,
      serviceFeeUsd,
    },
    totalUsd,
    totalYer,
    exchangeRate: USD_TO_YER,
  };
}

describe('Event Cost Calculator', () => {
  it('should calculate corporate event with 100 guests correctly', () => {
    const result = calculateEventCost({
      eventType: 'corporate',
      venueType: 'indoor',
      cateringLevel: 'standard',
      decorationLevel: 'standard',
      guestCount: 100,
    });
    
    // Event: 500 + (15 * 100) = 2000
    expect(result.breakdown.eventCost).toBe(2000);
    
    // Venue: 200 + (5 * 100) = 700
    expect(result.breakdown.venueCost).toBe(700);
    
    // Catering: 100 + (20 * 100) = 2100
    expect(result.breakdown.cateringCost).toBe(2100);
    
    // Decoration: 300 + (5 * 100) = 800
    expect(result.breakdown.decorationCost).toBe(800);
    
    // Subtotal: 2000 + 700 + 2100 + 800 = 5600
    expect(result.breakdown.subtotalUsd).toBe(5600);
    
    // Service fee: 5600 * 0.15 = 840
    expect(result.breakdown.serviceFeeUsd).toBe(840);
    
    // Total USD: 5600 + 840 = 6440
    expect(result.totalUsd).toBe(6440);
    
    // Total YER: 6440 * 1700 = 10,948,000
    expect(result.totalYer).toBe(10948000);
  });

  it('should calculate wedding with 200 guests at beach venue', () => {
    const result = calculateEventCost({
      eventType: 'wedding',
      venueType: 'beach',
      cateringLevel: 'luxury',
      decorationLevel: 'elegant',
      guestCount: 200,
    });
    
    // Event: 1000 + (25 * 200) = 6000
    expect(result.breakdown.eventCost).toBe(6000);
    
    // Venue: 800 + (15 * 200) = 3800
    expect(result.breakdown.venueCost).toBe(3800);
    
    // Catering: 500 + (50 * 200) = 10500
    expect(result.breakdown.cateringCost).toBe(10500);
    
    // Decoration: 600 + (8 * 200) = 2200
    expect(result.breakdown.decorationCost).toBe(2200);
    
    // Subtotal: 6000 + 3800 + 10500 + 2200 = 22500
    expect(result.breakdown.subtotalUsd).toBe(22500);
  });

  it('should use default prices for unknown types', () => {
    const result = calculateEventCost({
      eventType: 'unknown',
      venueType: 'unknown',
      cateringLevel: 'unknown',
      decorationLevel: 'unknown',
      guestCount: 50,
    });
    
    // Should fall back to corporate, indoor, standard, standard
    // Event: 500 + (15 * 50) = 1250
    expect(result.breakdown.eventCost).toBe(1250);
    
    // Venue: 200 + (5 * 50) = 450
    expect(result.breakdown.venueCost).toBe(450);
  });

  it('should handle minimum guest count', () => {
    const result = calculateEventCost({
      eventType: 'corporate',
      venueType: 'indoor',
      cateringLevel: 'basic',
      decorationLevel: 'minimal',
      guestCount: 1,
    });
    
    // Event: 500 + (15 * 1) = 515
    expect(result.breakdown.eventCost).toBe(515);
    expect(result.totalUsd).toBeGreaterThan(0);
  });

  it('should handle large guest count', () => {
    const result = calculateEventCost({
      eventType: 'tradeshow',
      venueType: 'hotel',
      cateringLevel: 'premium',
      decorationLevel: 'luxury',
      guestCount: 1000,
    });
    
    // Event: 1500 + (10 * 1000) = 11500
    expect(result.breakdown.eventCost).toBe(11500);
    
    // Should have valid totals
    expect(result.totalUsd).toBeGreaterThan(0);
    expect(result.totalYer).toBe(result.totalUsd * USD_TO_YER);
  });

  it('should always include 15% service fee', () => {
    const result = calculateEventCost({
      eventType: 'conference',
      venueType: 'hotel',
      cateringLevel: 'standard',
      decorationLevel: 'standard',
      guestCount: 150,
    });
    
    expect(result.breakdown.serviceFeeUsd).toBe(result.breakdown.subtotalUsd * 0.15);
  });

  it('should use correct exchange rate of 1700 YER per USD', () => {
    const result = calculateEventCost({
      eventType: 'corporate',
      venueType: 'indoor',
      cateringLevel: 'standard',
      decorationLevel: 'standard',
      guestCount: 100,
    });
    
    expect(result.exchangeRate).toBe(1700);
    expect(result.totalYer).toBe(result.totalUsd * 1700);
  });
});
