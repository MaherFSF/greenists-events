CREATE TABLE service_categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name_en VARCHAR(255) NOT NULL,
    category_name_ar VARCHAR(255) NOT NULL
);

CREATE TABLE services (
    service_id INT AUTO_INCREMENT PRIMARY KEY,
    service_name_en VARCHAR(255) NOT NULL,
    service_name_ar VARCHAR(255) NOT NULL,
    description_en TEXT,
    description_ar TEXT,
    category_id INT,
    supplier_id INT, -- Assuming a suppliers table exists
    base_price_yer DECIMAL(10, 2),
    base_price_usd DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES service_categories(category_id)
);

CREATE TABLE packages (
    package_id INT AUTO_INCREMENT PRIMARY KEY,
    package_name_en VARCHAR(255) NOT NULL,
    package_name_ar VARCHAR(255) NOT NULL,
    description_en TEXT,
    description_ar TEXT,
    total_price_yer DECIMAL(10, 2),
    total_price_usd DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE package_services (
    package_id INT,
    service_id INT,
    quantity INT DEFAULT 1,
    PRIMARY KEY (package_id, service_id),
    FOREIGN KEY (package_id) REFERENCES packages(package_id),
    FOREIGN KEY (service_id) REFERENCES services(service_id)
);
---
CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    parent_category_id INT,
    description TEXT,
    icon VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_category_id) REFERENCES categories(category_id)
);

CREATE TABLE settings (
    setting_id INT PRIMARY KEY AUTO_INCREMENT,
    setting_key VARCHAR(255) NOT NULL UNIQUE,
    setting_value TEXT,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE templates (
    template_id INT PRIMARY KEY AUTO_INCREMENT,
    template_name VARCHAR(255) NOT NULL,
    template_type ENUM('website', 'email', 'invoice', 'event_description') NOT NULL,
    template_content TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
---
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(255) NOT NULL,
    full_name_ar VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20) UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    registration_method VARCHAR(50) NOT NULL, -- 'email', 'google', 'facebook'
    whatsapp_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bookings (
    booking_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    event_id INT,
    num_tickets INT NOT NULL,
    total_price_yer DECIMAL(10, 2) NOT NULL,
    total_price_usd DECIMAL(10, 2) NOT NULL,
    payment_method VARCHAR(50) NOT NULL, -- 'mfloos', 'mahfathati', 'cash_on_delivery', 'credit_card'
    booking_status VARCHAR(50) NOT NULL, -- 'confirmed', 'pending', 'cancelled'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id) -- Assuming an 'events' table exists
);
---
CREATE TABLE venues (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    category VARCHAR(255),
    star_rating INT,
    address VARCHAR(255),
    address_ar VARCHAR(255),
    phone VARCHAR(50),
    whatsapp VARCHAR(50),
    email VARCHAR(255),
    website VARCHAR(255),
    parking BOOLEAN,
    wifi BOOLEAN,
    restaurant BOOLEAN,
    health_club BOOLEAN,
    airport_transfer BOOLEAN
);

CREATE TABLE venue_halls (
    id INT PRIMARY KEY AUTO_INCREMENT,
    venue_id INT,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    dimensions VARCHAR(255),
    capacity_theatre INT,
    capacity_classroom INT,
    capacity_banquet INT,
    capacity_reception INT,
    FOREIGN KEY (venue_id) REFERENCES venues(id)
);
---
CREATE TABLE departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(255) NOT NULL,
    department_name_ar VARCHAR(255) -- Arabic name
);

CREATE TABLE positions (
    position_id INT PRIMARY KEY AUTO_INCREMENT,
    position_title VARCHAR(255) NOT NULL,
    position_title_ar VARCHAR(255), -- Arabic name
    job_description TEXT
);

CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    first_name_ar VARCHAR(255), -- Arabic name
    last_name_ar VARCHAR(255), -- Arabic name
    date_of_birth DATE NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    nationality VARCHAR(255) NOT NULL,
    national_id_number VARCHAR(255) UNIQUE,
    passport_number VARCHAR(255) UNIQUE,
    address TEXT NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    whatsapp_number VARCHAR(20),
    email VARCHAR(255) UNIQUE NOT NULL,
    hire_date DATE NOT NULL,
    department_id INT,
    position_id INT,
    photo_path VARCHAR(255),
    FOREIGN KEY (department_id) REFERENCES departments(department_id),
    FOREIGN KEY (position_id) REFERENCES positions(position_id)
);
---
CREATE TABLE venues (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_arabic VARCHAR(255),
    district VARCHAR(255),
    address TEXT,
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    website VARCHAR(255),
    facebook VARCHAR(255),
    instagram VARCHAR(255),
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255),
    notes TEXT
);
---
CREATE TABLE corporate_event_photographers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    company_name_ar VARCHAR(255),
    address VARCHAR(255),
    phone_whatsapp VARCHAR(255),
    email VARCHAR(255),
    website VARCHAR(255),
    services TEXT,
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255),
    confidence_level VARCHAR(255),
    source VARCHAR(255)
);
---
CREATE TABLE employees ( employee_id INT PRIMARY KEY AUTO_INCREMENT, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, first_name_ar VARCHAR(255), last_name_ar VARCHAR(255), date_of_birth DATE, gender VARCHAR(50), nationality VARCHAR(100), national_id VARCHAR(100) UNIQUE, passport_id VARCHAR(100) UNIQUE, address TEXT, address_ar TEXT, phone_number VARCHAR(50) NOT NULL, whatsapp_number VARCHAR(50), email VARCHAR(255) UNIQUE NOT NULL, job_title VARCHAR(255), department VARCHAR(255), employment_status VARCHAR(50), date_of_hire DATE, salary_yer DECIMAL(15, 2), salary_usd DECIMAL(15, 2), emergency_contact_name VARCHAR(255), emergency_contact_phone VARCHAR(50) );
---
CREATE TABLE clients (
    client_id INT AUTO_INCREMENT PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    client_name_ar VARCHAR(255),
    contact_person VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    address TEXT,
    city VARCHAR(100) DEFAULT 'Aden',
    country VARCHAR(100) DEFAULT 'Yemen',
    preferred_currency ENUM('YER', 'USD') DEFAULT 'USD',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
---
CREATE TABLE institutions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    type VARCHAR(50),
    address VARCHAR(255),
    phone VARCHAR(50),
    whatsapp VARCHAR(50),
    email VARCHAR(255),
    website VARCHAR(255),
    curriculum TEXT,
    grades VARCHAR(100),
    source VARCHAR(255),
    confidence_level VARCHAR(50)
);

CREATE TABLE events (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title_en VARCHAR(255) NOT NULL,
    title_ar VARCHAR(255),
    institution_id INT,
    description TEXT,
    start_date DATE,
    end_date DATE,
    location VARCHAR(255),
    price_yer DECIMAL(10, 2),
    price_usd DECIMAL(10, 2),
    source VARCHAR(255),
    confidence_level VARCHAR(50),
    FOREIGN KEY (institution_id) REFERENCES institutions(id)
);
---
CREATE TABLE users (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    username VARCHAR(255) NOT NULL UNIQUE,\n    password_hash VARCHAR(255) NOT NULL,\n    email VARCHAR(255) NOT NULL UNIQUE,\n    full_name VARCHAR(255),\n    full_name_ar VARCHAR(255),\n    phone_number VARCHAR(20),\n    whatsapp_number VARCHAR(20),\n    address VARCHAR(255),\n    address_ar VARCHAR(255),\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n    is_active BOOLEAN DEFAULT TRUE,\n    data_processing_consent BOOLEAN NOT NULL DEFAULT FALSE\n);
---

