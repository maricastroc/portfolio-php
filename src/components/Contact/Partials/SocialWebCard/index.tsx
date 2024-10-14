import { CardContainer, LinkBtn, SocialWebContainer, Wrapper } from './styles';
import { ArrowUpRight, EnvelopeSimple, GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'

interface SocialWebCardProps {
  name: string;
  link: string;
}

export function SocialWebCard({ name, link }: SocialWebCardProps) {
  
  function renderIcon(name: string) {
    switch (name) {
      case 'LinkedIn':
        return <LinkedinLogo />;;
      case 'Instagram':
        return <InstagramLogo />;;
      case 'Github':
        return <GithubLogo />;
      case 'E-mail':
        return <EnvelopeSimple />;;
      default:
        return null;
    }
  }
console.log(link)
  return (
    <CardContainer>
      <Wrapper>
        <SocialWebContainer>
        {renderIcon(name)}
          <p>{name}</p>
        </SocialWebContainer>
        <LinkBtn href={link} target='_blank'>
          <ArrowUpRight />
        </LinkBtn>
      </Wrapper>
    </CardContainer>
  );
}
