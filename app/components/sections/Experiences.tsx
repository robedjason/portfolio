import ExperienceArray from "@/app/types/experience-array";
import TechArray from "@/app/types/tech-array";
import ExperienceCard from "../display/experiencecard/ExperienceCard";


export default function Experiences({experiences, techs}: {experiences: ExperienceArray, techs: TechArray}) {
    return (<div>
        <h2>Experiences</h2>
        {experiences
            .sort((a, b) => (
                a.startYear < b.startYear ?
                    1 : a.startYear > b.startYear ?
                    -1 : a.startMonth < b.startMonth ?
                    1 : -1
            )).map(it => 
            <ExperienceCard experience={it} />
        )}
    </div>)
}