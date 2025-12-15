CREATE TABLE `addOns` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`nameAr` varchar(255),
	`description` text,
	`descriptionAr` text,
	`addOnCategory` enum('premium','entertainment','wellness','cultural','sustainability') NOT NULL,
	`priceUsd` decimal(10,2) NOT NULL,
	`priceType` enum('flat','per_guest','per_hour') NOT NULL DEFAULT 'flat',
	`imageUrl` text,
	`icon` varchar(64),
	`isActive` boolean DEFAULT true,
	`sortOrder` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `addOns_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `bookings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`bookingCode` varchar(32) NOT NULL,
	`quoteId` int,
	`eventId` int,
	`clientId` int,
	`clientName` varchar(255) NOT NULL,
	`clientEmail` varchar(320) NOT NULL,
	`clientPhone` varchar(32) NOT NULL,
	`clientCompany` varchar(255),
	`eventType` varchar(64) NOT NULL,
	`eventTitle` varchar(255) NOT NULL,
	`eventDate` timestamp NOT NULL,
	`eventEndDate` timestamp,
	`guestCount` int NOT NULL,
	`venueType` varchar(64),
	`venueAddress` text,
	`packageTier` enum('essential','silver','gold','diamond'),
	`cateringLevel` varchar(64),
	`decorationLevel` varchar(64),
	`addOns` json,
	`specialRequests` text,
	`totalUsd` decimal(10,2) NOT NULL,
	`depositUsd` decimal(10,2),
	`depositPaidAt` timestamp,
	`balanceUsd` decimal(10,2),
	`balancePaidAt` timestamp,
	`bookingStatus` enum('pending','confirmed','deposit_paid','in_progress','completed','cancelled') NOT NULL DEFAULT 'pending',
	`confirmedAt` timestamp,
	`cancelledAt` timestamp,
	`cancellationReason` text,
	`coordinatorId` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `bookings_id` PRIMARY KEY(`id`),
	CONSTRAINT `bookings_bookingCode_unique` UNIQUE(`bookingCode`)
);
--> statement-breakpoint
CREATE TABLE `emailTemplates` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(64) NOT NULL,
	`subject` varchar(255) NOT NULL,
	`subjectAr` varchar(255),
	`bodyHtml` text NOT NULL,
	`bodyHtmlAr` text,
	`bodyText` text,
	`bodyTextAr` text,
	`variables` json,
	`isActive` boolean DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `emailTemplates_id` PRIMARY KEY(`id`),
	CONSTRAINT `emailTemplates_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `notifications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int,
	`notificationType` enum('booking_confirmation','quote_sent','payment_received','event_reminder','inquiry_received') NOT NULL,
	`title` varchar(255) NOT NULL,
	`titleAr` varchar(255),
	`message` text NOT NULL,
	`messageAr` text,
	`bookingId` int,
	`quoteId` int,
	`eventId` int,
	`emailSent` boolean DEFAULT false,
	`emailSentAt` timestamp,
	`emailError` text,
	`isRead` boolean DEFAULT false,
	`readAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `notifications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` int AUTO_INCREMENT NOT NULL,
	`sku` varchar(64) NOT NULL,
	`name` varchar(255) NOT NULL,
	`nameAr` varchar(255),
	`description` text,
	`descriptionAr` text,
	`category` enum('stationery','clothing','bags','promotional','accessories') NOT NULL,
	`subcategory` varchar(64),
	`priceUsd` decimal(10,2) NOT NULL,
	`costUsd` decimal(10,2),
	`imageUrl` text,
	`images` json,
	`stockQuantity` int DEFAULT 0,
	`minOrderQuantity` int DEFAULT 1,
	`isEcoFriendly` boolean DEFAULT false,
	`isActive` boolean DEFAULT true,
	`isFeatured` boolean DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `products_id` PRIMARY KEY(`id`),
	CONSTRAINT `products_sku_unique` UNIQUE(`sku`)
);
--> statement-breakpoint
CREATE TABLE `quotes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`quoteNumber` varchar(32) NOT NULL,
	`clientId` int,
	`clientName` varchar(255),
	`clientEmail` varchar(320),
	`clientPhone` varchar(32),
	`clientCompany` varchar(255),
	`eventType` varchar(64) NOT NULL,
	`eventDate` timestamp,
	`guestCount` int NOT NULL,
	`venueType` varchar(64),
	`cateringLevel` varchar(64),
	`decorationLevel` varchar(64),
	`addOns` json,
	`baseCostUsd` decimal(10,2),
	`addOnsCostUsd` decimal(10,2),
	`subtotalUsd` decimal(10,2),
	`taxUsd` decimal(10,2),
	`totalUsd` decimal(10,2),
	`displayCurrency` varchar(8) DEFAULT 'USD',
	`exchangeRateYer` decimal(10,2) DEFAULT '1700',
	`exchangeRateSar` decimal(10,4) DEFAULT '3.75',
	`expectedRevenue` decimal(10,2),
	`expectedRoi` decimal(5,2),
	`sustainabilityScore` int,
	`pdfUrl` text,
	`pdfGeneratedAt` timestamp,
	`quoteStatus` enum('draft','sent','viewed','accepted','expired') NOT NULL DEFAULT 'draft',
	`validUntil` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `quotes_id` PRIMARY KEY(`id`),
	CONSTRAINT `quotes_quoteNumber_unique` UNIQUE(`quoteNumber`)
);
--> statement-breakpoint
CREATE TABLE `suppliers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`companyName` varchar(255) NOT NULL,
	`companyNameAr` varchar(255),
	`contactName` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(32) NOT NULL,
	`supplierCategory` enum('hotels','catering','decoration','photography','transportation','venues') NOT NULL,
	`services` json,
	`address` text,
	`city` varchar(64),
	`isEcoCertified` boolean DEFAULT false,
	`certifications` json,
	`sustainabilityPledge` boolean DEFAULT false,
	`supplierStatus` enum('pending','approved','rejected','suspended') NOT NULL DEFAULT 'pending',
	`approvedAt` timestamp,
	`approvedBy` int,
	`rating` decimal(3,2),
	`reviewCount` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `suppliers_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `volunteers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(32) NOT NULL,
	`eventId` varchar(64),
	`eventName` varchar(255),
	`tshirtSize` enum('S','M','L','XL','XXL'),
	`volunteerStatus` enum('registered','confirmed','attended','no_show') NOT NULL DEFAULT 'registered',
	`confirmedAt` timestamp,
	`attendedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `volunteers_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `eventPackages` MODIFY COLUMN `eventType` enum('corporate','wedding','conference','government','tradeshow','educational','entertainment','kids','healthcare','banking','ngo','construction','energy','travel','condolences') NOT NULL;--> statement-breakpoint
ALTER TABLE `events` MODIFY COLUMN `eventType` enum('corporate','wedding','conference','government','tradeshow','educational','entertainment','kids','healthcare','banking','ngo','construction','energy','travel','condolences') NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiries` MODIFY COLUMN `eventType` enum('corporate','wedding','conference','government','tradeshow','educational','entertainment','kids','healthcare','banking','ngo','construction','energy','travel','condolences');--> statement-breakpoint
ALTER TABLE `eventPackages` ADD `tier` enum('essential','silver','gold','diamond') NOT NULL;--> statement-breakpoint
ALTER TABLE `eventPackages` ADD `maxGuests` int;--> statement-breakpoint
ALTER TABLE `eventPackages` ADD `duration` varchar(64);--> statement-breakpoint
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_quoteId_quotes_id_fk` FOREIGN KEY (`quoteId`) REFERENCES `quotes`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_eventId_events_id_fk` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_clientId_users_id_fk` FOREIGN KEY (`clientId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_coordinatorId_users_id_fk` FOREIGN KEY (`coordinatorId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_bookingId_bookings_id_fk` FOREIGN KEY (`bookingId`) REFERENCES `bookings`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_quoteId_quotes_id_fk` FOREIGN KEY (`quoteId`) REFERENCES `quotes`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_eventId_events_id_fk` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `quotes` ADD CONSTRAINT `quotes_clientId_users_id_fk` FOREIGN KEY (`clientId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `suppliers` ADD CONSTRAINT `suppliers_approvedBy_users_id_fk` FOREIGN KEY (`approvedBy`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;