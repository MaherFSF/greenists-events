# Exhaustive Research on Mobile Money Services in Yemen for Greenists Event Management Platform

**Date:** 2025-12-18

**Author:** Manus AI

## 1. Introduction

This document presents a comprehensive research on mobile money services available in Yemen, with a specific focus on their applicability for the Greenists Event Management Platform in Aden. The research aims to provide verified and actionable information, including provider details, service offerings, contact information, and branch locations in Aden. The findings are intended to populate a production system and inform strategic decisions regarding payment integrations for the platform.

## 2. Mobile Money Service Providers

The research has identified four primary mobile money service providers in Yemen. The following sections provide detailed information on each of these providers.

### 2.1. Tadhamon Mobile (بنك التضامن)

Tadhamon Mobile is the mobile banking service offered by Tadhamon Bank, one of the largest Islamic banks in Yemen. It provides a range of financial transaction services accessible through a smart mobile device with an internet or SMS connection.

**Services Offered:**

*   Fund transfers between Tadhamon Bank accounts.
*   Bill payments for various services.
*   Viewing account balances and recent transactions.
*   Locating Tadhamon Bank branches and ATMs.
*   Requesting checkbooks.

**Aden Branch Information:**

| Branch Name | Address | Phone Number |
|---|---|---|
| Al-Buraiqa | Al-Buraiqa - Banafa - Al-Douh Street - in front of the refineries opening | 2375892 |
| Dar Saad | Dar Saad - Aden Street, Taiz - Al-Bustan Street - next to the ship roundabout | 775510273 |
| Crater | Crater | 2269915 |

**Contact Information:**

*   **Hotline:** 775055550
*   **Call Center:** 8001010
*   **WhatsApp:** 781788888

**Fees:**

The service is free for individual clients, while a nominal fee is deducted from corporate client accounts. Specific fee details in YER and USD were not available at the time of this research.

### 2.2. Mobile-Money Wallet (كاك بنك)

CAC Bank's Mobile-Money Wallet is a comprehensive electronic wallet application that enables a wide array of financial transactions. It is designed for both individual customers and corporate/merchant clients.

**Services Offered:**

*   Person-to-person (P2P) money transfers.
*   Transfers to bank accounts and other mobile money wallets.
*   Merchant payments for goods and services.
*   Bill payments for utilities and education fees.
*   Cash-in and cash-out services through a network of agents and CAC Bank branches.
*   Cardless cash withdrawal from CAC Bank ATMs.

**Aden Branch Information:**

| Branch Name | Address | Phone Number |
|---|---|---|
| Crater (فرع كريتر) | Queen Arwa St, next to the Yemeni office, Aden (شارع الملكه اروى بجوار مكتب اليمنيه عدن) | 263821 |
| Lahj (فرع لحج) | Abdulaziz Office, next to Shamsan Mall, Aden (مكتب عبدالعزيز بجوار شمسان مول عدن) | 341248 |
| Sheikh Othman (فرع الشيخ عثمان) | Al-Safina roundabout, next to Sabaa Bank, Aden (جوله السفينه بجانب بنك سباء عدن) | 306825 |
| Al Mansoura (فرع المنصورة) | Caltex roundabout, next to Al-Ezzani Commercial Center, Aden (جوله كالتكس بجوار مركز العزاني التجاري عدن) | 358158 |
| Al-Nukhba (فرع النخبة) | General Corporation for Insurance building, Aden (مبنى المؤسسة العامة للتأمينات عدن) | 8000818 |
| Free Zone (فرع المنطقة الحرة) | Inside the Free Zone Port, Aden (داخل ميناء المنطقة الحرة عدن) | N/A |
| Al-Buraiqa Office (مكتب البريقة) | Main road, Aden (الخط العام عدن) | N/A |

**Contact Information:**

*   **Phone:** (01) 250 009
*   **Email:** cac.info@cacbank.com.ye

**Fees:**

Specific fee information in YER and USD was not readily available.

### 2.3. Shamil Money (بنك شامل)

Shamil Money is an e-wallet service provided by the Shamil Bank of Yemen and Bahrain. It allows users to perform financial transactions using their mobile phones, even without a bank account. The service can also be linked to a Shamil Bank account.

**Services Offered:**

*   Bill payments for various services.
*   Issuing and reloading virtual MasterCards.
*   Sending and receiving money.
*   Online purchases and payments at points of sale.
*   Cash withdrawal and deposit through bank branches and agents.

**Aden Branch Information:**

| Branch Name | Address | Phone Number |
|---|---|---|
| Head Office/Main (الفرع الرئيسي) | Arwa Street, Crater, Aden (عدن كريتر , شارع أروى) | 02266701 |
| Sheikh Othman (فرع الشيخ عثمان) | In front of Al-Kamsry Garden, Al-Safyna roundabout, Aden (عدن - جولة السفينة أمام حديقة الكمسري) | N/A |
| Aden Mall Office (مكتب عدن مول) | Aden Mall, Aden | N/A |

