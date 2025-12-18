# Exhaustive Research for Greenists Event Management Platform - Aden, Yemen

This document provides a comprehensive research on various sectors in Aden, Yemen, for the Greenists event management platform.


## NGO Sector

### Data

| Name | Arabic Name | Website | Fields of Interest | Objectives | Activities | Contact Person | Contact Person's Position | Contact Email | Regions of Work |
|---|---|---|---|---|---|---|---|---|---|
| Resonate! Yemen | | http://www.resonateyemen.org | Public Policy | Providing opportunities for young Yemenis to build policy analysis and civic leadership skills - Encouraging policy makers in Yemen to accept youth as major stakeholders in policy design and implementation - Developing and articulating policy proposals on issues national and international significance - Implementing a select number of initiatives developed through Resonate’s public policy deliberations - Becoming the resource of choice for Government, private sector, and local/international NGOs wishing to engage the perspectives and talents of Yemeni youth who have an interest in public affairs | Combating Terrorism in Yemen: A Youth Perspective, Our Priorities - Our Future: Engaging Yemeni Youth in the Government’s 10-point plan, Political Influence of Youth: Reality and Aspirations, Basics of Constitutional Law, The future of Yemen’s Economy, Yemen: Strategies for Change – Playing the Policy Game, Make Your Voice Heard – Youth Training on Participatory Democracy | Reem Fakhri | Administrative Assistant | reem.fakhri@resonateyemen.org | Adan, Amanat Al Asimah, Hadramaut, Sanaa, Taizz |
| Yemen Education For Employment (YEFE) | | http://www.ngodirectory.org/yemen/www..yefe.org | 1.Assess local labor market needs. 2.Training and job placement. 3.Establish partnership arrangements with employers to secure internship and job commitments for youth. 4.Customize curricula to meet the needs of employers. 5.Deliver professional and vocational skills training programs. 6.Ongoing career development, mentoring, networking and civic engagement opportunities for graduates. 7.Monitoring & Evaluation of graduates after placement. | YEFE creates public-private partnership that offer a solution to the paradox of high youth employment and unskilled labor market with high staff turnover. By involving business, education and young stakeholders, YEFE bridges the gap between sectors to bring youth and the market closer together. YEFE complete the circle from unemployment to training to job placement and finally alumni support. YEFE's job placement programs provide youth with the skills they need to earn a living and build their future. | | Bashara Doughaish | Program Associate | bdoughaish@efefoundation.org | Abyan, Ad Dali, Adan, Al Hudaydah, Al Jawf, Amanat Al Asimah, Amran, Dhamar, Ibb, Lahij, Marib, Sanaa, Shabwah, Taizz |
| FREEDOM FOUNDATION for media freedom, rights and development | مؤسسة حرية | http://www.FreedomFoundation-Yemen.org | Freedom Foundation for media freedom, rights and development is a Yemeni non-governmental and non-profit organization, focusing on protecting press and media freedom and media development in Yemen. | - Monitoring violations against Media freedom and rights. - Advocating media, defending press freedom and rights. - Advancing press freedom and free expression. - Rising awareness of democracy and human rights. - Developing Media and journalists’ profession and skills. | - Monitoring press freedom violations. - Advocacy and providing legal support to media. - Quality and world-class training for media. - Promoting Human rights. - Democracy development. | Khaled al-Hammadi خالد الحمادي | President رئيس | president@freedomfoundation-yemen.org | Abyan, Ad Dali, Adan, Al Bayda, Al Hudaydah, Al Jawf, Al Mahrah, Al Mahwit, Amanat Al Asimah, Amran, Dhamar, Hadramaut, Hajjah, Ibb, Lahij, Marib, Raymah, Sadah, Sanaa, Shabwah, Taizz |
| UNICEF Yemen | | https://www.unicef.org/yemen/ | Child Rights and Welfare, Education and Literacy, Community Development | | | | | sanaa@unicef.org | Sana'a |

### SQL Schema

