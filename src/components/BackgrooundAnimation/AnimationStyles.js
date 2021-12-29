import styled from 'styled-components';

export const AnimationContainer = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
  z-index: -1;
  height: 100%;
  & svg {
    max-width: 100%;
    width: 100%;
    height: 500px;
    max-height: 500px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    & svg {
      height: 100%;
      max-height: 100%;
    }
  }
`;
