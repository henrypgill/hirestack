import { Education, EducationFilter } from "./Education"
import { Role } from "./Role"
import { Skill, SkillFilter } from "./Skill"

export interface User {
  _id: string
  name: string
  pronouns: string
  jobTitle: string
  location: string
  email: string
  phone: string
  linkedin: string
  github: string
  website: string
  bio: string
  education: Education[],
  skills: Skill[];
  roles: Role[];
}

export type UserInsertInput = Omit<User, "_id" >



export interface UserFilter {
  education: EducationFilter[];
  skills: SkillFilter[];
  experience?: number;
}
