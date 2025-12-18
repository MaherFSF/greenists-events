# Research on Inventory Database Table for Greenists Event Management Platform

## 1. Introduction

This document outlines the research conducted to create a database table for tracking inventory of equipment and supplies for the Greenists event management platform in Aden, Yemen. The research focused on identifying local suppliers, defining a suitable database schema, and generating sample data.

## 2. Research and Data Gathering

Initial research focused on identifying local suppliers for event equipment and supplies in Aden, Yemen. The following resources were consulted:

*   Online search engines
*   Social media platforms (Facebook)

One potential supplier was identified:

*   **Marwan for Weddings (مروان للأفراح)**: A Facebook page was found for this supplier, indicating that they offer a range of event-related services, including equipment rental. However, specific contact information such as a phone number or address was not readily available on the page. Further investigation would be required to obtain this information.

Due to the limited availability of online information for local suppliers in Aden, it is recommended to conduct on-the-ground research to gather more comprehensive and verified data. This would involve visiting potential suppliers in person to obtain accurate contact details, pricing, and a full list of available equipment.

## 3. Database Schema

The following SQL `CREATE TABLE` statement defines the schema for the `inventory` table. This table is designed to store detailed information about each piece of equipment and supply item.

```sql
CREATE TABLE inventory (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    item_name VARCHAR(255) NOT NULL,
    item_name_ar VARCHAR(255),
    category VARCHAR(255),
    category_ar VARCHAR(255),
    supplier_id INT,
    quantity_available INT NOT NULL,
    rental_price_yer DECIMAL(10, 2),
    rental_price_usd DECIMAL(10, 2),
    purchase_cost_yer DECIMAL(10, 2),
    purchase_cost_usd DECIMAL(10, 2),
    `condition` VARCHAR(50),
    image_url VARCHAR(255),
    notes TEXT,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);
```

## 4. Sample Data

The following is a sample JSON data structure that can be used to populate the `inventory` table. This data is illustrative and should be replaced with actual data once it is collected.

```json
[
    {
        "item_name": "Plastic Chairs",
        "item_name_ar": "كراسي بلاستيك",
        "category": "Furniture",
        "category_ar": "أثاث",
        "supplier_id": 1,
        "quantity_available": 200,
        "rental_price_yer": 500,
        "rental_price_usd": 0.83,
        "purchase_cost_yer": 5000,
        "purchase_cost_usd": 8.33,
        "condition": "New",
        "image_url": "/images/plastic_chair.jpg",
        "notes": "Standard white plastic chairs."
    },
    {
        "item_name": "Round Tables",
        "item_name_ar": "طاولات دائرية",
        "category": "Furniture",
        "category_ar": "أثاث",
        "supplier_id": 1,
        "quantity_available": 50,
        "rental_price_yer": 2000,
        "rental_price_usd": 3.33,
        "purchase_cost_yer": 25000,
        "purchase_cost_usd": 41.67,
        "condition": "Good",
        "image_url": "/images/round_table.jpg",
        "notes": "10-person round tables."
    }
]
```

## 5. Conclusion and Recommendations

The `inventory` database table provides a solid foundation for tracking equipment and supplies for the Greenists platform. However, the success of this system depends on the quality and accuracy of the data it contains. It is therefore critical to prioritize the collection of real, verified information from local suppliers in Aden.

**Priority:** High

**Confidence:** Low. The lack of readily available online information for suppliers in Aden means that the sample data is based on assumptions and estimates. Real data collection is essential.
