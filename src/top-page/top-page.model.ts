import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export enum FirstLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class HhData {
  @prop()
  count: number;

  @prop()
  juniorSalary: number;

  @prop()
  middleSalary: number;

  @prop()
  seniorSalary: number;
}

export class TopPageAdvantage {
  @prop()
  title: string;

  @prop()
  description: string;
}

export interface TopPageModel extends Base {}
export class TopPageModel extends TimeStamps {
  @prop({ enum: FirstLevelCategory })
  firstLevelCategory: FirstLevelCategory;

  @prop()
  secondLevelCategory: string;

  @prop({ unique: true })
  alias: string;

  @prop()
  title: string;

  @prop()
  currentCategory: string;

  @prop({ type: () => HhData })
  hh?: HhData;

  @prop({ type: () => [TopPageAdvantage] })
  advantages: TopPageAdvantage[];

  @prop()
  text: string;

  @prop()
  skillsTitle: string;

  @prop({ type: () => [String] })
  skills: string[];
}
