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
import axios from "axios";

const AttendenceAdmin = () => {
  const [getAttendence, setGetAttendence] = useState();
  useEffect(() => {
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
            </DashHeader>
            <Border></Border>
            <DashList>
              <thead>
                <th>Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Action</th>
              </thead>
              {getAttendence &&
                getAttendence.map((item) => {
                  return (
                    <>
                      <tbody key={item._id}>
                        <td>{item.city}</td>
                        <td>{item.employeeName}</td>
                        <td>{item.time}</td>
                        <td>{item.date}</td>
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
              </thead>
            </DashList>
          </DashCard>
        </DashboardCard>
      </DashboardMain>
    </DashboardBg>
  );
};

export default AttendenceAdmin;
