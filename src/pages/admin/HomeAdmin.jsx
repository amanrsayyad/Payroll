import React, { useEffect, useState } from "react";
import {
  DashboardCard,
  DashboardBg,
  DashboardMain,
  DashboardGrid,
} from "../../utils/Styles.js";
import { category, attendence, team } from "../../utils/Images.js";
import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";
import axios from "axios";

const HomeAdmin = () => {
  const [getCategory, setGetGategory] = useState();
  useEffect(() => {
    axios
      .get(
        "https://expensive-cod-turtleneck-shirt.cyclic.app/api/v1/category/get-category"
      )
      .then((response) => {
        setGetGategory(response.data);
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
          <DashboardGrid>
            <div className="card">
              <img src={team} alt="" />
            </div>
            <div className="card">
              <img src={attendence} alt="" />
            </div>
            <div className="card">
              <img src={category} alt="" />
              {getCategory &&
                getCategory.map((item) => {
                  return (
                    <div key={item._id}>
                      
                    </div>
                  );
                })}
            </div>
          </DashboardGrid>
        </DashboardCard>
      </DashboardMain>
    </DashboardBg>
  );
};

export default HomeAdmin;
