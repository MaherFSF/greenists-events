# Research on Events Database Table for Greenists Platform

This document outlines the research and design for the `events` database table for the Greenists event management platform in Aden, Yemen. The proposed schema is designed to be a comprehensive master table for all event-related information, incorporating best practices for flexibility and scalability.

## Refined SQL Schema

Based on an analysis of event management database design principles [1], the following SQL `CREATE TABLE` statement is proposed for the master `events` table. This schema is intentionally denormalized to serve as a central hub for event information, though in a fully normalized production environment, several of these fields would be foreign keys to other tables. The comments within the schema clarify these intended relationships and the purpose of each field.

```sql
CREATE TABLE events (
    event_id INT PRIMARY KEY AUTO_INCREMENT COMMENT 'Unique identifier for each event.',
    event_name_en VARCHAR(255) NOT NULL COMMENT 'Name of the event in English.',
    event_name_ar VARCHAR(255) COMMENT 'Name of the event in Arabic.',
    event_description_en TEXT COMMENT 'Detailed description of the event in English.',
    event_description_ar TEXT COMMENT 'Detailed description of the event in Arabic.',
    event_type_id INT COMMENT 'Foreign key to an event_types table (e.g., conference, workshop, wedding).',
    event_category_id INT COMMENT 'Foreign key to an event_categories table (e.g., corporate, social, community).',
    start_date DATETIME NOT NULL COMMENT 'Start date and time of the event.',
    end_date DATETIME NOT NULL COMMENT 'End date and time of the event.',
    venue_id INT COMMENT 'Foreign key to a venues table.',
    organizer_id INT COMMENT 'Foreign key to a users or organizations table for the event organizer.',
    contact_person_name_en VARCHAR(255) COMMENT 'Contact person for the event in English.',
    contact_person_name_ar VARCHAR(255) COMMENT 'Contact person for the event in Arabic.',
    contact_phone VARCHAR(20) COMMENT 'Primary phone number for the contact person.',
    contact_whatsapp VARCHAR(20) COMMENT 'WhatsApp number for the contact person.',
    contact_email VARCHAR(255) COMMENT 'Email address for the contact person.',
    website VARCHAR(255) COMMENT 'Official website for the event.',
    registration_url VARCHAR(255) COMMENT 'URL for event registration.',
    price_yer DECIMAL(10, 2) COMMENT 'Ticket or entry price in Yemeni Rial.',
    price_usd DECIMAL(10, 2) COMMENT 'Ticket or entry price in US Dollars.',
    capacity INT COMMENT 'Maximum number of attendees for the event.',
    status VARCHAR(50) DEFAULT 'planned' COMMENT 'Current status of the event (e.g., planned, confirmed, cancelled, postponed).',
    is_public BOOLEAN DEFAULT TRUE COMMENT 'Indicates if the event is open to the public.',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Timestamp of when the event record was created.',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Timestamp of the last update to the event record.',
    cover_image_url VARCHAR(255) COMMENT 'URL for the main promotional image for the event.',
    tags TEXT COMMENT 'Comma-separated tags for searching and filtering events.',
    agenda_en JSON COMMENT 'JSON object containing the event agenda in English.',
    agenda_ar JSON COMMENT 'JSON object containing the event agenda in Arabic.',
    speakers JSON COMMENT 'JSON array of speaker information (name, bio, photo_url).',
    sponsors JSON COMMENT 'JSON array of sponsor information (name, logo_url, website).',
    is_featured BOOLEAN DEFAULT FALSE COMMENT 'Indicates if the event should be featured on the platform.',
    cancellation_policy_en TEXT COMMENT 'Cancellation policy in English.',
    cancellation_policy_ar TEXT COMMENT 'Cancellation policy in Arabic.',
    additional_notes_en TEXT COMMENT 'Any other relevant notes in English.',
    additional_notes_ar TEXT COMMENT 'Any other relevant notes in Arabic.'
);
```

## Key Data Points

The `events` table serves as the core of the event management system, capturing all essential information about an event. The table is structured to hold a variety of data, which can be grouped into the following logical categories:

