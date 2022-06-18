export enum FirstLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}
export class TopPageModel {
  _id: string;
  firstLevelCategory: FirstLevelCategory;
  secondLevelCategory: string;
  title: string;
  currentCategory: string;
  hh?: {
    count: number
    juniorSalary: number
    middleSalary: number
    seniorSalary: number
  };
  advantages: {
		title: string,
		description:string
	}[];
  text: string;
  skillsTitle: string;
  skills: string[];
}
