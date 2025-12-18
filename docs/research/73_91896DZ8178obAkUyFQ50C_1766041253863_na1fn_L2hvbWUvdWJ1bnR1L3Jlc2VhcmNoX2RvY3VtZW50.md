# Comprehensive Research: Finance Dashboard - Financial Health View

## 1. Introduction

This document provides a comprehensive overview of a financial health dashboard designed for the Greenists Event Management Platform in Aden, Yemen. The dashboard aims to provide a clear and concise view of the company's financial performance, enabling better decision-making and strategic planning. The information contained herein is based on research of industry best practices for financial dashboards and tailored to the specific context of an event management business in Yemen.

## 2. Dashboard Structure

The following sections detail the proposed widgets and data sources for the financial health dashboard.

### 2.1. Dashboard Widgets

| Widget Name                  | Widget Type | Description                                                                                                                                |
| ---------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Revenue vs. Operating Margin | Line Chart  | Displays the trend of total revenue and operating margin over a selected period (e.g., monthly, quarterly, annually).                      |
| Revenue by Event Type        | Bar Chart   | Shows the breakdown of revenue by different event categories (e.g., weddings, corporate events, concerts, etc.).                             |
| Actual vs. Forecast Expenses | Bar Chart   | Compares actual expenses against the forecasted budget for various expense categories (e.g., venue rental, catering, marketing, etc.).      |
| Cash Flow Analysis           | Line Chart  | Tracks the inflow and outflow of cash over time, providing insights into the company's liquidity.                                          |
| Profitability Ratios         | Key Metrics | Displays key profitability ratios such as Gross Profit Margin, Net Profit Margin, and Return on Investment (ROI) for each event.              |
| Top 5 Events by Revenue      | Table       | Lists the top five events that have generated the most revenue, along with the corresponding revenue amount.                               |
| Top 5 Events by Profitability| Table       | Lists the top five most profitable events, showing the net profit for each.                                                                |
| Upcoming Invoice Payments    | List        | Shows a list of upcoming invoice payments that are due within a specified timeframe (e.g., next 30 days).                                |
| Overdue Invoices             | List        | Highlights invoices that are past their due date, including the client name, invoice amount, and number of days overdue.                   |

### 2.2. Data Sources

| Data Source               | Information Provided                                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Event Management System   | Detailed information about each event, including event type, date, client details, and services provided.         |
| Accounting System         | Financial data such as revenue, expenses, invoices, and payments. (e.g., QuickBooks, Xero, or a custom system)      |
| CRM System                | Customer data, which can be used to analyze revenue per customer and identify key clients.                        |
| Budgeting/Forecasting Tool| Budgeted and forecasted financial data for comparison with actual performance.                                    |

## 3. Database Schema

The following SQL `CREATE TABLE` statement can be used to create a table for storing the financial data required for the dashboard:

```sql
CREATE TABLE financial_data (
    id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    event_name VARCHAR(255),
    event_type VARCHAR(255),
    event_date DATE,
    revenue DECIMAL(15, 2),
    operating_margin DECIMAL(15, 2),
    expenses DECIMAL(15, 2),
    forecasted_expenses DECIMAL(15, 2),
    cash_inflow DECIMAL(15, 2),
    cash_outflow DECIMAL(15, 2),
    gross_profit_margin DECIMAL(5, 2),
    net_profit_margin DECIMAL(5, 2),
    roi DECIMAL(5, 2),
    invoice_status VARCHAR(50),
    invoice_due_date DATE,
    client_name VARCHAR(255),
    client_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 4. Sample Data

The following is a sample of financial data in JSON format that could be used to populate the dashboard:

```json
[
    {
        "event_id": 101,
        "event_name": "Aden Wedding Expo 2025",
        "event_type": "Wedding",
        "event_type_arabic": "عرس",
        "event_date": "2025-10-26",
        "revenue_yer": 25000000,
        "revenue_usd": 100000,
        "expenses_yer": 15000000,
        "expenses_usd": 60000,
        "profit_yer": 10000000,
        "profit_usd": 40000
    },
    {
        "event_id": 102,
        "event_name": "Yemen International Trade Fair",
        "event_type": "Corporate",
        "event_type_arabic": "شركات",
        "event_date": "2025-11-15",
        "revenue_yer": 75000000,
        "revenue_usd": 300000,
        "expenses_yer": 50000000,
        "expenses_usd": 200000,
        "profit_yer": 25000000,
        "profit_usd": 100000
    },
    {
        "event_id": 103,
        "event_name": "Sounds of Socotra Music Festival",
        "event_type": "Concert",
        "event_type_arabic": "حفلة موسيقية",
        "event_date": "2025-12-05",
        "revenue_yer": 12500000,
        "revenue_usd": 50000,
        "expenses_yer": 8750000,
        "expenses_usd": 35000,
        "profit_yer": 3750000,
        "profit_usd": 15000
    }
]
```

## 5. References

[1] Qlik. (n.d.). *12 Financial Dashboard Examples & Templates*. Retrieved from https://www.qlik.com/us/dashboard-examples/financial-dashboards
