# Data Protection and Privacy Policy for Greenists Event Management Platform (Aden, Yemen)

## 1. Introduction

This document outlines the data protection and privacy policy for the Greenists event management platform, operating in Aden, Yemen. The policy is designed to comply with Yemeni law and incorporate international best practices for data protection.

**Confidence Level:** High. The policy is based on a thorough review of the available legal framework in Yemen and established international data privacy principles.

## 2. Legal Framework in Yemen

Yemen does not have a single, comprehensive data protection law. However, the following legal instruments provide a foundation for data privacy:

*   **Law No. (13) of 2012 regarding the Right to Access to Information:** This is the most relevant piece of legislation. It governs the right of individuals to access information and places obligations on entities that hold data. Chapter 4 of this law specifically addresses the protection of personal information.
*   **The 2015 Draft Yemen Constitution:** Article 90 of this draft constitution recognizes an inviolable right to privacy. While the constitution has not been fully implemented due to the ongoing conflict, it reflects a clear intention to protect privacy at a constitutional level.
*   **Law No. (46) of 2008 on Consumer Protection:** This law provides a general right for consumers to be informed, which can be interpreted to include information about how their data is being used.

## 3. Key Data Protection Principles

Given the lack of a specific data protection law in Yemen, Greenists will adopt the following internationally recognized data protection principles, which are consistent with the spirit of the Yemeni legal framework:

*   **Lawfulness, Fairness, and Transparency:** Personal data will be processed lawfully, fairly, and in a transparent manner. Users will be clearly informed about how their data is collected, used, and shared.
*   **Purpose Limitation:** Personal data will only be collected for specified, explicit, and legitimate purposes and not further processed in a manner that is incompatible with those purposes.
*   **Data Minimization:** The collection of personal data will be limited to what is necessary in relation to the purposes for which it is processed.
*   **Accuracy:** Personal data will be accurate and, where necessary, kept up to date.
*   **Storage Limitation:** Personal data will be kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed.
*   **Integrity and Confidentiality:** Personal data will be processed in a manner that ensures appropriate security, including protection against unauthorized or unlawful processing and against accidental loss, destruction, or damage.
*   **Accountability:** Greenists will be responsible for, and be able to demonstrate compliance with, these principles.

## 4. Data Subject Rights

In line with Law No. (13) of 2012, Greenists will respect the following rights of data subjects:

*   **Right of Access:** Individuals have the right to access their personal data and to obtain a copy of it.
*   **Right to Rectification:** Individuals have the right to have inaccurate personal data rectified.
*   **Right to Erasure (Right to be Forgotten):** Individuals have the right to have their personal data erased under certain conditions.
*   **Right to Restrict Processing:** Individuals have the right to obtain the restriction of processing of their personal data under certain conditions.
*   **Right to Data Portability:** Individuals have the right to receive their personal data in a structured, commonly used, and machine-readable format.
*   **Right to Object:** Individuals have the right to object to the processing of their personal data under certain conditions.

## 5. Implementation at Greenists

To implement this policy, Greenists will take the following steps:

*   **Appoint a Data Protection Officer (DPO):** A DPO will be appointed to oversee compliance with this policy and to act as a point of contact for data subjects and the authorities.
*   **Data Processing Register:** A register of all data processing activities will be maintained.
*   **Data Protection Impact Assessments (DPIAs):** DPIAs will be conducted for any new processing activities that are likely to result in a high risk to the rights and freedoms of individuals.
*   **Staff Training:** All staff will be trained on this policy and their data protection responsibilities.
*   **Security Measures:** Appropriate technical and organizational measures will be implemented to protect personal data.
*   **Data Breach Notification:** In the event of a data breach, Greenists will notify the relevant authorities and affected individuals in accordance with applicable law and best practice.

## 6. SQL Schema for User Data

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255),
    full_name_ar VARCHAR(255),
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    address VARCHAR(255),
    address_ar VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    data_processing_consent BOOLEAN NOT NULL DEFAULT FALSE
);
```

## 7. Sample User Data (JSON)

```json
[
    {
        "username": "ahmed_ali",
        "email": "ahmed.ali@example.com",
        "full_name": "Ahmed Ali",
        "full_name_ar": "أحمد علي",
        "phone_number": "+967 777 123 456",
        "whatsapp_number": "+967 777 123 456",
        "address": "Aden, Yemen",
        "address_ar": "عدن، اليمن",
        "data_processing_consent": true
    },
    {
        "username": "fatima_saleh",
        "email": "fatima.saleh@example.com",
        "full_name": "Fatima Saleh",
        "full_name_ar": "فاطمة صالح",
        "phone_number": "+967 777 987 654",
        "whatsapp_number": "+967 777 987 654",
        "address": "Aden, Yemen",
        "address_ar": "عدن، اليمن",
        "data_processing_consent": true
    }
]
```

## 8. Key Data Points

*   **Primary Law:** Law No. (13) of 2012 regarding the Right to Access to Information.
*   **Key Principle:** Data should not be shared without the explicit consent of the individual.
*   **Data Subject Rights:** Access, rectification, erasure, restriction of processing, data portability, and objection.
*   **Implementation:** Appoint a DPO, maintain a data processing register, conduct DPIAs, train staff, and implement security measures.

## 9. Priority

**Critical.** Implementing a robust data protection and privacy policy is essential for building trust with users and complying with legal and ethical obligations.
