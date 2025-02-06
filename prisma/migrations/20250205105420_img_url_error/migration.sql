/*
  Warnings:

  - You are about to drop the column `imgurl` on the `Car` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "imgurl",
ADD COLUMN     "img_url" TEXT;
