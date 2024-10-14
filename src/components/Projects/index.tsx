import { ProjectProps } from "@/types/project"
import { useEffect, useState } from "react"
import { CardsContainer, MainContainer, TextContainer } from "./styles";
import { MainCard } from "./Partials/MainCard";

export function Projects() {
  const [projectsData, setProjectsData] = useState<ProjectProps[] | null>(null)

  useEffect(() => {
    fetch('http://localhost:8000/public/data.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProjectsData(data['geral_data']['projects']);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <MainContainer>
      <TextContainer>
        <p>My work</p>
        <h2>See Featured Projects</h2>
      </TextContainer>
      <CardsContainer>
        {projectsData?.map((project, index) => {
          return (
            <MainCard key={index} image={project.image} title={project.name} description={project.description} skills={project.skills} />
          )
        })}
      </CardsContainer>
    </MainContainer>
  )
}