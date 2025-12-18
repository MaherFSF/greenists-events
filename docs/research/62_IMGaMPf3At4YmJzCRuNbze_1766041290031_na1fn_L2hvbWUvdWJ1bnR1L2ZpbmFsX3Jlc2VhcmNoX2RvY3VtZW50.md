## SOP: Complete Event Lifecycle - Greenists Event Management Platform

### 1. Introduction

This document provides a comprehensive overview of the standard operating procedures (SOPs) for the complete event lifecycle within the Greenists event management platform, specifically tailored for operations in Aden, Yemen. It covers the entire process from the initial client inquiry to the final post-event analysis, ensuring a seamless and high-quality experience for all stakeholders.

### 2. Event Lifecycle Workflow

The event lifecycle is broken down into six key stages, each with its own set of objectives, actions, and service level agreements (SLAs).

#### 2.1. Inquiry & Lead Management

**Objective:** To efficiently capture, qualify, and assign all incoming event inquiries.

| Step | Action | Responsible Party | SLA | Notes |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Lead Capture | Automated System | N/A | Inquiries are captured through the Greenists website, social media channels (including WhatsApp), and phone. |
| 2 | Automated Acknowledgement | Automated System | 5 minutes | An automated email and WhatsApp message is sent to the client, acknowledging receipt of their inquiry and setting expectations for a response. |
| 3 | Lead Qualification | Sales Team | 1 hour | The sales team reviews the inquiry to determine if it meets the basic criteria for a Greenists event (e.g., budget, guest count, event type). |
| 4 | Lead Assignment | Sales Manager | 2 hours | Qualified leads are assigned to a sales representative for follow-up. |

#### 2.2. Consultation & Proposal

**Objective:** To understand the client's needs and create a compelling proposal that meets their requirements and budget.

| Step | Action | Responsible Party | SLA | Notes |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Initial Consultation | Sales Representative | 24 hours | The sales representative contacts the client to schedule an initial consultation (virtual or in-person). |
| 2 | Needs Assessment | Sales Representative | During Consultation | The sales representative conducts a detailed needs assessment to understand the client's vision, goals, budget, and specific requirements. |
| 3 | Venue & Supplier Sourcing | Sales Representative | 48 hours | The sales representative sources and verifies the availability of suitable venues and suppliers in Aden. |
| 4 | Proposal Generation | Sales Representative | 72 hours | A detailed proposal is created, including a concept, scope of work, timeline, and a transparent cost breakdown in both YER and USD. |
| 5 | Proposal Presentation | Sales Representative | As scheduled | The proposal is presented to the client, and any questions or concerns are addressed. |

#### 2.3. Booking & Contract

**Objective:** To formalize the agreement with the client and secure the booking.

| Step | Action | Responsible Party | SLA | Notes |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Contract Drafting | Sales Representative | 24 hours | A formal contract is drafted based on the agreed-upon proposal. |
| 2 | Contract Review & Signature | Client & Sales Representative | 72 hours | The contract is sent to the client for review and e-signature. |
| 3 | Initial Deposit | Client | As per contract | The client pays the initial deposit to secure the booking. |
| 4 | Client Onboarding | Event Planning Team | 48 hours after deposit | The client is officially onboarded and introduced to their dedicated event planner. |

#### 2.4. Event Planning & Coordination

**Objective:** To meticulously plan and coordinate all aspects of the event to ensure a seamless and successful experience.

| Step | Action | Responsible Party | SLA | Notes |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Detailed Planning Session | Event Planner & Client | Within 1 week of onboarding | A detailed planning session is held to finalize the event timeline, theme, and all logistical details. |
| 2 | Supplier & Vendor Management | Event Planner | Ongoing | The event planner manages all communication and coordination with venues, caterers, entertainers, and other suppliers. |
| 3 | Logistics & Operations | Event Planner | Ongoing | The event planner handles all logistical aspects, including transportation, accommodation, and equipment rental. |
| 4 | Regular Client Updates | Event Planner | Weekly | The event planner provides regular updates to the client on the planning progress. |

