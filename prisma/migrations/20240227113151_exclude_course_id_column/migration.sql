/*
  Warnings:

  - You are about to drop the column `course_id` on the `INC_PURCHASES` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `INC_PURCHASES` DROP FOREIGN KEY `INC_PURCHASES_course_id_fkey`;

-- AlterTable
ALTER TABLE `INC_PURCHASES` DROP COLUMN `course_id`;
