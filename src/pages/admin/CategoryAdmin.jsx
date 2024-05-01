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
  DashForm,
} from "../../utils/DashboardStyles.js";
import {
  IoIosAdd,
  IoTrashBinOutline,
  FaArrowLeftLong,
} from "../../utils/Icons.js";
import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CategoryAdmin = ({ showForm, toggleForm }) => {
  const [add, setAdd] = useState(1);
  const addFunc = () => {
    setAdd(add + 1);
  };

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // State Fields
  const [positionName, setPosition] = useState();
  const [department, setDepartment] = useState();
  const [getCategory, setGetGategory] = useState();

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
    } catch (error) {
      setLoading(false);
    }
  };

  const deleteCategory = async (item) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        // "http://localhost:8080/api/v1/category/delete-category",
        "https://expensive-cod-turtleneck-shirt.cyclic.app/api/v1/category/delete-category",
        {
          categoryId: item._id,
        }
      );
      setLoading(false);
      console.log(data);
      addFunc();
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    axios
      // .get("http://localhost:8080/api/v1/category/get-category")
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
          <DashCard>
            <DashHeader>
              <h3>Category</h3>
              <Link to="/add-category">
                <button>
                  <IoIosAdd className="icon" /> Add Category
                </button>
              </Link>
            </DashHeader>
            <Border></Border>
            <DashList>
              <thead>
                <th>Id</th>
                <th>Category Name</th>
                <th>Department Name</th>
                <th>Delete</th>
              </thead>
              {getCategory &&
                getCategory.map((item) => {
                  return (
                    <tbody key={item._id}>
                      <td>{item._id}</td>
                      <td>{item.positionName}</td>
                      <td>{item.department}</td>
                      <td>
                        <button onClick={() => deleteCategory(item)}>
                          Delete
                        </button>
                      </td>
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

export default CategoryAdmin;
