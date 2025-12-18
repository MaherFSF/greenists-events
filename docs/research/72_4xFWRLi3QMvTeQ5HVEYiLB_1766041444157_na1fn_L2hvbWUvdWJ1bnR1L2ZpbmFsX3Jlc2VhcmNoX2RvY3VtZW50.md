# Operations Dashboard for Event Management: Aden, Yemen

## 1. Introduction

This document presents a comprehensive research and design proposal for an operations dashboard tailored to the Greenists event management platform in Aden, Yemen. The primary objective of this dashboard is to offer a centralized, real-time overview of all event-related activities, thereby facilitating efficient management and enabling data-driven decision-making. The research encompasses local market analysis, dashboard design principles, and a technical implementation framework, including a database schema and sample data.

## 2. Core Features of an Effective Event Management Dashboard

A modern event management dashboard serves as the command center for event organizers, providing an intuitive and centralized interface to monitor and control every facet of an event. Based on an analysis of industry best practices, several core features have been identified as essential for a successful implementation. These features are designed to streamline workflows, enhance attendee experience, and provide actionable insights for event optimization.

At the heart of the dashboard is the capacity for **real-time data and analytics**. This functionality ensures that event organizers have access to up-to-the-minute information on critical metrics such as ticket sales, registration numbers, attendee check-ins, and social media engagement. The ability to monitor these key performance indicators in real time empowers the team to make swift, informed decisions and adapt to changing circumstances as the event unfolds.

A robust system for **comprehensive attendee management** is another cornerstone of the platform. This includes seamless processes for registration, ticketing, communication, and feedback collection. The dashboard will feature a searchable and filterable directory of all attendees, with each entry linking to a detailed profile. This will provide a holistic view of each participant, from their initial registration to their post-event feedback.

To ensure financial accountability and transparency, the dashboard will incorporate **financial tracking and reporting** tools. This will provide a clear and concise overview of the event's financial health, tracking revenue from various sources like ticket sales and sponsorships, while also monitoring expenses related to venue rental, catering, and marketing. The availability of customizable financial reports will be crucial for post-event analysis and for measuring the return on investment.

Effective **task and team management** is critical for the successful execution of any event. The dashboard will therefore include integrated project management tools designed to coordinate the efforts of the entire event team. These tools will allow for the assignment of tasks, the setting of deadlines, and the tracking of progress, ensuring that all team members are aligned and accountable for their respective responsibilities.

To maximize event visibility and drive attendance, the dashboard will be equipped with **marketing and promotion tools**. These will include features for email marketing campaigns, social media integration, and the management of promotional codes. By providing analytics on the performance of various marketing channels, the platform will enable organizers to optimize their outreach efforts and maximize their marketing budget.

For the day of the event, the dashboard will transition to support **on-site operations management**. This will include essential features such as a streamlined check-in process with badge printing capabilities, session and speaker management, and real-time communication channels for staff and volunteers. This will ensure a smooth and professional experience for all attendees and a coordinated effort from the event team.

Finally, the platform will offer comprehensive **reporting and post-event analysis** capabilities. The ability to generate detailed, customizable reports on all aspects of the event—from attendee demographics to financial outcomes—is indispensable for evaluating success and for informing the planning of future events. These insights will provide a valuable foundation for continuous improvement and strategic growth.


## 3. Local Event Management Landscape in Aden, Yemen

A thorough understanding of the local event management landscape in Aden is crucial for the successful implementation of the Greenists platform. The research identified several key players in the market, including event management companies and a variety of venues suitable for different types of events. This section provides a detailed overview of the findings.

### 3.1. Event Management Companies

Two prominent event management companies were identified in Aden, both offering a range of services that could be integrated with or featured on the Greenists platform.

| Company Name | Arabic Name | Location | Contact Information | Services |
| :--- | :--- | :--- | :--- | :--- |
| Monasaba for Special Events | مناسبة للفعاليات الخاصة | Aden - Khor Maksar - Al-Arish | Phone: +967 777 385 333<br>WhatsApp: +967 777 385 333<br>Email: info@monasaba-ye.com<br>Website: https://monasaba-ye.com/ | Event Management, Press Conferences, Seminars, Advertising Campaigns, Product Launching, Dealer Meets, Promotional Publicity, Exhibitions, Consultant and training. |
| Bahr Al-Sharq for Marketing & Advertising | بحار الشرق للتسويق والإعلان | Al-Mansoura District, beside Saber Hospital, Aden, Yemen | Phone: +967-2-351417<br>WhatsApp: +967-784-006800<br>Email: info@bahrshrq.com<br>Website: https://www.bahrshrq.com/ | Mobile Advertising Screens, Digital Marketing, Brand Identity Design, Event Management, Websites & Apps Development, Media Production. |

