import React, { useState } from "react";
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
} from "../../utils/DashboardStyles.js";
import {
  FaArrowLeftLong,
} from "../../utils/Icons.js";
import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // State Fields
  const [positionName, setPosition] = useState();
  const [department, setDepartment] = useState();

  const submitHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        // "http://localhost:8080/api/v1/category/add-category",
        "https://expensive-cod-turtleneck-shirt.cyclic.app/api/v1/category/add-category",
        {
          positionName,
          department,
        }
      );
      setLoading(false);
      console.log(data);
      setPosition("");
      setDepartment("");
      navigate("/category-admin");
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
                  <Link to="/category-admin" className="backIco d-flex">
                    <FaArrowLeftLong className="icon" />
                  </Link>
                  <h3>Category</h3>
                </div>
              </div>
            </DashHeader>
            <Border></Border>
            <DashForm>
              <div className="grid-form">
                <input
                  type="text"
                  placeholder="Position Name"
                  value={positionName}
                  onChange={(e) => setPosition(e.target.value)}
                />
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option>--Select Department--</option>
                  <option>Development</option>
                  <option>UI/UX</option>
                  <option>IT</option>
                  <option>Management</option>
                  <option>Sales</option>
                  <option>Executive</option>
                </select>
              </div>
              <button onClick={submitHandler}>Create Category</button>
            </DashForm>
          </DashCard>
        </DashboardCard>
      </DashboardMain>
    </DashboardBg>
  );
};

export default AddCategory;
