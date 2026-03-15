'use server';

import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import { logger } from '@/lib/logger';

export async function updatePassword(token: string, nuevaContrasena: string) {
  try {
    const tokenRecord = await prisma.resetearContrasenaToken.findUnique({
      where: { token },
      include: { usuario: true },
    });

    if (!tokenRecord) {
      return { ok: false, message: 'Token inválido' };
    }

    if (new Date() > tokenRecord.expiresAt) {
      return { ok: false, message: 'El token ha expirado' };
    }

    const hashedPassword = await bcrypt.hash(nuevaContrasena, 12);

    await prisma.usuario.update({
      where: { id: tokenRecord.usuario_id },
      data: { contrasena: hashedPassword },
    });

    await prisma.resetearContrasenaToken.delete({
      where: { id: tokenRecord.id },
    });

    return { ok: true, message: 'Contraseña actualizada correctamente' };
  } catch (error) {
    logger.error('Error al actualizar contraseña', error as Error, { token });
    return { ok: false, message: 'Error al procesar la solicitud' };
  }
}
