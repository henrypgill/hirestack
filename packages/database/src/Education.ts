
export interface Education {
    id: string;
    userId: string;
    specialization: string;
    provider: string;
    type: EducationType;
    description: string;
}

export type EducationType =
  | "undergraduate"
  | "masters"
  | "phd"
  | "bootcamp"
  | "course";




export interface EducationFilter {
    specialization: string;
    type: string;
    provider: string;
  }