# Comprehensive Research: ADEN CATERING for Greenists Platform

## 1. Executive Summary

This research was conducted to identify and verify information about traditional Yemeni food caterers in Aden, Yemen, for the Greenists Event Management Platform. The primary focus was on finding real, verified contact information, including Arabic names, phone numbers, WhatsApp numbers, and pricing. The investigation has yielded one verified catering service provider, two promising leads that require further investigation, and a wealth of contextual information that will be valuable for the Greenists platform.

## 2. Verified Catering Suppliers

| Company Name (English) | Company Name (Arabic) | Address | Phone | WhatsApp | Specialties | Confidence Level | Source |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Aden's Quality for services | جودة عدن للخدمات | Aden - Republic of Yemen – Al-Tesseen Street, Al-Qadi Tower, Fifth Floor, Next to First Aden Islamic Bank. | +967 781 976 777 | +967 781 976 777 | Catering Services | Medium | [1] |

## 3. Potential Catering Leads

| Restaurant Name (English) | Restaurant Name (Arabic) | Address | Phone | Specialties | Confidence Level | Source |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Gamal Restaurant | مطعم جمال | R27H+9VX, Aden, Yemen | +967 777 262 000 | Mandi | Medium | [2] |
| Al-Shira'a Fish Restaurant | مطعم الشراع | Q2HW+5JM Sira Bridge, 'Adan Yemen | N/A | Seafood | Low | [3] |

## 4. Catering Menu & Pricing (Sample)

**Disclaimer:** The following menu and pricing are *estimates* based on general knowledge of Yemeni cuisine and are intended for illustrative purposes only. Actual pricing should be confirmed directly with the caterers.

| Item | Description | Price (YER) | Price (USD) |
| :--- | :--- | :--- | :--- |
| Mandi (Lamb) | Slow-cooked lamb with spiced rice | 25,000 | 100 |
| Mandi (Chicken) | Slow-cooked chicken with spiced rice | 15,000 | 60 |
| Saltah | A hearty stew, considered the national dish of Yemen. | 5,000 | 20 |
| Fahsa | A lamb-based stew, similar to Saltah but with more meat. | 7,500 | 30 |
| Aseed | A savory porridge-like dish, often served with a spicy sauce. | 3,000 | 12 |
| Bint Al-Sahn | A sweet, layered pastry, often served with honey. | 4,000 | 16 |

## 5. Booking and Management Workflow (SOP)

**Objective:** To provide a seamless experience for booking and managing catering services on the Greenists platform.

**Workflow Steps:**

1.  **User Searches for Caterer:** The user searches for catering services in Aden on the Greenists platform.
2.  **AI Assistant Interaction:** The "Adeni Foodie" AI assistant can help the user refine their search based on event type, number of guests, and dietary preferences.
3.  **View Supplier Profiles:** The user can view detailed profiles of the catering suppliers, including menus, pricing, and reviews.
4.  **Request a Quote:** The user can select a caterer and request a quote for their event.
5.  **Supplier Responds:** The caterer receives the request and responds with a detailed quote.
6.  **User Accepts Quote:** The user accepts the quote and proceeds to payment.
7.  **Order Confirmation:** The order is confirmed, and both the user and the supplier receive a notification.
8.  **Event Day:** The caterer provides the food and services as per the agreement.
9.  **Review and Rating:** After the event, the user can leave a review and rating for the caterer.

## 6. Supplier Management Dashboard

**Objective:** To provide Greenists staff with a comprehensive dashboard for managing catering suppliers.

**Widgets and Data Sources:**

| Widget | Data Source |
| :--- | :--- |
| **Total Suppliers** | `suppliers` table (COUNT(id)) |
| **New Supplier Requests** | `supplier_requests` table (COUNT(id) WHERE status = 'pending') |
| **Active Bookings** | `bookings` table (COUNT(id) WHERE status = 'active') |
| **Revenue this Month** | `payments` table (SUM(amount) WHERE date >= start_of_month) |
| **Top Performing Suppliers** | `bookings` table (GROUP BY supplier_id, ORDER BY COUNT(id) DESC) |
| **Recent Reviews** | `reviews` table (ORDER BY created_at DESC) |

## 7. AI Assistant Persona: "Adeni Foodie"

**Personality Traits:**

*   **Name:** Adeni Foodie (ذواق عدني)
*   **Personality:** Friendly, knowledgeable, and passionate about Yemeni cuisine. Uses a warm and inviting tone. Is an expert on traditional Adeni food and customs.
*   **Avatar:** A stylized logo of a traditional Yemeni coffee pot (dallah).

**Sample Dialogues:**

*   **Greeting:** "Ahlan wa sahlan! I'm the Adeni Foodie, your guide to the delicious world of Yemeni cuisine. How can I help you plan the perfect meal for your event?"
*   **Recommendation:** "For a truly authentic taste of Aden, I recommend the Mandi. It's a classic for a reason! We have several excellent caterers who specialize in it. Would you like to see them?"
*   **Answering a question:** "That's a great question! 'Bint Al-Sahn' is a beautiful, layered pastry that's a must-try for dessert. It's a symbol of Yemeni hospitality."

## 8. SQL Schema

```sql
CREATE TABLE suppliers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(20),
    whatsapp VARCHAR(20),
    specialties TEXT,
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255),
    confidence_level VARCHAR(50),
    source VARCHAR(255)
);
```

## 9. References

[1] Aden's Quality for services. (n.d.). Retrieved from https://adenquality.com/en/

[2] Gamal Restaurant. (n.d.). Retrieved from https://ye.near-place.com/gamal-restaurant-r27h9vx-aden

[3] Al-Shira'a Fish Restaurant. (n.d.). Retrieved from https://mindtrip.ai/restaurant/aden-yemen/al-shiraa-fish-restaurant/re-29r1AcVv
