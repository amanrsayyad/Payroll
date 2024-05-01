import React, { useEffect, useState } from "react";
import {
  DashboardCard,
  DashboardBg,
  DashboardMain,
} from "../../utils/Styles.js";
import {
  DashCard,
  DashHeader,
  DashList,
  Border,
} from "../../utils/DashboardStyles.js";
import { IoIosAdd, IoTrashBinOutline } from "../../utils/Icons.js";
import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";
import { Link } from "react-router-dom";
import axios from "axios";

const ManageAdmin = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      // .get("http://localhost:8080/api/v1/user/get-users")
      .get(
        "https://expensive-cod-turtleneck-shirt.cyclic.app/api/v1/user/get-users"
      )
      .then((response) => {
        setUsers(response.data);
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
              <h3>Manage Employees</h3>
              <Link to="/add-employee">
                <button>
                  <IoIosAdd className="icon" /> Add Employees
                </button>
              </Link>
            </DashHeader>
            <Border></Border>
            <DashList>
              <thead>
                <th>Email</th>
                <th>Name</th>
                <th>Monthly Salary</th>
                <th>Category</th>
              </thead>
              {users &&
                users.map((item) => {
                  return (
                    <tbody key={item._id}>
                      <td>{item.email}</td>
                      <td>{item.name}</td>
                      <td>{item.monthlySalary}</td>
                      <td>{item.category}</td>
                    </tbody>
                  );
                })}
              <thead>
                <th className="jc-start">
                  <IoTrashBinOutline className="icon" /> Delete All Listing
                </th>
                <th></th>
                <th></th>
                <th></th>
              </thead>
            </DashList>
          </DashCard>
        </DashboardCard>
      </DashboardMain>
    </DashboardBg>
  );
};

export default ManageAdmin;
