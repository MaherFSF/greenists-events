# Exhaustive Research: ADEN DECORATION: Corporate event designers

This document provides a detailed overview of corporate event designers in Aden, Yemen, for the Greenists event management platform.

## Bahr Al-Sharq for Marketing & Advertising

*   **Name:** Bahr Al-Sharq for Marketing & Advertising
*   **Arabic Name:** بحر الشرق للتسويق والاعلان
*   **Website:** https://www.bahrshrq.com/en/index.html
*   **Services:** Event Management, Mobile Advertising Screens, Digital Marketing, Brand Identity Design, Websites & Apps Development, Media Production, Social Media Management, Marketing Strategy & Planning, Printing & Packaging.
*   **Address:** Republic of Yemen - Aden Governorate, Mansoura District - Next to Saber Hospital
*   **Phone:** +967-2-351417
*   **WhatsApp:** +967-784-006800
*   **Email:** info@bahrshrq.com

## Monasaba

*   **Name:** Monasaba
*   **Arabic Name:** مناسبة
*   **Website:** https://monasaba-ye.com/
*   **Services:** Event Management, Press Conferences, Seminars, Advertising Campaigns, Product Launching, Dealer Meets, Promotional Publicity, Exhibitions, Consultant and training.
*   **Address:** Aden - Khor Maksar, Al-Arish
*   **Phone:** +967 777 385 333
*   **Email:** info@monasaba-ye.com

## HMS

*   **Name:** HMS
*   **Arabic Name:** إتش إم إس
*   **Website:** https://hms-yem.com/
*   **Services:** Event Management, Advertising Services.
*   **Address:** Almusbahi Tour, Haddah Street, Sana'a, Republic of Yemen.
*   **Phone:** +967 734198730
*   **Email:** info@hms-yem.com, hms@hms-yem.com

## SQL Schema

```sql
CREATE TABLE corporate_event_designers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    website VARCHAR(255),
    services TEXT,
    address VARCHAR(255),
    phone VARCHAR(20),
    whatsapp VARCHAR(20),
    email VARCHAR(255)
);
```
