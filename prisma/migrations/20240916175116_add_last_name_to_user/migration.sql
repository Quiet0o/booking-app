-- DropIndex
DROP INDEX `User_username_key` ON `User`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `lastname` VARCHAR(191) NULL;