```sql
CREATE TABLE knowledge_base (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255) NOT NULL, -- e.g., Greetings, Venues, Suppliers, Etiquette
    sub_category VARCHAR(255), -- e.g., Wedding Halls, Caterers, Wedding Etiquette
    question_en TEXT, -- A potential user question in English
    question_ar TEXT, -- A potential user question in Arabic
    answer_en TEXT NOT NULL, -- The answer in English
    answer_ar TEXT NOT NULL, -- The answer in Arabic
    keywords VARCHAR(255), -- Comma-separated keywords for search
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---
CREATE TABLE makeup_artists (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(20),
    whatsapp VARCHAR(20),
    instagram VARCHAR(255),
    services TEXT,
    pricing_yer INT,
    pricing_usd INT
);
---
CREATE TABLE loyalty_program (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    tier VARCHAR(255) NOT NULL DEFAULT 'Bronze',
    points INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE loyalty_program_history (
    id INT PRIMARY KEY AUTO_INCREMENT,
    loyalty_program_id INT NOT NULL,
    action VARCHAR(255) NOT NULL,
    points_change INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (loyalty_program_id) REFERENCES loyalty_program(id)
);

CREATE TABLE badges (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    icon_url VARCHAR(255)
);

CREATE TABLE user_badges (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    badge_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (badge_id) REFERENCES badges(id)
);
---
CREATE TABLE venues (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255),
    website VARCHAR(255),
    price_yer INT,
    capacity INT,
    notes TEXT
);

CREATE TABLE traditions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    type VARCHAR(255)
);

CREATE TABLE dishes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT
);
---
CREATE TABLE event_legal_requirements ( id INT PRIMARY KEY AUTO_INCREMENT, country VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, authority_name_en VARCHAR(255) NOT NULL, authority_name_ar VARCHAR(255), address TEXT, phone VARCHAR(50), whatsapp VARCHAR(50), email VARCHAR(255), website VARCHAR(255), governing_law VARCHAR(255), law_summary TEXT, permit_process TEXT, required_documents TEXT, fees_yer VARCHAR(255), fees_usd VARCHAR(255), confidence_level VARCHAR(50), notes TEXT, last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP );
---
CREATE TABLE payment_gateways (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    services TEXT,
    accepted_cards TEXT,
    cryptocurrency BOOLEAN,
    pricing VARCHAR(255),
    contact_phone VARCHAR(255),
    contact_email VARCHAR(255),
    website VARCHAR(255),
    address TEXT,
    country VARCHAR(255)
);
---
CREATE TABLE catering_companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    specialties TEXT,
    minimum_order VARCHAR(255),
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    email VARCHAR(255),
    address TEXT,
    source_url VARCHAR(255),
    confidence_level VARCHAR(50),
    notes TEXT
);
---
CREATE TABLE aden_restaurants ( id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, name_arabic VARCHAR(255), address TEXT, phone_numbers TEXT[], whatsapp_numbers TEXT[], specialties TEXT[], notes TEXT, pricing_yer NUMERIC, pricing_usd NUMERIC, hours VARCHAR(255) );
---
CREATE TABLE suppliers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(20),
    whatsapp VARCHAR(20),
    specialties TEXT,
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255),
    confidence_level VARCHAR(50),
    source VARCHAR(255)
);
---
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    full_name_ar VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    whatsapp_number VARCHAR(20) UNIQUE,
    profile_picture_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE conversations (
    conversation_id INT PRIMARY KEY AUTO_INCREMENT,
    conversation_type ENUM('private', 'group', 'ai') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE conversation_participants (
    participant_id INT PRIMARY KEY AUTO_INCREMENT,
    conversation_id INT,
    user_id INT,
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (conversation_id) REFERENCES conversations(conversation_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE messages (
    message_id INT PRIMARY KEY AUTO_INCREMENT,
    conversation_id INT,
    sender_id INT,
    message_text TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (conversation_id) REFERENCES conversations(conversation_id),
    FOREIGN KEY (sender_id) REFERENCES users(user_id)
);

CREATE TABLE message_attachments (
    attachment_id INT PRIMARY KEY AUTO_INCREMENT,
    message_id INT,
    attachment_url TEXT NOT NULL,
    attachment_type VARCHAR(50),
    FOREIGN KEY (message_id) REFERENCES messages(message_id)
);

CREATE TABLE ai_interactions (
    interaction_id INT PRIMARY KEY AUTO_INCREMENT,
    conversation_id INT,
    user_id INT,
    prompt TEXT NOT NULL,
    response TEXT NOT NULL,
    feedback ENUM('positive', 'negative', 'none') DEFAULT 'none',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (conversation_id) REFERENCES conversations(conversation_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE user_sessions (
    session_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ended_at TIMESTAMP,
    device_info TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
---
CREATE TABLE wedding_decorators ( id INT AUTO_INCREMENT PRIMARY KEY, name_en VARCHAR(255), name_ar VARCHAR(255), address TEXT, phone_numbers VARCHAR(255), whatsapp_numbers VARCHAR(255), email VARCHAR(255), portfolio_url VARCHAR(255), pricing_range_yer VARCHAR(100), pricing_range_usd VARCHAR(100), confidence_level VARCHAR(50) );
---
CREATE TABLE wedding_halls (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone_numbers VARCHAR(255),
    whatsapp_numbers VARCHAR(255),
    pricing_yer DECIMAL(10, 2),
    pricing_usd DECIMAL(10, 2),
    source_url VARCHAR(255),
    district VARCHAR(255)
);
---
CREATE TABLE wedding_venues (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    name_arabic VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    capacity INT,
    pricing_yer DECIMAL(10, 2),
    pricing_usd DECIMAL(10, 2),
    notes TEXT,
    source VARCHAR(255),
    confidence_level VARCHAR(20)
);
---
CREATE TABLE security_companies (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    company_name VARCHAR(255) NOT NULL,\n    arabic_name VARCHAR(255),\n    website VARCHAR(255),\n    email VARCHAR(255),\n    phone VARCHAR(255),\n    whatsapp VARCHAR(255),\n    address_aden TEXT,\n    services TEXT,\n    notes TEXT,\n    pricing_yer VARCHAR(255),\n    pricing_usd VARCHAR(255)\n);
---
CREATE TABLE wedding_videographers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_arabic VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(255),
    whatsapp_number VARCHAR(255),
    instagram_handle VARCHAR(255),
    services TEXT,
    cinematic_packages TEXT,
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255),
    source VARCHAR(255),
    confidence_level VARCHAR(50),
    notes TEXT
);
---
CREATE TABLE venues (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_en VARCHAR(255),
    name_ar VARCHAR(255),
    address_en VARCHAR(255),
    address_ar VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    email VARCHAR(255),
    website VARCHAR(255),
    venue_type VARCHAR(50),
    notes TEXT
);

CREATE TABLE suppliers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_en VARCHAR(255),
    name_ar VARCHAR(255),
    address_en VARCHAR(255),
    address_ar VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    email VARCHAR(255),
    website VARCHAR(255),
    supplier_type VARCHAR(50),
    notes TEXT
);
---
CREATE TABLE aden_transportation_luxury_car_rental (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address_en TEXT,
    address_ar TEXT,
    phone_numbers JSON,
    services_en TEXT,
    services_ar TEXT,
    social_media JSON,
    confidence_level VARCHAR(50),
    notes TEXT
);
---
CREATE TABLE inventory (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    item_name VARCHAR(255) NOT NULL,
    item_name_ar VARCHAR(255),
    category VARCHAR(255),
    category_ar VARCHAR(255),
    supplier_id INT,
    quantity_available INT NOT NULL,
    rental_price_yer DECIMAL(10, 2),
    rental_price_usd DECIMAL(10, 2),
    purchase_cost_yer DECIMAL(10, 2),
    purchase_cost_usd DECIMAL(10, 2),
    `condition` VARCHAR(50),
    image_url VARCHAR(255),
    notes TEXT,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);
---
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    company VARCHAR(255),
    favorite_number INT
);
---
CREATE TABLE venues (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    address_ar VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    email VARCHAR(255),
    website VARCHAR(255),
    halls JSON
);

CREATE TABLE photographers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    address VARCHAR(255),
    address_ar VARCHAR(255),
    website VARCHAR(255),
    portfolio_url VARCHAR(255)
);

CREATE TABLE caterers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    email VARCHAR(255),
    website VARCHAR(255),
    services TEXT
);
---
CREATE TABLE event_companies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    services TEXT,
    address VARCHAR(255),
    phone VARCHAR(50),
    whatsapp VARCHAR(50),
    email VARCHAR(255),
    website VARCHAR(255),
    confidence ENUM('High', 'Medium', 'Low')
);

CREATE TABLE event_venues (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(50),
    whatsapp VARCHAR(50),
    email VARCHAR(255),
    website VARCHAR(255),
    capacity INT,
    pricing_yer DECIMAL(10, 2),
    pricing_usd DECIMAL(10, 2),
    confidence ENUM('High', 'Medium', 'Low')
);
---
CREATE TABLE alqutaibi_bank_branches (
    branch_id INT PRIMARY KEY AUTO_INCREMENT,
    branch_name_en VARCHAR(255) NOT NULL,
    branch_name_ar VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL
);
---
CREATE TABLE djs ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, arabic_name VARCHAR(255), location VARCHAR(255), phone_1 VARCHAR(255), phone_2 VARCHAR(255), whatsapp VARCHAR(255), facebook VARCHAR(255), tiktok VARCHAR(255), instagram VARCHAR(255), services TEXT, pricing_usd_per_hour DECIMAL(10, 2), pricing_yer_per_hour DECIMAL(10, 2), notes TEXT );
---
CREATE TABLE venues ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, name_ar VARCHAR(255), category VARCHAR(100), address VARCHAR(255), address_ar VARCHAR(255), phone VARCHAR(50), whatsapp VARCHAR(50), website VARCHAR(255), facilities JSON, permit_info TEXT, sunset_timings JSON, notes TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP );
---
CREATE TABLE banks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    website VARCHAR(255),
    email VARCHAR(255),
    established_year INT,
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255)
);
---
CREATE TABLE ngos ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, arabic_name VARCHAR(255), website VARCHAR(255), fields_of_interest TEXT, objectives TEXT, activities TEXT, contact_person VARCHAR(255), contact_person_position VARCHAR(255), contact_email VARCHAR(255), regions_of_work TEXT, phone VARCHAR(255), whatsapp_number VARCHAR(255), address TEXT, pricing_yer DECIMAL(10, 2), pricing_usd DECIMAL(10, 2) ); CREATE TABLE entertainment ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, arabic_name VARCHAR(255), category VARCHAR(255), description TEXT, location VARCHAR(255), address TEXT, phone VARCHAR(255), whatsapp_number VARCHAR(255), pricing_yer DECIMAL(10, 2), pricing_usd DECIMAL(10, 2) ); CREATE TABLE construction ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, arabic_name VARCHAR(255), address TEXT, phone VARCHAR(255), whatsapp_number VARCHAR(255), pricing_yer DECIMAL(10, 2), pricing_usd DECIMAL(10, 2) ); CREATE TABLE energy ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, arabic_name VARCHAR(255), website VARCHAR(255), services TEXT, address TEXT, phone VARCHAR(255), fax VARCHAR(255), whatsapp_number VARCHAR(255), pricing_yer DECIMAL(10, 2), pricing_usd DECIMAL(10, 2) ); CREATE TABLE travel ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, arabic_name VARCHAR(255), address TEXT, phone VARCHAR(255), whatsapp_number VARCHAR(255), pricing_yer DECIMAL(10, 2), pricing_usd DECIMAL(10, 2) );
---
CREATE TABLE ai_character (
    id INT PRIMARY KEY AUTO_INCREMENT,
    character_name VARCHAR(255) NOT NULL,
    voice_id VARCHAR(255) NOT NULL,
    language VARCHAR(255) NOT NULL,
    dialect VARCHAR(255) NOT NULL
);

CREATE TABLE dialogue (
    id INT PRIMARY KEY AUTO_INCREMENT,
    character_id INT NOT NULL,
    intent VARCHAR(255) NOT NULL,
    dialogue_text TEXT NOT NULL,
    audio_file_path VARCHAR(255) NOT NULL,
    FOREIGN KEY (character_id) REFERENCES ai_character(id)
);
---
CREATE TABLE venues (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    email VARCHAR(255),
    website VARCHAR(255),
    category VARCHAR(255),
    capacity INT,
    amenities TEXT,
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255),
    notes TEXT
);
---
CREATE TABLE events (
    event_id INT PRIMARY KEY AUTO_INCREMENT COMMENT 'Unique identifier for each event.',
    event_name_en VARCHAR(255) NOT NULL COMMENT 'Name of the event in English.',
    event_name_ar VARCHAR(255) COMMENT 'Name of the event in Arabic.',
    event_description_en TEXT COMMENT 'Detailed description of the event in English.',
    event_description_ar TEXT COMMENT 'Detailed description of the event in Arabic.',
    event_type_id INT COMMENT 'Foreign key to an event_types table (e.g., conference, workshop, wedding).',
    event_category_id INT COMMENT 'Foreign key to an event_categories table (e.g., corporate, social, community).',
    start_date DATETIME NOT NULL COMMENT 'Start date and time of the event.',
    end_date DATETIME NOT NULL COMMENT 'End date and time of the event.',
    venue_id INT COMMENT 'Foreign key to a venues table.',
    organizer_id INT COMMENT 'Foreign key to a users or organizations table for the event organizer.',
    contact_person_name_en VARCHAR(255) COMMENT 'Contact person for the event in English.',
    contact_person_name_ar VARCHAR(255) COMMENT 'Contact person for the event in Arabic.',
    contact_phone VARCHAR(20) COMMENT 'Primary phone number for the contact person.',
    contact_whatsapp VARCHAR(20) COMMENT 'WhatsApp number for the contact person.',
    contact_email VARCHAR(255) COMMENT 'Email address for the contact person.',
    website VARCHAR(255) COMMENT 'Official website for the event.',
    registration_url VARCHAR(255) COMMENT 'URL for event registration.',
    price_yer DECIMAL(10, 2) COMMENT 'Ticket or entry price in Yemeni Rial.',
    price_usd DECIMAL(10, 2) COMMENT 'Ticket or entry price in US Dollars.',
    capacity INT COMMENT 'Maximum number of attendees for the event.',
    status VARCHAR(50) DEFAULT 'planned' COMMENT 'Current status of the event (e.g., planned, confirmed, cancelled, postponed).',
    is_public BOOLEAN DEFAULT TRUE COMMENT 'Indicates if the event is open to the public.',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Timestamp of when the event record was created.',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Timestamp of the last update to the event record.',
    cover_image_url VARCHAR(255) COMMENT 'URL for the main promotional image for the event.',
    tags TEXT COMMENT 'Comma-separated tags for searching and filtering events.',
    agenda_en JSON COMMENT 'JSON object containing the event agenda in English.',
    agenda_ar JSON COMMENT 'JSON object containing the event agenda in Arabic.',
    speakers JSON COMMENT 'JSON array of speaker information (name, bio, photo_url).',
    sponsors JSON COMMENT 'JSON array of sponsor information (name, logo_url, website).',
    is_featured BOOLEAN DEFAULT FALSE COMMENT 'Indicates if the event should be featured on the platform.',
    cancellation_policy_en TEXT COMMENT 'Cancellation policy in English.',
    cancellation_policy_ar TEXT COMMENT 'Cancellation policy in Arabic.',
    additional_notes_en TEXT COMMENT 'Any other relevant notes in English.',
    additional_notes_ar TEXT COMMENT 'Any other relevant notes in Arabic.'
);
---
CREATE TABLE venues ( id INT PRIMARY KEY AUTO_INCREMENT, name_en VARCHAR(255) NOT NULL, name_ar VARCHAR(255), address VARCHAR(255), phone VARCHAR(255), whatsapp VARCHAR(255), source VARCHAR(255), confidence ENUM('High', 'Medium', 'Low') ); CREATE TABLE suppliers ( id INT PRIMARY KEY AUTO_INCREMENT, name_en VARCHAR(255) NOT NULL, name_ar VARCHAR(255), service_type VARCHAR(255), phone VARCHAR(255), whatsapp VARCHAR(255), source VARCHAR(255), confidence ENUM('High', 'Medium', 'Low') );
---
```sql
-- Departments Table
CREATE TABLE departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(255) NOT NULL,
    department_name_ar VARCHAR(255)
);

