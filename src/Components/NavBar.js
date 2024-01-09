import React from "react";
import styled from "styled-components";
import Dash from "../Assets/Dash.png";
import {
  Analytics,
  AppRegistration,
  DeliveryDining,
  Discount,
  Home,
  KeyboardArrowDown,
  MarkEmailReadTwoTone,
  OnlinePredictionSharp,
  PanToolSharp,
  Payment,
  PlumbingOutlined,
  ProductionQuantityLimits,
  PublicOff,
  Wallet,
} from "@mui/icons-material";
function Navbar() {
  return (
    <NavbarStyles>
      <div className="avatar">
        <img src={Dash} alt="avatar" />
        <div className="avatar-info">
          <p className="avatar-name">Nishyan</p>
          <p className="avatar-visit">Visit Store</p>
        </div>
        <div className="down-arrow">
          <KeyboardArrowDown />
        </div>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <Home /> Home
        </li>
        <li className="nav-item">
          <OnlinePredictionSharp /> Orders
        </li>
        <li className="nav-item">
          <ProductionQuantityLimits /> Products
        </li>
        <li className="nav-item">
          <DeliveryDining /> Delivery
        </li>
        <li className="nav-item">
          <MarkEmailReadTwoTone /> Marketing
        </li>
        <li className="nav-item">
          <Analytics /> Analytics
        </li>
        <li className="nav-item" id="payments">
          <span>
            <Payment /> Payments
          </span>
        </li>
        <li className="nav-item">
          <PanToolSharp /> Tools
        </li>
        <li className="nav-item">
          <Discount /> Discounts
        </li>
        <li className="nav-item">
          {" "}
          <PublicOff /> Audience
        </li>
        <li className="nav-item">
          {" "}
          <AppRegistration /> Apperance
        </li>
        <li className="nav-item">
          {" "}
          <PlumbingOutlined /> Plugins
        </li>
      </ul>
      <div className="footer">
        <Wallet className="img" />
        <div className="avatar-info">
          <p className="avatar-name">Available Credits</p>
          <p className="avatar-visit">222.10</p>
        </div>
      </div>
    </NavbarStyles>
  );
}

const NavbarStyles = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  color: white;

  .avatar {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    margin-top: -1.8rem;
    img {
      width: 40%;
      height: 45%;
      border-radius: 10%;
    }

    .avatar-info {
      color: white;
      width: 30%;
      margin-left: 2rem;
      margin-right: 2.6rem;

      .avatar-name {
        font-size: 1rem;
        font-weight: bold;
      }

      .avatar-visit {
        text-decoration: underline;
        margin-top: -1rem;
        font-size: 0.65rem;
      }
    }

    .down-arrow {
      margin-left: auto;
      margin-right: 1rem;
    }
  }

  .nav-items {
    width: 100%;

    li {
      display: block;
      padding-bottom: 0.7rem;
    }
    #payments {
      margin-left: -0.6rem;
      width: 12.5rem;
      background-color: #353c53;
      border-radius: 5px;
      span{
        margin-left: .4rem;
      }
    }
  }
  .footer {
    display: flex;
    align-items: center;
    padding: 2px;
    background-color: #353c53;
    width: 90%;
    margin-top: 170%;
    height: 3.8rem;
    border-radius: 5px;
    .img {
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
    }

    .avatar-info {
      /* margin-top: -0.77rem; */
      padding: 2rem 0;
      display: block;
      text-align: left;
      margin-left: 1rem;
      .avatar-name {
        margin-top: 1rem;
        font-size: 0.8rem;
      }

      .avatar-visit {
        margin-top: -0.5rem;
        font-size: 1rem;
        font-weight: bold;
      }
    }

    .down-arrow {
      margin-left: auto;
      margin-right: 1rem;
    }
  }
`;

export default Navbar;
