import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  & h3 {
    color: var(--color-main);
    animation: none !important;
  }
  & p {
    color: var(--color-content-text) !important;
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function Confirmation({
  process,
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
}) {
  const isCreation = process === "create";
  const handleConfirm = () => {
    onConfirm();
    onCloseModal();
  };
  return (
    <StyledConfirmDelete>
      <Heading as="h3">
        {isCreation ? "create" : "delete"} {resourceName}
      </Heading>
      <p>
        Are you sure you want to {isCreation ? "Create" : "Delete"} this
        {resourceName} permanently? This action cannot be undone.
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          variation={isCreation ? "primary" : "danger"}
          disabled={disabled}
          onClick={isCreation ? handleConfirm : onConfirm}
          // onClick={onConfirm}
        >
          {isCreation ? "create" : "delete"}
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default Confirmation;
