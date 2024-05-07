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
} from "../../utils/DashboardStyles.js";
import { FaArrowLeftLong } from "../../utils/Icons.js";
import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // State Fields
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [monthlySalary, setMonthlySalary] = useState();
  const [category, setCategory] = useState();
  const [getCategory, setGetGategory] = useState();

  const submitHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://expensive-cod-turtleneck-shirt.cyclic.app/api/v1/user/user-register",
        {
          name,
          email,
          password,
          monthlySalary,
          category,
        }
      );
      setLoading(false);
      console.log(data);
      navigate("/manage-employees-admin");
    } catch (error) {
      setLoading(false);
    }
  };

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
          <DashCard>
            <DashHeader>
              <div className="d-flex">
                <div className="header-icon d-flex">
                  <Link to="/manage-employees-admin" className="backIco d-flex">
                    <FaArrowLeftLong className="icon" />
                  </Link>
                  <h3>Add Employee</h3>
                </div>
              </div>
            </DashHeader>
            <Border></Border>
            <DashForm>
              <div className="grid-form">
                <input
                  type="text"
                  placeholder="Enter your Employee Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter your Employee Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter your Employee Monthly Salary"
                  value={monthlySalary}
                  onChange={(e) => setMonthlySalary(e.target.value)}
                />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>--Select Department--</option>
                  {getCategory &&
                    getCategory.map((item) => {
                      return <option>{item.positionName}</option>;
                    })}
                </select>
              </div>
              <button onClick={submitHandler}>Create Employee</button>
            </DashForm>
          </DashCard>
        </DashboardCard>
      </DashboardMain>
    </DashboardBg>
  );
};

export default AddEmployee;
