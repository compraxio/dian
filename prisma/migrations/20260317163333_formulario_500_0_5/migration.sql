/*
  Warnings:

  - Added the required column `nombre_formulario` to the `formulario_500` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "formulario_500" ADD COLUMN     "nombre_formulario" TEXT NOT NULL;
