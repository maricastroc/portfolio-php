import styled from 'styled-components'

export const MainCardContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  width: auto;
  max-width: 17rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-300']};
  gap: 0.5rem;
  border: 1px solid transparent;

  &:hover {
    border-color: ${(props) => props.theme['gray-500']};
    transition: border-color 200ms;
  }

  img {
    width: 100%;
    border-radius: 8px
  }

  @media (min-width: 400px) {
    max-width: 21rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 31.75rem;
    height: 12.5rem;
    gap: 1rem;

    img {
      width: 50%;
      border-radius: 8px
    }
  }

  @media (min-width: 1024px) {
    width: 31.75rem;
    
    img {
      width: 50%;
      height: 9.75rem;
      border-radius: 8px
    }
  }
`;

export const SectionContainer = styled.div`
  padding: 0.75rem 0.75rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;

  h5 {
    font-size: 1rem;
    font-family: 'Maven Pro', sans-serif;
    font-weight: 700;
    border-radius: 8px
  }

  p {
    width: 100%;
    font-size: 0.875rem;
    font-family: 'Maven Pro', sans-serif;
    border-radius: 8px;
    color: ${(props) => props.theme['gray-500']};
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
