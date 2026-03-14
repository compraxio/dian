-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_usuario_id_fkey";

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
