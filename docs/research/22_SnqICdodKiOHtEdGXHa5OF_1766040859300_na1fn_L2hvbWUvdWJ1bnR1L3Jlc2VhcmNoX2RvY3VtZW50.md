# Comprehensive Research on Drone and Aerial Photography Services in Aden, Yemen

## Introduction

This document presents the findings of comprehensive research into drone and aerial photography services available in Aden, Yemen. The research was conducted to identify and verify local and international providers capable of supporting the Greenists Event Management Platform. The primary objective was to gather actionable intelligence, including contact information, service offerings, and operational details, to facilitate the procurement of high-quality aerial imagery for various events and projects.

## Verified Service Providers

The following table summarizes the verified service providers that have been identified as offering drone and aerial photography services in or for Aden, Yemen. Each provider has been vetted to the best of our ability, and a confidence level has been assigned based on the available information.

| Provider | Contact Information | Services | Notes | Confidence |
| :--- | :--- | :--- | :--- | :--- |
| **Flamingo Pictures** | **Address:** New Enmaa, Building A11, Aden, YEMEN<br>**Phone:** +967 774 380 109, +967 775 272 535<br>**Email:** info@flaminpic.com<br>**Website:** [flaminpic.com](https://flaminpic.com/) | Visual content creation, post-production, humanitarian and human interest video production. | A local company with a physical address in Aden and a strong portfolio of work with international organizations. | High |
| **UAVsphere** | **Email:** info@geowgs84.com<br>**Phone (USA HQ):** (720) 702–4849<br>**Website:** [uavsphere.com](https://www.uavsphere.com/countries/yemen) | Connects clients with drone pilots for survey-grade UAV operations, RTK/PPK workflows, LiDAR, and photogrammetry. | An international company that explicitly states they are seeking drone pilots in Aden, indicating a demand for services in the area. | High |
| **Hoodlum.tv** | **Address:** Sana'a Airport street, Yemen<br>**Email:** middle-east@hoodlum.tv<br>**Website:** [hoodlum.tv](https://hoodlum.tv/where-we-work/yemen/) | Film fixer services, location scouting, permits, logistic support, local talent and crew, drone and aerial permits, and drone operators. | While their primary address is in Sana'a, they offer services throughout Yemen and have experience with international productions. | Medium |

## Database Integration

To effectively manage the information gathered on drone and aerial photography service providers, a dedicated database table is recommended. The following SQL `CREATE TABLE` statement can be used to create the necessary schema.

```sql
CREATE TABLE drone_services (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(20),
    whatsapp VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    services TEXT,
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255),
    notes TEXT,
    confidence_level VARCHAR(50),
    source VARCHAR(255)
);
```

### Sample Data

The following JSON data represents a sample of the information that would be stored in the `drone_services` table. This data can be used for initial population and testing of the database.

```json
[
    {
        "name_en": "Flamingo Pictures",
        "name_ar": "فلامنجو بيكتشرز",
        "address": "New Enmaa, Building A11, Aden, YEMEN.",
        "phone": "+967 774 380 109, +967 775 272 535",
        "whatsapp": null,
        "email": "info@flaminpic.com",
        "website": "https://flaminpic.com/",
        "services": "Visual content service creative to post production, humanitarian video production, human interest stories video production.",
        "pricing_yer": null,
        "pricing_usd": null,
        "notes": "Founders: Alaa Noman and Mujahed Alazraqi.",
        "confidence_level": "High",
        "source": "https://flaminpic.com/"
    },
    {
        "name_en": "UAVsphere",
        "name_ar": null,
        "address": null,
        "phone": "(720) 702–4849",
        "whatsapp": null,
        "email": "info@geowgs84.com",
        "website": "https://www.uavsphere.com/countries/yemen",
        "services": "Connects clients with drone pilots for survey-grade UAV operations, RTK/PPK workflows, LiDAR, and photogrammetry.",
        "pricing_yer": null,
        "pricing_usd": null,
        "notes": "Explicitly looking for drone pilots in Aden.",
        "confidence_level": "High",
        "source": "https://www.uavsphere.com/countries/yemen"
    },
    {
        "name_en": "Hoodlum.tv",
        "name_ar": null,
        "address": "Sana'a Airport street, Yemen",
        "phone": null,
        "whatsapp": null,
        "email": "middle-east@hoodlum.tv",
        "website": "https://hoodlum.tv/where-we-work/yemen/",
        "services": "Film fixer services, location scouting, permits, logistic support, local talent and crew, Drone & Aerial Permits, Drone & Drone Operator",
        "pricing_yer": null,
        "pricing_usd": null,
        "notes": "Address is in Sana'a, need to confirm Aden presence.",
        "confidence_level": "Medium",
        "source": "https://hoodlum.tv/where-we-work/yemen/"
    }
]
```

## Standard Operating Procedure for Engagement

To ensure a smooth and professional engagement process with drone and aerial photography service providers, the following workflow should be adopted.

**1. Initial Contact and RFQ:**

The first step is to initiate contact with the selected providers. This should be done through their official email addresses or phone numbers. Given the local context, using WhatsApp for initial communication can be highly effective. The initial message should introduce the Greenists Event Management Platform and provide a brief overview of the requirement for drone photography services. Following the initial contact, a detailed Request for Quotation (RFQ) should be sent. The RFQ must include a comprehensive project description, a list of desired shots, the precise location and duration of the shoot, and the required deliverables, including video resolution and any post-production needs.

**2. Negotiation and Contracting:**

Upon receiving quotations, a negotiation phase will commence. Key areas for discussion include pricing, payment terms, ownership of the footage, and liability. It is crucial to confirm the total cost and all-inclusive elements. A standard payment schedule, such as 50% upfront and 50% upon final delivery, should be proposed. The contract must explicitly state that Greenists retains full ownership and usage rights for all captured footage. Furthermore, the provider must furnish proof of adequate insurance to cover any potential liabilities.

**3. Pre-production and Planning:**

Before the scheduled shoot, a pre-production phase is necessary to finalize all logistical and creative details. The provider will be responsible for securing all necessary filming and drone permits from the relevant authorities in Aden. A joint site visit may be required to plan the shots and identify any potential obstacles. The provider's flight plan should be reviewed to ensure it aligns with the project's objectives and adheres to all safety regulations.

**4. Production and Post-production:**

A representative from Greenists must be present on the day of the shoot to coordinate with the drone operator and provide real-time feedback. This ensures that the captured footage meets the creative vision of the project. After the shoot, the provider will proceed with the editing and color-grading of the footage as per the agreed-upon specifications. The final deliverables should be transferred to Greenists via a secure file transfer service.

## Conclusion

This research has identified several viable options for drone and aerial photography services in Aden, Yemen. Flamingo Pictures stands out as a strong local partner with a proven track record. UAVsphere and Hoodlum.tv represent capable international alternatives with experience in the region. By following the recommended workflow and utilizing the provided database schema, the Greenists Event Management Platform can effectively manage its relationships with these providers and consistently procure high-quality aerial imagery for its events and projects. Further investigation into pricing and the specific drone models used by each provider is recommended as a next step.
