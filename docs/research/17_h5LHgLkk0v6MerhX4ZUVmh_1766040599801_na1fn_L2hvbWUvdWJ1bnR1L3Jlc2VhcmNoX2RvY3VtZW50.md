# Aden Wedding Decoration Companies

This document provides a list of wedding decoration companies in Aden, Yemen, with their contact details and portfolios.

| Company Name (English) | Company Name (Arabic) | Address | Phone Number(s) | WhatsApp Number(s) | Email | Portfolio | Confidence Level |
|---|---|---|---|---|---|---|---|
| Marwan Wedding Services | خدمات مروان للأفراح | Sheikh Othman, Mohammed Saad Abdullah Street, Al-Malahi Line, Aden, Yemen | +967 772 690 176, +967 777 382 706 | +967 772 690 176, +967 777 382 706 | N/A | [Facebook](https://www.facebook.com/p/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D9%85%D8%B1%D9%88%D8%A7%D9%86-%D9%84%D9%84%D8%A3%D9%81%D8%B1%D8%A7%D8%AD-100095529463857/) | High |
| Sultan Al-Koshat | سلطان الكوشات | N/A | +967 736 547 908 | +967 736 547 908 | N/A | [Facebook](https://www.facebook.com/%D8%B3%D9%84%D8%B7%D8%A7%D9%86-%D8%A7%D9%84%D9%83%D9%88%D8%B4%D8%A7%D8%AA-102561221641968/) | Medium |
| Bubbly Ballon | بَبلي بالون | N/A | +967 736 883 383, +967 736 863 666 | +967 736 883 383, +967 736 863 666 | bubblyballonaden@gmail.com | [Facebook](https://www.facebook.com/BubblyBallon/) | High |
| Unique Ideas | يونيك ايدياز | Crater, Aden, Yemen | +967 773 709 538 | +967 773 709 538 | uniqueplanidea@gmail.com | [Facebook](https://www.facebook.com/UniqueIdeas2014/) | High |

**Note:** Pricing information was not readily available on their public profiles. It is recommended to contact the companies directly for quotes.


## SQL Schema

```sql
CREATE TABLE wedding_decorators (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_en VARCHAR(255),
    name_ar VARCHAR(255),
    address TEXT,
    phone_numbers VARCHAR(255),
    whatsapp_numbers VARCHAR(255),
    email VARCHAR(255),
    portfolio_url VARCHAR(255),
    pricing_range_yer VARCHAR(100),
    pricing_range_usd VARCHAR(100),
    confidence_level VARCHAR(50)
);
```
