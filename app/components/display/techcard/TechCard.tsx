import Tech, { ExperienceLevel } from "@/app/types/tech";
import Image from "next/image";
import './techcard.css';

export default function TechCard({ tech }: { tech: Tech }) {

  return <div className="tech-card">
    <Image alt={tech.key} src={`/static/icons/${tech.iconName}`} width={40} height={40} />
    <h3>{tech.title}</h3>
    {/* <p className="subtext"> {tech.yearsExperience} {tech.yearsExperience === 1 ? "year" : "years"} of experience</p> */}
    <p className="subtext">{ExperienceLevel.getByKey(tech.experienceLevel).description}</p>
  </div>
}
