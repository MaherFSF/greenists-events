# Client Management Database Schema for Greenists Event Management Platform

## 1. SQL Schema

The following SQL `CREATE TABLE` statement defines the schema for the `clients` table in the Greenists platform database. This table is designed to store comprehensive information about clients, including their names in both English and Arabic, contact details, and other relevant data.

```sql
CREATE TABLE clients (
    client_id INT AUTO_INCREMENT PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    client_name_ar VARCHAR(255),
    contact_person VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    address TEXT,
    city VARCHAR(100) DEFAULT 'Aden',
    country VARCHAR(100) DEFAULT 'Yemen',
    preferred_currency ENUM('YER', 'USD') DEFAULT 'USD',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 2. Sample Data

Below are a few sample records that illustrate the structure of the data to be stored in the `clients` table. These examples are based on publicly available information for businesses in Aden, Yemen.

```json
[
    {
        "client_name": "Yemen LOG Services",
        "client_name_ar": "يمن لوج للخدمات",
        "contact_person": "Ahmed Al-Faqih",
        "email": "info@yemenlog.com",
        "phone_number": "+967 2 256 333",
        "whatsapp_number": "+967 777 123 456",
        "address": "Al-Arish, Khormaksar, Aden, Yemen",
        "preferred_currency": "USD"
    },
    {
        "client_name": "Al-Khalil for Drugs & Medical Appliances",
        "client_name_ar": "صيدلية خليل للادوية والمستلزمات الطبية",
        "contact_person": "Fatima Al-Attas",
        "email": "info@alkhalil-pharmacy.com",
        "phone_number": "+967 2 239 999",
        "whatsapp_number": "+967 777 987 654",
        "address": "Al-Mansoura, Aden, Yemen",
        "preferred_currency": "YER"
    },
    {
        "client_name": "Aden Petro Tech",
        "client_name_ar": "عدن بترو تك",
        "contact_person": "Mohammed Al-Amoudi",
        "email": "info@adenpetrotech.com",
        "phone_number": "+967 2 275 555",
        "whatsapp_number": "+967 777 555 555",
        "address": "Attawahi, Aden, Yemen",
        "preferred_currency": "USD"
    }
]
```
