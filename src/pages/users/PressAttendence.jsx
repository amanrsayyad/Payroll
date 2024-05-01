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
  DashForm,
  DashGrid,
  MapUi,
} from "../../utils/DashboardStyles.js";
import { FaArrowLeftLong, FaCircleDot, SiSquare } from "../../utils/Icons.js";
import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

const PressAttendence = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [add, setAdd] = useState("");
  const [userName, setUserName] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [currentDateWithMoment, setCurrentDateWithMoment] = useState("");
  const [currentTimeWithMoment, setCurrentTimeWithMoment] = useState("");
  const [currLocation, setCurrLocation] = useState({});
  const [currLocationJs, setCurrLocationJs] = useState({});

  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("user"));
    if (username) {
      setUserName(username);
    }

    getLocation();
    getLocationJs();

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

    var timeMoment = moment().utcOffset("+05.30").format("hh:mm:ss a");
    setCurrentTimeWithMoment(timeMoment);
  }, []);

  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCurrLocation(location.data);
  };

  const getLocationJs = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      setCurrLocationJs({ latitude, longitude });
    });
  };

  const submitHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://expensive-cod-turtleneck-shirt.cyclic.app/api/v1/attendence/add-attendence",
        // "http://localhost:8080/api/v1/attendence/add-attendence",
        {
          userId: userName._id,
          latitude: currLocation.latitude,
          longitude: currLocation.longitude,
          city: currLocation.city,
          time: currentTimeWithMoment,
          date: currentDateWithMoment,
          employeeName: userName.name,
        }
      );
      setLoading(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
    }
  };

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
                  <Link to="/attendence-report" className="backIco d-flex">
                    <FaArrowLeftLong className="icon" />
                  </Link>
                  <h3>Press Attendence</h3>
                </div>
              </div>
            </DashHeader>
            <Border></Border>
            <DashGrid>
              <div className="search-form">
                <div className="input-container">
                  <FaCircleDot className="icon" />
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <SiSquare className="icon" />
                  <input
                    type="text"
                    placeholder="Drop Location"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                  />
                </div>
                <Link to={`/confirm/${pickup}/${dropoff}`}>
                  <div className="button">Search</div>
                </Link>
              </div>
            </DashGrid>
            <DashForm>
              <div className="grid-form">
                <div className="input-div">
                  Latitude - {currLocation.latitude}
                </div>
                <div className="input-div">
                  Longitude - {currLocation.longitude}
                </div>
                <div className="input-div">Time - {currentTimeWithMoment}</div>
                <div className="input-div">Date - {currentDateWithMoment}</div>
                <div className="input-div">Employee Name - {userName.name}</div>
                {/* <div className="input-div">City - {currLocation.city}</div> */}
              </div>
            </DashForm>
          </DashCard>
        </DashboardCard>
      </DashboardMain>
    </DashboardBg>
  );
};

export default PressAttendence;
