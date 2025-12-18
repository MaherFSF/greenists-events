# Exhaustive Research: International Bank of Yemen & Alternatives for Greenists Event Management Platform

**Author:** Manus AI
**Date:** December 18, 2025

## 1. The International Bank of Yemen: A Non-Viable Option

Our investigation into the International Bank of Yemen (IBY) has revealed that it is **not a viable banking partner** for the Greenists Event Management Platform in Aden, Yemen. The bank is currently under severe sanctions from the United States Department of the Treasury's Office of Foreign Assets Control (OFAC), rendering it incapable of conducting the required international financial transactions, such as SWIFT transfers and foreign exchange services.

### 1.1. Key Findings on the International Bank of Yemen

| Attribute | Information |
| :--- | :--- |
| **Arabic Name** | بنك اليمن الدولي |
| **Status** | Sanctioned, Export Controlled |
| **SWIFT/BIC** | IBOYYESA |
| **Website** | www.ibyemen.com (defunct) |

**Sanctions Details:**

> On April 17, 2025, OFAC sanctioned the International Bank of Yemen Y.S.C. (IBY) for its financial support to Ansarallah, commonly known as the Houthis. [1] The sanctions block all property and interests in property of the bank within U.S. jurisdiction and prohibit U.S. persons from transacting with the bank. These measures effectively sever IBY's access to the global financial system, making it impossible for the bank to process SWIFT transfers or offer foreign exchange services, particularly in USD.

Due to these sanctions, the International Bank of Yemen cannot meet the needs of the Greenists platform. We therefore shifted our research to identify a suitable alternative.

## 2. Tadhamon Bank: A Viable Alternative

Our research has identified **Tadhamon Bank** as a strong and viable alternative for the Greenists platform. Tadhamon Bank is a licensed and operational bank in Yemen with a presence in Aden. It offers a comprehensive suite of international banking services and is not subject to the sanctions affecting the International Bank of Yemen.

### 2.1. Tadhamon Bank: Key Information

| Attribute | Information |
| :--- | :--- |
| **Arabic Name** | بنك التضامن |
| **Aden Branch Address** | Al-Buraiqa - Banafa - Al-Douh Street - in front of the refineries opening |
| **Phone** | 8001010 |
| **Email** | info@tadhamonbank.com |
| **Website** | [https://www.tadhamonbank.com/en/](https://www.tadhamonbank.com/en/) |
| **SWIFT/BIC (Aden)** | TIBKYESA103 |

### 2.2. International Banking Services

Tadhamon Bank provides a range of services essential for international business, including:

*   **SWIFT Transfers:** The bank has an active SWIFT network, enabling international fund transfers.
*   **Foreign Exchange:** Tadhamon Bank facilitates foreign currency exchange, which is crucial for international transactions.
*   **Documentary Collections:** They offer services for handling import and export documents.
*   **Letters of Credit (LCs):** The bank provides LC advising and confirmation services.
*   **Letters of Guarantee:** They issue guarantees for various business purposes.

### 2.3. Step-by-Step Workflow for SWIFT Transfers (General Process)

1.  **Account Setup:** Open a corporate account with Tadhamon Bank at their Aden branch.
2.  **Beneficiary Information:** Obtain the complete and accurate details of the beneficiary, including their full name, address, bank name, bank address, SWIFT/BIC code, and account number/IBAN.
3.  **Transfer Request:** Submit a transfer request form to Tadhamon Bank, either in person or through their online banking platform (if available). This form will require the beneficiary's details, the transfer amount, and the currency.
4.  **Compliance Check:** The bank will conduct a compliance check to ensure the transaction adheres to all relevant national and international regulations.
5.  **Processing:** Once the compliance check is complete, the bank will process the SWIFT transfer.
6.  **Confirmation:** The bank will provide a SWIFT copy as confirmation that the transfer has been sent.

**Note:** Specific procedures and required documentation may vary. It is recommended to consult directly with Tadhamon Bank for their exact requirements.

## 3. Database Integration

To support the Greenists platform, we have designed a SQL schema to store information about banking partners.

### 3.1. SQL Schema

```sql
CREATE TABLE banks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(100),
    country VARCHAR(100),
    phone VARCHAR(50),
    whatsapp VARCHAR(50),
    email VARCHAR(255),
    website VARCHAR(255),
    swift_bic VARCHAR(20),
    services TEXT,
    notes TEXT,
    sanctioned BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3.2. Sample Data

```json
[
    {
        "name_en": "International Bank of Yemen",
        "name_ar": "بنك اليمن الدولي",
        "address": "Al-Zubairy Street, Sana'a",
        "city": "Sana'a",
        "country": "Yemen",
        "phone": null,
        "whatsapp": null,
        "email": "INFO@IBYEMEN.COM",
        "website": "http://www.ibyemen.com",
        "swift_bic": "IBOYYESA",
        "services": "SWIFT transfers, foreign exchange",
        "notes": "Sanctioned by the U.S. Department of the Treasury's Office of Foreign Assets Control (OFAC) on April 17, 2025, for providing financial support to the Houthis. The bank is cut off from the U.S. financial system, making it unable to process SWIFT transfers or offer foreign exchange services, especially in USD. The official website is defunct.",
        "sanctioned": true
    },
    {
        "name_en": "Tadhamon Bank",
        "name_ar": "بنك التضامن",
        "address": "Al-Buraiqa - Banafa - Al-Douh Street - in front of the refineries opening",
        "city": "Aden",
        "country": "Yemen",
        "phone": "8001010",
        "whatsapp": null,
        "email": "info@tadhamonbank.com",
        "website": "https://www.tadhamonbank.com/en/",
        "swift_bic": "TIBKYESA103",
        "services": "Documentary Collections, Letters of Credit (LCs), Letters of Guarantee, SWIFT transfers, foreign exchange",
        "notes": "A viable alternative to the International Bank of Yemen for international banking services. The bank is licensed by the Central Bank of Yemen - Aden and has a functioning website with information on international trade services. The head office is in Taiz, but they have a branch in Aden.",
        "sanctioned": false
    }
]
```

## 4. Confidence and Priority

*   **Confidence Level:** High. The information regarding the sanctions on the International Bank of Yemen is from official U.S. Treasury sources. The information on Tadhamon Bank is from their official website and other reputable online sources.
*   **Priority:** Critical. Establishing a reliable banking partner is essential for the financial operations of the Greenists Event Management Platform.

## References

[1] U.S. Department of the Treasury. "Treasury Targets International Bank of Yemen for Support to the Houthis." April 17, 2025. [https://home.treasury.gov/news/press-releases/sb0092](https://home.treasury.gov/news/press-releases/sb0092)
