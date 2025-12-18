# Research on Client Portal Dashboard for Greenists Event Management Platform

## 1. Introduction

This document presents a comprehensive research on the design and features of a client portal dashboard for the Greenists event management platform, with a specific focus on the customer view in Aden, Yemen. The goal is to provide a blueprint for a user-friendly and effective dashboard that enhances the client experience and streamlines event management processes.

## 2. Dashboard Widgets

The following table details the proposed widgets for the client portal dashboard, their descriptions, and the underlying data sources required to power them. These widgets are designed to provide clients with a comprehensive overview of their event and easy access to essential information and tools.

| Widget Name | Description | Data Source(s) |
| :--- | :--- | :--- |
| **Event Overview** | Displays a summary of the event, including event name, date, time, and venue. This provides the client with immediate access to the most critical event details. | `events` table (event_name, event_date, event_time), `venues` table (venue_name, venue_address) |
| **Upcoming Tasks** | A list of upcoming tasks and deadlines for the client, such as payment due dates or information submission deadlines. This helps clients stay on track and ensures a smooth planning process. | `tasks` table (task_name, due_date, status) |
| **Recent Messages** | A preview of the latest messages from the event planner or vendors, ensuring that clients are always up-to-date with the latest communications. | `messages` table (sender, message_preview, timestamp) |
| **Invoice Summary** | An overview of the current invoice status, including total amount, amount paid, and balance due. This provides clients with a clear and transparent view of their financial commitments. | `invoices` table (total_amount, amount_paid, balance_due, due_date) |
| **Guest List Snapshot** | A summary of the guest list, showing the number of confirmed guests, pending RSVPs, and total invited. This is essential for events where guest management is a key component. | `guests` table (status) |
| **Vendor Directory** | A list of vendors associated with the event, with contact information. This allows clients to easily communicate with vendors directly if needed. | `vendors` table (vendor_name, category, phone_number, email) |
| **Event Timeline** | A visual representation of the event schedule and key milestones, providing a clear roadmap of the event from start to finish. | `timeline` table (milestone_name, date, time) |
| **Budget Tracker** | A summary of the event budget, showing total budget, actual spending, and remaining budget. This helps clients monitor their expenses and make informed financial decisions. | `budgets` table (total_budget, actual_spending) |
| **Floor Plan Preview** | A thumbnail of the event floor plan, allowing clients to visualize the layout of their event space. | `floor_plans` table (floor_plan_image) |
| **Vision Board** | A collection of images and notes for creative inspiration, allowing for seamless collaboration between the client and the event planner. | `vision_boards` table (images, notes) |

## 3. Key Features of a Client Portal

Based on industry best practices and a review of leading event management platforms [1][2], the following are key features that a client portal should offer:

*   **Secure Login:** A secure login system to protect client information and event details.
*   **Branding and Customization:** The ability to brand the portal with the Greenists logo and customize the look and feel to match the company's identity.
*   **Document Management:** A centralized location for clients to access, review, and e-sign documents such as contracts, proposals, and invoices.
*   **Online Payments:** The ability for clients to make secure online payments for invoices.
*   **Communication Tools:** A messaging system that allows for easy communication between the client, event planner, and vendors.
*   **Task Management:** The ability to assign tasks to clients and track their progress.
*   **Mobile-Friendly Design:** A responsive design that works seamlessly on all devices, including desktops, tablets, and smartphones.

## 4. Recommendations for Greenists

To create a truly exceptional client portal for the Greenists platform in Aden, Yemen, the following recommendations should be considered:

*   **Localization:** The portal should be available in both English and Arabic to cater to the local market. All content, including widget titles, descriptions, and system messages, should be professionally translated.
*   **WhatsApp Integration:** Given the prevalence of WhatsApp in Yemen, integrating WhatsApp for messaging and notifications would significantly enhance the user experience.
*   **Local Currency and Payment Options:** The portal should display pricing in both Yemeni Rial (YER) and USD. It should also support local payment methods.
*   **Iconic Imagery:** Incorporate locally-relevant and iconic imagery of Aden, such as the Cisterns of Tawila or Sira Fortress, to create a unique and culturally relevant design.

## 5. References

[1] Planning Pod. (n.d.). *Online Client Portal Software for Event Businesses*. Retrieved from https://planningpod.com/client-portals

[2] Releventful. (n.d.). *Client Venue Customer Portal Software*. Retrieved from https://www.releventful.com/features/client-venue-customer-portal-software
