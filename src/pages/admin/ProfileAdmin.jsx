import React, { useEffect, useState } from "react";
import {
  DashboardCard,
  DashboardBg,
  DashboardMain,
} from "../../utils/Styles.js";
import {
  ProfileMain,
  DashboardTabs,
  ProfileCard,
} from "../../utils/DashboardStyles.js";
import { user } from "../../utils/Icons.js";
import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";
import { Link } from "react-router-dom";

const ProfileAdmin = () => {
  const [tab, setTab] = useState(1);
  const toggleTab = (tab) => {
    setTab(tab);
  };

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("admin"));
    if (userData) {
      setUserData(userData);
    }
  }, []);
  return (
    <DashboardBg>
      <DashboardMain>
        <Sidebar />
        <div>
          <Header />
        </div>
        <DashboardCard>
          <ProfileMain>
            <img src={user} alt="" />
            <div className="data">
              <h3>{userData.name}</h3>
              <p>{userData.email}</p>
            </div>
          </ProfileMain>
          <DashboardTabs>
            <li onClick={() => toggleTab(1)}>
              <Link to="#" className={tab === 1 ? "active" : ""}>
                Profile
              </Link>
              <div className={tab === 1 ? "border" : ""}></div>
            </li>
            <li onClick={() => toggleTab(2)}>
              <Link to="#" className={tab === 2 ? "active" : ""}>
                Edit
              </Link>
              <div className={tab === 2 ? "border" : ""}></div>
            </li>
          </DashboardTabs>
          {tab === 1 ? (
            <ProfileCard>
              <h3>Base</h3>
              <div className="grid">
                <div className="title">Name</div>
                <div className="data">{userData.name}</div>
              </div>
              <div className="grid">
                <div className="title">Email Id</div>
                <div className="data">{userData.email}</div>
              </div>
              <div className="grid">
                <div className="title">Role</div>
                <div className="data">{userData.role}</div>
              </div>
            </ProfileCard>
          ) : null}
          {tab === 2 ? (
            <ProfileCard>
              <h3>Edit Profile</h3>
              <div className="input-container">
                <label>Name (required)</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-container">
                <label>Email (required)</label>
                <input type="email" placeholder="dummy@gmail.com" />
              </div>
              <div className="input-container">
                <label>Password (required)</label>
                <input
                  type="password"
                  placeholder="Enter 6 character password"
                />
              </div>
              <button>SAVE CHANGES</button>
            </ProfileCard>
          ) : null}
        </DashboardCard>
      </DashboardMain>
    </DashboardBg>
  );
};

export default ProfileAdmin;
