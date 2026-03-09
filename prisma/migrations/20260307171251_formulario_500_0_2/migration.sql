/*
  Warnings:

  - You are about to drop the column `modo_transporte` on the `formulario_500` table. All the data in the column will be lost.
  - You are about to alter the column `tasa_cambio` on the `formulario_500` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `valor_fob` on the `formulario_500` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `valor_fletes` on the `formulario_500` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `valor_seguros` on the `formulario_500` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `valor_otros_gastos` on the `formulario_500` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `suma_gastos` on the `formulario_500` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `ajuste_valor` on the `formulario_500` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `valor_aduana` on the `formulario_500` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `base_gravable` on the `formulario_500` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `porcentaje_arancel` on the `formulario_500` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `valor_arancel` on the `formulario_500` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `porcentaje_iva` on the `formulario_500` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `valor_iva` on the `formulario_500` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `total_liquidado` on the `formulario_500` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `valor_pagos_anteriores` on the `formulario_500` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `pago_total` on the `formulario_500` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `valor_cuota_usd` on the `formulario_500_items` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `peso_bruto` on the `formulario_500_items` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `peso_neto` on the `formulario_500_items` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `cantidad` on the `formulario_500_items` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - Added the required column `tipo_transporte_id` to the `formulario_500` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "formulario_500" DROP COLUMN "modo_transporte",
ADD COLUMN     "tipo_transporte_id" INTEGER NOT NULL,
ALTER COLUMN "tasa_cambio" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "valor_fob" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "valor_fletes" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "valor_seguros" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "valor_otros_gastos" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "suma_gastos" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "ajuste_valor" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "valor_aduana" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "base_gravable" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "porcentaje_arancel" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "valor_arancel" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "porcentaje_iva" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "valor_iva" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "total_liquidado" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "valor_pagos_anteriores" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "pago_total" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "formulario_500_items" ALTER COLUMN "valor_cuota_usd" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "peso_bruto" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "peso_neto" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "cantidad" SET DATA TYPE DECIMAL(65,30);

-- DropEnum
DROP TYPE "tipo_transporte";

-- CreateTable
CREATE TABLE "tipo_transporte" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "codigo" INTEGER NOT NULL,

    CONSTRAINT "tipo_transporte_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "tipo_transporte_usuario_id_idx" ON "tipo_transporte"("usuario_id");

-- AddForeignKey
ALTER TABLE "tipo_transporte" ADD CONSTRAINT "tipo_transporte_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formulario_500" ADD CONSTRAINT "formulario_500_tipo_transporte_id_fkey" FOREIGN KEY ("tipo_transporte_id") REFERENCES "tipo_transporte"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
