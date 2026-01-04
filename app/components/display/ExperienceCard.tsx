import Experience from "@/app/types/experience";
import { getMLSString, getMonthString } from "@/app/types/root";
import TechArray from "@/app/types/tech-array";
import TechChip from "./TechChip";

function displayMonth(experience: Experience) {
    return `${getMonthString(experience.startMonth)} ${experience.startYear} - ${(experience.endYear && experience.endMonth) ? `${getMonthString(experience.endMonth)} ${experience.endYear}` : "current"}`
}


export default function ExperienceCard({ experience, techs }: { experience: Experience, techs: TechArray }) {
    const relevantTechs = techs.filter(tech => experience.skillKeys.includes(tech.key))

    return (<div className="bg-altbackground rounded-xl border p-4">
        <div className="">
            <h3 className="font-bold text-lg">{getMLSString(experience.function, "EN")}</h3>
            <p className="text-xs mb-2">{experience.company} · {getMLSString(experience.location, "EN")} · {displayMonth(experience)}</p>
            <div className="flex flex-wrap gap-2">
                {relevantTechs.map((tech) => <TechChip tech={tech} />)}
            </div>
        </div>
    </div>)
}