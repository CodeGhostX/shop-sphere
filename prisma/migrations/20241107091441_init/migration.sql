/*
  Warnings:

  - The values [HOME_FURNITURE,BEAUTY_PERSONAL_CARE,SPORTS_OUTDOOR,BOOKS_MEDIA] on the enum `ProductCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- AlterEnum
BEGIN;
CREATE TYPE "ProductCategory_new" AS ENUM ('ELECTRONICS', 'FASHION', 'HOME', 'BEAUTY', 'SPORTS', 'BOOKS');
ALTER TABLE "Product" ALTER COLUMN "category" TYPE "ProductCategory_new" USING ("category"::text::"ProductCategory_new");
ALTER TYPE "ProductCategory" RENAME TO "ProductCategory_old";
ALTER TYPE "ProductCategory_new" RENAME TO "ProductCategory";
DROP TYPE "ProductCategory_old";
COMMIT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
