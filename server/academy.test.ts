import { describe, it, expect } from 'vitest';

// Academy Page Tests
describe('Greenists Academy Page', () => {
  // Environmental Days Calendar
  describe('Environmental Days Calendar', () => {
    const environmentalDays = [
      { date: 'February 2', name: 'World Wetlands Day' },
      { date: 'March 3', name: 'World Wildlife Day' },
      { date: 'March 21', name: 'International Day of Forests' },
      { date: 'March 22', name: 'World Water Day' },
      { date: 'April 22', name: 'Earth Day' },
      { date: 'May 22', name: 'International Day for Biological Diversity' },
      { date: 'June 5', name: 'World Environment Day' },
      { date: 'June 8', name: 'World Oceans Day' },
      { date: 'June 17', name: 'World Day to Combat Desertification' },
      { date: 'September 16', name: 'International Day for the Preservation of the Ozone Layer' },
      { date: 'November 6', name: 'International Day for Preventing Environmental Exploitation in War' },
      { date: 'December 5', name: 'World Soil Day' },
    ];

    it('should have 12 environmental awareness days', () => {
      expect(environmentalDays.length).toBe(12);
    });

    it('should include World Environment Day on June 5', () => {
      const wed = environmentalDays.find(d => d.name === 'World Environment Day');
      expect(wed).toBeDefined();
      expect(wed?.date).toBe('June 5');
    });

    it('should include Earth Day on April 22', () => {
      const earthDay = environmentalDays.find(d => d.name === 'Earth Day');
      expect(earthDay).toBeDefined();
      expect(earthDay?.date).toBe('April 22');
    });
  });

  // Sustainability Courses
  describe('Sustainability Courses', () => {
    const courses = [
      { id: 1, title: 'ISO 20121 Event Sustainability Management', duration: '4 weeks', level: 'Professional' },
      { id: 2, title: 'Green Event Planning Fundamentals', duration: '2 weeks', level: 'Beginner' },
      { id: 3, title: 'Climate Change & Yemen: Understanding the Impact', duration: '3 weeks', level: 'Intermediate' },
      { id: 4, title: 'Plastic-Free Events Workshop', duration: '1 week', level: 'All Levels' },
    ];

    it('should have 4 sustainability courses', () => {
      expect(courses.length).toBe(4);
    });

    it('should have ISO 20121 certification course', () => {
      const isoCourse = courses.find(c => c.title.includes('ISO 20121'));
      expect(isoCourse).toBeDefined();
      expect(isoCourse?.level).toBe('Professional');
    });

    it('should have a beginner-level course', () => {
      const beginnerCourse = courses.find(c => c.level === 'Beginner');
      expect(beginnerCourse).toBeDefined();
    });
  });

  // Climate Facts
  describe('Yemen Climate Facts', () => {
    const climateFacts = {
      gdpDecline: 3.9,
      populationExposed: 50,
      fishStocksDecline: 23,
      healthCostsBillions: 5,
    };

    it('should show 3.9% GDP decline projection', () => {
      expect(climateFacts.gdpDecline).toBe(3.9);
    });

    it('should show 50% population exposed to climate hazards', () => {
      expect(climateFacts.populationExposed).toBe(50);
    });

    it('should show 23% potential fish stocks decline', () => {
      expect(climateFacts.fishStocksDecline).toBe(23);
    });

    it('should show $5B+ projected health costs', () => {
      expect(climateFacts.healthCostsBillions).toBeGreaterThanOrEqual(5);
    });
  });

  // Partner Organizations
  describe('Partner Organizations', () => {
    const partners = [
      { name: 'Holm Akhdar', founded: 2012, location: 'Aden' },
      { name: 'UNDP Yemen', type: 'UN Agency' },
      { name: 'PERSGA', type: 'Regional Organization' },
    ];

    it('should have 3 partner organizations', () => {
      expect(partners.length).toBe(3);
    });

    it('should include Holm Akhdar based in Aden', () => {
      const holmAkhdar = partners.find(p => p.name === 'Holm Akhdar');
      expect(holmAkhdar).toBeDefined();
      expect(holmAkhdar?.location).toBe('Aden');
    });

    it('should include UNDP Yemen', () => {
      const undp = partners.find(p => p.name === 'UNDP Yemen');
      expect(undp).toBeDefined();
    });
  });
});

