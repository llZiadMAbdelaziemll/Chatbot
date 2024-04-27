import React from "react";
import styled, { css } from "styled-components";
import { MdTableRows, MdSettings, MdRefresh } from "react-icons/md";
import { motion } from "framer-motion";
import Logo from "./Logo";
import ButtonIcon from "../../ui/ButtonIcon";
import NewChat from "./NewChat";
import History from "./History";
import Heading from "../../ui/Heading";
import Feedback from "../feedback/Feedback";

const StyledSidebar = styled.aside`
  background-color: var(--color-third-2);
  padding: 0 2.4rem;
  border-right: 1px solid var(--color-border);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  overflow: hidden;

  ${(props) =>
    props.type === "mini" &&
    css`
      transform: translateX(-100%);
      transition: 0.7s;
    `}
  ${(props) =>
    props.type === "mini" &&
    props.mini === true &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      box-shadow: var(--shadow-lg);
      transform: translateX(0);

      height: 100vh;
    `}
    & .motion-style {
    margin: auto;
    height: 100%;
    margin-bottom: 2rem;
  }
`;
const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.2rem 0 1.2rem;
  color: white;
  border-bottom: 1px solid var(--color-border);
  & button.rotate {
    transform: rotate(90deg);
  }
`;

const StyledHelpers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  height: 100%;
  gap: 0.4rem;
`;
export const StyledNewChat = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  padding: 1rem;
  color: var(--color-content-text);
  & svg {
    font-size: 2rem;
  }
  &:hover {
    background-color: rgba(59, 237, 178, 0.15);
  }
`;

const variants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function SideBar({ extended, setExtended, type, mini }) {
  return (
    <StyledSidebar type={type} mini={mini} extended={extended}>
      <StyledLogo>
        <Logo />
        <ButtonIcon
          className={extended ? "rotate" : ""}
          onClick={() => {
            setExtended((prev) => !prev);
          }}
        >
          <MdTableRows className="tabIcon" />
        </ButtonIcon>
      </StyledLogo>
      <motion.div
        initial={{ x: -150 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <NewChat extended={extended} />
      </motion.div>
      <History extended={extended} />
      <motion.div
        initial="initial"
        animate="animate"
        variants={containerVariants}
        className="motion-style"
      >
        <StyledHelpers>
          <motion.div variants={variants}>
            <Feedback extended={extended} />
          </motion.div>

          <motion.div variants={variants}>
            <StyledNewChat>
              <MdRefresh /> {!extended && <Heading as="h4">Activity</Heading>}
            </StyledNewChat>
          </motion.div>
          <motion.div variants={variants}>
            <StyledNewChat>
              <MdSettings /> {!extended && <Heading as="h4">Sittings</Heading>}
            </StyledNewChat>
          </motion.div>
        </StyledHelpers>
      </motion.div>

      {/* <MainNav /> */}
    </StyledSidebar>
  );
}
