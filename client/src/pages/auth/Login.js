// import React from 'react'
// import Form from '../../components/Shared/Form/Form'
// import { useSelector } from 'react-redux'
// import Spinner from '../../components/Shared/Spinner';

// const Login = () => {
//     const {loading,error}=useSelector(state=>state.auth);
   
//     return (
//         <div>
//        loading?<Spinner />: (
//             <div className='row g-0'>
//                 <div className='col-md-8'>IMAGE</div>
//                 <div className='col-md-4 form-container'>
//                     <Form formTitle={"Login Page"} submitBtn={"Login"} formType={"Login"} />

//                 </div>
//             </div>)
//         </div>
//     )
// }

// export default Login

//  {/* <h1>LOGIN PAGE</h1> */}
























// import React from 'react';
// import Form from '../../components/Shared/Form/Form';
// import { useSelector } from 'react-redux';
// import Spinner from '../../components/Shared/Spinner';
// import Navbar from '../../components/Shared/MainpageContent/Navbar';
// import "./Login.css"
// const Login = () => {
//     const { loading, error } = useSelector(state => state.auth);
   
//     return (
//         // <div>
//         // {error&& <span>{alert(error)}</span>}
//         //     {loading ? (
//         //         <Spinner />
//         //     ) : (
//         //         <div className='row g-0'>
//         //             <div className='col-md-8'>IMAGE</div>
//         //             <div className='col-md-4 form-container'>
//         //                 <Form formTitle={"Login Page"} submitBtn={"Login"} formType={"Login"} />
//         //             </div>
//         //         </div>
//         //     )}
//         // </div>
       
//         <div className='login-container'>
//         {error&& <span>{alert(error)}</span>}
//             {loading ? (
//                 <Spinner />
//             ) : (
//                 <div className='row g-0'>
//                    <Navbar />
//                     <div className='form-container1'>
//                     <div className='loginpage'>
//                         <Form formTitle={"Login Page"} submitBtn={"Login"} formType={"Login"} />
//                         </div>
//                     </div>
                    
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Login;
// Login.jsx


// import React from 'react';
// import Form from '../../components/Shared/Form/Form';
// import { useSelector } from 'react-redux';
// import Spinner from '../../components/Shared/Spinner';
// import Navbar from '../../components/Shared/MainpageContent/Navbar';
// import './Login.css';

// const Login = () => {
//   const { loading, error } = useSelector((state) => state.auth);

//   return (
//     <div className="login-container">
//       {error && <span>{alert(error)}</span>}
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className="row g-0">
//           <Navbar />
//           <div className="form-container2">
//             <div className="loginpage">
//               <Form formTitle="Login Page" submitBtn="Login" formType="Login" />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;



// import React, { useEffect } from 'react';
// import Form from '../../components/Shared/Form/Form';
// import { useSelector } from 'react-redux';
// import Spinner from '../../components/Shared/Spinner';
// import Navbar from '../../components/Shared/MainpageContent/Navbar';
// import './Login.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Login = () => {
//   const { loading, error } = useSelector((state) => state.auth);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <div className="login-container">
//       {error && <span>{alert(error)}</span>}
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className="row g-0">
//           {/* Navbar with fade-down animation */}
//           <div data-aos="fade-down">
//             <Navbar />
//           </div>

//           {/* Form with zoom-in animation */}
//           <div className="form-container2" data-aos="zoom-in">
//             <div className="loginpage">
//               <Form formTitle="Login Page" submitBtn="Login" formType="Login" />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;












//working code 1

// import React, { useEffect } from 'react';
// import Form from '../../components/Shared/Form/Form';
// import { useSelector } from 'react-redux';
// import Spinner from '../../components/Shared/Spinner';
// import Navbar from '../../components/Shared/MainpageContent/Navbar';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Login = () => {
//   const { loading, error, user } = useSelector((state) => state.auth);
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   useEffect(() => {
//     if (user) {
//       navigate("/"); // redirect to home when login is successful
//     }
//   }, [user, navigate]);

//   return (
//     <div className="login-container">
//       {error && <span>{alert(error)}</span>}
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className="row g-0">
//           <div data-aos="fade-down"><Navbar /></div>
//           <div className="form-container2" data-aos="zoom-in">
//             <div className="loginpage">
//               <Form formTitle="Login Page" submitBtn="Login" formType="Login" />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;







import React, { useEffect } from 'react';
import Form from '../../components/Shared/Form/Form';
import { useSelector } from 'react-redux';
import Spinner from '../../components/Shared/Spinner';
import Navbar from '../../components/Shared/MainpageContent/Navbar';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
  const { loading, error, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (user) {
      if (user.role === "organisation") {
        navigate("/");
      } else if (user.role === "donar") {
        navigate("/donation");
      } else if (user.role === "hospital") {
        navigate("/consumer");
      } else {
        navigate("/login");
      }
    }
  }, [user, navigate]);

  return (
    <div className="login-container">
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div data-aos="fade-down"><Navbar /></div>
          <div className="form-container2" data-aos="zoom-in">
            <div className="loginpage">
              <Form formTitle="Login Page" submitBtn="Login" formType="Login" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
