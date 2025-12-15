/**
 * Email Notification Service for Greenists
 * Handles sending emails for bookings, quotes, and notifications
 */

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface BookingEmailData {
  bookingCode: string;
  clientName: string;
  clientEmail: string;
  eventTitle: string;
  eventDate: Date;
  guestCount: number;
  totalUsd: number;
  depositUsd: number;
}

export interface QuoteEmailData {
  quoteNumber: string;
  clientName: string;
  clientEmail: string;
  eventType: string;
  guestCount: number;
  totalUsd: number;
  validUntil: Date;
  pdfUrl?: string;
}

// Email templates
export const emailTemplates = {
  bookingConfirmation: (data: BookingEmailData) => ({
    subject: `Booking Confirmed - ${data.bookingCode} | Greenists`,
    subjectAr: `تأكيد الحجز - ${data.bookingCode} | جرينيستس`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { background: linear-gradient(135deg, #2D7A4A 0%, #1a5a32 100%); color: white; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 28px; }
    .logo { font-size: 32px; margin-bottom: 10px; }
    .logo .green { color: #fff; }
    .logo .gold { color: #C9A227; }
    .booking-code { background: #C9A227; color: #000; padding: 10px 20px; display: inline-block; border-radius: 4px; font-size: 20px; font-weight: bold; margin-top: 15px; }
    .content { padding: 30px; background: #fff; }
    .greeting { font-size: 18px; margin-bottom: 20px; }
    .details-box { background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0; }
    .detail-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e0e0e0; }
    .detail-row:last-child { border-bottom: none; }
    .detail-label { color: #666; }
    .detail-value { font-weight: 600; color: #333; }
    .amount { color: #2D7A4A; font-size: 18px; }
    .cta-button { display: inline-block; background: #2D7A4A; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 20px 0; }
    .next-steps { background: #e8f5e9; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .next-steps h3 { color: #2D7A4A; margin-top: 0; }
    .next-steps ul { margin: 0; padding-left: 20px; }
    .next-steps li { margin-bottom: 10px; }
    .footer { background: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; }
    .social-links { margin: 15px 0; }
    .social-links a { margin: 0 10px; color: #2D7A4A; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo"><span class="green">Green</span><span class="gold">ists</span></div>
      <h1>🎉 Booking Confirmed!</h1>
      <div class="booking-code">${data.bookingCode}</div>
    </div>
    
    <div class="content">
      <p class="greeting">Dear ${data.clientName},</p>
      
      <p>Thank you for choosing <strong>Greenists</strong>! We're thrilled to confirm your event booking. Our team is already preparing to make your event unforgettable.</p>
      
      <div class="details-box">
        <div class="detail-row">
          <span class="detail-label">Event</span>
          <span class="detail-value">${data.eventTitle}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Date</span>
          <span class="detail-value">${new Date(data.eventDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Guests</span>
          <span class="detail-value">${data.guestCount} people</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Total Amount</span>
          <span class="detail-value amount">$${data.totalUsd.toFixed(2)}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Deposit Required (30%)</span>
          <span class="detail-value amount">$${data.depositUsd.toFixed(2)}</span>
        </div>
      </div>
      
      <div class="next-steps">
        <h3>📋 Next Steps</h3>
        <ul>
          <li><strong>Deposit Payment:</strong> Please pay the deposit within 48 hours to secure your booking</li>
          <li><strong>Consultation Call:</strong> Our event coordinator will contact you within 24 hours</li>
          <li><strong>Planning Meeting:</strong> We'll schedule a detailed planning session</li>
          <li><strong>Final Details:</strong> Confirm all arrangements 7 days before the event</li>
        </ul>
      </div>
      
      <p style="text-align: center;">
        <a href="https://greenists-events.com/client-portal?code=${data.bookingCode}" class="cta-button">Track Your Event</a>
      </p>
      
      <p>If you have any questions or special requests, don't hesitate to reach out. We're here to help!</p>
      
      <p>Best regards,<br><strong>The Greenists Team</strong></p>
    </div>
    
    <div class="footer">
      <div class="social-links">
        <a href="#">Facebook</a> |
        <a href="#">Instagram</a> |
        <a href="#">LinkedIn</a>
      </div>
      <p><strong>Greenists Events</strong></p>
      <p>Corniche Street, Next to Relax Hotel, Khor Maksar, Aden, Yemen</p>
      <p>📞 +967 773 673 918 | ✉️ info@greenists-events.com</p>
      <p style="margin-top: 15px; font-size: 10px;">
        You received this email because you made a booking with Greenists Events.<br>
        © ${new Date().getFullYear()} Greenists. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
    `,
    text: `
BOOKING CONFIRMED - ${data.bookingCode}

Dear ${data.clientName},

Thank you for choosing Greenists! Your event booking has been confirmed.

BOOKING DETAILS:
- Event: ${data.eventTitle}
- Date: ${new Date(data.eventDate).toLocaleDateString()}
- Guests: ${data.guestCount}
- Total: $${data.totalUsd.toFixed(2)}
- Deposit Due: $${data.depositUsd.toFixed(2)}

NEXT STEPS:
1. Pay the deposit within 48 hours
2. Our coordinator will contact you within 24 hours
3. Schedule a planning meeting
4. Confirm final details 7 days before the event

Track your event: https://greenists-events.com/client-portal?code=${data.bookingCode}

Best regards,
The Greenists Team

---
Greenists Events
Aden, Yemen
+967 773 673 918
info@greenists-events.com
    `,
  }),

  quoteSent: (data: QuoteEmailData) => ({
    subject: `Your Event Quote - ${data.quoteNumber} | Greenists`,
    subjectAr: `عرض سعر فعاليتك - ${data.quoteNumber} | جرينيستس`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { background: linear-gradient(135deg, #2D7A4A 0%, #1a5a32 100%); color: white; padding: 30px; text-align: center; }
    .logo { font-size: 32px; margin-bottom: 10px; }
    .logo .green { color: #fff; }
    .logo .gold { color: #C9A227; }
    .quote-number { background: #C9A227; color: #000; padding: 10px 20px; display: inline-block; border-radius: 4px; font-size: 18px; font-weight: bold; margin-top: 15px; }
    .content { padding: 30px; background: #fff; }
    .summary-box { background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; }
    .total-amount { font-size: 36px; color: #2D7A4A; font-weight: bold; }
    .cta-button { display: inline-block; background: #2D7A4A; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 20px 0; }
    .validity { background: #fff3cd; padding: 15px; border-radius: 8px; text-align: center; color: #856404; margin: 20px 0; }
    .footer { background: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo"><span class="green">Green</span><span class="gold">ists</span></div>
      <h1>Your Event Quote</h1>
      <div class="quote-number">${data.quoteNumber}</div>
    </div>
    
    <div class="content">
      <p>Dear ${data.clientName},</p>
      
      <p>Thank you for your interest in Greenists! Here's your personalized event quote:</p>
      
      <div class="summary-box">
        <p style="margin: 0; color: #666;">Estimated Total</p>
        <div class="total-amount">$${data.totalUsd.toFixed(2)}</div>
        <p style="margin: 10px 0 0; color: #666;">${data.guestCount} guests | ${data.eventType}</p>
      </div>
      
      <p style="text-align: center;">
        <a href="https://greenists-events.com/quote/${data.quoteNumber}" class="cta-button">View Full Quote</a>
        ${data.pdfUrl ? `<br><a href="${data.pdfUrl}" style="color: #2D7A4A; margin-top: 10px; display: inline-block;">Download PDF</a>` : ''}
      </p>
      
      <div class="validity">
        ⏰ This quote is valid until <strong>${new Date(data.validUntil).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</strong>
      </div>
      
      <p>Ready to proceed? Simply reply to this email or call us to confirm your booking.</p>
      
      <p>Best regards,<br><strong>The Greenists Team</strong></p>
    </div>
    
    <div class="footer">
      <p><strong>Greenists Events</strong></p>
      <p>📞 +967 773 673 918 | ✉️ info@greenists-events.com</p>
    </div>
  </div>
</body>
</html>
    `,
    text: `
YOUR EVENT QUOTE - ${data.quoteNumber}

Dear ${data.clientName},

Thank you for your interest in Greenists! Here's your personalized event quote:

Event Type: ${data.eventType}
Guests: ${data.guestCount}
Estimated Total: $${data.totalUsd.toFixed(2)}

View full quote: https://greenists-events.com/quote/${data.quoteNumber}

This quote is valid until ${new Date(data.validUntil).toLocaleDateString()}.

Ready to proceed? Reply to this email or call us!

Best regards,
The Greenists Team

+967 773 673 918
info@greenists-events.com
    `,
  }),

  inquiryReceived: (data: { name: string; email: string; message: string; eventType?: string }) => ({
    subject: `New Inquiry Received | Greenists`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2D7A4A; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .detail { margin: 10px 0; padding: 10px; background: white; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Inquiry Received</h2>
    </div>
    <div class="content">
      <div class="detail"><strong>Name:</strong> ${data.name}</div>
      <div class="detail"><strong>Email:</strong> ${data.email}</div>
      ${data.eventType ? `<div class="detail"><strong>Event Type:</strong> ${data.eventType}</div>` : ''}
      <div class="detail"><strong>Message:</strong><br>${data.message}</div>
    </div>
  </div>
</body>
</html>
    `,
    text: `New Inquiry Received\n\nName: ${data.name}\nEmail: ${data.email}\n${data.eventType ? `Event Type: ${data.eventType}\n` : ''}Message: ${data.message}`,
  }),

  eventReminder: (data: { clientName: string; eventTitle: string; eventDate: Date; daysUntil: number }) => ({
    subject: `Event Reminder: ${data.eventTitle} in ${data.daysUntil} days | Greenists`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { background: #C9A227; color: #000; padding: 20px; text-align: center; }
    .content { padding: 30px; background: #fff; }
    .countdown { font-size: 48px; color: #2D7A4A; text-align: center; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>⏰ Event Reminder</h2>
    </div>
    <div class="content">
      <p>Dear ${data.clientName},</p>
      <div class="countdown">${data.daysUntil} days to go!</div>
      <p style="text-align: center; font-size: 18px;"><strong>${data.eventTitle}</strong></p>
      <p style="text-align: center;">${new Date(data.eventDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <p>We're excited and ready for your event! If you have any last-minute questions or changes, please contact us.</p>
      <p>Best regards,<br>The Greenists Team</p>
    </div>
  </div>
</body>
</html>
    `,
    text: `Event Reminder\n\nDear ${data.clientName},\n\n${data.daysUntil} days until ${data.eventTitle}!\n\nDate: ${new Date(data.eventDate).toLocaleDateString()}\n\nContact us if you have any questions.\n\nThe Greenists Team`,
  }),
};

// Mock email sending function (in production, integrate with actual email service)
export async function sendEmail(options: EmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
  console.log('📧 Sending email:', {
    to: options.to,
    subject: options.subject,
  });
  
  // In production, integrate with:
  // - SendGrid
  // - AWS SES
  // - Mailgun
  // - Resend
  // - etc.
  
  // For now, simulate successful send
  return {
    success: true,
    messageId: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
  };
}

// Send booking confirmation email
export async function sendBookingConfirmation(data: BookingEmailData): Promise<{ success: boolean; error?: string }> {
  const template = emailTemplates.bookingConfirmation(data);
  
  return sendEmail({
    to: data.clientEmail,
    subject: template.subject,
    html: template.html,
    text: template.text,
  });
}

// Send quote email
export async function sendQuoteEmail(data: QuoteEmailData): Promise<{ success: boolean; error?: string }> {
  const template = emailTemplates.quoteSent(data);
  
  return sendEmail({
    to: data.clientEmail,
    subject: template.subject,
    html: template.html,
    text: template.text,
  });
}

// Send event reminder
export async function sendEventReminder(data: { clientName: string; clientEmail: string; eventTitle: string; eventDate: Date; daysUntil: number }): Promise<{ success: boolean; error?: string }> {
  const template = emailTemplates.eventReminder(data);
  
  return sendEmail({
    to: data.clientEmail,
    subject: template.subject,
    html: template.html,
    text: template.text,
  });
}

// Send inquiry notification to admin
export async function sendInquiryNotification(data: { name: string; email: string; message: string; eventType?: string }): Promise<{ success: boolean; error?: string }> {
  const template = emailTemplates.inquiryReceived(data);
  
  return sendEmail({
    to: 'info@greenists-events.com', // Admin email
    subject: template.subject,
    html: template.html,
    text: template.text,
  });
}
