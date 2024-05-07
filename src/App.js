import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import { Toaster } from "alert";
import "./App.css";

// Auth Imports
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLogin from "./pages/auth/AdminLogin";

// Admin Imports
import HomeAdmin from "./pages/admin/HomeAdmin";
import ProfileAdmin from "./pages/admin/ProfileAdmin";
import AttendenceAdmin from "./pages/admin/AttendenceAdmin";
import CategoryAdmin from "./pages/admin/CategoryAdmin";
import ManageAdmin from "./pages/admin/ManageAdmin";
import PayrollAdmin from "./pages/admin/PayrollAdmin";
import AddCategory from "./pages/admin/AddCategory";
import AddEmployee from "./pages/admin/AddEmployee";

// Home Imports
import HomeUser from "./pages/users/HomeUser";
import ProfileUser from "./pages/users/ProfileUser";
import AttendenceReport from "./pages/users/AttendenceReport";
import PressAttendence from "./pages/users/PressAttendence";
import Confirm from "./pages/users/Confirm";
import PaymentPage from "./pages/admin/PaymentPage";

function App() {
  const [showForm, setShowForm] = useState(1);
  const toggleForm = (showForm) => {
    setShowForm(showForm);
  };

  const [routeCondition, setRouteCondition] = useState(false);
  localStorage.setItem("routeCondition", JSON.stringify(routeCondition));

  useEffect(() => {
    console.log(routeCondition);
  }, [routeCondition]);

  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        {routeCondition === true && (
          <>
            {/* Profile Routes Start */}
            <Route
              path="/"
              element={
                <ProtectedRoutes>
                  <HomeUser />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/attendence-report"
              element={
                <ProtectedRoutes>
                  <AttendenceReport />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/press-attendence"
              element={
                <ProtectedRoutes>
                  <PressAttendence />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoutes>
                  <ProfileUser />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/confirm/:pickup/:dropoff"
              element={
                <ProtectedRoutes>
                  <Confirm />
                </ProtectedRoutes>
              }
            />
            {/* Profile Routes End */}
          </>
        )}
        {routeCondition === false && (
          <>
            {/* Admin Routes Start */}
            <Route
              path="/"
              element={
                <ProtectedAdmin>
                  <HomeAdmin />
                </ProtectedAdmin>
              }
            />
            <Route
              path="/payroll-admin"
              element={
                <ProtectedAdmin>
                  <PayrollAdmin showForm={showForm} toggleForm={toggleForm} />
                </ProtectedAdmin>
              }
            />
            <Route
              path="/payment-process/:userId"
              element={
                <ProtectedAdmin>
                  <PaymentPage />
                </ProtectedAdmin>
              }
            />
            <Route
              path="/attendence-admin"
              element={
                <ProtectedAdmin>
                  <AttendenceAdmin />
                </ProtectedAdmin>
              }
            />
            <Route
              path="/category-admin"
              element={
                <ProtectedAdmin>
                  <CategoryAdmin showForm={showForm} toggleForm={toggleForm} />
                </ProtectedAdmin>
              }
            />
            <Route
              path="/manage-employees-admin"
              element={
                <ProtectedAdmin>
                  <ManageAdmin />
                </ProtectedAdmin>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedAdmin>
                  <ProfileAdmin />
                </ProtectedAdmin>
              }
            />
            <Route
              path="/add-category"
              element={
                <ProtectedAdmin>
                  <AddCategory />
                </ProtectedAdmin>
              }
            />
            <Route
              path="/add-employee"
              element={
                <ProtectedAdmin>
                  <AddEmployee />
                </ProtectedAdmin>
              }
            />
            {/* Admin Routes End */}
          </>
        )}
        {/* Auth Routes Start */}
        <Route
          path="/admin-login"
          element={<AdminLogin setRouteCondition={setRouteCondition} />}
        />
        <Route
          path="/sign-in"
          element={<Login setRouteCondition={setRouteCondition} />}
        />
        <Route path="/sign-up" element={<Register />} />
        {/* Auth Routes End */}
      </Routes>
    </Router>
  );
}

export function ProtectedRoutes(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/sign-in" />;
  }
}

export function ProtectedAdmin(props) {
  if (localStorage.getItem("admin")) {
    return props.children;
  } else {
    return <Navigate to="/admin-login" />;
  }
}

export default App;