#### 2.5. Event Execution

**Objective:** To flawlessly execute the event plan and provide an exceptional experience for the client and their guests.

| Step | Action | Responsible Party | SLA | Notes |
| :--- | :--- | :--- | :--- | :--- |
| 1 | On-site Management | Event Planner & On-site Team | Day of event | The event planner and on-site team manage all aspects of the event on the day. |
| 2 | Guest Management | On-site Team | Day of event | The on-site team manages guest registration, check-in, and any special requests. |
| 3 | Supplier Coordination | Event Planner | Day of event | The event planner ensures that all suppliers and vendors are on time and delivering as per the contract. |
| 4 | Contingency Management | Event Planner | Day of event | The event planner is prepared to handle any unforeseen issues or emergencies that may arise. |

#### 2.6. Post-Event & Follow-up

**Objective:** To gather feedback, finalize financials, and nurture the client relationship for future business.

| Step | Action | Responsible Party | SLA | Notes |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Post-Event Debrief | Event Planner & Client | Within 48 hours of event | A debrief session is held with the client to discuss the event's success and gather feedback. |
| 2 | Feedback Collection | Event Planner | Within 1 week of event | A formal feedback survey is sent to the client and attendees. |
| 3 | Final Invoicing | Finance Team | Within 1 week of event | The final invoice is sent to the client, and all outstanding payments are settled. |
| 4 | Relationship Nurturing | Sales & Marketing Team | Ongoing | The client is added to the Greenists CRM for future marketing and relationship-building initiatives. |

### 3. Database Schema

The following SQL schema is designed to support the event lifecycle workflow and manage all related data within the Greenists platform.

```sql
-- Greenists Event Management Platform - SQL Schema

-- Table: clients
CREATE TABLE clients (
    client_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255), -- الاسم بالعربي
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    address VARCHAR(255),
    city VARCHAR(100),
    country VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: events
CREATE TABLE events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT,
    event_name VARCHAR(255) NOT NULL,
    event_type VARCHAR(100),
    event_date DATE,
    start_time TIME,
    end_time TIME,
    guest_count INT,
    venue_id INT,
    status VARCHAR(50) DEFAULT 'Pending',
    total_cost_yer DECIMAL(12, 2),
    total_cost_usd DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(client_id),
    FOREIGN KEY (venue_id) REFERENCES venues(venue_id)
);

-- Table: venues
CREATE TABLE venues (
    venue_id INT PRIMARY KEY AUTO_INCREMENT,
    venue_name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255), -- الاسم بالعربي
    address VARCHAR(255),
    city VARCHAR(100),
    country VARCHAR(100),
    capacity INT,
    contact_person VARCHAR(255),
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    rental_cost_yer DECIMAL(12, 2),
    rental_cost_usd DECIMAL(10, 2)
);

-- Table: suppliers
CREATE TABLE suppliers (
    supplier_id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255), -- الاسم بالعربي
    service_type VARCHAR(100),
    contact_person VARCHAR(255),
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    pricing_details TEXT
);

-- Table: inquiries
CREATE TABLE inquiries (
    inquiry_id INT PRIMARY KEY AUTO_INCREMENT,
    client_name VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(20),
    event_type VARCHAR(100),
    estimated_guest_count INT,
    preferred_date DATE,
    status VARCHAR(50) DEFAULT 'New',
    assigned_to INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: proposals
CREATE TABLE proposals (
    proposal_id INT PRIMARY KEY AUTO_INCREMENT,
    inquiry_id INT,
    event_id INT,
    proposal_date DATE,
    total_cost_yer DECIMAL(12, 2),
    total_cost_usd DECIMAL(10, 2),
    status VARCHAR(50) DEFAULT 'Draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (inquiry_id) REFERENCES inquiries(inquiry_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

-- Table: contracts
CREATE TABLE contracts (
    contract_id INT PRIMARY KEY AUTO_INCREMENT,
    proposal_id INT,
    event_id INT,
    contract_date DATE,
    status VARCHAR(50) DEFAULT 'Pending Signature',
    signed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (proposal_id) REFERENCES proposals(proposal_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

-- Table: tasks
CREATE TABLE tasks (
    task_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    task_name VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE,
    status VARCHAR(50) DEFAULT 'To Do',
    assigned_to INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

-- Table: payments
CREATE TABLE payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    amount_yer DECIMAL(12, 2),
    amount_usd DECIMAL(10, 2),
    payment_date DATE,
    payment_method VARCHAR(50),
    status VARCHAR(50) DEFAULT 'Completed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);
```

