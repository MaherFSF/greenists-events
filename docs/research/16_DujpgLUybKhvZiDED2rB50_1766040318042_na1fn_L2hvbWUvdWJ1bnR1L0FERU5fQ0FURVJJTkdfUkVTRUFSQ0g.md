# Comprehensive Research on International Cuisine Caterers in Aden, Yemen

**Author:** Manus AI
**Date:** December 18, 2025

## Introduction

This document presents a comprehensive research report on international cuisine caterers operating in Aden, Yemen. The research was conducted to identify and verify information about potential suppliers for the Greenists Event Management Platform. The report includes detailed profiles of catering companies, database-ready structured data, and other relevant information to support the platform's operations.

## Catering Company Profiles

The following table provides detailed information on the catering companies identified during the research. The confidence level for the data is indicated for each entry.

| Feature                       | YCI Group (Yemen Catering & Support Services International)                                                                                             | ULC Yemen (Universal Logistic Support & Construction)                                                                                                     | Aden's Quality for Services                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Arabic Name**               | يمن кейтеринغ اند سبورت سيرفيسز انترناشيونال                                                                                                             | الشركة العالمية للدعم اللوجستي والانشاءات                                                                                                                 | جودة عدن للخدمات                                                                                                       |
| **Website**                   | [https://ycigroup.net/](https://ycigroup.net/)                                                                                                          | [https://ulcyemen.com/en/subsector/catering](https://ulcyemen.com/en/subsector/catering)                                                                    | [https://adenquality.com/](https://adenquality.com/)                                                                    |
| **Services**                  | International Catering, Airline Catering, Restaurant Activities, Support Services, Logistics                                                            | Catering, Event Management, Hospitality                                                                                                                   | Catering and Support Services                                                                                           |
| **Established**               | 1990                                                                                                                                                    | Not specified                                                                                                                                             | 2023                                                                                                                    |
| **Contact**                   | Phone: +967 1 432 183, +967 777 094 111 <br> Email: tenders@ycigroup.net                                                                                  | Phone: +967 01 441 103 / 06 / 09 <br> Email: info@ulcyemen.com                                                                                             | Phone: +967 781 976 777                                                                                                 |
| **WhatsApp**                  | +967 777 094 111                                                                                                                                        | Not specified                                                                                                                                             | +967 781 976 777                                                                                                        |
| **Address**                   | Al-Surmi St. Haddah, Sana'a, Yemen                                                                                                                        | Al-Mesbahi, Behind the National Bank of Yemen, P.O. Box 16885, Sana'a, Yemen                                                                              | Not specified                                                                                                           |
| **Pricing (YER/USD)**         | Not publicly available. Requires direct inquiry.                                                                                                        | Not publicly available. Requires direct inquiry.                                                                                                          | Not publicly available. Requires direct inquiry.                                                                        |
| **Notes**                     | A large, well-established company with extensive experience, particularly in large-scale projects and with international clients.                             | Part of the Universal Group, with a portfolio of event management projects, indicating experience in handling various events.                               | A relatively new company, established in 2023, focusing on catering and support services for various institutions.      |
| **Source**                    | [YCI Group Website](https://ycigroup.net/)                                                                                                              | [ULC Yemen Website](https://ulcyemen.com/en/subsector/catering)                                                                                           | [Aden's Quality Website](https://adenquality.com/)                                                                      |
| **Confidence Level**          | High                                                                                                                                                    | Medium                                                                                                                                                    | Medium                                                                                                                  |

## Database Schema

The following SQL `CREATE TABLE` statement can be used to create a `caterers` table in a MySQL or similar relational database. This schema is designed to store the information gathered on catering suppliers.

```sql
CREATE TABLE caterers (
    caterer_id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    website VARCHAR(255),
    phone_1 VARCHAR(255),
    phone_2 VARCHAR(255),
    whatsapp VARCHAR(255),
    email VARCHAR(255),
    address_en TEXT,
    address_ar TEXT,
    services_en TEXT,
    services_ar TEXT,
    established_year INT,
    notes TEXT,
    source VARCHAR(255),
    confidence_level VARCHAR(50)
);
```

## Sample Data

Below is a JSON array of sample data that can be used to populate the `caterers` table.

```json
[
    {
        "name_en": "YCI Group (Yemen Catering & Support Services International)",
        "name_ar": "يمن кейтеринغ اند سبورت سيرفيسز انترناشيونال",
        "website": "https://ycigroup.net/",
        "phone_1": "+967 1 432 183",
        "phone_2": "+967 777 094 111",
        "whatsapp": "+967 777 094 111",
        "email": "tenders@ycigroup.net",
        "address_en": "Al-Surmi St. Haddah, Sana'a, Yemen",
        "address_ar": "شارع الصرمي، حدة، صنعاء، اليمن",
        "services_en": "International Catering, Airline Catering, Restaurant Activities, Support Services, Logistics",
        "services_ar": "تموين عالمي، تموين طيران، أنشطة مطاعم، خدمات دعم، لوجستيات",
        "established_year": 1990,
        "notes": "Appears to be a large, well-established company with a long history. The website mentions experience with oil industries and other large-scale projects.",
        "source": "https://ycigroup.net/",
        "confidence_level": "High"
    },
    {
        "name_en": "ULC Yemen (Universal Logistic Support & Construction)",
        "name_ar": "الشركة العالمية للدعم اللوجستي والانشاءات",
        "website": "https://ulcyemen.com/en/subsector/catering",
        "phone_1": "+967 01 441 103",
        "phone_2": "+967 01 441 106",
        "whatsapp": null,
        "email": "info@ulcyemen.com",
        "address_en": "Al-Mesbahi, Behind the National Bank of Yemen, P.O. Box 16885, Sana'a, Yemen",
        "address_ar": "المصباحي، خلف البنك الأهلي اليمني، ص.ب 16885، صنعاء، اليمن",
        "services_en": "Catering, Event Management, Hospitality",
        "services_ar": "تموين، إدارة فعاليات، ضيافة",
        "established_year": null,
        "notes": "Part of the Universal Group. Their website lists several event management projects, indicating experience in this area.",
        "source": "https://ulcyemen.com/en/subsector/catering",
        "confidence_level": "Medium"
    },
    {
        "name_en": "Aden's Quality for Services",
        "name_ar": "جودة عدن للخدمات",
        "website": "https://adenquality.com/",
        "phone_1": "+967 781 976 777",
        "phone_2": null,
        "whatsapp": "+967 781 976 777",
        "email": null,
        "address_en": null,
        "address_ar": null,
        "services_en": "Catering and Support Services",
        "services_ar": "خدمات التموين والدعم",
        "established_year": 2023,
        "notes": "A newer company, established in 2023. Their website states they cater to companies, institutions, and hospitals.",
        "source": "https://adenquality.com/",
        "confidence_level": "Medium"
    }
]
```

## Standard Operating Procedure (SOP): Engaging a Caterer

This SOP outlines the workflow for engaging a catering supplier through the Greenists platform.

1.  **Initial Inquiry:** The user submits a catering request through the platform, specifying the event details, number of guests, dietary requirements, and budget.
2.  **Supplier Shortlisting:** The platform's AI assistant, "AdenEats," shortlists potential caterers based on the user's requirements and the information in the supplier database.
3.  **Request for Proposal (RFP):** AdenEats automatically generates and sends RFPs to the shortlisted caterers.
4.  **Proposal Review:** The user reviews the proposals received from the caterers, which include menu options and pricing.
5.  **Supplier Selection:** The user selects the preferred caterer and confirms the booking through the platform.
6.  **Contract and Payment:** The platform facilitates the contract signing and payment process.
7.  **Service Delivery and Feedback:** The caterer provides the service, and the user provides feedback through the platform after the event.

## Dashboard for Catering Management

A dedicated dashboard within the Greenists platform will provide an overview of catering services. The dashboard will include the following widgets:

*   **Active Catering Bookings:** A list of all ongoing and upcoming catering bookings, with key details such as event name, date, and caterer.
    *   *Data Source:* `bookings` table, filtered by `service_type = 'catering'` and `status IN ('active', 'upcoming')`.
*   **Supplier Performance:** Ratings and reviews for each catering supplier.
    *   *Data Source:* `reviews` table, aggregated by `supplier_id`.
*   **Catering Spend Analysis:** A chart showing catering expenses over time, with options to filter by event type or supplier.
    *   *Data Source:* `payments` table, filtered by `service_type = 'catering'`.
*   **Supplier Directory:** A searchable directory of all approved catering suppliers.
    *   *Data Source:* `caterers` table.

## AI Character: AdenEats

To enhance the user experience on the Greenists platform, a specialized AI character named "AdenEats" will assist with all catering-related tasks.

*   **Personality Traits:**
    *   **Expert:** Deep knowledge of local and international cuisine, and the catering industry in Aden.
    *   **Helpful:** Proactively assists users in finding the best catering options for their events.
    *   **Friendly and Warm:** Communicates in a welcoming and approachable manner, reflecting the hospitality of Aden.
    *   **Bilingual:** Fluent in both Arabic (with an Adeni dialect) and English.

*   **Sample Dialogues:**
    *   **(English):** "Welcome to Greenists! I'm AdenEats, your personal guide to the best catering in Aden. Tell me a little about your event, and I'll help you find the perfect menu."
    *   **(Arabic):** "!أهلاً بك في جرينستس! أنا عدن إيتس، دليلك الشخصي لأفضل خدمات التموين في عدن. أخبرني عن مناسبتك، وسأساعدك في العثور على قائمة الطعام المثالية"

## References

[1] YCI Group. (n.d.). *Yemen Catering & Support Services International*. Retrieved from https://ycigroup.net/
[2] ULC Yemen. (n.d.). *Catering*. Retrieved from https://ulcyemen.com/en/subsector/catering
[3] Aden's Quality. (n.d.). *Aden's Quality for Services*. Retrieved from https://adenquality.com/
