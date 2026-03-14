'use server';

import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';

export async function requireGuest() {
  const sessionId = (await cookies()).get('session_id')?.value;

  if (!sessionId) return false;

  const session = await prisma.session.findUnique({
    where: { id: sessionId },
  });

  if (session && session.expiresAt > new Date()) {
    return true;
  }

  return false;
}

export async function requireAuth() {
  const sessionId = (await cookies()).get('session_id')?.value;

  if (!sessionId) {
    redirect('/auth/inicio_de_sesion');
  }

  const session = await prisma.session.findUnique({
    where: { id: sessionId },
    include: { propietario: true },
  });

  if (!session || session.expiresAt < new Date()) {
    redirect('/auth/inicio_de_sesion');
  }

  return session.propietario;
}
