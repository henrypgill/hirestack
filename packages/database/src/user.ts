import { Prisma } from "@prisma/client";

export type FullUser = Prisma.UserGetPayload<FullUserArgs>;
export type FullUserArgs = ReturnType<typeof fullUserArgs>;
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
      roles: true as true,
    },
  };
}

export interface SkillFilter {
  name: string;
  type: string;
  experience: number;
}

export interface EducationFilter {
  specialization: string;
  type: string;
  provider: string;
}

export interface UserFilter {
  education: EducationFilter[];
  skills: SkillFilter[];
  experience?: number;
}

// export function filterUsersBySkillArgs({name, type, experience}: SkillFilterArgs): Prisma.SkillWhereInput {

//     return {
//         AND: [
//             {
//                 name,
//                 type,
//                 experience,
//             },
//     ]
//     }

// }
