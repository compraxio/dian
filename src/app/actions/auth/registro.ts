'use server';

import prisma from '@/lib/prisma';
import { Prisma } from '../../../../generated/prisma/client';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { logger } from '@/lib/logger';
import { DatabaseError, ConflictError, ValidationError } from '@/lib/errors';

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

export async function registro({
  correo,
  contrasena,
  nombre,
  avatar,
}: {
  correo: string;
  contrasena: string;
  nombre: string;
  avatar?: string;
}) {
  const session = await getSession();

  if (session) {
    return {
      ok: false,
      message: 'Ya tienes una sesión activa',
    };
  }

  try {
    if (!correo || !nombre || !contrasena) {
      return {
        ok: false,
        message: 'Faltan datos requeridos',
      };
    }

    const contrasenaHashed = await bcrypt.hash(contrasena, 10);
    await prisma.usuario.create({
      data: {
        nombre_usuario: nombre,
        correo,
        contrasena: contrasenaHashed,
        avatar: avatar ?? null,
      },
    });

    return {
      ok: true,
      message: 'Usuario creado correctamente',
    };
  } catch (error) {
    logger.error('Error al crear usuario', error as Error, { correo, nombre });

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return {
          ok: false,
          message: 'Ya existe un usuario con este correo',
        };
      }
      if (error.code === 'P2000') {
        return {
          ok: false,
          message: 'El correo electronico es invalido',
        };
      }
    }

    if (error instanceof ValidationError || error instanceof ConflictError) {
      throw error;
    }

    throw new DatabaseError('Error al crear el usuario. Por favor intenta más tarde.');
  }
}
