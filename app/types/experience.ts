import { MultiLangString } from "./root"

export type Experience = {
  id: number
  startMonth: number
  startYear: number
  endMonth?: number
  endYear?: number
  function: MultiLangString
  company: string
  location: MultiLangString
  description: MultiLangString
  skillKeys: string[]
}

export default Experience