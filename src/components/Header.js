import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { user, MdKeyboardArrowDown, IoIosSearch } from "../utils/Icons";
import axios from "axios";

const Header = () => {
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState([]);
  const [routeCondition, setRouteCondition] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("admin"));
    if (userData) {
      setUserData(userData);
    }

    if (localStorage.getItem("routeCondition") === "true") {
      setRouteCondition(true);
    } else {
      setRouteCondition(false);
    }

    const username = JSON.parse(localStorage.getItem("user"));
    if (username) {
      setUserName(username);
    }
  }, []);
  return (
    <HeaderMain>
      <SearchContainer>
        <input type="text" placeholder="Search " />
        <IoIosSearch className="icoSearch" />
      </SearchContainer>
      <Profile className="d-flex">
        <img src={user} alt="" />
        {routeCondition ? (
          <p className="d-flex">
            Hi, {userName.name} <MdKeyboardArrowDown className="icon" />
          </p>
        ) : (
          <p className="d-flex">
            Hi, {userData.name} <MdKeyboardArrowDown className="icon" />
          </p>
        )}
        ;
      </Profile>
    </HeaderMain>
  );
};

export default Header;

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 25px;
  background-color: #fff;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.2);
`;

const SearchContainer = styled.div`
  position: relative;
  width: 450px;
  background-color: rgb(245, 235, 235);
  border-radius: 10px;
  input {
    padding: 8px 25px;
    width: 90%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
  }
  .icoSearch {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 22px;
    cursor: pointer;
  }
`;

const Profile = styled.div`
  img {
    width: 35px;
    height: 35px;
  }
  p {
    color: #1d1d1d;
    margin-left: 0.8rem;
    font-size: 17px;
    font-weight: 500;

    .icon {
      margin-left: 0.5rem;
      font-size: 19px;
    }
  }
`;
