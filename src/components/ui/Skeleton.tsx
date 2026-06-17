interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <span
      aria-hidden="true"
      className={`block animate-pulse rounded-lg bg-white/[0.07] ${className}`}
    />
  );
}

export function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-[#050608] text-white">
      <aside className="fixed inset-y-4 left-4 hidden w-20 rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:block">
        <Skeleton className="mx-auto mb-8 size-10 rounded-xl" />
        <div className="space-y-4">
          <Skeleton className="mx-auto size-10 rounded-xl" />
          <Skeleton className="mx-auto size-10 rounded-xl" />
          <Skeleton className="mx-auto size-10 rounded-xl" />
          <Skeleton className="mx-auto size-10 rounded-xl" />
        </div>
      </aside>

      <main className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-6 md:pl-28 lg:px-8">
        <section className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <Skeleton className="h-72 md:col-span-2" />
          <Skeleton className="h-72" />
          <Skeleton className="h-72" />
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
          <Skeleton className="h-64 md:col-span-2" />
        </section>
      </main>
    </div>
  );
}
