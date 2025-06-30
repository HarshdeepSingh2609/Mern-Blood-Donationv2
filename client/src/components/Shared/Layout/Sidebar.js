// import React from 'react'
// import { userMenu } from './Menus/menu'
// import { useLocation,Link } from "react-router-dom";
// import "../../../styles/Layout.css"
// import {  useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Sidebar = () => {
//     const location=useLocation();
//     const {user}=useSelector(state=>state.auth);
//     const navigate=useNavigate();
//     const handleLogout=()=>{
//       localStorage.clear();
//       alert("LOGGED OUT SUCCESSFULLY");
//       navigate("/login");
//     }
  
//   return (

//     <div>
   
//       <div className='sidebar'>
//         <div className='menu'>

//         {user?.role==="organisation" &&(
//           <>
//           <div className={`menu-item ${location.pathname==="/" && "active"}`}  >
//                 <i className="fa-solid fa-warehouse"></i>
//                 <Link to="/">Inventory</Link>
//                 </div>

                
//                 <div className={`menu-item ${location.pathname==="/donar" && "active"}`}  >
//                 <i className="fa-solid fa-droplet"></i>
//                 <Link to="/donar">Donar</Link>
//                 </div>

                
//                 <div className={`menu-item ${location.pathname==="/hospital"  && "active"}`}  >
//                 <i className="fa-solid fa-house-medical-flag"></i>
//                 <Link to="/hospital">Hospital</Link>
//                 </div>
//           </>
//         )}


        
//         {user?.role==="admin" &&(
//           <>
//           <div className={`menu-item ${location.pathname==="/donar-list" && "active"}`}  >
//                 <i className="fa-solid fa-warehouse"></i>
//                 <Link to="/donar-list">Donars</Link>
//                 </div>

                
//                 <div className={`menu-item ${location.pathname==="/hospital-list" && "active"}`}  >
//                 <i className="fa-solid fa-droplet"></i>
//                 <Link to="/hospital-list">Hospitals</Link>
//                 </div>

                
//                 <div className={`menu-item ${location.pathname==="/org-list"  && "active"}`}  >
//                 <i className="fa-solid fa-house-medical-flag"></i>
//                 <Link to="/org-list">Organizations</Link>
//                 </div>
//           </>
//         )}

       

        
//         {(user?.role==="donar" || user?.role==="hospital") && (
          
//           <>
//           {/* {window.location.replace("/organisation")} Redirect */}
//           <div className={`menu-item ${location.pathname==="/organisation" && "active" }`}  >
//                 <i className="fa-solid fa-building-ngo"></i>
//                 <Link to="/organisation">Organization</Link>
//                 </div>
//           </>
//         )}
               

               
                
//         {user?.role==="hospital" && (
          
//           <>
//           {/* {window.location.replace("/organisation")} Redirect */}
//           <div className={`menu-item ${location.pathname==="/consumer" && "active"}`}  >
//                 <i className="fa-solid fa-hands-holding"></i>
//                 <Link to="/consumer">Consumer</Link>
//                 </div>
//           </>
//         )}

//         {user?.role==="donar" && (
          
//           <>
//           {/* {window.location.replace("/organisation")} Redirect */}
//           <div className={`menu-item ${location.pathname==="/donation" && "active" }`}  >
//                 <i className="fa-solid fa-hand-holding-hand"></i>
//                 <Link to="/donation">Donation</Link>
//                 </div>
//           </>
//         )}



//         {/* {userMenu.map((menu)=>{
//             const isActive=location.pathname===menu.path;
//             return (
//                 <div className={`menu-item ${isActive && "active"}`}  key={menu.name}>
//                 <i className={menu.icon}></i>
//                 <Link to={menu.path}>{menu.name}</Link>

//                 </div>
//             )
//         })} */}
//         <div style={{textAlign:"center" ,marginTop:"30px"}}>
//               <button className='btn btn-danger  ' onClick={handleLogout}>Logout</button>
//             </div>
//         </div>
//       </div>
   
//     </div>
//   )
// }

// export default Sidebar






// import React from 'react';
// import { useLocation, Link, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import './Sidebar.css'; // Custom styling

// const Sidebar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.auth);

//   const handleLogout = () => {
//     localStorage.clear();
//     alert("LOGGED OUT SUCCESSFULLY");
//     navigate("/login");
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className="sidebar-container">
//       <div className="sidebar-menu">
//         {user?.role === "organisation" && (
//           <>
//             <Link to="/" className={`menu-item ${isActive("/") ? "active" : ""}`}>
//               <i className="fa-solid fa-warehouse"></i>
//               Inventory
//             </Link>
//             <Link to="/donar" className={`menu-item ${isActive("/donar") ? "active" : ""}`}>
//               <i className="fa-solid fa-droplet"></i>
//               Donar
//             </Link>
//             <Link to="/hospital" className={`menu-item ${isActive("/hospital") ? "active" : ""}`}>
//               <i className="fa-solid fa-house-medical-flag"></i>
//               Hospital
//             </Link>
//           </>
//         )}

//         {user?.role === "admin" && (
//           <>
//             <Link to="/donar-list" className={`menu-item ${isActive("/donar-list") ? "active" : ""}`}>
//               <i className="fa-solid fa-warehouse"></i>
//               Donars
//             </Link>
//             <Link to="/hospital-list" className={`menu-item ${isActive("/hospital-list") ? "active" : ""}`}>
//               <i className="fa-solid fa-droplet"></i>
//               Hospitals
//             </Link>
//             <Link to="/org-list" className={`menu-item ${isActive("/org-list") ? "active" : ""}`}>
//               <i className="fa-solid fa-house-medical-flag"></i>
//               Organizations
//             </Link>
//           </>
//         )}

//         {(user?.role === "donar" || user?.role === "hospital") && (
//           <Link to="/organisation" className={`menu-item ${isActive("/organisation") ? "active" : ""}`}>
//             <i className="fa-solid fa-building-ngo"></i>
//             Organization
//           </Link>
//         )}

//         {user?.role === "hospital" && (
//           <Link to="/consumer" className={`menu-item ${isActive("/consumer") ? "active" : ""}`}>
//             <i className="fa-solid fa-hands-holding"></i>
//             Consumer
//           </Link>
//         )}

//         {user?.role === "donar" && (
//           <Link to="/donation" className={`menu-item ${isActive("/donation") ? "active" : ""}`}>
//             <i className="fa-solid fa-hand-holding-hand"></i>
//             Donation
//           </Link>
//         )}
//       </div>

//       <div className="sidebar-footer">
//       <button className="logout-btn" onClick={handleLogout}>Logout</button>
//     </div>
//     </div>
//   );
// };

// export default Sidebar;



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
