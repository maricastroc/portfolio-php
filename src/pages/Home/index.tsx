import { Intro } from "@/components/Intro";
import { HomeContainer, LayoutContainer } from "./styles";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export function Home() {
  return (
    <LayoutContainer>
      <HomeContainer>
        <Intro />
        <Projects />
        <Contact />
      </HomeContainer>
    </LayoutContainer>
  );
}