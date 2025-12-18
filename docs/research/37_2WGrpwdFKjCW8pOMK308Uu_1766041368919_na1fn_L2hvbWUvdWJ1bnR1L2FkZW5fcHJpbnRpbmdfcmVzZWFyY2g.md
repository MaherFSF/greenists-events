# Aden Printing and Signage Companies Research

This document provides a summary of research on printing and signage companies in Aden, Yemen. The information is intended for use by the Greenists event management platform.

## Company Profiles

### Aden for Advertisement (عدن للدعاية والإعلان)

*   **Address:** Al-Mansoora, Aden, Yemen
*   **Phone:** (00967) 02-351925
*   **WhatsApp:** +964 773 190 1030

### Adnan for Printing & Publisher (دار ومكتبة عدنان للطباعة والنشر)

*   **Address:** Aden, Yemen
*   **Phone:** (00967) 02-232097
*   **Note:** The contact information found online for this company appears to be for a business in Iraq, not Yemen. The Arabic name is likely also for the Iraqi entity.

### Al-Prince for Printing & Pub. (مطبعة الأمير)

*   **Address:** Daka, Al-Maalla, Aden, Yemen
*   **Phone:** (00967) 02-242795
*   **Note:** The contact information found online for this company appears to be for a business in Jordan, not Yemen. The Arabic name is likely also for the Jordanian entity.

### CC Art for Printing, Advertising and Translation (سي سي آرت للطباعة والإعلان والترجمة)

*   **Address:** Yemen / Aden - Al-Maalla, back street, next to 14 October newspaper, behind Al-Nawras restaurant, next to Al-Labani for car electricity, Aden, Yemen
*   **Phone:** +967 771 385 814
*   **Email:** cc.art.org@gmail.com

### Al Naseem Advertising

*   **Services:** 3D Signage, Indoor/Reception Signage, Flex Face Signage, Glass Branding, Vehicle Branding, Stamps, Offset Printing, Digital Printing, Corporate Gifts, Awards & Shields, Gypsum & Glass Partition, Exhibition Brand Standing, Showroom Inside Signage, Office Inside Signage.
*   **Note:** This company appears to be based in Dubai, not Aden. The provided phone number is a UAE number (+971 557216133). This may not be relevant for the Aden-specific request.

### yam.design4 (Instagram)

*   **Note:** Instagram page requires login to view content. Unable to access information.

## Database Schema

```sql
CREATE TABLE suppliers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    category VARCHAR(100),
    address TEXT,
    phone VARCHAR(50),
    whatsapp VARCHAR(50),
    email VARCHAR(255),
    services TEXT,
    notes TEXT,
    confidence_level VARCHAR(50),
    source VARCHAR(255)
);
```

## Sample Data

```json
[
    {
        "name": "Aden for Advertisement",
        "name_ar": "عدن للدعاية والإعلان",
        "category": "Printing & Signage",
        "address": "Al-Mansoora, Aden, Yemen",
        "phone": "(00967) 02-351925",
        "whatsapp": "+964 773 190 1030",
        "email": null,
        "services": null,
        "notes": "WhatsApp number appears to be an Iraqi number.",
        "confidence_level": "Medium",
        "source": "https://www.yemenyp.com/company/1383/Aden_for_Advertisement, https://www.facebook.com/p/%D8%B9%D8%AF%D9%86-%D9%84%D9%84%D8%AF%D8%B9%D8%A7%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86-100088634526610/"
    },
    {
        "name": "Adnan for Printing & Publisher",
        "name_ar": "دار ومكتبة عدنان للطباعة والنشر",
        "category": "Printing & Publishing",
        "address": "Aden, Yemen",
        "phone": "(00967) 02-232097",
        "whatsapp": null,
        "email": null,
        "services": null,
        "notes": "The contact information found online for this company appears to be for a business in Iraq, not Yemen. The Arabic name is likely also for the Iraqi entity.",
        "confidence_level": "Low",
        "source": "https://www.yemenyp.com/company/225/Adnan_for_Printing_Publisher, https://www.facebook.com/p/%D8%AF%D8%A7%D8%B1-%D9%88%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D8%B9%D8%AF%D9%86%D8%A7%D9%86-%D9%84%D9%84%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9-%D9%88%D8%A7%D9%84%D9%86%D8%B4%D8%B1-100064289700827/"
    },
    {
        "name": "Al-Prince for Printing & Pub.",
        "name_ar": "مطبعة الأمير",
        "category": "Printing & Publishing",
        "address": "Daka, Al-Maalla, Aden, Yemen",
        "phone": "(00967) 02-242795",
        "whatsapp": null,
        "email": null,
        "services": null,
        "notes": "The contact information found online for this company appears to be for a business in Jordan, not Yemen. The Arabic name is likely also for the Jordanian entity.",
        "confidence_level": "Low",
        "source": "https://www.yemenyp.com/company/226/Al_Prince_for_Printing_Pub, https://www.instagram.com/alameer_press/"
    },
    {
        "name": "CC Art for Printing, Advertising and Translation",
        "name_ar": "سي سي آرت للطباعة والإعلان والترجمة",
        "category": "Printing, Advertising, Translation",
        "address": "Yemen / Aden - Al-Maalla, back street, next to 14 October newspaper, behind Al-Nawras restaurant, next to Al-Labani for car electricity, Aden, Yemen",
        "phone": "+967 771 385 814",
        "whatsapp": null,
        "email": "cc.art.org@gmail.com",
        "services": null,
        "notes": null,
        "confidence_level": "High",
        "source": "https://www.facebook.com/ccart.org/"
    }
]
```
