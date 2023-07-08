/*
  Warnings:

  - You are about to drop the column `eventsId` on the `Participants` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Events" ALTER COLUMN "description" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Participants" DROP COLUMN "eventsId";