-- Employees Table
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    first_name_ar VARCHAR(255),
    last_name_ar VARCHAR(255),
    gender ENUM('Male', 'Female', 'Other'),
    date_of_birth DATE,
    nationality VARCHAR(255),
    phone_number VARCHAR(20),
    email VARCHAR(255) UNIQUE,
    address VARCHAR(255),
    address_ar VARCHAR(255),
    city VARCHAR(255),
    country VARCHAR(255),
    hire_date DATE,
    termination_date DATE,
    department_id INT,
    job_title VARCHAR(255),
    salary DECIMAL(10, 2),
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

-- Jobs Table
CREATE TABLE jobs (
    job_id INT PRIMARY KEY AUTO_INCREMENT,
    job_title VARCHAR(255) NOT NULL,
    job_description TEXT,
    job_description_ar TEXT,
    date_posted DATE,
    closing_date DATE,
    status ENUM('open', 'closed', 'filled')
);

-- Events Table
CREATE TABLE events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    event_name VARCHAR(255) NOT NULL,
    event_name_ar VARCHAR(255),
    event_date DATETIME,
    location VARCHAR(255),
    location_ar VARCHAR(255),
    description TEXT,
    description_ar TEXT
);

-- Event Staffing Table
CREATE TABLE event_staffing (
    event_staffing_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    employee_id INT,
    role VARCHAR(255),
    FOREIGN KEY (event_id) REFERENCES events(event_id),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

-- Employee Availability Table
CREATE TABLE employee_availability (
    availability_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    start_time DATETIME,
    end_time DATETIME,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

-- Shifts Table
CREATE TABLE shifts (
    shift_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    event_id INT,
    start_time DATETIME,
    end_time DATETIME,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

-- Performance Reviews Table
CREATE TABLE performance_reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    review_date DATE,
    rating INT,
    comments TEXT,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

-- Payroll Table
CREATE TABLE payroll (
    payroll_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    pay_date DATE,
    gross_salary DECIMAL(10, 2),
    deductions DECIMAL(10, 2),
    net_salary DECIMAL(10, 2),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

-- Surveys Table
CREATE TABLE surveys (
    survey_id INT PRIMARY KEY AUTO_INCREMENT,
    survey_name VARCHAR(255),
    survey_name_ar VARCHAR(255),
    date_conducted DATE,
    employee_id INT,
    enps_score INT,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

-- Attendance Table
CREATE TABLE attendance (
    attendance_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    date DATE,
    status ENUM('present', 'absent', 'leave'),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

-- Expenses Table
CREATE TABLE expenses (
    expense_id INT PRIMARY KEY AUTO_INCREMENT,
    expense_type VARCHAR(255),
    amount DECIMAL(10, 2),
    date DATE,
    job_id INT,
    FOREIGN KEY (job_id) REFERENCES jobs(job_id)
);

-- Onboarding Table
CREATE TABLE onboarding (
    onboarding_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    task VARCHAR(255),
    status ENUM('pending', 'in-progress', 'completed'),
    due_date DATE,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);
```
---
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
---
CREATE TABLE drone_services (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(20),
    whatsapp VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    services TEXT,
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255),
    notes TEXT,
    confidence_level VARCHAR(50),
    source VARCHAR(255)
);
---
CREATE TABLE suppliers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    code_of_conduct_agreed BOOLEAN DEFAULT FALSE,
    agreement_date DATE
);
---
CREATE TABLE cloud_storage_providers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    website VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    email VARCHAR(255),
    services TEXT
);
---
CREATE TABLE venues (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address TEXT,
    phone_number VARCHAR(255),
    whatsapp_number VARCHAR(255),
    capacity INT,
    price_yer DECIMAL(10, 2),
    price_usd DECIMAL(10, 2),
    source TEXT,
    confidence_level VARCHAR(255)
);
---
CREATE TABLE email_service_providers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    provider_name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    website VARCHAR(255),
    address_sanaa VARCHAR(255),
    address_aden VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    email VARCHAR(255),
    pricing_usd VARCHAR(255),
    pricing_yer VARCHAR(255),
    notes TEXT
);
---
CREATE TABLE venues (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address TEXT NOT NULL,
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    capacity INTEGER,
    venue_type VARCHAR(100),
    pricing_yer TEXT,
    pricing_usd TEXT,
    amenities TEXT,
    availability TEXT,
    rating DECIMAL(2,1),
    verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
---
CREATE TABLE beach_venues (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_arabic VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    website VARCHAR(255),
    email VARCHAR(255),
    notes TEXT,
    source VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
---
CREATE TABLE event_permits (
    id INT PRIMARY KEY AUTO_INCREMENT,
    authority_name VARCHAR(255) NOT NULL,
    authority_name_ar VARCHAR(255),
    contact_person VARCHAR(255),
    phone_number VARCHAR(255),
    whatsapp_number VARCHAR(255),
    email VARCHAR(255),
    address VARCHAR(255),
    address_ar VARCHAR(255),
    website VARCHAR(255),
    permit_requirements TEXT,
    application_process TEXT,
    notes TEXT
);
---
CREATE TABLE banks ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, name_ar VARCHAR(255), category VARCHAR(255), address VARCHAR(255), city VARCHAR(255), phone VARCHAR(255), whatsapp VARCHAR(255), website VARCHAR(255), services TEXT, pricing_yer VARCHAR(255), pricing_usd VARCHAR(255) );
---
CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT,
    client_id INT,
    supplier_id INT NULL,
    payment_guid VARCHAR(255) NOT NULL UNIQUE,
    amount_original DECIMAL(15, 2) NOT NULL,
    currency_original VARCHAR(3) NOT NULL, -- ISO 4217 currency code
    exchange_rate DECIMAL(15, 5),
    amount_base DECIMAL(15, 2) NOT NULL, -- Amount in platform's base currency (e.g., YER)
    payment_method VARCHAR(50) NOT NULL, -- e.g., 'cash', 'bank_transfer', 'mobile_wallet', 'hawala', 'credit_card'
    payment_provider VARCHAR(100), -- e.g., 'Qasemi Bank', 'Al-Amqi Exchange', 'MFloos'
    transaction_id VARCHAR(255) NULL, -- From payment provider
    payment_status VARCHAR(50) NOT NULL DEFAULT 'pending', -- e.g., 'pending', 'completed', 'failed', 'refunded'
    payment_direction VARCHAR(20) NOT NULL, -- 'inbound' (from client) or 'outbound' (to supplier)
    notes TEXT,
    payment_date TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES events(event_id),
    FOREIGN KEY (client_id) REFERENCES clients(client_id),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);
---
CREATE TABLE legal_requirements ( id INT PRIMARY KEY AUTO_INCREMENT, requirement_name VARCHAR(255) NOT NULL, requirement_name_ar VARCHAR(255), description TEXT, issuing_authority VARCHAR(255), issuing_authority_ar VARCHAR(255), website VARCHAR(255), phone_number VARCHAR(50), whatsapp_number VARCHAR(50), address TEXT, estimated_cost_yer DECIMAL(15, 2), estimated_cost_usd DECIMAL(15, 2), procedure_summary TEXT, source VARCHAR(255), confidence_level VARCHAR(50) );
---
CREATE TABLE venues (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(20),
    whatsapp VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    description TEXT,
    capacity INT,
    pricing_yer DECIMAL(10, 2),
    pricing_usd DECIMAL(10, 2),
    category VARCHAR(100)
);

CREATE TABLE suppliers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    service_type VARCHAR(100),
    phone VARCHAR(20),
    whatsapp VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    description TEXT,
    pricing_yer DECIMAL(10, 2),
    pricing_usd DECIMAL(10, 2)
);

CREATE TABLE event_packages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    description TEXT,
    venue_id INT,
    supplier_id INT,
    includes TEXT,
    pricing_yer DECIMAL(10, 2),
    pricing_usd DECIMAL(10, 2),
    FOREIGN KEY (venue_id) REFERENCES venues(id),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);
---
CREATE TABLE suppliers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name_en VARCHAR(255) NOT NULL,
  name_ar VARCHAR(255),
  category VARCHAR(255) NOT NULL, -- e.g., Catering, Decorations, Waste Management
  address VARCHAR(255),
  phone VARCHAR(20),
  whatsapp VARCHAR(20),
  email VARCHAR(255),
  website VARCHAR(255),
  description TEXT,
  green_practices_verified BOOLEAN DEFAULT FALSE,
  confidence_level VARCHAR(10) -- High, Medium, Low
);
---
CREATE TABLE organizations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(50),
    whatsapp VARCHAR(50),
    email VARCHAR(255),
    website VARCHAR(255),
    hq_address VARCHAR(255)
);

CREATE TABLE initiatives (
    id INT PRIMARY KEY AUTO_INCREMENT,
    organization_id INT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    description TEXT,
    start_date DATE,
    end_date DATE,
    FOREIGN KEY (organization_id) REFERENCES organizations(id)
);

CREATE TABLE initiative_partners (
    id INT PRIMARY KEY AUTO_INCREMENT,
    initiative_id INT,
    partner_name_en VARCHAR(255) NOT NULL,
    partner_name_ar VARCHAR(255),
    partner_website VARCHAR(255),
    FOREIGN KEY (initiative_id) REFERENCES initiatives(id)
);
---
-- Complete Audit Trail Schema for Greenists Event Management Platform

CREATE TABLE audit_logs (
    log_id BIGSERIAL PRIMARY KEY,
    user_id BIGINT,
    user_name VARCHAR(255),
    action_type VARCHAR(50) NOT NULL CHECK (action_type IN ('CREATE', 'UPDATE', 'DELETE', 'LOGIN_SUCCESS', 'LOGIN_FAIL', 'VIEW')),
    table_name VARCHAR(255),
    record_id VARCHAR(255),
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ip_address INET,
    old_values JSONB,
    new_values JSONB,
    query_text TEXT,
    context JSONB,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
        REFERENCES users(user_id)
        ON DELETE SET NULL
);

COMMENT ON TABLE audit_logs IS 'A comprehensive audit trail of all actions performed within the Greenists platform.';
COMMENT ON COLUMN audit_logs.log_id IS 'Unique identifier for each log entry.';
COMMENT ON COLUMN audit_logs.user_id IS 'The ID of the user who performed the action. Foreign key to the users table.';
COMMENT ON COLUMN audit_logs.user_name IS 'The name of the user, for easier reading and in case the user is deleted.';
COMMENT ON COLUMN audit_logs.action_type IS 'The type of action performed (e.g., CREATE, UPDATE, DELETE, LOGIN_SUCCESS, LOGIN_FAIL, VIEW).';
COMMENT ON COLUMN audit_logs.table_name IS 'The name of the database table that was affected.';
COMMENT ON COLUMN audit_logs.record_id IS 'The primary key of the record that was affected.';
COMMENT ON COLUMN audit_logs.timestamp IS 'The date and time when the action occurred.';
COMMENT ON COLUMN audit_logs.ip_address IS 'The IP address from which the action was performed.';
COMMENT ON COLUMN audit_logs.old_values IS 'A JSONB object storing the state of the record before the change.';
COMMENT ON COLUMN audit_logs.new_values IS 'A JSONB object storing the state of the record after the change.';
COMMENT ON COLUMN audit_logs.query_text IS 'The full SQL query that was executed, if applicable.';
COMMENT ON COLUMN audit_logs.context IS 'Additional contextual information, such as a ticket ID, session ID, or device information.';
---
CREATE TABLE venues (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    website VARCHAR(255),
    notes TEXT,
    confidence VARCHAR(255)
);
---
CREATE TABLE banks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(100),
    country VARCHAR(100),
    phone VARCHAR(50),
    whatsapp VARCHAR(50),
    email VARCHAR(255),
    website VARCHAR(255),
    swift_bic VARCHAR(20),
    services TEXT,
    notes TEXT,
    sanctioned BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
---
CREATE TABLE live_streaming_services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_arabic VARCHAR(255),
    address VARCHAR(255),
    address_arabic VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    email VARCHAR(255),
    website VARCHAR(255),
    services TEXT,
    pricing_usd VARCHAR(255),
    pricing_yer VARCHAR(255),
    confidence VARCHAR(255)
);
---
CREATE TABLE caterers (
    caterer_id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    website VARCHAR(255),
    phone_1 VARCHAR(255),
    phone_2 VARCHAR(255),
    whatsapp VARCHAR(255),
    email VARCHAR(255),
    address_en TEXT,
    address_ar TEXT,
    services_en TEXT,
    services_ar TEXT,
    established_year INT,
    notes TEXT,
    source VARCHAR(255),
    confidence_level VARCHAR(50)
);
---
CREATE TABLE aden_seafood_restaurants (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255),
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255),
    event_hosting BOOLEAN,
    notes TEXT,
    confidence_level VARCHAR(50),
    source VARCHAR(255)
);
---
-- SQL Schema for Greenists Client Portal Dashboard

CREATE TABLE events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT,
    event_name VARCHAR(255) NOT NULL,
    event_date DATE,
    event_time TIME,
    venue_id INT,
    status VARCHAR(50)
);

CREATE TABLE venues (
    venue_id INT PRIMARY KEY AUTO_INCREMENT,
    venue_name VARCHAR(255) NOT NULL,
    venue_name_ar VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20)
);

CREATE TABLE tasks (
    task_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    task_name VARCHAR(255) NOT NULL,
    due_date DATE,
    status VARCHAR(50)
);

CREATE TABLE messages (
    message_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    sender_id INT,
    recipient_id INT,
    message TEXT,
    timestamp DATETIME
);

CREATE TABLE invoices (
    invoice_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    total_amount_yer DECIMAL(10, 2),
    total_amount_usd DECIMAL(10, 2),
    amount_paid_yer DECIMAL(10, 2),
    amount_paid_usd DECIMAL(10, 2),
    balance_due_yer DECIMAL(10, 2),
    balance_due_usd DECIMAL(10, 2),
    due_date DATE
);

CREATE TABLE guests (
    guest_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    guest_name VARCHAR(255) NOT NULL,
    status VARCHAR(50) -- (e.g., Invited, Attending, Declined)
);

CREATE TABLE vendors (
    vendor_id INT PRIMARY KEY AUTO_INCREMENT,
    vendor_name VARCHAR(255) NOT NULL,
    vendor_name_ar VARCHAR(255),
    category VARCHAR(100),
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    email VARCHAR(255)
);

CREATE TABLE timeline (
    timeline_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    milestone_name VARCHAR(255) NOT NULL,
    milestone_date DATE,
    milestone_time TIME
);

CREATE TABLE budgets (
    budget_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    total_budget_yer DECIMAL(10, 2),
    total_budget_usd DECIMAL(10, 2),
    actual_spending_yer DECIMAL(10, 2),
    actual_spending_usd DECIMAL(10, 2)
);

CREATE TABLE floor_plans (
    floor_plan_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    floor_plan_image_url VARCHAR(255)
);

CREATE TABLE vision_boards (
    vision_board_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    image_url VARCHAR(255),
    notes TEXT
);

---
-- Greenists Event Management Platform - SQL Schema

-- Table: clients
CREATE TABLE clients (
    client_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255), -- الاسم بالعربي
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    address VARCHAR(255),
    city VARCHAR(100),
    country VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: events
CREATE TABLE events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT,
    event_name VARCHAR(255) NOT NULL,
    event_type VARCHAR(100),
    event_date DATE,
    start_time TIME,
    end_time TIME,
    guest_count INT,
    venue_id INT,
    status VARCHAR(50) DEFAULT 'Pending',
    total_cost_yer DECIMAL(12, 2),
    total_cost_usd DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(client_id),
    FOREIGN KEY (venue_id) REFERENCES venues(venue_id)
);

-- Table: venues
CREATE TABLE venues (
    venue_id INT PRIMARY KEY AUTO_INCREMENT,
    venue_name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255), -- الاسم بالعربي
    address VARCHAR(255),
    city VARCHAR(100),
    country VARCHAR(100),
    capacity INT,
    contact_person VARCHAR(255),
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    rental_cost_yer DECIMAL(12, 2),
    rental_cost_usd DECIMAL(10, 2)
);

-- Table: suppliers
CREATE TABLE suppliers (
    supplier_id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255), -- الاسم بالعربي
    service_type VARCHAR(100),
    contact_person VARCHAR(255),
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    pricing_details TEXT
);

-- Table: inquiries
CREATE TABLE inquiries (
    inquiry_id INT PRIMARY KEY AUTO_INCREMENT,
    client_name VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(20),
    event_type VARCHAR(100),
    estimated_guest_count INT,
    preferred_date DATE,
    status VARCHAR(50) DEFAULT 'New',
    assigned_to INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: proposals
CREATE TABLE proposals (
    proposal_id INT PRIMARY KEY AUTO_INCREMENT,
    inquiry_id INT,
    event_id INT,
    proposal_date DATE,
    total_cost_yer DECIMAL(12, 2),
    total_cost_usd DECIMAL(10, 2),
    status VARCHAR(50) DEFAULT 'Draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (inquiry_id) REFERENCES inquiries(inquiry_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

-- Table: contracts
CREATE TABLE contracts (
    contract_id INT PRIMARY KEY AUTO_INCREMENT,
    proposal_id INT,
    event_id INT,
    contract_date DATE,
    status VARCHAR(50) DEFAULT 'Pending Signature',
    signed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (proposal_id) REFERENCES proposals(proposal_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

-- Table: tasks
CREATE TABLE tasks (
    task_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    task_name VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE,
    status VARCHAR(50) DEFAULT 'To Do',
    assigned_to INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

-- Table: payments
CREATE TABLE payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    amount_yer DECIMAL(12, 2),
    amount_usd DECIMAL(10, 2),
    payment_date DATE,
    payment_method VARCHAR(50),
    status VARCHAR(50) DEFAULT 'Completed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);
---
CREATE TABLE api_providers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    type VARCHAR(50) NOT NULL, -- 'SMS' or 'WhatsApp'
    website VARCHAR(255),
    phone VARCHAR(50),
    whatsapp_phone VARCHAR(50),
    email VARCHAR(255),
    address TEXT,
    pricing_usd DECIMAL(10, 4),
    pricing_yer DECIMAL(10, 2),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
---
CREATE TABLE `financial_kpis` (
  `kpi_id` int NOT NULL AUTO_INCREMENT,
  `kpi_name` varchar(255) NOT NULL,
  `kpi_category` varchar(255) NOT NULL,
  `kpi_description` text,
  `kpi_formula` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kpi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
---
CREATE TABLE venue_3d_providers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    website VARCHAR(255),
    phone_number VARCHAR(50),
    whatsapp_number VARCHAR(50),
    email VARCHAR(255),
    address TEXT,
    services_offered TEXT,
    technology_used VARCHAR(255),
    pricing_model VARCHAR(255),
    sample_pricing_yer DECIMAL(12, 2),
    sample_pricing_usd DECIMAL(10, 2),
    yemen_presence BOOLEAN,
    notes TEXT,
    confidence_level VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
---
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
---
CREATE TABLE service_providers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    email VARCHAR(255),
    services TEXT,
    category VARCHAR(255)
);

CREATE TABLE venues (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    capacity INT,
    price_yer DECIMAL(10, 2),
    price_usd DECIMAL(10, 2)
);

CREATE TABLE miscellaneous_services (
    id INT PRIMARY KEY AUTO_INCREMENT,
    service VARCHAR(255) NOT NULL,
    price_yer DECIMAL(10, 2),
    phone VARCHAR(255)
);
---
CREATE TABLE user_terms_acceptance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    terms_version VARCHAR(255) NOT NULL,
    acceptance_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
---
-- SQL Schema for Greenists AI Characters

-- Table to store conversation logs
CREATE TABLE `conversation_logs` (
  `log_id` INT NOT NULL AUTO_INCREMENT,
  `session_id` VARCHAR(255) NOT NULL,
  `character_name` VARCHAR(255) NOT NULL,
  `user_id` VARCHAR(255) NOT NULL,
  `message_text` TEXT NOT NULL,
  `message_timestamp` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`log_id`)
);

-- Table to store character personas
CREATE TABLE `character_personas` (
  `character_id` INT NOT NULL AUTO_INCREMENT,
  `character_name` VARCHAR(255) NOT NULL UNIQUE,
  `character_name_ar` VARCHAR(255) NOT NULL UNIQUE,
  `personality` TEXT NOT NULL,
  `backstory` TEXT NOT NULL,
  `visual_concept` TEXT NOT NULL,
  PRIMARY KEY (`character_id`)
);

---
CREATE TABLE `conversation_logs` (
  `log_id` INT NOT NULL AUTO_INCREMENT,
  `conversation_id` VARCHAR(255) NOT NULL,
  `user_id` VARCHAR(255) NOT NULL,
  `timestamp` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sender` ENUM('user', 'ai') NOT NULL,
  `message_text` TEXT NOT NULL,
  PRIMARY KEY (`log_id`)
  INDEX `conversation_id_index` (`conversation_id`)
);
---
CREATE TABLE wedding_halls ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, arabic_name VARCHAR(255), address VARCHAR(255), district VARCHAR(255) DEFAULT 'Khor Maksar', city VARCHAR(255) DEFAULT 'Aden', country VARCHAR(255) DEFAULT 'Yemen', phone_number VARCHAR(255), whatsapp_number VARCHAR(255), website VARCHAR(255), capacity INT, price_yer DECIMAL(10, 2), price_usd DECIMAL(10, 2), notes TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP );
---
CREATE TABLE suppliers (
    supplier_id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_name VARCHAR(255) NOT NULL,
    supplier_name_ar VARCHAR(255),
    service_type VARCHAR(100),
    address VARCHAR(255),
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    pricing_yer DECIMAL(10, 2),
    pricing_usd DECIMAL(10, 2),
    notes TEXT
);
---
CREATE TABLE photographers ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, name_arabic VARCHAR(255), address VARCHAR(255), phone_number VARCHAR(255), whatsapp_number VARCHAR(255), packages TEXT, pricing_yer VARCHAR(255), pricing_usd VARCHAR(255), portfolio_url VARCHAR(255), source VARCHAR(255) );
---
CREATE TABLE suppliers ( id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, name_ar VARCHAR(255), category VARCHAR(100), address TEXT, phone VARCHAR(50), whatsapp VARCHAR(50), email VARCHAR(255), services TEXT, notes TEXT, confidence_level VARCHAR(50), source VARCHAR(255) );
---
CREATE TABLE florists ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, arabic_name VARCHAR(255), phone VARCHAR(255), whatsapp VARCHAR(255), address TEXT, specialties TEXT, source VARCHAR(255) );
---
CREATE TABLE corporate_event_designers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    website VARCHAR(255),
    services TEXT,
    address VARCHAR(255),
    phone VARCHAR(20),
    whatsapp VARCHAR(20),
    email VARCHAR(255)
);
---
CREATE TABLE venues (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    fax VARCHAR(255),
    email VARCHAR(255),
    whatsapp VARCHAR(255),
    website VARCHAR(255),
    contact_person VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE event_halls (
    id INT PRIMARY KEY AUTO_INCREMENT,
    venue_id INT,
    name VARCHAR(255) NOT NULL,
    u_shape_capacity INT,
    banquet_capacity INT,
    cocktail_capacity INT,
    theater_capacity INT,
    classroom_capacity INT,
    FOREIGN KEY (venue_id) REFERENCES venues(id)
);
---
CREATE TABLE banks ( id INT PRIMARY KEY AUTO_INCREMENT, name_en VARCHAR(255) NOT NULL, name_ar VARCHAR(255) NOT NULL, website VARCHAR(255), phone VARCHAR(255), email VARCHAR(255), whatsapp VARCHAR(255) ); CREATE TABLE branches ( id INT PRIMARY KEY AUTO_INCREMENT, bank_id INT NOT NULL, name VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL, FOREIGN KEY (bank_id) REFERENCES banks(id) );
---
CREATE TABLE yemeni_musicians ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, arabic_name VARCHAR(255), category VARCHAR(255), style VARCHAR(255), whatsapp VARCHAR(255), instagram VARCHAR(255), snapchat VARCHAR(255), notes TEXT, pricing_yer DECIMAL(10, 2), pricing_usd DECIMAL(10, 2), verified BOOLEAN DEFAULT FALSE );
---
```sql
CREATE TABLE `events` (
  `event_id` INT PRIMARY KEY AUTO_INCREMENT,
  `event_name` VARCHAR(255) NOT NULL,
  `event_name_ar` VARCHAR(255),
  `event_type_id` INT,
  `customer_id` INT,
  `start_date` DATETIME,
  `end_date` DATETIME,
  `venue_id` INT,
  `status` VARCHAR(50),
  `total_revenue_yer` DECIMAL(15, 2),
  `total_revenue_usd` DECIMAL(15, 2),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`event_type_id`) REFERENCES `event_types`(`event_type_id`),
  FOREIGN KEY (`customer_id`) REFERENCES `customers`(`customer_id`),
  FOREIGN KEY (`venue_id`) REFERENCES `venues`(`venue_id`)
);

CREATE TABLE `event_proposals` (
  `proposal_id` INT PRIMARY KEY AUTO_INCREMENT,
  `event_id` INT,
  `sales_rep_id` INT,
  `status` VARCHAR(50) COMMENT 'e.g., Lead, Proposal Sent, Negotiation, Closed-Won, Closed-Lost',
  `estimated_value_yer` DECIMAL(15, 2),
  `estimated_value_usd` DECIMAL(15, 2),
  `estimated_close_date` DATE,
  `lead_source_id` INT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`event_id`) REFERENCES `events`(`event_id`),
  FOREIGN KEY (`sales_rep_id`) REFERENCES `users`(`user_id`),
  FOREIGN KEY (`lead_source_id`) REFERENCES `lead_sources`(`lead_source_id`)
);

CREATE TABLE `event_types` (
  `event_type_id` INT PRIMARY KEY AUTO_INCREMENT,
  `event_type_name` VARCHAR(255) NOT NULL,
  `event_type_name_ar` VARCHAR(255)
);

CREATE TABLE `users` (
  `user_id` INT PRIMARY KEY AUTO_INCREMENT,
  `full_name` VARCHAR(255) NOT NULL,
  `full_name_ar` VARCHAR(255),
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `phone_number` VARCHAR(20),
  `whatsapp_number` VARCHAR(20),
  `role` VARCHAR(50) COMMENT 'e.g., Sales Rep, Admin'
);

CREATE TABLE `sales_activities` (
  `activity_id` INT PRIMARY KEY AUTO_INCREMENT,
  `sales_rep_id` INT,
  `proposal_id` INT,
  `activity_type` VARCHAR(50) COMMENT 'e.g., Call, Meeting, Email',
  `notes` TEXT,
  `activity_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`sales_rep_id`) REFERENCES `users`(`user_id`),
  FOREIGN KEY (`proposal_id`) REFERENCES `event_proposals`(`proposal_id`)
);

