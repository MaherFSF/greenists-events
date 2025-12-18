# Greenists Event Management Platform - HR Operations SOP (Recruitment to Exit)

## 1. Introduction

This document outlines the Standard Operating Procedures (SOP) for all Human Resources (HR) operations at Greenists, from the initial recruitment of an employee to their final exit from the company. This SOP is designed to ensure a fair, transparent, and efficient HR process that complies with Yemeni labor laws and best practices. The procedures detailed herein are mandatory for all employees and managers involved in the HR process.

## 2. Recruitment Process

The recruitment process at Greenists is designed to attract, assess, and hire the most qualified candidates in a fair and consistent manner. The process is divided into several key stages, as outlined in the table below:

| Stage                 | Description                                                                                                                                                                                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Job Requisition**   | The process begins when a hiring manager identifies a need for a new employee and submits a formal job requisition to the HR department. This requisition includes the job title, department, a justification for the position, and the desired qualifications for the role.       |
| **Job Posting**       | Upon approval of the requisition, the HR department creates a detailed job description and posts the opening on various channels, including online job boards, social media, and the Greenists company website.                                                              |
| **Candidate Screening** | All applications are screened by the HR department to identify candidates who meet the minimum qualifications for the role. A shortlist of qualified candidates is then shared with the hiring manager for review.                                                              |
| **Interview Process**   | The interview process consists of multiple stages, including an initial screening interview with HR, a technical interview with the hiring manager and team members, and a final interview with senior management to assess cultural fit.                                     |
| **Offer of Employment** | The selected candidate receives a verbal offer of employment from HR, followed by a formal written offer letter detailing the terms and conditions of employment, including salary, benefits, and start date.                                                                  |
| **Background Checks** | Upon acceptance of the offer, HR initiates a series of background checks, which may include employment verification, education verification, criminal record checks, and reference checks, to ensure the candidate's suitability for the role.                               |

## 3. Onboarding Process

The onboarding process at Greenists is designed to welcome new employees and provide them with the information and resources they need to be successful in their new roles. The process begins before the employee's first day and continues through their first week.

### 3.1. Pre-Onboarding

Prior to the new employee's start date, the HR department will send a welcome email containing important information about their first day, including their schedule and any required paperwork. HR will also ensure that the new employee's workspace, computer, and other necessary equipment are set up and ready for their arrival.

### 3.2. First Day

On their first day, the new employee will be welcomed by their manager and introduced to their team members. The HR department will conduct an orientation session to review company policies, procedures, and benefits. The new employee will also complete all necessary onboarding paperwork, including their employment contract, tax forms, and emergency contact information.

### 3.3. First Week

During their first week, the new employee will receive a departmental orientation to learn about their specific role and responsibilities. They will also be assigned a buddy or mentor to help them acclimate to the company culture and their new role.

## 4. Employee Management

Greenists is committed to providing a supportive and engaging work environment for all employees. Our employee management practices are designed to foster professional growth and development, and to ensure that all employees are treated fairly and with respect.

### 4.1. Performance Management

Our performance management process is designed to provide employees with regular feedback and coaching to help them improve their performance and achieve their career goals. The process includes setting clear goals and expectations, regular check-ins with managers, and formal annual performance reviews.

### 4.2. Leave Management

Employees are entitled to various types of leave, as outlined in the table below. All leave requests must be submitted through the company's HRIS system and approved by the employee's manager.

| Leave Type        | Entitlement                                                                                                                                                                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Annual Leave**  | Employees are entitled to a minimum of 30 days of paid annual leave per year.                                                                                                                                                                                           |
| **Sick Leave**    | Employees are entitled to paid sick leave for a specified period, with the amount of pay decreasing over time. A medical certificate may be required for absences of more than two consecutive days.                                                                      |
| **Maternity Leave** | Female employees are entitled to 70 days of paid maternity leave, with the possibility of an additional 20 days in certain circumstances.                                                                                                                                  |
| **Paternity Leave** | There is no statutory paternity leave in Yemen.                                                                                                                                                                                                                         |

## 5. Exit Process

The exit process at Greenists is designed to ensure a smooth and professional departure for all employees, whether they are resigning or being terminated. The process includes offboarding procedures to ensure that all necessary tasks are completed before the employee's last day.

### 5.1. Resignation

An employee who wishes to resign must submit a formal resignation letter to their manager and the HR department, providing the required notice period as stipulated in their employment contract. The manager and HR will acknowledge the resignation and initiate the offboarding process.

### 5.2. Termination

In cases of termination, the manager and HR department will document any performance issues or policy violations that have led to the decision. A termination meeting will be held with the employee to inform them of the decision and the reasons for their termination.

### 5.3. Offboarding

The offboarding process includes conducting an exit interview to gather feedback from the departing employee, collecting all company property, processing the employee's final pay, and deactivating their access to company systems.

## 6. Database Schema

The following SQL statements define the database schema for the HR management system at Greenists.

