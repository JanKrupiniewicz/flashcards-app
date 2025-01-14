/*
  Warnings:

  - You are about to drop the `flashCardSet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "flashCardSet";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "FlashCardSet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "FlashCardSet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FlashCard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "front" TEXT NOT NULL,
    "back" TEXT NOT NULL,
    "flashCardSetId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "FlashCard_flashCardSetId_fkey" FOREIGN KEY ("flashCardSetId") REFERENCES "FlashCardSet" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_FlashCard" ("back", "createdAt", "flashCardSetId", "front", "id", "updatedAt") SELECT "back", "createdAt", "flashCardSetId", "front", "id", "updatedAt" FROM "FlashCard";
DROP TABLE "FlashCard";
ALTER TABLE "new_FlashCard" RENAME TO "FlashCard";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
