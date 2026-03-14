'use client';

import { FaHandsHoldingChild, FaShare } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathName = usePathname();
  const isDashboardRoute = pathName.startsWith('/dashboard');
  return (
    <>
      {!isDashboardRoute && (
        <footer className="px-6 md:px-20 lg:px-40 py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-dark">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3 text-primary">
              <span className="text-2xl font-bold">
                <FaHandsHoldingChild size={45} />
              </span>
              <span className="text-slate-900 dark:text-slate-100 font-extrabold">
                Simulador DIAN
              </span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <a className="hover:text-primary transition-colors" href="#">
                Términos
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Privacidad
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Contacto
              </a>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white cursor-pointer transition-all">
                <span className="text-sm">
                  <FaShare />
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-400">
            © 2026 Simulador DIAN Educativo. Todos los derechos reservados. Esta es una plataforma
            educativa independiente.
          </div>
        </footer>
      )}
    </>
  );
}
