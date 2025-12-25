import "./experiencecard.css"
import Experience from "@/app/types/experience";
import { getMLSString, getMonthString } from "@/app/types/root";


export default function ExperienceCard({experience} : {experience: Experience}) {
    return (<div className="experience-card">
        <div className="experience-card-title">
            <h3>{getMLSString(experience.function, "EN")}</h3>
            <h3>·</h3>
            <h4 className="subtext">{experience.company}</h4>
        </div>

        <div className="experience-card-date">
            {getMonthString(experience.startMonth)} {experience.startYear} - {(experience.endYear && experience.endMonth) ? `${getMonthString(experience.endMonth)} ${experience.endYear}` : "current"}
        </div>
    </div>)
}