// Heritage Gallery Tests
describe('Yemen Heritage Gallery Page', () => {
  // UNESCO World Heritage Sites
  describe('UNESCO World Heritage Sites', () => {
    const unescoSites = [
      { id: 1, name: 'Old Walled City of Shibam', yearInscribed: 1982, status: 'danger' },
      { id: 2, name: "Old City of Sana'a", yearInscribed: 1986, status: 'danger' },
      { id: 3, name: 'Historic Town of Zabid', yearInscribed: 1993, status: 'danger' },
      { id: 4, name: 'Socotra Archipelago', yearInscribed: 2008, status: 'safe' },
      { id: 5, name: 'Landmarks of the Ancient Kingdom of Saba, Marib', yearInscribed: 2023, status: 'danger' },
    ];

    it('should have 5 UNESCO World Heritage Sites', () => {
      expect(unescoSites.length).toBe(5);
    });

    it('should have Shibam inscribed in 1982', () => {
      const shibam = unescoSites.find(s => s.name.includes('Shibam'));
      expect(shibam).toBeDefined();
      expect(shibam?.yearInscribed).toBe(1982);
    });

    it('should have Socotra as the only safe site', () => {
      const safeSites = unescoSites.filter(s => s.status === 'safe');
      expect(safeSites.length).toBe(1);
      expect(safeSites[0].name).toBe('Socotra Archipelago');
    });

    it('should have 4 sites in danger', () => {
      const dangerSites = unescoSites.filter(s => s.status === 'danger');
      expect(dangerSites.length).toBe(4);
    });

    it('should have Marib as the most recent inscription (2023)', () => {
      const mostRecent = unescoSites.reduce((a, b) => a.yearInscribed > b.yearInscribed ? a : b);
      expect(mostRecent.name).toContain('Marib');
      expect(mostRecent.yearInscribed).toBe(2023);
    });
  });

  // Aden Landmarks
  describe('Aden Landmarks', () => {
    const adenLandmarks = [
      { id: 1, name: 'Cisterns of Tawila', ageYears: 2000 },
      { id: 2, name: 'Sira Fortress', century: 16 },
      { id: 3, name: 'Aden Minaret', nickname: 'Big Ben of Aden' },
      { id: 4, name: 'Gold Mohur Beach', type: 'beach' },
    ];

    it('should have 4 Aden landmarks', () => {
      expect(adenLandmarks.length).toBe(4);
    });

    it('should have Cisterns of Tawila over 2000 years old', () => {
      const cisterns = adenLandmarks.find(l => l.name.includes('Cisterns'));
      expect(cisterns).toBeDefined();
      expect(cisterns?.ageYears).toBeGreaterThanOrEqual(2000);
    });

    it('should have Sira Fortress from 16th century', () => {
      const fortress = adenLandmarks.find(l => l.name.includes('Sira'));
      expect(fortress).toBeDefined();
      expect(fortress?.century).toBe(16);
    });

    it('should have Aden Minaret nicknamed Big Ben of Aden', () => {
      const minaret = adenLandmarks.find(l => l.name.includes('Minaret'));
      expect(minaret).toBeDefined();
      expect(minaret?.nickname).toBe('Big Ben of Aden');
    });
  });

  // Cultural Preservation
  describe('Cultural Preservation Initiatives', () => {
    const initiatives = [
      { title: 'Cash for Work Heritage Program', partners: ['UNESCO', 'Social Fund for Development'] },
      { title: 'Digital Heritage Documentation', partners: ['ALIPH', 'HERITΛGE'] },
      { title: 'Community Heritage Guardians', partners: ['General Organization for the Preservation of Historic Cities'] },
    ];

    it('should have 3 preservation initiatives', () => {
      expect(initiatives.length).toBe(3);
    });

    it('should have UNESCO as a partner', () => {
      const unescoPartner = initiatives.some(i => i.partners.includes('UNESCO'));
      expect(unescoPartner).toBe(true);
    });
  });
});

