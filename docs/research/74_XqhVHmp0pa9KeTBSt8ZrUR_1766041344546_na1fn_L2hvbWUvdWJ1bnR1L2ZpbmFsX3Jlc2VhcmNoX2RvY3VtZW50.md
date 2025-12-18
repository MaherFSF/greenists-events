# Sales Dashboard Research: Pipeline and Conversions for Greenists Event Management Platform

## 1. Introduction

This document outlines the research and recommendations for a comprehensive sales dashboard for the Greenists event management platform, specifically focusing on pipeline and conversions in the context of Aden, Yemen. The dashboard is designed to provide actionable insights for the sales team and management, enabling data-driven decision-making and revenue growth.

## 2. Key Dashboard Components

An effective sales dashboard should provide a clear and concise overview of the sales process. The following widgets are recommended for the Greenists sales dashboard:

| Widget Title | Description | Data Source(s) | Visualization |
| :--- | :--- | :--- | :--- |
| **Sales Pipeline** | Displays the current status of all event proposals in the sales funnel, from initial lead to closed deal. | `event_proposals` | Funnel Chart |
| **Conversion Rate** | Shows the percentage of proposals that have been successfully converted into confirmed events. | `event_proposals` | Gauge Chart |
| **Revenue by Event Type** | Breaks down the total revenue by the type of event (e.g., wedding, corporate, conference). | `events`, `event_types` | Bar Chart |
| **Top Sales Representatives** | Ranks sales representatives by the total value of their closed-won deals. | `users`, `event_proposals` | Leaderboard/Table |
| **Sales Activity Stream** | A real-time feed of recent sales activities, such as calls, meetings, and emails logged. | `sales_activities` | Activity Feed |
| **Monthly Revenue Forecast** | Projects future revenue based on the value of open proposals and their estimated close dates. | `event_proposals` | Line Chart |
| **Lead Source Performance** | Analyzes the effectiveness of different lead sources in generating new event proposals. | `event_proposals`, `lead_sources` | Pie Chart |

## 3. Data Schema

A robust database schema is essential for capturing and organizing the data required for the sales dashboard. The following SQL `CREATE TABLE` statements define the necessary tables for the Greenists platform:

```sql
CREATE TABLE `events` (
  `event_id` INT PRIMARY KEY AUTO_INCREMENT,
  `event_name` VARCHAR(255) NOT NULL,
  `event_name_ar` VARCHAR(255),
  `event_type_id` INT,
  `customer_id` INT,
  `start_date` DATETIME,
  `end_date` DATETIME,
  `venue_id` INT,
  `status` VARCHAR(50),
  `total_revenue_yer` DECIMAL(15, 2),
  `total_revenue_usd` DECIMAL(15, 2),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`event_type_id`) REFERENCES `event_types`(`event_type_id`),
  FOREIGN KEY (`customer_id`) REFERENCES `customers`(`customer_id`),
  FOREIGN KEY (`venue_id`) REFERENCES `venues`(`venue_id`)
);

CREATE TABLE `event_proposals` (
  `proposal_id` INT PRIMARY KEY AUTO_INCREMENT,
  `event_id` INT,
  `sales_rep_id` INT,
  `status` VARCHAR(50) COMMENT 'e.g., Lead, Proposal Sent, Negotiation, Closed-Won, Closed-Lost',
  `estimated_value_yer` DECIMAL(15, 2),
  `estimated_value_usd` DECIMAL(15, 2),
  `estimated_close_date` DATE,
  `lead_source_id` INT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`event_id`) REFERENCES `events`(`event_id`),
  FOREIGN KEY (`sales_rep_id`) REFERENCES `users`(`user_id`),
  FOREIGN KEY (`lead_source_id`) REFERENCES `lead_sources`(`lead_source_id`)
);

CREATE TABLE `event_types` (
  `event_type_id` INT PRIMARY KEY AUTO_INCREMENT,
  `event_type_name` VARCHAR(255) NOT NULL,
  `event_type_name_ar` VARCHAR(255)
);

CREATE TABLE `users` (
  `user_id` INT PRIMARY KEY AUTO_INCREMENT,
  `full_name` VARCHAR(255) NOT NULL,
  `full_name_ar` VARCHAR(255),
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `phone_number` VARCHAR(20),
  `whatsapp_number` VARCHAR(20),
  `role` VARCHAR(50) COMMENT 'e.g., Sales Rep, Admin'
);

CREATE TABLE `sales_activities` (
  `activity_id` INT PRIMARY KEY AUTO_INCREMENT,
  `sales_rep_id` INT,
  `proposal_id` INT,
  `activity_type` VARCHAR(50) COMMENT 'e.g., Call, Meeting, Email',
  `notes` TEXT,
  `activity_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`sales_rep_id`) REFERENCES `users`(`user_id`),
  FOREIGN KEY (`proposal_id`) REFERENCES `event_proposals`(`proposal_id`)
);

