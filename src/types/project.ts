import { SkillProps } from "./skill";

export interface ProjectProps {
  name: string;
  description: string;
  image: string;
  skills: SkillProps[];
}