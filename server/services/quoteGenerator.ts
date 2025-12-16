/**
 * Greenists Professional Quote Generator
 * Creates beautiful branded PDF quotes with the Greenists letterhead design
 */

import PDFDocument from 'pdfkit';
import { Readable } from 'stream';

interface QuoteItem {
  name: string;
  nameAr: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

interface QuoteData {
  quoteNumber: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  eventType: string;
  eventTypeAr: string;
  eventDate: string;
  guestCount: number;
  duration: string;
  venueType: string;
  venueTypeAr: string;
  items: QuoteItem[];
  subtotal: number;
  vat: number;
  total: number;
  currency: 'USD' | 'YER' | 'SAR';
  sustainabilityScore: number;
  validUntil: string;
  notes?: string;
}

// Brand colors
const COLORS = {
  green: '#2D7A4A',
  gold: '#C9A227',
  darkGreen: '#1a5a32',
  lightGold: '#F5E6B8',
  white: '#FFFFFF',
  black: '#1a1a1a',
  gray: '#666666',
  lightGray: '#f5f5f5'
};

// Currency symbols and formatting
const CURRENCY_CONFIG = {
  USD: { symbol: '$', name: 'US Dollar', nameAr: 'دولار أمريكي' },
  YER: { symbol: 'YER', name: 'Yemeni Rial', nameAr: 'ريال يمني' },
  SAR: { symbol: 'SAR', name: 'Saudi Riyal', nameAr: 'ريال سعودي' }
};

export async function generateQuotePDF(data: QuoteData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: 'A4',
        margins: { top: 50, bottom: 50, left: 50, right: 50 },
        info: {
          Title: `Greenists Quote - ${data.quoteNumber}`,
          Author: 'Greenists Events',
          Subject: 'Event Quote',
          Keywords: 'greenists, events, quote, yemen, aden'
        }
      });

      const chunks: Buffer[] = [];
      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', reject);

      // Page dimensions
      const pageWidth = doc.page.width;
      const pageHeight = doc.page.height;
      const margin = 50;
      const contentWidth = pageWidth - (margin * 2);

      // Draw decorative gold border (inspired by letterhead)
      drawGoldBorder(doc, pageWidth, pageHeight);

      // Draw header with logo
      drawHeader(doc, margin, contentWidth);

      // Draw quote title and number
      let yPos = 180;
      yPos = drawQuoteTitle(doc, data, margin, contentWidth, yPos);

      // Draw client information
      yPos = drawClientInfo(doc, data, margin, contentWidth, yPos);

      // Draw event details
      yPos = drawEventDetails(doc, data, margin, contentWidth, yPos);

      // Draw items table
      yPos = drawItemsTable(doc, data, margin, contentWidth, yPos);

      // Draw totals
      yPos = drawTotals(doc, data, margin, contentWidth, yPos);

      // Draw sustainability score
      yPos = drawSustainabilityScore(doc, data, margin, contentWidth, yPos);

      // Draw terms and conditions
      yPos = drawTerms(doc, data, margin, contentWidth, yPos);

      // Draw footer
      drawFooter(doc, pageWidth, pageHeight, margin);

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}

function drawGoldBorder(doc: any, pageWidth: number, pageHeight: number) {
  const borderWidth = 8;
  const innerBorderWidth = 2;
  const cornerRadius = 0;
  
  // Outer gold border
  doc.rect(20, 20, pageWidth - 40, pageHeight - 40)
     .lineWidth(borderWidth)
     .stroke(COLORS.gold);
  
  // Inner decorative line
  doc.rect(28, 28, pageWidth - 56, pageHeight - 56)
     .lineWidth(innerBorderWidth)
     .stroke(COLORS.lightGold);

  // Top decorative pattern (simplified arabesque)
  const patternY = 15;
  for (let x = 60; x < pageWidth - 60; x += 30) {
    doc.circle(x, patternY, 3).fill(COLORS.gold);
  }
  
  // Bottom decorative pattern
  const bottomPatternY = pageHeight - 15;
  for (let x = 60; x < pageWidth - 60; x += 30) {
    doc.circle(x, bottomPatternY, 3).fill(COLORS.gold);
  }
}

