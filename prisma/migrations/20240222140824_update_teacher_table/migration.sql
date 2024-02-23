/*
  Warnings:

  - Added the required column `teacher_birthday` to the `CURSED_TEACHERS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacher_education` to the `CURSED_TEACHERS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacher_phone` to the `CURSED_TEACHERS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacher_register` to the `CURSED_TEACHERS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CURSED_TEACHERS` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `teacher_birthday` DATETIME(3) NOT NULL,
    ADD COLUMN `teacher_education` VARCHAR(191) NOT NULL,
    ADD COLUMN `teacher_phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `teacher_register` VARCHAR(191) NOT NULL;
