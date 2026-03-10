import Link from 'next/link';
import { MdArrowBack, MdArrowForward, MdInfo } from 'react-icons/md';

export default function seccion2() {
  return (
    <main className="flex flex-1 justify-center py-6 md:py-10 px-4 md:px-10">
      <div className="layout-content-container flex flex-col max-w-240 flex-1">
        <div className="mb-8">
          <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-3xl font-extrabold leading-tight">
            SECCIÓN 3 — Datos del Declarante
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Por favor complete la información del declarante autorizado para este formulario.
          </p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="flex flex-col group">
                <span className="text-sm font-bold mb-2 flex items-center gap-1">
                  <span className="text-primary">26.</span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Razón social declarante autorizado
                  </span>
                </span>
                <input
                  className="form-input flex w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary h-12 px-4 transition-all"
                  placeholder="Ingrese la razón social completa"
                  type="text"
                />
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex flex-col">
                <span className="text-sm font-bold mb-2 flex items-center gap-1">
                  <span className="text-primary">27.</span>
                  <span className="text-slate-700 dark:text-slate-300">Tipo usuario</span>
                </span>
                <select
                  defaultValue=""
                  className="form-select flex w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary h-12 px-4 transition-all"
                >
                  <option disabled value="">
                    Seleccione una opción
                  </option>
                  <option value="1">Agencia de Aduanas</option>
                  <option value="2">Importador Directo</option>
                  <option value="3">UAP</option>
                  <option value="4">ALTEX</option>
                </select>
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex flex-col">
                <span className="text-sm font-bold mb-2 flex items-center gap-1">
                  <span className="text-primary">28.</span>
                  <span className="text-slate-700 dark:text-slate-300">Código usuario</span>
                </span>
                <input
                  className="form-input flex w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary h-12 px-4 transition-all"
                  placeholder="Ej: 00123"
                  type="text"
                />
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex flex-col">
                <span className="text-sm font-bold mb-2 flex items-center gap-1">
                  <span className="text-primary">29.</span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Número documento identificación
                  </span>
                </span>
                <input
                  className="form-input flex w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary h-12 px-4 transition-all"
                  placeholder="Ingrese el NIT o documento"
                  type="number"
                />
              </label>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="flex flex-col">
                <span className="text-sm font-bold mb-2 flex items-center gap-1">
                  <span className="text-primary">30.</span>
                  <span className="text-slate-700 dark:text-slate-300">Apellidos y nombres</span>
                </span>
                <input
                  className="form-input flex w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary h-12 px-4 transition-all"
                  placeholder="Nombres y apellidos completos de la persona autorizada"
                  type="text"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-10 gap-4">
          <Link
            href="/dashboard/formularios/formulario500/2"
            className="flex flex-1 md:flex-none items-center justify-center gap-2 px-8 py-3 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
          >
            <MdArrowBack className="text-lg" />
            Anterior
          </Link>
          <Link
            href="/dashboard/formularios/formulario500/4"
            className="flex flex-1 md:flex-none items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all"
          >
            Siguiente
            <MdArrowForward className="text-lg" />
          </Link>
        </div>
        <div className="mt-12 p-4 rounded-lg bg-primary/10 border border-primary/20 flex gap-4 items-start">
          <MdInfo className="text-primary" />
          <div>
            <h4 className="text-slate-900 dark:text-slate-100 font-bold text-sm">
              Instrucciones de diligenciamiento
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Asegúrese de que el código de usuario (Casilla 28) corresponda exactamente al asignado
              por la DIAN en el RUT. Si tiene dudas, consulte el manual del declarante.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
