'use client'
import { ModeToggle } from '@/components/mode_toggle';
import Link from 'next/link';
import { FaHandsHoldingChild } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import {
  MdHome,
  MdDescription,
  MdFolder,
  MdAssignment,
  MdAdd,
  MdSearch,
  MdNotifications,
  MdAutoAwesome,
} from 'react-icons/md';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const Pathname = usePathname()

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64 shrink-0 border-r border-slate-200 dark:border-slate-800 bg-neutral-light dark:bg-neutral-dark hidden md:flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <FaHandsHoldingChild size={25} />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-primary">Simulador DIAN</h1>
        </div>
        <nav className="flex-1 px-4 space-y-1 mt-4">
          <Link
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium"
            href="/dashboard"
          >
            <MdHome size={25} />
            <span>Inicio</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            href="#"
          >
            <MdDescription size={25} />
            <span>Borradores</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            href="#"
          >
            <MdFolder size={25} />
            <span>Mis Archivos</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            href="/dashboard/formularios"
          >
            <MdAssignment size={25} />
            <span>Formularios</span>
          </Link>
        </nav>
        <div className="p-4 mt-auto">
          <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-4 rounded-lg transition-all shadow-sm">
            <MdAdd size={25} />
            <span>Nuevo Trámite</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 flex items-center justify-between px-8 bg-neutral-light dark:bg-neutral-dark border-b border-slate-200 dark:border-slate-800 shrink-0">
          {Pathname === '/dashboard' && (
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
          )}
          {Pathname === '/dashboard/formularios' && (
            <div className="flex items-center gap-4">
              <span className=" text-primary">
                <MdAutoAwesome size={25} />
              </span>
              <h2 className="text-lg font-bold tracking-tight">Simulador de Formularios</h2>
            </div>
          )}
          <div className="flex items-center gap-4 ml-4">
            <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative">
              <MdNotifications size={25} />
              <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-neutral-light dark:border-neutral-dark"></span>
            </button>
            <ModeToggle />

            <div className="h-8 w-px bg-slate-200 dark:border-slate-700 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold leading-none">Juan Delgado</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Usuario Simulador</p>
              </div>
              <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border-2 border-primary/10">
                <img
                  alt="Avatar de Juan Delgado"
                  className="size-full object-cover"
                  data-alt="Ilustración de perfil de usuario masculino sonriendo"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw_t5ZKvABisTyEoVCjfB3IXuupcsCTkqiQNG3oauDiNH3f-In-lkDWtVFkzPq5py9bQUoJmQs85DZKPmf6IMz_98hml1yoBfGBjl4PU2nPzjmymqyJh_7YoMJgNI1eQ-Lo5R7jvONlagVtyUtKIcI94DcWBpJMHGtIouAhMerHDKfYVoKFZIBUVbOy0KgV1ujGuwHWuFmwmGC0EWRdfwubh_Bn9aAej5esvCL-b_vedeASDXhfPpjeUgjMV7kA1avBbtvAeRaBuM"
                />
              </div>
            </div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
