import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LoadingProps {}

const StyledLoading = styled.div`
  color: pink;
`;

export function Loading(props: LoadingProps) {
  return (
    <StyledLoading>
      <h1>Loading</h1>
    </StyledLoading>
  );
}

export default Loading;
