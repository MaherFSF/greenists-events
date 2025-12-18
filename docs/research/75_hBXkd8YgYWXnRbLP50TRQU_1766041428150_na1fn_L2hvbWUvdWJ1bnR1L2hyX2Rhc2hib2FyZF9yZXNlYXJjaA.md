# HR Workforce Management Dashboard for Greenists Event Management Platform

## 1. Introduction

This document outlines the research and recommendations for the design and implementation of an HR Workforce Management Dashboard for the Greenists Event Management Platform in Aden, Yemen. The dashboard is intended to provide a centralized and comprehensive view of the company's workforce, enabling efficient management of human resources, particularly in the context of event staffing and operations.

## 2. Dashboard Design and Widgets

This section details the design and components of the HR Workforce Management Dashboard. The dashboard is designed to be visually appealing, user-friendly, and culturally relevant, incorporating the specific requirements of the project.

### 2.1. Overall Design and User Interface

The dashboard will feature a clean and modern design, with a color palette that reflects the identity of Greenists and the local context of Aden. The user interface will be intuitive, with a clear navigation structure that allows users to easily access the information they need. The dashboard will be available in both English and Arabic, with the ability to switch between languages seamlessly.

### 2.2. Dashboard Widgets

The following table outlines the widgets that will be included in the dashboard, along with their descriptions and data sources:

| Widget Category          | Widget Name                    | Description                                                                                                                              | Data Source(s)                                       |
| ------------------------ | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| **Workforce Overview**   | Total Headcount                | Displays the total number of active employees in the organization.                                                                       | `employees` table                                    |
|                          | Headcount by Department        | A bar chart showing the number of employees in each department.                                                                          | `employees` table                                    |
|                          | Employee Demographics          | Pie charts or bar charts displaying the distribution of employees by gender, nationality, and age group.                                     | `employees` table                                    |
|                          | Employee Location Map          | An interactive map showing the geographical distribution of employees, with a focus on Aden and other relevant areas in Yemen.             | `employees` table (with location data)               |
| **Recruitment**          | Open Positions                 | A summary of the number of current job openings, with a link to the detailed job descriptions.                                           | `jobs` table                                         |
|                          | Time to Fill                   | The average number of days it takes to fill a job opening, from posting to hiring.                                                       | `jobs` table                                         |
|                          | Cost per Hire                  | The average cost incurred to hire a new employee, including advertising, recruitment agency fees, and other related expenses.              | `jobs`, `expenses` tables                            |
| **Event Staffing**       | Upcoming Events                | A calendar or list view of all upcoming events, with key details such as date, location, and required staff.                             | `events` table                                       |
|                          | Staffing Levels                | A comparison of the required versus actual number of staff assigned to each event, highlighting any staffing shortages.                  | `event_staffing` table                               |
|                          | Staff Availability             | A real-time view of staff availability, allowing managers to quickly identify and assign available staff to events.                      | `employee_availability`, `shifts` tables             |
| **Performance**          | Performance Review Status      | A tracker showing the status of performance reviews for all employees, indicating whether they are pending, in progress, or complete.     | `performance_reviews` table                          |
|                          | Employee Performance Ratings   | A distribution of employee performance ratings, allowing managers to identify top performers and those who may need additional support.      | `performance_reviews` table                          |
| **Compensation**         | Total Payroll Cost             | The total payroll cost for the current month, broken down by department.                                                                 | `payroll` table                                      |
|                          | Average Salary by Department   | A comparison of the average salary for each department, helping to ensure fair and competitive compensation.                               | `employees`, `payroll` tables                        |
| **Engagement**           | Employee Turnover Rate         | The rate at which employees are leaving the organization, calculated on a monthly and annual basis.                                      | `employees` table                                    |
|                          | Employee Satisfaction (eNPS)   | The latest Employee Net Promoter Score (eNPS), based on regular employee surveys.                                                         | `surveys` table                                      |
|                          | Absenteeism Rate               | The rate of employee absenteeism, helping to identify potential issues with employee well-being or engagement.                           | `attendance` table                                   |

## 3. Database Schema (SQL)

Below are the `CREATE TABLE` statements for the database that will power the HR Workforce Management Dashboard. The schema is designed to be comprehensive and to support all the widgets and functionalities described in the previous section.

