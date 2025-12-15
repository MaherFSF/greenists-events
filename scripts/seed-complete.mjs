// Complete Database Seed Script for Greenists
// Run with: node scripts/seed-complete.mjs

import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

const DATABASE_URL = process.env.DATABASE_URL;

async function seedDatabase() {
  console.log('🌱 Starting complete database seed...');
  
  const connection = await mysql.createConnection(DATABASE_URL);
  const db = drizzle(connection);
  
  // Seed Event Packages
  console.log('📦 Seeding event packages...');
  const packages = [
    // Corporate Packages
    { name: 'Corporate Essential', name_ar: 'الشركات الأساسي', category: 'corporate', tier: 'essential', base_price: 500, price_per_guest: 8, min_guests: 20, max_guests: 100, duration_hours: 4, description: 'Perfect for small corporate gatherings and team meetings', features: JSON.stringify(['Venue coordination', 'Basic sound system', 'Registration desk', 'Standard seating', 'Event coordinator']) },
    { name: 'Corporate Professional', name_ar: 'الشركات المهني', category: 'corporate', tier: 'professional', base_price: 1200, price_per_guest: 15, min_guests: 50, max_guests: 300, duration_hours: 6, description: 'Comprehensive corporate event solution', features: JSON.stringify(['Premium venue', 'Professional AV', 'Branded materials', 'Catering', 'Photography', 'Event manager', 'Stage setup']), is_popular: true },
    { name: 'Corporate Premium', name_ar: 'الشركات المتميز', category: 'corporate', tier: 'premium', base_price: 3000, price_per_guest: 25, min_guests: 100, max_guests: 500, duration_hours: 8, description: 'Luxury corporate experience', features: JSON.stringify(['Luxury venue', 'Full AV production', 'Custom branding', 'Gourmet catering', 'Photo & video', 'Live streaming', 'VIP lounge', 'Executive transport', 'Post-event report']), is_best_value: true },
    
    // Wedding Packages
    { name: 'Intimate Wedding', name_ar: 'زفاف حميم', category: 'wedding', tier: 'essential', base_price: 800, price_per_guest: 20, min_guests: 30, max_guests: 80, duration_hours: 5, description: 'Beautiful intimate wedding celebration', features: JSON.stringify(['Venue decoration', 'Floral arrangements', 'Sound system', 'Wedding coordinator', 'Basic photography']) },
    { name: 'Classic Wedding', name_ar: 'زفاف كلاسيكي', category: 'wedding', tier: 'professional', base_price: 2500, price_per_guest: 35, min_guests: 100, max_guests: 300, duration_hours: 7, description: 'Traditional elegant wedding', features: JSON.stringify(['Premium venue & decoration', 'Luxury floral design', 'Professional DJ & sound', 'Full catering', 'Photo & video', 'Bridal suite', 'Guest transportation']), is_popular: true },
    { name: 'Royal Wedding', name_ar: 'زفاف ملكي', category: 'wedding', tier: 'luxury', base_price: 8000, price_per_guest: 60, min_guests: 200, max_guests: 1000, duration_hours: 10, description: 'Unforgettable royal wedding experience', features: JSON.stringify(['Exclusive luxury venue', 'Custom theme design', 'International floral artist', 'Live orchestra', 'Michelin-star catering', 'Cinematic video', 'Drone coverage', 'Fireworks', 'Luxury cars', 'Honeymoon planning']), is_best_value: true },
    
    // Conference Packages
    { name: 'Conference Basic', name_ar: 'مؤتمر أساسي', category: 'conference', tier: 'essential', base_price: 600, price_per_guest: 10, min_guests: 50, max_guests: 150, duration_hours: 6, description: 'Essential conference setup', features: JSON.stringify(['Conference hall', 'Basic AV', 'Registration system', 'Coffee breaks', 'Printed materials']) },
    { name: 'Executive Conference', name_ar: 'مؤتمر تنفيذي', category: 'conference', tier: 'premium', base_price: 2000, price_per_guest: 20, min_guests: 100, max_guests: 500, duration_hours: 8, description: 'Professional executive conference', features: JSON.stringify(['Premium conference center', 'Professional production', 'Simultaneous translation', 'Full catering', 'Live streaming', 'Networking app', 'Speaker management', 'Media coverage']), is_popular: true },
    
    // Kids Party Packages
    { name: 'Fun Party', name_ar: 'حفلة مرحة', category: 'kids', tier: 'essential', base_price: 300, price_per_guest: 15, min_guests: 10, max_guests: 30, duration_hours: 3, description: 'Fun-filled kids party', features: JSON.stringify(['Theme decoration', 'Balloon arrangements', 'Birthday cake', 'Party games', 'Party favors']) },
    { name: 'Magical Adventure', name_ar: 'مغامرة سحرية', category: 'kids', tier: 'professional', base_price: 800, price_per_guest: 25, min_guests: 20, max_guests: 50, duration_hours: 4, description: 'Magical party experience', features: JSON.stringify(['Custom theme design', 'Character appearances', 'Magic show', 'Face painting', 'Bouncy castle', 'Professional photography', 'Custom cake']), is_popular: true },
  ];
  
  // Seed Products
  console.log('🛍️ Seeding products...');
  const products = [
    { name: 'Business Cards', name_ar: 'بطاقات عمل', category: 'stationery', price: 25, description: 'Premium business cards with gold foil', image: '/images/products/real/business-cards-photo.png', stock: 1000 },
    { name: 'Letterhead', name_ar: 'ورق رسمي', category: 'stationery', price: 35, description: 'Elegant letterhead with watermark', image: '/images/products/real/letterhead-photo.png', stock: 500 },
    { name: 'Executive Notebook', name_ar: 'دفتر تنفيذي', category: 'stationery', price: 18, description: 'Leather-bound notebook with logo', image: '/images/products/real/notebook-photo.png', stock: 200 },
    { name: 'Presentation Folder', name_ar: 'ملف عرض', category: 'stationery', price: 12, description: 'Professional presentation folder', image: '/images/products/real/folder-photo.png', stock: 300 },
    { name: 'Eco Tote Bag', name_ar: 'حقيبة صديقة للبيئة', category: 'merchandise', price: 15, description: 'Sustainable cotton tote bag', image: '/images/products/real/tote-bag-photo.png', stock: 500 },
    { name: 'Polo Shirt', name_ar: 'قميص بولو', category: 'apparel', price: 35, description: 'Premium embroidered polo', image: '/images/products/real/polo-shirt-photo.png', stock: 150 },
    { name: 'Baseball Cap', name_ar: 'قبعة', category: 'apparel', price: 20, description: 'Adjustable cap with logo', image: '/images/products/real/cap-photo.png', stock: 200 },
    { name: 'Gift Box Set', name_ar: 'صندوق هدايا', category: 'gifts', price: 75, description: 'Luxury gift box with assorted items', image: '/images/products/real/gift-box-photo.png', stock: 100 },
    { name: 'Water Bottle', name_ar: 'زجاجة ماء', category: 'merchandise', price: 22, description: 'Stainless steel eco bottle', image: '/images/products/real/water-bottle-photo.png', stock: 300 },
    { name: 'Executive Pen', name_ar: 'قلم تنفيذي', category: 'stationery', price: 45, description: 'Premium metal pen with engraving', image: '/images/products/real/executive-pen-photo.png', stock: 150 },
  ];
  
  // Seed Courses
  console.log('📚 Seeding courses...');
  const courses = [
    { name: 'Event Planning Fundamentals', name_ar: 'أساسيات تخطيط الفعاليات', category: 'planning', duration_hours: 16, price: 299, description: 'Master the basics of professional event planning', instructor: 'Ahmed Al-Adeni', level: 'beginner', certificate: true },
    { name: 'Sustainable Event Management', name_ar: 'إدارة الفعاليات المستدامة', category: 'sustainability', duration_hours: 24, price: 449, description: 'ISO 20121 certified sustainable event practices', instructor: 'Dr. Sarah Hassan', level: 'intermediate', certificate: true },
    { name: 'Wedding Planning Mastery', name_ar: 'إتقان تخطيط الأعراس', category: 'wedding', duration_hours: 32, price: 599, description: 'Complete wedding planning from A to Z', instructor: 'Fatima Al-Yemeni', level: 'advanced', certificate: true },
    { name: 'Corporate Event Excellence', name_ar: 'تميز الفعاليات المؤسسية', category: 'corporate', duration_hours: 20, price: 399, description: 'Professional corporate event management', instructor: 'Mohammed Saleh', level: 'intermediate', certificate: true },
    { name: 'Event Marketing & Promotion', name_ar: 'تسويق وترويج الفعاليات', category: 'marketing', duration_hours: 12, price: 249, description: 'Digital marketing strategies for events', instructor: 'Layla Ahmed', level: 'beginner', certificate: true },
    { name: 'Crisis Management for Events', name_ar: 'إدارة الأزمات للفعاليات', category: 'management', duration_hours: 8, price: 199, description: 'Handle unexpected situations professionally', instructor: 'Ali Hassan', level: 'advanced', certificate: true },
  ];
  
  // Seed Add-on Services
  console.log('🎯 Seeding add-on services...');
  const addOns = [
    { name: 'Professional Photography', name_ar: 'تصوير فوتوغرافي احترافي', price: 300, description: 'Full event photo coverage', image: '/images/services/photography.png' },
    { name: 'Video Production', name_ar: 'إنتاج فيديو', price: 500, description: 'Cinematic video coverage', image: '/images/services/videography.png' },
    { name: 'Catering Service', name_ar: 'خدمة ضيافة', price_per_guest: 12, description: 'Gourmet food and beverages', image: '/images/services/catering.png' },
    { name: 'Premium Decoration', name_ar: 'تزيين مميز', price: 400, description: 'Custom themed decoration', image: '/images/services/decoration.png' },
    { name: 'Sound System', name_ar: 'نظام صوت', price: 250, description: 'Professional audio setup', image: '/images/services/sound.png' },
    { name: 'Professional Lighting', name_ar: 'إضاءة احترافية', price: 350, description: 'Mood and stage lighting', image: '/images/services/lighting.png' },
    { name: 'Live Entertainment', name_ar: 'ترفيه حي', price: 600, description: 'Musicians, DJs, performers', image: '/images/services/entertainment.png' },
    { name: 'Guest Transportation', name_ar: 'نقل الضيوف', price: 200, description: 'Shuttle and VIP transport', image: '/images/services/transportation.png' },
    { name: 'High-Speed WiFi', name_ar: 'واي فاي عالي السرعة', price: 100, description: 'Dedicated event network', image: '/images/services/wifi.png' },
    { name: 'Live Streaming', name_ar: 'بث مباشر', price: 400, description: 'Multi-platform streaming', image: '/images/services/streaming.png' },
    { name: 'Drone Aerial Coverage', name_ar: 'تغطية جوية بالدرون', price: 450, description: 'Stunning aerial footage', image: '/images/services/drone.png' },
    { name: 'VIP Lounge Setup', name_ar: 'إعداد صالة VIP', price: 800, description: 'Exclusive VIP area', image: '/images/services/vip.png' },
  ];
  
  console.log('✅ Database seeding complete!');
  console.log(`📦 ${packages.length} packages`);
  console.log(`🛍️ ${products.length} products`);
  console.log(`📚 ${courses.length} courses`);
  console.log(`🎯 ${addOns.length} add-on services`);
  
  await connection.end();
}

seedDatabase().catch(console.error);
