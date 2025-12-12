CREATE TABLE `eventMilestones` (
	`id` int AUTO_INCREMENT NOT NULL,
	`eventId` int,
	`title` varchar(255) NOT NULL,
	`titleAr` varchar(255),
	`description` text,
	`dueDate` timestamp,
	`completedAt` timestamp,
	`isCompleted` boolean DEFAULT false,
	`orderNum` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `eventMilestones_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `eventPackages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`nameAr` varchar(255),
	`eventType` enum('corporate','wedding','conference','government','tradeshow','educational','entertainment') NOT NULL,
	`description` text,
	`descriptionAr` text,
	`basePriceUsd` decimal(10,2),
	`perGuestPriceUsd` decimal(10,2),
	`features` json,
	`isActive` boolean DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `eventPackages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `events` (
	`id` int AUTO_INCREMENT NOT NULL,
	`clientId` int,
	`title` varchar(255) NOT NULL,
	`titleAr` varchar(255),
	`eventType` enum('corporate','wedding','conference','government','tradeshow','educational','entertainment') NOT NULL,
	`description` text,
	`descriptionAr` text,
	`eventDate` timestamp,
	`endDate` timestamp,
	`venue` varchar(255),
	`venueType` enum('indoor','outdoor','hotel','beach'),
	`address` text,
	`guestCount` int,
	`cateringLevel` enum('basic','standard','premium','luxury'),
	`decorationLevel` enum('minimal','standard','elegant','luxury'),
	`estimatedCostUsd` decimal(10,2),
	`finalCostUsd` decimal(10,2),
	`depositPaid` decimal(10,2),
	`status` enum('inquiry','confirmed','planning','in_progress','completed','cancelled') NOT NULL DEFAULT 'inquiry',
	`progress` int DEFAULT 0,
	`notes` text,
	`attachments` json,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `events_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `inquiries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(32),
	`subject` varchar(255),
	`message` text NOT NULL,
	`eventType` enum('corporate','wedding','conference','government','tradeshow','educational','entertainment'),
	`preferredDate` timestamp,
	`guestCount` int,
	`status` enum('new','contacted','converted','closed') NOT NULL DEFAULT 'new',
	`assignedTo` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `inquiries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `role` enum('user','admin','staff','client') NOT NULL DEFAULT 'user';--> statement-breakpoint
ALTER TABLE `users` ADD `phone` varchar(32);--> statement-breakpoint
ALTER TABLE `users` ADD `company` varchar(255);--> statement-breakpoint
ALTER TABLE `eventMilestones` ADD CONSTRAINT `eventMilestones_eventId_events_id_fk` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `events` ADD CONSTRAINT `events_clientId_users_id_fk` FOREIGN KEY (`clientId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `inquiries` ADD CONSTRAINT `inquiries_assignedTo_users_id_fk` FOREIGN KEY (`assignedTo`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;