
export interface Role {
    id: string;
    userId: string;
    title: string;
    company: string;
    description: string;
    startMonth: number;
    startYear: number;
    endMonth: number;
    endYear: number;
}

export interface RoleFilter {
    title: string;
    company: string;
    startMonth: number;
    startYear: number;
    endMonth: number;
    endYear: number;
}