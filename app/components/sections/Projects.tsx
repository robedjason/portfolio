import { Stack } from "@mui/material";
import ProjectCard from "../display/projectcard/ProjectCard";
import Project from "@/app/types/project";
import Tech from "@/app/types/tech";


export default function Projects({ projects, techs }: { projects: Project[], techs: Tech[] }) {
  return (<div className="section">
    <h2>Projects</h2>
    <p className="subtext">Projects I've worked on.</p>
    <Stack gap={4}>
      {projects.map(it => (
        <ProjectCard key={it.id} project={it} techs={techs} />
      ))}
    </Stack>
  </div>)
}