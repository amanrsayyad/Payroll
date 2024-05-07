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
import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";
import axios from "axios";

const AttendenceAdmin = () => {
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
              <h3>Attendence</h3>
            </DashHeader>
            <Border></Border>
            <DashList>
              <thead>
                <th>Date</th>
                <th>Ride Pay</th>
                <th>Pick Up Location</th>
                <th>Drop Off Location</th>
              </thead>
              {getAttendence &&
                getAttendence.map((item) => {
                  return (
                    <>
                      <tbody key={item._id}>
                        <td>{item.date}</td>
                        <td>{item.ridePay}</td>
                        <td>{item.pickUp}</td>
                        <td>{item.dropOff}</td>
                      </tbody>
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

export default AttendenceAdmin;
