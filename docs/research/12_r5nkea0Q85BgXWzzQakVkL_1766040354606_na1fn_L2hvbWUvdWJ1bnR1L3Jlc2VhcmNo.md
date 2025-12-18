# Research on Gold Mohur Beach, Aden, Yemen

This document contains research findings on Gold Mohur Beach in Aden, Yemen, for the Greenists event management platform.


## General Information

*   **Name:** Gold Mohur Beach
*   **Arabic Name:** شاطئ جولد مور
*   **Location:** Tawahi District, Aden, Yemen. It is located between Jabal Shamsan and Elephant Bay.

## Facilities

Based on the research, Gold Mohur Beach offers the following facilities:

*   **Basic Amenities:** Chairs and umbrellas for rent.
*   **Food and Drinks:** Small kiosks and vendors selling snacks and drinks.
*   **Activities:** Boat rides to secluded areas.
*   **Nearby Hotels:** The Gold Mohur Hotel & Resort is located nearby, which offers more extensive facilities, including a bar/lounge, concierge, 24-hour front desk, and conference facilities.

## Events and Permits

There is limited information available online regarding the specific process for obtaining event permits for Gold Mohur Beach. However, based on general information for events in Yemen, it is likely that a permit from the local authorities in Aden would be required. It is recommended to contact the local municipality or the Ministry of Tourism for detailed information.

## Sunset Timings

Sunset times in Aden for December 2025 are approximately between 5:30 PM and 5:40 PM.

## Contact Information

*   **Gold Mohur Hotel & Resort:**
    *   **Phone:** +967 2 204010
    *   **Website:** The official website (goldmohurhotel.com) appears to be down, but the hotel is listed on the Millennium Hotels website (millenniumhotels.com).


## Database Schema

```sql
CREATE TABLE venues (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    category VARCHAR(100),
    address VARCHAR(255),
    address_ar VARCHAR(255),
    phone VARCHAR(50),
    whatsapp VARCHAR(50),
    website VARCHAR(255),
    facilities JSON,
    permit_info TEXT,
    sunset_timings JSON,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Sample Data

```json
[
  {
    "name": "Gold Mohur Beach",
    "name_ar": "شاطئ جولد مور",
    "category": "Beach",
    "address": "Tawahi District, Aden, Yemen",
    "address_ar": "مديرية التواهي، عدن، اليمن",
    "phone": null,
    "whatsapp": null,
    "website": null,
    "facilities": {
      "amenities": ["Chair and umbrella rentals"],
      "food_and_drinks": ["Kiosks", "Vendors"],
      "activities": ["Boat rides"]
    },
    "permit_info": "Permit from local authorities in Aden is likely required. Contact the local municipality or the Ministry of Tourism for details.",
    "sunset_timings": {
      "december": "5:30 PM - 5:40 PM"
    },
    "notes": "Located between Jabal Shamsan and Elephant Bay."
  }
]
```

## Summary of Findings

Gold Mohur Beach is a popular public beach in Aden, Yemen, known for its golden sand and calm waters. It offers basic amenities such as chair and umbrella rentals, along with food and drink vendors. While the beach itself does not have extensive facilities, the nearby Gold Mohur Hotel & Resort provides a wider range of services. Information on event permits is limited, and it is recommended to contact local authorities for specific details. Sunset times in December are in the late afternoon, making it a scenic location for evening events.

## References

1.  [Gold Mohur Beach Tourism - Travelsetu.com](https://travelsetu.com/guide/gold-mohur-beach-tourism)
2.  [Sunrise and sunset times in Aden - Yemen](https://www.timeanddate.com/sun/yemen/aden)
3.  [Gold Mohur Hotel & Resort, Aden - Cvent](https://www.cvent.com/venues/aden/resort/gold-mohur-hotel-resort-aden/venue-f04a91af-5201-4f38-8789-88acb4f9cf6a)
4. [Millennium Hotels and Resorts](https://www.millenniumhotels.com)
