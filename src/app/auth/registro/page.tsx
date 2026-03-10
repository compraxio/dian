'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputRegistro, registroSchema } from '../../../schemas/registroSchema';

//*Importacion de iconos
import { IoMail, IoPersonSharp } from 'react-icons/io5';
import { MdLock, MdLockReset, MdVisibility, MdVisibilityOff, MdErrorOutline } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';

export default function Registro() {
  const [vercontrasena, setVercontrasena] = useState<boolean>(false);
  // const { data: session } = useSession()
  // console.log(session)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputRegistro>({
    resolver: zodResolver(registroSchema),
    mode: 'onChange',
  });

  const onSumbit: SubmitHandler<InputRegistro> = (data) => {
    console.log(data);
  };

  return (
    <>
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-120 space-y-8 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-xl shadow-primary/5 border border-primary/5">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">
              Crear Cuenta
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Únete al simulador de impuestos DIAN y gestiona tus finanzas eficientemente.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit(onSumbit)}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Nombre completo
              </label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary">
                  <IoPersonSharp />
                </span>
                <input
                  className={`w-full rounded-xl border bg-white dark:bg-slate-800 py-4 pl-12 pr-4 text-slate-900 dark:text-white outline-none ring-primary/20 transition-all focus:border-primary focus:ring-4 placeholder:text-slate-400 ${
                    errors.nombre
                      ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                  placeholder="Ingresa tu nombre completo"
                  type="text"
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
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Correo electrónico
              </label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary">
                  <IoMail />
                </span>
                <input
                  className={`w-full rounded-xl border bg-white dark:bg-slate-800 py-4 pl-12 pr-4 text-slate-900 dark:text-white outline-none ring-primary/20 transition-all focus:border-primary focus:ring-4 placeholder:text-slate-400 ${
                    errors.correo
                      ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                  placeholder="ejemplo@correo.com"
                  type="email"
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
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Contraseña
              </label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary">
                  <MdLock />
                </span>
                <input
                  className={`w-full rounded-xl border bg-white dark:bg-slate-800 py-4 pl-12 pr-12 text-slate-900 dark:text-white outline-none ring-primary/20 transition-all focus:border-primary focus:ring-4 placeholder:text-slate-400 ${
                    errors.contraseña1
                      ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                  placeholder="••••••••"
                  type={vercontrasena ? 'text' : 'password'}
                  {...register('contraseña1')}
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                  type="button"
                  onClick={() => {
                    setVercontrasena(!vercontrasena);
                  }}
                >
                  {vercontrasena ? <MdVisibilityOff size={25} /> : <MdVisibility size={25} />}
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
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Confirmar contraseña
              </label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary">
                  <MdLockReset size={25} />
                </span>
                <input
                  className={`w-full rounded-xl border bg-white dark:bg-slate-800 py-4 pl-12 pr-12 text-slate-900 dark:text-white outline-none ring-primary/20 transition-all focus:border-primary focus:ring-4 placeholder:text-slate-400 ${
                    errors.contraseña2
                      ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                  placeholder="••••••••"
                  type="password"
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
              className="w-full rounded-xl bg-primary py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] focus:ring-4 focus:ring-primary/20"
              type="submit"
            >
              Crear Cuenta
            </button>
            <button
              className="w-full flex items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-3 text-base font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:shadow-md active:scale-[0.99] dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
              type="button"
              onClick={() => signIn('google', { callbackUrl: '/' })}
            >
              <FcGoogle size={22} />
              Continuar con Google
            </button>
          </form>

          <div className="pt-6 text-center border-t border-slate-100 dark:border-slate-800">
            <p className="text-slate-600 dark:text-slate-400">
              ¿Ya tienes cuenta?
              <Link
                className="font-bold text-primary hover:underline decoration-2 underline-offset-4"
                href="/auth/inicio_de_secion"
              >
                Inicia sesión
              </Link>
            </p>
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
