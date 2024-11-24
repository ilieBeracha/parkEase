/*
  Warnings:

  - You are about to drop the `Generation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Generation" DROP CONSTRAINT "Generation_userId_fkey";

-- DropTable
DROP TABLE "Generation";

-- DropEnum
DROP TYPE "Status";
