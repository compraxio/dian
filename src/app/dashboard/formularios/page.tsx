import {
  MdLocalShipping,
  MdArrowForward,
  MdUpdate,
  MdBusiness,
  MdPerson,
  MdReceiptLong,
  MdPayments,
  MdInventory,
  MdAddCircle,
} from 'react-icons/md';

export default function formularios() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
            Formularios Disponibles
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg">
            Seleccione un formulario para comenzar su práctica de simulación tributaria. Todos los
            cálculos se actualizan en tiempo real.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row">
            <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Oficina moderna con documentos financieros y calculadoras"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjLcWpneCijYrSXULBVG7534TEi0Wm5LtvWKXn-DLeh13AJdwpFz0FpiUCXCBBFM4Gw60Amk1ojwrPZLY3N8P8zbt9zmfWKufd1XgI-1LlKh-c981N-Cvhr-8hUuthT-YGoxoKD50CGgYmjLRhWI0xOi4XELUqA53mGUnXjugVL4pXaMU4BtaC2YAVVZTjuJs92TqqfWGle95YK1mzEU5o00C00RsxKYCdzCsacfI3hlQGmjMXx6xrgpUlSMFO2j0JmBkjYzavnKg"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase">
                Destacado
              </div>
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">
                    Formulario 500
                  </h3>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                    Declaración de Importación
                  </h2>
                </div>
                <MdLocalShipping className="text-primary text-3xl" />
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">
                Utilizado para declarar legalmente la importación de mercancías al territorio
                aduanero nacional. Incluye cálculo de aranceles e IVA.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-primary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-primary/20">
                  Practicar Ahora
                  <MdArrowForward className="text-sm" />
                </button>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <MdUpdate className="text-xs" />
                  Actualizado: Oct 2023
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                <MdBusiness size={25} />
              </div>

              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                Impuesto al Consumo
              </span>
            </div>

            <h3 className="text-xs font-bold text-primary mb-1">Formulario 510</h3>

            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Declaración Impuesto Nacional al Consumo
            </h4>

            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">
              Declaración del impuesto nacional al consumo para responsables de servicios como
              restaurantes, bares y otros gravados por este impuesto ante la DIAN.
            </p>

            <button className="w-full py-2 bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white text-slate-700 dark:text-slate-300 font-bold rounded-lg transition-all text-sm">
              Practicar
            </button>
          </div>

          <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 p-6 rounded-xl flex flex-col items-center justify-center text-center opacity-60">
            <MdAddCircle className="text-4xl text-slate-300 mb-2" />
            <h4 className="text-sm font-bold text-slate-400">Más formularios pronto</h4>
            <p className="text-xs text-slate-400">Estamos trabajando en nuevos simuladores.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
