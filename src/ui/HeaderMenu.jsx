import styled from "styled-components";
// import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
// import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { MdTableRows } from "react-icons/md";
import { useState } from "react";
import { useScreenWidth } from "../hooks/useScreenWidth";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;

  & button.rotate {
    transform: rotate(90deg);
  }
`;

function HeaderMenu({ mini, setMini }) {
  // const navigate = useNavigate();
  const width = useScreenWidth();

  return (
    <StyledHeaderMenu>
      {width < 480 && (
        <li onClick={() => setMini((cur) => !cur)}>
          <ButtonIcon className={mini ? "rotate" : ""}>
            <MdTableRows className="tabIcon" />
          </ButtonIcon>
        </li>
      )}
      <li>
        <DarkModeToggle />
      </li>
      {/* <li>
        <Logout />
      </li> */}
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
