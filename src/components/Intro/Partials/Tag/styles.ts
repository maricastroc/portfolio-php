import styled from 'styled-components'

export const TagContainer = styled.div<{ bgColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  height: 1.68rem;
  text-align: center;
  padding: 0.75rem;
  background-color: ${(props) => props.bgColor || 'transparent'};

  p {
    font-size: 1rem;
    font-family: 'Inconsolata', sans-serif;
    color: ${(props) => props.theme['gray-100']};
    font-weight: 700;
  }

  &.smaller {
    height: 1.125rem;

    p {
      font-size: 0.75rem;
    }
  }
`;