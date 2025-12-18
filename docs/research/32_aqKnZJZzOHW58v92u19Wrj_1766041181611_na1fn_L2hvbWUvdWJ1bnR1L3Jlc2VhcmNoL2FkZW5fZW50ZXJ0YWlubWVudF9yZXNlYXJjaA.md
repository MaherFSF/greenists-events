# Aden Entertainment: Traditional Yemeni Bands and Musicians

**Author:** Manus AI

**Date:** 2025-12-18

## Introduction

This document provides a comprehensive overview of traditional Yemeni bands and musicians in Aden, Yemen. The research was conducted to populate a database for the Greenists Event Management Platform. The information presented here has been gathered from various online sources and verified where possible. This document includes key data points, a proposed SQL schema for a database, and sample data.

## Key Findings

The research identified several key figures in the traditional Yemeni music scene in Aden, both past and present. The dominant musical style in Aden is the "Adeni color," which is a diverse style influenced by various cultures, including Egyptian and Indian music. Other prominent styles include Sana'ani, Lahji, and Hadrami.

While it was possible to find information about several prominent musicians, obtaining verified contact information and pricing proved to be challenging. Many of the most famous traditional musicians are either deceased or do not have a public presence for bookings. However, we were able to find and verify contact information for one active musician, Ahmed Qasem.

## Musician Profiles

| Name | Arabic Name | Category | Style(s) | Contact | Notes | Verified |
| --- | --- | --- | --- | --- | --- | --- |
| Ahmed Qasem | أحمد قاسم | Musician/Band | Adeni | WhatsApp: +967 733 945 557, +967 779 991 127<br>Instagram: @ahmed_kasem73<br>Snapchat: @ahmedq_a21 | Available for parties and weddings. | Yes |
| Mohammed Saad Abdullah | محمد سعد عبدالله | Musician | Sana'ani, Lahji, Hadrami | None | Born in 1938. A prominent singer who mastered the lute. His songs have been covered by other Arab singers. A 2001 article mentioned he was ill, so his current status is unknown. | No |
| Mohammed Salem Bin Shamekh | | Musician | Shabwani | None | A singer and Oud player from Hadhramaut who later moved to Aden. He was a professional singer for the Ministry of Culture of the People's Democratic Republic of Yemen. | No |
| Faisal Alawi | | Musician | Adeni | None | A renowned singer and Oud player, often called the "king of Oud." He was known for his storytelling and rich, tense beats. Deceased in 2010. | Yes |
| Amal Kaadl | | Musician | Adeni | None | A female vocalist from Aden, known for her work with the Aden Chanting Ensemble and the composer Ahmed bin Ghodel. | No |

## SQL Schema

```sql
CREATE TABLE yemeni_musicians (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    category VARCHAR(255),
    style VARCHAR(255),
    whatsapp VARCHAR(255),
    instagram VARCHAR(255),
    snapchat VARCHAR(255),
    notes TEXT,
    pricing_yer DECIMAL(10, 2),
    pricing_usd DECIMAL(10, 2),
    verified BOOLEAN DEFAULT FALSE
);
```

## Sample Data

```json
[
  {
    "name": "Ahmed Qasem",
    "arabic_name": "أحمد قاسم",
    "category": "Musician/Band",
    "style": "Adeni",
    "contact": {
      "whatsapp": [
        "+967 733 945 557",
        "+967 779 991 127"
      ],
      "instagram": "@ahmed_kasem73",
      "snapchat": "@ahmedq_a21"
    },
    "notes": "Available for parties and weddings.",
    "pricing_yer": null,
    "pricing_usd": null,
    "verified": true
  }
]
```

## References

[1] [A Brief History of South Yemeni Music](https://www.stampthewax.com/2022/05/03/a-brief-history-of-south-yemeni-music/)

[2] [Music of Yemen - Wikipedia](https://en.wikipedia.org/wiki/Music_of_Yemen)

[3] [Mohammed Sa'ad Abdullah [Archives:2001/40/Culture] - Yemen Times archives](https://yementimes.com/mohammed-saad-abdullah-archives2001-40-culture-3/)

[4] [Faisal Alawi - Wikipedia](https://en.wikipedia.org/wiki/Faisal_Alawi)

[5] [الفنان احمد قاسم العدني Ahmed Qasem - YouTube](https://www.youtube.com/@Ahmed_kasem73)
