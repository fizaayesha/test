import React from "react";
import styled from "styled-components";
import {
  Search,
  QuestionMarkSharp,
  Message,
  KeyboardArrowDownTwoTone,
} from "@mui/icons-material";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <span className="firstClass">Payments</span>
        <span className="secondClass">
          <QuestionMarkSharp className="questionMark" /> How it works
        </span>
      </NavbarLeft>
      <NavbarMiddle className="middleSearch">
        <SearchIcon />
        <SearchBox type="text" placeholder="Search features, tutorials, etc." />
      </NavbarMiddle>
      <NavbarRight>
        <Message className="thirdClass" />
        <KeyboardArrowDownTwoTone className="thirdClass" />
      </NavbarRight>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  margin-left: -2.1rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  box-shadow: 2px solid grey;
  width: 100%;
`;

const NavbarLeft = styled.div`
  flex: 1;
  span {
    font-size: 1.2rem;
  }
  .secondClass {
    margin-left: 16px;
    font-size: 1rem;
    color: gray;
    .questionMark {
      color: gray;
      width: 1rem;
      height: 1rem;
      background-color: white;
      border-radius: 50%;
      border: 1px solid gray;
    }
  }
`;

const NavbarMiddle = styled.div`
  width: 400px;
  height: 40px;
  flex: 2;
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 5px;
`;

const SearchIcon = styled(Search)`
  margin-right: 0.5rem;
  background-color: #f2f2f2;
`;

const SearchBox = styled.input`
  padding: 0.5rem;
  border: none;
  background-color: #f2f2f2;
  outline: none;
  background: none;
`;

const NavbarRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    margin-left: 1rem;
    cursor: pointer;
  }
  .thirdClass {
    padding: 5px;
    background-color: #f2f2f2;
    border-radius: 50%;
    color: black;
  }
`;

export default Navbar;
