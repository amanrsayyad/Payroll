import React, { useState } from "react";
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

const PayrollAdmin = () => {
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
                <th>Name</th>
                <th>Date Posted</th>
                <th>Paymemt</th>
                <th>Action</th>
              </thead>
              <tbody>
                <td>You do not have any active listings.</td>
              </tbody>
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

export default PayrollAdmin;
