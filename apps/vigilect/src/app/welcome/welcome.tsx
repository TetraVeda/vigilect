import styled from 'styled-components';

/* eslint-disable-next-line */
export interface WelcomeProps {}

const StyledWelcome = styled.div`
  color: pink;
`;

export function Welcome(props: WelcomeProps) {
  return (
    <StyledWelcome>
      <h1>Welcome to Welcome!</h1>
    </StyledWelcome>
  );
}

export default Welcome;
