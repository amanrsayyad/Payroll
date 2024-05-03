import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RidePayout, DashGrid } from "../utils/DashboardStyles.js";
import { motorbike } from "../utils/Images.js";
import moment from "moment";
import axios from "axios";
import { toast } from "alert";

const RidePay = ({
  pickupCoordinates,
  dropoffCoordinates,
  pickup,
  dropoff,
}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [rideDirection, setRideDirection] = useState(0);
  const [userName, setUserName] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [currentDateWithMoment, setCurrentDateWithMoment] = useState("");

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("user"));
    if (username) {
      setUserName(username);
    }

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getMinutes();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();

    setCurrentDate(
      date + "/" + month + "/" + year + "" + hours + ":" + min + ":" + sec
    );

    var dateMoment = moment().utcOffset("+05.30").format("YYYY-MM-DD");
    setCurrentDateWithMoment(dateMoment);

    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYW1hbnIwMDEiLCJhIjoiY2x2Z3ZsbzlvMHoyZzJrbnpxc2dta3ZxbCJ9._kBWW2EW_K0qKSlJ3b1Jdw`
    )
      .then((res) => res.json())
      .then((data) => {
        setRideDirection(data.routes[0].duration / 100);
      });
  }, [pickupCoordinates, dropoffCoordinates]);

  const ridePrice = (rideDirection * 10).toFixed(2);
  console.log(ridePrice);

  const submitHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://expensive-cod-turtleneck-shirt.cyclic.app/api/v1/attendence/add-attendence",
        {
          userId: userName._id,
          employeeName: userName.name,
          date: currentDateWithMoment,
          pickUp: pickup,
          dropOff: dropoff,
          ridePay: ridePrice,
        }
      );
      setLoading(false);
      console.log(data);
      navigate("/attendence-report");
      toast.success("Attendence Created");
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  };

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
        <div className="button" onClick={submitHandler}>
          Press Attendence
        </div>
      </DashGrid>
    </>
  );
};

export default RidePay;
