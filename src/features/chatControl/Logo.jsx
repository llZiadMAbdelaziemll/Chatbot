import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

function Logo() {
  return (
    <StyledLogo>
      <img src="./logo-icon.svg" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
