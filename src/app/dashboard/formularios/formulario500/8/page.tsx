import Link from 'next/link';
import { MdCalculate, MdPayments, MdArrowBack, MdArrowForward } from 'react-icons/md';

export default function seccion2() {
  return (
    <main className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <MdCalculate className="text-primary text-3xl" />
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            SECCIÓN 8 — Autoliquidación
          </h1>
        </div>
        <p className="text-slate-500 dark:text-slate-400">
          Liquidación de tributos aduaneros y sanciones correspondientes (Casillas 92-126).
        </p>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Concepto
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 text-right">
                  Base Gravable
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 text-right w-32">
                  % Arancel
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 text-right w-32">
                  % IVA
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 text-right">
                  Valor Liquidado
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">
                  Arancel
                </td>
                <td className="px-6 py-4">
                  <input
                    readOnly
                    className="w-full text-right bg-transparent border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm dark:text-white"
                    placeholder="0"
                    type="number"
                    value="1000000"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    readOnly
                    className="w-full text-right bg-transparent border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm dark:text-white"
                    placeholder="0"
                    type="number"
                    value="10"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    className="w-full text-right bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm dark:text-slate-500 cursor-not-allowed"
                    disabled
                    type="number"
                    value="0"
                  />
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="px-3 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-sm font-semibold text-slate-900 dark:text-slate-100 border border-transparent">
                    $ 100.000
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">
                  IVA
                </td>
                <td className="px-6 py-4">
                  <input
                    readOnly
                    className="w-full text-right bg-transparent border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm dark:text-white"
                    placeholder="0"
                    type="number"
                    value="1100000"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    className="w-full text-right bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm dark:text-slate-500 cursor-not-allowed"
                    disabled
                    type="number"
                    value="0"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    readOnly
                    className="w-full text-right bg-transparent border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm dark:text-white"
                    placeholder="0"
                    type="number"
                    value="19"
                  />
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="px-3 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-sm font-semibold text-slate-900 dark:text-slate-100 border border-transparent">
                    $ 209.000
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">
                  Salvaguardias
                </td>
                <td className="px-6 py-4">
                  <input
                    readOnly
                    className="w-full text-right bg-transparent border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm dark:text-white"
                    placeholder="0"
                    type="number"
                    value="0"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    readOnly
                    className="w-full text-right bg-transparent border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm dark:text-white"
                    placeholder="0"
                    type="number"
                    value="0"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    className="w-full text-right bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm dark:text-slate-500 cursor-not-allowed"
                    disabled
                    type="number"
                    value="0"
                  />
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="px-3 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-sm font-semibold text-slate-900 dark:text-slate-100 border border-transparent">
                    $ 0
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">
                  Sanciones
                </td>
                <td className="px-6 py-4">
                  <input
                    readOnly
                    className="w-full text-right bg-transparent border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm dark:text-white"
                    placeholder="0"
                    type="number"
                    value="0"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    className="w-full text-right bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm dark:text-slate-500 cursor-not-allowed"
                    disabled
                    type="number"
                    value="0"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    className="w-full text-right bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm dark:text-slate-500 cursor-not-allowed"
                    disabled
                    type="number"
                    value="0"
                  />
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="px-3 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-sm font-semibold text-slate-900 dark:text-slate-100 border border-transparent">
                    $ 0
                  </div>
                </td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-t-2 border-slate-200 dark:border-slate-700">
                <td className="px-6 py-5 text-base font-bold text-slate-900 dark:text-white">
                  TOTALES
                </td>
                <td className="px-6 py-5"></td>
                <td className="px-6 py-5"></td>
                <td className="px-6 py-5"></td>
                <td className="px-6 py-5 text-right">
                  <span className="text-lg font-bold text-primary">$ 309.000</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-linear-to-r from-primary to-[#ff8533] rounded-xl p-6 shadow-lg shadow-primary/20 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-5">
          <div className="p-3 bg-white/20 rounded-full text-white">
            <MdPayments className="text-4xl" />
          </div>
          <div>
            <p className="text-white/80 text-sm font-medium uppercase tracking-wide">Casilla 126</p>
            <h3 className="text-white text-2xl font-bold">Total General a Pagar</h3>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-8 py-4 text-center md:text-right">
          <p className="text-white/70 text-xs font-bold uppercase mb-1">
            Valor en Pesos Colombianos
          </p>
          <p className="text-white text-4xl font-black">$ 309.000</p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800">
        <Link
          href="/dashboard/formularios/formulario500/7"
          className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          <MdArrowBack />
          Anterior
        </Link>
        <div className="flex gap-4">
          <button className="px-6 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            Guardar Borrador
          </button>
          <button className="flex items-center gap-2 px-8 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
            Siguiente
            <MdArrowForward />
          </button>
        </div>
      </div>
    </main>
  );
}
