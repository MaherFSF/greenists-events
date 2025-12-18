# Comprehensive Research on Supporting Database Tables for Greenists Event Management Platform

This document presents the consolidated research and definitions for the supporting database tables: `categories`, `settings`, and `templates`. This research is tailored for the Greenists Event Management Platform, with a focus on the specific requirements of Aden, Yemen.



## 1. Categories Table

This section details the `categories` table, which is designed to be a hierarchical structure to classify events, suppliers, and venues. The research focused on creating a comprehensive and localized set of categories for the Aden, Yemen market.

### Research and Localization

Initial research identified standard event management categories, which were then refined to include local context and terminology. This localization process is crucial for the platform's adoption and usability in Aden. Key considerations included:

*   **Wedding Traditions:** Incorporating specific Yemeni wedding customs.
*   **Cultural Events:** Adding categories for local cultural events and practices.
*   **Local Terminology:** Using common Arabic terms for services and event types.

### SQL Schema

```sql
CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    parent_category_id INT,
    description TEXT,
    icon VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_category_id) REFERENCES categories(category_id)
);
```

### Sample Data

```json
[
  {"category_name": "Event Type", "name_ar": "نوع الفعالية", "slug": "event-type"},
  {"category_name": "Supplier", "name_ar": "الموردون", "slug": "supplier"},
  {"category_name": "Venue", "name_ar": "أماكن", "slug": "venue"},
  {"category_name": "Weddings", "name_ar": "أعراس", "slug": "weddings", "parent_category_id": 1},
  {"category_name": "Engagements", "name_ar": "خطوبات", "slug": "engagements", "parent_category_id": 1},
  {"category_name": "Wedding Halls", "name_ar": "قاعات أفراح", "slug": "wedding-halls", "parent_category_id": 2},
  {"category_name": "Caterers", "name_ar": "متعهدو طعام", "slug": "caterers", "parent_category_id": 2},
  {"category_name": "Hotels", "name_ar": "فنادق", "slug": "hotels", "parent_category_id": 3},
  {"category_name": "Restaurants", "name_ar": "مطاعم", "slug": "restaurants", "parent_category_id": 3}
]
```


## 2. Settings Table

This section details the `settings` table, which is a key-value store for managing the platform's configuration. This approach provides flexibility to add new settings as the platform evolves.

### Research

The research identified several key areas for configuration, which have been grouped into logical sections:

*   **General Settings:** Basic platform information and branding.
*   **Event Settings:** Default behaviors and options for events.
*   **User Settings:** Management of user roles and permissions.
*   **Notification Settings:** Configuration for email and SMS notifications.
*   **Financial Settings:** Payment processing and financial reporting.

### SQL Schema

```sql
CREATE TABLE settings (
    setting_id INT PRIMARY KEY AUTO_INCREMENT,
    setting_key VARCHAR(255) NOT NULL UNIQUE,
    setting_value TEXT,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Sample Data

```json
[
  {"setting_key": "site_name", "setting_value": "Greenists Event Management", "description": "The name of the platform"},
  {"setting_key": "site_logo", "setting_value": "/path/to/logo.png", "description": "The URL of the platform's logo"},
  {"setting_key": "default_currency", "setting_value": "YER", "description": "The default currency for all financial transactions"},
  {"setting_key": "default_language", "setting_value": "ar", "description": "The default language of the platform"},
  {"setting_key": "timezone", "setting_value": "Asia/Aden", "description": "The default timezone for the platform"},
  {"setting_key": "admin_email", "setting_value": "admin@greenists.com", "description": "The email address for administrative notifications"}
]
```


## 3. Templates Table

This section details the `templates` table, which stores various types of templates used throughout the platform. This allows for easy customization and management of the platform's appearance and communications.

### Research

The research identified the following essential template types:

*   **Website Templates:** To control the layout and design of event websites.
*   **Email Templates:** For standardized communication with users.
*   **Invoice Templates:** For generating professional invoices.
*   **Event Description Templates:** Pre-formatted descriptions for common event types.

### SQL Schema

```sql
CREATE TABLE templates (
    template_id INT PRIMARY KEY AUTO_INCREMENT,
    template_name VARCHAR(255) NOT NULL,
    template_type ENUM('website', 'email', 'invoice', 'event_description') NOT NULL,
    template_content TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Sample Data

```json
[
  {
    "template_name": "Default Website Layout",
    "template_type": "website",
    "template_content": "<html>...</html>",
    "description": "The main website layout template."
  },
  {
    "template_name": "Event Invitation Email",
    "template_type": "email",
    "template_content": "<p>You are invited to [Event Name]!</p>",
    "description": "Email template for inviting users to an event."
  },
  {
    "template_name": "Standard Invoice",
    "template_type": "invoice",
    "template_content": "<h1>Invoice</h1><p>Details...</p>",
    "description": "The standard invoice template."
  },
  {
    "template_name": "Wedding Event Description",
    "template_type": "event_description",
    "template_content": "<p>Join us to celebrate the wedding of [Couple's Names].</p>",
    "description": "A template for wedding event descriptions."
  }
]
```
