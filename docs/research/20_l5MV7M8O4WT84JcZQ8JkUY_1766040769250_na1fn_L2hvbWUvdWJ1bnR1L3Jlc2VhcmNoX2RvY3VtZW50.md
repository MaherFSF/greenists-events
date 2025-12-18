# Aden Wedding Photographers

This document provides a comprehensive list of wedding photographers in Aden, Yemen, with their contact details and other relevant information.

## Al Fan Al Hadeth Studio - Adan

*   **Arabic Name:** استديو الفن الحديث
*   **Phone Number:** +967-73380002
*   **Source:** [Arabia Weddings](https://www.arabiaweddings.com/aden/wedding-photographers/al-fan-al-hadeth-studio-adan)

## Al Layth

*   **Arabic Name:** الليث
*   **Phone Number:** +967-733514054
*   **Source:** [Arabia Weddings](https://www.arabiaweddings.com/aden/wedding-photographers/al-layth)

## Al Samah Studio

*   **Arabic Name:** استديو السماح
*   **Phone Number:** +967-733393523
*   **Source:** [Arabia Weddings](https://www.arabiaweddings.com/aden/wedding-photographers/al-samah-studio)

## Al Wehda Studio - Adan

*   **Arabic Name:** استديو الوحدة
*   **Phone Number:** +967-771804649
*   **Source:** [Arabia Weddings](https://www.arabiaweddings.com/aden/wedding-photographers/al-wehda-studio-adan)

## Laylati Studio

*   **Arabic Name:** استديو ليلتي
*   **Phone Number:** +967-2262757
*   **Source:** [Arabia Weddings](https://www.arabiaweddings.com/aden/wedding-photographers/laylati-studio)

## Ramzy Digital Photo Labs

*   **Address:** Shaykh Othman, Aden, Yemen
*   **Phone Number:** (00967) 02-231423
*   **Source:** [YemenYP](https://www.yemenyp.com/company/1323/Ramzi_Photo_Lab)

## Abdulla Ali Yosof

*   **Address:** Aden, Yemen
*   **Phone Number:** (00967) 02-253168
*   **Source:** [YemenYP](https://www.yemenyp.com/company/1312/Abdulla_Ali_Yosof)

## Aden Photo Lab.

*   **Address:** Queen Arwa St, Arwa, Aden, Yemen
*   **Phone Number:** (00967) 02-251367
*   **Source:** [YemenYP](https://www.yemenyp.com/company/1313/Aden_Photo_Lab)

## Ahmed Mohammed Awed Al-Shaepi

*   **Address:** Aden, Yemen
*   **Phone Number:** (00967) 02-255327
*   **Source:** [YemenYP](https://www.yemenyp.com/company/1314/Ahmed_Mohammed_Awed_Al_Shaepi)

## Al-Iqbal Studeo

*   **Address:** Al-Mansoora, Aden, Yemen
*   **Phone Number:** (00967) 02-345082
*   **Source:** [YemenYP](https://www.yemenyp.com/company/1317/Al_Iqbal_Studeo)

## Family Home Photo

*   **Address:** Madram St, Madram, Aden, Yemen
*   **Phone Number:** (00967) 02-243065
*   **Source:** [YemenYP](https://www.yemenyp.com/company/1319/Family_Home_Photo)

## Zabara Photo Lab.

*   **Address:** Al-Mansoora, Aden, Yemen
*   **Phone Number:** (00967) 02-349833
*   **Source:** [YemenYP](https://www.yemenyp.com/company/1327/Zabara_Photo_Lab)


## SQL Schema

```sql
CREATE TABLE photographers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    name_arabic VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(255),
    whatsapp_number VARCHAR(255),
    packages TEXT,
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255),
    portfolio_url VARCHAR(255),
    source VARCHAR(255)
);
```


## Sample Data

```json
[
  {
    "name": "Al Fan Al Hadeth Studio - Adan",
    "name_arabic": "استديو الفن الحديث",
    "address": "Aden, Yemen",
    "phone_number": "+967-73380002",
    "whatsapp_number": null,
    "packages": null,
    "pricing_yer": null,
    "pricing_usd": null,
    "portfolio_url": "https://www.arabiaweddings.com/aden/wedding-photographers/al-fan-al-hadeth-studio-adan",
    "source": "Arabia Weddings"
  },
  {
    "name": "Al Layth",
    "name_arabic": "الليث",
    "address": "Aden, Yemen",
    "phone_number": "+967-733514054",
    "whatsapp_number": null,
    "packages": null,
    "pricing_yer": null,
    "pricing_usd": null,
    "portfolio_url": "https://www.arabiaweddings.com/aden/wedding-photographers/al-layth",
    "source": "Arabia Weddings"
  }
]
```
