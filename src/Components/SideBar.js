import React from "react";
import styled from "styled-components";
import Navbar from "./NavBar";

function Sidebar() {
  return (
    <SidebarStyles>
      <Navbar />
    </SidebarStyles>
  );
}

const SidebarStyles = styled.div`
  width: 224px;
  position: fixed;
  height: 100vh;
  background-color: #1E2640;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    z-index: 20;
  }
`;

export default Sidebar;
