// import React from 'react'
// import { GiHeartDrop } from "react-icons/gi";
// import { Link, Navigate } from 'react-router-dom';
// const Navbar = () => {

//   return (
//     //   <nav className="navbar navbar-expand-lg bg-light">
//     //   <div className="container-fluid">
//     //     {/* Logo and name on the left */}
//     //     <div className="d-flex align-items-center">
//     //       <GiHeartDrop color='red' style={{ fontSize: '3rem' }} className='m-2' />
//     //       <a className="navbar-brand ms-3" href="#" style={{ fontSize: '2rem', fontFamily: "serif", fontWeight: 'bolder' }}>LifeDrop</a>
//     //     </div>
//     //     {/* Space between logo and name */}
//     //     <div className="flex-grow-1"></div>
//     //     {/* Navigation items on the right */}
//     //   <div>
//     //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     //         <ul className="navbar-nav mb-2 text-dark" style={{ fontSize: '1.5rem', fontFamily: "serif" }}>
//     //           <li className="nav-item">

//     //             <a className="nav-link" href="#"> Home</a>
//     //           </li>
//     //           <li className="nav-item ms-3">
//     //             <a className="nav-link" href="#about">About Us</a>
//     //             {/* <Navigate to="/about" className="nav-link">About</Navigate> */}
//     //             {/* <Link to="/about" className="nav-link">About</Link> */}


//     //           </li>
//     //           <li className="nav-item ms-3">
//     //             <a className="nav-link" href="#">Contact Us</a>
//     //           </li>
//     //         </ul>
//     //       </div>
//     //   </div>
//     //     {/* Extra space at the end */}
//     //     <div style={{ width: '2rem' }}></div>
//     //   </div>
//     // </nav>


//     <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "#B8E1F1" }}>
//       <div className="container-fluid">

//         <div className="d-flex align-items-center">
//           <GiHeartDrop color='red' style={{ fontSize: '2.5rem', border: "1px solid #222366", borderRadius: "50%", padding: "5px", backgroundColor: "white" }} className='m-2' />
//           <a className="navbar-brand ms-1.6" href="#" style={{ fontSize: '2rem', fontFamily: "serif", fontWeight: 'bolder', color: "#222366" }}>LIFEDROP</a>
//         </div>
//         {/* Navigation items on the right */}
//         <div className="d-flex flex-lg-row-reverse">
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mb-2 " style={{ fontSize: '1.5rem', fontFamily: "serif", color: "#222366" }}>
//               <li className="nav-item" >
                
//                 <Link className="nav-link" style={{ color: "#222366" }} to="/mainpage" onMouseOver={(e) => e.target.style.color = "#ff0000"}
//                   onMouseOut={(e) => e.target.style.color = "#222366"}>HOME</Link>
//               </li>
//               <li className="nav-item ms-lg-3">
               
//                 <Link to="/login" className="nav-link" style={{ color: "#222366" }} onMouseOver={(e) => e.target.style.color = "#ff0000"}
//                   onMouseOut={(e) => e.target.style.color = "#222366"}>LOGIN</Link>
//               </li>
//               <li className="nav-item ms-lg-3"  >
              
//                 <Link to="/register" className="nav-link" style={{ color: "#222366" }} onMouseOver={(e) => e.target.style.color = "#ff0000"}
//                   onMouseOut={(e) => e.target.style.color = "#222366"}>REGISTER</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         {/* Toggler button */}
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//       </div>
//     </nav>


//   )
// }

// export default Navbar


// //1. logo capital 2. space less 3. photo full 4.navbar red or blue 


import React from 'react';
import { GiHeartDrop } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light custom-navbar">
      <div className="container-fluid">

        {/* Logo and Title */}
        <div className="d-flex align-items-center">
          <GiHeartDrop className="logo-icon me-2" />
          <span className="navbar-title">LIFEDROP</span>
        </div>

        {/* Toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center nav-menu">
            <li className="nav-item">
              <NavLink to="/mainpage" className={({ isActive }) => `nav-link nav-underline ${isActive ? 'active-nav' : ''}`}>HOME</NavLink>
            </li>
            <li className="nav-item ms-lg-4">
              <NavLink to="/login" className={({ isActive }) => `nav-link nav-underline ${isActive ? 'active-nav' : ''}`}>LOGIN</NavLink>
            </li>
            <li className="nav-item ms-lg-4">
              <NavLink to="/register" className={({ isActive }) => `nav-link nav-underline ${isActive ? 'active-nav' : ''}`}>REGISTER</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