| Category                 | Fields                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------- |
| **Event Identification**   | `event_id`, `event_name_en`, `event_name_ar`                                                              |
| **Event Details**        | `event_description_en`, `event_description_ar`, `start_date`, `end_date`, `status`                        |
| **Categorization**       | `event_type_id`, `event_category_id`, `tags`                                                            |
| **Location**             | `venue_id`                                                                                              |
| **Contact & Registration** | `contact_person_name_en`, `contact_person_name_ar`, `contact_phone`, `contact_whatsapp`, `contact_email`, `website`, `registration_url` |
| **Financials**           | `price_yer`, `price_usd`                                                                                |
| **Logistics**            | `capacity`, `agenda_en`, `agenda_ar`, `speakers`, `sponsors`                                            |
| **Platform Specific**    | `is_public`, `is_featured`, `cover_image_url`                                                           |
| **Policies**             | `cancellation_policy_en`, `cancellation_policy_ar`                                                      |

## Sample Data

The following JSON object provides a sample record for the `events` table, illustrating the data structure and the type of information that would be stored for a single event.

```json
[
  {
    "event_name_en": "Aden Tech Summit 2025",
    "event_name_ar": "قمة عدن التقنية 2025",
    "event_description_en": "A premier event for technology enthusiasts and professionals in Aden.",
    "event_description_ar": "حدث رائد لعشاق التكنولوجيا والمهنيين في عدن.",
    "event_type_id": 1,
    "event_category_id": 1,
    "start_date": "2025-10-26 09:00:00",
    "end_date": "2025-10-27 17:00:00",
    "venue_id": 101,
    "organizer_id": 201,
    "contact_person_name_en": "Ahmed Al-Fahd",
    "contact_person_name_ar": "أحمد الفهد",
    "contact_phone": "+967 777 123 456",
    "contact_whatsapp": "+967 777 123 456",
    "contact_email": "ahmed.alfahd@example.com",
    "website": "https://adentechsummit.com",
    "registration_url": "https://adentechsummit.com/register",
    "price_yer": 25000.00,
    "price_usd": 100.00,
    "capacity": 500,
    "status": "confirmed",
    "is_public": true,
    "cover_image_url": "/images/events/aden-tech-summit-2025.jpg",
    "tags": "tech, summit, aden, yemen, innovation",
    "agenda_en": {"day1": [{"time": "09:00", "topic": "Opening Ceremony"}], "day2": []},
    "agenda_ar": {"day1": [{"time": "09:00", "topic": "حفل الافتتاح"}], "day2": []},
    "speakers": [{"name": "Dr. Layla Saleh", "bio": "AI Expert"}],
    "sponsors": [{"name": "Yemen Mobile", "logo_url": "/images/sponsors/yemen-mobile.png"}],
    "is_featured": true,
    "cancellation_policy_en": "Full refund if cancelled 7 days prior to the event.",
    "cancellation_policy_ar": "استرداد كامل المبلغ في حال الإلغاء قبل 7 أيام من الحدث.",
    "additional_notes_en": "",
    "additional_notes_ar": ""
  }
]
```

## Related Tables for a Complete Event Management System

For a robust and scalable event management platform, a normalized database structure is recommended. This involves creating several related tables that store specific information and are linked to the `events` table via foreign keys. This approach reduces data redundancy and improves data integrity. The following table outlines the recommended related tables and their primary functions.

| Table Name             | Purpose                                                                                                                            |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **`event_types`**        | Stores the different types of events (e.g., Conference, Workshop, Wedding, Concert).                                               |
| **`event_categories`**   | Stores the different categories of events (e.g., Corporate, Social, Community, Educational).                                       |
| **`venues`**             | A master table for all event venues, including name, address, capacity, contact information, and pricing.                          |
| **`users` / `organizations`** | A table to store information about event organizers, which could be individuals or companies.                                      |
| **`attendees`**          | A table to store information about event attendees, including their contact details and registration status.                       |
| **`registrations`**      | A junction table to manage the many-to-many relationship between `events` and `attendees`.                                        |
| **`speakers`**           | A table to store detailed information about event speakers.                                                                        |
| **`sponsors`**           | A table to store detailed information about event sponsors.                                                                        |
| **`event_staff`**        | A table to assign staff members to specific events and roles.                                                                      |
| **`tasks`**              | A table to manage tasks associated with each event, including task name, description, assigned staff, and due date.                |

## References

[1] Arpita Deb, "Event Management Database Design Part 1," Medium, Sep 21, 2024. [Online]. Available: https://medium.com/@arpita_deb/event-management-database-design-part-1-5239620410c1
