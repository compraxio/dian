import z from 'zod'

export const restablecerContrasenaSchema = z.object({
  correo: z.string().min(2, { message: 'Por favor ingresa tu correo electrónico' }),
});

export type InputRestablecer = z.infer<typeof restablecerContrasenaSchema>;