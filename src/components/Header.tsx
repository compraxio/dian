'use client';

import Link from 'next/link';
import { FaHandsHoldingChild } from 'react-icons/fa6';
import { ModeToggle } from './mode_toggle';
import { usePathname } from 'next/navigation';
import { SidebarTrigger } from './ui/sidebar';
import { MdAutoAwesome, MdSearch } from 'react-icons/md';
import { useState, useEffect } from 'react';

export function Header({ lugar }: { lugar: 'inicio' | 'dashboard' }) {
  const pathName = usePathname();
  const isDashboardRoute = pathName.startsWith('/dashboard');
  const isDashboardFormRoute = pathName.startsWith('/dashboard/formularios/formulario500');
  const [clikSidebar, setClikSidebar] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        setClikSidebar((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {lugar === 'inicio' && !isDashboardRoute && (
        <header className="flex items-center justify-between max-sm:justify-center whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 lg:px-40 py-4 bg-white/80 dark:bg-dark/80 backdrop-blur-md sticky top-0 z-50">
          {pathName !== '/' ? (
            <Link href="/" className="flex items-center gap-3 text-primary">
              <span className="text-3xl font-bold">
                <FaHandsHoldingChild size={25} />
              </span>
              <h2 className="text-slate-900 dark:text-slate-100 text-xl font-extrabold leading-tight tracking-tight">
                Simulador DIAN
              </h2>
            </Link>
          ) : (
            <div className="flex items-center gap-3 text-primary">
              <span className="text-3xl font-bold">
                <FaHandsHoldingChild size={25} />
              </span>
              <h2 className="text-slate-900 dark:text-slate-100 text-xl font-extrabold leading-tight tracking-tight">
                Simulador DIAN
              </h2>
            </div>
          )}
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-9">
              {pathName === '/' && (
                <>
                  <Link
                    className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors"
                    href="#inicio"
                  >
                    Inicio
                  </Link>
                  <Link
                    className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors"
                    href="#que-es"
                  >
                    ¿Qué es?
                  </Link>
                  <Link
                    className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors"
                    href="#beneficios"
                  >
                    Beneficios
                  </Link>
                  <Link
                    className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors"
                    href="#caracteristicas"
                  >
                    Características
                  </Link>
                </>
              )}
            </nav>
            <div className="flex gap-3">
              {pathName !== '/auth/registro' && (
                <Link
                  href="/auth/registro"
                  className="flex min-w-25 cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                >
                  Registrarse
                </Link>
              )}
              {pathName === '/' && (
                <Link
                  href="/auth/inicio_de_sesion"
                  className="flex min-w-25 cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                >
                  Iniciar Sesión
                </Link>
              )}
              {pathName === '/auth/registro' && (
                <Link
                  href="/auth/inicio_de_sesion"
                  className="flex min-w-25 cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                >
                  Iniciar Sesión
                </Link>
              )}
              <ModeToggle />
            </div>
          </div>
        </header>
      )}
      {lugar === 'dashboard' && !isDashboardFormRoute && (
        <header className="h-16 flex items-center justify-between px-8 bg-neutral-light dark:bg-neutral-dark border-b border-slate-200 dark:border-slate-800 shrink-0">
          {pathName === '/dashboard' && (
            <>
              <SidebarTrigger
                className={`${clikSidebar ? 'rotate-180' : 'rotate-0'}`}
                onClick={() => {
                  setClikSidebar(!clikSidebar);
                }}
              />
              <div className="flex items-center flex-1 max-w-md">
                <div className="relative w-full">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                    <MdSearch className="text-xl" size={25} />
                  </span>
                  <input
                    className="block w-full pl-10 pr-3 py-2 border-none bg-light dark:bg-dark rounded-lg focus:ring-2 focus:ring-primary/50 text-sm"
                    placeholder="Buscar trámites o documentos..."
                    type="text"
                  />
                </div>
              </div>
            </>
          )}
          {pathName === '/dashboard/formularios' && (
            <div className="flex items-center gap-4">
              <span className=" text-primary">
                <MdAutoAwesome size={25} />
              </span>
              <h2 className="text-lg font-bold tracking-tight">Simulador de Formularios</h2>
            </div>
          )}
          <div>
            <ModeToggle />
          </div>
        </header>
      )}
    </>
  );
}