```sql
-- Departments Table
CREATE TABLE departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(255) NOT NULL,
    department_name_ar VARCHAR(255)
);

-- Employees Table
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    first_name_ar VARCHAR(255),
    last_name_ar VARCHAR(255),
    gender ENUM('Male', 'Female', 'Other'),
    date_of_birth DATE,
    nationality VARCHAR(255),
    phone_number VARCHAR(20),
    email VARCHAR(255) UNIQUE,
    address VARCHAR(255),
    address_ar VARCHAR(255),
    city VARCHAR(255),
    country VARCHAR(255),
    hire_date DATE,
    termination_date DATE,
    department_id INT,
    job_title VARCHAR(255),
    salary DECIMAL(10, 2),
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

-- Jobs Table
CREATE TABLE jobs (
    job_id INT PRIMARY KEY AUTO_INCREMENT,
    job_title VARCHAR(255) NOT NULL,
    job_description TEXT,
    job_description_ar TEXT,
    date_posted DATE,
    closing_date DATE,
    status ENUM('open', 'closed', 'filled')
);

-- Events Table
CREATE TABLE events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    event_name VARCHAR(255) NOT NULL,
    event_name_ar VARCHAR(255),
    event_date DATETIME,
    location VARCHAR(255),
    location_ar VARCHAR(255),
    description TEXT,
    description_ar TEXT
);

-- Event Staffing Table
CREATE TABLE event_staffing (
    event_staffing_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    employee_id INT,
    role VARCHAR(255),
    FOREIGN KEY (event_id) REFERENCES events(event_id),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

-- Employee Availability Table
CREATE TABLE employee_availability (
    availability_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    start_time DATETIME,
    end_time DATETIME,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

-- Shifts Table
CREATE TABLE shifts (
    shift_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    event_id INT,
    start_time DATETIME,
    end_time DATETIME,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

-- Performance Reviews Table
CREATE TABLE performance_reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    review_date DATE,
    rating INT,
    comments TEXT,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

-- Payroll Table
CREATE TABLE payroll (
    payroll_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    pay_date DATE,
    gross_salary DECIMAL(10, 2),
    deductions DECIMAL(10, 2),
    net_salary DECIMAL(10, 2),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

-- Surveys Table
CREATE TABLE surveys (
    survey_id INT PRIMARY KEY AUTO_INCREMENT,
    survey_name VARCHAR(255),
    survey_name_ar VARCHAR(255),
    date_conducted DATE,
    employee_id INT,
    enps_score INT,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

-- Attendance Table
CREATE TABLE attendance (
    attendance_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    date DATE,
    status ENUM('present', 'absent', 'leave'),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

-- Expenses Table
CREATE TABLE expenses (
    expense_id INT PRIMARY KEY AUTO_INCREMENT,
    expense_type VARCHAR(255),
    amount DECIMAL(10, 2),
    date DATE,
    job_id INT,
    FOREIGN KEY (job_id) REFERENCES jobs(job_id)
);

-- Onboarding Table
CREATE TABLE onboarding (
    onboarding_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    task VARCHAR(255),
    status ENUM('pending', 'in-progress', 'completed'),
    due_date DATE,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);
```

## 4. Sample Data (JSON)

This section provides sample data in JSON format for each of the tables in the database schema. This data can be used to populate the database for testing and demonstration purposes.

```json
{
  "departments": [
    {
      "department_id": 1,
      "department_name": "Operations",
      "department_name_ar": "العمليات"
    },
    {
      "department_id": 2,
      "department_name": "Marketing",
      "department_name_ar": "التسويق"
    }
  ],
  "employees": [
    {
      "employee_id": 1,
      "first_name": "Ahmed",
      "last_name": "Al-Saeed",
      "first_name_ar": "أحمد",
      "last_name_ar": "السعيد",
      "gender": "Male",
      "date_of_birth": "1990-05-15",
      "nationality": "Yemeni",
      "phone_number": "+967 777 123 456",
      "email": "ahmed.alsaeed@example.com",
      "address": "Al-Tawahi",
      "address_ar": "التواهي",
      "city": "Aden",
      "country": "Yemen",
      "hire_date": "2022-01-10",
      "termination_date": null,
      "department_id": 1,
      "job_title": "Operations Manager",
      "salary": 250000.00
    },
    {
      "employee_id": 2,
      "first_name": "Fatima",
      "last_name": "Al-Amoudi",
      "first_name_ar": "فاطمة",
      "last_name_ar": "العمودي",
      "gender": "Female",
      "date_of_birth": "1995-08-20",
      "nationality": "Yemeni",
      "phone_number": "+967 777 654 321",
      "email": "fatima.alamoudi@example.com",
      "address": "Crater",
      "address_ar": "كريتر",
      "city": "Aden",
      "country": "Yemen",
      "hire_date": "2023-03-01",
      "termination_date": null,
      "department_id": 2,
      "job_title": "Marketing Specialist",
      "salary": 180000.00
    }
  ]
}
```

## 5. Implementation Considerations for Yemen

This section provides specific information and considerations for implementing the HR Workforce Management Dashboard in the context of Aden, Yemen.

### 5.1. HR Landscape in Yemen

Our research indicates that the HR landscape in Yemen is evolving. While there are some established HR consulting firms, many businesses still rely on informal recruitment and management practices. Yemen HR ([yemenhr.com](https://yemenhr.com)) is a prominent online platform for job postings and tenders, and it could be a valuable resource for recruitment. However, it is important to note that this platform primarily serves as an aggregator and does not offer direct recruitment services.

### 5.2. Labor Law and Compliance

The Yemeni labor law sets out specific requirements for employment contracts, working hours, leave, and termination. Key provisions include a maximum 48-hour work week, 30 days of annual leave, and a statutory minimum wage for the public sector. It is crucial that the Greenists platform adheres to these regulations to ensure compliance and avoid any legal issues. The information gathered from Papaya Global [1] provides a good starting point for understanding these requirements.

### 5.3. Currency and Pricing

All financial data in the dashboard, including salary and payroll information, should be presented in both Yemeni Rial (YER) and US Dollars (USD) to provide a clear and comprehensive view for all stakeholders. The exchange rate should be updated regularly to ensure accuracy.

## 6. References

[1] Papaya Global. (2025, September 24). *Yemen Payroll & Benefits Guide*. Retrieved from https://www.papayaglobal.com/countrypedia/country/yemen/
