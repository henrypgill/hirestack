
export interface Skill {
    id: string;
    userId: string;
    name: string;
    type: string;
    experience: number;
    description: string;
}

export interface SkillFilter {
    name: string;
    type: string;
    experience: number;
  }