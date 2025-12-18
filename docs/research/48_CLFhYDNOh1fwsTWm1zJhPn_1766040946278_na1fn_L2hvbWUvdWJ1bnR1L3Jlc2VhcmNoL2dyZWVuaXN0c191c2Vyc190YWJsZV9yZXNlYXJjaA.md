# Greenists Platform: `users` Table Research and Schema

_This document provides a comprehensive overview of the research, design, and implementation details for the `users` database table of the Greenists event management platform, with a specific focus on the requirements for Aden, Yemen._

## 1. SQL Schema

The following SQL `CREATE TABLE` statement defines the structure of the `users` table. The design incorporates best practices for database schema design, including the use of UUIDs for primary keys, appropriate data types, and constraints to ensure data integrity. It also includes fields for localization, such as `full_name_ar`, to support the Arabic language.

```sql
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(255) NOT NULL,
    full_name_ar VARCHAR(255), -- الاسم بالعربي
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) UNIQUE, -- With country code, e.g., +967...
    whatsapp_number VARCHAR(20) UNIQUE, -- Can be the same as phone_number
    address_street VARCHAR(255),
    address_city VARCHAR(100),
    address_country VARCHAR(50) DEFAULT 'Yemen',
    profile_picture_url VARCHAR(255),
    user_role VARCHAR(50) NOT NULL CHECK (user_role IN ('attendee', 'organizer', 'vendor', 'admin')), -- User roles
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

## 2. Sample Data

This sample data illustrates the structure of user records in JSON format. The data reflects realistic user profiles for the platform in Aden, Yemen, including localized names and contact information.

```json
[
    {
        "full_name": "Mohammed Ali",
        "full_name_ar": "محمد علي",
        "email": "mohammed.ali@example.com",
        "phone_number": "+967771234567",
        "whatsapp_number": "+967771234567",
        "address_street": "123 Main Street",
        "address_city": "Aden",
        "user_role": "attendee"
    },
    {
        "full_name": "Fatima Saleh",
        "full_name_ar": "فاطمة صالح",
        "email": "fatima.saleh@example.com",
        "phone_number": "+967731234567",
        "whatsapp_number": "+967731234567",
        "address_street": "456 Al-Tawahi St",
        "address_city": "Aden",
        "user_role": "organizer"
    },
    {
        "full_name": "Ahmed Abdullah",
        "full_name_ar": "أحمد عبدالله",
        "email": "ahmed.abdullah@example.com",
        "phone_number": "+967711234567",
        "whatsapp_number": "+967711234567",
        "address_street": "789 Crater Rd",
        "address_city": "Aden",
        "user_role": "vendor"
    }
]
```

## 3. Research and Conventions

The design of the `users` table is based on extensive research into both general best practices for database schema design and specific data conventions in Yemen. The following table summarizes the key findings and how they have been applied to the schema.

| Convention | Format/Example | Notes |
| :--- | :--- | :--- |
| **Phone Number** | `+967 7X XXX XXXX` | Country code is `+967`. Mobile numbers start with `70`, `71`, `73`, `77`, or `78`. WhatsApp is prevalent, so mobile numbers are essential. |
| **Address Format** | Line 1: Recipient Name<br>Line 2: Street Address<br>Line 3: City/Town, Postal Code (if any)<br>Line 4: YEMEN | Postal codes are not consistently used. The city and country are the most critical parts of the address. |
| **Common Names** | Mohammed, Ali, Saleh, Ahmed | These are among the most common first names. Surnames often derive from a first name rather than a tribal affiliation. |
| **Currency** | Yemeni Rial (YER), US Dollar (USD) | Both currencies are used. It is crucial to specify which currency is being used for any pricing information. |

## 4. References

[1] [Database schema: SQL schema examples and best practices](https://www.cockroachlabs.com/blog/database-schema-beginners-guide/)

[2] [Telephone numbers in Yemen - Wikipedia](https://en.wikipedia.org/wiki/Telephone_numbers_in_Yemen)

[3] [Yemen address format & examples - Smarty](https://www.smarty.com/global-address-formatting/yemen-address-format-examples)

[4] [Most Common Yemeni Names & Meanings - Forebears.io](https://forebears.io/yemen/forenames)
