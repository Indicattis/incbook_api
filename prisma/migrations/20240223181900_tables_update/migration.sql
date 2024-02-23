/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `INC_CLASSES` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `INC_COURSES` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[student_email]` on the table `INC_STUDENTS` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[student_phone]` on the table `INC_STUDENTS` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[teacher_email]` on the table `INC_TEACHERS` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[teacher_phone]` on the table `INC_TEACHERS` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[teacher_register]` on the table `INC_TEACHERS` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `purchase_updated_at` to the `INC_PURCHASES` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `INC_PURCHASES` ADD COLUMN `purchase_date_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `purchase_updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `INC_STUDENTS` ADD COLUMN `student_country` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `INC_CLASSES_id_key` ON `INC_CLASSES`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `INC_COURSES_id_key` ON `INC_COURSES`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `INC_STUDENTS_student_email_key` ON `INC_STUDENTS`(`student_email`);

-- CreateIndex
CREATE UNIQUE INDEX `INC_STUDENTS_student_phone_key` ON `INC_STUDENTS`(`student_phone`);

-- CreateIndex
CREATE UNIQUE INDEX `INC_TEACHERS_teacher_email_key` ON `INC_TEACHERS`(`teacher_email`);

-- CreateIndex
CREATE UNIQUE INDEX `INC_TEACHERS_teacher_phone_key` ON `INC_TEACHERS`(`teacher_phone`);

-- CreateIndex
CREATE UNIQUE INDEX `INC_TEACHERS_teacher_register_key` ON `INC_TEACHERS`(`teacher_register`);
