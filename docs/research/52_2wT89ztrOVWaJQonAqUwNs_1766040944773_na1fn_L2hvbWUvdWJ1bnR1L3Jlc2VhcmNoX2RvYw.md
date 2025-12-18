'''
# Research on Multi-Currency Payment Tracking for Greenists Event Management Platform

## 1. Introduction

This document outlines the research conducted to inform the design of a multi-currency payment tracking system for the Greenists event management platform in Aden, Yemen. The research focused on identifying common payment methods, financial service providers, and regulatory considerations relevant to processing payments in both Yemeni Rial (YER) and US Dollars (USD).

## 2. Key Findings

Our research identified a mixed economy of payment methods in Yemen, with a strong reliance on traditional cash and hawala systems alongside a growing adoption of mobile and digital payments. The key findings are as follows:

*   **Dominance of Cash and Hawala:** Cash remains the primary method of payment for daily transactions. For larger sums and remittances, the informal hawala system is deeply entrenched and widely trusted.
*   **Rise of Mobile Wallets:** Mobile payment services like MFloos and Mahfathati are gaining popularity, especially in urban areas like Aden. These services offer a convenient way to transfer money and pay for goods and services.
*   **Limited Credit Card Penetration:** The use of credit and debit cards is not widespread, primarily limited to larger hotels, international organizations, and a small segment of the population.
*   **Dual Currency Environment:** Both YER and USD are used in the Yemeni economy. USD is often preferred for larger transactions and as a store of value due to the volatility of the Yemeni Rial.
*   **Importance of Exchange Houses:** Money exchange houses (صرافة) play a crucial role in the financial landscape, facilitating currency exchange and money transfers.

## 3. Recommended Payment Methods for Greenists

Based on our findings, we recommend that the Greenists platform support the following payment methods to cater to the diverse needs of clients and suppliers in Aden:

*   **Cash:** A mechanism for recording cash payments is essential.
*   **Bank Transfer:** Direct bank transfers to and from major Yemeni banks.
*   **Mobile Wallets:** Integration with popular mobile wallet providers.
*   **Hawala:** A system to track and verify payments made through hawala networks.

## 4. Relevant Financial Institutions and Services

### 4.1. Banks

*   **Qasemi Islamic Microfinance Bank:** Offers digital payout services in USD and SAR to bank accounts and mobile wallets across South Yemen.
*   **Yemen Commercial Bank (YCB):** Provides currency exchange services and international money transfers.

### 4.2. Mobile Wallets

*   **MFloss (ام فلوس):** A popular mobile money service in Yemen.
*   **Mahfathati (محفظتي):** Another widely used mobile wallet service.

### 4.3. Hawala Networks & Exchange Houses

*   **Al-Amqi & Brothers Exchange Co. (العمقي وإخوانه للصرافة):** A major exchange house with a large network in Yemen.
*   **Al-Kuraimi Islamic Microfinance Bank (بنك الكريمي للتمويل الأصغر الإسلامي):** Offers extensive remittance and exchange services.

## 5. Multi-Currency Handling

The platform must be able to handle transactions in both YER and USD. The `payments` table is designed to store the original transaction amount and currency, the exchange rate at the time of the transaction, and the equivalent amount in the platform's base currency (e.g., YER). This will allow for accurate financial reporting and reconciliation.

## 6. Conclusion

A flexible and multi-faceted payment system is crucial for the success of the Greenists platform in Aden. By supporting a range of payment methods from traditional cash and hawala to modern mobile wallets, the platform can accommodate the preferences of a broad user base. The proposed database schema provides a solid foundation for tracking and managing these multi-currency payments effectively.
'''
