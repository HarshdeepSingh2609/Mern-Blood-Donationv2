
import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import './Sidebar.css'; // Custom CSS
import { logoutUser } from '../../../redux/features/auth/authSlice'; 
const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // const handleLogout = () => {
  //   localStorage.clear();
  //   alert("LOGGED OUT SUCCESSFULLY");
  //   navigate("/");
  // };
  const dispatch = useDispatch();

const handleLogout = () => {
  dispatch(logoutUser());
  localStorage.clear();
  alert("LOGGED OUT SUCCESSFULLY");
  navigate("/login");
};

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar-container">
      <div className="sidebar-inner">
        <div className="sidebar-menu">
          {user?.role === "organisation" && (
            <>
              <Link to="/" className={`menu-item ${isActive("/") ? "active" : ""}`}>
                <i className="fa-solid fa-warehouse"></i>
                Inventory
              </Link>
              <Link to="/donar" className={`menu-item ${isActive("/donar") ? "active" : ""}`}>
                <i className="fa-solid fa-droplet"></i>
                Donar
              </Link>
              <Link to="/hospital" className={`menu-item ${isActive("/hospital") ? "active" : ""}`}>
                <i className="fa-solid fa-house-medical-flag"></i>
                Hospital
              </Link>
            </>
          )}

          {user?.role === "admin" && (
            <>
              <Link to="/donar-list" className={`menu-item ${isActive("/donar-list") ? "active" : ""}`}>
                <i className="fa-solid fa-warehouse"></i>
                Donars
              </Link>
              <Link to="/hospital-list" className={`menu-item ${isActive("/hospital-list") ? "active" : ""}`}>
                <i className="fa-solid fa-droplet"></i>
                Hospitals
              </Link>
              <Link to="/org-list" className={`menu-item ${isActive("/org-list") ? "active" : ""}`}>
                <i className="fa-solid fa-house-medical-flag"></i>
                Organizations
              </Link>
            </>
          )}

          {(user?.role === "donar" || user?.role === "hospital") && (
            <Link to="/organisation" className={`menu-item ${isActive("/organisation") ? "active" : ""}`}>
              <i className="fa-solid fa-building-ngo"></i>
              Organization
            </Link>
          )}

          {user?.role === "hospital" && (
            <Link to="/consumer" className={`menu-item ${isActive("/consumer") ? "active" : ""}`}>
              <i className="fa-solid fa-hands-holding"></i>
              Consumer
            </Link>
          )}

          {user?.role === "donar" && (
            <Link to="/donation" className={`menu-item ${isActive("/donation") ? "active" : ""}`}>
              <i className="fa-solid fa-hand-holding-hand"></i>
              Donation
            </Link>
          )}
        </div>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
