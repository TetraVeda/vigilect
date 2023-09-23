import styled from 'styled-components';
import { useEffect } from "react";

/* eslint-disable-next-line */
export interface WelcomeProps {}

const StyledWelcome = styled.div`
  color: pink;
`;

export function Welcome(props: WelcomeProps) {

  useEffect(() => {

  }, [])

  function createIdentifier() {
    console.log("Creating Signify Identifier")
  }
  return (
    <StyledWelcome>
      <h1>Welcome to Welcome!</h1>
      <label htmlFor="passcode">Passcode</label>
      <input name="passcode" type="text" placeholder="passcode"/>
      <p></p>
      <button name="login" onClick={createIdentifier}>Log in</button>
    </StyledWelcome>
  );
}

export default Welcome;
