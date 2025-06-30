// import React, { useState } from 'react'
// import InputType from './InputType'
// import {Link} from "react-router-dom"
// import { HandleLogin,HandleRegister} from '../../../services/AuthService';
// import "./Form.css"

// const Form = ({ submitBtn, formTitle, formType }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("donar");
//   const [name, setName] = useState("");
//   const [organisationName, setOrganisationName] = useState("");
//   const [hospitalName, setHospitalName] = useState("");
//   const [website, setWebsite] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");

//   return (
//     <div>
//       <form onSubmit={(e)=> {
//        if(formType==="Login") 
//        {
//         HandleLogin(e,email,password,role)
//        }
//        else {
//         HandleRegister( e,
//               name,
//               role,
//               email,
//               password,
//               phone,
//               organisationName,
//               address,
//               hospitalName,
//               website)
//        }
//       }}>
//         <h1 className='text-center'>{formTitle}</h1>
//         <hr />

//         <div className='d-flex mb-5 '>
//           <div className="form-check ms-3">
//             <input className="form-check-input" type="radio" name="role" id="donarRadio" value={"donar"} onChange={(e) => { setRole(e.target.value) }} defaultChecked />
//             <label className="form-check-label" htmlFor="donarRadio" >
//               Donar
//             </label>
//           </div>

//           <div className="form-check ms-3">
//             <input className="form-check-input" type="radio" name="role" id="adminRadio" value={"admin"} onChange={(e) => { setRole(e.target.value) }} />
//             <label className="form-check-label" htmlFor="adminRadio">
//               Admin
//             </label>
//           </div>

//           <div className="form-check ms-3">
//             <input className="form-check-input" type="radio" name="role" id="organisationRadio" value={"organisation"} onChange={(e) => { setRole(e.target.value) }} />
//             <label className="form-check-label" htmlFor="organisationRadio" >
//              Organisation
//             </label>
//           </div>

//           <div className="form-check ms-3">
//             <input className="form-check-input" type="radio" name="role" id="hospitalRadio" value={"hospital"} onChange={(e) => { setRole(e.target.value) }} />
//             <label className="form-check-label" htmlFor="hospitalRadio" >
//               Hospital
//             </label>
//           </div>


//         </div>

//         {(() => {
//           //eslint-disable-next-line
//           switch (true) {
//             case formType === "Login": {
//               return (
//                 <>
//                   <InputType labelFor={"forEmail"} labelText={"Email"} inputType={"email"} name={"email"} value={email}
//                     onChange={(e) => { setEmail(e.target.value) }} />

//                   <InputType labelFor={"forPassword"} labelText={"Password"} inputType={"password"} name={"password"} value={password}
//                     onChange={(e) => { setPassword(e.target.value) }} />
//                 </>
//               );
//             }

//             case formType === "Register": {
//               return (
//                 <>

//                   {((role === "donar") || (role === "admin")) && (

//                     <InputType
//                       labelFor={"forName"}
//                       labelText={"Name"}
//                       inputType={"text"}
//                       name={"name"}
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                     />
//                   )}

//                 {(role==="organisation") && (
//                   <InputType
//                     labelFor={"forOrganisationName"}
//                     labelText={"Organisation Name"}
//                     inputType={"text"}
//                     name={"organisationName"}
//                     value={organisationName}
//                     onChange={(e) => setOrganisationName(e.target.value)}
//                   />

//                 )}

//                 {role==="hospital" && (
//                   <InputType
//                     labelFor={"forHospitalName"}
//                     labelText={"Hospital Name"}
//                     inputType={"text"}
//                     name={"hospitalName"}
//                     value={hospitalName}
//                     onChange={(e) => setHospitalName(e.target.value)}
//                   />
//                 )}
                  
                  

//                   <InputType labelFor={"forEmail"} labelText={"Email"} inputType={"email"} name={"email"} value={email}
//                     onChange={(e) => { setEmail(e.target.value) }} />

