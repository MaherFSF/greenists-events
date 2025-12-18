# Service Catalog Schema for Greenists Event Management Platform

This document outlines the database schema for the service and package catalog of the Greenists event management platform, tailored for Aden, Yemen. It includes the SQL `CREATE TABLE` statements, sample data, and an explanation of the schema design.

## Database Schema

The following SQL statements define the tables for the service catalog:

```sql
CREATE TABLE service_categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name_en VARCHAR(255) NOT NULL,
    category_name_ar VARCHAR(255) NOT NULL
);

CREATE TABLE services (
    service_id INT AUTO_INCREMENT PRIMARY KEY,
    service_name_en VARCHAR(255) NOT NULL,
    service_name_ar VARCHAR(255) NOT NULL,
    description_en TEXT,
    description_ar TEXT,
    category_id INT,
    supplier_id INT, -- Assuming a suppliers table exists
    base_price_yer DECIMAL(10, 2),
    base_price_usd DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES service_categories(category_id)
);

CREATE TABLE packages (
    package_id INT AUTO_INCREMENT PRIMARY KEY,
    package_name_en VARCHAR(255) NOT NULL,
    package_name_ar VARCHAR(255) NOT NULL,
    description_en TEXT,
    description_ar TEXT,
    total_price_yer DECIMAL(10, 2),
    total_price_usd DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE package_services (
    package_id INT,
    service_id INT,
    quantity INT DEFAULT 1,
    PRIMARY KEY (package_id, service_id),
    FOREIGN KEY (package_id) REFERENCES packages(package_id),
    FOREIGN KEY (service_id) REFERENCES services(service_id)
);
```

### Schema Explanation

*   **service_categories**: This table categorizes the services offered, with names in both English and Arabic.
*   **services**: This is the main table for individual services. It includes names and descriptions in both English and Arabic, pricing in YER and USD, and foreign keys to the `service_categories` and a (not yet defined) `suppliers` table.
*   **packages**: This table defines service packages, which bundle multiple services together. It also includes names and descriptions in both English and Arabic, and total pricing in YER and USD.
*   **package_services**: This is a join table that links services to packages, allowing for a many-to-many relationship.

## Sample Data

Below is sample data for the `service_categories` and `services` tables in JSON format.

### Service Categories

```json
{
    "service_categories": [
        {"category_name_en": "Venue", "category_name_ar": "مكان"}, 
        {"category_name_en": "Catering", "category_name_ar": "تموين"}, 
        {"category_name_en": "Photography", "category_name_ar": "تصوير فوتوغرافي"},
        {"category_name_en": "Videography", "category_name_ar": "تصوير فيديو"},
        {"category_name_en": "Sound System", "category_name_ar": "نظام الصوت"},
        {"category_name_en": "Lighting", "category_name_ar": "إضاءة"},
        {"category_name_en": "Entertainment", "category_name_ar": "ترفيه"},
        {"category_name_en": "Decorations", "category_name_ar": "الديكورات"},
        {"category_name_en": "Transportation", "category_name_ar": "وسائل النقل"},
        {"category_name_en": "Security", "category_name_ar": "الأمان"}
    ]
}
```

### Services

```json
{
    "services": [
        {
            "service_name_en": "Petra Hall - Coral Hotel Aden",
            "service_name_ar": "قاعة البتراء - فندق كورال عدن",
            "description_en": "A medium-sized hall suitable for workshops and small conferences.",
            "description_ar": "قاعة متوسطة الحجم مناسبة لورش العمل والمؤتمرات الصغيرة.",
            "category_id": 1,
            "supplier_id": 1, 
            "base_price_yer": 250000,
            "base_price_usd": 450
        },
        {
            "service_name_en": "Full Day Wedding Photography",
            "service_name_ar": "تصوير حفل زفاف ليوم كامل",
            "description_en": "Full day coverage of the wedding event, from preparation to the end of the party.",
            "description_ar": "تغطية كاملة لحفل الزفاف على مدار اليوم، من التحضيرات إلى نهاية الحفل.",
            "category_id": 3,
            "supplier_id": 2,
            "base_price_yer": 300000,
            "base_price_usd": 550
        },
        {
            "service_name_en": "Event Planning by DAS Events",
            "service_name_ar": "تخطيط الفعاليات من داس للفعاليات",
            "description_en": "Complete event planning and styling services.",
            "description_ar": "خدمات تخطيط وتصميم الفعاليات الكاملة.",
            "category_id": 1,
            "supplier_id": 3,
            "base_price_yer": 500000,
            "base_price_usd": 900
        }
    ]
}
```

## Sources and Confidence

The sample data for venues and event planners was derived from web search results for event-related services in Aden, Yemen. The pricing is an estimation and should be verified with the actual suppliers.

*   **Confidence Level**: Medium. The existence of the venues and services is confirmed through multiple online sources, but the pricing is an estimate and requires direct confirmation.

## References

[1] Cvent. (n.d.). *Top Event Venues in Yemen*. Retrieved from https://www.cvent.com/venues/results/Yemen
[2] Meetings & Conventions. (n.d.). *Aden, Yemen Event Space & Hotel Conference Rooms*. Retrieved from https://www.meetings-conventions.com/Meeting-Event-Venues/Aden-Yemen/Hotels
[3] Instagram. (n.d.). *DAS (@das_4events)*. Retrieved from https://www.instagram.com/das_4events/
