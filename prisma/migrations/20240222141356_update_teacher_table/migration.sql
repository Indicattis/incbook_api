/*
  Warnings:

  - Added the required column `teacher_description` to the `CURSED_TEACHERS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacher_experience` to the `CURSED_TEACHERS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacher_gender` to the `CURSED_TEACHERS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacher_image` to the `CURSED_TEACHERS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacher_status` to the `CURSED_TEACHERS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CURSED_TEACHERS` ADD COLUMN `teacher_description` VARCHAR(191) NOT NULL,
    ADD COLUMN `teacher_experience` VARCHAR(191) NOT NULL,
    ADD COLUMN `teacher_gender` VARCHAR(191) NOT NULL,
    ADD COLUMN `teacher_image` VARCHAR(191) NOT NULL,
    ADD COLUMN `teacher_status` INTEGER NOT NULL;
