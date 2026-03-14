'use server';

import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import { cookies } from 'next/headers';
import { logger } from '@/lib/logger';
import { DatabaseError, ValidationError, UnauthorizedError } from '@/lib/errors';

async function getSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('session_id');

  if (!sessionId?.value) return null;

  const session = await prisma.session.findUnique({
    where: { id: sessionId.value },
    include: { propietario: true },
  });

  if (!session || session.expiresAt < new Date()) return null;

  return session;
}

export async function iniciar_session({
  correo,
  contrasena,
}: {
  correo: string;
  contrasena: string;
}) {
  const existingSession = await getSession();

  if (existingSession) {
    return {
      ok: false,
      message: 'Ya tienes una sesión activa',
    };
  }

  try {
    if (!correo || !contrasena) {
      throw new ValidationError('Faltan datos requeridos');
    }

    const user = await prisma.usuario.findFirst({
      where: { correo },
    });

    if (!user) {
      return {
        ok: false,
        message: 'Credenciales incorrectas',
      };
    }

    const validando = await bcrypt.compare(contrasena, user.contrasena ?? '');

    if (!validando) {
      return {
        ok: false,
        message: 'Credenciales incorrectas',
      };
    }

    const session = await prisma.session.create({
      data: {
        usuario_id: user.id,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
      },
    });

    const isProduction = process.env.NODE_ENV === 'production';

    (await cookies()).set('session_id', session.id, {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
      path: '/',
    });

    return {
      ok: true,
      message: 'Bienvenido',
    };
  } catch (error) {
    logger.error('Error en iniciar sesión', error as Error, { correo });

    if (error instanceof ValidationError || error instanceof UnauthorizedError) {
      throw error;
    }

    throw new DatabaseError('Error al iniciar sesión. Por favor intenta más tarde.');
  }
}
