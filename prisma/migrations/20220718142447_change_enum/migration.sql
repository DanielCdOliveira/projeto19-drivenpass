/*
  Warnings:

  - The values [cnh,rg] on the enum `DocumentTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DocumentTypes_new" AS ENUM ('CNH', 'RG');
ALTER TABLE "documents" ALTER COLUMN "documentType" TYPE "DocumentTypes_new" USING ("documentType"::text::"DocumentTypes_new");
ALTER TYPE "DocumentTypes" RENAME TO "DocumentTypes_old";
ALTER TYPE "DocumentTypes_new" RENAME TO "DocumentTypes";
DROP TYPE "DocumentTypes_old";
COMMIT;
