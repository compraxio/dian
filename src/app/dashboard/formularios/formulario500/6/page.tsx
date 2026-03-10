import Link from 'next/link';
import { MdInventory2, MdDelete, MdAddCircle, MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function seccion2() {
  return (
    <main className="flex flex-1 justify-center py-6 px-4 md:px-10">
      <div className="flex flex-col max-w-5xl flex-1 gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <MdInventory2 className="text-primary text-3xl" />
            </div>
            <div>
              <h1 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-extrabold tracking-tight">
                SECCIÓN 6 — Datos de la Mercancía
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Gestión de ítems y clasificación arancelaria detallada
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                ITEM
              </span>
              <h3 className="text-slate-900 dark:text-white text-lg font-bold">Ítem 1</h3>
            </div>
            <button className="flex items-center gap-1 text-red-600 hover:text-red-700 font-semibold text-sm transition-colors">
              <MdDelete className="text-lg" />
              Eliminar Ítem
            </button>
          </div>
          <div className="p-6 space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-4 border-l-4 border-primary pl-3">
                <h4 className="text-slate-900 dark:text-white font-bold uppercase text-xs tracking-widest">
                  1. Clasificación Arancelaria
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-5 text-center">
                      59
                    </span>
                    Subpartida arancelaria
                  </label>
                  <input
                    className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm"
                    placeholder="0000.00.00.00"
                    type="text"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-5 text-center">
                      60
                    </span>
                    Código complementario
                  </label>
                  <input
                    className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm"
                    placeholder="0000"
                    type="text"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-5 text-center">
                      61
                    </span>
                    Código suplementario
                  </label>
                  <input
                    className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm"
                    placeholder="0000"
                    type="text"
                  />
                </div>
              </div>
            </section>
            <section>
              <div className="flex items-center gap-2 mb-4 border-l-4 border-primary pl-3">
                <h4 className="text-slate-900 dark:text-white font-bold uppercase text-xs tracking-widest">
                  2. Modalidad y Pagos
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-1.5">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-5 text-center">
                      62
                    </span>
                    Cód. Modalidad
                  </label>
                  <select className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm">
                    <option value="">Seleccione...</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-5 text-center">
                      63
                    </span>
                    No. cuotas o meses
                  </label>
                  <input
                    className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm"
                    placeholder="0"
                    type="number"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-5 text-center">
                      64
                    </span>
                    Valor cuota USD
                  </label>
                  <input
                    className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm"
                    placeholder="0.00"
                    step="0.01"
                    type="number"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-5 text-center">
                      65
                    </span>
                    Periodicidad pago
                  </label>
                  <select className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm">
                    <option value="">Seleccione...</option>
                  </select>
                </div>
              </div>
            </section>
            <section>
              <div className="flex items-center gap-2 mb-4 border-l-4 border-primary pl-3">
                <h4 className="text-slate-900 dark:text-white font-bold uppercase text-xs tracking-widest">
                  3. Origen y Acuerdos
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="space-y-1.5">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-5 text-center">
                      66
                    </span>
                    Cód. País origen
                  </label>
                  <select className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm">
                    <option value="">CO</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-5 text-center">
                      67
                    </span>
                    Cód. Acuerdo
                  </label>
                  <select className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm">
                    <option value="">Seleccione...</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-5 text-center">
                      68
                    </span>
                    Forma pago
                  </label>
                  <select className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm">
                    <option value="">Seleccione...</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-5 text-center">
                      69
                    </span>
                    Tipo importación
                  </label>
                  <select className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm">
                    <option value="">Seleccione...</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-5 text-center">
                      70
                    </span>
                    Cód. País compra
                  </label>
                  <select className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm">
                    <option value="">Seleccione...</option>
                  </select>
                </div>
              </div>
            </section>
            <section>
              <div className="flex items-center gap-2 mb-4 border-l-4 border-primary pl-3">
                <h4 className="text-slate-900 dark:text-white font-bold uppercase text-xs tracking-widest">
                  4. Información Física
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
                <div className="space-y-1.5 md:col-span-1">
                  <label className="text-slate-700 dark:text-slate-300 text-[10px] font-bold flex items-center gap-1 uppercase">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-4 text-center">
                      71
                    </span>
                    Peso bruto kgs
                  </label>
                  <input
                    className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm"
                    placeholder="0.00"
                    step="0.01"
                    type="number"
                  />
                </div>
                <div className="space-y-1.5 md:col-span-1">
                  <label className="text-slate-700 dark:text-slate-300 text-[10px] font-bold flex items-center gap-1 uppercase">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-4 text-center">
                      72
                    </span>
                    Peso neto kgs
                  </label>
                  <input
                    className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm"
                    placeholder="0.00"
                    step="0.01"
                    type="number"
                  />
                </div>
                <div className="space-y-1.5 md:col-span-1">
                  <label className="text-slate-700 dark:text-slate-300 text-[10px] font-bold flex items-center gap-1 uppercase">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-4 text-center">
                      73
                    </span>
                    Cód. Embalaje
                  </label>
                  <select className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm">
                    <option value=""></option>
                  </select>
                </div>
                <div className="space-y-1.5 md:col-span-1">
                  <label className="text-slate-700 dark:text-slate-300 text-[10px] font-bold flex items-center gap-1 uppercase">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-4 text-center">
                      74
                    </span>
                    No. bultos
                  </label>
                  <input
                    className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm"
                    placeholder="0"
                    type="number"
                  />
                </div>
                <div className="space-y-1.5 md:col-span-1">
                  <label className="text-slate-700 dark:text-slate-300 text-[10px] font-bold flex items-center gap-1 uppercase">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-4 text-center">
                      75
                    </span>
                    Subpartidas
                  </label>
                  <input
                    className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm"
                    type="text"
                  />
                </div>
                <div className="space-y-1.5 md:col-span-1">
                  <label className="text-slate-700 dark:text-slate-300 text-[10px] font-bold flex items-center gap-1 uppercase">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-4 text-center">
                      76
                    </span>
                    Unidad física
                  </label>
                  <select className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm">
                    <option value=""></option>
                  </select>
                </div>
                <div className="space-y-1.5 md:col-span-1">
                  <label className="text-slate-700 dark:text-slate-300 text-[10px] font-bold flex items-center gap-1 uppercase">
                    <span className="bg-primary/20 text-primary rounded px-1 min-w-4 text-center">
                      77
                    </span>
                    Cantidad
                  </label>
                  <input
                    className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm"
                    placeholder="0.00"
                    step="0.01"
                    type="number"
                  />
                </div>
              </div>
            </section>
            <section>
              <div className="flex items-center gap-2 mb-4 border-l-4 border-primary pl-3">
                <h4 className="text-slate-900 dark:text-white font-bold uppercase text-xs tracking-widest">
                  5. Descripción de la Mercancía
                </h4>
              </div>
              <div className="space-y-1.5">
                <label className="text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5">
                  <span className="bg-primary/20 text-primary rounded px-1 min-w-5 text-center">
                    91
                  </span>
                  Descripción detallada de la mercancía
                </label>
                <textarea
                  className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm p-3"
                  placeholder="Indique características, estado, modelo, marca, etc."
                ></textarea>
              </div>
            </section>
          </div>
        </div>
        <button className="w-full py-4 border-2 border-dashed border-primary/40 rounded-xl flex items-center justify-center gap-2 text-primary font-bold hover:bg-primary/5 transition-all group">
          <MdAddCircle className="group-hover:scale-110 transition-transform" />
          Agregar otra mercancía
        </button>
        <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800 mb-10">
          <Link
            href="/dashboard/formularios/formulario500/5"
            className="px-8 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            <MdChevronLeft />
            Anterior
          </Link>
          <Link
            href="/dashboard/formularios/formulario500/7"
            className="px-10 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 flex items-center gap-2"
          >
            Siguiente
            <MdChevronRight />
          </Link>
        </div>
      </div>
    </main>
  );
}
