# Research Report: Gold Mohur Hotel & Resort, Aden

**Date:** 2025-12-18

**Author:** Manus AI

## 1. Overview

This report provides a comprehensive overview of the Gold Mohur Hotel & Resort in Aden, Yemen, for the Greenists Event Management Platform. The information has been gathered from various online sources, and the confidence level for each data point is indicated.

## 2. Key Data

| Field | Value | Confidence | Source(s) |
| :--- | :--- | :--- | :--- |
| **Hotel Name** | Gold Mohur Hotel & Resort, Aden | High | Cvent, Wikipedia, etc. |
| **Arabic Name** | فندق جولدمهور عدن | High | Wikipedia, Facebook |
| **Address** | Hai Althawra P.O. Box 13040, Aden, Yemen | High | Cvent, Wikipedia |
| **Phone** | +967 - 2 - 204010 | Medium | abc-gcc.net |
| **Fax** | +967 - 2 - 205 158 | Medium | ohmygosh.on.ca |
| **Email** | Not Found | Low | - |
| **WhatsApp** | Not Found | Low | - |
| **Website** | goldmohurhotel.com (defunct) | Low | Wikipedia |
| **Contact Person** | Not Found | Low | - |

## 3. Event Halls & Capacities

The hotel has four event halls with the following capacities:

| Hall Name | U-Shape | Banquet | Cocktail | Theater | Classroom |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Gold Mohur Ballroom** | 400 | 800 | 2000 | 1200 | 800 |
| **Baradouni** | 35 | 100 | 150 | 150 | 100 |
| **Board Room “A”** | 25 | 70 | 90 | 90 | 70 |
| **Board Room “B”** | 10 | - | 15 | 15 | 10 |

*Source: Cvent [1]*

## 4. Pricing & Packages

No specific information regarding pricing for event halls, rooms, or wedding packages in either YER or USD was found during the research. This information will likely require direct contact with the hotel.

## 5. Photos

Several exterior photos of the hotel were found and are included in the submission files.

## 6. SQL Schema

```sql
CREATE TABLE venues (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    fax VARCHAR(255),
    email VARCHAR(255),
    whatsapp VARCHAR(255),
    website VARCHAR(255),
    contact_person VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE event_halls (
    id INT PRIMARY KEY AUTO_INCREMENT,
    venue_id INT,
    name VARCHAR(255) NOT NULL,
    u_shape_capacity INT,
    banquet_capacity INT,
    cocktail_capacity INT,
    theater_capacity INT,
    classroom_capacity INT,
    FOREIGN KEY (venue_id) REFERENCES venues(id)
);
```

## 7. Sample Data (JSON)

```json
[
  {
    "name": "Gold Mohur Hotel & Resort, Aden",
    "name_ar": "فندق جولدمهور عدن",
    "address": "Hai Althawra P.O. Box 13040, Aden, Yemen",
    "phone": "+967 - 2 - 204010",
    "fax": "+967 - 2 - 205 158",
    "email": null,
    "whatsapp": null,
    "website": "http://goldmohurhotel.com",
    "contact_person": null,
    "event_halls": [
      {
        "name": "Gold Mohur Ballroom",
        "u_shape_capacity": 400,
        "banquet_capacity": 800,
        "cocktail_capacity": 2000,
        "theater_capacity": 1200,
        "classroom_capacity": 800
      },
      {
        "name": "Baradouni",
        "u_shape_capacity": 35,
        "banquet_capacity": 100,
        "cocktail_capacity": 150,
        "theater_capacity": 150,
        "classroom_capacity": 100
      },
      {
        "name": "Board Room “A”",
        "u_shape_capacity": 25,
        "banquet_capacity": 70,
        "cocktail_capacity": 90,
        "theater_capacity": 90,
        "classroom_capacity": 70
      },
      {
        "name": "Board Room “B”",
        "u_shape_capacity": 10,
        "banquet_capacity": null,
        "cocktail_capacity": 15,
        "theater_capacity": 15,
        "classroom_capacity": 10
      }
    ]
  }
]
```

## 8. References

[1] Cvent. (n.d.). *Gold Mohur Hotel & Resort, Aden*. Retrieved from https://www.cvent.com/venues/aden/resort/gold-mohur-hotel-resort-aden/venue-f04a91af-5201-4f38-8789-88acb4f9cf6a
