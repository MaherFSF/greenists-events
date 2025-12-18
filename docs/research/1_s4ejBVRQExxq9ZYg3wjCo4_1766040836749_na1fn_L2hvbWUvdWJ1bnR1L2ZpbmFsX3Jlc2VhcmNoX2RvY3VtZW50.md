# Comprehensive Research Report: Hotel Venues in Aden, Yemen

**Author:** Manus AI
**Date:** December 18, 2025

## 1. Executive Summary

This report details the findings of an investigation into the Mercure Aden Hotel, as requested for the Greenists Event Management Platform. The research confirms that the **Mercure Aden Hotel is permanently closed** and has sustained significant damage, making it unsuitable for events. Consequently, this report identifies and provides a comprehensive analysis of a viable alternative: the **Coral Hotel Aden**, a 5-star hotel with extensive facilities.

## 2. Mercure Aden Hotel: Status Update

Initial research revealed that the Mercure Aden Hotel is no longer in operation. The hotel's official website is defunct, and it is not listed on the Accor Hotels website, the parent company of the Mercure brand. News reports from 2023 indicate that the hotel, now referred to as the "Aden Hotel," was severely damaged during the conflict in 2015 and requires an estimated **$40 million for restoration** [1]. Due to its current state, obtaining information on its former facilities, such as conference rooms, catering, and rates, is not possible.

## 3. Alternative Venue: Coral Hotel Aden

As a suitable alternative, the 5-star Coral Hotel Aden has been identified. This hotel is fully operational and presents a strong option for the Greenists platform. The hotel has a professional online presence and detailed information is readily available.

### 3.1. General Information

| Attribute | English | Arabic |
| :--- | :--- | :--- |
| **Name** | Coral Hotel Aden | فندق كورال عدن |
| **Address** | Khormaksar, Aden, Yemen | خور مكسر، عدن، اليمن |
| **Phone** | +967 2 272 746 | |
| **WhatsApp** | +967 776 365 267 | |
| **Email** | fo@coral-aden.com | |
| **Website** | [https://www.coral-aden.com/](https://www.coral-aden.com/) | |

### 3.2. Facilities and Services

The Coral Hotel Aden offers a range of modern amenities suitable for international business and event travelers:

*   **Parking:** Secured parking is available for guests.
*   **Internet:** High-speed Wi-Fi is accessible throughout the hotel.
*   **Dining:** The hotel features a restaurant and a café.
*   **Recreation:** A health club with modern equipment is on-site.
*   **Transportation:** Airport transfers, including a VIP reception service, are provided.

### 3.3. Event Halls

The hotel provides a variety of event halls, though specific capacity details are not available on the website. The following halls are listed:

| Hall Name | Arabic Name | Dimensions (m) |
| :--- | :--- | :--- |
| Petra Hall | قاعة البتراء | Not specified |
| Sira Hall | قاعة صيرة | Not specified |
| Socotra Hall | قاعة سقطرى | Not specified |
| Raydan Hall | قاعة ريدان | Area A: 6.2 x 10.7, Area B: 10.6 x 7.9 |
| Andalus Hall | قاعة الأندلس | Not specified |
| Crater Hall | قاعة كريتر | Not specified |
| Al Khaymah Hall| قاعة الخيمة | Not specified |

Further details regarding hall capacities, catering menus, AV equipment, and pricing must be obtained by contacting the hotel directly.

## 4. Database Integration

To support the Greenists platform, the following database schema and sample data have been prepared.

### 4.1. SQL Schema

```sql
CREATE TABLE venues (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    category VARCHAR(255),
    star_rating INT,
    address VARCHAR(255),
    address_ar VARCHAR(255),
    phone VARCHAR(50),
    whatsapp VARCHAR(50),
    email VARCHAR(255),
    website VARCHAR(255),
    parking BOOLEAN,
    wifi BOOLEAN,
    restaurant BOOLEAN,
    health_club BOOLEAN,
    airport_transfer BOOLEAN
);

CREATE TABLE venue_halls (
    id INT PRIMARY KEY AUTO_INCREMENT,
    venue_id INT,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    dimensions VARCHAR(255),
    capacity_theatre INT,
    capacity_classroom INT,
    capacity_banquet INT,
    capacity_reception INT,
    FOREIGN KEY (venue_id) REFERENCES venues(id)
);
```

### 4.2. Sample Data (JSON)

```json
{
  "venues": [
    {
      "name": "Coral Hotel Aden",
      "name_ar": "فندق كورال عدن",
      "category": "Venue",
      "star_rating": 5,
      "address": "Khormaksar, Aden, Yemen",
      "address_ar": "خور مكسر، عدن، اليمن",
      "phone": "+967 2 272 746",
      "whatsapp": "+967 776 365 267",
      "email": "fo@coral-aden.com",
      "website": "https://www.coral-aden.com/",
      "parking": true,
      "wifi": true,
      "restaurant": true,
      "health_club": true,
      "airport_transfer": true
    }
  ],
  "venue_halls": [
    {
      "venue_id": 1,
      "name": "Petra Hall",
      "name_ar": "قاعة البتراء"
    },
    {
      "venue_id": 1,
      "name": "Sira Hall",
      "name_ar": "قاعة صيرة"
    },
    {
      "venue_id": 1,
      "name": "Socotra Hall",
      "name_ar": "قاعة سقطرى"
    },
    {
      "venue_id": 1,
      "name": "Raydan Hall",
      "name_ar": "قاعة ريدان",
      "dimensions": "Area A: 6.2m x 10.7m, Area B: 10.6m x 7.9m"
    },
    {
      "venue_id": 1,
      "name": "Andalus Hall",
      "name_ar": "قاعة الأندلس"
    },
    {
      "venue_id": 1,
      "name": "Crater Hall",
      "name_ar": "قاعة كريتر"
    },
    {
      "venue_id": 1,
      "name": "Al Khaymah Hall",
      "name_ar": "قاعة الخيمة"
    }
  ]
}
```

## 5. Conclusion and Recommendations

The Mercure Aden Hotel is not a viable option for the Greenists platform. The **Coral Hotel Aden is a strong alternative**, and it is recommended to proceed with direct contact to obtain the remaining details required for a full assessment. The provided database schema and sample data can be used to begin integration into the Greenists platform.

## 6. References

[1] NewsYemen. (2023, August 27). *40 million dollars, the cost of restoring and rehabilitating the Aden Hotel*. Retrieved from https://www.newsyemen.net/new/94428
