export interface TProject {
  title: string;
  description: string;
}

export interface TExperience {
  period: string;
  role: string;
  company: string;
  projects: TProject[];
  isDeleted?: boolean;
}
