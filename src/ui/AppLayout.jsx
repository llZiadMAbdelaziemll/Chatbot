import React, { useState } from "react";
import styled, { css } from "styled-components";
import useLoading from "../hooks/useLoading";
import { useScreenWidth } from "../hooks/useScreenWidth";
import Body from "../features/body/Body";
import SideBar from "../features/chatControl/SideBar";
import Loader from "./Loader";
import Header from "./Header";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  ${(props) =>
    props.extended &&
    css`
      grid-template-columns: 13.5rem 1fr;
    `}
  grid-template-rows: auto 1fr;
  height: 100vh;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    overflow-y: hidden;
  }
`;

const Main = styled.main`
  padding: 3rem;
  background-color: var(--color-main-bg);
  height: 88.5vh;
`;
export default function AppLayout() {
  const [extended, setExtended] = useState(false);
  const [mini, setMini] = useState(false);
  const width = useScreenWidth();
  const loading = useLoading();

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <StyledAppLayout extended={extended}>
          <Header mini={mini} setMini={setMini} />
          <SideBar
            type={width <= 480 ? "mini" : "large"}
            extended={extended}
            setExtended={setExtended}
            mini={mini}
          />

          <Main>
            <Body />
          </Main>
        </StyledAppLayout>
      )}
    </>
  );
}
