import z from 'zod'

export const ingresarSchema = z.object({
  correo: z.string().min(2, { message: 'Porfavor ingresar correo' }),
  contraseña: z.string().min(2, { message: 'Porfavor ingresar contraseña' }),
});

export type InputIngresar = z.infer<typeof ingresarSchema>;
