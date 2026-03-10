import { MdDescription, MdNotifications, MdAccountCircle } from 'react-icons/md';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-primary/10 px-4 md:px-20 py-4">
          <div className="max-w-300 mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg text-white">
                <MdDescription className="text-2xl" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">DIAN Formulario 500</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Declaración de Importación
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex flex-col items-end gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-primary">10% Completado</span>
                  <div className="w-32 h-2 bg-primary/20 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{width: '10%'}}></div>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                  Sección 1 de 10
                </span>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                  <MdNotifications className="text-slate-600 dark:text-slate-300" size={25} />
                </button>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <MdAccountCircle className="text-primary" size={25} />
                </div>
              </div>
            </div>
          </div>
        </header>
        {children};
      </div>
    );
}
