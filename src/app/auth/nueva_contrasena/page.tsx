'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaLock, FaUnlock } from 'react-icons/fa6';
import { MdVisibility, MdVisibilityOff, MdErrorOutline } from 'react-icons/md';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sileo } from 'sileo';
import { nuevaContrasenaSchema, InputNuevaContrasena } from '@/schemas/nuevaContrasenaSchema';
import { updatePassword } from '@/app/actions/auth/contrasena';

export default function NuevaContrasena() {
  const searchParams = useSearchParams();
  const router = useRouter()
  const [token, setToken] = useState<string | null>(null);
  const [verContrasena, setVerContrasena] = useState(false);
  const [verConfirmarContrasena, setVerConfirmarContrasena] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputNuevaContrasena>({
    resolver: zodResolver(nuevaContrasenaSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    setToken(searchParams.get('token'));
  }, [searchParams]);

  const onSubmit: SubmitHandler<InputNuevaContrasena> = (data) => {
    if (!token) return;

    sileo
      .promise(() => updatePassword(token, data.contrasena), {
        loading: { title: 'Actualizando contraseña' },
        success: (res: { ok: boolean; message: string }) => {
          if (!res.ok) throw new Error(res.message);
          return {
            title: 'Contraseña actualizada',
            description: res.message,
          };
        },
        error: (err: unknown) => {
          const message = err instanceof Error ? err.message : 'Ocurrió un error inesperado';
          return {
            title: 'Error al actualizar contraseña',
            description: message,
          };
        },
      })
      .then((res: { ok: boolean; message: string }) => {
        if (res?.ok) {
          router.replace('/auth/inicio_de_sesion');
        }
      });
  };

  if (!token) {
    return (
      <main className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-120 bg-white dark:bg-slate-900 rounded-xl shadow-elevated border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="relative h-40 w-full bg-primary/10 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-primary to-orange-400 opacity-80"></div>
            <div className="relative h-full flex flex-col items-center justify-center text-white px-8 text-center">
              <span className="text-5xl mb-2">🔗</span>
              <h1 className="text-2xl font-bold">Enlace inválido</h1>
            </div>
          </div>
          <div className="p-8 lg:p-10 flex flex-col gap-6">
            <div className="space-y-4 text-center">
              <p className="text-slate-600 dark:text-slate-300">
                El enlace de recuperación ha expirado o es inválido.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Por favor, solicita un nuevo enlace de recuperación.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
              <Link className="text-primary font-bold hover:underline" href="/auth/restablecer_contrasena_correo">
                Solicitar nuevo enlace
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 flex items-center justify-center p-6 lg:p-12">
      <div className="w-full max-w-120 bg-white dark:bg-slate-900 rounded-xl shadow-elevated border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="relative h-40 w-full bg-primary/10 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary to-orange-400 opacity-80"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-white px-8 text-center">
            <span className="text-5xl mb-2">
              <FaUnlock />
            </span>
            <h1 className="text-2xl font-bold">Nueva Contraseña</h1>
          </div>
        </div>
        <div className="p-8 lg:p-10 flex flex-col gap-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100">
              Crea tu nueva contraseña
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Ingresa una contraseña segura para proteger tu cuenta
            </p>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                htmlFor="contrasena"
              >
                Nueva contraseña
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                  <FaLock />
                </span>
                <input
                  className={`w-full pl-12 pr-12 py-3.5 rounded-lg border bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none ${
                    errors.contrasena
                      ? 'border-red-400 dark:border-red-500 focus:ring-red-500/20'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                  placeholder="Mínimo 8 caracteres"
                  type={verContrasena ? 'text' : 'password'}
                  id="contrasena"
                  {...register('contrasena')}
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary"
                  type="button"
                  onClick={() => setVerContrasena(!verContrasena)}
                >
                  <span className="text-xl">
                    {verContrasena ? <MdVisibilityOff size={25} /> : <MdVisibility size={25} />}
                  </span>
                </button>
              </div>
              {errors.contrasena && (
                <div className="flex items-center gap-1.5 text-sm text-red-500 dark:text-red-400 animate-in fade-in slide-in-from-top-1">
                  <MdErrorOutline size={16} className="shrink-0" />
                  <span>{errors.contrasena.message}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                htmlFor="confirmarContrasena"
              >
                Confirmar contraseña
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                  <FaLock />
                </span>
                <input
                  className={`w-full pl-12 pr-12 py-3.5 rounded-lg border bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none ${
                    errors.confirmarContrasena
                      ? 'border-red-400 dark:border-red-500 focus:ring-red-500/20'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                  placeholder="Repite tu contraseña"
                  type={verConfirmarContrasena ? 'text' : 'password'}
                  id="confirmarContrasena"
                  {...register('confirmarContrasena')}
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary"
                  type="button"
                  onClick={() => setVerConfirmarContrasena(!verConfirmarContrasena)}
                >
                  <span className="text-xl">
                    {verConfirmarContrasena ? <MdVisibilityOff size={25} /> : <MdVisibility size={25} />}
                  </span>
                </button>
              </div>
              {errors.confirmarContrasena && (
                <div className="flex items-center gap-1.5 text-sm text-red-500 dark:text-red-400 animate-in fade-in slide-in-from-top-1">
                  <MdErrorOutline size={16} className="shrink-0" />
                  <span>{errors.confirmarContrasena.message}</span>
                </div>
              )}
            </div>

            <button
              className="w-full bg-primary text-white font-bold py-4 rounded-lg shadow-soft hover:shadow-elevated transition-all flex items-center justify-center gap-2 mt-2"
              type="submit"
            >
              <span>Actualizar Contraseña</span>
              <FaUnlock size={20} />
            </button>
          </form>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
            <Link className="text-primary font-bold hover:underline" href="/auth/inicio_de_sesion">
              Volver a iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
