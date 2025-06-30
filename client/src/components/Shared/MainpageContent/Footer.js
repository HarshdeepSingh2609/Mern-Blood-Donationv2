import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GiHeartDrop } from 'react-icons/gi';
const Footer = () => {
  return (
    <div className='footer bg-dark text-light '>
    <div className="d-flex align-items-center">
  <GiHeartDrop color='red' style={{ fontSize: '2.5rem',border:"1px solid #222366",borderRadius:"50%" ,padding:"5px",backgroundColor:"white"}} className='m-2' />
  <a className="navbar-brand ms-1.6 text-light" href="#" style={{ fontSize: '2rem', fontFamily: "serif", fontWeight: 'bolder' }}>LIFEDROP</a>
</div>
      <div>
     <h4> BE A DONAR BE A HERO</h4>
     <h5>Today you give it ,someday you need it</h5>

       </div>
      <div>
      <h4>Catch us on Social Media !</h4>
      <div className='icons'>
      <FaInstagram  color='white' style={{border:"2px solid white",borderRadius:"50%",fontSize: '1.5rem',padding:"3px"}}/>
      <FaFacebook  color='white' style={{border:"2px solid white",borderRadius:"50%",fontSize: '1.5rem',padding:"3px"}} />
      <FaWhatsapp  color='white' style={{border:"2px solid white",borderRadius:"50%",fontSize: '1.5rem',padding:"3px"}}/>
      <FaTwitter  color='white' style={{border:"2px solid white",borderRadius:"50%",fontSize: '1.5rem',padding:"3px"}}/>
      </div>
      </div>

    </div>
  )
}

export default Footer
