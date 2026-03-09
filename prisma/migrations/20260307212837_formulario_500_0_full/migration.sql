/*
  Warnings:

  - You are about to drop the column `tipo_transporte_id` on the `formulario_500` table. All the data in the column will be lost.
  - The `anio_declaracion_exportacion` column on the `formulario_500` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `anio_declaracion` column on the `formulario_500` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `tipo_importacion_id` on the `formulario_500_items` table. All the data in the column will be lost.
  - You are about to drop the `ciudad` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `departamento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pais` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipo_embalaje` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipo_importacion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipo_transporte` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `unidad_medida` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ciudad" DROP CONSTRAINT "ciudad_departamento_id_fkey";

-- DropForeignKey
ALTER TABLE "ciudad" DROP CONSTRAINT "ciudad_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "departamento" DROP CONSTRAINT "departamento_pais_id_fkey";

-- DropForeignKey
ALTER TABLE "departamento" DROP CONSTRAINT "departamento_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "formulario_500" DROP CONSTRAINT "formulario_500_tipo_transporte_id_fkey";

-- DropForeignKey
ALTER TABLE "formulario_500_items" DROP CONSTRAINT "formulario_500_items_codigo_embalaje_fkey";

-- DropForeignKey
ALTER TABLE "formulario_500_items" DROP CONSTRAINT "formulario_500_items_formulario_id_fkey";

-- DropForeignKey
ALTER TABLE "formulario_500_items" DROP CONSTRAINT "formulario_500_items_tipo_importacion_id_fkey";

-- DropForeignKey
ALTER TABLE "formulario_500_items" DROP CONSTRAINT "formulario_500_items_unidad_fisica_fkey";

-- DropForeignKey
ALTER TABLE "pais" DROP CONSTRAINT "pais_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "tipo_embalaje" DROP CONSTRAINT "tipo_embalaje_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "tipo_importacion" DROP CONSTRAINT "tipo_importacion_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "tipo_transporte" DROP CONSTRAINT "tipo_transporte_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "unidad_medida" DROP CONSTRAINT "unidad_medida_usuario_id_fkey";

-- DropIndex
DROP INDEX "formulario_500_usuario_id_estado_tipo_formulario_fecha_de_c_idx";

-- DropIndex
DROP INDEX "formulario_500_items_forma_pago_importacion_pais_origen_uni_idx";

-- AlterTable
ALTER TABLE "formulario_500" DROP COLUMN "tipo_transporte_id",
ADD COLUMN     "modo_transporte" INTEGER,
DROP COLUMN "anio_declaracion_exportacion",
ADD COLUMN     "anio_declaracion_exportacion" INTEGER,
DROP COLUMN "anio_declaracion",
ADD COLUMN     "anio_declaracion" INTEGER;

-- AlterTable
ALTER TABLE "formulario_500_items" DROP COLUMN "tipo_importacion_id",
ADD COLUMN     "tipo_importacion" INTEGER;

-- DropTable
DROP TABLE "ciudad";

-- DropTable
DROP TABLE "departamento";

-- DropTable
DROP TABLE "pais";

-- DropTable
DROP TABLE "tipo_embalaje";

-- DropTable
DROP TABLE "tipo_importacion";

-- DropTable
DROP TABLE "tipo_transporte";

-- DropTable
DROP TABLE "unidad_medida";

-- CreateIndex
CREATE INDEX "formulario_500_items_forma_pago_importacion_pais_origen_uni_idx" ON "formulario_500_items"("forma_pago_importacion", "pais_origen", "unidad_fisica", "codigo_embalaje", "formulario_id");

-- AddForeignKey
ALTER TABLE "formulario_500_items" ADD CONSTRAINT "formulario_500_items_formulario_id_fkey" FOREIGN KEY ("formulario_id") REFERENCES "formulario_500"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
