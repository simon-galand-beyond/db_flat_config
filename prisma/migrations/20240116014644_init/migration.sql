-- CreateTable
CREATE TABLE "Voile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Parameter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "pilot" TEXT NOT NULL,
    "voileId" INTEGER NOT NULL,
    CONSTRAINT "Parameter_voileId_fkey" FOREIGN KEY ("voileId") REFERENCES "Voile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
