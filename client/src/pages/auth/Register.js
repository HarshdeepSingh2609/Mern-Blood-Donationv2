// import React from 'react'
// import Form from '../../components/Shared/Form/Form'
// import { useSelector } from "react-redux"
// import Spinner from '../../components/Shared/Spinner';
// import Navbar from '../../components/Shared/MainpageContent/Navbar';
// import "./Register.css"
// const Register = () => {
//   const {loading,error}=useSelector(state=>state.auth);
//   return (
  
// //     <div>
// //     {error&&<span>alert({error})</span>}
// //    {loading?<Spinner/> : <div className='row g-0'>
// //         <div className='col-md-8'>IMAGE</div>
// //         <div className='col-md-4 form-container'>
// //            <Form formTitle={"Register Page"} submitBtn={"Register"} formType={"Register"}/>

// //         </div>
// //     </div>}
    
// // </div>

// <div className='register-container'>
// {error&& <span>{alert(error)}</span>}
//     {loading ? (
//         <Spinner />
//     ) : (
//         <div className='row g-0'>
//            <Navbar />
//             <div className='form-container2'>
//            <div className='registerpage'> 
//                 <Form formTitle={"Register Page"} submitBtn={"Register"} formType={"Register"} />
//                 </div>
//             </div>
            
//         </div>
//     )}
// </div>
//   )
// }

// export default Register
// Register.jsx


// import React from 'react';
// import Form from '../../components/Shared/Form/Form';
// import { useSelector } from 'react-redux';
// import Spinner from '../../components/Shared/Spinner';
// import Navbar from '../../components/Shared/MainpageContent/Navbar';
// import './Register.css';

// const Register = () => {
//   const { loading, error } = useSelector((state) => state.auth);

//   return (
//     <div className="register-container">
//       {error && <span>{alert(error)}</span>}
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className="row g-0">
//           <Navbar />
//           <div className="form-container2">
//             <div className="registerpage">
//               <Form formTitle="Register Page" submitBtn="Register" formType="Register" />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Register;
import React, { useEffect } from 'react';
import Form from '../../components/Shared/Form/Form';
import { useSelector } from 'react-redux';
import Spinner from '../../components/Shared/Spinner';
import Navbar from '../../components/Shared/MainpageContent/Navbar';
import './Register.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="register-container">
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          {/* Navbar with fade-down */}
          <div data-aos="fade-down">
            <Navbar />
          </div>

          {/* Form with zoom-in */}
          <div className="form-container2" data-aos="zoom-in">
            <div className="registerpage">
              <Form formTitle="Register Page" submitBtn="Register" formType="Register" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
