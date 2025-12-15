/**
 * Seed Database with Initial Data
 * Run with: node scripts/seed-data.mjs
 */

import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.log('DATABASE_URL not set, skipping seed');
  process.exit(0);
}

async function seed() {
  const connection = await mysql.createConnection(DATABASE_URL);
  const db = drizzle(connection);

  console.log('🌱 Seeding database...');

  // Seed Event Packages
  const packages = [
    {
      name: 'Essential Package',
      nameAr: 'الباقة الأساسية',
      tier: 'essential',
      eventType: 'corporate',
      description: 'Basic event package with essential services for small gatherings',
      descriptionAr: 'باقة أساسية للفعاليات مع الخدمات الأساسية للتجمعات الصغيرة',
      basePriceUsd: '500.00',
      perGuestPriceUsd: '15.00',
      maxGuests: 50,
      duration: '4 hours',
      features: JSON.stringify(['Basic setup', 'Standard catering', 'Basic decoration', 'Sound system']),
      isActive: true,
    },
    {
      name: 'Silver Package',
      nameAr: 'الباقة الفضية',
      tier: 'silver',
      eventType: 'corporate',
      description: 'Enhanced package with additional services for medium events',
      descriptionAr: 'باقة محسنة مع خدمات إضافية للفعاليات المتوسطة',
      basePriceUsd: '1000.00',
      perGuestPriceUsd: '25.00',
      maxGuests: 150,
      duration: '6 hours',
      features: JSON.stringify(['Enhanced setup', 'Premium catering', 'Elegant decoration', 'Photography', 'Sound & lighting']),
      isActive: true,
    },
    {
      name: 'Gold Package',
      nameAr: 'الباقة الذهبية',
      tier: 'gold',
      eventType: 'corporate',
      description: 'Premium package with luxury services for large events',
      descriptionAr: 'باقة متميزة مع خدمات فاخرة للفعاليات الكبيرة',
      basePriceUsd: '2000.00',
      perGuestPriceUsd: '40.00',
      maxGuests: 300,
      duration: '8 hours',
      features: JSON.stringify(['Premium setup', 'Luxury catering', 'Luxury decoration', 'Photo + Video', 'Live music', 'VIP area']),
      isActive: true,
    },
    {
      name: 'Diamond Package',
      nameAr: 'الباقة الماسية',
      tier: 'diamond',
      eventType: 'corporate',
      description: 'Ultimate package with all premium services for grand events',
      descriptionAr: 'الباقة النهائية مع جميع الخدمات المتميزة للفعاليات الكبرى',
      basePriceUsd: '5000.00',
      perGuestPriceUsd: '75.00',
      maxGuests: 1000,
      duration: 'Full day',
      features: JSON.stringify(['VIP setup', 'Gourmet catering', 'Designer decoration', 'Full media coverage', 'Celebrity MC', 'Fireworks', 'Luxury transport']),
      isActive: true,
    },
    // Wedding packages
    {
      name: 'Wedding Essential',
      nameAr: 'باقة الزفاف الأساسية',
      tier: 'essential',
      eventType: 'wedding',
      description: 'Beautiful wedding package for intimate celebrations',
      basePriceUsd: '1500.00',
      perGuestPriceUsd: '30.00',
      maxGuests: 100,
      duration: '6 hours',
      features: JSON.stringify(['Venue decoration', 'Catering', 'Wedding cake', 'Sound system', 'Basic photography']),
      isActive: true,
    },
    {
      name: 'Wedding Gold',
      nameAr: 'باقة الزفاف الذهبية',
      tier: 'gold',
      eventType: 'wedding',
      description: 'Luxurious wedding package for memorable celebrations',
      basePriceUsd: '5000.00',
      perGuestPriceUsd: '60.00',
      maxGuests: 500,
      duration: 'Full day',
      features: JSON.stringify(['Premium venue decoration', 'Gourmet catering', 'Designer wedding cake', 'Full photo & video', 'Live band', 'Fireworks', 'Bridal suite']),
      isActive: true,
    },
  ];

  // Seed Products
  const products = [
    { sku: 'GRN-BC-001', name: 'Business Cards (100 pcs)', nameAr: 'بطاقات الأعمال', category: 'stationery', priceUsd: '50.00', isEcoFriendly: true, isFeatured: true },
    { sku: 'GRN-LH-001', name: 'Letterhead (500 sheets)', nameAr: 'ورق رسمي', category: 'stationery', priceUsd: '75.00', isEcoFriendly: true },
    { sku: 'GRN-NB-001', name: 'Notebook A5', nameAr: 'دفتر ملاحظات A5', category: 'stationery', priceUsd: '25.00', isEcoFriendly: true },
    { sku: 'GRN-EN-001', name: 'Envelopes DL (100 pcs)', nameAr: 'مظاريف DL', category: 'stationery', priceUsd: '35.00', isEcoFriendly: true },
    { sku: 'GRN-FD-001', name: 'Presentation Folder A4', nameAr: 'مجلد العروض A4', category: 'stationery', priceUsd: '45.00', isEcoFriendly: true },
    { sku: 'GRN-TS-001', name: 'Staff T-Shirt', nameAr: 'قميص الموظفين', category: 'clothing', priceUsd: '35.00', isFeatured: true },
    { sku: 'GRN-PL-001', name: 'Polo Shirt', nameAr: 'قميص بولو', category: 'clothing', priceUsd: '45.00' },
    { sku: 'GRN-CP-001', name: 'Cap', nameAr: 'قبعة', category: 'clothing', priceUsd: '15.00' },
    { sku: 'GRN-JK-001', name: 'Event Jacket', nameAr: 'سترة الفعاليات', category: 'clothing', priceUsd: '85.00' },
    { sku: 'GRN-TB-001', name: 'Tote Bag', nameAr: 'حقيبة تسوق', category: 'bags', priceUsd: '20.00', isEcoFriendly: true, isFeatured: true },
    { sku: 'GRN-BB-001', name: 'Business Bag', nameAr: 'حقيبة رسمية', category: 'bags', priceUsd: '85.00' },
    { sku: 'GRN-GB-001', name: 'Gift Bag', nameAr: 'حقيبة هدايا', category: 'bags', priceUsd: '12.00', isEcoFriendly: true },
    { sku: 'GRN-CL-001', name: 'Desk Calendar 2026', nameAr: 'تقويم مكتبي 2026', category: 'promotional', priceUsd: '18.00' },
    { sku: 'GRN-FR-001', name: 'Framed Wall Photo', nameAr: 'صور جدارية مؤطرة', category: 'promotional', priceUsd: '55.00' },
    { sku: 'GRN-BN-001', name: 'Roll-up Banner', nameAr: 'لافتة قابلة للطي', category: 'promotional', priceUsd: '120.00' },
    { sku: 'GRN-ST-001', name: 'Stickers Pack', nameAr: 'ملصقات', category: 'promotional', priceUsd: '15.00' },
    { sku: 'GRN-CS-001', name: 'Car Sticker', nameAr: 'ملصق سيارة', category: 'promotional', priceUsd: '25.00' },
    { sku: 'GRN-PN-001', name: 'Executive Pen', nameAr: 'قلم تنفيذي', category: 'accessories', priceUsd: '30.00', isFeatured: true },
    { sku: 'GRN-WL-001', name: 'Luxury Wallet', nameAr: 'محفظة فاخرة', category: 'accessories', priceUsd: '65.00' },
    { sku: 'GRN-DS-001', name: 'Desk Set', nameAr: 'إكسسوارات مكتبية', category: 'accessories', priceUsd: '95.00' },
  ];

  // Seed Add-ons
  const addOns = [
    { name: 'Saffron Water Welcome', nameAr: 'استقبال بماء الزعفران', category: 'premium', priceUsd: '150.00', priceType: 'flat', icon: 'Droplets', sortOrder: 1 },
    { name: 'Kids Corner', nameAr: 'ركن الأطفال', category: 'entertainment', priceUsd: '300.00', priceType: 'flat', icon: 'Baby', sortOrder: 2 },
    { name: 'Live Music', nameAr: 'موسيقى حية', category: 'entertainment', priceUsd: '500.00', priceType: 'flat', icon: 'Music', sortOrder: 3 },
    { name: 'Drone Photography', nameAr: 'تصوير بالدرون', category: 'premium', priceUsd: '400.00', priceType: 'flat', icon: 'Camera', sortOrder: 4 },
    { name: 'VIP Lounge', nameAr: 'صالة VIP', category: 'premium', priceUsd: '600.00', priceType: 'flat', icon: 'Crown', sortOrder: 5 },
    { name: 'Fireworks Display', nameAr: 'عرض الألعاب النارية', category: 'entertainment', priceUsd: '800.00', priceType: 'flat', icon: 'Sparkles', sortOrder: 6 },
    { name: 'Celebrity MC', nameAr: 'مقدم مشهور', category: 'premium', priceUsd: '1000.00', priceType: 'flat', icon: 'Star', sortOrder: 7 },
    { name: 'Luxury Transport', nameAr: 'نقل فاخر', category: 'premium', priceUsd: '700.00', priceType: 'flat', icon: 'Car', sortOrder: 8 },
    { name: 'Spa & Wellness', nameAr: 'سبا وعافية', category: 'wellness', priceUsd: '450.00', priceType: 'flat', icon: 'Heart', sortOrder: 9 },
    { name: 'Cultural Performance', nameAr: 'عرض ثقافي', category: 'cultural', priceUsd: '350.00', priceType: 'flat', icon: 'Theater', sortOrder: 10 },
  ];

  // Seed Email Templates
  const emailTemplatesData = [
    {
      name: 'booking_confirmation',
      subject: 'Booking Confirmed - {{bookingCode}} | Greenists',
      subjectAr: 'تأكيد الحجز - {{bookingCode}} | جرينيستس',
      bodyHtml: '<p>Your booking has been confirmed.</p>',
      variables: JSON.stringify(['bookingCode', 'clientName', 'eventTitle', 'eventDate', 'totalUsd']),
    },
    {
      name: 'quote_sent',
      subject: 'Your Event Quote - {{quoteNumber}} | Greenists',
      subjectAr: 'عرض سعر فعاليتك - {{quoteNumber}} | جرينيستس',
      bodyHtml: '<p>Here is your event quote.</p>',
      variables: JSON.stringify(['quoteNumber', 'clientName', 'eventType', 'totalUsd', 'validUntil']),
    },
    {
      name: 'event_reminder',
      subject: 'Event Reminder: {{eventTitle}} | Greenists',
      subjectAr: 'تذكير بالفعالية: {{eventTitle}} | جرينيستس',
      bodyHtml: '<p>Your event is coming up!</p>',
      variables: JSON.stringify(['clientName', 'eventTitle', 'eventDate', 'daysUntil']),
    },
  ];

  try {
    // Insert packages
    console.log('📦 Inserting event packages...');
    for (const pkg of packages) {
      await connection.execute(
        `INSERT INTO eventPackages (name, nameAr, tier, eventType, description, descriptionAr, basePriceUsd, perGuestPriceUsd, maxGuests, duration, features, isActive) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE name = name`,
        [pkg.name, pkg.nameAr, pkg.tier, pkg.eventType, pkg.description, pkg.descriptionAr || null, pkg.basePriceUsd, pkg.perGuestPriceUsd, pkg.maxGuests, pkg.duration, pkg.features, pkg.isActive]
      );
    }
    console.log(`✅ Inserted ${packages.length} packages`);

    // Insert products
    console.log('🛍️ Inserting products...');
    for (const product of products) {
      await connection.execute(
        `INSERT INTO products (sku, name, nameAr, category, priceUsd, isEcoFriendly, isFeatured, isActive) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE name = name`,
        [product.sku, product.name, product.nameAr, product.category, product.priceUsd, product.isEcoFriendly || false, product.isFeatured || false, true]
      );
    }
    console.log(`✅ Inserted ${products.length} products`);

    // Insert add-ons
    console.log('➕ Inserting add-ons...');
    for (const addon of addOns) {
      await connection.execute(
        `INSERT INTO addOns (name, nameAr, category, priceUsd, priceType, icon, sortOrder, isActive) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE name = name`,
        [addon.name, addon.nameAr, addon.category, addon.priceUsd, addon.priceType, addon.icon, addon.sortOrder, true]
      );
    }
    console.log(`✅ Inserted ${addOns.length} add-ons`);

    // Insert email templates
    console.log('📧 Inserting email templates...');
    for (const template of emailTemplatesData) {
      await connection.execute(
        `INSERT INTO emailTemplates (name, subject, subjectAr, bodyHtml, variables, isActive) 
         VALUES (?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE name = name`,
        [template.name, template.subject, template.subjectAr, template.bodyHtml, template.variables, true]
      );
    }
    console.log(`✅ Inserted ${emailTemplatesData.length} email templates`);

    console.log('🎉 Database seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await connection.end();
  }
}

seed();
