# Payment Methods in Yemen

## Key Takeaways from Wise.com

*   **Primary Payment Method:** Physical cash (Yemeni Rial - YER) is the most trusted and viable payment method due to the collapse of the formal banking infrastructure.
*   **Informal Networks:** "Hawala," an informal, trust-based money transfer network, is critical for domestic money movement and receiving remittances.
*   **Mobile Money:** Mobile money services exist but are fragmented and face significant operational challenges.
*   **PayPal:** PayPal is reportedly accepted in Yemen, but its practicality and widespread use are likely limited given the overall financial landscape.
*   **Economic Context:** Yemen's economy has been devastated by civil war, is heavily reliant on humanitarian aid, and the formal economy is largely non-functional.

## Banks in Aden (from YemenYP.com)

| Bank Name | Address | Phone Number |
|---|---|---|
| AlamalBank | Baghdad St, Sana'a, Aden, Yemen | +967-800-0006 |
| Tadhamon Bank | 959R+RC6, Al Saeed Commercial Center - al Zubiri St Sana'a - R. of Yemen, Sana'a, Aden | +967 -800-1010 |
| Alkuraimi Islamic Microfinance Bank | Aden, Yemen | +967 1 503888 |
| Arab Bank | Madram St, Madram, Aden, Yemen | (00967) 02-242099 |
| Calyon Corporate & Investment Bank | Crater, Aden, Yemen | (00967) 02-252476 |
| Cooperative & Agricultural Credit Bank | Aden, Yemen | (00967) 02-253404 |
| International Bank of Yemen | Arwa St, Arwa, Aden, Yemen | (00967) 02-255795 |
| International Bank of Yemen (Western Union) | Arwa St, Arwa, Aden, Yemen | (00967) 265413 |
| Islamic Bank of Yemen | Jamal St, Jamal, Aden, Yemen | (00967) 02-261012 |
| National Bank of Yemen | Crater, Aden, Yemen | (00967) 02-252481 |
| National Bank of Yemen | Aden, Yemen | (00967) 02-253484 |
| Saba Islamic Bank | Al-Maalla, Aden, Yemen | (00967) 02-244266 |
| Saba Islamic Bank | Sheikh Othman, Aden, Yemen | (00967) 02-291622 |
| Shamil Bank of Yemen & Bahrain | Arwa St, Arwa, Aden, Yemen | (00967) 02-266702 |
| Thadamon International Islamic Bank | Crater, Aden, Yemen | (00967) 02-240536 |
| The Yemen Bank For Rec. & Dev. | Aden, Yemen | (00967) 02-254046 |
| The Yemen Kuwait Bank For Trade & Invesment | Arwa St, Arwa, Aden, Yemen | (00967) 02-255097 |

## Standard Operating Procedures (SOPs) for Financial Operations

### Invoicing Workflow

1.  **Event Confirmation & Invoicing Trigger:** Upon formal confirmation of an event booking, the sales or event management team will trigger a notification to the finance department to initiate the invoicing process.
2.  **Invoice Generation:** The finance department will generate a detailed invoice using a standardized company template. The invoice will include:
    *   Complete client details: Full name, company name (if applicable), address, phone number, and WhatsApp number.
    *   Detailed event specifications: Event name, date, time, venue, and a comprehensive list of all services and products to be delivered.
    *   Itemized costing: A clear breakdown of charges for each service and product, with prices listed in both Yemeni Rial (YER) and US Dollars (USD).
    *   Payment Terms: Clearly stated payment terms, including the required advance payment (e.g., 50% of the total amount) and the deadline for the final payment.
    *   Accepted Payment Methods: A list of all accepted payment methods, including cash, bank transfer, Hawala, and any available mobile money options.
    *   Unique Invoice Identifier: A unique invoice number for tracking purposes and the date of issue.
3.  **Invoice Delivery and Confirmation:** The invoice will be sent to the client via email and as a PDF attachment on WhatsApp. A follow-up call will be made to confirm receipt and address any initial questions.
4.  **Payment Follow-up:** The finance team is responsible for proactive follow-up with the client to ensure timely payment according to the agreed-upon terms.

### Payment Reception Workflow