CREATE TABLE `lead_sources` (
  `lead_source_id` INT PRIMARY KEY AUTO_INCREMENT,
  `source_name` VARCHAR(255) NOT NULL,
  `source_name_ar` VARCHAR(255)
);
```

## 4. Sample Data

The following JSON objects provide sample data for the defined database schema. This data can be used to populate the database for testing and demonstration purposes.

```json
{
  "events": [
    {
      "event_id": 1,
      "event_name": "Ahmed & Fatima's Wedding",
      "event_name_ar": "عرس أحمد وفاطمة",
      "event_type_id": 1,
      "customer_id": 1,
      "start_date": "2026-03-15 18:00:00",
      "end_date": "2026-03-15 23:00:00",
      "venue_id": 1,
      "status": "Confirmed",
      "total_revenue_yer": 5000000,
      "total_revenue_usd": 20000
    }
  ],
  "event_proposals": [
    {
      "proposal_id": 1,
      "event_id": 1,
      "sales_rep_id": 1,
      "status": "Closed-Won",
      "estimated_value_yer": 5000000,
      "estimated_value_usd": 20000,
      "estimated_close_date": "2026-02-28",
      "lead_source_id": 1
    },
    {
      "proposal_id": 2,
      "event_id": null,
      "sales_rep_id": 2,
      "status": "Proposal Sent",
      "estimated_value_yer": 7500000,
      "estimated_value_usd": 30000,
      "estimated_close_date": "2026-03-10",
      "lead_source_id": 2
    }
  ],
  "event_types": [
    {
      "event_type_id": 1,
      "event_type_name": "Wedding",
      "event_type_name_ar": "عرس"
    },
    {
      "event_type_id": 2,
      "event_type_name": "Corporate Event",
      "event_type_name_ar": "فعالية شركة"
    }
  ],
  "users": [
    {
      "user_id": 1,
      "full_name": "Mohammed Ali",
      "full_name_ar": "محمد علي",
      "email": "mohammed.ali@greenists.com",
      "phone_number": "+967777123456",
      "whatsapp_number": "+967777123456",
      "role": "Sales Rep"
    },
    {
      "user_id": 2,
      "full_name": "Fatima Hassan",
      "full_name_ar": "فاطمة حسن",
      "email": "fatima.hassan@greenists.com",
      "phone_number": "+967777654321",
      "whatsapp_number": "+967777654321",
      "role": "Sales Rep"
    }
  ],
  "sales_activities": [
    {
      "activity_id": 1,
      "sales_rep_id": 1,
      "proposal_id": 1,
      "activity_type": "Meeting",
      "notes": "Met with the client to finalize the details of the wedding package.",
      "activity_date": "2026-02-20 10:00:00"
    }
  ],
  "lead_sources": [
    {
      "lead_source_id": 1,
      "source_name": "Website",
      "source_name_ar": "الموقع الإلكتروني"
    },
    {
      "lead_source_id": 2,
      "source_name": "Referral",
      "source_name_ar": "توصية"
    }
  ]
}
```

## 5. Research Summary

The research conducted on sales dashboards and event management KPIs has informed the design and structure of the proposed dashboard. Key takeaways from the research include:

*   **Real-time data is crucial:** Sales dashboards must provide up-to-the-minute information to be effective.
*   **Customization is key:** The ability to tailor the dashboard to specific roles and goals is essential.
*   **Visualizations enhance understanding:** Complex data should be presented in an intuitive and easy-to-understand format.
*   **Integration is necessary:** The dashboard should integrate with other sales and marketing tools to provide a holistic view of the customer journey.

By implementing a sales dashboard with these features and capabilities, the Greenists platform can empower its sales team to work more efficiently, close more deals, and drive revenue growth.

## 6. References

[1] Improvado. (2025, November 19). *Sales Dashboard: Insights & Real-World Examples 2025*. Retrieved from https://improvado.io/blog/sales-dashboard

[2] Sweap. (2024, February 28). *The Most Important KPIs for Your Event*. Retrieved from https://www.sweap.io/en/blog/the-most-important-event-kpis
