import React from "react";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import { motion } from "framer-motion";

const StyledDefault = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  color: var(--color-main);
  margin-top: 5rem;
`;

const Img = styled.img`
  mix-blend-mode: luminosity;
  opacity: 0.6;
  @media (max-width: 480px) {
    width: 70%;
  }
`;
export default function DefaultContent() {
  return (
    <StyledDefault>
      <Img src="no-chat.svg" alt="no-chat" />

      <motion.div
        initial={{ opacity: 0, scale: 0 }} // Initial animation properties
        animate={{ opacity: 1, scale: 1 }} // Animation properties when component mounts
        transition={{ duration: 0.5 }}
      >
        <Heading as="h2">Ask anything to chatbot</Heading>
      </motion.div>
    </StyledDefault>
  );
}