CREATE TABLE `lead_sources` (
  `lead_source_id` INT PRIMARY KEY AUTO_INCREMENT,
  `source_name` VARCHAR(255) NOT NULL,
  `source_name_ar` VARCHAR(255)
);
```
---
CREATE TABLE suppliers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    category VARCHAR(255) NOT NULL,
    services TEXT,
    address VARCHAR(255),
    phone_number VARCHAR(255),
    whatsapp_number VARCHAR(255),
    email VARCHAR(255),
    website VARCHAR(255),
    pricing_details TEXT,
    notes TEXT,
    confidence_level VARCHAR(50),
    source VARCHAR(255)
);
---
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(255) NOT NULL,
    full_name_ar VARCHAR(255), -- الاسم بالعربي
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) UNIQUE, -- With country code, e.g., +967...
    whatsapp_number VARCHAR(20) UNIQUE, -- Can be the same as phone_number
    address_street VARCHAR(255),
    address_city VARCHAR(100),
    address_country VARCHAR(50) DEFAULT 'Yemen',
    profile_picture_url VARCHAR(255),
    user_role VARCHAR(50) NOT NULL CHECK (user_role IN ('attendee', 'organizer', 'vendor', 'admin')), -- User roles
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
---
CREATE TABLE kpis (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    description TEXT,
    category VARCHAR(255),
    formula VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
---
CREATE TABLE suppliers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    category VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    email VARCHAR(255),
    website VARCHAR(255),
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_id INT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    currency VARCHAR(3),
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);

CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    supplier_id INT,
    customer_id INT,
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);

CREATE TABLE messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sender_id INT,
    receiver_id INT,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payouts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_id INT,
    amount DECIMAL(10, 2),
    currency VARCHAR(3),
    status ENUM('pending', 'paid') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);
---
CREATE TABLE venues (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(255),
    whatsapp_number VARCHAR(255),
    email VARCHAR(255),
    website VARCHAR(255),
    venue_type VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
---
CREATE TABLE yemen_kuwait_bank_info (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(255),
    name_ar VARCHAR(255),
    service_type VARCHAR(255),
    service_description TEXT,
    address_en VARCHAR(255),
    address_ar VARCHAR(255),
    phone_number VARCHAR(50),
    whatsapp_number VARCHAR(50),
    email VARCHAR(255),
    website VARCHAR(255),
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255),
    source_url VARCHAR(255),
    confidence_level VARCHAR(50)
);
---
CREATE TABLE qa_inspections (
    inspection_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    venue_id INT,
    supplier_id INT,
    inspection_date DATE,
    inspector_name VARCHAR(255),
    overall_rating INT,
    notes TEXT,
    FOREIGN KEY (event_id) REFERENCES events(event_id),
    FOREIGN KEY (venue_id) REFERENCES venues(venue_id),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);

CREATE TABLE qa_feedback (
    feedback_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    respondent_name VARCHAR(255),
    respondent_type VARCHAR(50),
    submission_date DATE,
    overall_satisfaction INT,
    venue_rating INT,
    catering_rating INT,
    staff_rating INT,
    comments TEXT,
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);
---
CREATE TABLE mobile_money_providers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    provider_name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    services TEXT,
    aden_branches TEXT,
    phone VARCHAR(255),
    whatsapp VARCHAR(255),
    fees VARCHAR(255),
    notes TEXT,
    confidence_level VARCHAR(50),
    priority VARCHAR(50)
);
---
CREATE TABLE app_features ( id INT PRIMARY KEY AUTO_INCREMENT, feature_name VARCHAR(255) NOT NULL, description TEXT, is_enabled BOOLEAN DEFAULT true, event_id INT, FOREIGN KEY (event_id) REFERENCES events(id) );
---
CREATE TABLE pa_system_suppliers (
    supplier_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    name_arabic VARCHAR(255),
    address TEXT,
    phone_number VARCHAR(255),
    whatsapp_number VARCHAR(255),
    email VARCHAR(255),
    website VARCHAR(255),
    services_offered TEXT,
    equipment_list TEXT,
    pricing_yer TEXT,
    pricing_usd TEXT,
    source VARCHAR(255),
    confidence_level VARCHAR(50)
);
---
CREATE TABLE venues (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    category VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    country VARCHAR(255),
    phone VARCHAR(50),
    whatsapp VARCHAR(50),
    website VARCHAR(255),
    price_range VARCHAR(50),
    notes TEXT
);
---
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    date_of_birth DATE,
    gender ENUM('Male', 'Female', 'Other'),
    nationality VARCHAR(255),
    national_id VARCHAR(255) UNIQUE,
    passport_id VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20) UNIQUE,
    whatsapp_number VARCHAR(20) UNIQUE,
    email VARCHAR(255) UNIQUE NOT NULL,
    address TEXT,
    job_title VARCHAR(255),
    department VARCHAR(255),
    start_date DATE,
    end_date DATE,
    employment_status ENUM('Active', 'Inactive', 'Terminated'),
    salary DECIMAL(10, 2),
    currency VARCHAR(3) DEFAULT 'YER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE job_requisitions (
    requisition_id INT PRIMARY KEY AUTO_INCREMENT,
    job_title VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    justification TEXT,
    status ENUM('Open', 'Closed', 'On Hold') DEFAULT 'Open',
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES employees(employee_id)
);

CREATE TABLE candidates (
    candidate_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    phone_number VARCHAR(20) UNIQUE,
    whatsapp_number VARCHAR(20) UNIQUE,
    email VARCHAR(255) UNIQUE NOT NULL,
    address TEXT,
    resume_path VARCHAR(255),
    status ENUM('New', 'Screening', 'Interviewing', 'Offered', 'Hired', 'Rejected') DEFAULT 'New',
    requisition_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (requisition_id) REFERENCES job_requisitions(requisition_id)
);

CREATE TABLE interviews (
    interview_id INT PRIMARY KEY AUTO_INCREMENT,
    candidate_id INT,
    interviewer_id INT,
    interview_type ENUM('Screening', 'Technical', 'Final'),
    interview_date DATETIME,
    feedback TEXT,
    status ENUM('Scheduled', 'Completed', 'Canceled') DEFAULT 'Scheduled',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (candidate_id) REFERENCES candidates(candidate_id),
    FOREIGN KEY (interviewer_id) REFERENCES employees(employee_id)
);

CREATE TABLE performance_reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    reviewer_id INT,
    review_date DATE,
    rating INT,
    comments TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    FOREIGN KEY (reviewer_id) REFERENCES employees(employee_id)
);
---
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

CREATE TABLE Products (
    ProductID INT PRIMARY KEY AUTO_INCREMENT,
    ProductName VARCHAR(255) NOT NULL,
    Description TEXT,
    UnitPrice DECIMAL(10, 2) NOT NULL,
    CurrencyCode VARCHAR(3) NOT NULL DEFAULT 'YER',
    ArabicName NVARCHAR(255)
);

CREATE TABLE Events (
    EventID INT PRIMARY KEY AUTO_INCREMENT,
    EventName VARCHAR(255) NOT NULL,
    EventDate DATETIME,
    Venue VARCHAR(255),
    CustomerID INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

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
---
CREATE TABLE clients ( client_id INT PRIMARY KEY AUTO_INCREMENT, full_name VARCHAR(255) NOT NULL, arabic_name VARCHAR(255), company_name VARCHAR(255), address TEXT, phone_number VARCHAR(20), whatsapp_number VARCHAR(20), email VARCHAR(255) ); CREATE TABLE invoices ( invoice_id INT PRIMARY KEY AUTO_INCREMENT, client_id INT, invoice_date DATE, due_date DATE, total_amount_yer DECIMAL(15, 2), total_amount_usd DECIMAL(15, 2), status VARCHAR(20) DEFAULT 'unpaid', FOREIGN KEY (client_id) REFERENCES clients(client_id) ); CREATE TABLE payments ( payment_id INT PRIMARY KEY AUTO_INCREMENT, invoice_id INT, payment_date DATE, amount_yer DECIMAL(15, 2), amount_usd DECIMAL(15, 2), payment_method VARCHAR(50), transaction_reference VARCHAR(255), FOREIGN KEY (invoice_id) REFERENCES invoices(invoice_id) );
---
CREATE TABLE noor_knowledge_base (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255) NOT NULL, -- e.g., 'venue', 'supplier', 'cultural', 'legal', 'pricing', 'best_practice'
    topic VARCHAR(255) NOT NULL, -- e.g., 'Al-Salam Hotel', 'Catering Services', 'Wedding Traditions'
    arabic_name VARCHAR(255),
    content TEXT,
    address VARCHAR(255),
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    pricing_yer VARCHAR(255),
    pricing_usd VARCHAR(255),
    verified BOOLEAN DEFAULT FALSE,
    source VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
---
CREATE TABLE children_entertainment_aden (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    arabic_name VARCHAR(255),
    category VARCHAR(255),
    phone_number VARCHAR(255),
    whatsapp_number VARCHAR(255),
    address VARCHAR(255),
    website VARCHAR(255),
    source VARCHAR(255),
    confidence_level VARCHAR(255)
);
---
-- Users Table (assuming a basic structure)
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(20) UNIQUE,
    whatsapp_number VARCHAR(20) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Notification Templates Table
CREATE TABLE notification_templates (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) UNIQUE NOT NULL COMMENT 'A unique name for the template, e.g., event_reminder',
    title_en VARCHAR(255) NOT NULL,
    title_ar VARCHAR(255) NOT NULL,
    body_en TEXT NOT NULL,
    body_ar TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Notification Channels Table
CREATE TABLE notification_channels (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) UNIQUE NOT NULL COMMENT 'e.g., email, sms, push, whatsapp'
);

-- User Notification Preferences Table
CREATE TABLE user_notification_preferences (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    channel_id INT NOT NULL,
    template_id INT NOT NULL,
    is_enabled BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (channel_id) REFERENCES notification_channels(id),
    FOREIGN KEY (template_id) REFERENCES notification_templates(id)
);

-- Notifications Table
CREATE TABLE notifications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    template_id INT NOT NULL,
    channel_id INT NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'pending' COMMENT 'e.g., pending, sent, delivered, read, failed',
    sent_at TIMESTAMP NULL,
    read_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (template_id) REFERENCES notification_templates(id),
    FOREIGN KEY (channel_id) REFERENCES notification_channels(id)
);
---
CREATE TABLE suppliers ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, arabic_name VARCHAR(255), services TEXT, phone VARCHAR(255), whatsapp VARCHAR(255), instagram VARCHAR(255), website VARCHAR(255), address VARCHAR(255), confidence_level VARCHAR(50), pricing_yer VARCHAR(255), pricing_usd VARCHAR(255) );
---
CREATE TABLE events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    event_name VARCHAR(255) NOT NULL,
    event_name_ar VARCHAR(255),
    event_date DATETIME NOT NULL,
    venue_id INT,
    status VARCHAR(50) DEFAULT 'Upcoming', -- Upcoming, In Progress, Completed, Cancelled
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (venue_id) REFERENCES venues(venue_id)
);

CREATE TABLE venues (
    venue_id INT PRIMARY KEY AUTO_INCREMENT,
    venue_name VARCHAR(255) NOT NULL,
    venue_name_ar VARCHAR(255),
    address VARCHAR(255),
    address_ar VARCHAR(255),
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    capacity INT,
    price_yer DECIMAL(10, 2),
    price_usd DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE suppliers (
    supplier_id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_name VARCHAR(255) NOT NULL,
    supplier_name_ar VARCHAR(255),
    service_type VARCHAR(100), -- e.g., Catering, Photography, Sound System
    phone_number VARCHAR(20),
    whatsapp_number VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
---
CREATE TABLE ceo_dashboard_kpis ( id INT PRIMARY KEY AUTO_INCREMENT, kpi_name VARCHAR(255) NOT NULL, kpi_value DECIMAL(18, 2) NOT NULL, kpi_target DECIMAL(18, 2), kpi_category VARCHAR(255) NOT NULL, recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP );
---
CREATE TABLE money_transfer_agents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    agent_name_en VARCHAR(255) NOT NULL,
    agent_name_ar VARCHAR(255),
    service_provider VARCHAR(100) NOT NULL,
    address TEXT,
    phone_number VARCHAR(50),
    whatsapp_number VARCHAR(50)
);
---
CREATE TABLE operational_kpis (
    kpi_id INT PRIMARY KEY AUTO_INCREMENT,
    kpi_name VARCHAR(255) NOT NULL,
    kpi_name_ar VARCHAR(255),
    kpi_category VARCHAR(255) NOT NULL,
    kpi_description TEXT,
    kpi_formula TEXT,
    data_source VARCHAR(255)
);
---
