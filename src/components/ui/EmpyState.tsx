interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <>
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>

        <p className="mt-2 text-slate-600">{description}</p>
      </div>
    </>
  );
}
