# 🌿 Greenists - Event Experts & Business Innovators

<div align="center">

![Greenists Logo](client/public/images/greenists-logo.png)

**Yemen's Premier Sustainable Event Management Company**

*من عدن إلى العالم - From Aden to the World*

[![Website](https://img.shields.io/badge/Website-greenists--events.com-2D7A4A?style=for-the-badge)](https://greenists-events.com)
[![License](https://img.shields.io/badge/License-Proprietary-gold?style=for-the-badge)](LICENSE)
[![Made in Yemen](https://img.shields.io/badge/Made%20in-Yemen%20🇾🇪-red?style=for-the-badge)](https://en.wikipedia.org/wiki/Yemen)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Specialized Sectors](#-specialized-sectors)
- [Brand Identity](#-brand-identity)
- [Contact](#-contact)

---

## 🌍 About

**Greenists** is Yemen's leading sustainable event management company, headquartered in Aden. Since 2015, we have been transforming ordinary gatherings into extraordinary experiences while maintaining our commitment to environmental responsibility.

### Our Vision
To be Yemen's leading sustainable event management company, setting the standard for environmental responsibility and professional excellence in the Middle East.

### Our Mission
Delivering world-class events and business services while promoting sustainability, supporting local communities, and preserving Yemen's cultural heritage.

---

## ✨ Features

### 🌐 Bilingual Website (Arabic/English)
- Full RTL support for Arabic
- Seamless language switching
- Culturally appropriate content

### 🧮 Event Cost Calculator
- 7 event types supported
- 3 currencies (USD, YER, SAR)
- Real-time pricing estimates
- Premium add-ons selection

### 📊 Specialized Sector Events
- Medical & Healthcare
- Investment & Business
- Government & Strategy
- Energy & Oil
- Education & Academia
- Technology & Innovation
- Agriculture & Food Security
- Tourism & Heritage

### 👥 Client Portal
- Unique event tracking codes
- Real-time progress monitoring
- Document management
- Direct communication with coordinators

### 🤝 Supplier Portal
- Supplier registration system
- Sustainability certification
- Green standards compliance
- Partner dashboard

### 👔 Staff Portal
- HR management
- Leave requests
- Finance tracking
- Task management

### 🎨 Sub-Brands
- Greenists Corporate
- Greenists Weddings
- Greenists Government
- Greenists Medical
- Greenists Kids
- Greenists Condolences
- And more...

---

## 🛠 Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Wouter** - Routing
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime
- **Express** - Server framework
- **Drizzle ORM** - Database ORM
- **MySQL/TiDB** - Database

### Testing
- **Vitest** - Unit testing
- **113+ tests** passing

### Deployment
- **Manus Platform** - Hosting
- **GitHub** - Version control

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm 8+
- MySQL/TiDB database

### Installation

```bash
# Clone the repository
git clone https://github.com/MaherFSF/greenists-events.git
cd greenists-events

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials

# Run database migrations
pnpm db:push

# Start development server
pnpm dev
```

### Available Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm test       # Run tests
pnpm db:push    # Push database schema
pnpm db:studio  # Open Drizzle Studio
```

---

## 📁 Project Structure

```
greenists-website/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   │   ├── images/        # Brand images and photos
│   │   └── docs/          # Documentation files
│   └── src/
│       ├── components/    # Reusable UI components
│       ├── contexts/      # React contexts (Language, Theme)
│       ├── pages/         # Page components
│       │   ├── segments/  # Sector-specific pages
│       │   └── ...
│       └── lib/           # Utility functions
├── server/                # Backend Express application
│   ├── routers.ts        # API routes
│   ├── db.ts             # Database connection
│   └── *.test.ts         # Test files
├── drizzle/              # Database schema
│   └── schema.ts         # Drizzle ORM schema
├── shared/               # Shared types and utilities
└── public/               # Public documentation
    └── docs/             # Brand guidelines, RFPs, etc.
```

---

## 🏥 Specialized Sectors

### Medical & Healthcare
- Medical Conferences
- Equipment Exhibitions
- Dental Symposiums
- Nursing Workshops
- Pharmaceutical Forums

**Partners:** Ministry of Health, WHO Yemen, MSF, Aden University Hospital

### 💰 Investment & Business
- Investor Forums
- Reconstruction Conferences
- Business Matchmaking
- Trade Exhibitions
- Banking & Finance Summits

**Partners:** Chamber of Commerce, Central Bank of Yemen, UNDP, World Bank

### 🏛️ Government & Strategy
- National Strategy Launches
- Sustainable Development Conferences
- International Cooperation Forums
- Ministerial Meetings
- Public Policy Workshops

**Partners:** Prime Minister Office, Ministry of Planning, UN Agencies, EU Delegation

---

## 🎨 Brand Identity

### Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Greenists Green | `#2D7A4A` | Primary brand color |
| Gold Accent | `#D4AF37` | Premium elements |
| White | `#FFFFFF` | "ists" in logo |
| Dark Green | `#1a5a32` | Hover states |

### Typography
- **Primary:** Inter (Latin)
- **Arabic:** Noto Sans Arabic

### Logo Usage
- "Green" in Greenists Green (#2D7A4A)
- "ists" in White (#FFFFFF)
- Arabic: "جرينستس" in same color scheme

---

## 📍 Contact

**Greenists - Event Experts & Business Innovators**

📍 **Address:** Next to Relax Hotel, Khor Maksar, Aden, Yemen
شارع الكورنيش، بجانب فندق ريلاكس، خور ماكسر، عدن، اليمن

📞 **Phone:** +967 773 673 918

📧 **Email:** info@greenists-events.com

🌐 **Website:** [www.greenists-events.com](https://greenists-events.com)

### Social Media
- Instagram: [@greenists](https://instagram.com/greenists)
- Facebook: [Greenists Events](https://facebook.com/greenists)
- LinkedIn: [Greenists](https://linkedin.com/company/greenists)
- Twitter: [@greenists](https://twitter.com/greenists)

---

## 📄 Documentation

- [Brand Guidelines](public/docs/BRAND_MASTER_SPECIFICATIONS.md)
- [China Procurement RFP](public/docs/GREENISTS_CHINA_PROCUREMENT_RFP.md)
- [Social Media Content](public/docs/GREENISTS_SOCIAL_MEDIA_CONTENT.md)
- [Print Specifications](public/docs/GREENISTS_COMPLETE_PRINT_SPECIFICATIONS.md)

---

## 🏪 Store Opening

**Coming June 2026!**

Our flagship store in Khor Maksar, Aden will feature:
- Event supplies & decorations
- Branded merchandise
- Event planning consultations
- Yemeni coffee corner
- Event inspiration gallery

---

## 📊 Statistics

- **500+** Events Organized
- **50+** Corporate Clients
- **10+** Years Experience
- **100%** Client Satisfaction
- **113** Tests Passing

---

## 🌿 Sustainability Commitment

We are committed to environmental responsibility:
- ♻️ Reusable event materials
- 🌱 Biodegradable decorations
- 💡 Energy-efficient lighting
- 🚰 Water conservation
- 🌿 Local sourcing priority
- 📦 Minimal waste policy

---

## 📜 License

This project is proprietary software owned by Greenists Events Company.
All rights reserved © 2015-2025 Greenists.

---

<div align="center">

**Made with 💚 in Aden, Yemen**

*From Aden to the World - من عدن إلى العالم*

</div>
