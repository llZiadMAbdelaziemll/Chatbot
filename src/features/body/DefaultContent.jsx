import React from "react";
import styled from "styled-components";
import Heading from "../../ui/Heading";

const StyledDefault = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  color: var(--color-main);
`;

const Img = styled.img`
  mix-blend-mode: luminosity;
  opacity: 0.6;
`;
export default function DefaultContent() {
  return (
    <StyledDefault>
      <Img src="no-chat.svg" alt="no-chat" />
      <Heading as="h2">Ask anything to chatbot</Heading>
    </StyledDefault>
  );
}
