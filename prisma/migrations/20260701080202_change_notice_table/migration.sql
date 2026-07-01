/*
  Warnings:

  - Added the required column `title` to the `Notice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Notice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notice" ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
