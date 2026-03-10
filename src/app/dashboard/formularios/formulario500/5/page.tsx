import Link from 'next/link';
import { MdWarehouse, MdDirectionsBoat, MdCurrencyExchange, MdReceiptLong, MdArrowBack, MdArrowForward } from 'react-icons/md';

export default function seccion2() {
  return (
    <main className="max-w-5xl mx-auto w-full p-4 md:p-8">
      <form className="space-y-8">
        <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <MdWarehouse className="text-primary" />
            <h3 className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide text-sm">
              DATOS DE INGRESO
            </h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[40]</span> Cód. Lugar ingreso mercancías
              </label>
              <select
                defaultValue=""
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              >
                <option value="">Seleccione lugar</option>
                <option value="001">Bogotá - Aeropuerto El Dorado</option>
                <option value="002">Buenaventura - Puerto</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[41]</span> Cód. Depósito
              </label>
              <select
                defaultValue=""
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              >
                <option value="">Seleccione depósito</option>
                <option value="D01">Depósito Público 1</option>
                <option value="D02">Zona Franca Bogotá</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[42]</span> Manifiesto de carga
              </label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="Ej: MAN-2023-4455"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[43]</span> Fecha llegada
              </label>
              <div className="relative">
                <input
                  className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  type="date"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <MdDirectionsBoat className="text-primary" />
            <h3 className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide text-sm">
              DATOS DE TRANSPORTE
            </h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1.5 lg:col-span-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[44]</span> Documento transporte
              </label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="Ingrese el número de documento"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[54]</span> Cód. Modo transporte
              </label>
              <select
                defaultValue=""
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              >
                <option value="">Seleccione modo</option>
                <option value="1">Marítimo</option>
                <option value="4">Aéreo</option>
                <option value="3">Terrestre</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[55]</span> Código bandera
              </label>
              <select
                defaultValue=""
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              >
                <option value="">Seleccione bandera</option>
                <option value="CO">Colombia</option>
                <option value="US">Estados Unidos</option>
                <option value="PA">Panamá</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[56]</span> Cód. destino mercancía
              </label>
              <select
                defaultValue=""
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              >
                <option value="">Seleccione destino</option>
                <option value="BOG">Bogotá D.C.</option>
                <option value="MED">Medellín</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[57]</span> Empresa transportadora
              </label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[58]</span> Tasa de cambio
              </label>
              <div className="relative">
                <MdCurrencyExchange className="text-slate-400 text-sm" />
                <input
                  className="w-full h-12 pl-11 pr-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="0.00"
                  step="0.01"
                  type="number"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <MdReceiptLong className="text-primary" />
            <h3 className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide text-sm">
              DATOS DE FACTURACIÓN
            </h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[51]</span> No. factura
              </label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="Ej: INV-998877"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[52]</span> Fecha factura
              </label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                type="date"
              />
            </div>
          </div>
        </section>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 pb-12">
          <Link
            href="/dashboard/formularios/formulario500/4"
            className="w-full md:w-auto px-8 py-3 rounded-lg font-bold text-slate-600 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
            type="button"
          >
            <MdArrowBack className="text-lg" />
            Anterior
          </Link>
          <Link
            className="w-full md:w-auto px-10 py-3 rounded-lg font-bold text-white bg-primary hover:bg-orange-600 transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            type="submit"
            href="/dashboard/formularios/formulario500/6"
          >
            Siguiente
            <MdArrowForward className="text-lg" />
          </Link>
        </div>
      </form>
    </main>
  );
}
