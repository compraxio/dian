import Link from 'next/link';
import { MdSettingsInputComponent, MdListAlt, MdImportExport, MdArrowBack, MdArrowForward } from 'react-icons/md';

export default function Formulario500() {
  return (
    <main className="grow px-4 md:px-20 py-8">
      <div className="max-w-250 mx-auto">
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3 uppercase tracking-widest">
            Paso 1
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 leading-tight">
            SECCIÓN 1 — Información General de la Declaración
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Por favor, ingrese los datos de control y la información básica requerida para iniciar
            el proceso de declaración de importación.
          </p>
        </div>
        <form className="space-y-8">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
              <MdSettingsInputComponent className="text-primary text-xl" />
              <h3 className="font-bold text-slate-800 dark:text-slate-200">
                Datos de Control y Formulario
              </h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <span className="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-500">
                    4
                  </span>
                  Número formulario
                </label>
                <input
                  className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 rounded-lg p-3 text-sm cursor-not-allowed font-mono"
                  placeholder="Auto-generado"
                  type="number"
                  value="500240000001"
                  readOnly
                />
                <p className="text-[10px] text-slate-400 italic">
                  Este número es generado automáticamente por el sistema.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <span className="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-500">
                    33
                  </span>
                  Código
                </label>
                <input
                  className="border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary"
                  placeholder="Ingrese el código"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
              <MdListAlt className="text-primary text-xl" />
              <h3 className="font-bold text-slate-800 dark:text-slate-200">
                Detalles de la Declaración
              </h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <span className="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-500">
                    32
                  </span>
                  Tipo de declaración
                </label>
                <select
                  defaultValue=""
                  className="border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary appearance-none"
                >
                  <option disabled value="">
                    Seleccione el tipo...
                  </option>
                  <option value="1">Declaración Inicial</option>
                  <option value="2">Declaración de Corrección</option>
                  <option value="3">Declaración de Modificación</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <span className="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-500">
                    31
                  </span>
                  Clase de importador
                </label>
                <select
                  defaultValue=""
                  className="border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary"
                >
                  <option disabled value="">
                    Seleccione la clase...
                  </option>
                  <option value="1">UAP</option>
                  <option value="2">ALTEX</option>
                  <option value="3">Otros</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <span className="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-500">
                    36
                  </span>
                  Código Dirección Seccional
                </label>
                <select
                  defaultValue=""
                  className="border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary"
                >
                  <option disabled value="">
                    Seleccione seccional...
                  </option>
                  <option value="01">Bogotá - 01</option>
                  <option value="02">Medellín - 02</option>
                  <option value="03">Cali - 03</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <span className="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-500">
                    34
                  </span>
                  No. formulario anterior
                </label>
                <input
                  className="border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary"
                  placeholder="Ej: 500230000123"
                  type="number"
                />
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
              <MdImportExport className="text-primary text-xl" />
              <h3 className="font-bold text-slate-800 dark:text-slate-200">
                Información de Exportación Relacionada
              </h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <span className="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-500">
                    35
                  </span>
                  Año decl. exportación
                </label>
                <input
                  className="border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary"
                  placeholder="Ej: 2024"
                  type="number"
                />
              </div>
              <div className="flex flex-col gap-1.5 lg:col-span-1">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <span className="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-500">
                    37
                  </span>
                  Declaración exportación
                </label>
                <input
                  className="border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary"
                  placeholder="Número decl."
                  type="number"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <span className="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-500">
                    38
                  </span>
                  Año
                </label>
                <input
                  className="border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary"
                  placeholder="Ej: 2024"
                  type="number"
                />
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2 lg:col-span-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <span className="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-500">
                    39
                  </span>
                  Código Dirección Seccional (Exportación)
                </label>
                <select
                  defaultValue=""
                  className="border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary"
                >
                  <option disabled value="">
                    Seleccione seccional de exportación...
                  </option>
                  <option value="01">01 - Arboletes</option>
                  <option value="02">02 - Arauca</option>
                  <option value="03">03 - Armenia</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
            <Link
              className="px-6 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center gap-2"
              href="/dashboard/formularios"
            >
              <MdArrowBack className="text-lg" />
              Cancelar
            </Link>
            <div className="flex gap-4">
              <button
                className="px-6 py-2.5 text-sm font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                type="button"
              >
                Guardar Borrador
              </button>
              <Link
                className="px-8 py-2.5 text-sm font-bold text-white bg-primary rounded-lg hover:bg-primary/90 shadow-md shadow-primary/20 transition-all flex items-center gap-2"
                href="/dashboard/formularios/formulario500/2"
              >
                Siguiente
                <MdArrowForward className="text-lg" />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
