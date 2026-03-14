import z from 'zod'

export const registroSchema = z
  .object({
    nombre: z
      .string()
      .min(2, { message: 'El nombre es obligatorio' })
      .max(25, { message: 'Nombre muy largo' }),
    correo: z.email({ message: 'Correo invalido' }),
    contraseña1: z.string().min(2, { message: 'La contraseña es obligatoria' }),
    contraseña2: z.string().min(2, { message: 'Por favor confirme la contraseña' }),
  })
  .refine((data) => data.contraseña1 === data.contraseña2, {
    message: 'Las contraseñas no coinciden',
    path: ['contraseña2'],
  });

export type InputRegistro = z.infer<typeof registroSchema>;
