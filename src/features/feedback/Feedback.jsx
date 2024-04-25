import React from "react";
import Confirmation from "../../ui/Confirmation";
import Modal from "../../ui/Modal";
import { MdStarBorder } from "react-icons/md";
import FeedbackConfirm from "./FeedbackConfirm";
import Heading from "../../ui/Heading";
import { StyledNewChat } from "../chatControl/SideBar";

function Feedback({ extended }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="feedback">
          <StyledNewChat>
            <MdStarBorder /> {!extended && <Heading as="h4">feedback</Heading>}
          </StyledNewChat>
        </Modal.Open>

        <Modal.Window name="feedback">
          <FeedbackConfirm resourceName="Give Feedback" />
        </Modal.Window>
      </Modal>
    </div>
  );
}
export default Feedback;
