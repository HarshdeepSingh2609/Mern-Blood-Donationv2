// import React from 'react'
// import donorpic from "./assets/donorpic.png"
// import adminpic from "./assets/adminpic.png"
// import hospitalpic from "./assets/hospitalpic.png"
// import orgpic from "./assets/orgimg.png"
// const About = () => {
//   return (
//     <div className='about bg-light' style={{fontFamily:"sans-serif"}}>
//     <h3 className='text-center' style={{fontWeight:"bolder"}}>About us</h3>
//       <p className='text-center'>
//       Our platform connects donors with organizations and hospitals, streamlining blood donations for medical needs.
//       <br /> It simplifies the process, promoting a culture of giving and saving lives.<br />
//       Together, we make a profound impact on public health and emergency preparedness.
//       </p>
//       <div className='features'>
//        <div className='feature'>  <img src={donorpic} /></div>
//         <div className='feature'><img src={hospitalpic} /></div>
//         <div className='feature'>  <img src={orgpic} /> </div>
//         <div className='feature'><img src={adminpic} /></div>
      
        
//       </div>
//     </div>
//   )
// }

// export default About

import React from 'react';
import donorpic from './assets/donor.png';
import adminpic from './assets/admin.png';
import hospitalpic from './assets/hospital.png';
import orgpic from './assets/organization.png';
import './About.css';

const About = () => {
  const roles = [
    {
      img: donorpic,
      title: 'Donor',
      desc: 'Donors can register, donate blood through organizations, and track their contributions easily.',
    },
    {
      img: hospitalpic,
      title: 'Hospital',
      desc: 'Hospitals request and receive blood via organizations with a streamlined and transparent process.',
    },
    {
      img: orgpic,
      title: 'Organization',
      desc: 'Organizations connect donors and hospitals, manage communication, and handle inventory efficiently.',
    },
    {
      img: adminpic,
      title: 'Admin',
      desc: 'Admins manage the entire platform including users, organizations, and system operations.',
    },
  ];

  return (
    <div className="about-section bg-light py-5">
      <h3 className="about-heading text-center mb-4"> {/* Added text-center here */}
        About Us
      </h3>
      <p className="text-center mb-5 about-subtext">
        Our platform connects donors with organizations and hospitals, streamlining blood donations for medical needs. <br />
        It simplifies the process, promoting a culture of giving and saving lives. <br />
        Together, we make a profound impact on public health and emergency preparedness.
      </p>

      <div className="container">
        <div className="row justify-content-center g-4">
          {roles.map((role, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3">
              <div className="card feature-card text-center p-4 h-100">
                <div className="icon-circle mx-auto mb-3"> {/* New wrapper for circular icon */}
                  <img src={role.img} alt={role.title} className="role-img" />
                </div>
                <h5 className="mt-3 fw-bold role-title">{role.title}</h5>
                <p className="role-desc">{role.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;