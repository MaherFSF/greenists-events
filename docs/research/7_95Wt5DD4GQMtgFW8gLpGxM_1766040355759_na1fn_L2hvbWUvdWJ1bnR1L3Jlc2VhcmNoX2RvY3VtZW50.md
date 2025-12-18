# Aden Wedding Halls: Khor Maksar District

## Introduction

This document provides a summary of the research conducted on wedding halls in the Khor Maksar district of Aden, Yemen. The information is intended to be used for the Greenists event management platform. The research focused on finding real, verified information, including names, addresses, phone numbers, and WhatsApp numbers. Due to limitations in accessing some online sources (e.g., Facebook and Instagram pages requiring login), some information, particularly pricing and capacity, was not readily available. The confidence level for the collected data is medium, as it is based on publicly available information from web searches, but could not be fully verified through direct contact or official price lists.

## Wedding Hall Information

| Name | Arabic Name | Address | Phone Number(s) | WhatsApp Number | Website | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Coral Hotel Aden | فندق كورال عدن | Khormaksar, Aden, Yemen | +967 2 272 746 | Not Found | [https://www.coral-aden.com/](https://www.coral-aden.com/) | Offers multiple halls: Petra, Shibam, Sira, Socotra, Raydan, Andalus, Crater, and Al Khaymah. Details on capacity and pricing were not available on the website. |
| Senorita Wedding Palace | قصر سنيوريتا للأفراح | Aden - Khor Maksar - beside Amasi Hall | 734671441 | 776443070 | Not Found | | 
| Saba Palace | قـصـر سبــأ | Aden - Khor Maksar - Abyan Beach | 02271000, 0237474 | 009672271088 | Not Found | Also known as Saba Palace for Conferences and Events. It has multiple halls, including Saba Al-Soghra (Small Saba). | 
| Magic Hall for Weddings and Events | قاعة ماجيك للأفراح والمناسبات | Aden - Khor Maksar - Al-Arish - behind the Public Prosecution complex | 773858810 | Not Found | Not Found | | 
| Amasi Aden Hall for Events | قاعة اماسي عدن للمناسبات | Aden - Khor Maksar - Coastline | Not Found | Not Found | Not Found | | 

## SQL Schema

```sql
CREATE TABLE wedding_halls (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    address VARCHAR(255),
    district VARCHAR(255) DEFAULT 'Khor Maksar',
    city VARCHAR(255) DEFAULT 'Aden',
    country VARCHAR(255) DEFAULT 'Yemen',
    phone_number VARCHAR(255),
    whatsapp_number VARCHAR(255),
    website VARCHAR(255),
    capacity INT,
    price_yer DECIMAL(10, 2),
    price_usd DECIMAL(10, 2),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Sample Data

```json
[
  {
    "name": "Coral Hotel Aden",
    "arabic_name": "فندق كورال عدن",
    "address": "Khormaksar, Aden, Yemen",
    "phone_number": "+967 2 272 746",
    "website": "https://www.coral-aden.com/",
    "notes": "Offers multiple halls: Petra, Shibam, Sira, Socotra, Raydan, Andalus, Crater, and Al Khaymah. Details on capacity and pricing were not available on the website."
  },
  {
    "name": "Senorita Wedding Palace",
    "arabic_name": "قصر سنيوريتا للأفراح",
    "address": "Aden - Khor Maksar - beside Amasi Hall",
    "phone_number": "734671441",
    "whatsapp_number": "776443070"
  },
  {
    "name": "Saba Palace",
    "arabic_name": "قـصـر سبــأ",
    "address": "Aden - Khor Maksar - Abyan Beach",
    "phone_number": "02271000, 0237474",
    "whatsapp_number": "009672271088",
    "notes": "Also known as Saba Palace for Conferences and Events. It has multiple halls, including Saba Al-Soghra (Small Saba)."
  }
]
```