```sql
CREATE TABLE ngos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    website VARCHAR(255),
    fields_of_interest TEXT,
    objectives TEXT,
    activities TEXT,
    contact_person VARCHAR(255),
    contact_person_position VARCHAR(255),
    contact_email VARCHAR(255),
    regions_of_work TEXT,
    phone VARCHAR(255),
    whatsapp_number VARCHAR(255),
    address TEXT,
    pricing_yer DECIMAL(10, 2),
    pricing_usd DECIMAL(10, 2)
);
```

## Entertainment Sector

### Data

| Name | Arabic Name | Category | Description | Location |
|---|---|---|---|---|
| Cisterns of Tawila | صهاريج الطويلة | Historical Landmark | This impressive system of tanks was used to store drinking water as long as 2,000 years ago. | Aden, Yemen |
| Tower of Silence | | Historical Landmark | The remains of a Zoroastrian temple that bore witness to a time when Aden was a flourishing... | Aden, Yemen |

### SQL Schema

```sql
CREATE TABLE entertainment (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    category VARCHAR(255),
    description TEXT,
    location VARCHAR(255),
    address TEXT,
    phone VARCHAR(255),
    whatsapp_number VARCHAR(255),
    pricing_yer DECIMAL(10, 2),
    pricing_usd DECIMAL(10, 2)
);
```

## Construction Sector

### Data

| Name | Arabic Name | Address | Phone |
|---|---|---|---|
| Maharat Benaa | | 90 street,Al-mansoora zone aden, Yemen | 02358302 |
| Central Bank of Yemen | | Al-Aidroos St, Al-Aidroos, Aden, Yemen | (00967) 02-251814 |
| Yemen Commercial Bank | | Aden, Yemen | (00967) 02-255813 |
| Abdulla A. Al-Sunaidar For General Trading | | Dar Saad, Aden, Yemen | (00967) 02-305453 |
| Al-Rashedon for Invest. & Constr. Co. | | Crater, Aden, Yemen | (00967) 02-250265 |

### SQL Schema

```sql
CREATE TABLE construction (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    address TEXT,
    phone VARCHAR(255),
    whatsapp_number VARCHAR(255),
    pricing_yer DECIMAL(10, 2),
    pricing_usd DECIMAL(10, 2)
);
```

## Energy Sector

### Data

| Name | Arabic Name | Website | Services | Address | Fax |
|---|---|---|---|---|---|
| Aden Refinery Company | شركة مصافي عدن | https://www.arc-ye.com/ | Processing of crude oil, Storage of crude oil and petroleum products, Trading with petroleum products, Selling bunker fuel | little Aden (115), Aden, Republic Of Yemen, B.O 3003 | +967 02 376600/1 |

### SQL Schema

```sql
CREATE TABLE energy (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    website VARCHAR(255),
    services TEXT,
    address TEXT,
    phone VARCHAR(255),
    fax VARCHAR(255),
    whatsapp_number VARCHAR(255),
    pricing_yer DECIMAL(10, 2),
    pricing_usd DECIMAL(10, 2)
);
```

## Travel Sector

### Data

| Name | Arabic Name | Address | Phone |
|---|---|---|---|
| Aden Gulf Travel Agency | | Al-Mansoora, Aden, Yemen | (00967) 02-343181 |
| Al-Amal Travel & Tourism | | Al-Mansoora, Aden, Yemen | (00967) 02-347307 |
| Al-Andlus Travel & Tourism | | Al-Mansoora, Aden, Yemen | (00967) 02-340023 |
| Al-Angazi Travel & Tourism & Haj & Umra | | Al-Mansoora, Aden, Yemen | (00967) 02-351463 |
| Al-Attafi Travel & Haj & Umra Services | | Al-Mansoora, Aden, Yemen | (00967) 02-346633 |

### SQL Schema

```sql
CREATE TABLE travel (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    address TEXT,
    phone VARCHAR(255),
    whatsapp_number VARCHAR(255),
    pricing_yer DECIMAL(10, 2),
    pricing_usd DECIMAL(10, 2)
);
```
