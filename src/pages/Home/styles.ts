import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme['gray-200']};
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: auto;


  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7.5rem 1.5rem 1.5rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 3rem;
  line-height: 3.3rem;
`;

export const Subtitle = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-family: 'Inconsolata', sans-serif;
  line-height: 1.5rem;

  span {
    color: ${(props) => props.theme['red-400']};
  }
`;

export const Description = styled.p`
  max-width: 42.5rem;
  margin-top: 1.25rem;
  font-size: 0.875rem;
  font-family: 'Maven Pro', sans-serif;
  text-align: center;
  color: ${(props) => props.theme['gray-400']};
`;

export const ProfileImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.2rem;
  height: 6.2rem;
  margin-bottom: 3.5rem;
  border-radius: 50%;
  border: solid, 2px, ${(props) => props.theme['red-400']};

  img {
    width: 5.8rem;
    height: 5.8rem;
    border-radius: 50%;
    padding: 0.15rem;
  }
`;