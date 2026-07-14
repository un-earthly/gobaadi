import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col gap-8 pt-20" aria-label="Loading content">
      {/* Hero skeleton */}
      <div className="bg-surface-warm px-4 py-10 lg:py-16">
        <div className="mx-auto max-w-[1440px] space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
            <Skeleton className="h-[300px] rounded-3xl lg:h-[456px]" />
            <Skeleton className="hidden h-[470px] rounded-3xl lg:block" />
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
            <Skeleton className="h-[300px] rounded-3xl lg:w-[26%]" />
            <Skeleton className="h-[450px] rounded-3xl lg:w-[22%]" />
            <Skeleton className="h-[300px] flex-1 rounded-3xl" />
          </div>
        </div>
      </div>
      {/* Section skeletons */}
      <div className="mx-auto max-w-5xl space-y-4 px-4">
        <Skeleton className="mx-auto h-6 w-32" />
        <Skeleton className="mx-auto h-12 w-96" />
        <Skeleton className="mx-auto h-24 w-full max-w-2xl" />
      </div>
    </div>
  );
}
