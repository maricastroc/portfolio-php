import styled from 'styled-components'

export const ContactContainer = styled.div<{ backgroundImage: string }>`
  padding-top: 12.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 7rem;
  gap: 3.5rem;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-attachment: fixed;

  @media (min-width: 1024px) {
    padding: 12.5rem 2rem 7rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.25rem;
    text-align: center;
    font-family: 'Inconsolata', sans-serif;
    color: ${(props) => props.theme['purple-400']};
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Maven Pro', sans-serif;
    text-align: center;
    color: ${(props) => props.theme['gray-600']};
  }

  p {
    font-size: 1rem;
    margin-top: 0.2rem;
    text-align: center;
    font-family: 'Inconsolata', sans-serif;
    color: ${(props) => props.theme['gray-500']};
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
