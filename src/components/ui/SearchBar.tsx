interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Cerca ricetta..."
        className="mb-10 w-full rounded-2xl border border-orange-200 bg-white px-5 py-3 text-slate-800 shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
      />
    </>
  );
}
