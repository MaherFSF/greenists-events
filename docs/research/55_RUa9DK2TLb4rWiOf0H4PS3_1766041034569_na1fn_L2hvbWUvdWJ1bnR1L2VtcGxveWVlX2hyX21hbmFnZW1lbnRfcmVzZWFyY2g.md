# Employee and HR Management Schema for Greenists Event Management Platform

## 1. Introduction

This document outlines a comprehensive database schema for managing employees and HR-related information for the Greenists event management platform in Aden, Yemen. The schema is designed to be compliant with Yemeni labor laws and to accommodate the specific needs of an event management company. This document includes the complete SQL schema, sample data, and key considerations for HR management in Yemen.

## 2. SQL Schema

The following SQL `CREATE TABLE` statements define the database structure for the employee and HR management system. The schema is normalized to reduce data redundancy and improve data integrity.

```sql
CREATE TABLE departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(255) NOT NULL,
    department_name_ar VARCHAR(255) -- Arabic name
);

CREATE TABLE positions (
    position_id INT PRIMARY KEY AUTO_INCREMENT,
    position_title VARCHAR(255) NOT NULL,
    position_title_ar VARCHAR(255), -- Arabic name
    job_description TEXT
);

CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    first_name_ar VARCHAR(255), -- Arabic name
    last_name_ar VARCHAR(255), -- Arabic name
    date_of_birth DATE NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    nationality VARCHAR(255) NOT NULL,
    national_id_number VARCHAR(255) UNIQUE,
    passport_number VARCHAR(255) UNIQUE,
    address TEXT NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    whatsapp_number VARCHAR(20),
    email VARCHAR(255) UNIQUE NOT NULL,
    hire_date DATE NOT NULL,
    department_id INT,
    position_id INT,
    photo_path VARCHAR(255),
    FOREIGN KEY (department_id) REFERENCES departments(department_id),
    FOREIGN KEY (position_id) REFERENCES positions(position_id)
);

CREATE TABLE contracts (
    contract_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT NOT NULL,
    contract_type ENUM('Fixed-Term', 'Indefinite', 'Project-Based') NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    probation_period_months INT,
    working_hours_per_week INT,
    salary_amount DECIMAL(10, 2) NOT NULL,
    salary_currency ENUM('YER', 'USD') NOT NULL,
    contract_document_path VARCHAR(255),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

CREATE TABLE salaries (
    salary_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT NOT NULL,
    payment_date DATE NOT NULL,
    gross_salary DECIMAL(10, 2) NOT NULL,
    deductions DECIMAL(10, 2),
    net_salary DECIMAL(10, 2) NOT NULL,
    currency ENUM('YER', 'USD') NOT NULL,
    payment_method VARCHAR(255),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

CREATE TABLE attendance (
    attendance_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT NOT NULL,
    check_in_time DATETIME,
    check_out_time DATETIME,
    work_date DATE NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

CREATE TABLE leave (
    leave_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT NOT NULL,
    leave_type ENUM('Annual', 'Sick', 'Haj', 'Maternity', 'Paternity', 'Unpaid') NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status ENUM('Pending', 'Approved', 'Rejected') NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

CREATE TABLE performance_reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT NOT NULL,
    review_date DATE NOT NULL,
    reviewer_id INT NOT NULL,
    rating INT, -- e.g., 1-5
    comments TEXT,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    FOREIGN KEY (reviewer_id) REFERENCES employees(employee_id)
);

CREATE TABLE training (
    training_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT NOT NULL,
    course_name VARCHAR(255) NOT NULL,
    training_date DATE NOT NULL,
    duration_hours INT,
    certificate_path VARCHAR(255),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

CREATE TABLE documents (
    document_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT NOT NULL,
    document_type VARCHAR(255) NOT NULL, -- e.g., Passport, ID Card, Certificate
    document_path VARCHAR(255) NOT NULL,
    upload_date DATE NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

CREATE TABLE emergency_contacts (
    contact_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT NOT NULL,
    contact_name VARCHAR(255) NOT NULL,
    relationship VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

CREATE TABLE social_insurance (
    insurance_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT NOT NULL,
    insurance_number VARCHAR(255) UNIQUE NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);
```

