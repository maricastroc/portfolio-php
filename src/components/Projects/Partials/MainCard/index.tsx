import { SkillProps } from "@/types/skill";
import { MainCardContainer, SectionContainer, SkillsContainer, TextContainer } from "./styles";
import { Tag } from "@/components/Intro/Partials/Tag";

interface MainCardProps {
  image: string;
  title: string;
  description: string;
  skills: SkillProps[]
}

export function MainCard({ image, title, description, skills }: MainCardProps) {
  return (
    <MainCardContainer>
    <img src={image} alt="" />
    <SectionContainer>
      <TextContainer>
        <h5>{title}</h5>
        <p>{description}</p>
      </TextContainer>
      <SkillsContainer>
        {skills?.map((skill) => {
          return (
            <Tag smaller name={skill.name} color={skill.color} />
          )
        })}
      </SkillsContainer>
    </SectionContainer>
  </MainCardContainer>
  )
}