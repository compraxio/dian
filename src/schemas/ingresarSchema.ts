import z from 'zod'

export const ingresarSchema = z.object({
  correo: z.string().min(2, { message: 'Por favor ingresar correo' }),
  contraseña: z.string().min(2, { message: 'Por favor ingresar contraseña' }),
});

export type InputIngresar = z.infer<typeof ingresarSchema>;
