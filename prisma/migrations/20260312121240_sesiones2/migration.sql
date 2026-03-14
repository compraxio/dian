/*
  Warnings:

  - Made the column `contrasena` on table `usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "avatar" TEXT,
ALTER COLUMN "contrasena" SET NOT NULL;
