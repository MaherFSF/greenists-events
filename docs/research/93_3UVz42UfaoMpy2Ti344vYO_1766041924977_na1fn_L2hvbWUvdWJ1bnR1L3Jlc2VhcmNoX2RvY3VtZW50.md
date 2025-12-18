
# SECTOR: Banking events complete guide - Sharia compliance for Greenists Event Management Platform - Aden, Yemen

This document provides a comprehensive guide to Sharia-compliant banking for events in Aden, Yemen. It is intended for use by the Greenists Event Management Platform.

## Sharia-Compliant Banks in Aden, Yemen

The following table lists the Sharia-compliant banks in Aden, Yemen, with their contact information and branch locations.

| Bank Name (English) | Bank Name (Arabic) | Website | Contact Information | Aden Branches |
| --- | --- | --- | --- | --- |
| Shamil Bank of Yemen and Bahrain | مصرف اليمن والبحرين الشامل | [https://www.sbyb.net/en/](https://www.sbyb.net/en/) | **Free Toll:** 8000830<br>**Email:** info@sbyb.net | **Head Office:** Aden - Crater, Arwa Street<br>**Office Main:** Aden - Crater, Arwa Street<br>**Sheikh Othman Branch:** Garden Kamsry-Al of front in about round Alsafyna<br>**Aden Mall Office:** Aden Mall |
| Al-Kuraimi Islamic Microfinance Bank | بنك الكريمي للتمويل الأصغر الإسلامي | [https://kuraimibank.com/en/](https://kuraimibank.com/en/) | **Contact:** 8000830 | **Aden (Main Office):** Al-Moalla, main street |

## Principles of Islamic Banking and Finance

Islamic banking and finance are based on the principles of Sharia law. The following are the key principles that govern Islamic finance:

| Principle | Description |
| --- | --- |
| **Profit and Loss Sharing** | Partners share profits and losses based on their participation in the business. There are no guaranteed returns. |
| **Shared Risk** | Islamic banking promotes risk sharing in economic transactions. The burden of risk is divided among the parties involved. |
| **Prohibition of Riba (Interest)** | Riba, or interest, is forbidden. Wealth should be generated through legitimate trade and investment, not through lending. |
| **Prohibition of Gharar (Uncertainty)** | Transactions with excessive uncertainty or ambiguity are not allowed. All terms and conditions must be clear and transparent. |
| **Prohibition of Maysir (Gambling)** | Acquiring wealth through gambling or other speculative means is prohibited. |
| **No Investment in Prohibited Industries** | Investing in industries that are considered haram (forbidden) is not allowed. This includes industries related to alcohol, pork, gambling, and pornography. |
| **Zakat (Charity)** | Zakat is a mandatory charitable contribution that is paid by Muslims to support the poor and needy. |

## Sharia-Compliant Event Planning

When planning an event for a Muslim audience, it is important to ensure that all aspects of the event are Sharia-compliant. This includes the financing, catering, and entertainment.

### Event Financing

Event financing should be obtained from a Sharia-compliant source, such as an Islamic bank. The financing should be structured in a way that avoids the payment of interest. Common Islamic financing products that can be used for event financing include:

*   **Murabaha:** This is a cost-plus financing arrangement where the bank purchases the assets required for the event and then sells them to the client at a profit. The client pays the bank in installments.
*   **Ijara:** This is a leasing arrangement where the bank purchases the assets required for the event and then leases them to the client for a specific period. The client pays the bank a rental fee.
*   **Musharaka:** This is a partnership arrangement where the bank and the client contribute to the capital of the event and share in the profits and losses.

### Catering

All food and beverages served at the event must be halal. This means that they must be prepared according to Islamic dietary laws. It is important to source catering from a certified halal provider.

### Entertainment

Entertainment at the event should be appropriate for a Muslim audience. This means avoiding any entertainment that is considered haram, such as music with inappropriate lyrics, dancing, and gambling.

## SQL Schema

The following is a sample SQL schema for a database of Sharia-compliant banks in Aden, Yemen.

```sql
CREATE TABLE banks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255) NOT NULL,
    website VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255),
    whatsapp VARCHAR(255)
);

CREATE TABLE branches (
    id INT PRIMARY KEY AUTO_INCREMENT,
    bank_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    FOREIGN KEY (bank_id) REFERENCES banks(id)
);
```

## Sample Data

The following is sample data for the `banks` and `branches` tables.

```json
[
    {
        "name_en": "Shamil Bank of Yemen and Bahrain",
        "name_ar": "مصرف اليمن والبحرين الشامل",
        "website": "https://www.sbyb.net/en/",
        "phone": "8000830",
        "email": "info@sbyb.net",
        "whatsapp": null
    },
    {
        "name_en": "Al-Kuraimi Islamic Microfinance Bank",
        "name_ar": "بنك الكريمي للتمويل الأصغر الإسلامي",
        "website": "https://kuraimibank.com/en/",
        "phone": "8000830",
        "email": null,
        "whatsapp": null
    }
]
```

```json
[
    {
        "bank_id": 1,
        "name": "Head Office",
        "address": "Aden - Crater, Arwa Street"
    },
    {
        "bank_id": 1,
        "name": "Office Main",
        "address": "Aden - Crater, Arwa Street"
    },
    {
        "bank_id": 1,
        "name": "Sheikh Othman Branch",
        "address": "Garden Kamsry-Al of front in about round Alsafyna"
    },
    {
        "bank_id": 1,
        "name": "Aden Mall Office",
        "address": "Aden Mall"
    },
    {
        "bank_id": 2,
        "name": "Aden (Main Office)",
        "address": "Al-Moalla, main street"
    }
]
```
