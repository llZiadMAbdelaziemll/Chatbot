import React, { useContext } from "react";
import { MdChat, MdDelete } from "react-icons/md";
import Heading from "../../ui/Heading";
import Confirmation from "../../ui/Confirmation";
import Modal from "../../ui/Modal";
import styled from "styled-components";
import { Context } from "../../context/Context";
import toast from "react-hot-toast";

const StyledHistory = styled.div`
  padding: 1rem;
  /* color: rgb(59, 237, 178); */
  color: var(--color-main);

  animation: fadeIn 2s;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & svg {
    font-size: 2.2rem;
    color: var(--color-content-text);
    cursor: pointer;
    color: var(--color-red-700);
  }
  & svg:hover {
    color: var(--color-red-800);
  }
`;
const List = styled.ul`
  list-style: none;
  display: inline-block;
  /* color: rgb(245, 245, 245, 0.8); */
  color: var(--color-content-text);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  margin: 1.3rem 0 0;
  max-height: 25rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Li = styled.li`
  display: flex;
  gap: 1rem;
  font-size: calc(14px + 4 * (100vw - 320px) / 1600);
  font-weight: 400;
  padding: 5px 1.3rem;
  border-radius: 40px;
  cursor: pointer;
  word-break: break-all;
  align-items: center;
  & svg {
    font-size: 2rem;
  }
  & svg.delete {
    color: var(--color-red-700);
  }
  & svg.delete:hover {
    color: var(--color-red-800);
  }

  & span {
    margin-left: auto;
    font-size: 1.3rem;
  }
  &:hover {
    background-color: rgba(59, 237, 178, 0.15);
  }
`;
const Time = styled.span`
  font-size: 1.1rem;
  text-align: right;
  margin-right: 1.8rem;
  margin-top: -15px;
  /* color: rgb(59, 237, 178, 0.65); */
  color: var(--color-mini);
`;
export default function History({ extended }) {
  const {
    onSent,
    prevPrompts,
    setRecentPrompt,
    deleteChat,
    deleteAllChats,
    newChat,
  } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    onSent(prompt);
  };
  const handleDeleteAll = () => {
    deleteAllChats();
    newChat();
    toast.success("all chats was deleted successfully");
  };
  const handleDelete = (e, id) => {
    e.stopPropagation();
    deleteChat(id);
    newChat();
    toast.success("this chat was deleted successfully");
  };
  return (
    <StyledHistory>
      {!extended && (
        <>
          <Title>
            <Heading as="h3">Recent Chats</Heading>
            {/* {prevPrompts.length > 1 && <MdDelete onClick={handleDeleteAll} />} */}
            {prevPrompts.length > 1 && (
              <span>
                <Modal>
                  <Modal.Open opens="deleteAll">
                    <MdDelete />
                  </Modal.Open>

                  <Modal.Window name="deleteAll">
                    <Confirmation
                      process="delete"
                      resourceName=" all chats"
                      onConfirm={handleDeleteAll}
                    />
                  </Modal.Window>
                </Modal>
              </span>
            )}
          </Title>
          <List>
            {prevPrompts?.map((cur) => {
              const displayDate = new Intl.DateTimeFormat("en-US", {
                // dateStyle: "medium",
                // timeStyle: "short",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              }).format(new Date(cur.date));
              return (
                <>
                  <Li key={cur.id} onClick={() => loadPrompt(cur.prompt)}>
                    <MdChat /> {cur.prompt.slice(0, 7)}
                    {cur.prompt.length <= 6 ? "" : " ..."}
                    <span>
                      {/* <MdDelete onConfirm={(e) => {
                              handleDelete(e, cur.id);
                            }}/> */}
                      <Modal>
                        <Modal.Open opens="delete">
                          <MdDelete className="delete" />
                        </Modal.Open>

                        <Modal.Window name="delete">
                          <Confirmation
                            process="delete"
                            resourceName=" chats"
                            onConfirm={(e) => {
                              handleDelete(e, cur.id);
                            }}
                          />
                        </Modal.Window>
                      </Modal>
                    </span>
                  </Li>
                  <Time>{displayDate}</Time>
                </>
              );
            })}
          </List>
        </>
      )}
    </StyledHistory>
  );
}
