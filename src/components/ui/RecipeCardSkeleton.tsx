export default function RecipeCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-md">
      <div className="h-48 w-full animate-pulse bg-orange-100">
        <div className="p-4">
          <div className="h-6 w-3/4 animate-pulse rounded bg-orange-100" />
          <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-orange-100" />
          <div className="mt-3 h-4 w-1/3 animate-pulse rounded bg-orange-100" />
        </div>
      </div>
    </article>
  );
}
