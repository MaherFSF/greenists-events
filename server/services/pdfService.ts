/**
 * PDF Generation Service for Greenists Quotes
 * Generates professional PDF quotes with branding
 */

export interface QuoteData {
  quoteNumber: string;
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
  clientCompany?: string;
  eventType: string;
  eventDate?: Date | null;
  guestCount: number;
  venueType?: string;
  cateringLevel?: string;
  decorationLevel?: string;
  addOns?: string[];
  baseCostUsd: number;
  addOnsCostUsd: number;
  subtotalUsd: number;
  serviceFeeUsd: number;
  totalUsd: number;
  totalYer: number;
  totalSar: number;
  sustainabilityScore?: number;
  validUntil?: Date;
}

export function generateQuoteHtml(quote: QuoteData): string {
  const formatCurrency = (amount: number, currency: string) => {
    if (currency === 'YER') {
      return `${amount.toLocaleString()} YER`;
    } else if (currency === 'SAR') {
      return `${amount.toFixed(2)} SAR`;
    }
    return `$${amount.toFixed(2)}`;
  };

  const eventTypeNames: Record<string, string> = {
    corporate: 'Corporate Event',
    wedding: 'Wedding',
    conference: 'Conference',
    government: 'Government Event',
    tradeshow: 'Trade Show',
    kids: 'Kids Event',
    healthcare: 'Healthcare Event',
    banking: 'Banking Event',
    ngo: 'NGO Event',
    education: 'Education Event',
    entertainment: 'Entertainment Event',
    construction: 'Construction Event',
    energy: 'Energy Event',
    travel: 'Travel Event',
    condolences: 'Condolences Event',
  };

  const venueTypeNames: Record<string, string> = {
    indoor: 'Indoor Venue',
    outdoor: 'Outdoor Venue',
    hotel: 'Hotel',
    beach: 'Beach',
  };

  const cateringLevelNames: Record<string, string> = {
    basic: 'Basic Catering',
    standard: 'Standard Catering',
    premium: 'Premium Catering',
    luxury: 'Luxury Catering',
  };

  const decorationLevelNames: Record<string, string> = {
    minimal: 'Minimal Decoration',
    standard: 'Standard Decoration',
    elegant: 'Elegant Decoration',
    luxury: 'Luxury Decoration',
  };

  const addOnNames: Record<string, string> = {
    'saffron-water': 'Saffron Water Welcome',
    'kids-corner': 'Kids Corner',
    'live-music': 'Live Music',
    'drone-photography': 'Drone Photography',
    'vip-lounge': 'VIP Lounge',
    'fireworks': 'Fireworks Display',
    'celebrity-mc': 'Celebrity MC',
    'luxury-transport': 'Luxury Transport',
    'spa-wellness': 'Spa & Wellness',
    'cultural-performance': 'Cultural Performance',
  };

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quote ${quote.quoteNumber} - Greenists</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #fff;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 40px;
      padding-bottom: 20px;
      border-bottom: 3px solid #2D7A4A;
    }
    .logo {
      font-size: 36px;
      font-weight: bold;
    }
    .logo .green { color: #2D7A4A; }
    .logo .gold { color: #C9A227; }
    .company-info {
      text-align: right;
      font-size: 12px;
      color: #666;
    }
    .quote-title {
      background: linear-gradient(135deg, #2D7A4A 0%, #1a5a32 100%);
      color: white;
      padding: 20px;
      text-align: center;
      margin-bottom: 30px;
      border-radius: 8px;
    }
    .quote-title h1 {
      font-size: 28px;
      margin-bottom: 5px;
    }
    .quote-number {
      font-size: 18px;
      opacity: 0.9;
    }
    .section {
      margin-bottom: 30px;
    }
    .section-title {
      font-size: 18px;
      color: #2D7A4A;
      margin-bottom: 15px;
      padding-bottom: 5px;
      border-bottom: 2px solid #e0e0e0;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    .info-item {
      padding: 10px;
      background: #f9f9f9;
      border-radius: 4px;
    }
    .info-label {
      font-size: 12px;
      color: #666;
      text-transform: uppercase;
    }
    .info-value {
      font-size: 16px;
      font-weight: 500;
      color: #333;
    }
    .pricing-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    .pricing-table th,
    .pricing-table td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }
    .pricing-table th {
      background: #f5f5f5;
      font-weight: 600;
      color: #333;
    }
    .pricing-table .amount {
      text-align: right;
      font-family: 'Courier New', monospace;
    }
    .pricing-table .total-row {
      background: #2D7A4A;
      color: white;
      font-weight: bold;
    }
    .pricing-table .total-row td {
      border: none;
    }
    .currency-summary {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      margin-top: 20px;
    }
    .currency-box {
      padding: 15px;
      text-align: center;
      border-radius: 8px;
      background: #f5f5f5;
    }
    .currency-box.primary {
      background: linear-gradient(135deg, #C9A227 0%, #a88420 100%);
      color: white;
    }
    .currency-label {
      font-size: 12px;
      text-transform: uppercase;
      opacity: 0.8;
    }
    .currency-value {
      font-size: 20px;
      font-weight: bold;
      margin-top: 5px;
    }
    .sustainability-score {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 15px;
      background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
      border-radius: 8px;
      margin-top: 20px;
    }
    .score-circle {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #2D7A4A;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
    }
    .score-text h4 {
      color: #2D7A4A;
      margin-bottom: 5px;
    }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 2px solid #e0e0e0;
      text-align: center;
      font-size: 12px;
      color: #666;
    }
    .validity {
      background: #fff3cd;
      padding: 10px;
      border-radius: 4px;
      text-align: center;
      margin-top: 20px;
      color: #856404;
    }
    .terms {
      font-size: 11px;
      color: #888;
      margin-top: 20px;
      padding: 15px;
      background: #f9f9f9;
      border-radius: 4px;
    }
    .terms h5 {
      margin-bottom: 10px;
      color: #666;
    }
    .terms ul {
      padding-left: 20px;
    }
    .terms li {
      margin-bottom: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">
        <span class="green">Green</span><span class="gold">ists</span>
        <div style="font-size: 14px; color: #666; font-weight: normal;">Event Experts & Business Innovators</div>
      </div>
      <div class="company-info">
        <strong>Greenists Events</strong><br>
        Corniche Street, Next to Relax Hotel<br>
        Khor Maksar, Aden, Yemen<br>
        +967 773 673 918<br>
        info@greenists-events.com<br>
        www.greenists-events.com
      </div>
    </div>

    <div class="quote-title">
      <h1>Event Quote</h1>
      <div class="quote-number">${quote.quoteNumber}</div>
    </div>

    ${quote.clientName ? `
    <div class="section">
      <h3 class="section-title">Client Information</h3>
      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">Name</div>
          <div class="info-value">${quote.clientName}</div>
        </div>
        ${quote.clientCompany ? `
        <div class="info-item">
          <div class="info-label">Company</div>
          <div class="info-value">${quote.clientCompany}</div>
        </div>
        ` : ''}
        ${quote.clientEmail ? `
        <div class="info-item">
          <div class="info-label">Email</div>
          <div class="info-value">${quote.clientEmail}</div>
        </div>
        ` : ''}
        ${quote.clientPhone ? `
        <div class="info-item">
          <div class="info-label">Phone</div>
          <div class="info-value">${quote.clientPhone}</div>
        </div>
        ` : ''}
      </div>
    </div>
    ` : ''}

    <div class="section">
      <h3 class="section-title">Event Details</h3>
      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">Event Type</div>
          <div class="info-value">${eventTypeNames[quote.eventType] || quote.eventType}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Guest Count</div>
          <div class="info-value">${quote.guestCount} guests</div>
        </div>
        ${quote.eventDate ? `
        <div class="info-item">
          <div class="info-label">Event Date</div>
          <div class="info-value">${new Date(quote.eventDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
        </div>
        ` : ''}
        ${quote.venueType ? `
        <div class="info-item">
          <div class="info-label">Venue Type</div>
          <div class="info-value">${venueTypeNames[quote.venueType] || quote.venueType}</div>
        </div>
        ` : ''}
        ${quote.cateringLevel ? `
        <div class="info-item">
          <div class="info-label">Catering</div>
          <div class="info-value">${cateringLevelNames[quote.cateringLevel] || quote.cateringLevel}</div>
        </div>
        ` : ''}
        ${quote.decorationLevel ? `
        <div class="info-item">
          <div class="info-label">Decoration</div>
          <div class="info-value">${decorationLevelNames[quote.decorationLevel] || quote.decorationLevel}</div>
        </div>
        ` : ''}
      </div>
    </div>

    ${quote.addOns && quote.addOns.length > 0 ? `
    <div class="section">
      <h3 class="section-title">Premium Add-Ons</h3>
      <ul style="padding-left: 20px;">
        ${quote.addOns.map(addon => `<li>${addOnNames[addon] || addon}</li>`).join('')}
      </ul>
    </div>
    ` : ''}

    <div class="section">
      <h3 class="section-title">Pricing Breakdown</h3>
      <table class="pricing-table">
        <thead>
          <tr>
            <th>Description</th>
            <th class="amount">Amount (USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Base Event Cost</td>
            <td class="amount">${formatCurrency(quote.baseCostUsd, 'USD')}</td>
          </tr>
          ${quote.addOnsCostUsd > 0 ? `
          <tr>
            <td>Premium Add-Ons</td>
            <td class="amount">${formatCurrency(quote.addOnsCostUsd, 'USD')}</td>
          </tr>
          ` : ''}
          <tr>
            <td>Subtotal</td>
            <td class="amount">${formatCurrency(quote.subtotalUsd, 'USD')}</td>
          </tr>
          <tr>
            <td>Service Fee (15%)</td>
            <td class="amount">${formatCurrency(quote.serviceFeeUsd, 'USD')}</td>
          </tr>
          <tr class="total-row">
            <td><strong>Total</strong></td>
            <td class="amount"><strong>${formatCurrency(quote.totalUsd, 'USD')}</strong></td>
          </tr>
        </tbody>
      </table>

      <div class="currency-summary">
        <div class="currency-box primary">
          <div class="currency-label">US Dollars</div>
          <div class="currency-value">${formatCurrency(quote.totalUsd, 'USD')}</div>
        </div>
        <div class="currency-box">
          <div class="currency-label">Yemeni Rial</div>
          <div class="currency-value">${formatCurrency(quote.totalYer, 'YER')}</div>
        </div>
        <div class="currency-box">
          <div class="currency-label">Saudi Riyal</div>
          <div class="currency-value">${formatCurrency(quote.totalSar, 'SAR')}</div>
        </div>
      </div>
    </div>

    ${quote.sustainabilityScore ? `
    <div class="sustainability-score">
      <div class="score-circle">${quote.sustainabilityScore}</div>
      <div class="score-text">
        <h4>Sustainability Score</h4>
        <p>This event configuration has a sustainability score of ${quote.sustainabilityScore}/100, reflecting our commitment to eco-friendly practices.</p>
      </div>
    </div>
    ` : ''}

    ${quote.validUntil ? `
    <div class="validity">
      <strong>⏰ Quote Valid Until:</strong> ${new Date(quote.validUntil).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
    </div>
    ` : ''}

    <div class="terms">
      <h5>Terms & Conditions</h5>
      <ul>
        <li>A 30% deposit is required to confirm your booking</li>
        <li>Final payment is due 7 days before the event date</li>
        <li>Cancellations made 30+ days before the event receive a full refund minus deposit</li>
        <li>Prices are subject to change based on final guest count and requirements</li>
        <li>All prices include standard setup and breakdown services</li>
      </ul>
    </div>

    <div class="footer">
      <p><strong>Greenists</strong> - Event Experts & Business Innovators</p>
      <p>خبراء الفعاليات ومبتكرو الأعمال</p>
      <p style="margin-top: 10px;">Thank you for choosing Greenists. We look forward to creating an unforgettable event for you!</p>
      <p style="margin-top: 5px; font-size: 10px;">Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
    </div>
  </div>
</body>
</html>
`;
}

export function generateBookingConfirmationHtml(booking: any): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Booking Confirmation - ${booking.bookingCode}</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2D7A4A; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
    .booking-code { font-size: 24px; font-weight: bold; color: #C9A227; }
    .details { margin: 20px 0; }
    .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e0e0e0; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Booking Confirmed!</h1>
    <div class="booking-code">${booking.bookingCode}</div>
  </div>
  <div class="content">
    <p>Dear ${booking.clientName},</p>
    <p>Thank you for choosing Greenists! Your event booking has been confirmed.</p>
    
    <div class="details">
      <div class="detail-row">
        <span>Event:</span>
        <strong>${booking.eventTitle}</strong>
      </div>
      <div class="detail-row">
        <span>Date:</span>
        <strong>${new Date(booking.eventDate).toLocaleDateString()}</strong>
      </div>
      <div class="detail-row">
        <span>Guests:</span>
        <strong>${booking.guestCount}</strong>
      </div>
      <div class="detail-row">
        <span>Total:</span>
        <strong>$${parseFloat(booking.totalUsd).toFixed(2)}</strong>
      </div>
      <div class="detail-row">
        <span>Deposit Due:</span>
        <strong>$${parseFloat(booking.depositUsd).toFixed(2)}</strong>
      </div>
    </div>
    
    <p>Our team will contact you shortly to discuss the details of your event.</p>
    <p>If you have any questions, please don't hesitate to reach out.</p>
  </div>
  <div class="footer">
    <p>Greenists Events | Aden, Yemen</p>
    <p>+967 773 673 918 | info@greenists-events.com</p>
  </div>
</body>
</html>
`;
}
