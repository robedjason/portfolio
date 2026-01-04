import TechCard from "../display/TechCard";
import TechArray from "@/app/types/tech-array";
import { TechCategory } from "@/app/types/tech";


export default function Techs({ techs }: { techs: TechArray }) {

  const techGroupings = Object.entries(Object.groupBy(techs, tech => tech.categoryKey)).map(([categoryKey, groupedTechs]) => ({
    category: TechCategory.getByKey(categoryKey),
    groupedTechs: groupedTechs || []
  }))

  return (<section className="py-8 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center text-2xl font-bold">Technologies</h2>
      <p className="text-center text-subtext mb-6">Technologies I've worked with.</p>
      <div className="grid md:grid-cols-2 gap-8">
        {techGroupings.map(({ category, groupedTechs }) => (
          <div className="bg-altbackground rounded-3xl border p-6">
            <h3 className="text-xl font-bold mb-4">{category.description}</h3>
            {groupedTechs.map(it => (
              <div key={it.key} className="mb-3">
                <TechCard key={it.key} tech={it} />
              </div>
            ))}
          </div>
        )
        )}
      </div>
    </div>
  </section>)
}