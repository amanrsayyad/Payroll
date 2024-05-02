import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { cube } from "../utils/Images";
import {
  LuLayoutDashboard,
  FiUsers,
  TbDeviceIpadPlus,
  TbCategoryMinus,
  CgProfile,
  FiLogOut,
  FaAmazonPay,
} from "../utils/Icons";

const Sidebar = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("admin");
    navigate("/admin-login");
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    navigate("/sign-in");
    localStorage.setItem("routeCondition", JSON.stringify("false"));
  };

  const [routeCondition, setRouteCondition] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("routeCondition") === "true") {
      setRouteCondition(true);
    } else {
      setRouteCondition(false);
    }
  }, []);

  return (
    <SidebarMain>
      <Link to="/admin-dashboard" className="logo">
        <img src={cube} alt="" />
        <h3>
          Block<span>Pay</span>
        </h3>
      </Link>
      <div className="border"></div>
      <NavList>
        {routeCondition ? (
          <>
            <li>
              <Link to="/">
                <div className="navIco">
                  <LuLayoutDashboard className="iconNav" />
                </div>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/attendence-report">
                <div className="navIco">
                  <TbDeviceIpadPlus className="iconNav" />
                </div>
                Attendence
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <div className="navIco">
                  <CgProfile className="iconNav" />
                </div>
                Profile
              </Link>
            </li>
            <li onClick={logoutUser}>
              <Link to="#">
                <div className="navIco">
                  <FiLogOut className="iconNav" />
                </div>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">
                <div className="navIco">
                  <LuLayoutDashboard className="iconNav" />
                </div>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/manage-employees-admin">
                <div className="navIco">
                  <FiUsers className="iconNav" />
                </div>
                Manage Employees
              </Link>
            </li>
            <li>
              <Link to="/attendence-admin">
                <div className="navIco">
                  <TbDeviceIpadPlus className="iconNav" />
                </div>
                Attendence
              </Link>
            </li>
            <li>
              <Link to="/payroll-admin">
                <div className="navIco">
                  <FaAmazonPay className="iconNav" />
                </div>
                Payroll
              </Link>
            </li>
            <li>
              <Link to="/category-admin">
                <div className="navIco">
                  <TbCategoryMinus className="iconNav" />
                </div>
                Category
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <div className="navIco">
                  <CgProfile className="iconNav" />
                </div>
                Profile
              </Link>
            </li>
            <li onClick={logoutHandler}>
              <Link to="#">
                <div className="navIco">
                  <FiLogOut className="iconNav" />
                </div>
                Logout
              </Link>
            </li>
          </>
        )}
      </NavList>
    </SidebarMain>
  );
};

export default Sidebar;

const SidebarMain = styled.div`
  padding: 15px 20px;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.2);
  z-index: 10000;

  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0.3rem;
    img {
      width: 40px;
      height: 40px;
    }
    h3 {
      font-weight: 500;
      margin-left: 0.5rem;
      font-size: 25px;
      color: #1d1d1d;

      span {
        color: #228b22;
      }
    }
  }
  .border {
    background-color: lightgray;
    width: 100%;
    height: 2px;
    margin: 15px 0px;
  }
`;

const NavList = styled.ul`
  margin-top: 2rem;
  li {
    margin-bottom: 2rem;

    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: #1d1d1d;
      font-size: 17px;
      font-weight: 500;

      .navIco {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.2);
        width: 40px;
        height: 40px;
        border-radius: 8px;
        margin-right: 0.8rem;

        .iconNav {
          color: #228b22;
          font-size: 19px;
        }
      }
    }
  }
`;
