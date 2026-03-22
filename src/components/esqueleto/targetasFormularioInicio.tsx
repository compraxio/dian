import { Skeleton } from '@/components/ui/skeleton';

export function TargetasFormularioInicioSkeleton() {
  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="px-6 py-4 flex items-center gap-4">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex-1 min-w-0 space-y-2">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-3 w-32" />
          </div>
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
      ))}
    </>
  );
}
