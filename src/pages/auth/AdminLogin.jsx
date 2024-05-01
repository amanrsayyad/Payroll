import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthBg, AuthCard } from "../../utils/authStyles";
import { IoEyeOutline, IoEyeOffOutline } from "../../utils/Icons";
import { cube } from "../../utils/Images";
import axios from "axios";

const AdminLogin = ({ setRouteCondition }) => {
  const [PassShow, IsPassShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // State Fields
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://expensive-cod-turtleneck-shirt.cyclic.app/api/v1/auth/login",
        // "http://localhost:8080/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      setLoading(false);
      localStorage.setItem(
        "admin",
        JSON.stringify({ ...data.user, password: "" })
      );
      localStorage.setItem("login-token", JSON.stringify(data.token));
      setRouteCondition(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("admin")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <AuthBg>
      <AuthCard>
        <div className="logo d-flex">
          <img src={cube} alt="" />
          <h3>
            Block<span>Pay</span>
          </h3>
        </div>
        <h3>Log in</h3>
        <div className="border"></div>
        <form>
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
          <div className="agree">
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>
          <button onClick={submitHandler}>Log in</button>
        </form>
        <div className="border"></div>
        <div className="d-flex f-col">
          <p>Don't have an account?</p>
          <Link to="/sign-in">Sign up</Link>
        </div>
      </AuthCard>
    </AuthBg>
  );
};

export default AdminLogin;