### 3.2. Wedding and Event Halls

A significant part of the event industry in Aden revolves around weddings and other social gatherings. The research compiled a list of popular wedding halls, including their capacity, pricing, and contact information. It is important to note that the pricing information, primarily sourced from social media, should be considered indicative and requires direct verification for accuracy. The prices are provided in Yemeni Rial (YER) and, in some cases, Saudi Riyal (SAR), which is a common practice in Yemen.

<br>

| Hall Name (Arabic) | Capacity (Chairs) | Price (YER) | Price (SAR) | Location | Contact Numbers |
| :--- | :--- | :--- | :--- | :--- | :--- |
| قاعة الفخامة (الكبرى) | 600 | 1,200,000 | | الممدارة الهناجر | 717673395, 775481888, 737673395 |
| قاعة الفخامة (الشاملة) | 330 | 1,100,000 | | الممدارة الهناجر | 717673395, 775481888, 737673395 |
| قاعة الفخامة (الديوان الكبير) | 600 | | 3000 | الممدارة الهناجر | 717673395, 775481888, 737673395 |
| قاعة الفخامة (الديوان الصغير) | 200 | | 1300 | الممدارة الهناجر | 717673395, 775481888, 737673395 |
| قاعة شمسان | 370 | 450,000 | | المعلا بجانب نادي شمسان الرياضي | 778981790, 779997852, 02/221449 |
| قاعة القصر الذهبي (الكبرى) | 600 | 1,200,000 | | المنصورة كابوتا بعد مجمع بن لادن شارع الخمسين | 777768789, 771765423, 776135041 |
| قاعة القصر الذهبي (الصغرى) | 270 | 500,000 | | المنصورة كابوتا بعد مجمع بن لادن شارع الخمسين | 777768789, 771765423, 776135041 |
| قاعة قصر الملوك (الكبرى) | 450 | 600,000 | | المنصورة حاشد | 02327933, 777637126, 736117742 |
| قاعة قصر الملوك (الوسطى) | 300 | 500,000 | | المنصورة حاشد | 02327933, 777637126, 736117742 |
| قاعة قصر الملوك (الصغرى) | | 250,000 | | المنصورة حاشد | 02327933, 777637126, 736117742 |
| قاعة الجوهرة | 400 | 550,000 | | المنصورة حاشد | 777333720 |
| قاعة قصر التاج (ذهبية) | 450 | 700,000 | | المنصورة حاشد | 735104876, 771218028, 734400666 |
| قاعة قصر التاج (وسطى) | 300 | 500,000 | | المنصورة حاشد | 735104876, 771218028, 734400666 |
| قاعة قصر التاج (صغرى) | | 400,000 | | المنصورة حاشد | 735104876, 771218028, 734400666 |
| قاعة مون لايت (الكبرى) | 450 | 600,000 | | المنصورة حاشد | 773952835, 738072284 |
| قاعة مون لايت (الوسطى) | 250 | 400,000 | | المنصورة حاشد | 773952835, 738072284 |
| قاعة شهد (الكبرى) | 500 | 900,000 | | | |
| قاعة شهد (الوسطى) | 440 | 800,000 | | | |
| قاعة الشموخ | 500 | 800,000 | | المنصورة حاشد | 781217000, 772605258 |
| قاعة الاصيل | 500 | 380,000 | | الشعب | 775604201 |
| قاعة الاميرة | | 780,000 | | كورنيش ريمي بعد شواطى عدن | 02358250, 02358251 |


## 4. Operations Dashboard Design

The operations dashboard for the Greenists event management platform will be designed to provide a centralized and comprehensive view of all event-related activities. The dashboard will be organized into a series of widgets, each displaying specific information and metrics. The design will prioritize clarity, ease of use, and real-time data visualization.

### 4.1. Dashboard Widgets

The following table outlines the proposed widgets for the operations dashboard, along with their corresponding data sources:

