import React, { useEffect, useState } from "react";
import { RidePayout, DashGrid } from "../utils/DashboardStyles.js";
import { motorbike } from "../utils/Images.js";

const RidePay = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDirection, setRideDirection] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYW1hbnIwMDEiLCJhIjoiY2x2Z3ZsbzlvMHoyZzJrbnpxc2dta3ZxbCJ9._kBWW2EW_K0qKSlJ3b1Jdw`
    )
      .then((res) => res.json())
      .then((data) => {
        setRideDirection(data.routes[0].duration / 100);
      });
  }, [pickupCoordinates, dropoffCoordinates]);

  return (
    <>
      <RidePayout>
        <div className="grid">
          <div className="d-flex">
            <div className="icon_container">
              <img src={motorbike} alt="" />
            </div>
            <h3>Driver</h3>
          </div>
          <div>
            <h2>{"₹" + (rideDirection * 10).toFixed(2)}</h2>
          </div>
        </div>
      </RidePayout>
      <DashGrid>
        <div className="button">Search</div>
      </DashGrid>
    </>
  );
};

export default RidePay;
