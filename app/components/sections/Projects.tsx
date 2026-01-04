import Project from "@/app/types/project";
import Tech from "@/app/types/tech";
import ProjectCard from "../display/ProjectCard";


export default function Projects({ projects, techs }: { projects: Project[], techs: Tech[] }) {
  return (<section className="p-8 bg-altbackground">
    <div className="mx-auto max-w-6xl">
      <h2 className="text-center text-2xl font-bold">Projects</h2>
      <p className="text-center text-subtext mb-4">Projects I've worked on.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(it => (
          <ProjectCard key={it.id} project={it} techs={techs} />
        ))}
      </div></div>
  </section>)
}