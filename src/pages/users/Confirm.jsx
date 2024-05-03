import React, { useEffect, useState } from "react";
import {
  DashboardCard,
  DashboardBg,
  DashboardMain,
} from "../../utils/Styles.js";
import {
  DashCard,
  DashHeader,
  Border,
  DashGrid,
  RidePayout,
} from "../../utils/DashboardStyles.js";
import { FaArrowLeftLong } from "../../utils/Icons.js";
import { motorbike } from "../../utils/Images.js";
import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";
import { Link, useParams } from "react-router-dom";
import MapSection from "../../components/MapSection.jsx";
import RidePay from "../../components/RidePay.jsx";

const Confirm = () => {
  let { pickup, dropoff } = useParams();
  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYW1hbnIwMDEiLCJhIjoiY2x2Z3ZsbzlvMHoyZzJrbnpxc2dta3ZxbCJ9._kBWW2EW_K0qKSlJ3b1Jdw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYW1hbnIwMDEiLCJhIjoiY2x2Z3ZsbzlvMHoyZzJrbnpxc2dta3ZxbCJ9._kBWW2EW_K0qKSlJ3b1Jdw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

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
                  <Link to="/press-attendence" className="backIco d-flex">
                    <FaArrowLeftLong className="icon" />
                  </Link>
                  <h3>Confirm</h3>
                </div>
              </div>
            </DashHeader>
            <Border></Border>
            <DashGrid>
              <MapSection
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
              />
            </DashGrid>
            <RidePay
              pickupCoordinates={pickupCoordinates}
              dropoffCoordinates={dropoffCoordinates}
              pickup={pickup}
              dropoff={dropoff}
            />
          </DashCard>
        </DashboardCard>
      </DashboardMain>
    </DashboardBg>
  );
};

export default Confirm;
