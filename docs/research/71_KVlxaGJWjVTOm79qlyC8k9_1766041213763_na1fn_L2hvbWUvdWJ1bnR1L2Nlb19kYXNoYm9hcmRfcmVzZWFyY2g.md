# CEO Executive Dashboard for Greenists Event Management Platform

## 1. Introduction

This document outlines the key performance indicators (KPIs), dashboard widgets, data sources, and technical specifications for a CEO executive dashboard for the Greenists Event Management Platform in Aden, Yemen. The dashboard is designed to provide a comprehensive overview of the business's health and performance, with a focus on actionable insights.

## 2. CEO Executive Dashboard KPIs

The following KPIs are recommended for the CEO dashboard, categorized for clarity and a balanced view of the business.

### 2.1. Financial KPIs

| KPI | Description | Formula | Target (Example) |
| --- | --- | --- | --- |
| **Revenue** | Total income from all sources. | Sum of all sales | Increase by 15% quarterly |
| **Gross Margin** | Profitability of the core business. | (Revenue - Cost of Goods Sold) / Revenue | Maintain at 60% |
| **Net Margin** | Overall profitability after all expenses. | Net Income / Revenue | Achieve 20% within the first year |
| **EBITDA** | Earnings before interest, taxes, depreciation, and amortization. |  | Track monthly growth |
| **Cashflow Runway** | How long the company can operate with current cash. | Current Cash Balance / Monthly Burn Rate | Maintain at least 12 months |
| **Customer Acquisition Cost (CAC)** | The cost to acquire a new customer. | Total Sales and Marketing Spend / Number of New Customers | Decrease by 10% annually |

### 2.2. Customer KPIs

| KPI | Description | Formula | Target (Example) |
| --- | --- | --- | --- |
| **Net Promoter Score (NPS)** | Customer loyalty and satisfaction. | % Promoters - % Detractors | Achieve a score of 60+ |
| **Customer Retention Rate** | Percentage of customers that are retained over a given period. | ((Number of Customers at End of Period - Number of New Customers) / Number of Customers at Start of Period) * 100 | 85% or higher |
| **Customer Churn Rate** | Percentage of customers who stop using the service. | (Number of Customers Lost / Number of Customers at Start of Period) * 100 | Below 5% monthly |
| **Customer Lifetime Value (CLV)** | Total revenue a business can expect from a single customer. | (Average Purchase Value * Average Purchase Frequency) * Average Customer Lifespan | Increase by 20% annually |

### 2.3. Internal Process KPIs

| KPI | Description | Formula | Target (Example) |
| --- | --- | --- | --- |
| **Revenue per Employee** | Efficiency of the team in generating revenue. | Total Revenue / Number of Employees | Increase by 5% annually |
| **Operating Efficiency** | The ratio of operating income to net sales. | Operating Income / Net Sales | Improve by 3% annually |
| **On-time Delivery/Fulfillment** | Percentage of events delivered on time. | (Number of Events Delivered on Time / Total Number of Events) * 100 | 98% or higher |

### 2.4. Employee KPIs

| KPI | Description | Formula | Target (Example) |
| --- | --- | --- | --- |
| **Employee Satisfaction** | How satisfied employees are with their jobs. | Survey-based | Score of 4.5/5 or higher |
| **Employee Turnover** | Rate at which employees leave the company. | (Number of Employees Who Left / Average Number of Employees) * 100 | Below 10% annually |

### 2.5. Event-Specific KPIs

| KPI | Description | Formula | Target (Example) |
| --- | --- | --- | --- |
| **Registrant-to-Attendee Conversion Rate** | Percentage of registered users who attend an event. | (Number of Attendees / Number of Registrants) * 100 | 70% or higher |
| **Returning Attendee Rate** | Percentage of attendees who have attended previous events. | (Number of Returning Attendees / Total Attendees) * 100 | 30% or higher |
| **Lead Capture Rate** | The efficiency of capturing leads through event technology. | (Number of Leads Captured / Total Attendees) * 100 | 50% or higher |

## 3. Dashboard Widgets

The CEO dashboard will feature the following widgets:

*   **Financial Overview:** Revenue, Gross Margin, Net Margin, EBITDA, Cashflow Runway.
*   **Customer Health:** NPS, Customer Retention Rate, Customer Churn Rate, CLV.
*   **Operational Efficiency:** Revenue per Employee, Operating Efficiency, On-time Delivery.
*   **Employee Performance:** Employee Satisfaction, Employee Turnover.
*   **Event Performance:** Registrant-to-Attendee Conversion Rate, Returning Attendee Rate, Lead Capture Rate.
*   **Live Event Monitor:** Real-time view of ongoing events, including attendance and engagement.

## 4. Data Sources

The data for the dashboard will be sourced from:

*   **Greenists Platform Database:** For all internal data, including financial, customer, and event data.
*   **CRM System:** For customer and sales data.
*   **HR System:** For employee data.
*   **Survey Tools:** For NPS and employee satisfaction data.

## 5. Yemen Context

### 5.1. Currency

All financial data will be presented in both Yemeni Rial (YER) and US Dollar (USD). The current exchange rate is approximately 1 YER = 0.0042 USD [1].

### 5.2. Market

The event management software market in Yemen is expected to grow from 2025 to 2031 [2]. This indicates a growing opportunity for the Greenists platform.

## 6. SQL Schema

```sql
CREATE TABLE ceo_dashboard_kpis (
    id INT PRIMARY KEY AUTO_INCREMENT,
    kpi_name VARCHAR(255) NOT NULL,
    kpi_value DECIMAL(18, 2) NOT NULL,
    kpi_target DECIMAL(18, 2),
    kpi_category VARCHAR(255) NOT NULL,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 7. Sample Data

```json
[
    {
        "kpi_name": "Revenue",
        "kpi_value": 50000.00,
        "kpi_target": 60000.00,
        "kpi_category": "Financial"
    },
    {
        "kpi_name": "Net Promoter Score",
        "kpi_value": 55.00,
        "kpi_target": 60.00,
        "kpi_category": "Customer"
    },
    {
        "kpi_name": "Registrant-to-Attendee Conversion Rate",
        "kpi_value": 65.00,
        "kpi_target": 70.00,
        "kpi_category": "Event-Specific"
    }
]
```

## 8. References

[1] [Yemeni Rial to US Dollar Exchange Rate](https://www.xe.com/currencyconverter/convert/?Amount=1&From=YER&To=USD)
[2] [Yemen Event Management Software Market (2025-2031)](https://www.6wresearch.com/industry-report/yemen-event-management-software-market)
