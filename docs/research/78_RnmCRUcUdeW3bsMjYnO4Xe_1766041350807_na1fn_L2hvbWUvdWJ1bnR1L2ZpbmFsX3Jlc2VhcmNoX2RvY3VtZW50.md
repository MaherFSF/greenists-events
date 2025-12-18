# Comprehensive Research on UX for Forms and Wizards: Booking and Registration Flows

## Introduction

This document presents a comprehensive research on the user experience (UX) for forms and wizards, specifically focusing on the booking and registration flows for the Greenists event management platform in Aden, Yemen. The research includes best practices, recommended workflows, and a database schema to support these functionalities. The recommendations are tailored to the cultural and technical context of Yemen, with a focus on simplicity, bilingual support (English and Arabic), and mobile-first design.

## UX Workflows

### User Registration Flow

The user registration process is a critical entry point for the Greenists platform. The design of the registration form and flow significantly impacts user acquisition and satisfaction. The following workflow is designed to be simple, intuitive, and culturally relevant for users in Aden, Yemen.

#### Registration Workflow Steps

1.  **Initiate Registration:** The user clicks on a "Sign Up" (إنشاء حساب) button, prominently displayed on the homepage.

2.  **Choose Registration Method:** The user is presented with multiple registration options:
    *   **Social Login:** Buttons for one-click registration using Google or Facebook.
    *   **Email/Phone Number:** A simple form to register with an email address or a Yemeni mobile number.

3.  **Enter Basic Information:**
    *   If using social login, the platform will pre-fill the user's name and email address. The user will be prompted to create a password.
    *   If using email/phone, the user will need to provide:
        *   Full Name (الاسم الكامل)
        *   Email Address or Phone Number (البريد الإلكتروني أو رقم الهاتف)
        *   Password (كلمة المرور)

4.  **Password Strength and Visibility:**
    *   Password requirements are clearly displayed (e.g., minimum 8 characters, including a number and a special character).
    *   A "Show Password" (إظهار كلمة المرور) option is available to avoid typos.

5.  **Terms and Conditions:** A checkbox to agree to the platform's terms and conditions and privacy policy. Links to these documents will be provided.

6.  **Create Account:** The user clicks the "Create Account" (إنشاء حساب) button.

7.  **Verification:**
    *   If registering with email, a verification link is sent to the user's email address.
    *   If registering with a phone number, a verification code is sent via SMS. The user enters the code to verify their account.

8.  **Welcome and Onboarding:** After successful verification, the user is logged in and presented with a brief onboarding tour of the platform.

#### Registration Form Best Practices

*   **Minimalism:** The form will only ask for essential information to reduce friction.
*   **Bilingual Support:** All form fields, labels, and error messages will be available in both English and Arabic.
*   **Autofocus:** The first input field will be automatically focused.
*   **Inline Validation:** Real-time validation will provide immediate feedback on user input.
*   **Clear CTAs:** The call-to-action buttons will have clear and descriptive labels.

### Event Booking Flow

The event booking flow is designed to be a seamless and efficient process, allowing users to find and book events with ease. The workflow will be visually engaging and provide all necessary information to make an informed decision.

#### Booking Workflow Steps

1.  **Event Discovery:** Users can discover events through the homepage, search, or by browsing categories.

2.  **View Event Details:** The user clicks on an event to view its details page, which includes:
    *   Event Title and Description (in English and Arabic)
    *   Date, Time, and Venue (with a map)
    *   High-quality images and videos of the event or venue.
    *   Ticket prices (in YER and USD).
    *   Organizer information.

3.  **Select Tickets:**
    *   The user selects the number of tickets they wish to purchase.
    *   If there are different ticket types (e.g., VIP, Regular), they can choose their preferred option.
    *   A running total of the cost is displayed.

4.  **Proceed to Checkout:** The user clicks the "Book Now" (احجز الآن) button.

