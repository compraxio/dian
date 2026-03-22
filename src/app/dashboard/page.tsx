import { requireAuth } from '@/lib/auth';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { TargetasDasboart } from '@/components/targetasDasboart';
import { TargetasDasboartSkeleton } from '@/components/esqueleto/targetasDasboart';
import { TargetasFormularioInicioSkeleton } from '@/components/esqueleto/targetasFormularioInicio';
import { TargetasFormularioInicio } from '@/components/TargetasFormularioInicio';

export default async function dashboard() {
  const usuario = await requireAuth();

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <section>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">
            ¡Bienvenido, {usuario.nombre_usuario}!
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
            Aquí tienes un resumen de tu actividad en el simulador tributario.
          </p>
        </section>

        <Suspense fallback={<TargetasDasboartSkeleton />}>
          <TargetasDasboart usuario={usuario} />
        </Suspense>

        <section className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-card overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700/50 flex items-center justify-between">
            <h3 className="text-lg font-bold">Actividad Reciente</h3>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
            <Suspense fallback={<TargetasFormularioInicioSkeleton />}>
              <TargetasFormularioInicio usuario={usuario} />
            </Suspense>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group h-40 overflow-hidden rounded-xl bg-primary flex items-end p-6 cursor-pointer">
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHVKw8fDXGmROs1AswSvTzmxQ4aNfhSjQntIpoy76b8gu9MeVP9zumZVeTSSlh4UpZ8TIRz_73MvGa_SVj1bUzxw_eScbvscO8FcehCeldwR-zPaGl32ztdYj0fFPbcZd1jbvpPTDf4IJmuDv63DEYLFTW_K-fwD992N3bbG00w0DoGMNu9InbZfa6pC64uUfRQ60_RkglmwZiGXz_szZxMMi-Kdw0h0H1ueenS7R4Q1JvLU9Gr6DjzPYiQU8kXHtQfXfIXeFfMV8"
              alt="Trámites DIAN"
              width={512}
              height={512}
              unoptimized
              loading="eager"
              className="absolute inset-0 size-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
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
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX_yVdqWB6I7NAfBdneG3bHZdZKz8agkxVxjwdUETEPOIb6qptm4lBeyV3iXF4u0qfCS4gQqX9LxwlG1pfsZ0jK8V8Y7DR8wkzVzhV1SxzHS0axoiAU3uzCb0uvztpaQkrt3QRmJOQP_5vYfD0tbGRNEPdCpp5a26GVOaJY6-A0O39-kyAStSgsPGaXPJICRhDk5uHWWJoKeMH4PzJRPowZ92L08mCbubJn6Qifob7eHNUWlHVcGFcHKFQFwx-AX2CPZCXhb5BSTA"
              alt="Prácticas"
              width={512}
              height={512}
              unoptimized
              className="absolute inset-0 size-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
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