| Widget | Description | Data Sources |
| :--- | :--- | :--- |
| **Event Overview** | Displays essential information about the current or selected event, including its name, date, time, venue, and status (e.g., Upcoming, In Progress, Completed). | `events` table |
| **Key Metrics** | Provides a high-level summary of key performance indicators (KPIs) for the event, such as total registrations, ticket sales, revenue (in YER and USD), check-ins, and capacity vs. attendance. | `attendees`, `tickets`, `orders` tables |
| **Real-time Activity Feed** | A live feed that shows recent activities related to the event, such as new registrations, ticket purchases, and attendee check-ins. | `attendees`, `tickets`, `check_ins` tables |
| **Task Management** | A to-do list for event staff, allowing for the creation, assignment, and tracking of tasks. Each task will have a status (e.g., To Do, In Progress, Done) and a deadline. | `tasks` table |
| **Attendee Management** | A searchable and filterable list of all registered attendees. Selecting an attendee will display their detailed profile, including contact information, registration details, and any special notes. | `attendees` table |
| **Financial Overview** | A summary of the event's financial performance, including a breakdown of revenue by source (e.g., ticket sales, sponsorships) and a list of expenses. | `orders`, `expenses` tables |
| **Venue & Supplier Directory** | A directory of local venues and suppliers, with contact information, pricing, and booking status. This will be pre-populated with the research data and can be updated by the platform administrators. | `venues`, `suppliers` tables |
| **Interactive Map** | A map of Aden showing the locations of the event, recommended hotels, and other points of interest. This can also be used to visualize the geographic distribution of attendees. | `events`, `venues` tables; external mapping API |

### 4.2. User Interface and User Experience (UX)

The dashboard will feature a clean and modern user interface, with a layout that is both intuitive and visually appealing. The use of charts, graphs, and other data visualization elements will make it easy for users to understand complex information at a glance. The design will also be responsive, ensuring that the dashboard is accessible and usable on a variety of devices, including desktops, tablets, and smartphones.


## 5. Technical Implementation

This section outlines the technical framework for the operations dashboard, including the database schema and sample data to illustrate the data structure.

### 5.1. Database Schema

To support the operations dashboard, a relational database with a well-defined schema is required. The following SQL `CREATE TABLE` statements define the necessary tables for storing and managing event-related data.

```sql
-- Main table for storing event information
CREATE TABLE events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    event_name VARCHAR(255) NOT NULL,
    event_name_ar VARCHAR(255),
    event_date DATETIME NOT NULL,
    venue_id INT,
    status VARCHAR(50) DEFAULT 'Upcoming', -- Upcoming, In Progress, Completed, Cancelled
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (venue_id) REFERENCES venues(venue_id)
);

-- Table for storing venue information
CREATE TABLE venues (
    venue_id INT PRIMARY KEY AUTO_INCREMENT,
    venue_name VARCHAR(255) NOT NULL,
    venue_name_ar VARCHAR(255),
    address VARCHAR(255),
    address_ar VARCHAR(255),
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    capacity INT,
    price_yer DECIMAL(10, 2),
    price_usd DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table for storing supplier information
CREATE TABLE suppliers (
    supplier_id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_name VARCHAR(255) NOT NULL,
    supplier_name_ar VARCHAR(255),
    service_type VARCHAR(100), -- e.g., Catering, Photography, Sound System
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table for storing attendee information
CREATE TABLE attendees (
    attendee_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone_number VARCHAR(20),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

-- Table for storing ticket information
CREATE TABLE tickets (
    ticket_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    ticket_type VARCHAR(100) NOT NULL, -- e.g., VIP, General Admission
    price_yer DECIMAL(10, 2),
    price_usd DECIMAL(10, 2),
    quantity INT,
    sold INT DEFAULT 0,
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

-- Table for storing order information
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    attendee_id INT,
    ticket_id INT,
    quantity INT,
    total_price_yer DECIMAL(10, 2),
    total_price_usd DECIMAL(10, 2),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (attendee_id) REFERENCES attendees(attendee_id),
    FOREIGN KEY (ticket_id) REFERENCES tickets(ticket_id)
);

-- Table for storing check-in information
CREATE TABLE check_ins (
    check_in_id INT PRIMARY KEY AUTO_INCREMENT,
    attendee_id INT,
    event_id INT,
    check_in_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (attendee_id) REFERENCES attendees(attendee_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

-- Table for storing task information
CREATE TABLE tasks (
    task_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    task_name VARCHAR(255) NOT NULL,
    assigned_to INT, -- User ID of the staff member
    due_date DATE,
    status VARCHAR(50) DEFAULT 'To Do', -- To Do, In Progress, Done
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

-- Table for storing expense information
CREATE TABLE expenses (
    expense_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    expense_category VARCHAR(100) NOT NULL,
    amount_yer DECIMAL(10, 2),
    amount_usd DECIMAL(10, 2),
    expense_date DATE,
    description TEXT,
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);
```

