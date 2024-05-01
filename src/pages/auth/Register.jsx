import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthBg, AuthCard } from "../../utils/authStyles";
import { IoEyeOutline, IoEyeOffOutline } from "../../utils/Icons";
import { cube } from "../../utils/Images";
import axios from "axios";

const Register = () => {
  const [PassShow, IsPassShow] = useState(false);
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
        // "http://localhost:8080/api/v1/user/user-register",
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
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
    axios
      .get(
        "https://expensive-cod-turtleneck-shirt.cyclic.app/api/v1/category/get-category"
      )
      // .get("http://localhost:8080/api/v1/category/get-category")
      .then((response) => {
        setGetGategory(response.data);
      });
  }, [navigate]);

  return (
    <AuthBg>
      <AuthCard>
        {/* <div className="logo d-flex">
          <img src={cube} alt="" />
          <h3>
            Block<span>Pay</span>
          </h3>
        </div> */}
        <h3>Sign Up</h3>
        <div className="border"></div>
        <form>
          <div className="input-container">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type={PassShow ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Atleast 6 characters"
            />
            <div onClick={() => IsPassShow(!PassShow)}>
              {PassShow ? (
                <IoEyeOutline className="icon" />
              ) : (
                <IoEyeOffOutline className="icon" />
              )}
            </div>
          </div>
          <div className="input-container">
            <label>Monthly Salary</label>
            <input
              type="text"
              value={monthlySalary}
              onChange={(e) => setMonthlySalary(e.target.value)}
              placeholder="Enter your salary"
            />
          </div>
          <div className="input-container">
            <label>Category</label>
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
          <button onClick={submitHandler}>Sign Up</button>
        </form>
        <div className="border"></div>
        <div className="d-flex f-col">
          <p>
            Already have an account?
            <Link to="/sign-in" style={{ marginLeft: "10px" }}>
              Login
            </Link>
          </p>
        </div>
      </AuthCard>
    </AuthBg>
  );
};

export default Register;
