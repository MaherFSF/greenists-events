# Research Document: Audit Log Schema

## 1. Introduction

An audit log is a critical component of any secure and compliant system. It provides a chronological record of all actions and events that have occurred within the application, which is essential for security analysis, compliance with regulations (such as SOC 2, ISO 27001, GDPR, HIPAA, and PCI DSS), and for understanding the history of data changes. This document outlines the research and design of a comprehensive audit trail schema for the Greenists Event Management Platform.

## 2. Key Principles of Audit Logging

Effective audit logging is guided by a few core principles that ensure the collected data is useful and reliable. These principles, gathered from industry best practices, are:

*   **The Four W's**: An audit trail must be able to answer the fundamental questions of **who** performed an action, **what** action was performed, **when** it was performed, and from **where** it was performed.
*   **Immutability**: Audit logs should be treated as immutable records. Once written, they should not be altered or deleted.
*   **Longevity**: Logs should be stored for a sufficient period to meet regulatory and business requirements.
*   **Security**: Access to audit logs should be restricted to authorized personnel to prevent tampering.

## 3. Proposed Audit Log Schema

Based on extensive research, the following schema is proposed for the `audit_logs` table. This schema is designed to be comprehensive and flexible, capturing a wide range of activities within the platform.

| Column Name   | Data Type     | Description                                                                                                       |
|---------------|---------------|-------------------------------------------------------------------------------------------------------------------|
| `log_id`      | `BIGSERIAL`   | Unique identifier for each log entry (Primary Key).                                                               |
| `user_id`     | `BIGINT`      | The ID of the user who performed the action. Foreign key to the `users` table.                                      |
| `user_name`   | `VARCHAR(255)`| The name of the user, for easier reading and in case the user is deleted.                                         |
| `action_type` | `VARCHAR(50)` | The type of action performed (e.g., 'CREATE', 'UPDATE', 'DELETE', 'LOGIN_SUCCESS', 'LOGIN_FAIL', 'VIEW').         |
| `table_name`  | `VARCHAR(255)`| The name of the database table that was affected.                                                                 |
| `record_id`   | `VARCHAR(255)`| The primary key of the record that was affected.                                                                  |
| `timestamp`   | `TIMESTAMPTZ` | The date and time when the action occurred.                                                                       |
| `ip_address`  | `INET`        | The IP address from which the action was performed.                                                               |
| `old_values`  | `JSONB`       | A JSONB object storing the state of the record before the change.                                                 |
| `new_values`  | `JSONB`       | A JSONB object storing the state of the record after the change.                                                  |
| `query_text`  | `TEXT`        | The full SQL query that was executed, if applicable.                                                              |
| `context`     | `JSONB`       | Additional contextual information, such as a ticket ID, session ID, or device information.                        |

## 4. References

[1] [Database Audit Logging - The Practical Guide](https://www.bytebase.com/blog/database-audit-logging/)

[2] [Database design for audit logging - Stack Overflow](https://stackoverflow.com/questions/2015232/database-design-for-audit-logging)