### 6.1. Employees Table

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    date_of_birth DATE,
    gender ENUM('Male', 'Female', 'Other'),
    nationality VARCHAR(255),
    national_id VARCHAR(255) UNIQUE,
    passport_id VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20) UNIQUE,
    whatsapp_number VARCHAR(20) UNIQUE,
    email VARCHAR(255) UNIQUE NOT NULL,
    address TEXT,
    job_title VARCHAR(255),
    department VARCHAR(255),
    start_date DATE,
    end_date DATE,
    employment_status ENUM('Active', 'Inactive', 'Terminated'),
    salary DECIMAL(10, 2),
    currency VARCHAR(3) DEFAULT 'YER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 6.2. Job Requisitions Table

```sql
CREATE TABLE job_requisitions (
    requisition_id INT PRIMARY KEY AUTO_INCREMENT,
    job_title VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    justification TEXT,
    status ENUM('Open', 'Closed', 'On Hold') DEFAULT 'Open',
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES employees(employee_id)
);
```

### 6.3. Candidates Table

```sql
CREATE TABLE candidates (
    candidate_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    phone_number VARCHAR(20) UNIQUE,
    whatsapp_number VARCHAR(20) UNIQUE,
    email VARCHAR(255) UNIQUE NOT NULL,
    address TEXT,
    resume_path VARCHAR(255),
    status ENUM('New', 'Screening', 'Interviewing', 'Offered', 'Hired', 'Rejected') DEFAULT 'New',
    requisition_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (requisition_id) REFERENCES job_requisitions(requisition_id)
);
```

### 6.4. Interviews Table

```sql
CREATE TABLE interviews (
    interview_id INT PRIMARY KEY AUTO_INCREMENT,
    candidate_id INT,
    interviewer_id INT,
    interview_type ENUM('Screening', 'Technical', 'Final'),
    interview_date DATETIME,
    feedback TEXT,
    status ENUM('Scheduled', 'Completed', 'Canceled') DEFAULT 'Scheduled',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (candidate_id) REFERENCES candidates(candidate_id),
    FOREIGN KEY (interviewer_id) REFERENCES employees(employee_id)
);
```

### 6.5. Performance Reviews Table

```sql
CREATE TABLE performance_reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    reviewer_id INT,
    review_date DATE,
    rating INT,
    comments TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    FOREIGN KEY (reviewer_id) REFERENCES employees(employee_id)
);
```

## 7. Sample Data

The following is a sample JSON object illustrating the data structure for an employee record.

```json
[
  {
    "employee_id": 1,
    "first_name": "Ahmed",
    "last_name": "Al-Faqih",
    "arabic_name": "أحمد الفقيه",
    "date_of_birth": "1990-05-15",
    "gender": "Male",
    "nationality": "Yemeni",
    "national_id": "1234567890",
    "passport_id": "YEM123456",
    "phone_number": "+967777123456",
    "whatsapp_number": "+967777123456",
    "email": "ahmed.alfaqih@example.com",
    "address": "Aden, Yemen",
    "job_title": "Events Manager",
    "department": "Events",
    "start_date": "2023-01-15",
    "end_date": null,
    "employment_status": "Active",
    "salary": 500000.00,
    "currency": "YER"
  },
  {
    "employee_id": 2,
    "first_name": "Fatima",
    "last_name": "Al-Amoudi",
    "arabic_name": "فاطمة العمودي",
    "date_of_birth": "1995-02-20",
    "gender": "Female",
    "nationality": "Yemeni",
    "national_id": "0987654321",
    "passport_id": "YEM654321",
    "phone_number": "+967777654321",
    "whatsapp_number": "+967777654321",
    "email": "fatima.alamoudi@example.com",
    "address": "Aden, Yemen",
    "job_title": "Marketing Specialist",
    "department": "Marketing",
    "start_date": "2023-03-01",
    "end_date": null,
    "employment_status": "Active",
    "salary": 450000.00,
    "currency": "YER"
  }
]
```

## 8. References

[1] Neeyamo. (2023, December 26). *Yemen Payroll & Employer of Record: A Complete guide*. Retrieved from https://www.neeyamo.com/global-guide/yemen

## 9. Local HR and Legal Resources

The following is a list of HR consulting firms and law firms in Aden, Yemen, that can provide additional support and guidance on HR and labor law matters.

| Name                      | Type          | Contact Information                                                                 |
| ------------------------- | ------------- | ----------------------------------------------------------------------------------- |
| **Yemen HR**              | HR Consulting | Website: yemenhr.com                                                                |
| **Luqman Legal**          | Law Firm      | Website: luqmanlegal.com                                                            |
| **Alaghbari & Partners**  | Law Firm      | Website: aghbarilaw.com                                                             |
| **Khaled Al-Buraihi for Advocacy & Legal Services** | Law Firm | Website: kab-bizconsultyemen.com/expertise/labor.html                               |
| **Felix Consulting**      | Consulting    | Website: felixyemen.com                                                             |
| **Crowe AHFAD**           | Audit, Tax    | Website: crowe.com/ye/about-us/our-offices                                          |


                                            |



offices                                           |



                                                 |


our-offices                                            |



Address: Aden, Yemen                          |



Yemen&phone=967782411303&email=info@php-ye.com |
