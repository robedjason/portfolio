type TechCategory = {
  key: string
  description: string
}

const TechCategories = [
  {
    key: "BE",
    description: "Backend"
  },
  {
    key: "FE",
    description: "Frontend"
  },
  {
    key: "DB",
    description: "Database"
  },
  {
    key: "INFRA",
    description: "Infrastructure"
  }
] satisfies readonly TechCategory[]


type TechCategoryKey = (typeof TechCategories)[number]["key"]

export namespace TechCategory {
  export const getByKey = (key: TechCategoryKey): TechCategory => TechCategories.find(it => it.key === key)!!
}

type ExperienceLevel = {
  key: string
  description: string
}

const ExperienceLevels = [
  {
    key: "HIGH",
    description: "Expert"
  },
  {
    key: "MEDIUM",
    description: "Strong",
  },
  {
    key: "LOW",
    description: "Working Knowledge"
  }
] satisfies readonly ExperienceLevel[]

type ExperienceLevelKey = (typeof ExperienceLevels)[number]["key"]

export namespace ExperienceLevel {
  export const getByKey = (key: ExperienceLevelKey): ExperienceLevel => ExperienceLevels.find(it => it.key === key)!!;
}

export type Tech = {
  key: string
  title: string
  iconName: string
  experienceLevel: ExperienceLevelKey
  yearsExperience: number
  categoryKey: TechCategoryKey
}

export default Tech;