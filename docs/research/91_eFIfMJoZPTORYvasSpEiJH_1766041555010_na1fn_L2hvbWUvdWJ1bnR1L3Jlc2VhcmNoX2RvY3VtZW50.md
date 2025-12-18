# Exhaustive Research: SECTOR: Education events complete guide

**FOR GREENISTS EVENT MANAGEMENT PLATFORM - ADEN, YEMEN**

## 1. Introduction

This document provides a comprehensive overview of the education sector in Aden, Yemen, with a specific focus on information relevant to an event management platform. The research includes details on educational institutions, potential for educational events, and structured data for database integration.

## 2. Educational Institutions in Aden

This section details the key educational institutions in Aden, including universities, schools, and other educational organizations. The information has been verified through online sources, and the confidence level is indicated for each entry.

### 2.1. Universities

| Name (English) | Name (Arabic) | Type | Address | Contact | Source | Confidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| University of Aden | جامعة عـدن | Public | Aden, Yemen | [www.aden-univ.net](http://www.aden-univ.net) | [1] | High |
| Holy Quran & Islamic Sciences University | - | Private | Aden, Yemen | [uqs-ye.info/en/Home/CollegePage/9](http://uqs-ye.info/en/Home/CollegePage/9) | [2] | Medium |

### 2.2. Schools

| Name (English) | Name (Arabic) | Address | Contact | WhatsApp | Source | Confidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Aden British International Schools | مدارس عدن البريطانية الدولية | Enma city 1 – adjoining Saad Bin Abiwaqas Mosque, Aden | info@abmschools.com, 02-368331 | 771720043 | [3] | High |
| Mahatma Gandhi International School (MGIS) Aden | مدرسة المهاتما غاندي الدولية | Crater, Aden, Republic of Yemen | mgisyemen@gmail.com, 009672/257245 | +967 737 516 334 | [4] | Medium |

### 2.3. Other Educational Organizations

| Name (English) | Name (Arabic) | Address | Contact | Source | Confidence |
| :--- | :--- | :--- | :--- | :--- | :--- |
| AMIDEAST Aden | أمديست | 142 Hadaiq Al-Andalus Street, Al-Safarat District, Khormaksar, Aden | inquiries-aden@amideast.org, +967-2-235-364/5/6 | [5] | High |

## 3. Database-Ready Structured Data

### 3.1. SQL Schema

The following SQL `CREATE` statements can be used to create the necessary tables in a relational database.

```sql
CREATE TABLE institutions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    type VARCHAR(50),
    address VARCHAR(255),
    phone VARCHAR(50),
    whatsapp VARCHAR(50),
    email VARCHAR(255),
    website VARCHAR(255),
    curriculum TEXT,
    grades VARCHAR(100),
    source VARCHAR(255),
    confidence_level VARCHAR(50)
);

CREATE TABLE events (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title_en VARCHAR(255) NOT NULL,
    title_ar VARCHAR(255),
    institution_id INT,
    description TEXT,
    start_date DATE,
    end_date DATE,
    location VARCHAR(255),
    price_yer DECIMAL(10, 2),
    price_usd DECIMAL(10, 2),
    source VARCHAR(255),
    confidence_level VARCHAR(50),
    FOREIGN KEY (institution_id) REFERENCES institutions(id)
);
```

### 3.2. Sample Data (JSON)

```json
[
  {
    "name_en": "University of Aden",
    "name_ar": "جامعة عـدن",
    "type": "Public",
    "address": "Aden, Yemen",
    "phone": null,
    "whatsapp": null,
    "email": null,
    "website": "www.aden-univ.net",
    "curriculum": null,
    "grades": null,
    "source": "https://en.wikipedia.org/wiki/University_of_Aden",
    "confidence_level": "High"
  },
  {
    "name_en": "Aden British International Schools",
    "name_ar": "مدارس عدن البريطانية الدولية",
    "type": "Private",
    "address": "Enma city 1 – adjoining Saad Bin Abiwaqas Mosque, Aden, Yemen",
    "phone": "02-368331",
    "whatsapp": "771720043",
    "email": "info@abmschools.com",
    "website": "https://abmschools.com/",
    "curriculum": "MacMillan syllabus, moving to Cambridge curriculum for higher grades.",
    "grades": "Kindergarten to Grade 10",
    "source": "https://abmschools.com/",
    "confidence_level": "High"
  }
]
```

## 4. Processes & Workflows

### 4.1. Event Onboarding Workflow

1.  **Initial Contact:** Institution expresses interest in using the Greenists platform.
2.  **Information Gathering:** Greenists representative gathers detailed information about the institution and the event.
3.  **Proposal & Contract:** A detailed proposal and contract are sent to the institution.
4.  **Event Setup:** Once the contract is signed, the event is set up on the platform.
5.  **Marketing & Promotion:** The event is promoted through various channels.
6.  **Event Execution:** The event takes place, with Greenists providing support.
7.  **Post-Event Analysis:** Data from the event is analyzed and a report is provided to the institution.

## 5. Dashboard Widgets

### 5.1. Key Widgets for Event Management Dashboard

*   **Upcoming Events:** List of upcoming educational events with dates and locations.
*   **Ticket Sales:** Real-time tracking of ticket sales and revenue.
*   **Attendee Demographics:** Visualizations of attendee data (e.g., age, gender, location).
*   **Marketing Campaign Performance:** Metrics on the performance of different marketing campaigns.
*   **Social Media Engagement:** Tracking of social media mentions and engagement related to the event.

## 6. AI Character for Greenists Platform

### 6.1. Character Concept: 
Amal (أمل)

**Personality Traits:**

*   **Name:** Amal (أمل), meaning "Hope" in Arabic.
*   **Personality:** Amal is a knowledgeable, helpful, and encouraging guide. She is patient and culturally aware, with a warm and welcoming tone. She is fluent in both Arabic (with a local Adeni accent) and English, making her accessible to a wide audience.
*   **Visual Representation:** A stylized, non-human character that evokes a sense of warmth and local identity. The design could be inspired by the iconic Cisterns of Tawila, or a stylized representation of the Socotra Dragon Tree, unique to Yemen. The color palette should reflect the colors of Aden's landscape and architecture.

**Sample Dialogues:**

*   **Greeting a new user:**
    > "Welcome to Greenists! I'm Amal, your personal guide to educational events in Aden. How can I help you today? Whether you're looking for a specific course or just exploring, I'm here to assist you."

*   **Helping a user find an event:**
    > **User:** "I'm looking for a workshop on digital marketing."
    > **Amal:** "That's a great choice! Digital marketing is a valuable skill. I've found a few upcoming workshops in Aden. Would you like to see the details? I can also help you register right now."

*   **Providing information in Arabic:**
    > **User:** "ممكن معلومات عن دورات اللغة الإنجليزية؟"
    > **Amal:** "أكيد! عندنا عدة دورات لغة إنجليزية في معهد أمديست. في دورات للمبتدئين والمتقدمين. أي مستوى يناسبك؟"

## 7. References

[1] [University of Aden - Wikipedia](https://en.wikipedia.org/wiki/University_of_Aden)
[2] [List of universities in Yemen - Wikipedia](https://en.wikipedia.org/wiki/List_of_universities_in_Yemen)
[3] [Aden British International Schools](https://abmschools.com/)
[4] [MGIS ADEN | Facebook](https://www.facebook.com/mgisaden/)
[5] [About Amideast | Yemen | Amideast Yemen](https://www.amideast.org/yemen)
