import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import axios from "axios";

const AttendenceReport = () => {
  const [getAttendence, setGetAttendence] = useState();
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("user"));
    if (username) {
      setUserName(username);
    }

    axios
      // .get("http://localhost:8080/api/v1/attendence/get-attendence")
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
              <h3>Attendence</h3>
              <Link to="/press-attendence">
                <button>
                  <IoIosAdd className="icon" /> Press Attendence
                </button>
              </Link>
            </DashHeader>
            <Border></Border>
            <DashList>
              <thead>
                <th>Date</th>
                <th>Ride Pay ( ETH )</th>
                <th>Pick Up Location</th>
                <th>Drop Off Location</th>
              </thead>
              {getAttendence &&
                getAttendence.map((item) => {
                  return (
                    <>
                      {item.userId === userName._id ? (
                        <tbody key={item._id}>
                          <td>{item.date}</td>
                          <td>ETH {item.ridePay}</td>
                          <td>{item.pickUp}</td>
                          <td>{item.dropOff}</td>
                        </tbody>
                      ) : null}
                    </>
                  );
                })}
              <thead>
                <th>
                  <div className="jc-start">
                    All Records
                    <div className="number d-flex">
                      {getAttendence && getAttendence.length}
                    </div>
                  </div>
                </th>
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

export default AttendenceReport;
