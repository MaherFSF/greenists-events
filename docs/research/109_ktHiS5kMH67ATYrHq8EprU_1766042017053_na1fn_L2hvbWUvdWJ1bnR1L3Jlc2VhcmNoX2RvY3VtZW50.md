# Comprehensive Guide to Legal Permits and Licenses for Event Management Platforms in Aden, Yemen

## 1. Introduction

This document provides a detailed overview of the legal requirements, permits, and licenses necessary to establish and operate an event management platform in Aden, Yemen. The information is based on research from official government sources, international reports, and business registration service providers. The confidence level for the information is **Medium**, as some of the information is from 2020 and may have changed, and online resources for Yemen are not always up-to-date.

## 2. Key Legal Requirements

The primary legal framework governing business registration and operation in Yemen is the **Companies Law No. 22 of 1997** and the **Commercial Register Law No. 33 of 1992**. All businesses, including event management platforms, must comply with these laws.

### 2.1. Company Registration

The first and most critical step is to register the business as a legal entity. The most common and recommended business structure for a new enterprise is a **Limited Liability Company (LLC)**.

| Requirement | Details |
| :--- | :--- |
| **Entity Name** | The company name must be unique and not misleading. |
| **Arabic Name (الاسم بالعربي)** | A corresponding Arabic name is required. |
| **Minimum Capital** | The minimum share capital for an LLC is YER 1,000,000 (approximately USD 4,000). |
| **Shareholders** | A minimum of two shareholders is required. |
| **Local Director** | At least one director must be a resident of Yemen. |
| **Registered Office** | A physical office address in Aden is required. |

### 2.2. Commercial Registration

Once the company is legally formed, it must be registered in the Commercial Register, which is maintained by the **Ministry of Industry and Trade**.

| Requirement | Details |
| :--- | :--- |
| **Issuing Authority** | Ministry of Industry and Trade (وزارة الصناعة والتجارة) |
| **Website** | [https://moit-ye.com/](https://moit-ye.com/) |
| **Procedure** | The application for commercial registration is submitted to the Ministry of Industry and Trade. The process involves submitting the company's articles of association, proof of capital deposit, and other required documents. |

### 2.3. Chamber of Commerce Membership

Membership in the local **Chamber of Commerce and Industry** is mandatory for all registered businesses.

| Requirement | Details |
| :--- | :--- |
| **Issuing Authority** | Aden Chamber of Commerce and Industry (غرفة تجارة وصناعة عدن) |
| **Procedure** | Application for membership is submitted after obtaining the commercial registration. |

### 2.4. Municipal License

A municipal business license is required to operate within the city of Aden.

| Requirement | Details |
| :--- | :--- |
| **Issuing Authority** | Local Municipal Council in Aden |
| **Procedure** | The application is submitted to the local municipal office in the district where the business is located. |

### 2.5. Tax Registration

All businesses must register for taxes with the **General Taxes Department**.

| Requirement | Details |
| :--- | :--- |
| **Issuing Authority** | General Taxes Department (مصلحة الضرائب) |
| **Procedure** | Registration is required for income tax, sales tax, and other applicable taxes. |

## 3. Database Schema

To manage the information on legal requirements, the following SQL schema can be used.

```sql
CREATE TABLE legal_requirements (
    id INT PRIMARY KEY AUTO_INCREMENT,
    requirement_name VARCHAR(255) NOT NULL,
    requirement_name_ar VARCHAR(255),
    description TEXT,
    issuing_authority VARCHAR(255),
    issuing_authority_ar VARCHAR(255),
    website VARCHAR(255),
    phone_number VARCHAR(50),
    whatsapp_number VARCHAR(50),
    address TEXT,
    estimated_cost_yer DECIMAL(15, 2),
    estimated_cost_usd DECIMAL(15, 2),
    procedure_summary TEXT,
    source VARCHAR(255),
    confidence_level VARCHAR(50)
);
```

## 4. Sample Data

Here is a sample JSON array with data for the `legal_requirements` table.

```json
[
    {
        "requirement_name": "Commercial Registration",
        "requirement_name_ar": "السجل التجاري",
        "description": "Mandatory registration for all businesses operating in Yemen.",
        "issuing_authority": "Ministry of Industry and Trade",
        "issuing_authority_ar": "وزارة الصناعة والتجارة",
        "website": "https://moit-ye.com/",
        "phone_number": "+967 1 263 135",
        "whatsapp_number": null,
        "address": "Sana'a, Yemen",
        "estimated_cost_yer": 50000,
        "estimated_cost_usd": 200,
        "procedure_summary": "Submit application with company documents to the Ministry of Industry and Trade.",
        "source": "Ministry of Industry and Trade Website",
        "confidence_level": "High"
    },
    {
        "requirement_name": "Chamber of Commerce Membership",
        "requirement_name_ar": "عضوية غرفة التجارة والصناعة",
        "description": "Mandatory membership for all registered businesses.",
        "issuing_authority": "Aden Chamber of Commerce and Industry",
        "issuing_authority_ar": "غرفة تجارة وصناعة عدن",
        "website": null,
        "phone_number": null,
        "whatsapp_number": null,
        "address": "Aden, Yemen",
        "estimated_cost_yer": 25000,
        "estimated_cost_usd": 100,
        "procedure_summary": "Apply for membership after obtaining commercial registration.",
        "source": "Doing Business 2020 Report",
        "confidence_level": "Medium"
    }
]
```

## 5. Conclusion

Navigating the legal landscape in Yemen requires careful attention to detail and adherence to the established procedures. It is highly recommended to engage a local legal expert or a business registration service to ensure a smooth and compliant setup process. The information provided in this document serves as a comprehensive starting point for understanding the key legal requirements for an event management platform in Aden, Yemen.

## 6. References

[1] World Bank. (2020). *Doing Business 2020: Yemen, Arab Rep.*. [https://archive.doingbusiness.org/content/dam/doingBusiness/country/y/yemen/YEM.pdf](https://archive.doingbusiness.org/content/dam/doingBusiness/country/y/yemen/YEM.pdf)

[2] Enterslice. (n.d.). *Company Registration in Yemen*. [https://enterslice.ae/company-registration-in-yemen](https://enterslice.ae/company-registration-in-yemen)

[3] Ministry of Industry and Trade, Aden, Yemen. (n.d.). *Official Website*. [https://moit-ye.com/](https://moit-ye.com/)
