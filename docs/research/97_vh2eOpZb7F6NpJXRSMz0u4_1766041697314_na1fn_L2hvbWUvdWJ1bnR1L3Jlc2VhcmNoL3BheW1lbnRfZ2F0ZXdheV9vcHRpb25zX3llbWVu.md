# Exhaustive Research on Payment Gateway Options in Yemen

**Author:** Manus AI

**Date:** December 18, 2025

## 1. Introduction

This document provides a comprehensive overview of payment gateway options available in Yemen, specifically for the Greenists event management platform in Aden. The research focuses on identifying real, verified information, including company details, services, pricing, and contact information. The findings are presented in a structured format, suitable for populating a production system.

## 2. Research Methodology

The research was conducted by performing a series of targeted web searches using various queries in both English and Arabic. The official websites of potential payment gateway providers were visited to extract detailed information. The collected data was then compiled, structured, and analyzed to provide a comparative overview.

## 3. Key Findings

The research identified several payment gateway options that could be suitable for the Greenists platform. These include a local Yemeni provider, MEPSYemen, and several international providers with varying degrees of presence and suitability for the Yemeni market. The key findings are summarized in the table below:

### 3.1. Comparison of Payment Gateways

| Feature | MEPSYemen | NOWPayments | Paymentwall | HyperPay | PayPal | Flexepin | CashtoCode |
|---|---|---|---|---|---|---|---|
| **Arabic Name** | الشركة الوطنية للمدفوعات | لا يوجد | لا يوجد | لا يوجد | لا يوجد | لا يوجد | لا يوجد |
| **Services** | Payment Gateway, POS, ATM Management, E-invoicing | Cryptocurrency Payments, Fiat Conversion | Global Payment Processing | Payment Gateway | Online Payments | Prepaid Vouchers | Cash Vouchers |
| **Accepted Cards** | Mastercard, Visa, American Express, UnionPay | N/A (Crypto) | Visa, Mastercard, Amex, Discover, etc. | N/A | Major credit/debit cards | N/A | N/A |
| **Cryptocurrency** | No | Yes (300+) | No | No | No | No | No |
| **Pricing** | Not specified | 0.5% - 1% + network fees | Not specified | Not specified | Varies by region | N/A | N/A |
| **Contact** | 8000001, info@mepsyemen.com | [https://nowpayments.io/contact-us](https://nowpayments.io/contact-us) | [https://www.paymentwall.com/en/contacts](https://www.paymentwall.com/en/contacts) | N/A | N/A | N/A | N/A |
| **Address** | Khormaksar, Aden | N/A | San Francisco, CA (HQ) | N/A | N/A | N/A | N/A |

### 3.2. MEPSYemen (الشركة الوطنية للمدفوعات)

MEPSYemen is a prominent local payment service provider in Yemen, licensed by the Central Bank of Yemen. It offers a comprehensive suite of services, including a payment gateway, POS terminals, ATM management, and electronic invoicing. It partners with major international card networks like Mastercard, Visa, American Express, and UnionPay. This makes it a strong contender for the Greenists platform, as it is a local entity with a good understanding of the Yemeni market.

### 3.3. NOWPayments

NOWPayments is a cryptocurrency payment gateway that allows businesses to accept a wide range of cryptocurrencies. While this may not be the primary payment method for the Greenists platform, it could be a valuable option for international clients or those who prefer to use digital currencies. The pricing is transparent, with a fee of 0.5% to 1% per transaction, plus network fees.

### 3.4. International Providers

Several international payment gateway providers, such as Paymentwall, HyperPay, and PayPal, are available. However, their direct presence and support for the Yemeni market are not as clear as MEPSYemen. While they offer a wide range of services, their suitability for the Greenists platform would require further investigation into their specific offerings and fees for Yemen.

## 4. Database Integration

To integrate the payment gateway information into a database, the following SQL schema and sample data can be used.

### 4.1. SQL Schema

```sql
CREATE TABLE payment_gateways (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    services TEXT,
    accepted_cards TEXT,
    cryptocurrency BOOLEAN,
    pricing VARCHAR(255),
    contact_phone VARCHAR(255),
    contact_email VARCHAR(255),
    website VARCHAR(255),
    address TEXT,
    country VARCHAR(255)
);
```

### 4.2. Sample Data

```json
[
    {
        "name": "MEPSYemen",
        "arabic_name": "الشركة الوطنية للمدفوعات",
        "services": "Payment Gateway, POS, ATM Management, E-invoicing",
        "accepted_cards": "Mastercard, Visa, American Express, UnionPay",
        "cryptocurrency": false,
        "pricing": "Not specified",
        "contact_phone": "8000001",
        "contact_email": "info@mepsyemen.com",
        "website": "https://www.mepsyemen.com/",
        "address": "Khormaksar, Qahtan Al-Shaabi Corniche, Aden, Yemen",
        "country": "Yemen"
    },
    {
        "name": "NOWPayments",
        "arabic_name": null,
        "services": "Cryptocurrency Payments, Fiat Conversion",
        "accepted_cards": null,
        "cryptocurrency": true,
        "pricing": "0.5% - 1% + network fees",
        "contact_phone": null,
        "contact_email": null,
        "website": "https://nowpayments.io/",
        "address": null,
        "country": "International"
    },
    {
        "name": "Paymentwall",
        "arabic_name": null,
        "services": "Global Payment Processing",
        "accepted_cards": "Visa, Mastercard, Amex, Discover, etc.",
        "cryptocurrency": false,
        "pricing": "Not specified",
        "contact_phone": null,
        "contact_email": null,
        "website": "https://www.paymentwall.com/",
        "address": "San Francisco, CA (HQ)",
        "country": "International"
    }
]
```

## 5. Conclusion and Recommendations

Based on the research, **MEPSYemen** appears to be the most suitable payment gateway provider for the Greenists event management platform in Aden. As a local company, it is well-positioned to understand the specific needs and challenges of the Yemeni market. It also offers a comprehensive range of services and partnerships with major international card networks.

It is recommended to contact MEPSYemen directly to obtain detailed information on their pricing, integration process, and any other specific requirements. For international transactions or to cater to a niche market, integrating a cryptocurrency payment gateway like NOWPayments could also be considered as a secondary option.

## 6. References

[1] MEPSYemen. (n.d.). *MEPSYemen الشركة الوطنية للمدفوعات*. Retrieved from https://www.mepsyemen.com/

[2] NOWPayments. (n.d.). *Top Payment Methods and Gateways for Shopify Integration in Yemen*. Retrieved from https://nowpayments.io/blog/payment-gateway-yemen

[3] Paymentwall. (n.d.). *Payment Methods in Yemen*. Retrieved from https://www.paymentwall.com/en/payment-methods/yemen
