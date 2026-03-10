import Link from 'next/link';
import { MdBadge, MdLocationOn,  MdGroups, MdArrowBack, MdArrowForward } from 'react-icons/md';

export default function seccion2() {
  return (
    <main className="flex-1 flex flex-col items-center py-8 px-4 md:px-10">
      <div className="w-full max-w-4xl space-y-8">
        <div className="flex flex-col gap-8">
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="bg-primary/10 text-primary p-1.5 rounded-lg">
                <MdBadge className="text-[20px]" />
              </span>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">
                Identificación del Importador
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="md:col-span-8">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span className="text-primary mr-1">5.</span> NIT
                </label>
                <input
                  className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary p-3"
                  placeholder="Ej: 900123456"
                  type="number"
                />
              </div>
              <div className="md:col-span-4">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span className="text-primary mr-1">6.</span> DV
                </label>
                <input
                  className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 text-slate-500 cursor-not-allowed p-3"
                  readOnly
                  type="number"
                  value="7"
                />
              </div>
              <div className="md:col-span-12">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span className="text-primary mr-1">11.</span> Apellidos y nombres o razón social
                </label>
                <input
                  className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary p-3"
                  placeholder="Nombre completo de la entidad o persona"
                  type="text"
                />
              </div>
            </div>
          </section>
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="bg-primary/10 text-primary p-1.5 rounded-lg">
                <MdLocationOn className="text-[20px]" />
              </span>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">
                Ubicación y Contacto
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span className="text-primary mr-1">13.</span> Dirección
                </label>
                <input
                  className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary p-3"
                  placeholder="Calle, Carrera, Edificio, Oficina"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span className="text-primary mr-1">15.</span> Teléfono
                </label>
                <div className="relative">
                  <input
                    className="w-full pl-10 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary p-3"
                    placeholder="601 1234567"
                    type="tel"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span className="text-primary mr-1">12.</span> Cód. Dirección Seccional
                </label>
                <select
                  defaultValue=""
                  className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary p-3"
                >
                  <option value="">Seleccione una seccional...</option>
                  <option value="01">01 - ARMENIA</option>
                  <option value="02">02 - BARRANQUILLA</option>
                  <option value="32">32 - BOGOTÁ (CARGA)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span className="text-primary mr-1">16.</span> Cód. Departamento
                </label>
                <select
                  defaultValue=""
                  className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary p-3"
                >
                  <option value="">Seleccione departamento...</option>
                  <option value="05">05 - ANTIOQUIA</option>
                  <option value="11">11 - BOGOTÁ D.C.</option>
                  <option value="76">76 - VALLE DEL CAUCA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span className="text-primary mr-1">17.</span> Cód. Ciudad/Municipio
                </label>
                <select
                  defaultValue=""
                  className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary p-3"
                >
                  <option value="">Seleccione municipio...</option>
                  <option value="001">001 - MEDELLÍN</option>
                  <option value="001">001 - BOGOTÁ</option>
                  <option value="001">001 - CALI</option>
                </select>
              </div>
            </div>
          </section>
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="bg-primary/10 text-primary p-1.5 rounded-lg">
                <MdGroups className="text-[20px]" />
              </span>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">
                Otros Datos (Declarantes Relacionados)
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="md:col-span-8">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span className="text-primary mr-1">24.</span> NIT Declarante Secundario
                </label>
                <input
                  className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary p-3"
                  placeholder="Opcional"
                  type="number"
                />
              </div>
              <div className="md:col-span-4">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span className="text-primary mr-1">25.</span> DV
                </label>
                <input
                  className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 text-slate-500 cursor-not-allowed p-3"
                  readOnly
                  type="number"
                  value=""
                />
              </div>
            </div>
          </section>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 pb-12">
            <Link
              href="/dashboard/formularios/formulario500"
              className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center gap-2 transition-all"
            >
              <MdArrowBack />
              Anterior
            </Link>
            <div className="hidden md:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              <span className="w-6 h-2 rounded-full bg-primary"></span>
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            </div>
            <Link
              href="/dashboard/formularios/formulario500/3"
              className="w-full sm:w-auto px-10 py-3 rounded-lg font-bold bg-primary text-white hover:bg-orange-600 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all"
            >
              Siguiente
              <MdArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
