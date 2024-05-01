import React from "react";
import {
  DashboardCard,
  DashboardBg,
  DashboardMain,
} from "../../utils/Styles.js";
import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";

const HomeUser = () => {
  return (
    <DashboardBg>
      <DashboardMain>
        <Sidebar />
        <div>
          <Header />
        </div>
        <DashboardCard>
          <h3>Home</h3>
        </DashboardCard>
      </DashboardMain>
    </DashboardBg>
  );
};

export default HomeUser;
