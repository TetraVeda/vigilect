import styled from 'styled-components';

import Welcome from './welcome/welcome';
import React, { useEffect, useState } from 'react';
import { ready } from '@kentbull/signify-ts';
import Loading from './loading/loading';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [appReady, setAppReady] = useState(false);
  useEffect(() => {
    ready().then(() => {
      setAppReady(true);
    });
  }, []);
  return appReady ? (
    <StyledApp>
      <Welcome></Welcome>
    </StyledApp>
  ) : (
    <Loading />
  );
}

export default App;
