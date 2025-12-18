
# DJs and Modern Entertainment in Aden, Yemen

## Introduction

This document provides an overview of the DJ and modern entertainment scene in Aden, Yemen. The information has been gathered from various online sources and is intended to be used for the Greenists event management platform.

## DJs

Below is a list of DJs found in Yemen, with a focus on Aden. Contact information and other details are provided where available.

### DJ LOZAN

| Field | Information |
|---|---|
| Name | DJ LOZAN |
| Arabic Name | دي جي لوزان |
| Location | Sana'a, Yemen |
| Facebook | [https://www.facebook.com/djlozan/](https://www.facebook.com/djlozan/) |
| Phone 1 | +967 774 099 755 |
| Phone 2 | +967 774 612 774 |
| WhatsApp | Not explicitly mentioned, but these numbers are likely WhatsApp enabled. |

**Note:** While DJ LOZAN is based in Sana'a, he is a prominent DJ in Yemen and may be available for events in Aden.

### DJ Aden (m.ohamad.dg)

| Field | Information |
|---|---|
| Name | DJ Aden |
| Arabic Name | دي جي عدن |
| Location | Aden, Yemen |
| TikTok | [https://www.tiktok.com/@m.ohamad.dg](https://www.tiktok.com/@m.ohamad.dg) |
| Phone | +966 50 420 0598 |
| WhatsApp | The provided number is a Saudi Arabian number, which is commonly used in Yemen and is WhatsApp enabled. |
| Services | Weddings, henna parties, engagements, bachelor parties. |

## Pricing

Based on information from Cueup, the average price for a DJ in Yemen is around **$100 per hour**. Prices can range from **$80 to $200 per hour**. For a typical 4-hour party, you can expect to pay between **$320 and $800**.

## SQL Schema

```sql
CREATE TABLE djs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  arabic_name VARCHAR(255),
  location VARCHAR(255),
  phone_1 VARCHAR(255),
  phone_2 VARCHAR(255),
  whatsapp VARCHAR(255),
  facebook VARCHAR(255),
  tiktok VARCHAR(255),
  instagram VARCHAR(255),
  services TEXT,
  pricing_usd_per_hour DECIMAL(10, 2),
  pricing_yer_per_hour DECIMAL(10, 2),
  notes TEXT
);
```

## Sample Data

```json
[
  {
    "name": "DJ LOZAN",
    "arabic_name": "دي جي لوزان",
    "location": "Sana'a, Yemen",
    "phone_1": "+967 774 099 755",
    "phone_2": "+967 774 612 774",
    "whatsapp": "+967 774 099 755",
    "facebook": "https://www.facebook.com/djlozan/",
    "tiktok": null,
    "instagram": null,
    "services": "Weddings, Parties, Events",
    "pricing_usd_per_hour": 100,
    "pricing_yer_per_hour": 53500,
    "notes": "Based in Sana'a, but may travel to Aden."
  },
  {
    "name": "DJ Aden",
    "arabic_name": "دي جي عدن",
    "location": "Aden, Yemen",
    "phone_1": "+966 50 420 0598",
    "phone_2": null,
    "whatsapp": "+966 50 420 0598",
    "facebook": null,
    "tiktok": "https://www.tiktok.com/@m.ohamad.dg",
    "instagram": null,
    "services": "Weddings, henna parties, engagements, bachelor parties.",
    "pricing_usd_per_hour": 100,
    "pricing_yer_per_hour": 53500,
    "notes": "Phone number is a Saudi Arabian number."
  }
]
```
