# Comprehensive Research: Corporate Event Photographers in Aden, Yemen

## Introduction

This document provides a comprehensive overview of corporate event photographers in Aden, Yemen. The research was conducted to identify and verify professional photography services for the Greenists Event Management Platform. The information gathered includes company names, addresses, contact details, and services offered. The confidence level for the collected data is also indicated, highlighting the need for further verification for some entries, particularly regarding Arabic names and pricing information.

## Photographer Information

The following table summarizes the findings of the research, presenting a list of potential photographers and photography-related businesses in Aden, Yemen.

| Company Name | Arabic Name (Assumed) | Address | Phone/WhatsApp | Email | Website | Services | Pricing (YER/USD) | Confidence | Source |
|---|---|---|---|---|---|---|---|---|---|
| Flamingo Pictures | فلامنجو بيكتشرز | New Enmaa, Building A11, Aden | +967 774 380 109, +967 775 272 535 | info@flaminpic.com | https://flaminpic.com/ | Photography, Videography, etc. | N/A | High (Contact), Low (Arabic Name, Pricing) | flaminpic.com |
| Murad Abdu | مراد عبده | Aden, Yemen | N/A | N/A | N/A | News, Event, Documentary Photography | N/A | Medium (Services), Low (Contact, Arabic Name) | journalist.net |
| Mohammed Alqalisi | محمد القليسي | Aden, Yemen | N/A | N/A | N/A | News, Event, Documentary Photography | N/A | Medium (Services), Low (Contact, Arabic Name) | journalist.net |
| Ramzy Digital Photo Labs | مختبرات رمزي الرقمية للصور | Shaykh Othman, Aden | +967 2 231 423 | N/A | N/A | Photo Lab | N/A | Medium (Contact), Low (Arabic Name, Pricing) | yemenyp.com |
| Abdulla Ali Yosof | عبدالله علي يوسف | Aden, Yemen | +967 2 253 168 | N/A | N/A | Photography | N/A | Medium (Contact), Low (Arabic Name, Pricing) | yemenyp.com |
| Aden Photo Lab | معمل عدن للصور | Queen Arwa St, Arwa, Aden | +967 2 251 367 | N/A | N/A | Photo Lab | N/A | Medium (Contact), Low (Arabic Name, Pricing) | yemenyp.com |
| Ahmed Mohammed Awed Al-Shaepi | احمد محمد عوض الشعيبي | Aden, Yemen | +967 2 255 327 | N/A | N/A | Photography | N/A | Medium (Contact), Low (Arabic Name, Pricing) | yemenyp.com |
| Al-Hadi Ahmed Al-Qawi | الهادي احمد القوي | Aden, Yemen | +967 2 255 471 | N/A | N/A | Photography | N/A | Medium (Contact), Low (Arabic Name, Pricing) | yemenyp.com |
| Al-Iqbal Studeo | استوديو الاقبال | Al-Mansoora, Aden | +967 2 345 082 | N/A | N/A | Photography Studio | N/A | Medium (Contact), Low (Arabic Name, Pricing) | yemenyp.com |
| Ali Hadi A. Al-ghadhi | علي هادي الغاضي | Aden, Yemen | +967 2 231 344 | N/A | N/A | Photography | N/A | Medium (Contact), Low (Arabic Name, Pricing) | yemenyp.com |
| Family Home Photo | صور منزل العائلة | Madram St, Madram, Aden | +967 2 243 065 | N/A | N/A | Photography | N/A | Medium (Contact), Low (Arabic Name, Pricing) | yemenyp.com |
| Faraq S. Obaid | فاروق س. عبيد | Aden, Yemen | +967 2 241 479 | N/A | N/A | Photography | N/A | Medium (Contact), Low (Arabic Name, Pricing) | yemenyp.com |
| Gulf Photo Lab | معمل الخليج للصور | Aden, Yemen | +967 2 389 738 | N/A | N/A | Photo Lab | N/A | Medium (Contact), Low (Arabic Name, Pricing) | yemenyp.com |
| Saleh & Naser Almohassen | صالح وناصر المحسن | Aden, Yemen | +967 2 202 937 | N/A | N/A | Photography | N/A | Medium (Contact), Low (Arabic Name, Pricing) | yemenyp.com |
| Taha M.A. Anam Trading Est. | مؤسسة طه م. أ. انعم التجارية | Al-Maalla, Aden | +967 2 465 622 | N/A | N/A | Trading | N/A | Medium (Contact), Low (Arabic Name, Pricing) | yemenyp.com |
| The Popular Stores | المحلات الشعبية | Tawahi, Aden | +967 2 201 491 | N/A | N/A | General Stores | N/A | Medium (Contact), Low (Arabic Name, Pricing) | yemenyp.com |
| Zabara Photo Lab | معمل زبارة للصور | Al-Mansoora, Aden | +967 2 349 833 | N/A | N/A | Photo Lab | N/A | Medium (Contact), Low (Arabic Name, Pricing) | yemenyp.com |

## Database Schema

Below is the proposed SQL schema for storing the collected data in a structured database.

```sql
CREATE TABLE corporate_event_photographers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    company_name_ar VARCHAR(255),
    address VARCHAR(255),
    phone_whatsapp VARCHAR(255),
    email VARCHAR(255),
    website VARCHAR(255),
    services TEXT,
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255),
    confidence_level VARCHAR(255),
    source VARCHAR(255)
);
```

## Sample Data

Here is a sample of the data in JSON format, which can be used to populate the database.

```json
[
    {
        "company_name": "Flamingo Pictures",
        "company_name_ar": "فلامنجو بيكتشرز",
        "address": "New Enmaa, Building A11, Aden, Yemen",
        "phone_whatsapp": "+967 774 380 109, +967 775 272 535",
        "email": "info@flaminpic.com",
        "website": "https://flaminpic.com/",
        "services": "Photography, Videography, Training Video Production, Humanitarian Video Production, Human Interest Stories Video Production.",
        "pricing_yer": null,
        "pricing_usd": null,
        "confidence_level": "High for contact information, Low for Arabic name and pricing.",
        "source": "https://flaminpic.com/contact/"
    },
    {
        "company_name": "Murad Abdu",
        "company_name_ar": "مراد عبده",
        "address": "Aden, Yemen",
        "phone_whatsapp": null,
        "email": null,
        "website": null,
        "services": "Journalist, Photographer (specialization in news, events, documentary, breaking news).",
        "pricing_yer": null,
        "pricing_usd": null,
        "confidence_level": "Medium for services, Low for contact information and Arabic name.",
        "source": "https://journalist.net/photographers/in/yemen/aden"
    },
    {
        "company_name": "Mohammed Alqalisi",
        "company_name_ar": "محمد القليسي",
        "address": "Aden, Yemen",
        "phone_whatsapp": null,
        "email": null,
        "website": null,
        "services": "Journalist, Photographer (specialization in news, events, documentary, breaking news).",
        "pricing_yer": null,
        "pricing_usd": null,
        "confidence_level": "Medium for services, Low for contact information and Arabic name.",
        "source": "https://journalist.net/photographers/in/yemen/aden"
    }
]
```

## References

[1] Flamingo Pictures. (n.d.). *Contact us to Know Everything About us – FLAMINGO*. Retrieved from https://flaminpic.com/contact/
[2] journalist.net. (n.d.). *The Best Photographers for Hire in Aden*. Retrieved from https://journalist.net/photographers/in/yemen/aden
[3] YemenYP. (n.d.). *Top 18 Photography in Aden, Yemen*. Retrieved from https://www.yemenyp.com/category/Photography/city:Aden
