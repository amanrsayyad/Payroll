import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import {
  DashboardCard,
  DashboardBg,
  DashboardMain,
} from "../../utils/Styles.js";
import {
  DashCard,
  DashHeader,
  Border,
  DashForm,
} from "../../utils/DashboardStyles.js";
import { FaArrowLeftLong } from "../../utils/Icons.js";
import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const PaymentPage = () => {
  let { userId } = useParams();
  const [getAttendence, setGetAttendence] = useState();

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://expensive-cod-turtleneck-shirt.cyclic.app/api/v1/attendence/get-attendence"
      )
      .then((response) => {
        setGetAttendence(response.data);
      });
  }, []);

  return (
    <DashboardBg>
      <DashboardMain>
        <Sidebar />
        <div>
          <Header />
        </div>
        <DashboardCard>
          <DashCard>
            <DashHeader>
              <div className="d-flex">
                <div className="header-icon d-flex">
                  <Link to="/payroll-admin" className="backIco d-flex">
                    <FaArrowLeftLong className="icon" />
                  </Link>
                  <h3>Process Payment</h3>
                </div>
              </div>
            </DashHeader>
            <Border></Border>
            <DashForm>
              <div className="grid-form">
                <input type="text" placeholder="Recipient Address" />
                <input type="text" placeholder="Amount in ETH" />
                {getAttendence &&
                  getAttendence.map((item) => {
                    return (
                      <div className="input-div">
                        {item.userId === userId ? (
                          <>Payment in ETH - {item.ridePay}</>
                        ) : null}
                      </div>
                    );
                  })}
              </div>
              <button>Pay now</button>
            </DashForm>
          </DashCard>
        </DashboardCard>
      </DashboardMain>
    </DashboardBg>
  );
};

export default PaymentPage;