**Contact Information:**

*   **Toll-Free:** 8000830

**Fees:**

Subscription and registration are free, with competitive fees and commissions for transactions. Detailed fee structures were not found.

### 2.4. Cash Wallet (كاش)

Cash Wallet is an electronic financial account that enables a wide range of digital payment services. It boasts a large network of agents across Yemen.

**Services Offered:**

*   Money transfers.
*   Bill payments, including government services.
*   Online shopping.
*   Planned integration for international transfers.

**Aden Branch Information:**

Information on specific branches in Aden was not available, but the service claims to have a wide network of agents.

**Contact Information:**

*   **Phone:** 8000333
*   **WhatsApp:** Available on their website.

**Fees:**

Registration and subscription are free. Specific transaction fees were not detailed.

## 3. Comparative Summary

| Feature | Tadhamon Mobile | Mobile-Money Wallet (CAC) | Shamil Money | Cash Wallet |
|---|---|---|---|---|
| **Provider Type** | Bank-led | Bank-led | Bank-led | Independent |
| **Key Services** | Transfers, Bill Pay | P2P, Merchant Pay, Bill Pay | Virtual Card, Transfers, Bill Pay | Transfers, Bill Pay, Online Shopping |
| **Aden Presence** | 3 Branches | 7 Branches/Offices | 3 Branches/Offices | Agent Network |
| **WhatsApp Contact** | Yes | No | No | Yes |
| **Fees** | Free (Individual) | N/A | Free Subscription | Free Subscription |
| **Offline Access** | SMS-based | No | Yes | Yes |

## 4. SQL Schema for Database

```sql
CREATE TABLE mobile_money_providers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    provider_name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    services TEXT,
    aden_branches TEXT,
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    fees VARCHAR(255),
    notes TEXT,
    confidence_level VARCHAR(50),
    priority VARCHAR(50)
);
```

## 5. Conclusion and Recommendations

The mobile money landscape in Yemen offers several viable options for the Greenists Event Management Platform. **Tadhamon Mobile** and **Mobile-Money Wallet (CAC Bank)** appear to be strong contenders due to their established banking infrastructure and extensive branch networks in Aden. **Shamil Money**'s offline capabilities and **Cash Wallet**'s large agent network are also noteworthy features.

**Key Data Gaps:**

*   **Detailed Fee Structures:** A significant information gap is the lack of specific fee schedules in both YER and USD for all providers. This is a critical factor for cost analysis and business planning.
*   **WhatsApp Contacts:** While Tadhamon Mobile and Cash Wallet offer WhatsApp support, obtaining direct WhatsApp numbers for all providers would be beneficial for customer service and communication.

**Recommendations:**

1.  **Direct Engagement:** It is recommended to directly contact the business development or corporate services departments of each provider to obtain detailed fee structures and discuss potential partnership opportunities.
2.  **API Integration:** Inquire about the availability and documentation of APIs for seamless integration with the Greenists platform.
3.  **User Experience Testing:** Once a shortlist of providers is established, conducting user experience testing with each mobile money application is crucial to assess ease of use and reliability.

This research provides a solid foundation for selecting a mobile money partner. The next steps should focus on filling the identified information gaps and engaging directly with the providers to negotiate favorable terms for the Greenists platform.

## 6. References

[1] Tadhamon Bank. (n.d.). *Tadhamon Mobile*. Retrieved from https://www.tadhamonbank.com/en/banking/10
[2] CAC Bank. (n.d.). *Mobile-Money Wallet*. Retrieved from https://www.cacbank.com.ye/en-Us/Contents/SubPage/Mobile-Money%20Wallet
[3] Shamil Bank of Yemen and Bahrain. (n.d.). *Shamil Money*. Retrieved from https://www.sbyb.net/en/service/14
[4] Cash. (n.d.). *About us*. Retrieved from https://www.cash.com.ye/en/about-us
[5] Tadhamon Microfinance. (n.d.). *Contact Us*. Retrieved from https://tadhamonmicro.com/en/contact
[6] CAC Bank. (n.d.). *Branches and ATMs*. Retrieved from https://cacbankye.com/%D8%A7%D9%84%D9%81%D8%B1%D9%88%D8%B9-%D9%88%D8%A7%D9%84%D8%B5%D8%B1%D8%A7%D9%81%D8%A7%D8%AA-%D8%A7%D9%84%D8%A2%D9%84%D9%8A%D8%A9/
[7] Shamil Bank of Yemen and Bahrain. (n.d.). *Our Branches*. Retrieved from https://www.sbyb.net/en/branches
