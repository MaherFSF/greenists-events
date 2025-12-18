# Research: Supplier Portal Dashboard - Vendor View

This document outlines the research and findings for creating a supplier portal dashboard for the Greenists event management platform in Aden, Yemen.

## 1. Best Practices for Supplier Portal Dashboards

A supplier portal dashboard should provide a centralized and intuitive interface for vendors to manage their interactions with the Greenists platform. Key features and best practices identified from initial research include:

*   **Order Management:** Real-time tracking of orders, including status updates, shipment progress, and estimated delivery timelines.
*   **Product Management:** Tools for vendors to manage their product listings, including adding new products, updating existing ones, and managing inventory.
*   **Sales Analytics and Reporting:** Dashboards with key performance indicators (KPIs), sales reports, and analytics to help vendors track their performance.
*   **Communication and Collaboration:** Features like live chat and messaging to facilitate communication between vendors and the Greenists team.
*   **Compliance and Onboarding:** Automated workflows for vendor onboarding, document submission, and compliance management.
*   **User Experience (UX):** A tailored and user-friendly interface that is easy to navigate.
*   **Security:** Multi-factor authentication (MFA) to ensure secure access to the portal.

## 2. Dashboard Widgets and Data Sources

Based on the best practices, the following widgets and data sources are proposed for the vendor-facing dashboard:

| Widget Name                  | Data Source(s)                                      |
| ---------------------------- | --------------------------------------------------- |
| **New Orders**               | `orders` table (filtered by vendor and status)      |
| **Order Status Summary**     | `orders` table (aggregated by status)               |
| **Recent Activity**          | `notifications` table, `messages` table             |
| **Sales Performance**        | `sales` table, `orders` table                       |
| **Product Catalog**          | `products` table (filtered by vendor)               |
| **Messages**                 | `messages` table                                    |
| **Account Details**          | `vendors` table                                     |
| **Upcoming Payouts**         | `payouts` table                                     |

## 3. SQL Schema for Supplier Portal

```sql
CREATE TABLE suppliers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    category VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    email VARCHAR(255),
    website VARCHAR(255),
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_id INT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    currency VARCHAR(3),
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);

CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    supplier_id INT,
    customer_id INT,
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);

CREATE TABLE messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sender_id INT,
    receiver_id INT,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payouts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_id INT,
    amount DECIMAL(10, 2),
    currency VARCHAR(3),
    status ENUM('pending', 'paid') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);
```

## 4. Sample Data

```json
[
  {
    "id": 1,
    "name": "Al Fan Al Hadeth Studio",
    "arabic_name": "استديو الفن الحديث",
    "category": "Wedding Photographers",
    "address": "Aden",
    "phone": "+967-73380002",
    "whatsapp": "+967-73380002",
    "email": null,
    "website": null,
    "status": "approved"
  },
  {
    "id": 2,
    "name": "Al Hawanem lingerie",
    "arabic_name": "الهوانم للملابس الداخلية",
    "category": "Wedding Dresses",
    "address": "Aden",
    "phone": "+967-2265096",
    "whatsapp": null,
    "email": null,
    "website": null,
    "status": "approved"
  },
  {
    "id": 3,
    "name": "Al Layth",
    "arabic_name": "الليث",
    "category": "Wedding Photographers",
    "address": "Aden",
    "phone": "+967-733514054",
    "whatsapp": "+967-733514054",
    "email": null,
    "website": null,
    "status": "approved"
  }
]
```

## 5. Next Steps

*   Research specific requirements for vendors in Aden, Yemen.
*   Define the SQL schema for the tables identified above.
*   Generate sample data for the tables.
*   Refine the dashboard design based on further research.


## 6. Verified Suppliers in Aden, Yemen

| Supplier Name             | Arabic Name (الاسم بالعربي) | Category              | Address | Phone / WhatsApp | Pricing (YER/USD) | Source                  | Confidence |
| ------------------------- | --------------------------- | --------------------- | ------- | ---------------- | ----------------- | ----------------------- | ---------- |
| Al Fan Al Hadeth Studio   | استديو الفن الحديث         | Wedding Photographers | Aden    | +967-73380002    | To be determined  | arabiaweddings.com      | Medium     |
| Al Hawanem lingerie       | الهوانم للملابس الداخلية   | Wedding Dresses       | Aden    | +967-2265096     | To be determined  | arabiaweddings.com      | Medium     |
| Al Layth                  | الليث                       | Wedding Photographers | Aden    | +967-733514054   | To be determined  | arabiaweddings.com      | Medium     |