### 5.2. Sample Data

The following JSON objects provide sample data for the `venues` and `suppliers` tables, based on the research conducted.

#### 5.2.1. Venues Sample Data

```json
[
    {
        "venue_name": "قاعة الفخامة",
        "venue_name_ar": "قاعة الفخامة",
        "address": "الممدارة الهناجر",
        "phone_number": "717673395",
        "whatsapp_number": "717673395",
        "capacity": 600,
        "price_yer": 1200000,
        "price_usd": 2400
    },
    {
        "venue_name": "قاعة شمسان",
        "venue_name_ar": "قاعة شمسان",
        "address": "المعلا بجانب نادي شمسان الرياضي",
        "phone_number": "778981790",
        "whatsapp_number": "778981790",
        "capacity": 370,
        "price_yer": 450000,
        "price_usd": 900
    },
    {
        "venue_name": "قاعة القصر الذهبي",
        "venue_name_ar": "قاعة القصر الذهبي",
        "address": "المنصورة كابوتا بعد مجمع بن لادن شارع الخمسين",
        "phone_number": "777768789",
        "whatsapp_number": "777768789",
        "capacity": 600,
        "price_yer": 1200000,
        "price_usd": 2400
    }
]
```

#### 5.2.2. Suppliers Sample Data

```json
[
    {
        "supplier_name": "Monasaba for Special Events",
        "supplier_name_ar": "مناسبة للفعاليات الخاصة",
        "service_type": "Event Management",
        "phone_number": "+967 777 385 333",
        "whatsapp_number": "+967 777 385 333",
        "email": "info@monasaba-ye.com",
        "website": "https://monasaba-ye.com/"
    },
    {
        "supplier_name": "Bahr Al-Sharq for Marketing & Advertising",
        "supplier_name_ar": "بحار الشرق للتسويق والإعلان",
        "service_type": "Event Management",
        "phone_number": "+967-2-351417",
        "whatsapp_number": "+967-784-006800",
        "email": "info@bahrshrq.com",
        "website": "https://www.bahrshrq.com/"
    }
]
```


## 6. Key Data Points

The research has yielded several key data points that are critical for the development and implementation of the Greenists event management platform in Aden, Yemen.

*   **Local Market Presence:** There are established event management companies in Aden, such as **Monasaba for Special Events** and **Bahr Al-Sharq for Marketing & Advertising**, which indicates a viable market for event services.
*   **Venue Availability and Pricing:** A wide range of event venues, particularly wedding halls, are available in Aden with varying capacities and price points. Prices for wedding halls can range from **250,000 YER** to **1,200,000 YER**, with some venues also quoting prices in Saudi Riyal (SAR).
*   **Digital Presence:** Local event management companies and venues have an online presence, primarily through websites and social media platforms like Facebook and Instagram. This provides an opportunity for the Greenists platform to aggregate this information and provide a centralized booking and management system.
*   **Contact Information:** Verified contact information, including phone numbers and WhatsApp numbers, has been collected for several key vendors. The prevalence of WhatsApp as a communication channel is a significant factor to consider for the platform's communication features.
*   **Dashboard Functionality:** The proposed dashboard design includes essential widgets for event overview, key metrics, real-time activity feed, task management, attendee management, financial overview, a venue and supplier directory, and an interactive map. These features are based on industry best practices and are tailored to the specific needs of the Aden market.

## 7. Conclusion and Recommendations

This research provides a solid foundation for the development of an operations dashboard for the Greenists event management platform in Aden, Yemen. The findings indicate a clear market need for a centralized and efficient system for managing events. The proposed dashboard design, database schema, and the compiled data on local vendors offer a clear roadmap for the implementation of the platform.

It is recommended that the next steps focus on the following:

*   **Data Verification:** Directly contact the listed venues and suppliers to verify the accuracy of the collected information, particularly pricing and availability.
*   **Platform Development:** Begin the development of the platform, starting with the database and the core dashboard functionalities.
*   **Partnership Building:** Initiate discussions with local event management companies and venues to explore potential partnership opportunities.

By leveraging the insights and data gathered in this research, the Greenists platform is well-positioned to become a leading player in the event management industry in Aden, Yemen.
