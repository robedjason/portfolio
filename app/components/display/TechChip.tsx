import Tech from "@/app/types/tech";


export default function TechChip({ tech }: { tech: Tech }) {

  return (
    <div className="
    bg-slate-100 text-slate-700 border border-slate-200
    dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600
      p-1 rounded-lg">
      <p className="text-xs">{tech.title}</p>
    </div>
  )
}