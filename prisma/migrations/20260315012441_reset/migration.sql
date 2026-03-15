-- CreateTable
CREATE TABLE "ResetearContrasenaToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResetearContrasenaToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ResetearContrasenaToken_token_key" ON "ResetearContrasenaToken"("token");

-- AddForeignKey
ALTER TABLE "ResetearContrasenaToken" ADD CONSTRAINT "ResetearContrasenaToken_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
