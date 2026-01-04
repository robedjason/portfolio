import Project from "@/app/types/project"
import TechArray from "@/app/types/tech-array"
import TechChip from "./TechChip"



export default function ProjectCard({ project, techs }: { project: Project, techs: TechArray }) {
  const relevantTechs = techs.filter(tech => project.skills.includes(tech.key))

  return (
    <div className="bg-background border rounded-xl p-3">
      <p className="font-bold text-lg">{project.title}</p>
      <p className="text-subtext pb-2">{project.subtitle}</p>
      <p className="pb-2 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {relevantTechs.map((tech) => <TechChip tech={tech} />)}
      </div>
    </div>
  )
}