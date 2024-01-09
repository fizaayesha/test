import React from "react";
import styled from "styled-components";
import { KeyboardArrowDown } from "@mui/icons-material";

function BoxAbove() {
  return (
    <DemoStyled>
      <div className="top-icons">
        <span className="overview">Overview</span>
        <span className="lastMonth">
          Last Month <KeyboardArrowDown />
        </span>
      </div>

      <TwoBoxes>
        <Box>
          <p>Online Orders</p>
          <h2>231</h2>
        </Box>
        <Box>
          <p>Amount Received</p>
          <h2>₹23,23,333</h2>
        </Box>
      </TwoBoxes>
    </DemoStyled>
  );
}

const DemoStyled = styled.div`
  margin-top: 2rem;
  .top-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98%;
    margin-bottom: 1rem;
    .overview {
      font-size: 2rem;
      margin-right: 20rem;
    }
    .lastMonth {
      padding: 4px;
      border: 1px solid lightgrey;
      cursor: pointer;
      display: flex;
      align-items: center;
      color: black;
      border-radius: 2px;
    }
  }
`;

const TwoBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
`;

const Box = styled.div`
  width: 48%;
  padding: 20px;
  box-sizing: border-box;
  margin: 10px 0;
  border: 5px;
  background-color: white;
`;

export default BoxAbove;
