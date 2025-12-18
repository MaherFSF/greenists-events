# Greenists Event Management Platform: Financial Document Schema

## Introduction

This document outlines the database schema for managing financial documents, specifically quotations and invoices, within the Greenists event management platform. The proposed schema is designed to be robust, scalable, and adaptable to the specific needs of the platform, drawing upon industry best practices and established enterprise resource planning (ERP) systems. The schema is normalized to reduce data redundancy and improve data integrity.

Two primary sources were consulted for this research:

1.  A community-driven discussion on Stack Overflow regarding a basic quotation schema. [1]
2.  The official Microsoft Dynamics 365 documentation for the `Quote` and `Invoice` entities. [2] [3]

This research synthesizes the information from these sources to create a comprehensive and practical database design.

## Combined and Refined Schema

Based on the research, a unified schema is proposed to handle both quotations and invoices. This approach minimizes redundancy and simplifies the database structure. A `DocumentType` field in the main `FinancialDocuments` table will differentiate between quotations and invoices.

### Entity-Relationship Diagram

A visual representation of the schema will be generated to illustrate the relationships between the tables.

### Table Structures

The following tables form the core of the financial document management system:

*   **`Customers`**: Stores customer information, including contact details and billing/shipping addresses.
*   **`Products`**: Represents the services and goods offered by Greenists.
*   **`Events`**: Contains details about the events being managed.
*   **`FinancialDocuments`**: The central table for storing both quotations and invoices.
*   **`FinancialDocumentItems`**: A junction table that links financial documents to products, detailing quantities, prices, and discounts for each line item.

### `Customers` Table

This table stores essential information about the clients of the Greenists platform.

```sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    CompanyName VARCHAR(255),
    Email VARCHAR(255) UNIQUE NOT NULL,
    PhoneNumber VARCHAR(50),
    WhatsAppNumber VARCHAR(50),
    AddressLine1 VARCHAR(255),
    AddressLine2 VARCHAR(255),
    City VARCHAR(100),
    StateOrProvince VARCHAR(100),
    PostalCode VARCHAR(20),
    Country VARCHAR(100),
    ArabicName NVARCHAR(255)
);
```

### `Products` Table

This table contains a catalog of all products and services offered by Greenists.

```sql
CREATE TABLE Products (
    ProductID INT PRIMARY KEY AUTO_INCREMENT,
    ProductName VARCHAR(255) NOT NULL,
    Description TEXT,
    UnitPrice DECIMAL(10, 2) NOT NULL,
    CurrencyCode VARCHAR(3) NOT NULL DEFAULT 'YER',
    ArabicName NVARCHAR(255)
);
```

### `Events` Table

This table stores information about the events organized through the Greenists platform.

```sql
CREATE TABLE Events (
    EventID INT PRIMARY KEY AUTO_INCREMENT,
    EventName VARCHAR(255) NOT NULL,
    EventDate DATETIME,
    Venue VARCHAR(255),
    CustomerID INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
```

### `FinancialDocuments` Table

This is the central table for storing both quotations and invoices. A `DocumentType` field is used to differentiate between the two.

```sql
CREATE TABLE FinancialDocuments (
    DocumentID INT PRIMARY KEY AUTO_INCREMENT,
    CustomerID INT,
    EventID INT,
    DocumentType ENUM('Quotation', 'Invoice') NOT NULL,
    DocumentNumber VARCHAR(50) UNIQUE NOT NULL,
    DocumentDate DATE NOT NULL,
    DueDate DATE,
    EffectiveFrom DATE,
    EffectiveTo DATE,
    ExpiresOn DATE,
    Subject VARCHAR(255),
    Description TEXT,
    BillTo_Name VARCHAR(255),
    BillTo_AddressLine1 VARCHAR(255),
    BillTo_AddressLine2 VARCHAR(255),
    BillTo_City VARCHAR(100),
    BillTo_StateOrProvince VARCHAR(100),
    BillTo_PostalCode VARCHAR(20),
    BillTo_Country VARCHAR(100),
    BillTo_Telephone VARCHAR(50),
    BillTo_Fax VARCHAR(50),
    ShipTo_Name VARCHAR(255),
    ShipTo_AddressLine1 VARCHAR(255),
    ShipTo_AddressLine2 VARCHAR(255),
    ShipTo_City VARCHAR(100),
    ShipTo_StateOrProvince VARCHAR(100),
    ShipTo_PostalCode VARCHAR(20),
    ShipTo_Country VARCHAR(100),
    ShipTo_Telephone VARCHAR(50),
    ShipTo_Fax VARCHAR(50),
    PaymentTermsCode VARCHAR(50),
    ShippingMethodCode VARCHAR(50),
    FreightTermsCode VARCHAR(50),
    TotalAmountYER DECIMAL(15, 2),
    TotalAmountUSD DECIMAL(15, 2),
    DiscountAmountYER DECIMAL(15, 2),
    DiscountAmountUSD DECIMAL(15, 2),
    FreightAmountYER DECIMAL(15, 2),
    FreightAmountUSD DECIMAL(15, 2),
    TotalTaxYER DECIMAL(15, 2),
    TotalTaxUSD DECIMAL(15, 2),
    StateCode VARCHAR(50),
    StatusCode VARCHAR(50),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (EventID) REFERENCES Events(EventID)
);
```

### `FinancialDocumentItems` Table

This table links financial documents to specific products or services, creating line items for each quotation or invoice.

```sql
CREATE TABLE FinancialDocumentItems (
    DocumentItemID INT PRIMARY KEY AUTO_INCREMENT,
    DocumentID INT,
    ProductID INT,
    Quantity INT NOT NULL,
    UnitPriceYER DECIMAL(10, 2) NOT NULL,
    UnitPriceUSD DECIMAL(10, 2) NOT NULL,
    Discount DECIMAL(5, 2),
    LineTotalYER DECIMAL(15, 2),
    LineTotalUSD DECIMAL(15, 2),
    FOREIGN KEY (DocumentID) REFERENCES FinancialDocuments(DocumentID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
```

## References

[1] Stack Overflow. (2010). *Suggested DB Schema for Quotes*. [https://stackoverflow.com/questions/3149549/suggested-db-schema-for-quotes](https://stackoverflow.com/questions/3149549/suggested-db-schema-for-quotes)

[2] Microsoft. (2025). *Quote table/entity reference (Microsoft Dynamics 365)*. [https://learn.microsoft.com/en-us/dynamics365/developer/reference/entities/quote](https://learn.microsoft.com/en-us/dynamics365/developer/reference/entities/quote)

[3] Microsoft. (2025). *Invoice table/entity reference (Microsoft Dynamics 365)*. [https://learn.microsoft.com/en-us/dynamics365/developer/reference/entities/invoice](https://learn.microsoft.com/en-us/dynamics365/developer/reference/entities/invoice)
