import Tech, { ExperienceLevel, ExperienceLevelKey } from "@/app/types/tech";
import Image from "next/image";

function ExperienceLevelCard({ level }: { level: ExperienceLevelKey }) {

  const style = level === "HIGH" ? "bg-teal-100 text-teal-900 dark:bg-teal-700 dark:text-teal-50" :
    level === "MEDIUM" ? "bg-blue-100 text-blue-900 dark:bg-blue-700 dark:text-blue-50" :
      level === "LOW" ? "bg-amber-100 text-amber-900 dark:bg-amber-700 dark:text-amber-50" : ""

  return (
    <div className={style + " rounded-lg p-1 border"}>
      <p>{ExperienceLevel.getByKey(level).description}</p>
    </div>
  )
}
export default function TechCard({ tech }: { tech: Tech }) {

  return <div className="flex bg-background border rounded-xl p-4 items-center">
    <div className="flex flex-1 gap-2">
      <div className="dark:invert">
        <Image alt={tech.key} src={`/static/icons/${tech.iconName}`} width={40} height={40} />
      </div>
      <div>
        <h3>{tech.title}</h3>
        <p className="text-subtext"> {tech.yearsExperience} {tech.yearsExperience === 1 ? "year" : "years"} of experience</p>
      </div>
    </div>
    <ExperienceLevelCard level={tech.experienceLevel} />
  </div>
}
