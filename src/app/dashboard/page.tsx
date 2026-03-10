import Link from 'next/link';
import { MdEditNote, MdSave, MdTaskAlt, MdArticle, MdUploadFile, MdQuiz } from 'react-icons/md';

export default function dashboard() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <section>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">
            ¡Bienvenido, Juan!
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
            Aquí tienes un resumen de tu actividad en el simulador tributario.
          </p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-light dark:bg-neutral-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="size-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-primary flex items-center justify-center shrink-0">
              <MdEditNote className="text-3xl" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Borradores Activos
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">5</p>
            </div>
          </div>
          <div className="bg-neutral-light dark:bg-neutral-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="size-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center shrink-0">
              <MdSave className="text-3xl" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Documentos Guardados
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">12</p>
            </div>
          </div>
          <div className="bg-neutral-light dark:bg-neutral-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="size-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center shrink-0">
              <MdTaskAlt className="text-3xl" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Prácticas Realizadas
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">8</p>
            </div>
          </div>
        </div>
        <section className="bg-neutral-light dark:bg-neutral-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <h3 className="text-lg font-bold">Actividad Reciente</h3>
            <button className="text-sm text-primary font-semibold hover:underline">Ver todo</button>
          </div>
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            <div className="px-6 py-4 flex items-center gap-4">
              <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                <MdArticle className="text-slate-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                  Formulario 210 - Declaración de Renta
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Borrador editado hace 2 horas
                </p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  En progreso
                </span>
              </div>
            </div>
            <div className="px-6 py-4 flex items-center gap-4">
              <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                <MdUploadFile className="text-slate-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                  RUT Actualizado - Persona Natural
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Documento cargado ayer a las 15:45
                </p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  Completado
                </span>
              </div>
            </div>
            <div className="px-6 py-4 flex items-center gap-4">
              <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                <MdQuiz className="text-slate-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                  Práctica: Retención en la Fuente
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Finalizada el 12 de Octubre
                </p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                  Calificado
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group h-40 overflow-hidden rounded-xl bg-primary flex items-end p-6 cursor-pointer">
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
            <img
              alt="Trámites DIAN"
              className="absolute inset-0 size-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
              data-alt="Escritorio con documentos y calculadora en primer plano"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHVKw8fDXGmROs1AswSvTzmxQ4aNfhSjQntIpoy76b8gu9MeVP9zumZVeTSSlh4UpZ8TIRz_73MvGa_SVj1bUzxw_eScbvscO8FcehCeldwR-zPaGl32ztdYj0fFPbcZd1jbvpPTDf4IJmuDv63DEYLFTW_K-fwD992N3bbG00w0DoGMNu9InbZfa6pC64uUfRQ60_RkglmwZiGXz_szZxMMi-Kdw0h0H1ueenS7R4Q1JvLU9Gr6DjzPYiQU8kXHtQfXfIXeFfMV8"
            />
            <div className="relative z-10 text-white">
              <h4 className="text-xl font-bold">Guía de Declaración</h4>
              <p className="text-sm text-white/80">Aprende paso a paso cómo presentar tu renta.</p>
            </div>
          </div>
          <Link
            href="/dashboard/formularios"
            className="relative group h-40 overflow-hidden rounded-xl bg-slate-800 flex items-end p-6 cursor-pointer"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
            <img
              alt="Prácticas"
              className="absolute inset-0 size-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
              data-alt="Gráficos financieros y datos digitales en pantalla"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX_yVdqWB6I7NAfBdneG3bHZdZKz8agkxVxjwdUETEPOIb6qptm4lBeyV3iXF4u0qfCS4gQqX9LxwlG1pfsZ0jK8V8Y7DR8wkzVzhV1SxzHS0axoiAU3uzCb0uvztpaQkrt3QRmJOQP_5vYfD0tbGRNEPdCpp5a26GVOaJY6-A0O39-kyAStSgsPGaXPJICRhDk5uHWWJoKeMH4PzJRPowZ92L08mCbubJn6Qifob7eHNUWlHVcGFcHKFQFwx-AX2CPZCXhb5BSTA"
            />
            <div className="relative z-10 text-white">
              <h4 className="text-xl font-bold">Simuladores Disponibles</h4>
              <p className="text-sm text-white/80">
                Explora todos los escenarios de práctica tributaria.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
