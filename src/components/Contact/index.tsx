import { useEffect, useState } from "react";
import { CardsContainer, ContactContainer, TextContainer } from "./styles";
import { SocialWebCard } from "./Partials/SocialWebCard";
import { useWindowResize } from "@/utils/useWindowResize";
import { BREAKPOINT_SM } from "@/utils/constants";
import { GeralProps } from "@/types/geral";

export function Contact() {
  const [contactData, setContactData] = useState<ContactItemProps[] | null>(null)

  const [geralData, setGeralData] = useState<GeralProps | null>(null)

  const isMobileSize = useWindowResize(BREAKPOINT_SM)

  useEffect(() => {
    fetch('http://localhost:8000/public/data.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
      setContactData(data['contact_data'])
      setGeralData(data['geral_data'])
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
  }, []);

  return (
    geralData && (
      <ContactContainer backgroundImage={isMobileSize ? geralData?.bg_image_mobile : geralData?.bg_image_desktop}>
      <TextContainer>
        <span>Contact</span>
        <h3>Did you like my work?</h3>
        <p>Get in touch or follow me on social media!</p>
      </TextContainer>
      <CardsContainer>
        {contactData?.map((item) => {
          return (
            <SocialWebCard name={item.name} link={item.link} />
          )
        })}
      </CardsContainer>
    </ContactContainer>
    )
  )
}