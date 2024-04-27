import React, { useState } from "react";
import Heading from "../../ui/Heading";
import Textarea from "../../ui/Textarea";
import Button from "../../ui/Button";
import StarRating from "../../ui/StarRating";
import styled from "styled-components";
import toast from "react-hot-toast";

const StyledConfirm = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & h3 {
    /* color: white; */
    color: var(--color-opposite);
    margin-bottom: 2rem;
    animation: none !important;
  }
  & p {
    /* color: rgba(59, 237, 178, 0.65); */
    color: var(--color-mini);
    font-size: 1.6rem;
  }

  & div {
    display: flex;
    justify-content: flex-start;
    gap: 1.2rem;
    margin: 0.5rem 0 0.8rem 0;
  }
  & textarea {
    height: 211px;
  }
  @media (max-width: 480px) {
    width: 20rem;
  }
`;
export default function FeedbackConfirm({
  resourceName,
  onCloseModal,
  disabled,
  onConfirm,
}) {
  const [userRating, setUserRating] = useState("");

  const handleConfirm = () => {
    onConfirm?.();
    onCloseModal();
    toast.success("your voting was sent successfully");
  };
  return (
    <StyledConfirm>
      <Heading as="h3">{resourceName}</Heading>
      <p>Type Something</p>
      <Textarea placeholder="Write your preview here" />

      <StarRating size={30} onSetRating={setUserRating} color="#ffb800" />

      <Button
        variation="primary"
        disabled={disabled}
        onClick={handleConfirm}
        // onClick={onConfirm}
      >
        Send
      </Button>
    </StyledConfirm>
  );
}
