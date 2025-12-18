# Supplier Code of Conduct for Greenists Event Management Platform

## 1. Introduction

This Supplier Code of Conduct outlines the minimum standards of business conduct and practices that Greenists Event Management Platform ("Greenists") expects its suppliers, their employees, agents, and subcontractors (collectively, "Suppliers") to adhere to when conducting business with or on behalf of Greenists. This Code is designed to ensure that our Suppliers operate in a socially responsible, ethical, and legal manner, in alignment with both international best practices and the laws of the Republic of Yemen.

## 2. Compliance with Laws and Regulations

Suppliers must comply with all applicable laws and regulations of the Republic of Yemen, including but not limited to:

*   **Commercial Companies Law No. 22 of 1997:** Governs the establishment and operation of companies in Yemen.
*   **Labour Law No. 5 of 1995 (as amended in 2008):** Regulates employment relationships, including working hours, wages, and employee rights.
*   **All other applicable laws and regulations:** Including those related to taxation, environmental protection, and anti-corruption.

## 3. Business Practices and Ethics

*   **Anti-Bribery and Anti-Corruption:** Suppliers must not engage in any form of bribery, corruption, extortion, or embezzlement. This includes offering, paying, soliciting, or accepting anything of value to obtain an improper business advantage.
*   **Conflicts of Interest:** Suppliers must disclose any actual or potential conflicts of interest to Greenists.
*   **Fair Dealing:** Suppliers are expected to deal fairly with Greenists, its employees, and other suppliers.

## 4. Labor Practices

Suppliers must uphold the human rights of their employees and treat them with dignity and respect. This includes the following:

*   **Anti-Slavery and Human Trafficking:** All forms of forced labor, including slavery, indentured labor, and human trafficking, are strictly prohibited.
*   **Child Labor:** Suppliers must not employ any person under the legal minimum working age in Yemen.
*   **Working Hours:** Working hours must not exceed the maximum limits set by Yemeni law (8 hours per day, 48 hours per week). During Ramadan, working hours are reduced to 6 hours per day, 36 hours per week.
*   **Wages and Benefits:** Suppliers must pay their employees at least the minimum wage and provide all legally mandated benefits. Overtime must be compensated at the rates prescribed by Yemeni law.
*   **Harassment and Discrimination:** Suppliers must provide a workplace free from harassment, discrimination, and any form of abuse.
*   **Freedom of Association:** Suppliers must respect the right of their employees to join or not to join a union.
*   **Health and Safety:** Suppliers must provide a safe and healthy work environment for their employees.

## 5. Environmental Responsibility

Suppliers are encouraged to operate in an environmentally responsible manner and to minimize their impact on the environment.

## 6. Monitoring and Compliance

Greenists reserves the right to verify Suppliers' compliance with this Code of Conduct. Suppliers are expected to cooperate with any reasonable requests for information or audits.

## 7. Reporting Concerns

Suppliers are encouraged to report any concerns or suspected violations of this Code of Conduct to Greenists.

---

## Key Data Points

*   **Applicable Laws:** Commercial Companies Law No. 22 of 1997, Labour Law No. 5 of 1995 (as amended in 2008).
*   **Working Hours:** 8 hours/day, 48 hours/week (6 hours/day, 36 hours/week during Ramadan).
*   **Overtime:** 1.5x for normal days, 2x for nights/weekends/holidays.
*   **Maternity Leave:** 70 days.
*   **Minimum Notice Period:** 30 days for monthly wage earners.

## SQL Schema

```sql
CREATE TABLE suppliers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    code_of_conduct_agreed BOOLEAN DEFAULT FALSE,
    agreement_date DATE
);
```

## Sample Data

```json
[
    {
        "name_en": "Aden Events Catering",
        "name_ar": "تموين فعاليات عدن",
        "address": "123 Main Street, Aden, Yemen",
        "phone_number": "+967 2 123456",
        "whatsapp_number": "+967 771 234 567",
        "code_of_conduct_agreed": true,
        "agreement_date": "2025-12-18"
    }
]
```

## Workflow for Supplier Onboarding

1.  **Provide Code of Conduct:** The Greenists team provides the Supplier Code of Conduct to the potential supplier.
2.  **Supplier Review:** The supplier reviews the Code of Conduct and asks any clarifying questions.
3.  **Agreement:** The supplier signs an agreement confirming their acceptance of the Code of Conduct.
4.  **Database Update:** The Greenists team updates the supplier's record in the database to reflect their agreement.
