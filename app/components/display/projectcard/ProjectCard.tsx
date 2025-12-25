import { Grid, Stack } from "@mui/material"
import "./projectcard.css"
import Image from "next/image"
import Project from "@/app/types/project"
import TechArray from "@/app/types/tech-array"

export default function ProjectCard({ project, techs }: { project: Project, techs: TechArray }) {
  const relevantTechs = techs.filter(tech => project.skills.includes(tech.key))

  return (
    <div className="project-card">
      <Grid container>
        <Grid 
          size="grow">
            <div className="project-card-left">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-subtitle subtext">{project.subtitle}</p>
          <p className="project-card-description">{project.description}</p>

          <div className="project-card-skills">
            <Stack direction="row">
              {relevantTechs.map(({ iconName }) =>
                (<Image key={iconName} alt={iconName} src={`/static/icons/${iconName}`} width={40} height={40} />)
              )}
            </Stack>
          </div>
          </div>
        </Grid>
        <Grid
          size="grow"
          sx={{
            display: {
              xs: 'none',
              md: 'block'
            }
          }}
          borderLeft={2}
          borderColor="var(--border)">
          <div className="project-card-image">
            <Image
              height={1000}
              width={1000}
              style={{ width: 'auto', height: '100%' }}
              alt="/icons"
              src="/static/images/python-screen.jpg" />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}