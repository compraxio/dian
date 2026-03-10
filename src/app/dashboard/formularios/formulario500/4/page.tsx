import Link from 'next/link';
import { MdPublic, MdInfo, MdArrowBack, MdArrowForward } from 'react-icons/md';

export default function seccion2() {
  return (
    <main className="flex-1 flex flex-col max-w-4xl mx-auto w-full p-4 md:p-8">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <MdPublic className="text-3xl" />
          </div>
          <div>
            <h2 className="text-xl font-bold uppercase tracking-tight">
              Datos del Exportador / Proveedor Exterior
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              Información requerida para la sección 4 del formulario de importación.
            </p>
          </div>
        </div>
        <div className="p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm font-semibold">
              <span className="text-primary font-bold">[46]</span>
              Nombre exportador o proveedor
            </label>
            <input
              className="w-full rounded-lg border-none bg-slate-100 dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50"
              placeholder="Ingrese nombre o razón social completa"
              type="text"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-primary font-bold">[49]</span>
                Dirección exportador
              </label>
              <input
                className="w-full rounded-lg border-none bg-slate-100 dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50"
                placeholder="Dirección de correspondencia"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-primary font-bold">[47]</span>
                Ciudad
              </label>
              <input
                className="w-full rounded-lg border-none bg-slate-100 dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50"
                placeholder="Ciudad de residencia"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-primary font-bold">[48]</span>
                Cód. País exportador
              </label>
              <select className="w-full rounded-lg border-none bg-slate-100 dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/50 appearance-none">
                <option disabled value="">
                  Seleccione código de país
                </option>
                <option value="US">Estados Unidos (US)</option>
                <option value="CN">China (CN)</option>
                <option value="DE">Alemania (DE)</option>
                <option value="ES">España (ES)</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-primary font-bold">[50]</span>
                E-mail
              </label>
              <input
                className="w-full rounded-lg border-none bg-slate-100 dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50"
                placeholder="ejemplo@proveedor.com"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-primary font-bold">[53]</span>
                Cód. País procedencia
              </label>
              <select className="w-full rounded-lg border-none bg-slate-100 dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/50">
                <option disabled value="">
                  Seleccione código de país de origen de la mercancía
                </option>
                <option value="US">Estados Unidos (US)</option>
                <option value="CN">China (CN)</option>
                <option value="DE">Alemania (DE)</option>
                <option value="ES">España (ES)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 flex items-start gap-3">
          <MdInfo className="text-primary text-xl" />
          <p className="text-xs text-slate-500 dark:text-slate-400 italic">
            Asegúrese de que los datos coincidan exactamente con la factura comercial adjunta para
            evitar demoras en el proceso aduanero.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-8 gap-4">
        <Link
          href="/dashboard/formularios/formulario500/3"
          className="flex items-center justify-center px-6 py-3 rounded-lg font-bold text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
        >
          <MdArrowBack className="mr-2" />
          Anterior
        </Link>
        <Link
          href="/dashboard/formularios/formulario500/5"
          className="flex-1 md:flex-none flex items-center justify-center px-10 py-3 rounded-lg font-bold text-white bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
        >
          Siguiente
          <MdArrowForward className="ml-2" />
        </Link>
      </div>
    </main>
  );
}