//                   <InputType labelFor={"forPassword"} labelText={"Password"} inputType={"password"} name={"password"} value={password}
//                     onChange={(e) => { setPassword(e.target.value) }} />

//                   {/* <InputType
//                     labelFor={"forWebsite"}
//                     labelText={"Website"}
//                     inputType={"text"}
//                     name={"website"}
//                     value={website}
//                     onChange={(e) => setWebsite(e.target.value)}
//                   /> */}

//                   <InputType
//                     labelFor={"forAddress"}
//                     labelText={"Address"}
//                     inputType={"text"}
//                     name={"address"}
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                   />

//                   <InputType
//                     labelFor={"forPhone"}
//                     labelText={"Phone"}
//                     inputType={"tel"}
//                     name={"phone"}
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                   />
//                 </>
//               );
//             }
//           }
//         })()}

//         <div className='d-flex justify-content-between'>
//         {formType==="Login"?(
//           <p>Not registered yet ? Register <Link to={"/register"}> Here!</Link></p>
//         ):(
//           <p>Already a User ? <Link to={"/login"}> Login</Link></p>
//         )}
//           <button className='btn btn-primary' type='submit'>{submitBtn}</button>

//         </div>
//       </form>
//     </div>
//   )
// }

// export default Form
// Form.jsx



import React, { useState } from 'react';
import InputType from './InputType';
import { Link } from 'react-router-dom';
import { HandleLogin, HandleRegister } from '../../../services/AuthService';
import './Form.css';

const Form = ({ submitBtn, formTitle, formType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('donar');
  const [name, setName] = useState('');
  const [organisationName, setOrganisationName] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [website, setWebsite] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType === 'Login') {
            HandleLogin(e, email, password, role);
          } else {
            HandleRegister(
              e,
              name,
              role,
              email,
              password,
              phone,
              organisationName,
              address,
              hospitalName,
              website
            );
          }
        }}
      >
        <h1 className="text-center">{formTitle}</h1>
        <hr />

        {/* Role Selection */}
       <div className="role-toggle">
  {['donar', 'admin',  'hospital','organisation'].map((r) => (
    <button
      key={r}
      type="button"
      className={`role-button ${role === r ? 'active' : ''}`}
      onClick={() => setRole(r)}
    >
      {r.charAt(0).toUpperCase() + r.slice(1)}
    </button>
  ))}
</div>

        {/* Conditional Inputs */}
        {formType === 'Login' ? (
          <>
            <InputType
              labelFor="forEmail"
              labelText="Email"
              inputType="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputType
              labelFor="forPassword"
              labelText="Password"
              inputType="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        ) : (
          <>
            {/* Name */}
            {(role === 'donar' || role === 'admin') && (
              <InputType
                labelFor="forName"
                labelText="Name"
                inputType="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            {role === 'organisation' && (
              <InputType
                labelFor="forOrganisationName"
                labelText="Organisation Name"
                inputType="text"
                name="organisationName"
                value={organisationName}
                onChange={(e) => setOrganisationName(e.target.value)}
              />
            )}

            {role === 'hospital' && (
              <InputType
                labelFor="forHospitalName"
                labelText="Hospital Name"
                inputType="text"
                name="hospitalName"
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
              />
            )}

            {/* Email & Password side-by-side */}
            <div className="row">
              <div className="col-md-6">
                <InputType
                  labelFor="forEmail"
                  labelText="Email"
                  inputType="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <InputType
                  labelFor="forPassword"
                  labelText="Password"
                  inputType="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Address & Phone side-by-side */}
            <div className="row">
              <div className="col-md-6">
                <InputType
                  labelFor="forAddress"
                  labelText="Address"
                  inputType="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <InputType
                  labelFor="forPhone"
                  labelText="Phone"
                  inputType="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </>
        )}

        {/* Bottom row: link + button */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          {formType === 'Login' ? (
            <p>
              Not registered yet? <Link to="/register">Register</Link>
            </p>
          ) : (
            <p>
              Already a user? <Link to="/login">Login</Link>
            </p>
          )}
          <button className="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
