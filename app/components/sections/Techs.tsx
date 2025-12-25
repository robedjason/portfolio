import { Divider, Grid } from "@mui/material";
import TechCard from "../display/techcard/TechCard";
import TechArray from "@/app/types/tech-array";
import { Fragment } from "react/jsx-runtime";
import { TechCategory } from "@/app/types/tech";


export default function Techs({ techs }: { techs: TechArray }) {
  return (<div>
    <h2>Technologies</h2>
    <p className="subtext">Technologies I've worked with.</p>
    {Object.entries(Object.groupBy(techs, tech => tech.categoryKey)).map(([categoryKey, groupedTechs]) => {
      if (!groupedTechs || groupedTechs.length == 0) return <Fragment />
      const category = TechCategory.getByKey(categoryKey)
      return (
        <div className="techs-category">
          <h3>{category.description}</h3>
          <Grid container spacing={2}>
            {groupedTechs.map(it => (
              <Grid size={{ xs: 12, sm: 6 }} key={it.key}>
                <TechCard key={it.key} tech={it} />
              </Grid>
            ))}
          </Grid>
        </div>
      )
    })}
  </div>)
}