### 4. Sample Data

The following JSON data provides a sample of the records that would be stored in the Greenists database.

```json
{
    "clients": [
        {
            "first_name": "Ahmed",
            "last_name": "Al-Amoudi",
            "arabic_name": "أحمد العمودي",
            "email": "ahmed.alamoudi@example.com",
            "phone_number": "+967 777 123 456",
            "whatsapp_number": "+967 777 123 456",
            "address": "Crater, Aden",
            "city": "Aden",
            "country": "Yemen"
        },
        {
            "first_name": "Fatima",
            "last_name": "Ba-Haroon",
            "arabic_name": "فاطمة با هارون",
            "email": "fatima.baharoon@example.com",
            "phone_number": "+967 777 654 321",
            "whatsapp_number": "+967 777 654 321",
            "address": "Khormaksar, Aden",
            "city": "Aden",
            "country": "Yemen"
        }
    ],
    "events": [
        {
            "client_id": 1,
            "event_name": "Wedding of Ahmed and Fatima",
            "event_type": "Wedding",
            "event_date": "2026-03-15",
            "start_time": "19:00:00",
            "end_time": "23:00:00",
            "guest_count": 300,
            "venue_id": 1,
            "status": "Confirmed",
            "total_cost_yer": 2500000.00,
            "total_cost_usd": 10000.00
        }
    ],
    "venues": [
        {
            "venue_name": "Coral Hotel Aden",
            "arabic_name": "فندق كورال عدن",
            "address": "Khormaksar, Aden",
            "city": "Aden",
            "country": "Yemen",
            "capacity": 500,
            "contact_person": "Mr. Ali",
            "phone_number": "+967 2 232 600",
            "whatsapp_number": "+967 777 777 777",
            "email": "info@coral-aden.com",
            "website": "https://www.coral-aden.com/",
            "rental_cost_yer": 1500000.00,
            "rental_cost_usd": 6000.00
        },
        {
            "venue_name": "Al-Qasr Hotel & Suites",
            "arabic_name": "فندق و أجنحة القصر",
            "address": "Al-Mansoura, Aden",
            "city": "Aden",
            "country": "Yemen",
            "capacity": 400,
            "contact_person": "Manager",
            "phone_number": "+967 2 399 999",
            "whatsapp_number": "+967 777 888 999",
            "email": "info@alqasr-aden.com",
            "website": "http://www.alqasrhotelandsuites.com/",
            "rental_cost_yer": 1200000.00,
            "rental_cost_usd": 4800.00
        }
    ],
    "suppliers": [
        {
            "supplier_name": "Aden Catering Services",
            "arabic_name": "خدمات عدن للتموين",
            "service_type": "Catering",
            "contact_person": "Mr. Saleh",
            "phone_number": "+967 777 111 222",
            "whatsapp_number": "+967 777 111 222",
            "email": "info@adencatering.com",
            "website": "N/A",
            "pricing_details": "Per person, starting from 5000 YER"
        },
        {
            "supplier_name": "Yemen Flowers",
            "arabic_name": "زهور اليمن",
            "service_type": "Florist",
            "contact_person": "Mrs. Mona",
            "phone_number": "+967 777 333 444",
            "whatsapp_number": "+967 777 333 444",
            "email": "info@yemenflowers.com",
            "website": "N/A",
            "pricing_details": "Varies based on flower type and arrangement"
        }
    ]
}
```