function drawHeader(doc: any, margin: number, contentWidth: number) {
  const centerX = margin + contentWidth / 2;
  
  // Logo circle background
  doc.circle(centerX, 80, 35)
     .fill(COLORS.green);
  
  // "G" letter in logo
  doc.fontSize(36)
     .fillColor(COLORS.white)
     .text('G', centerX - 12, 58, { width: 24, align: 'center' });
  
  // Company name
  doc.fontSize(28)
     .fillColor(COLORS.green)
     .text('Green', margin, 125, { continued: true, align: 'center', width: contentWidth })
     .fillColor(COLORS.gold)
     .text('ists');
  
  // Tagline in English
  doc.fontSize(10)
     .fillColor(COLORS.gray)
     .text('Event Experts & Business Innovators', margin, 155, { align: 'center', width: contentWidth });
  
  // Tagline in Arabic
  doc.fontSize(10)
     .text('خبراء الفعاليات ومبتكرو الأعمال', margin, 168, { align: 'center', width: contentWidth });
}

function drawQuoteTitle(doc: any, data: QuoteData, margin: number, contentWidth: number, yPos: number): number {
  // Quote title box
  doc.rect(margin, yPos, contentWidth, 40)
     .fill(COLORS.green);
  
  doc.fontSize(16)
     .fillColor(COLORS.white)
     .text('PRICE QUOTATION | عرض سعر', margin, yPos + 12, { align: 'center', width: contentWidth });
  
  yPos += 50;
  
  // Quote number and date row
  doc.fontSize(10)
     .fillColor(COLORS.black);
  
  doc.text(`Quote No: ${data.quoteNumber}`, margin, yPos)
     .text(`رقم العرض: ${data.quoteNumber}`, margin + contentWidth - 150, yPos, { width: 150, align: 'right' });
  
  yPos += 15;
  
  const today = new Date().toLocaleDateString('en-GB');
  doc.text(`Date: ${today}`, margin, yPos)
     .text(`التاريخ: ${today}`, margin + contentWidth - 150, yPos, { width: 150, align: 'right' });
  
  yPos += 15;
  
  doc.text(`Valid Until: ${data.validUntil}`, margin, yPos)
     .text(`صالح حتى: ${data.validUntil}`, margin + contentWidth - 150, yPos, { width: 150, align: 'right' });
  
  return yPos + 25;
}

function drawClientInfo(doc: any, data: QuoteData, margin: number, contentWidth: number, yPos: number): number {
  // Section header
  doc.rect(margin, yPos, contentWidth, 25)
     .fill(COLORS.lightGold);
  
  doc.fontSize(11)
     .fillColor(COLORS.darkGreen)
     .text('CLIENT INFORMATION | معلومات العميل', margin + 10, yPos + 7);
  
  yPos += 35;
  
  // Client details
  doc.fontSize(10)
     .fillColor(COLORS.black);
  
  const col1 = margin;
  const col2 = margin + contentWidth / 2;
  
  doc.text(`Name: ${data.clientName}`, col1, yPos);
  doc.text(`الاسم: ${data.clientName}`, col2, yPos);
  yPos += 15;
  
  doc.text(`Email: ${data.clientEmail}`, col1, yPos);
  doc.text(`البريد: ${data.clientEmail}`, col2, yPos);
  yPos += 15;
  
  doc.text(`Phone: ${data.clientPhone}`, col1, yPos);
  doc.text(`الهاتف: ${data.clientPhone}`, col2, yPos);
  
  return yPos + 25;
}

