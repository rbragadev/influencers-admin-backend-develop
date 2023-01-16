-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `user_type_id` INTEGER NOT NULL,

    UNIQUE INDEX `email`(`email`),
    INDEX `FK_user_type_id`(`user_type_id`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_type` (
    `user_type_id` INTEGER NOT NULL,
    `type_name` VARCHAR(50) NOT NULL,
    `privilege` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`user_type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `partner_evolution_log` (
    `partner_id` INTEGER NOT NULL,
    `previous_level_id` INTEGER NULL,
    `new_level_id` INTEGER NULL,
    `previous_partner_status` VARCHAR(50) NULL,
    `new_partner_status` VARCHAR(50) NULL,
    `update_date` DATE NULL,
    `update_type` VARCHAR(50) NULL,
    `user_id` INTEGER NOT NULL,

    INDEX `FK_user_id`(`user_id`),
    PRIMARY KEY (`partner_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `partner` (
    `partner_id` INTEGER NOT NULL,
    `partner_level_id` INTEGER NOT NULL,
    `creation_date` DATE NOT NULL,
    `partner_first_name` VARCHAR(50) NOT NULL,
    `partner_last_name` VARCHAR(50) NOT NULL,
    `partner_cpf_number` FLOAT NOT NULL,
    `partner_email` VARCHAR(50) NOT NULL,
    `partner_phone` FLOAT NOT NULL,
    `partner_password` VARCHAR(50) NOT NULL,
    `partner_status` VARCHAR(50) NOT NULL,
    `partner_adress_street_name` VARCHAR(50) NOT NULL,
    `partner_adress_street_number` INTEGER NOT NULL,
    `partner_adress_street_complement` VARCHAR(50) NOT NULL,
    `partner_adress_neighborhood` VARCHAR(50) NOT NULL,
    `partner_adress_city` VARCHAR(50) NOT NULL,
    `partner_adress_state` VARCHAR(50) NOT NULL,
    `partner_adress_country` VARCHAR(50) NOT NULL DEFAULT 'Brazil',
    `partner_adress_postal_code` FLOAT NOT NULL,
    `partner_avatar` VARCHAR(50) NOT NULL,

    INDEX `FK_partner_level_id`(`partner_level_id`),
    PRIMARY KEY (`partner_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `partner_level` (
    `partner_level_id` INTEGER NOT NULL,
    `level_name` VARCHAR(50) NOT NULL,
    `update_type` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`partner_level_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `FK_user_type_id` FOREIGN KEY (`user_type_id`) REFERENCES `user_type`(`user_type_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `partner_evolution_log` ADD CONSTRAINT `FK_partner_id` FOREIGN KEY (`partner_id`) REFERENCES `partner`(`partner_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `partner_evolution_log` ADD CONSTRAINT `FK_user_id` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `partner` ADD CONSTRAINT `FK_partner_level_id` FOREIGN KEY (`partner_level_id`) REFERENCES `partner_level`(`partner_level_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
