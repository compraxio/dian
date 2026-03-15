'use client';

import { FaUserPlus } from 'react-icons/fa6';
import { IoMail, IoPersonSharp } from 'react-icons/io5';
import { MdLock, MdLockReset, MdVisibility, MdVisibilityOff, MdErrorOutline } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputRegistro, registroSchema } from '@/schemas/registroSchema';
import { sileo } from 'sileo';
import { registro } from '@/app/actions/auth/registro';

export default function Registro() {
  const router = useRouter();
  const [vercontrasena, setVercontrasena] = useState(false);
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<InputRegistro>({
    resolver: zodResolver(registroSchema),
    mode: 'onChange',
  });

  const onSumbit: SubmitHandler<InputRegistro> = (data) => {
    sileo
      .promise(
        () =>
          registro({
            correo: data.correo,
            nombre: data.nombre,
            contrasena: data.contraseña1,
            avatar: session?.user?.image ? session.user.image : '',
          }),
        {
          loading: { title: 'Creando usuario..' },
          success: (res: { ok: boolean; message: string }) => {
            if (!res.ok) throw new Error(res.message);
            return {
              title: 'Usuario creado',
              description: res.message,
            };
          },
          error: (err: unknown) => {
            const message = err instanceof Error ? err.message : 'Ocurrió un error inesperado';
            return {
              title: 'Error al crear usuario',
              description: message,
            };
          },
        },
      )
      .then((res: { ok: boolean; message: string }) => {
        if (res?.ok) {
          router.push('/auth/inicio_de_sesion');
        }
      });
  };

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/dashboard' });
  };

  const setGoogleValues = () => {
    if (session) {
      setValue('nombre', session.user?.name ?? '');
      setValue('correo', session.user?.email ?? '');
    }
  };

  return (
    <>
      <main className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-120 bg-white dark:bg-slate-900 rounded-xl shadow-elevated border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="relative h-40 w-full bg-primary/10 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-primary to-orange-400 opacity-80"></div>
            <div className="relative h-full flex flex-col items-center justify-center text-white px-8 text-center">
              <span className="text-5xl mb-2">
                <FaUserPlus />
              </span>
              <h1 className="text-2xl font-bold">Crear Cuenta</h1>
            </div>
          </div>
          <div className="p-8 lg:p-10 flex flex-col gap-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100">
                Regístrate
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Únete al simulador de impuestos DIAN y gestiona tus finanzas eficientemente.
              </p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSumbit)}>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  htmlFor="nombre"
                >
                  Nombre completo
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                    <IoPersonSharp />
                  </span>
                  <input
                    className={`w-full pl-12 pr-4 py-3.5 rounded-lg border bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none ${
                      errors.nombre
                        ? 'border-red-400 dark:border-red-500 focus:ring-red-500/20'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                    placeholder="Ingresa tu nombre completo"
                    type="text"
                    id="nombre"
                    {...register('nombre')}
                  />
                </div>
                {errors.nombre && (
                  <div className="flex items-center gap-1.5 text-sm text-red-500 dark:text-red-400 animate-in fade-in slide-in-from-top-1">
                    <MdErrorOutline size={16} className="shrink-0" />
                    <span>{errors.nombre.message}</span>
                  </div>
                )}
              </div>
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
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  htmlFor="contrasena1"
                >
                  Contraseña
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                    <MdLock />
                  </span>
                  <input
                    className={`w-full pl-12 pr-12 py-3.5 rounded-lg border bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none ${
                      errors.contraseña1
                        ? 'border-red-400 dark:border-red-500 focus:ring-red-500/20'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                    placeholder="••••••••"
                    type={vercontrasena ? 'text' : 'password'}
                    id="contrasena1"
                    {...register('contraseña1')}
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary"
                    type="button"
                    onClick={() => {
                      setVercontrasena(!vercontrasena);
                    }}
                  >
                    <span className="text-xl">
                      {vercontrasena ? <MdVisibilityOff size={25} /> : <MdVisibility size={25} />}
                    </span>
                  </button>
                </div>
                {errors.contraseña1 && (
                  <div className="flex items-center gap-1.5 text-sm text-red-500 dark:text-red-400 animate-in fade-in slide-in-from-top-1">
                    <MdErrorOutline size={16} className="shrink-0" />
                    <span>{errors.contraseña1.message}</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  htmlFor="contraseña2"
                >
                  Confirmar contraseña
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                    <MdLockReset />
                  </span>
                  <input
                    className={`w-full pl-12 pr-4 py-3.5 rounded-lg border bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none ${
                      errors.contraseña2
                        ? 'border-red-400 dark:border-red-500 focus:ring-red-500/20'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                    placeholder="••••••••"
                    type="password"
                    id="contraseña2"
                    {...register('contraseña2')}
                  />
                </div>
                {errors.contraseña2 && (
                  <div className="flex items-center gap-1.5 text-sm text-red-500 dark:text-red-400 animate-in fade-in slide-in-from-top-1">
                    <MdErrorOutline size={16} className="shrink-0" />
                    <span>{errors.contraseña2.message}</span>
                  </div>
                )}
              </div>
              <button
                className="w-full bg-primary text-white font-bold py-4 rounded-lg shadow-soft hover:shadow-elevated transition-all"
                type="submit"
              >
                Crear Cuenta
              </button>
              <button
                className="w-full flex items-center justify-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-200 shadow-subtle transition-all hover:bg-slate-50 dark:hover:bg-slate-700 hover:shadow-soft active:scale-[0.99]"
                type="button"
                onClick={handleGoogleSignIn}
              >
                <FcGoogle size={22} />
                Continuar con Google
              </button>
            </form>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                ¿Ya tienes cuenta?
                <Link className="text-primary font-bold hover:underline ml-1" href="/auth/inicio_de_sesion">
                  Inicia sesión
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-auto px-6 py-8 text-center text-slate-400 text-sm">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a className="hover:text-primary transition-colors" href="#">
            Términos y condiciones
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Privacidad
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Ayuda
          </a>
        </div>
        <p>© 2026 Simulador DIAN. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}