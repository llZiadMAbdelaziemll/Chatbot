import styled from "styled-components";
import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import HeaderMenu from "./HeaderMenu";
import Heading from "./Heading";

const StyledHeader = styled.header`
  padding: 2.1rem 4.8rem;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-main-bg);
  color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 2.1rem 3rem;
  }
`;
const StyledRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Img = styled.img`
  width: 40px;
  border-radius: 50px;
`;
function Header({ mini, setMini }) {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/dark-logo.png" : "/light-logo.svg";

  return (
    <StyledHeader>
      <motion.div
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={src} />
      </motion.div>
      <motion.div
        initial={{ x: 80 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StyledRight>
          <HeaderMenu mini={mini} setMini={setMini} />
          <Img src="./user.jpg" alt="user_icon" />
        </StyledRight>
      </motion.div>
    </StyledHeader>
  );
}

export default Header;
