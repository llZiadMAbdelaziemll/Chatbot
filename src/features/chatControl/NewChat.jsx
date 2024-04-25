import React, { useContext } from "react";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import { Context } from "../../context/Context";
import Modal from "../../ui/Modal";
import Confirmation from "../../ui/Confirmation";

const StyledNewChat = styled.div`
  /* background-color: rgba(59, 237, 178, 0.15); */
  background-color: var(--color-secondary-2);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  border-radius: 50px;
  /* color: white; */
  color: var(--color-main);
  cursor: pointer;

  & svg {
    font-size: 2rem;
  }
`;
export default function NewChat({ extended, onCloseModal }) {
  const { newChat } = useContext(Context);

  return (
    <div>
      <Modal>
        <Modal.Open opens="newChat">
          <StyledNewChat>
            <MdAdd /> {extended || <Heading as="h3">New Chat</Heading>}
          </StyledNewChat>
        </Modal.Open>

        <Modal.Window name="newChat">
          <Confirmation
            process="create"
            resourceName="new chat"
            onConfirm={newChat}
          />
        </Modal.Window>
      </Modal>
    </div>
    // <StyledNewChat onClick={() => newChat()}>
    //   <MdAdd /> {extended || <Heading as="h3">New Chat</Heading>}
    // </StyledNewChat>
  );
}
