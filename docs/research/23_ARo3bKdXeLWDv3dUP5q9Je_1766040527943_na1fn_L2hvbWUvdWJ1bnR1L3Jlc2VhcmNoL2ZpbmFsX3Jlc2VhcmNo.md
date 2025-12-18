# Comprehensive Research: Wedding Videographers in Aden, Yemen

This document provides a detailed overview of wedding videographers in Aden, Yemen, including their contact information, services, and pricing. The information has been gathered from various online sources and is presented in a structured format for use in the Greenists event management platform.

## Methodology

The research was conducted by searching online for wedding videographers in Aden, Yemen, using both English and Arabic search terms. The websites and social media pages of the identified videographers were then visited to gather more detailed information. The confidence level for the data is rated as Medium, as the information is primarily from online sources and has not been independently verified.

## Wedding Videographers

The following table summarizes the information gathered on wedding videographers in Aden, Yemen:

| Name | Arabic Name | Address | Phone Number | WhatsApp Number | Instagram | Services | Cinematic Packages | Pricing (YER) | Pricing (USD) | Source | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Al Fan Al Hadeth Studio | استوديو الفن الحديث | Aden, Yemen | +967-73380002 | +967-73380002 | N/A | Wedding Photography & Videography | Not Specified | Not Specified | Not Specified | [Arabia Weddings](https://www.arabiaweddings.com/aden/wedding-photographers/al-fan-al-hadeth-studio-adan) | Medium |
| Al Layth | الليث | Aden, Yemen | +967-733514054 | +967-733514054 | N/A | Wedding Photography & Videography | Not Specified | Not Specified | Not Specified | [Arabia Weddings](https://www.arabiaweddings.com/aden/wedding-photographers/al-layth) | Medium |
| HZ Photography | N/A | Aden, Yemen | N/A | +967-733209052 | @banatzaid_photography | Wedding photographer / videographer / Dentist | Not Specified | Not Specified | Not Specified | [Instagram](https://www.instagram.com/banatzaid_photography/) | Medium |

## SQL Schema

The following SQL `CREATE TABLE` statement can be used to create a database table for storing the information on wedding videographers:

```sql
CREATE TABLE wedding_videographers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_arabic VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(255),
    whatsapp_number VARCHAR(255),
    instagram_handle VARCHAR(255),
    services TEXT,
    cinematic_packages TEXT,
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255),
    source VARCHAR(255),
    confidence_level VARCHAR(50),
    notes TEXT
);
```

## Sample Data (JSON)

The following is a sample JSON array of the data collected:

```json
[
    {
        "name": "Al Fan Al Hadeth Studio",
        "name_arabic": "استوديو الفن الحديث",
        "address": "Aden, Yemen",
        "phone_number": "+967-73380002",
        "whatsapp_number": "+967-73380002",
        "instagram_handle": null,
        "services": "Wedding Photography & Videography",
        "cinematic_packages": null,
        "pricing_yer": null,
        "pricing_usd": null,
        "source": "https://www.arabiaweddings.com/aden/wedding-photographers/al-fan-al-hadeth-studio-adan",
        "confidence_level": "Medium",
        "notes": null
    },
    {
        "name": "Al Layth",
        "name_arabic": "الليث",
        "address": "Aden, Yemen",
        "phone_number": "+967-733514054",
        "whatsapp_number": "+967-733514054",
        "instagram_handle": null,
        "services": "Wedding Photography & Videography",
        "cinematic_packages": null,
        "pricing_yer": null,
        "pricing_usd": null,
        "source": "https://www.arabiaweddings.com/aden/wedding-photographers/al-layth",
        "confidence_level": "Medium",
        "notes": null
    },
    {
        "name": "HZ Photography",
        "name_arabic": null,
        "address": "Aden, Yemen",
        "phone_number": null,
        "whatsapp_number": "+967-733209052",
        "instagram_handle": "@banatzaid_photography",
        "services": "Wedding photographer / videographer / Dentist",
        "cinematic_packages": null,
        "pricing_yer": null,
        "pricing_usd": null,
        "source": "https://www.instagram.com/banatzaid_photography/",
        "confidence_level": "Medium",
        "notes": null
    }
]
```

## Conclusion

This research provides a starting point for populating the Greenists platform with information on wedding videographers in Aden, Yemen. Further research is recommended to obtain more detailed information on pricing and cinematic packages, and to verify the existing information.
