// import React from 'react'
// import Navbar from '../components/Shared/MainpageContent/Navbar'
// import PicandQuote from '../components/Shared/MainpageContent/PicandQuote'
// import Importance from '../components/Shared/MainpageContent/Importance'
// import About from '../components/Shared/MainpageContent/About'
// import Paging from '../components/Shared/MainpageContent/Paging'
// import Footer from '../components/Shared/MainpageContent/Footer'



// const Mainpage = () => {
//   return (
//     <>
//     <Navbar />
//     <PicandQuote />
//     <br />
//     <hr />
//    <Importance   />
//    <hr />
//    <br />
//    <About  />
   
//    <hr />
//    <br/>
//    <Paging />
//    <br />
//    <Footer/>

//    </>
//   )
// }

// export default Mainpage
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../components/Shared/MainpageContent/Navbar';
import PicandQuote from '../components/Shared/MainpageContent/PicandQuote';
import Importance from '../components/Shared/MainpageContent/Importance';
import About from '../components/Shared/MainpageContent/About';
import Paging from '../components/Shared/MainpageContent/Paging';
import Footer from '../components/Shared/MainpageContent/Footer';

const Mainpage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div data-aos="fade-down">
        <Navbar />
      </div>

      <div data-aos="zoom-in">
        <PicandQuote />
      </div>

      <br />
      <hr />

      <div data-aos="fade-up">
        <Importance />
      </div>

      <hr />
      <br />

      <div data-aos="fade-right">
        <About />
      </div>

      <hr />
      <br />

      <div data-aos="fade-left">
        <Paging />
      </div>

      <br />

      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
};

export default Mainpage;
