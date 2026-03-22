import prisma from '@/lib/prisma';
import { MdArticle } from 'react-icons/md';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

interface TargetasDasboartProps {
  usuario: Awaited<ReturnType<typeof prisma.usuario.findUnique>>;
}

export async function TargetasFormularioInicio({ usuario }: TargetasDasboartProps) {
  if (!usuario) return null;

  const formularios500 = await prisma.formulario_500.findMany({
    where: {
      usuario_id: usuario.id,
    },
  });

  return (
    <>
      {formularios500.slice(0, 4).map((form) => (
        <div className="px-6 py-4 flex items-center gap-4" key={form.id}>
          <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center shrink-0">
            <MdArticle className="text-slate-500" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
              Formulario 500 - {form.nombre_formulario}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {`${form.estado === 'BORRADOR' ? 'Borrador' : 'Terminado'} ${form.estado === 'BORRADOR' ? 'editado' : 'Terminado'} hace ${formatDistanceToNow(
                new Date(form.fecha_actualizacion || form.fecha_de_creacion),
                {
                  addSuffix: true,
                  locale: es,
                },
              )}`}
            </p>
          </div>
          <div className="text-right">
            <span
              className={`"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${form.estado === 'BORRADOR' ? 'bg-orange-100' : 'bg-green-100'} dark:bg-orange-900/30 ${form.estado === 'BORRADOR' && 'text-primary'} ${form.estado === 'BORRADOR' && 'text-green-700 dark:text-green-400'}"`}
            >
              {form.estado === 'BORRADOR' ? 'En progreso' : 'Terminado'}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
