import styled from 'styled-components'

export const MainContainer = styled.div`
  padding-top: 12.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.5rem;

  @media (min-width: 1024px) {
    padding: 12.5rem 2rem 2rem;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    max-width: 65rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

  p {
    font-size: 1.25rem;
    text-align: center;
    font-family: 'Inconsolata', sans-serif;
    color: ${(props) => props.theme['red-400']};
  }

  h3 {
    font-size: 1.5rem;
    font-family: 'Maven Pro', sans-serif;
    text-align: center;
    color: ${(props) => props.theme['gray-400']};
  }
`;
