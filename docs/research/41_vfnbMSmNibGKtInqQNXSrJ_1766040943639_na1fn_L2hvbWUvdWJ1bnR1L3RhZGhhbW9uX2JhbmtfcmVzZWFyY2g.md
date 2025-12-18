# Tadhamon Islamic Bank Research

## Overview

Tadhamon Islamic Bank is a prominent financial institution in Yemen, offering a range of Sharia-compliant banking services. The bank was established in 1996 and has since grown to become one of the largest and most trusted banks in the country. [1]

### Head Office

| Information | Details |
| :--- | :--- |
| Address | Jamal St - Tadhamon Bank Building, Taiz, Yemen |
| Phone | 8001010 |
| Email | info@tadhamonbank.com |

## Branches in Aden

Below is a list of Tadhamon Islamic Bank branches located in Aden, Yemen, compiled from various sources. [2] [3]

| Branch Name | Address |
| :--- | :--- |
| Sheikh Othman | Al-Masila |
| Sheikh Othman | Al-Saila (2) Banks Street |
| Sheikh Othman | Roundabout |
| Sheikh Othman | Main Street |
| Sheikh Othman | Main Street - Al-Hashemi |
| Sheikh Othman | Next to Nizarat Dubai |
| Al-Sijn Street | In front of the Grand Mosque |
| Al-Mansoura | Al-Sijn Street |
| Crater | - |
| Al-Ma'ala | Next to Hayel Saeed Group |
| Souq Al-Taweel | - |
| Al-Ma'ala | In front of the Arab Bank |
| Al-Buraiqa | Main Street, next to Al-Ahli Bank |
| Tadhamon International Islamic Bank | Q2QF+X2R, Aden, Yemen |
| Tadhamon Bank | JAMAL ABDULNASSER STREET, TADHAMON BANK BUILIDING |

### Tadhamon International Islamic Bank (Aden Branch Details)

| Information | Details |
| :--- | :--- |
| Address | Q2QF+X2R, Aden, Yemen |
| Phone | +967 2 240 536 |
| **Opening Hours** | |
| Sunday | 00:00 - 14:00 |
| Monday | 08:00 - 14:00 |
| Tuesday | 08:00 - 14:00 |
| Wednesday | 08:00 - 14:00 |
| Thursday | 08:00 - 14:00 |
| Friday | Closed |
| Saturday | Closed |

## SQL Schema

```sql
CREATE TABLE banks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    category VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    website VARCHAR(255),
    services TEXT,
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255)
);
```

## Sample Data

```json
[
    {
        "name": "Tadhamon Islamic Bank - Sheikh Othman",
        "name_ar": "بنك التضامن الإسلامي - الشيخ عثمان",
        "category": "Bank",
        "address": "Al-Masila",
        "city": "Aden",
        "phone": "",
        "whatsapp": "",
        "website": "https://www.tadhamonbank.com/en/",
        "services": "Retail Banking, Corporate Banking, Islamic Banking",
        "pricing_yer": "",
        "pricing_usd": ""
    },
    {
        "name": "Tadhamon International Islamic Bank",
        "name_ar": "بنك التضامن الإسلامي الدولي",
        "category": "Bank",
        "address": "Q2QF+X2R, Aden, Yemen",
        "city": "Aden",
        "phone": "+967 2 240 536",
        "whatsapp": "",
        "website": "https://www.tadhamonbank.com/en/",
        "services": "Retail Banking, Corporate Banking, Islamic Banking",
        "pricing_yer": "",
        "pricing_usd": ""
    }
]
```

## References

[1] Tadhamon Bank. (n.d.). *About Us*. Retrieved from https://www.tadhamonbank.com/en/about/1
[2] Tadhamon Pay. (n.d.). *Receiving Points - Aden*. Retrieved from http://tadhamonpay.com/images/receivingpoint/aden.pdf
[3] near-place.com. (n.d.). *Tadhamon International Islamic Bank in Aden*. Retrieved from https://ye.near-place.com/tadhamon-international-islamic-bank-q2qfx2r-aden