*   **Cash Payments:**
    1.  The client will inform the finance department of their intention to pay in cash.
    2.  A secure and mutually agreed-upon location for the cash transaction will be established (e.g., Greenists' office or the client's office).
    3.  For security, at least two authorized Greenists staff members will be present to receive, count, and verify the cash payment.
    4.  An official, signed receipt will be issued to the client immediately upon verification of the amount, with a duplicate copy retained for Greenists' records.
    5.  All cash received will be securely stored and deposited into the company's designated bank account within 24 hours.

*   **Hawala Payments:**
    1.  The client will provide the name and contact details of the Hawala agent, along with the transaction reference number.
    2.  A designated member of the Greenists finance team will contact the specified Hawala agent to verify the transaction details and arrange for the collection of funds.
    3.  Upon successful receipt of the funds, a confirmation receipt will be issued to the client.

*   **Bank Transfers:**
    1.  The client will initiate a direct bank transfer to the official Greenists bank account.
    2.  The client is required to provide a digital or physical copy of the bank transfer receipt as proof of payment.
    3.  The Greenists finance team will monitor the company's bank account for the incoming transfer.
    4.  Once the funds are confirmed as credited to the account, a payment confirmation receipt will be sent to the client.

*   **Mobile Money Payments:**
    1.  The client will make a payment to the designated Greenists mobile money account.
    2.  The client will provide the transaction ID or a screenshot of the successful transaction.
    3.  The finance team will verify the transaction through the mobile money provider's platform.
    4.  Upon successful verification, a receipt will be issued to the client.

### Reconciliation Workflow

1.  **Daily Reconciliation:**
    *   At the close of each business day, the finance team will perform a daily reconciliation of all payments received against the corresponding invoices in the accounting system.
    *   The status of each invoice (e.g., partially paid, fully paid) will be updated accordingly.
2.  **Weekly/Monthly Bank and Financial Reconciliation:**
    *   On a weekly and monthly basis, a comprehensive reconciliation will be conducted.
    *   This includes reconciling all bank statements, Hawala transaction records, and mobile money statements with the internal accounting records.
    *   Any discrepancies or irregularities identified during the reconciliation process will be investigated and resolved promptly.
3.  **Financial Reporting:**
    *   A detailed monthly financial report will be generated. This report will provide a clear overview of all financial activities, including revenue, expenses, accounts receivable, and accounts payable.


## Database Schema and Sample Data

### SQL Schema

```sql
CREATE TABLE clients (
    client_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    company_name VARCHAR(255),
    address TEXT,
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    email VARCHAR(255)
);

CREATE TABLE invoices (
    invoice_id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT,
    invoice_date DATE,
    due_date DATE,
    total_amount_yer DECIMAL(15, 2),
    total_amount_usd DECIMAL(15, 2),
    status VARCHAR(20) DEFAULT 'unpaid', -- ('unpaid', 'partially_paid', 'paid')
    FOREIGN KEY (client_id) REFERENCES clients(client_id)
);

CREATE TABLE payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    invoice_id INT,
    payment_date DATE,
    amount_yer DECIMAL(15, 2),
    amount_usd DECIMAL(15, 2),
    payment_method VARCHAR(50), -- ('cash', 'bank_transfer', 'hawala', 'mobile_money')
    transaction_reference VARCHAR(255),
    FOREIGN KEY (invoice_id) REFERENCES invoices(invoice_id)
);
```

### Sample Data

```json
[
  {
    "clients": [
      {
        "client_id": 1,
        "full_name": "Ahmed Al-Faqih",
        "arabic_name": "أحمد الفقيه",
        "company_name": "Al-Faqih Enterprises",
        "address": "Crater, Aden, Yemen",
        "phone_number": "+967 777 123 456",
        "whatsapp_number": "+967 777 123 456",
        "email": "ahmed.alfaqih@example.com"
      }
    ],
    "invoices": [
      {
        "invoice_id": 1,
        "client_id": 1,
        "invoice_date": "2025-12-20",
        "due_date": "2026-01-10",
        "total_amount_yer": 2500000,
        "total_amount_usd": 10000,
        "status": "partially_paid"
      }
    ],
    "payments": [
      {
        "payment_id": 1,
        "invoice_id": 1,
        "payment_date": "2025-12-22",
        "amount_yer": 1250000,
        "amount_usd": 5000,
        "payment_method": "hawala",
        "transaction_reference": "HWL-20251222-001"
      }
    ]
  }
]
```
