import React, { useEffect, useState } from "react";
import Header from "./Header";
import styled, { css } from "styled-components";
import Body from "../features/body/Body";
import SideBar from "../features/chatControl/SideBar";
import { useScreenWidth } from "../hooks/useScreenWidth";
import Loader from "./Loader";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  /* position: relative; */
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
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <StyledAppLayout extended={extended}>
          <Header mini={mini} setMini={setMini} />
          {/* width > 480 ?  */}
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
