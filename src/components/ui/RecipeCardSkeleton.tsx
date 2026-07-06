export default function RecipeCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-md dark:bg-slate-900">
      <div className="h-48 w-full animate-pulse bg-orange-100 dark:bg-slate-800">
        <div className="p-4">
          <div className="h-6 w-3/4 rounded bg-orange-200 dark:bg-slate-700" />
          <div className="mt-3 h-4 w-1/2 rounded bg-orange-200 dark:bg-slate-700" />
          <div className="mt-3 h-4 w-1/3 rounded bg-orange-200 dark:bg-slate-700" />
        </div>
      </div>
    </article>
  );
}
