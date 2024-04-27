import React from "react";
import { BounceLoader } from "react-spinners";
import styled from "styled-components";

const StyledLoader = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-main-bg);
`;
export default function Loader({ loading }) {
  return (
    <StyledLoader>
      <BounceLoader
        color="#36d7b7"
        loading={loading}
        size={180}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </StyledLoader>
  );
}
