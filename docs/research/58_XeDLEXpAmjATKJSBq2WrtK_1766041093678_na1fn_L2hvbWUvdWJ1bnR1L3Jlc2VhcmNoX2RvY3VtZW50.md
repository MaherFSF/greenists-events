# Research on Inquiries and CRM Lead Management Database Schema

## 1. Introduction

This document provides a comprehensive overview of a database schema designed for managing inquiries and customer relationships (CRM) for the Greenists Event Management Platform in Aden, Yemen. The proposed schema is based on industry best practices and is tailored to the specific requirements of the platform, including support for Arabic names and local contact information formats. This document includes the complete SQL schema, a discussion of the design choices, and sample data to illustrate its usage.

## 2. CRM and Lead Management Best Practices

A robust CRM system is the backbone of effective customer relationship management. The design of the CRM database is critical for ensuring data integrity, scalability, and performance. Based on our research, we have identified several best practices that have guided the design of the proposed schema:

*   **Normalization**: The database schema is normalized to reduce data redundancy and improve data integrity. This is achieved by organizing data into multiple tables with well-defined relationships. For example, customer information is stored in a separate `customers` table and linked to other tables using foreign keys. [1][2]
*   **Scalability**: The schema is designed to be scalable to accommodate future growth in data volume and complexity. This is achieved by using a modular design that allows for the easy addition of new tables and fields.
*   **Flexibility**: The schema is flexible enough to support a variety of CRM and lead management workflows. For example, the `inquiries` and `leads` tables can be used to track the entire lead lifecycle, from initial inquiry to conversion.
*   **Data Integrity**: The schema includes constraints, such as primary and foreign keys, to ensure data integrity. This helps to prevent data entry errors and maintain the consistency of the data.

## 3. Database Schema

The proposed database schema consists of five tables: `inquiries`, `leads`, `customers`, `users`, and `interactions`. The following is the complete SQL `CREATE` statement for the schema:

```sql
CREATE TABLE inquiries (
    inquiry_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(255) NOT NULL,
    full_name_ar VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    inquiry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    source VARCHAR(100),
    subject VARCHAR(255),
    message TEXT,
    status VARCHAR(50) DEFAULT 'New',
    assigned_to INT,
    FOREIGN KEY (assigned_to) REFERENCES users(user_id)
);

CREATE TABLE leads (
    lead_id INT PRIMARY KEY AUTO_INCREMENT,
    inquiry_id INT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    first_name_ar VARCHAR(100),
    last_name_ar VARCHAR(100),
    email VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    company_name VARCHAR(255),
    job_title VARCHAR(100),
    lead_source VARCHAR(100),
    status VARCHAR(50) DEFAULT 'New',
    assigned_to INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (inquiry_id) REFERENCES inquiries(inquiry_id),
    FOREIGN KEY (assigned_to) REFERENCES users(user_id)
);

CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    lead_id INT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    first_name_ar VARCHAR(100),
    last_name_ar VARCHAR(100),
    email VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    address TEXT,
    city VARCHAR(100),
    country VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (lead_id) REFERENCES leads(lead_id)
);

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    full_name_ar VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20),
    role VARCHAR(50) NOT NULL
);

CREATE TABLE interactions (
    interaction_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    lead_id INT,
    user_id INT,
    interaction_type VARCHAR(50) NOT NULL,
    interaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    notes TEXT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (lead_id) REFERENCES leads(lead_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
```

## 4. Sample Data

The following is a sample of data that could be stored in the proposed database, in JSON format:

```json
[
  {
    "inquiry": {
      "full_name": "John Doe",
      "full_name_ar": "جون دو",
      "email": "john.doe@example.com",
      "phone_number": "+967777123456",
      "whatsapp_number": "+967777123456",
      "source": "Website",
      "subject": "Wedding Planning Inquiry",
      "message": "I am interested in your wedding planning services for my wedding in Aden."
    },
    "lead": {
      "first_name": "John",
      "last_name": "Doe",
      "first_name_ar": "جون",
      "last_name_ar": "دو",
      "email": "john.doe@example.com",
      "phone_number": "+967777123456",
      "whatsapp_number": "+967777123456",
      "company_name": "",
      "job_title": "",
      "lead_source": "Website",
      "status": "Qualified"
    },
    "customer": {
      "first_name": "John",
      "last_name": "Doe",
      "first_name_ar": "جون",
      "last_name_ar": "دو",
      "email": "john.doe@example.com",
      "phone_number": "+967777123456",
      "whatsapp_number": "+967777123456",
      "address": "123 Main Street",
      "city": "Aden",
      "country": "Yemen"
    }
  }
]
```

## 5. Conclusion

The proposed database schema provides a solid foundation for building a robust and scalable CRM and lead management system for the Greenists Event Management Platform. The schema is designed to be flexible and can be easily extended to meet the future needs of the platform. By following the best practices outlined in this document, the Greenists platform can ensure that its customer data is well-organized, secure, and easily accessible.

## 6. References

[1] DragonflyDB. (2024, October 24). *CRM Database Schema Example (A Practical Guide)*. Retrieved from https://www.dragonflydb.io/databases/schema/crm

[2] Shreve, B. (2023, September 18). *Crafting a Robust CRM Database Schema: A Guide for Data Architects*. Medium. Retrieved from https://medium.com/@bigbark.studio/crafting-a-robust-crm-database-schema-a-guide-for-data-architects-3b9e77cc0bf

[3] GeeksforGeeks. (2025, July 23). *How to Design a Relational Database for Customer Relationship Management (CRM)*. Retrieved from https://www.geeksforgeeks.org/dbms/how-to-design-a-relational-database-for-customer-relationship-management-crm/
