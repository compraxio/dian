'use server'
import { cookies } from 'next/headers';
import  prisma  from '@/lib/prisma';
export async function Logouth() {
  const session = (await cookies()).get('session_id');

  if (session) {
    await prisma.session.delete({
      where: { id: session.value },
    });
  }

  (await cookies()).delete('session_id');

  return {
    ok: true,
    message: 'Hasta la proxima',
  };
}
