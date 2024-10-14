import { Description, IntroContainer, ProfileImg, Subtitle, TagsContainer, Title } from "./styles";
import { IntroProps } from "@/types/intro";
import { useEffect, useState } from "react";
import { Tag } from "./Partials/Tag";
import { SkillProps } from "@/types/skill";
import { GeralProps } from "@/types/geral";
import { useWindowResize } from "@/utils/useWindowResize";
import { BREAKPOINT_SM } from "@/utils/constants";

export function Intro() {
  const [introData, setIntroData] = useState<IntroProps | null>(null)

  const [skillsData, setSkillsData] = useState<SkillProps[] | null>(null)

  const isMobileSize = useWindowResize(BREAKPOINT_SM)

  const [geralData, setGeralData] = useState<GeralProps | null>(null)

  useEffect(() => {
    fetch('http://localhost:8000/public/data.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        setIntroData(data['intro_data'])
        setSkillsData(data['skills_data'])
        setGeralData(data['geral_data'])
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
  }, []);

  return (
    geralData && (
      <IntroContainer backgroundImage={isMobileSize ? geralData?.bg_image_mobile : geralData?.bg_image_desktop}>
        <ProfileImg>
          <img src={introData?.profile_image} />
        </ProfileImg>
        <Subtitle>
          {introData?.subtitle}
          {' '}
          <span>{introData?.dev_name}</span> and I'm a
        </Subtitle>
        <Title>{introData?.title}</Title>
        <Description>{introData?.description}</Description>

        <TagsContainer>
          {skillsData?.map((skill: SkillProps) => {
            return (
              <Tag name={skill.name} color={skill.color} />
            )
          })}
        </TagsContainer>
      </IntroContainer>
    )
  );
}