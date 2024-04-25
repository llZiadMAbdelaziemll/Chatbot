import styled from "styled-components";
import { useDarkMode } from "../../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img``;

function Logo() {
  return (
    <StyledLogo>
      <img src="./logo-icon.svg" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
