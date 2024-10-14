import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 1.25rem;
  border-radius: 8px;
  align-items: center;
  background-color: ${(props) => props.theme['gray-300']};
  min-width: 100%;
  height: 4.25rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SocialWebContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70vw;
  max-width: 25rem;
  gap: 0.75rem;

  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-400']};
  }

  p {
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Maven Pro', sans-serif;
    color: ${(props) => props.theme['gray-500']};
  }
`;

export const LinkBtn = styled.a`
background-color: transparent;
border: none;
align-items: center;

  svg {
    font-size: 1.25rem;
    color: ${(props) => props.theme['blue-400']};
    margin-top: 0.3rem
  }
`;