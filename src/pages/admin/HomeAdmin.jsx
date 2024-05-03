import React, { useEffect, useState } from "react";
import {
  DashboardCard,
  DashboardBg,
  DashboardMain,
  HeroGrid,
} from "../../utils/Styles.js";
import {
  SiStartrek,
  line,
  attendance,
  emp,
  map,
  payroll,
  ui,
  sec,
  payment,
} from "../../utils/Icons.js";
import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";
import mapboxgl from "mapbox-gl";
import axios from "axios";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW1hbnIwMDEiLCJhIjoiY2x2Z3ZsbzlvMHoyZzJrbnpxc2dta3ZxbCJ9._kBWW2EW_K0qKSlJ3b1Jdw";

const HomeAdmin = () => {
  const [getCategory, setGetGategory] = useState();
  const [getAttendence, setGetAttendence] = useState();
  const [users, setUsers] = useState();
  const [add, setAdd] = useState(1);
  const addFunc = () => {
    setAdd(add + 1);
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [73.992074, 17.686999],
      zoom: 8,
    });
    addToMap(map);
  }, []);

  const addToMap = (map) => {
    const marker1 = new mapboxgl.Marker({ color: "#228b22" })
      .setLngLat([73.992074, 17.686999])
      .addTo(map);
  };

  useEffect(() => {
    axios
      .get(
        "https://expensive-cod-turtleneck-shirt.cyclic.app/api/v1/user/get-users"
      )
      .then((response) => {
        setUsers(response.data);
      });

    axios
      .get(
        "https://expensive-cod-turtleneck-shirt.cyclic.app/api/v1/attendence/get-attendence"
      )
      .then((response) => {
        setGetAttendence(response.data);
      });

    axios
      .get(
        "https://expensive-cod-turtleneck-shirt.cyclic.app/api/v1/category/get-category"
      )
      .then((response) => {
        setGetGategory(response.data);
      });
  }, [add]);

  return (
    <DashboardBg>
      <DashboardMain>
        <Sidebar />
        <div>
          <Header />
        </div>
        <DashboardCard>
          <HeroGrid>
            <div className="admin-container">
              <div className="admin-data">
                <div className="admin-card">
                  <div className="admin-img d-flex">
                    <img src={payroll} alt="" />
                  </div>
                  <div>
                    <h4>Category Created</h4>
                    <h5>{getCategory && getCategory.length}</h5>
                  </div>
                </div>
                <div className="admin-card">
                  <div className="admin-img d-flex">
                    <img src={attendance} alt="" />
                  </div>
                  <div>
                    <h4>Attendece Created</h4>
                    <h5>{getAttendence && getAttendence.length}</h5>
                  </div>
                </div>
                <div className="admin-card">
                  <div className="admin-img d-flex">
                    <img src={emp} alt="" />
                  </div>
                  <div>
                    <h4>Employee Created</h4>
                    <h5>{users && users.length}</h5>
                  </div>
                </div>
                <div className="admin-card">
                  <div className="admin-img d-flex">
                    <img src={payment} alt="" />
                  </div>
                  <div>
                    <h4>Payment Done</h4>
                  </div>
                </div>
              </div>
            </div>
            <div id="map"></div>
          </HeroGrid>
        </DashboardCard>
      </DashboardMain>
    </DashboardBg>
  );
};

export default HomeAdmin;