5.  **Guest Checkout or Login:**
    *   **Guest Checkout:** Users can proceed with the booking without creating an account by providing their name and email address/phone number.
    *   **Login:** Existing users can log in to their accounts to pre-fill their information.

6.  **Enter Attendee Information:** The user provides the names of the attendees for each ticket.

7.  **Select Payment Method:** The user chooses from a variety of payment options relevant to Yemen:
    *   **Local Mobile Wallets:** (e.g., M-Floos, Mahfathati)
    *   **Cash on Delivery:** (if applicable)
    *   **Credit/Debit Cards:** (for international users or those with access)

8.  **Review and Confirm:** The user reviews their booking details, including the event, number of tickets, total cost, and attendee information. They then click "Confirm Booking" (تأكيد الحجز).

9.  **Booking Confirmation:**
    *   A confirmation page is displayed with the booking details and a QR code for each ticket.
    *   A confirmation email and SMS are sent to the user with the e-tickets.

#### Booking Flow Best Practices

*   **Visuals:** The booking flow will be highly visual, with images and a clear layout.
*   **Progress Indicator:** A progress bar will show the user their current step in the booking process.
*   **Transparent Pricing:** All costs, including taxes and fees, will be clearly displayed upfront.
*   **Mobile-First Design:** The booking flow will be optimized for a seamless experience on mobile devices.
*   **WhatsApp Integration:** Users will have the option to receive their booking confirmation and e-tickets via WhatsApp.

## Database Schema

### `users` Table

This table stores information about the users of the Greenists platform.

```sql
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(255) NOT NULL,
    full_name_ar VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20) UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    registration_method VARCHAR(50) NOT NULL, -- 'email', 'google', 'facebook'
    whatsapp_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### `bookings` Table

This table stores information about event bookings made by users.

```sql
CREATE TABLE bookings (
    booking_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    event_id INT,
    num_tickets INT NOT NULL,
    total_price_yer DECIMAL(10, 2) NOT NULL,
    total_price_usd DECIMAL(10, 2) NOT NULL,
    payment_method VARCHAR(50) NOT NULL, -- 'mfloos', 'mahfathati', 'cash_on_delivery', 'credit_card'
    booking_status VARCHAR(50) NOT NULL, -- 'confirmed', 'pending', 'cancelled'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id) -- Assuming an 'events' table exists
);
```

## Sample Data

### `users` Sample Data

```json
[
    {
        "full_name": "Ali Mohammed",
        "full_name_ar": "علي محمد",
        "email": "ali.mohammed@example.com",
        "phone_number": "+967777123456",
        "password_hash": "...",
        "registration_method": "email",
        "whatsapp_number": "+967777123456"
    },
    {
        "full_name": "Fatima Ahmed",
        "full_name_ar": "فاطمة أحمد",
        "email": "fatima.ahmed@example.com",
        "phone_number": "+967777654321",
        "password_hash": "...",
        "registration_method": "google",
        "whatsapp_number": "+967777654321"
    }
]
```

### `bookings` Sample Data

```json
[
    {
        "user_id": 1,
        "event_id": 101,
        "num_tickets": 2,
        "total_price_yer": 10000.00,
        "total_price_usd": 40.00,
        "payment_method": "mfloos",
        "booking_status": "confirmed"
    },
    {
        "user_id": 2,
        "event_id": 102,
        "num_tickets": 1,
        "total_price_yer": 5000.00,
        "total_price_usd": 20.00,
        "payment_method": "credit_card",
        "booking_status": "confirmed"
    }
]
```

## References

[1] UX Planet. (2023, January 8). *10 Best Practices for Creating Sign-up Forms*. Retrieved from https://uxplanet.org/10-best-practices-for-creating-sign-up-forms-48470ce94b16

[2] Ralabs. (2025, June 30). *Booking UX Best Practices to Boost Conversions in 2025*. Retrieved from https://ralabs.org/blog/booking-ux-best-practices/
