import { Prisma, Skill } from "@prisma/client"
import { EducationFilter, SkillFilter } from "./types";


export type FullUser = Prisma.UserGetPayload<FullUserArgs>
export type FullUserArgs = ReturnType<typeof fullUserArgs>
export function fullUserArgs() {
    return {
        select: {
            id: true as true,
            name: true as true,
            pronouns: true as true,
            jobTitle: true as true,
            location: true as true,
            email: true as true,
            phone: true as true,
            linkedin: true as true,
            github: true as true,
            website: true as true,
            bio: true as true,
            education: true as true,
            skills: true as true,
            roles: true as true
        },
    }
}

type A = Skill

export interface UserFilterArgs {
    education: EducationFilter[];
    skills: SkillFilter[];
    experience?: number;
  }

export function getFilterUserArgs({education, skills, experience}: UserFilterArgs): Prisma.UserFindManyArgs {
      
    const AndArgs: Prisma.UserWhereInput[] = []

    skills.forEach(skill => {
        AndArgs.push({
            AND: [
                {
                    skills: {
                        some: {
                            experience: {
                                gte: skill.experience
                            }
                        }
                }
            }
        ]
        })
    })

    return {
        ...fullUserArgs(),
        where: {
            OR: [

            ]
        }
    }
}