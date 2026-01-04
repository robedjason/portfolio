import ExperienceArray from "@/app/types/experience-array";
import TechArray from "@/app/types/tech-array";
import ExperienceCard from "../display/ExperienceCard";


export default function Experiences({ experiences, techs }: { experiences: ExperienceArray, techs: TechArray }) {
    return (<section className="p-8">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4 text-2xl font-bold">Experiences</h2>
            <div className="space-y-8">
            {experiences.map((it, index) => (
                <div className="relative">
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-full h-8 w-0.5 bg-slate-200" />
              )}
                <ExperienceCard experience={it} techs={techs}/>
                </div>
            ))}
            </div>
        </div>
    </section>)
}