// //used react icons ,bootstrap span tags for buttons
// import React from 'react';

// import { GiHeartDrop } from "react-icons/gi";
// import { useSelector } from "react-redux";
// import { useNavigate,useLocation, Link } from "react-router-dom"

// import { FaCircleUser } from "react-icons/fa6";
// import { FaHospital } from "react-icons/fa6";
// import { FaBuildingNgo } from "react-icons/fa6";

// const Header = () => {
//     const {user}=useSelector((state)=>state.auth);
//     const location=useLocation();

//   const navigate=useNavigate();
//   // const handleLogout=()=>{
//   //   localStorage.clear();
//   //   alert("LOGGED OUT SUCCESSFULLY");
//   //   navigate("/login");
//   // }
//   return (
//     <div className='mb-2'>
//       <nav className='navbar' style={{backgroundColor:"#B8E1F1"}}>
//         <div className='container-fluid'>
//           {/* <div className='navbar-brand text-light'><MdBloodtype color='red' />LIFEDROP</div> */}
//           <div className="d-flex align-items-center">
//   <GiHeartDrop color='red' style={{ fontSize: '2.5rem',border:"1px solid #222366",borderRadius:"50%" ,padding:"5px",backgroundColor:"white"}} className='m-2' />
//   <a className="navbar-brand ms-1.6" href="#" style={{ fontSize: '2rem', fontFamily: "serif", fontWeight: 'bolder',color:"#222366" }}>LIFEDROP</a>
// </div>

//           <ul className='navbar-nav flex-row'>

//           {
//               (location.pathname==="/" || location.pathname==="/donar" || location.pathname==="/hospital")?(
//                 <li className='nav-item text-light mx-3'>
//                 <Link to="/analytics" className='nav-link' style={{fontSize: '1.5rem',color:"#222366"}}>
//                 Analytics
//                 </Link>
//             </li>
//               ):(
//                 <li className='nav-item text-light mx-3'>
//                 <Link to="/" className='nav-link ' style={{fontSize: '1.5rem',color:"#222366"}}>
//                 Main
//                 </Link>
//             </li>
//               )
//             }
            
//             <li className='nav-item text-light mx-3' >
             
//               <p className='nav-link' style={{ fontSize: '1.5rem', color: "#222366" }}>
//   {user?.name && <FaCircleUser color='#222366' style={{ fontSize: '1.5rem' }} />}  &nbsp;
//   {user?.hospitalName && <FaHospital color='#222366' style={{ fontSize: '1.5rem' }}/>}  &nbsp;
//   {user?.organisationName &&  <FaBuildingNgo color='#222366' style={{ fontSize: '1.5rem' }}/>} &nbsp;
//   {user?.name || user?.hospitalName || user?.organisationName} &nbsp;
//   <span className="badge bg-secondary" style={{ fontSize: '0.8rem' }}>{user?.role}</span>
// </p>

//             </li>
            
           

           


//             {/* <li className='nav-item mx-3'>
//               <button className='btn btn-danger '   onClick={handleLogout}>Logout</button>
//             </li> */}
//           </ul>
          
//         </div>
//       </nav>
//       {/* <li className='nav-item mx-3'>
//               <button className='btn btn-danger '   onClick={handleLogout}>Logout</button>
//             </li> */}
//     </div>
//   );
// }

// export default Header;



import React from 'react';
import { GiHeartDrop } from "react-icons/gi";
import { FaCircleUser, FaHospital, FaBuildingNgo } from "react-icons/fa6";
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import './Navbar.css';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-light custom-navbar">
      <div className="container-fluid">

        {/* Logo */}
        <div className="d-flex align-items-center">
          <GiHeartDrop className="logo-icon me-2" />
          <span className="navbar-title">LIFEDROP</span>
        </div>

        {/* Toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center nav-menu">

            {/* Public Routes */}
            {!user && (
              <>
                <li className="nav-item">
                  <NavLink to="/mainpage" className={({ isActive }) => `nav-link nav-underline ${isActive ? 'active-nav' : ''}`}>Home</NavLink>
                </li>
                <li className="nav-item ms-lg-4">
                  <NavLink to="/login" className={({ isActive }) => `nav-link nav-underline ${isActive ? 'active-nav' : ''}`}>Login</NavLink>
                </li>
                <li className="nav-item ms-lg-4">
                  <NavLink to="/register" className={({ isActive }) => `nav-link nav-underline ${isActive ? 'active-nav' : ''}`}>Register</NavLink>
                </li>
              </>
            )}

            {/* Private Routes */}
            {user && (
              <>
                {(location.pathname === "/" || location.pathname === "/donar" || location.pathname === "/hospital") ? (
                  <li className="nav-item">
                    <NavLink to="/analytics" className={({ isActive }) => `nav-link nav-underline ${isActive ? 'active-nav' : ''}`}>Analytics</NavLink>
                  </li>
                ) : (
                  <li className="nav-item">
                    <NavLink to="/" className={({ isActive }) => `nav-link nav-underline ${isActive ? 'active-nav' : ''}`}>Main</NavLink>
                  </li>
                )}

                <li className="nav-item ms-lg-4">
                  <span className="nav-link user-info">
                    {user.name && <FaCircleUser />} &nbsp;
                    {user.hospitalName && <FaHospital />} &nbsp;
                    {user.organisationName && <FaBuildingNgo />} &nbsp;
                    {user.name || user.hospitalName || user.organisationName} &nbsp;
                    <span className="badge bg-secondary" style={{ fontSize: '0.75rem' }}>{user.role}</span>
                  </span>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
