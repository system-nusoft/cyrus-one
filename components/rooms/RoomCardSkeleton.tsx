export default function RoomCardSkeleton() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-neutral-100 animate-pulse"
      aria-hidden="true"
    >
      {/* Image placeholder */}
      <div className="aspect-[4/3] lg:aspect-auto bg-neutral-200 min-h-[320px]" />

      {/* Content placeholder */}
      <div className="p-8 flex flex-col gap-5">
        <div className="h-7 w-2/3 bg-neutral-200 rounded-lg" />

        <div className="space-y-2">
          <div className="h-4 w-20 bg-neutral-200 rounded" />
          <div className="h-4 w-full bg-neutral-200 rounded" />
          <div className="h-4 w-5/6 bg-neutral-200 rounded" />
          <div className="h-4 w-4/6 bg-neutral-200 rounded" />
        </div>

        <div className="flex gap-2">
          <div className="h-8 w-36 bg-neutral-200 rounded-full" />
          <div className="h-8 w-24 bg-neutral-200 rounded-full" />
          <div className="h-8 w-20 bg-neutral-200 rounded-full" />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-neutral-200" />
              <div className="h-3 w-12 bg-neutral-200 rounded" />
            </div>
          ))}
        </div>

        <div className="mt-auto rounded-2xl bg-neutral-100 p-4 flex items-center justify-between">
          <div className="space-y-1">
            <div className="h-6 w-40 bg-neutral-200 rounded" />
            <div className="h-4 w-24 bg-neutral-200 rounded" />
          </div>
          <div className="h-11 w-40 bg-neutral-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}
