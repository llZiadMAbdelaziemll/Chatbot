import styled from "styled-components";
import Heading from "./Heading";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  padding: 2.1rem 4.8rem;
  border-bottom: 1px solid var(--color-border);

  /* background-color: #0a101a; */
  background-color: var(--color-main-bg);
  /* color: rgb(59, 237, 178); */
  color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
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
  return (
    <StyledHeader>
      <Heading as="h2">Ask anything</Heading>
      <StyledRight>
        <HeaderMenu mini={mini} setMini={setMini} />
        <Img src="./user_icon.png" alt="user_icon" />
      </StyledRight>
    </StyledHeader>
  );
}

export default Header;
