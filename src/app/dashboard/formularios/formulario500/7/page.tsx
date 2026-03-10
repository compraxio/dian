import Link from 'next/link';
import { MdPayments, MdLocalShipping, MdCalculate, MdArrowBack, MdArrowForward } from 'react-icons/md';

export default function seccion2() {
  return (
    <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8">
      <div className="space-y-6">
        <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex items-center gap-2">
            <MdPayments className="text-primary" />
            <h2 className="font-bold text-lg">Valores Base</h2>
          </div>
          <div className="p-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[78]</span> Valor FOB USD
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-slate-500 text-sm">USD $</span>
                </div>
                <input
                  className="block w-full pl-16 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary"
                  id="fob"
                  placeholder="0.00"
                  type="number"
                />
              </div>
              <p className="text-xs text-slate-500 italic">
                Ingrese el valor de la mercancía puesto a bordo.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex items-center gap-2">
            <MdLocalShipping className="text-primary" />
            <h2 className="font-bold text-lg">Gastos Adicionales</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[79]</span> Fletes USD
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-slate-500 text-sm">$</span>
                </div>
                <input
                  className="block w-full pl-8 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary"
                  id="fletes"
                  placeholder="0.00"
                  type="number"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[80]</span> Seguros USD
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-slate-500 text-sm">$</span>
                </div>
                <input
                  className="block w-full pl-8 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary"
                  id="seguros"
                  placeholder="0.00"
                  type="number"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[81]</span> Otros gastos USD
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-slate-500 text-sm">$</span>
                </div>
                <input
                  className="block w-full pl-8 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary"
                  id="otros"
                  placeholder="0.00"
                  type="number"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden ring-1 ring-primary/20">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex items-center gap-2">
            <MdCalculate className="text-primary" />
            <h2 className="font-bold text-lg">Totales y Ajustes</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex flex-col gap-2 opacity-80">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[82]</span> Sumatoria USD (Sólo lectura)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-slate-400 text-sm">$</span>
                </div>
                <input
                  className="block w-full pl-8 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 cursor-not-allowed"
                  readOnly
                  type="text"
                  value="0.00"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">[83]</span> Ajuste valor USD
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-slate-500 text-sm">$</span>
                </div>
                <input
                  className="block w-full pl-8 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary"
                  id="ajuste"
                  placeholder="0.00"
                  type="number"
                />
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex flex-col gap-2 bg-primary/5 dark:bg-primary/10 p-4 rounded-xl">
                <label className="text-sm font-bold text-primary flex items-center gap-2">
                  <span className="bg-primary text-white px-1.5 rounded text-xs">[84]</span> Valor
                  aduana USD (Liquidado)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-primary font-bold text-xl">$</span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-4 py-4 bg-white dark:bg-slate-900 border-2 border-primary rounded-lg text-primary font-bold text-2xl shadow-inner focus:outline-none"
                    readOnly
                    type="text"
                    value="0.00"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex items-center justify-between mt-10 pb-20">
        <Link
          href="/dashboard/formularios/formulario500/6"
          className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-bold transition-colors"
        >
          <MdArrowBack />
          Anterior
        </Link>
        <div className="flex gap-4">
          <button className="hidden md:flex items-center gap-2 px-6 py-3 text-slate-600 dark:text-slate-400 font-medium">
            Omitir por ahora
          </button>
          <Link
            href="/dashboard/formularios/formulario500/8"
            className="flex items-center gap-2 px-8 py-3 bg-primary text-white hover:bg-primary/90 rounded-lg font-bold shadow-lg shadow-primary/20 transition-all active:scale-95"
          >
            Siguiente
            <MdArrowForward />
          </Link>
        </div>
      </div>
    </main>
  );
}