## 3. Sample Data

The following JSON data provides a sample of how the database tables can be populated. This data is for illustrative purposes and includes fictional information.

```json
{
  "departments": [
    {"department_name": "Event Management", "department_name_ar": "إدارة الفعاليات"},
    {"department_name": "Sales and Marketing", "department_name_ar": "المبيعات والتسويق"},
    {"department_name": "Finance", "department_name_ar": "المالية"},
    {"department_name": "Human Resources", "department_name_ar": "الموارد البشرية"}
  ],
  "positions": [
    {"position_title": "Event Manager", "position_title_ar": "مدير الفعاليات", "job_description": "Plans and executes events."},
    {"position_title": "Sales Executive", "position_title_ar": "مسؤول مبيعات", "job_description": "Generates leads and closes sales.
"},
    {"position_title": "Accountant", "position_title_ar": "محاسب", "job_description": "Manages financial records."},
    {"position_title": "HR Officer", "position_title_ar": "مسؤول موارد بشرية", "job_description": "Handles HR-related tasks."}
  ],
  "employees": [
    {
      "first_name": "Ahmed",
      "last_name": "Al-Sakkaf",
      "first_name_ar": "أحمد",
      "last_name_ar": "السقاف",
      "date_of_birth": "1990-05-15",
      "gender": "Male",
      "nationality": "Yemeni",
      "national_id_number": "101234567",
      "passport_number": "YEM123456",
      "address": "Khormakser, Aden, Yemen",
      "phone_number": "+967771234567",
      "whatsapp_number": "+967771234567",
      "email": "ahmed.alsakkaf@yemenlog.com",
      "hire_date": "2023-01-10",
      "department_id": 1,
      "position_id": 1
    },
    {
      "first_name": "Fatima",
      "last_name": "Al-Amoudi",
      "first_name_ar": "فاطمة",
      "last_name_ar": "العمودي",
      "date_of_birth": "1995-02-20",
      "gender": "Female",
      "nationality": "Yemeni",
      "national_id_number": "102345678",
      "passport_number": "YEM234567",
      "address": "Al-Mansoura, Aden, Yemen",
      "phone_number": "+967731234567",
      "whatsapp_number": "+967731234567",
      "email": "fatima.alamoudi@alkhalil.com",
      "hire_date": "2023-03-15",
      "department_id": 2,
      "position_id": 2
    }
  ]
}
```

## 4. Key Data Points and HR Considerations in Yemen

Based on the research conducted, the following are key considerations for HR management in Yemen:

*   **Employment Contracts:** Employment contracts should be in writing and include details such as wages, job description, work location, start date, and duration. [1]
*   **Working Hours:** The standard working week is 48 hours, with a maximum of 8 hours per day. [1]
*   **Leave:** Employees are entitled to various types of leave, including annual leave, sick leave, and Haj leave. [1]
*   **Social Security:** Employers are required to contribute to the social insurance system for their employees. [1]
*   **Discrimination:** The Yemeni Constitution and Labor Code prohibit discrimination in the workplace. [1]
*   **Arabic Language:** Including Arabic names and details is crucial for official records and communication.
*   **Currency:** Both Yemeni Rial (YER) and US Dollars (USD) are commonly used, so the database should support both.
*   **Communication:** WhatsApp is a primary mode of communication, so it's important to store WhatsApp numbers.

## 5. References

[1] Norwegian Refugee Council. (n.d.). *Guide to Employment Rights in Yemen*. Retrieved from https://www.nrc.no/globalassets/pdf/guidelines/guide-to-employment-rights/yemen-employment-rights-guide---english.pdf