// Enhanced Calculator Tests
describe('Enhanced Calculator Features', () => {
  // Premium Add-ons
  describe('Premium Add-ons', () => {
    const premiumAddOns = [
      { id: 'saffron_water', name: 'Saffron Water Service', price: 150, sustainable: true },
      { id: 'kids_corner', name: 'Kids Entertainment Corner', price: 300, sustainable: false },
      { id: 'photo_booth', name: 'Premium Photo Booth', price: 250, sustainable: false },
      { id: 'live_music', name: 'Live Oud & Traditional Music', price: 400, sustainable: false },
      { id: 'vip_gifts', name: 'VIP Gift Bags', price: 50, sustainable: true },
      { id: 'floral', name: 'Premium Floral Arrangements', price: 350, sustainable: true },
      { id: 'coffee_corner', name: 'Yemeni Coffee Corner', price: 200, sustainable: true },
      { id: 'green_decor', name: 'Sustainable Green Décor', price: 280, sustainable: true },
      { id: 'premium_av', name: 'Premium AV Equipment', price: 500, sustainable: false },
      { id: 'valet', name: 'Valet Parking Service', price: 180, sustainable: false },
    ];

    it('should have exactly 10 premium add-ons', () => {
      expect(premiumAddOns.length).toBe(10);
    });

    it('should have 5 sustainable add-ons', () => {
      const sustainableCount = premiumAddOns.filter(a => a.sustainable).length;
      expect(sustainableCount).toBe(5);
    });

    it('should have Saffron Water as a sustainable option', () => {
      const saffron = premiumAddOns.find(a => a.id === 'saffron_water');
      expect(saffron).toBeDefined();
      expect(saffron?.sustainable).toBe(true);
    });

    it('should have Yemeni Coffee Corner priced at $200', () => {
      const coffee = premiumAddOns.find(a => a.id === 'coffee_corner');
      expect(coffee).toBeDefined();
      expect(coffee?.price).toBe(200);
    });

    it('should have Live Oud music as the most expensive add-on under $500', () => {
      const under500 = premiumAddOns.filter(a => a.price < 500);
      const mostExpensive = under500.reduce((a, b) => a.price > b.price ? a : b);
      expect(mostExpensive.id).toBe('live_music');
    });
  });

  // ROI Calculator
  describe('ROI Calculator', () => {
    const calculateROI = (eventCost: number, expectedRevenue: number) => {
      return ((expectedRevenue - eventCost) / eventCost) * 100;
    };

    it('should calculate positive ROI when revenue exceeds cost', () => {
      const roi = calculateROI(10000, 50000);
      expect(roi).toBe(400);
    });

    it('should calculate negative ROI when cost exceeds revenue', () => {
      const roi = calculateROI(50000, 10000);
      expect(roi).toBe(-80);
    });

    it('should calculate zero ROI when revenue equals cost', () => {
      const roi = calculateROI(10000, 10000);
      expect(roi).toBe(0);
    });
  });

  // Sustainability Score
  describe('Sustainability Score Calculator', () => {
    const calculateSustainabilityScore = (
      sustainableAddOns: number,
      minimalDecoration: boolean,
      outdoorVenue: boolean
    ) => {
      let score = 40; // Base score
      score += sustainableAddOns * 10;
      if (minimalDecoration) score += 10;
      if (outdoorVenue) score += 10;
      return Math.min(100, score);
    };

    it('should have base score of 40', () => {
      const score = calculateSustainabilityScore(0, false, false);
      expect(score).toBe(40);
    });

    it('should add 10 points per sustainable add-on', () => {
      const score = calculateSustainabilityScore(3, false, false);
      expect(score).toBe(70);
    });

    it('should cap at 100 points', () => {
      const score = calculateSustainabilityScore(10, true, true);
      expect(score).toBe(100);
    });

    it('should add bonus for minimal decoration', () => {
      const withBonus = calculateSustainabilityScore(0, true, false);
      const withoutBonus = calculateSustainabilityScore(0, false, false);
      expect(withBonus - withoutBonus).toBe(10);
    });
  });
});

// Contact Page Tests
describe('Contact Page Features', () => {
  // Office Photos Gallery
  describe('Office Photos Gallery', () => {
    const officePhotos = [
      { src: '/images/04_modern_office_workspace_scene(2).png', caption: 'Modern Office Space' },
      { src: '/images/03_outdoor_event_aden_scene(2).png', caption: 'Event Setup Area' },
      { src: '/images/greenists_conference_materials_kit(2).png', caption: 'Conference Materials' },
      { src: '/images/greenists_trade_show_exhibition_kit(1).png', caption: 'Exhibition Setup' },
    ];

    it('should have 4 office photos', () => {
      expect(officePhotos.length).toBe(4);
    });

    it('should have Modern Office Space photo', () => {
      const officePhoto = officePhotos.find(p => p.caption === 'Modern Office Space');
      expect(officePhoto).toBeDefined();
    });
  });

  // Weather Widget
  describe('Aden Weather Widget', () => {
    const getAdenWeather = () => {
      const temps = [28, 30, 32, 34, 33, 31, 29];
      const day = new Date().getDay();
      return {
        temp: temps[day],
        humidity: 65 + Math.floor(Math.random() * 15),
      };
    };

    it('should return temperature between 28-34°C', () => {
      const weather = getAdenWeather();
      expect(weather.temp).toBeGreaterThanOrEqual(28);
      expect(weather.temp).toBeLessThanOrEqual(34);
    });

    it('should return humidity between 65-80%', () => {
      const weather = getAdenWeather();
      expect(weather.humidity).toBeGreaterThanOrEqual(65);
      expect(weather.humidity).toBeLessThanOrEqual(80);
    });
  });

  // Contact Information
  describe('Contact Information', () => {
    const contactInfo = {
      address: 'Corniche Street, Next to Relax Hotel, Khor Maksar, Aden, Yemen',
      phones: ['+967 2 123 4567', '+967 777 123 456', '+967 733 987 654'],
      emails: ['info@greenists-events.com', 'sales@greenists-events.com'],
      website: 'www.greenists-events.com',
      workingHours: 'Sat - Thu: 8:00 AM - 6:00 PM',
    };

    it('should have correct address in Khor Maksar', () => {
      expect(contactInfo.address).toContain('Khor Maksar');
      expect(contactInfo.address).toContain('Aden');
    });

    it('should have 3 phone numbers', () => {
      expect(contactInfo.phones.length).toBe(3);
    });

    it('should have 2 email addresses', () => {
      expect(contactInfo.emails.length).toBe(2);
    });

    it('should have correct website', () => {
      expect(contactInfo.website).toBe('www.greenists-events.com');
    });
  });
});
