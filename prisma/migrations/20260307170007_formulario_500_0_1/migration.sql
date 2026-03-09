/*
  Warnings:

  - The `modo_transporte` column on the `formulario_500` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `tipo_importacion` on the `formulario_500_items` table. All the data in the column will be lost.
  - Added the required column `usuario_id` to the `ciudad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `departamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `pais` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "tipo_transporte" AS ENUM ('MARITIMO', 'AEREO', 'TERRESTRE', 'FLUVIAL');

-- DropIndex
DROP INDEX "departamento_pais_id_idx";

-- DropIndex
DROP INDEX "formulario_500_items_formulario_id_idx";

-- AlterTable
ALTER TABLE "ciudad" ADD COLUMN     "usuario_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "departamento" ADD COLUMN     "usuario_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "formulario_500" DROP COLUMN "modo_transporte",
ADD COLUMN     "modo_transporte" "tipo_transporte";

-- AlterTable
ALTER TABLE "formulario_500_items" DROP COLUMN "tipo_importacion",
ADD COLUMN     "tipo_importacion_id" INTEGER;

-- AlterTable
ALTER TABLE "pais" ADD COLUMN     "usuario_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "tipo_importacion" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "tipo_importacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_embalaje" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "codigo" INTEGER NOT NULL,

    CONSTRAINT "tipo_embalaje_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unidad_medida" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "unidad_medida_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "tipo_importacion_usuario_id_idx" ON "tipo_importacion"("usuario_id");

-- CreateIndex
CREATE INDEX "tipo_embalaje_usuario_id_idx" ON "tipo_embalaje"("usuario_id");

-- CreateIndex
CREATE INDEX "unidad_medida_usuario_id_idx" ON "unidad_medida"("usuario_id");

-- CreateIndex
CREATE INDEX "ciudad_departamento_id_usuario_id_idx" ON "ciudad"("departamento_id", "usuario_id");

-- CreateIndex
CREATE INDEX "departamento_pais_id_usuario_id_idx" ON "departamento"("pais_id", "usuario_id");

-- CreateIndex
CREATE INDEX "formulario_500_items_forma_pago_importacion_pais_origen_uni_idx" ON "formulario_500_items"("forma_pago_importacion", "pais_origen", "unidad_fisica", "codigo_embalaje", "tipo_importacion_id", "formulario_id");

-- CreateIndex
CREATE INDEX "pais_usuario_id_idx" ON "pais"("usuario_id");

-- AddForeignKey
ALTER TABLE "tipo_importacion" ADD CONSTRAINT "tipo_importacion_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tipo_embalaje" ADD CONSTRAINT "tipo_embalaje_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unidad_medida" ADD CONSTRAINT "unidad_medida_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pais" ADD CONSTRAINT "pais_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departamento" ADD CONSTRAINT "departamento_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ciudad" ADD CONSTRAINT "ciudad_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formulario_500_items" ADD CONSTRAINT "formulario_500_items_tipo_importacion_id_fkey" FOREIGN KEY ("tipo_importacion_id") REFERENCES "tipo_importacion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formulario_500_items" ADD CONSTRAINT "formulario_500_items_codigo_embalaje_fkey" FOREIGN KEY ("codigo_embalaje") REFERENCES "tipo_embalaje"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formulario_500_items" ADD CONSTRAINT "formulario_500_items_unidad_fisica_fkey" FOREIGN KEY ("unidad_fisica") REFERENCES "unidad_medida"("id") ON DELETE SET NULL ON UPDATE CASCADE;
