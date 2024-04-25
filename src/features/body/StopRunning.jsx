import React from "react";
import styled from "styled-components";
import Button from "../../ui/Button";
import { MdStop } from "react-icons/md";

const StyledStop = styled.div`
  position: fixed;

  bottom: 11rem;
  left: 55%;
  padding: 0;
  /* background-color: rgb(59, 237, 178); */
  border-radius: 10px;
  margin: auto;
  color: black;
  animation: fadeIn 1s;
  & button {
    display: flex;

    align-items: center;
    gap: 0.5rem;
    font-size: 1.6rem;
  }
  & svg {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    left: 42%;
  }
`;
export default function StopRunning({ stopTypingAnimation }) {
  return (
    <StyledStop>
      <Button size="medium" variation="secondary" onClick={stopTypingAnimation}>
        <MdStop /> Stop
      </Button>
    </StyledStop>
  );
}
