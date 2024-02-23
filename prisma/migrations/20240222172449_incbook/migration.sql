/*
  Warnings:

  - You are about to drop the `CURSED_BOOKCASES` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CURSED_CLASSES` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CURSED_COURSES` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CURSED_PURCHASES` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CURSED_STUDENTS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CURSED_TEACHERS` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `CURSED_BOOKCASES` DROP FOREIGN KEY `CURSED_BOOKCASES_course_id_fkey`;

-- DropForeignKey
ALTER TABLE `CURSED_BOOKCASES` DROP FOREIGN KEY `CURSED_BOOKCASES_purchase_id_fkey`;

-- DropForeignKey
ALTER TABLE `CURSED_BOOKCASES` DROP FOREIGN KEY `CURSED_BOOKCASES_student_id_fkey`;

-- DropForeignKey
ALTER TABLE `CURSED_CLASSES` DROP FOREIGN KEY `CURSED_CLASSES_course_id_fkey`;

-- DropForeignKey
ALTER TABLE `CURSED_COURSES` DROP FOREIGN KEY `CURSED_COURSES_teacher_id_fkey`;

-- DropForeignKey
ALTER TABLE `CURSED_PURCHASES` DROP FOREIGN KEY `CURSED_PURCHASES_course_id_fkey`;

-- DropForeignKey
ALTER TABLE `CURSED_PURCHASES` DROP FOREIGN KEY `CURSED_PURCHASES_student_id_fkey`;

-- DropTable
DROP TABLE `CURSED_BOOKCASES`;

-- DropTable
DROP TABLE `CURSED_CLASSES`;

-- DropTable
DROP TABLE `CURSED_COURSES`;

-- DropTable
DROP TABLE `CURSED_PURCHASES`;

-- DropTable
DROP TABLE `CURSED_STUDENTS`;

-- DropTable
DROP TABLE `CURSED_TEACHERS`;

-- CreateTable
CREATE TABLE `INC_STUDENTS` (
    `id` VARCHAR(191) NOT NULL,
    `student_name` VARCHAR(191) NOT NULL,
    `student_email` VARCHAR(191) NOT NULL,
    `student_password` VARCHAR(191) NOT NULL,
    `student_phone` VARCHAR(191) NOT NULL,
    `student_genre` VARCHAR(191) NOT NULL,
    `student_birthday` DATETIME(3) NOT NULL,
    `student_status` INTEGER NOT NULL DEFAULT 1,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `INC_COURSES` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_name` VARCHAR(191) NOT NULL,
    `course_price` DECIMAL(10, 2) NOT NULL,
    `course_description` VARCHAR(191) NOT NULL,
    `course_offer` INTEGER NULL,
    `course_time` INTEGER NULL,
    `teacher_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `INC_CLASSES` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `class_name` VARCHAR(191) NOT NULL,
    `class_description` VARCHAR(191) NOT NULL,
    `class_time` INTEGER NULL,
    `class_video` VARCHAR(191) NOT NULL,
    `course_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `INC_TEACHERS` (
    `id` VARCHAR(191) NOT NULL,
    `teacher_name` VARCHAR(191) NOT NULL,
    `teacher_email` VARCHAR(191) NOT NULL,
    `teacher_password` VARCHAR(191) NOT NULL,
    `teacher_phone` VARCHAR(191) NOT NULL,
    `teacher_register` VARCHAR(191) NOT NULL,
    `teacher_education` VARCHAR(191) NOT NULL,
    `teacher_experience` VARCHAR(191) NOT NULL,
    `teacher_description` VARCHAR(191) NOT NULL,
    `teacher_gender` VARCHAR(191) NOT NULL,
    `teacher_image` VARCHAR(191) NOT NULL,
    `teacher_status` INTEGER NOT NULL DEFAULT 1,
    `teacher_birthday` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `INC_BOOKCASES` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_id` INTEGER NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,
    `purchase_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `INC_PURCHASES` (
    `id` VARCHAR(191) NOT NULL,
    `purchase_method` VARCHAR(191) NOT NULL,
    `purchase_price` DECIMAL(10, 2) NOT NULL,
    `purchade_status` INTEGER NOT NULL DEFAULT 0,
    `course_id` INTEGER NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `INC_COURSES` ADD CONSTRAINT `INC_COURSES_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `INC_TEACHERS`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `INC_CLASSES` ADD CONSTRAINT `INC_CLASSES_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `INC_COURSES`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `INC_BOOKCASES` ADD CONSTRAINT `INC_BOOKCASES_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `INC_COURSES`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `INC_BOOKCASES` ADD CONSTRAINT `INC_BOOKCASES_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `INC_STUDENTS`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `INC_BOOKCASES` ADD CONSTRAINT `INC_BOOKCASES_purchase_id_fkey` FOREIGN KEY (`purchase_id`) REFERENCES `INC_PURCHASES`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `INC_PURCHASES` ADD CONSTRAINT `INC_PURCHASES_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `INC_COURSES`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `INC_PURCHASES` ADD CONSTRAINT `INC_PURCHASES_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `INC_STUDENTS`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
