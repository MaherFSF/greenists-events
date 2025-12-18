# Service Pricing Benchmarks in Aden, Yemen for Greenists Event Management Platform

## 1. Introduction

This report presents the findings of comprehensive research on service pricing benchmarks in Aden, Yemen. The research was conducted to provide the Greenists event management platform with essential data for its operations in the region. The scope of the research included identifying event management companies, event venues, and miscellaneous event-related services, along with their contact information and pricing details where available.

## 2. Methodology

The research was conducted using a variety of online sources, including search engines, business directories, and social media platforms. The search queries were performed in both English and Arabic to ensure comprehensive coverage. The collected data was then structured and organized for clarity and ease of use.

## 3. Findings

The research identified several key players in the Aden event management market, as well as a range of pricing for various services. The findings are summarized in the tables below.

### 3.1. Event Management Companies

| Company Name | Arabic Name | Address | Phone | WhatsApp | Email | Services |
|---|---|---|---|---|---|---|
| Monasaba Events Management | مناسبة لإدارة الفعاليات | Aden - Khor Maksar - Al-Arish | +967 777 385 333 | +967 777 385 333 | info@monasaba-ye.com | Event Management, Creative Services, Press Conferences, Seminars, Advertising Campaigns, Product Launching, Dealer Meets, Promotional Publicity, Exhibitions, Consultant and training. |
| Bahr Sharq Marketing and Advertising | بحر الشرق للتسويق والإعلان | Al-Mansoura District, beside Saber Hospital, Aden, Yemen | +967-2-351417 | +967-784-006800 | info@bahrshrq.com | Mobile advertising screens, digital marketing, branding, event management, website and application development, media and visual production, social media account management, marketing strategy and planning, printing and packaging. |

### 3.2. Event Venues

| Venue Name | Arabic Name | Address | Phone | Capacity | Price (YER) | Price (USD) |
|---|---|---|---|---|---|---|
| Qasr Al Arab for Events and Conferences (Small Hall) | قصر العرب للمناسبات والمؤتمرات | Maalla, Aden | 02/248885, 02/248889 | 150 | 240,000 | 960 |
| Magic Hall for Weddings, Events and Conferences | قاعة ماجيك للأفراح والمناسبات والمؤتمرات | - | - | - | 350,000 | 1400 |
| Amasi Aden Hall for Events | قاعة اماسي عدن للمناسبات | - | - | - | 1,000,000 | 4000 |

### 3.3. Miscellaneous Services

The following is a list of miscellaneous event-related services and their prices, as found on OpenSooq [1]. Please note that the phone numbers are partially redacted by the platform.

| Service | Price (YER) | Phone |
|---|---|---|
| Al-Bazi for printing cloth bags | 90 | 07777393XX |
| Italian Gym for rent | 300,000 | 07725523XX |
| Wedding and event koshas | 17,000 | 07766664XX |
| Billiards for sale | 200,000 | 07734033XX |
| Used painting for sale | 100,000 | 07735673XX |
| Product photographer | 40,000 | 07344083XX |
| Plant protection reserve | 290,000 | 07735050XX |
| Billiards | 300,000 | 07735743XX |
| Neon signs | Contact for price | 07724846XX |

## 4. Database Schema

The following SQL schema is proposed for storing the collected data in a relational database.

```sql
CREATE TABLE service_providers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    email VARCHAR(255),
    services TEXT,
    category VARCHAR(255)
);

CREATE TABLE venues (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    capacity INT,
    price_yer DECIMAL(10, 2),
    price_usd DECIMAL(10, 2)
);

CREATE TABLE miscellaneous_services (
    id INT PRIMARY KEY AUTO_INCREMENT,
    service VARCHAR(255) NOT NULL,
    price_yer DECIMAL(10, 2),
    phone VARCHAR(255)
);
```

## 5. Sample Data

A sample of the collected data is provided below in JSON format.

```json
{
  "service_providers": [
    {
      "name": "Monasaba Events Management",
      "arabic_name": "مناسبة لإدارة الفعاليات",
      "address": "Aden - Khor Maksar - Al-Arish",
      "phone": "+967 777 385 333",
      "whatsapp": "+967 777 385 333",
      "email": "info@monasaba-ye.com",
      "services": "Event Management, Creative Services, Press Conferences, Seminars, Advertising Campaigns, Product Launching, Dealer Meets, Promotional Publicity, Exhibitions, Consultant and training.",
      "category": "Event Management"
    },
    {
      "name": "Bahr Sharq Marketing and Advertising",
      "arabic_name": "بحر الشرق للتسويق والإعلان",
      "address": "Al-Mansoura District, beside Saber Hospital, Aden, Yemen",
      "phone": "+967-2-351417",
      "whatsapp": "+967-784-006800",
      "email": "info@bahrshrq.com",
      "services": "Mobile advertising screens, digital marketing, branding, event management, website and application development, media and visual production, social media account management, marketing strategy and planning, printing and packaging.",
      "category": "Marketing"
    }
  ],
  "venues": [
    {
      "name": "Qasr Al Arab for Events and Conferences (Small Hall)",
      "arabic_name": "قصر العرب للمناسبات والمؤتمرات",
      "address": "Maalla, Aden",
      "phone": "02/248885, 02/248889",
      "capacity": 150,
      "price_yer": 240000,
      "price_usd": 960
    },
    {
      "name": "Magic Hall for Weddings, Events and Conferences",
      "arabic_name": "قاعة ماجيك للأفراح والمناسبات والمؤتمرات",
      "address": null,
      "phone": null,
      "capacity": null,
      "price_yer": 350000,
      "price_usd": 1400
    },
    {
      "name": "Amasi Aden Hall for Events",
      "arabic_name": "قاعة اماسي عدن للمناسبات",
      "address": null,
      "phone": null,
      "capacity": null,
      "price_yer": 1000000,
      "price_usd": 4000
    }
  ],
  "miscellaneous_services": [
    {
      "service": "Al-B. Bazi for printing cloth bags",
      "price_yer": 90,
      "phone": "07777393XX"
    },
    {
      "service": "Italian Gym for rent",
      "price_yer": 300000,
      "phone": "07725523XX"
    },
    {
      "service": "Wedding and event koshas",
      "price_yer": 17000,
      "phone": "07766664XX"
    }
  ]
}
```

## 6. Conclusion and Recommendations

The research has provided valuable insights into the service pricing benchmarks in Aden, Yemen. It is recommended that the Greenists platform use this data to inform its pricing strategy and to build a comprehensive database of service providers in the region. Further research may be needed to obtain more detailed pricing information and to verify the contact details of the listed providers.

## 7. References

[1] OpenSooq. (n.d.). *خدمات فعاليات ومناسبات في عدن*. Retrieved from https://ye.opensooq.com/ar/عدن/الخدمات/فعاليات-ومناسبات
