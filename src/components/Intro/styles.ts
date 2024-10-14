import styled from 'styled-components'

export const IntroContainer  = styled.div<{ backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7.5rem 1.5rem 1.5rem;
  text-align: center;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-attachment: fixed;
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

export const TagsContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;