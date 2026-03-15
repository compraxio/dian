import prisma from '@/lib/prisma';
import { MdEditNote, MdSave, MdTaskAlt } from 'react-icons/md';

interface TargetasDasboartProps {
  usuario: Awaited<ReturnType<typeof prisma.usuario.findUnique>>;
}

export async function TargetasDasboart({ usuario }: TargetasDasboartProps) {
  if (!usuario) return null;
  
  const documentos = await prisma.documento.count({
    where: {
      usuario_id: usuario.id,
    },
  });
  const borradores = await prisma.formulario_500.count({
    where: {
      AND: {
        usuario_id: usuario.id,
        estado: 'BORRADOR',
      },
    },
  });
  const formularios = await prisma.formulario_500.count({
    where: {
      usuario_id: usuario.id,
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-card flex items-center gap-4">
        <div className="size-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-primary flex items-center justify-center shrink-0">
          <MdEditNote className="text-3xl" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Borradores</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {borradores ? borradores : 0}
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-card flex items-center gap-4">
        <div className="size-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center shrink-0">
          <MdSave className="text-3xl" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Documentos Guardados
          </p>
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {documentos ? documentos : 0}
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-card flex items-center gap-4">
        <div className="size-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center shrink-0">
          <MdTaskAlt className="text-3xl" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Prácticas Realizadas
          </p>
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {formularios ? formularios : 0}
          </p>
        </div>
      </div>
    </div>
  );
}
