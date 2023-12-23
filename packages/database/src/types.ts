import { Education, Skill } from "@prisma/client"


export type EducationLevel = "undergraduate" | "masters" | "phd" | "bootcamp" | "course"
export type EducationFilter = Omit<Education, "id" | "userId" | "description"> & {type: EducationLevel}

export type SkillFilter = Omit<Skill, "id" | "userId" | "description">