function drawEventDetails(doc: any, data: QuoteData, margin: number, contentWidth: number, yPos: number): number {
  // Section header
  doc.rect(margin, yPos, contentWidth, 25)
     .fill(COLORS.lightGold);
  
  doc.fontSize(11)
     .fillColor(COLORS.darkGreen)
     .text('EVENT DETAILS | تفاصيل الفعالية', margin + 10, yPos + 7);
  
  yPos += 35;
  
  doc.fontSize(10)
     .fillColor(COLORS.black);
  
  const col1 = margin;
  const col2 = margin + contentWidth / 2;
  
  doc.text(`Event Type: ${data.eventType}`, col1, yPos);
  doc.text(`نوع الفعالية: ${data.eventTypeAr}`, col2, yPos);
  yPos += 15;
  
  doc.text(`Date: ${data.eventDate}`, col1, yPos);
  doc.text(`التاريخ: ${data.eventDate}`, col2, yPos);
  yPos += 15;
  
  doc.text(`Guests: ${data.guestCount}`, col1, yPos);
  doc.text(`عدد الضيوف: ${data.guestCount}`, col2, yPos);
  yPos += 15;
  
  doc.text(`Duration: ${data.duration}`, col1, yPos);
  doc.text(`المدة: ${data.duration}`, col2, yPos);
  yPos += 15;
  
  doc.text(`Venue: ${data.venueType}`, col1, yPos);
  doc.text(`المكان: ${data.venueTypeAr}`, col2, yPos);
  
  return yPos + 25;
}

function drawItemsTable(doc: any, data: QuoteData, margin: number, contentWidth: number, yPos: number): number {
  // Section header
  doc.rect(margin, yPos, contentWidth, 25)
     .fill(COLORS.lightGold);
  
  doc.fontSize(11)
     .fillColor(COLORS.darkGreen)
     .text('COST BREAKDOWN | تفاصيل التكلفة', margin + 10, yPos + 7);
  
  yPos += 35;
  
  // Table header
  const colWidths = [200, 60, 80, 100];
  const colX = [margin, margin + 200, margin + 260, margin + 340];
  
  doc.rect(margin, yPos, contentWidth, 20)
     .fill(COLORS.green);
  
  doc.fontSize(9)
     .fillColor(COLORS.white);
  
  doc.text('Item / البند', colX[0] + 5, yPos + 5);
  doc.text('Qty', colX[1] + 5, yPos + 5);
  doc.text('Unit Price', colX[2] + 5, yPos + 5);
  doc.text('Total', colX[3] + 5, yPos + 5);
  
  yPos += 20;
  
  // Table rows
  doc.fontSize(9)
     .fillColor(COLORS.black);
  
  const currencySymbol = CURRENCY_CONFIG[data.currency].symbol;
  
  data.items.forEach((item, index) => {
    const bgColor = index % 2 === 0 ? COLORS.white : COLORS.lightGray;
    doc.rect(margin, yPos, contentWidth, 18).fill(bgColor);
    
    doc.fillColor(COLORS.black)
       .text(`${item.name} | ${item.nameAr}`, colX[0] + 5, yPos + 4, { width: 190 })
       .text(item.quantity.toString(), colX[1] + 5, yPos + 4)
       .text(`${currencySymbol} ${item.unitPrice.toLocaleString()}`, colX[2] + 5, yPos + 4)
       .text(`${currencySymbol} ${item.total.toLocaleString()}`, colX[3] + 5, yPos + 4);
    
    yPos += 18;
  });
  
  return yPos + 10;
}

function drawTotals(doc: any, data: QuoteData, margin: number, contentWidth: number, yPos: number): number {
  const currencySymbol = CURRENCY_CONFIG[data.currency].symbol;
  const totalsX = margin + contentWidth - 200;
  const totalsWidth = 200;
  
  // Subtotal
  doc.fontSize(10)
     .fillColor(COLORS.black)
     .text('Subtotal | المجموع الفرعي:', totalsX, yPos)
     .text(`${currencySymbol} ${data.subtotal.toLocaleString()}`, totalsX + 120, yPos, { width: 80, align: 'right' });
  
  yPos += 18;
  
  // VAT
  doc.text('VAT (15%) | ض.ق.م:', totalsX, yPos)
     .text(`${currencySymbol} ${data.vat.toLocaleString()}`, totalsX + 120, yPos, { width: 80, align: 'right' });
  
  yPos += 18;
  
  // Total box
  doc.rect(totalsX - 10, yPos - 5, totalsWidth + 10, 30)
     .fill(COLORS.green);
  
  doc.fontSize(12)
     .fillColor(COLORS.white)
     .text('TOTAL | الإجمالي:', totalsX, yPos + 3)
     .fontSize(14)
     .text(`${currencySymbol} ${data.total.toLocaleString()}`, totalsX + 100, yPos + 1, { width: 90, align: 'right' });
  
  return yPos + 40;
}

