-- CreateEnum
CREATE TYPE "roles" AS ENUM ('ADMIN', 'APRENDIZ');

-- CreateEnum
CREATE TYPE "estados" AS ENUM ('BORRADOR', 'EN_PROGRESO', 'TERMINADO');

-- CreateEnum
CREATE TYPE "tipo_formulario" AS ENUM ('FORM500', 'FORM510');

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nombre_usuario" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "rol" "roles" NOT NULL DEFAULT 'APRENDIZ',
    "fecha_de_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ultima_sesion" TIMESTAMP(3),

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documento" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "formulario_id" INTEGER,
    "tipo_documento" TEXT NOT NULL,
    "nombre_archivo" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "fecha_subida" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "documento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "formulario_500" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "tipo_formulario" "tipo_formulario" NOT NULL,
    "estado" "estados" NOT NULL DEFAULT 'BORRADOR',
    "fecha_de_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_actualizacion" TIMESTAMP(3) NOT NULL,
    "progreso" INTEGER,
    "paso_actual" INTEGER,
    "checklist" JSONB NOT NULL,
    "numero_formulario" INTEGER,
    "clase_importador" INTEGER,
    "tipo_declaracion" INTEGER,
    "codigo" INTEGER,
    "numero_formulario_anterior" INTEGER,
    "anio_declaracion_exportacion" INTEGER,
    "declaracion_exportacion" INTEGER,
    "anio_declaracion" INTEGER,
    "codigo_direccion_seccional" INTEGER,
    "codigo_direccion_seccional_exportacion" INTEGER,
    "nit_importador" TEXT,
    "dv_importador" INTEGER,
    "razon_social_importador" TEXT,
    "direccion_seccional_importador" INTEGER,
    "direccion_importador" TEXT,
    "telefono_importador" TEXT,
    "codigo_departamento" INTEGER,
    "codigo_municipio" INTEGER,
    "nit_secundario" TEXT,
    "dv_secundario" INTEGER,
    "razon_social_declarante" TEXT,
    "tipo_usuario" INTEGER,
    "codigo_usuario" TEXT,
    "documento_declarante" TEXT,
    "nombre_declarante" TEXT,
    "nombre_exportador" TEXT,
    "ciudad_exportador" TEXT,
    "pais_exportador" INTEGER,
    "direccion_exportador" TEXT,
    "email_exportador" TEXT,
    "pais_procedencia" INTEGER,
    "lugar_ingreso_mercancias" INTEGER,
    "codigo_deposito" INTEGER,
    "manifiesto_carga" TEXT,
    "fecha_llegada" TIMESTAMP(3),
    "documento_transporte" TEXT,
    "numero_factura" TEXT,
    "fecha_factura" TIMESTAMP(3),
    "modo_transporte" INTEGER,
    "bandera_transporte" INTEGER,
    "destino_mercancia" INTEGER,
    "empresa_transportadora" TEXT,
    "tasa_cambio" DECIMAL(65,30),
    "valor_fob" DECIMAL(65,30),
    "valor_fletes" DECIMAL(65,30),
    "valor_seguros" DECIMAL(65,30),
    "valor_otros_gastos" DECIMAL(65,30),
    "suma_gastos" DECIMAL(65,30),
    "ajuste_valor" DECIMAL(65,30),
    "valor_aduana" DECIMAL(65,30),
    "base_gravable" DECIMAL(65,30),
    "porcentaje_arancel" DECIMAL(65,30),
    "valor_arancel" DECIMAL(65,30),
    "porcentaje_iva" DECIMAL(65,30),
    "valor_iva" DECIMAL(65,30),
    "total_liquidado" DECIMAL(65,30),
    "valor_pagos_anteriores" DECIMAL(65,30),
    "recibo_pago_anterior" TEXT,
    "fecha_pago_anterior" TIMESTAMP(3),
    "pago_total" DECIMAL(65,30),
    "adhesivo_banco" TEXT,
    "sello_banco" TEXT,
    "actuacion_aduanera" TEXT,
    "espacio_ministerio" TEXT,
    "numero_aceptacion" TEXT,
    "fecha_aceptacion" TIMESTAMP(3),
    "numero_levante" TEXT,
    "fecha_levante" TIMESTAMP(3),
    "nombre_funcionario" TEXT,
    "documento_funcionario" TEXT,

    CONSTRAINT "formulario_500_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "formulario_500_items" (
    "id" SERIAL NOT NULL,
    "formulario_id" INTEGER NOT NULL,
    "subpartida_arancelaria" TEXT,
    "codigo_complementario" TEXT,
    "codigo_suplementario" TEXT,
    "modalidad" INTEGER,
    "numero_cuotas" INTEGER,
    "valor_cuota_usd" DECIMAL(65,30),
    "periodicidad_pago" TEXT,
    "pais_origen" INTEGER,
    "codigo_acuerdo" INTEGER,
    "forma_pago_importacion" INTEGER,
    "tipo_importacion" INTEGER,
    "pais_compra" INTEGER,
    "peso_bruto" DECIMAL(65,30),
    "peso_neto" DECIMAL(65,30),
    "codigo_embalaje" INTEGER,
    "numero_bultos" INTEGER,
    "subpartidas" TEXT,
    "unidad_fisica" INTEGER,
    "cantidad" DECIMAL(65,30),
    "descripcion_mercancia" TEXT,

    CONSTRAINT "formulario_500_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_correo_key" ON "usuario"("correo");

-- CreateIndex
CREATE INDEX "usuario_rol_idx" ON "usuario"("rol");

-- CreateIndex
CREATE INDEX "documento_usuario_id_formulario_id_tipo_documento_fecha_sub_idx" ON "documento"("usuario_id", "formulario_id", "tipo_documento", "fecha_subida");

-- CreateIndex
CREATE INDEX "formulario_500_items_forma_pago_importacion_pais_origen_uni_idx" ON "formulario_500_items"("forma_pago_importacion", "pais_origen", "unidad_fisica", "codigo_embalaje", "formulario_id");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documento" ADD CONSTRAINT "documento_formulario_id_fkey" FOREIGN KEY ("formulario_id") REFERENCES "formulario_500"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documento" ADD CONSTRAINT "documento_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formulario_500" ADD CONSTRAINT "formulario_500_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formulario_500_items" ADD CONSTRAINT "formulario_500_items_formulario_id_fkey" FOREIGN KEY ("formulario_id") REFERENCES "formulario_500"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
