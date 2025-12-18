# Research Report: Yemen Kuwait Bank - Corporate Banking and Trade Finance

**Date:** 2025-12-18

**Author:** Manus AI

## 1. Introduction

This report provides a summary of the research conducted on Yemen Kuwait Bank (YKB), with a specific focus on its corporate banking and trade finance services. The research was commissioned by the Greenists Event Management Platform for their operations in Aden, Yemen. The objective was to gather real, verified information, including contact details, service descriptions, and pricing, to populate a production system.

## 2. Methodology

The research process involved a multi-pronged approach, including:

*   **Web Search:** Conducting targeted searches using various search engines to find the official website, news articles, and other relevant online resources.
*   **Website Analysis:** Navigating and analyzing the content of the official Yemen Kuwait Bank website (both Arabic and English versions) and other relevant websites.
*   **Data Extraction:** Extracting key information such as contact details, service descriptions, and branch locations.

## 3. Findings

The following sections detail the information gathered during the research.

### 3.1. General Information

*   **Name (English):** Yemen Kuwait Bank
*   **Name (Arabic):** بنك اليمن والكويت
*   **Website:** [https://www.yki-bank.com/](https://www.yki-bank.com/)

### 3.2. Corporate Banking and Trade Finance

Information regarding specific corporate banking and trade finance products was limited on the bank's official website. The links to detailed pages were broken. However, a third-party website provided the following general descriptions:

*   **Corporate Banking:** Comprehensive banking solutions for businesses including loans, accounts, and cash management services tailored to corporate needs. [1]
*   **Trade Finance:** Specialized services to facilitate international and domestic trade transactions, including letters of credit and export financing. [1]

**Confidence Level:** Low. This information is very generic and was obtained from a third-party website, not the bank's official sources. Pricing information in YER or USD was not available.

### 3.3. Contact Information

*   **General Email:** info@yki-bank.com
*   **General Phone:** 8008002

**Confidence Level:** High. This information was obtained from the bank's official website.

### 3.4. Aden Branch

*   **Address (Arabic):** عدن - كريتر - شارع الملكة اروى - بنك اليمن والكويت
*   **Address (English):** Aden - Crater - Queen Arwa Road - Yemen Kuwait Bank
*   **Phone:** +967 2 256 002

**Confidence Level:** Medium. This information was obtained from a third-party directory website. While likely accurate, it is not from the bank's official website.

### 3.5. WhatsApp Number

A WhatsApp number for the bank could not be located through the research.

## 4. Database Schema

The following SQL `CREATE TABLE` statement has been designed to store the gathered information:

```sql
CREATE TABLE yemen_kuwait_bank_info (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255),
    name_ar VARCHAR(255),
    service_type VARCHAR(255),
    service_description TEXT,
    address_en VARCHAR(255),
    address_ar VARCHAR(255),
    phone_number VARCHAR(50),
    whatsapp_number VARCHAR(50),
    email VARCHAR(255),
    website VARCHAR(255),
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255),
    source_url VARCHAR(255),
    confidence_level VARCHAR(50)
);
```

## 5. Conclusion and Recommendations

This research has provided some foundational information about Yemen Kuwait Bank. However, due to the lack of detailed information on the bank's official website, particularly regarding corporate banking and trade finance products and pricing, it is recommended to directly contact the bank's Aden branch for more specific and verified information. The provided contact details can be used for this purpose.

## 6. References

[1] Yemen Kuwait Bank for Trade and Investment Support. (n.d.). Retrieved December 18, 2025, from https://support.recforge.com/support/yemen-kuwait-bank-for-trade-and-investment
