_# Research Report: Flower Shops and Florists in Aden, Yemen

## 1. Introduction

This report provides a detailed overview of flower shops and florists operating in Aden, Yemen. The research was conducted to gather essential business information, including names, contact details, specialties, and online presence. The collected data has been structured to be database-ready, with a corresponding SQL schema and sample data provided.

## 2. Methodology

The research process involved the following steps:

1.  **Initial Search:** A broad search was conducted using queries such as "flower shops in Aden Yemen", "florists in Aden Yemen", and "محلات زهور في عدن اليمن" to identify potential businesses.
2.  **Targeted Investigation:** The most promising search results were investigated further by visiting their websites and social media pages.
3.  **Data Extraction:** Key information, including names, phone numbers, WhatsApp numbers, addresses, and specialties, was extracted and compiled.
4.  **Data Structuring:** The collected data was organized into a structured format for clarity and ease of use.

## 3. Findings

The following table summarizes the information gathered on flower shops and florists in Aden:

| Name          | Arabic Name | Phone                       | WhatsApp                    | Address                                                                                                                     | Specialties                                                                                                     | Source                                                              |
|---------------|-------------|-----------------------------|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| Flower Set    |             | +967-73302246               |                             |                                                                                                                             |                                                                                                                 | [1]                                                                 |
| Lareen Flower | لارين فلاور | +967-782038695, +967-770860861 | +967-782038695, +967-770860861 | Sabeal Street, Aden, Yemen, Jood Al-Hashidi Center / Crater, Al-Hashidi Mall, first floor / opposite the Military Museum, Crater | flowers and gift arrangements, natural flower gifts, wedding bouquets, flower and chocolate bouquets, gift boxes | [2]                                                                 |
| Boon Store    | بون ستور    |                             | +967-782038695, +967-770860861 |                                                                                                                             | Gift and flower coordination                                                                                    | [3]                                                                 |

## 4. Database Integration

To facilitate the integration of this data into a production system, the following SQL schema and sample data have been prepared.

### 4.1. SQL Schema

_CREATE TABLE florists ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, arabic_name VARCHAR(255), phone VARCHAR(255), whatsapp VARCHAR(255), address TEXT, specialties TEXT, source VARCHAR(255) );_

### 4.2. Sample Data (JSON)

_[
  {
    "name": "Flower Set",
    "arabic_name": null,
    "phone": "+967-73302246",
    "whatsapp": null,
    "address": null,
    "specialties": null,
    "source": "https://www.arabiaweddings.com/aden/flower-shops/flower-set"
  },
  {
    "name": "Lareen Flower",
    "arabic_name": "لارين فلاور",
    "phone": "+967-782038695, +967-770860861",
    "whatsapp": "+967-782038695, +967-770860861",
    "address": "Sabeal Street, Aden, Yemen, Jood Al-Hashidi Center / Crater, Al-Hashidi Mall, first floor / opposite the Military Museum, Crater",
    "specialties": "flowers and gift arrangements, natural flower gifts, wedding bouquets, flower and chocolate bouquets, gift boxes",
    "source": "https://www.instagram.com/lareen__flower1/?hl=en"
  },
  {
    "name": "Boon Store",
    "arabic_name": "بون ستور",
    "phone": null,
    "whatsapp": "+967-782038695, +967-770860861",
    "address": null,
    "specialties": "Gift and flower coordination",
    "source": "https://www.instagram.com/boonstore1/?hl=en"
  }
]_

## 5. Conclusion

This research has successfully identified and documented key information for three flower shops in Aden, Yemen. The provided data, SQL schema, and sample JSON are ready for integration into the Greenists platform. Further research could expand this list and gather more details on pricing and delivery options.

## 6. References

[1] Arabia Weddings. (n.d.). *Flower Set*. Retrieved from https://www.arabiaweddings.com/aden/flower-shops/flower-set

[2] Instagram. (n.d.). *Lareen Flower*. Retrieved from https://www.instagram.com/lareen__flower1/?hl=en

[3] Instagram. (n.d.). *Boon Store*. Retrieved from https://www.instagram.com/boonstore1/?hl=en
_
