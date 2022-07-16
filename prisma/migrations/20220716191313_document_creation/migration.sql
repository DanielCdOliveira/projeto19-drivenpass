-- CreateEnum
CREATE TYPE "DocumentTypes" AS ENUM ('cnh', 'rg');

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "expeditionDate" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "registerNumber" TEXT NOT NULL,
    "expeditionAgency" TEXT NOT NULL,
    "documentType" "DocumentTypes" NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "documents_documentType_userId_key" ON "documents"("documentType", "userId");

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
