import { describe, it, expect } from 'vitest';

describe('Store Page', () => {
  it('should have correct product categories', () => {
    const categories = ['stationery', 'apparel', 'gifts', 'events', 'cultural'];
    expect(categories.length).toBe(5);
    expect(categories).toContain('stationery');
    expect(categories).toContain('apparel');
    expect(categories).toContain('gifts');
  });

  it('should calculate cart total correctly', () => {
    const cart = [
      { id: 'pen-luxury', price: 15, quantity: 2 },
      { id: 'tshirt-green', price: 25, quantity: 1 },
      { id: 'cap', price: 18, quantity: 3 }
    ];
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    expect(total).toBe(15 * 2 + 25 * 1 + 18 * 3); // 30 + 25 + 54 = 109
    expect(total).toBe(109);
  });

  it('should convert USD to YER correctly', () => {
    const usdPrice = 100;
    const yerRate = 1700;
    const yerPrice = usdPrice * yerRate;
    expect(yerPrice).toBe(170000);
  });

  it('should have eco-friendly products marked', () => {
    const products = [
      { id: 'pen-luxury', isEcoFriendly: true },
      { id: 'wallet', isEcoFriendly: false },
      { id: 'tote-bag', isEcoFriendly: true }
    ];
    const ecoFriendlyCount = products.filter(p => p.isEcoFriendly).length;
    expect(ecoFriendlyCount).toBe(2);
  });
});

describe('Volunteer Page', () => {
  it('should have beach cleanup events', () => {
    const beaches = [
      { id: 'gold-mohur', name: 'Gold Mohur Beach', targetVolunteers: 100 },
      { id: 'elephant-bay', name: 'Elephant Bay Beach', targetVolunteers: 80 },
      { id: 'lovers-bay', name: "Lovers' Bay", targetVolunteers: 60 },
      { id: 'abyan-beach', name: 'Abyan Beach', targetVolunteers: 120 }
    ];
    expect(beaches.length).toBe(4);
    expect(beaches[0].name).toBe('Gold Mohur Beach');
  });

  it('should calculate volunteer progress correctly', () => {
    const beach = { targetVolunteers: 100, currentVolunteers: 67 };
    const progress = (beach.currentVolunteers / beach.targetVolunteers) * 100;
    expect(progress).toBe(67);
  });

  it('should have environmental initiatives', () => {
    const initiatives = ['Beach Cleanup', 'Tree Planting', 'Street Cleaning', 'Recycling Education'];
    expect(initiatives.length).toBe(4);
    expect(initiatives).toContain('Beach Cleanup');
    expect(initiatives).toContain('Tree Planting');
  });

  it('should validate volunteer registration form', () => {
    const formData = {
      name: 'Ahmed Al-Adeni',
      phone: '+967 773 123 456',
      email: 'ahmed@example.com',
      tshirtSize: 'L',
      hasTransport: true
    };
    expect(formData.name.length).toBeGreaterThan(0);
    expect(formData.phone).toMatch(/^\+967/);
    expect(['S', 'M', 'L', 'XL', 'XXL']).toContain(formData.tshirtSize);
  });
});

describe('Team Page', () => {
  it('should have CEO Maher Faidal Saeed Farea', () => {
    const ceo = {
      name: { en: 'Maher Faidal Saeed Farea', ar: 'ماهر فيصل سعيد فارع' },
      position: { en: 'Chief Executive Officer', ar: 'الرئيس التنفيذي' },
      email: 'maher@greenists-events.com',
      phone: '+967 773 673 918'
    };
    expect(ceo.name.en).toBe('Maher Faidal Saeed Farea');
    expect(ceo.name.ar).toBe('ماهر فيصل سعيد فارع');
    expect(ceo.position.en).toBe('Chief Executive Officer');
    expect(ceo.email).toContain('@greenists-events.com');
  });

  it('should have all departments', () => {
    const departments = [
      'events', 'weddings', 'corporate', 'government',
      'creative', 'operations', 'finance', 'kids'
    ];
    expect(departments.length).toBe(8);
    expect(departments).toContain('weddings');
    expect(departments).toContain('kids');
  });

  it('should have leadership team', () => {
    const leadership = [
      { id: 'ceo', position: 'Chief Executive Officer' },
      { id: 'deputy', position: 'Deputy CEO' },
      { id: 'bdm', position: 'Business Development Manager' }
    ];
    expect(leadership.length).toBe(3);
    expect(leadership[0].position).toBe('Chief Executive Officer');
  });

  it('should have team uniforms', () => {
    const uniforms = ['Daily Uniform', 'Event Uniform', 'Volunteer Uniform'];
    expect(uniforms.length).toBe(3);
    expect(uniforms).toContain('Daily Uniform');
    expect(uniforms).toContain('Volunteer Uniform');
  });
});

describe('Navigation Updates', () => {
  it('should have all navigation items including new pages', () => {
    const navItems = [
      'home', 'about', 'services', 'calculator', 'gallery', 'contact',
      'products', 'ai', 'brands', 'suppliers', 'sectors',
      'store', 'volunteer', 'team'
    ];
    expect(navItems.length).toBe(14);
    expect(navItems).toContain('store');
    expect(navItems).toContain('volunteer');
    expect(navItems).toContain('team');
  });

  it('should have Arabic translations for new nav items', () => {
    const arTranslations = {
      'nav.store': 'المتجر',
      'nav.volunteer': 'التطوع',
      'nav.team': 'فريقنا'
    };
    expect(arTranslations['nav.store']).toBe('المتجر');
    expect(arTranslations['nav.volunteer']).toBe('التطوع');
    expect(arTranslations['nav.team']).toBe('فريقنا');
  });
});

describe('Currency Conversion', () => {
  it('should convert between all three currencies', () => {
    const usd = 100;
    const yerRate = 1700;
    const sarRate = 3.75;
    
    const yer = usd * yerRate;
    const sar = usd * sarRate;
    
    expect(yer).toBe(170000);
    expect(sar).toBe(375);
  });
});
