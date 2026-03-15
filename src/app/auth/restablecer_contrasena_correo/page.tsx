'use client';

import { IoMail } from 'react-icons/io5';
import { MdErrorOutline } from 'react-icons/md';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sileo } from 'sileo';
import { resetPasword } from '@/app/actions/auth/email';
import {
  restablecerContrasenaSchema,
  InputRestablecer,
} from '@/schemas/restablecerContrasenaSchema';
import { useState } from 'react';

export default function RestablecerContrasenaCorreo() {
  const [correoEnviado, setCorreoEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputRestablecer>({
    resolver: zodResolver(restablecerContrasenaSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<InputRestablecer> = (data) => {
    sileo
      .promise(
        async () => {
          const result = await resetPasword(data.correo);
          if (!result?.ok) throw new Error(result?.message || 'Error al enviar correo');
          return result;
        },
        {
          loading: { title: 'Enviando correo de recuperación...' },
          success: {
            title: 'Correo enviado',
            description: 'Revisa tu bandeja de entrada para restablecer tu contraseña',
            button: {
              title: 'Abrir Gmail',
              onClick: () =>
                window.open('https://mail.google.com', '_blank', 'noopener, noreferrer'),
            },
          },
          error: (err: unknown) => {
            const message = err instanceof Error ? err.message : 'Ocurrió un error inesperado';
            return {
              title: 'Error',
              description: message,
            };
          },
        },
      )
      .then((res: { ok: boolean; message: string } | undefined) => {
        if (res?.ok) {
          setCorreoEnviado(true);
        }
      });
  };

  if (correoEnviado) {
    return (
      <>
        <main className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-120 bg-white dark:bg-slate-900 rounded-xl shadow-elevated border border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="relative h-40 w-full bg-primary/10 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-primary to-orange-400 opacity-80"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-white px-8 text-center">
                <span className="text-5xl mb-2">✉️</span>
                <h1 className="text-2xl font-bold">Correo Enviado</h1>
              </div>
            </div>
            <div className="p-8 lg:p-10 flex flex-col gap-6">
              <div className="space-y-4 text-center">
                <p className="text-slate-600 dark:text-slate-300">
                  Hemos enviado un enlace de recuperación a tu correo electrónico. Haz clic en el
                  enlace para crear una nueva contraseña.
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  ¿No recibiste el correo? Revisa tu carpeta de spam o intenta nuevamente.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                <Link
                  className="text-primary font-bold hover:underline"
                  href="/auth/inicio_de_sesion"
                >
                  Volver a iniciar sesión
                </Link>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-120 bg-white dark:bg-slate-900 rounded-xl shadow-elevated border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="relative h-40 w-full bg-primary/10 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-primary to-orange-400 opacity-80"></div>
            <div className="relative h-full flex flex-col items-center justify-center text-white px-8 text-center">
              <span className="text-5xl mb-2">🔐</span>
              <h1 className="text-2xl font-bold">Restablecer Contraseña</h1>
            </div>
          </div>
          <div className="p-8 lg:p-10 flex flex-col gap-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100">
                ¿Olvidaste tu contraseña?
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Ingresa tu correo electrónico y te enviaremos un enlace para crear una nueva
                contraseña.
              </p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  htmlFor="correo"
                >
                  Correo electrónico
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                    <IoMail />
                  </span>
                  <input
                    className={`w-full pl-12 pr-4 py-3.5 rounded-lg border bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none ${
                      errors.correo
                        ? 'border-red-400 dark:border-red-500 focus:ring-red-500/20'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                    placeholder="ejemplo@correo.com"
                    type="email"
                    id="correo"
                    {...register('correo')}
                  />
                </div>
                {errors.correo && (
                  <div className="flex items-center gap-1.5 text-sm text-red-500 dark:text-red-400 animate-in fade-in slide-in-from-top-1">
                    <MdErrorOutline size={16} className="shrink-0" />
                    <span>{errors.correo.message}</span>
                  </div>
                )}
              </div>

              <button
                className="w-full bg-primary text-white font-bold py-4 rounded-lg shadow-soft hover:shadow-elevated transition-all"
                type="submit"
              >
                Enviar Enlace de Recuperación
              </button>
            </form>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                ¿Recordaste tu contraseña?
                <Link
                  className="text-primary font-bold hover:underline ml-1"
                  href="/auth/inicio_de_sesion"
                >
                  Iniciar sesión
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