function drawSustainabilityScore(doc: any, data: QuoteData, margin: number, contentWidth: number, yPos: number): number {
  // Sustainability badge
  const badgeX = margin;
  const badgeWidth = 180;
  
  doc.rect(badgeX, yPos, badgeWidth, 50)
     .fill(COLORS.lightGold);
  
  // Leaf icon (simplified)
  doc.circle(badgeX + 25, yPos + 25, 15)
     .fill(COLORS.green);
  
  doc.fontSize(10)
     .fillColor(COLORS.white)
     .text('🌿', badgeX + 18, yPos + 18);
  
  doc.fontSize(9)
     .fillColor(COLORS.darkGreen)
     .text('Sustainability Score', badgeX + 50, yPos + 12)
     .text('نقاط الاستدامة', badgeX + 50, yPos + 24);
  
  doc.fontSize(16)
     .fillColor(COLORS.green)
     .text(`${data.sustainabilityScore}/100`, badgeX + 120, yPos + 15);
  
  // ISO certification badge
  doc.rect(badgeX + badgeWidth + 20, yPos, 120, 50)
     .stroke(COLORS.gold);
  
  doc.fontSize(8)
     .fillColor(COLORS.darkGreen)
     .text('ISO 20121', badgeX + badgeWidth + 40, yPos + 12)
     .text('Certified', badgeX + badgeWidth + 45, yPos + 24)
     .text('معتمد', badgeX + badgeWidth + 50, yPos + 36);
  
  return yPos + 60;
}

function drawTerms(doc: any, data: QuoteData, margin: number, contentWidth: number, yPos: number): number {
  doc.fontSize(8)
     .fillColor(COLORS.gray);
  
  const terms = [
    'Terms & Conditions | الشروط والأحكام:',
    '• 50% deposit required to confirm booking | مطلوب دفع 50% مقدماً لتأكيد الحجز',
    '• Balance due 7 days before event | الرصيد المتبقي قبل 7 أيام من الفعالية',
    '• Cancellation policy applies | تطبق سياسة الإلغاء',
    '• This quote is valid for 14 days | هذا العرض صالح لمدة 14 يوماً'
  ];
  
  terms.forEach(term => {
    doc.text(term, margin, yPos, { width: contentWidth });
    yPos += 12;
  });
  
  return yPos + 10;
}

function drawFooter(doc: any, pageWidth: number, pageHeight: number, margin: number) {
  const footerY = pageHeight - 80;
  const contentWidth = pageWidth - (margin * 2);
  
  // Footer line
  doc.moveTo(margin, footerY)
     .lineTo(margin + contentWidth, footerY)
     .lineWidth(1)
     .stroke(COLORS.gold);
  
  // Contact information
  doc.fontSize(8)
     .fillColor(COLORS.gray);
  
  const contactY = footerY + 10;
  
  doc.text('📍 Next to Relax Hotel, Khor Maksar, Aden | بجانب فندق ريلاكس، خور مكسر، عدن', margin, contactY, { align: 'center', width: contentWidth });
  doc.text('📞 +967 773 673 918 | +967 771 017 680', margin, contactY + 12, { align: 'center', width: contentWidth });
  doc.text('✉️ info@greenists-events.com | 🌐 www.greenists-events.com', margin, contactY + 24, { align: 'center', width: contentWidth });
  
  // QR code placeholder text
  doc.fontSize(7)
     .text('Scan to book online | امسح للحجز عبر الإنترنت', margin + contentWidth - 100, footerY + 10, { width: 100, align: 'center' });
}

// Helper function to generate quote number
export function generateQuoteNumber(): string {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `GRN-${year}${month}-${random}`;
}

// Helper function to calculate validity date
export function getValidityDate(days: number = 14): string {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString('en-GB');
}
