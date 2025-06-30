// import React from 'react'
// import pic from "./assets/coverpage3.png"
// const PicandQuote = () => {
//   return (
//     <div  className='mainimg'>
// <img src={pic} alt='cover page'  />
//     </div>
      
   
//   )
// }

// export default PicandQuote

// import React from "react";
// import "./PicandQuote.css";
// // Assuming image_329abe.jpg is in your assets folder
// import bgImageNew from "./assets/coverpage.png"; // Using the target image as background

// const PicandQuote = () => {
//   return (
//     // The main container will have the white background and the image on the right
//     <div
//       className="full-bg"
//       style={{ backgroundImage: `url(${bgImageNew})` }}
//     >
//       {/* This div contains all the text and icons */}
//       <div className="text-overlay">
//         <h1 className="hash">#</h1>
//         <h2 className="hero">BE HERO</h2>
//         <p className="subtitle">
//           YOU DON’T NEED TO BE A DOCTOR <br />
//           <span className="highlight">TO SAVE A LIFE</span>
//         </p>
//         <p className="symbols">+ &nbsp;&nbsp; -</p>
//         <p className="desc">
//           LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//         </p>
//         <div className="icons">
//           {/* Font Awesome icons - ensure Font Awesome is linked in your public/index.html */}
//           <i className="fab fa-twitter"></i>
//           <i className="fab fa-facebook-f"></i>
//           <i className="fab fa-instagram"></i>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PicandQuote;

import React from "react";
import "./PicandQuote.css";
import { useNavigate } from "react-router-dom";
import bgImageNew from "./assets/newcoverpage.png"; // Update if needed

const PicandQuote = () => {
  const navigate = useNavigate();

  const handleDonateNow = () => {
    const isLoggedIn = localStorage.getItem("token"); // or however you're storing auth
    if (isLoggedIn) {
      navigate("/donate");
    } else {
      navigate("/login");
    }
  };

  const handleVolunteerRegister = () => {
    navigate("/register");
  };

  return (
    <div className="full-bg" style={{ backgroundImage: `url(${bgImageNew})` }}>
      <div className="text-overlay">
        <h1 className="hash">#</h1>
        <h2 className="hero">BE A HERO</h2>
        <p className="subtitle">
          YOU DON’T NEED TO BE A DOCTOR <br />
          <span className="highlight">TO SAVE A LIFE</span>
        </p>
        <p className="desc">GIVE BLOOD ,GIVE HOPE</p>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="cta-donate" onClick={handleDonateNow}>Donate Now</button>
          <button className="cta-volunteer" onClick={handleVolunteerRegister}>Register to Volunteer</button>
        </div>

        {/* Social Media */}
        <div className="icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default PicandQuote;
