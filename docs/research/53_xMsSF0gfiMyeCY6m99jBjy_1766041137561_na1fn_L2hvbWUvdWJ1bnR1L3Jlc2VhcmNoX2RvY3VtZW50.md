
# Research Report: DATABASE TABLE: suppliers - vendor management schema

**Topic:** DATABASE TABLE: suppliers - vendor management schema

**Category:** Database

**Priority:** Critical

**Confidence:** Medium - The information was gathered from public sources and has not been independently verified. Further verification is recommended.

## Key Data Points

This document outlines the database schema and sample data for the `suppliers` table of the Greenists event management platform in Aden, Yemen. The research focused on identifying real, verifiable information for local suppliers, including their Arabic names, contact details, and service types. The following key data points were gathered:

*   **DAS:** An event planning, styling, and design service with a WhatsApp contact number.
*   **Al Fan Al Hadeth Studio - Adan:** A wedding photography service with a phone number.
*   **Al Hawanem lingerie:** A wedding dress supplier with a phone number.
*   **Al Layth:** A wedding photography service with a phone number.

## SQL Schema

```sql
CREATE TABLE suppliers (
    supplier_id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_name VARCHAR(255) NOT NULL,
    supplier_name_ar VARCHAR(255),
    service_type VARCHAR(100),
    address VARCHAR(255),
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    pricing_yer DECIMAL(10, 2),
    pricing_usd DECIMAL(10, 2),
    notes TEXT
);
```

## Sample Data

```json
[
    {
        "supplier_name": "DAS",
        "supplier_name_ar": "داس",
        "service_type": "Event Planning | styling | Design",
        "address": "YEMEN.ADEN",
        "phone_number": null,
        "whatsapp_number": "+967 771 376 041",
        "email": null,
        "website": "https://www.instagram.com/das_4events/",
        "pricing_yer": null,
        "pricing_usd": null,
        "notes": "- Special arrangements for your special days🤍"
    },
    {
        "supplier_name": "Al Fan Al Hadeth Studio - Adan",
        "supplier_name_ar": "استديو الفن الحديث",
        "service_type": "Wedding Photographers",
        "address": "Yemen, Aden",
        "phone_number": "+967-73380002",
        "whatsapp_number": null,
        "email": null,
        "website": "https://www.arabiaweddings.com/aden/wedding-photographers/al-fan-al-hadeth-studio-adan",
        "pricing_yer": null,
        "pricing_usd": null,
        "notes": null
    },
    {
        "supplier_name": "Al Hawanem lingerie",
        "supplier_name_ar": "الهوانم للملابس الداخلية",
        "service_type": "Wedding Dresses",
        "address": "Yemen, Aden",
        "phone_number": "+967-2265096",
        "whatsapp_number": null,
        "email": null,
        "website": "https://www.arabiaweddings.com/aden/wedding-dresses/al-hawanem-lingerie",
        "pricing_yer": null,
        "pricing_usd": null,
        "notes": null
    },
    {
        "supplier_name": "Al Layth",
        "supplier_name_ar": "الليث",
        "service_type": "Wedding Photographers",
        "address": "Yemen, Aden",
        "phone_number": "+967-733514054",
        "whatsapp_number": null,
        "email": null,
        "website": "https://www.arabiaweddings.com/aden/wedding-photographers/al-layth",
        "pricing_yer": null,
        "pricing_usd": null,
        "notes": null
    }
]
```

## References

[1] DAS (@das_4events) • Instagram photos and videos. (n.d.). Retrieved from https://www.instagram.com/das_4events/

[2] Al Fan Al Hadeth Studio - Adan | Arabia Weddings. (n.d.). Retrieved from https://www.arabiaweddings.com/aden/wedding-photographers/al-fan-al-hadeth-studio-adan

[3] Al Hawanem lingerie | Arabia Weddings. (n.d.). Retrieved from https://www.arabiaweddings.com/aden/wedding-dresses/al-hawanem-lingerie

[4] Al Layth | Arabia Weddings. (n.d.). Retrieved from https://www.arabiaweddings.com/aden/wedding-photographers/al-layth
