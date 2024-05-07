import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DashboardCard,
  DashboardBg,
  DashboardMain,
} from "../../utils/Styles.js";
import {
  DashCard,
  DashHeader,
  DashList,
  Border,
} from "../../utils/DashboardStyles.js";
import { IoIosAdd, IoTrashBinOutline } from "../../utils/Icons.js";
import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";
import axios from "axios";

const PayrollAdmin = () => {
  const [getAttendence, setGetAttendence] = useState();

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
              <div>
                <h3>Payroll</h3>
              </div>
            </DashHeader>
            <Border></Border>
            <DashList>
              <thead>
                <th>Date</th>
                <th>Ride Pay ( ETH )</th>
                <th>Pick Up & Drop Off Location</th>
                <th>Employee Name</th>
                <th>Action</th>
              </thead>
              {getAttendence &&
                getAttendence.map((item) => {
                  return (
                    <>
                      <tbody key={item._id}>
                        <td>{item.date}</td>
                        <td>ETH {item.ridePay}</td>
                        <td>
                          {item.pickUp} --- {item.dropOff}
                        </td>
                        <td>{item.employeeName}</td>
                        <td>
                          <Link to={`/payment-process/${item.userId}`}>
                            <button>Payment</button>
                          </Link>
                        </td>
                      </tbody>
                    </>
                  );
                })}
              <thead>
                <th className="jc-start">
                  <IoTrashBinOutline className="icon" /> Delete All Listing
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </thead>
            </DashList>
          </DashCard>
        </DashboardCard>
      </DashboardMain>
    </DashboardBg>
  );
};

export default PayrollAdmin;
