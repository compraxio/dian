import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from '@/components/ui/avatar';
import prisma from '../lib/prisma';
import { cache } from 'react';

const getAvatars = cache(async () => {
  return prisma.usuario.findMany({
    where: {
      NOT: {
        avatar: null,
      },
    },
    skip: 0,
    take: 3,
  });
});

export async function Avatares() {
  const usuarios = await getAvatars();
  return (
    <>
      {usuarios.length >= 0 && (
        <AvatarGroup>
          {usuarios.map((user) => (
            <Avatar key={user.id}>
              <AvatarImage src={user.avatar ?? ''} alt={user.nombre_usuario} />
              <AvatarFallback>{user.nombre_usuario}</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
      )}
    </>
  );
}
