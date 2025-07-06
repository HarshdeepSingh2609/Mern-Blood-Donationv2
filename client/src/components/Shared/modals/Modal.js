// import React, {useState } from 'react'
// import { useSelector } from "react-redux"
// import InputType from '../Form/InputType';
// import API from '../../../services/API';

// const Modal = () => {
//   const [inventoryType, setInventoryType] = useState("in");
//   const [bloodGroup, setBloodGroup] = useState(" ");
//   const [quantity, setQuantity] = useState(0);
//   const [email, setEmail] = useState(" ");

//   const {user}=useSelector((state)=>state.auth);

//   const handleModalSubmit=async()=>{
//     try {
//       if(!bloodGroup || !quantity) {
//         return alert("FILL ALL FIELDS");
//       }

//       const {data}= await API.post("/inventory/create-inventory",{
        
//         email,
//         organisation:user?._id,
//         inventoryType,
//         bloodGroup,
//         quantity
//       });
//       console.log(data);
//       if(data?.success) {
//         alert("NEW RECORD ADDED");
//         window.location.reload();
//       }
//     } catch (error) {
//       window.location.reload();
//       console.log(error);
//     }
//   }
//   return (
//     <div>
//       <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h1 className="modal-title fs-5" id="exampleModalLabel">BLOOD RECORD MANAGER</h1>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
//             </div>

//             <div className="modal-body">

//               <div className='d-flex mb-2'>
//                 Blood type: &nbsp;

//                 <div className='form-check ms-3'>
//                   <input type='radio' name='inRadio' defaultChecked className='form-check-input'
//                     value={"in"} onChange={(e) => setInventoryType(e.target.value)}></input>
//                   <label htmlFor='in' className='form-check-label'>IN</label>
//                 </div>

//                 <div className='form-check ms-3'>
//                   <input type='radio' name='inRadio' className='form-check-input'
//                     value={"out"} onChange={(e) => setInventoryType(e.target.value)}></input>
//                   <label htmlFor='out' className='form-check-label'>OUT</label>
//                 </div>

//               </div>

//               <select className="form-select mt-3 mb-3"  aria-label="Default select example" onChange={(e)=>setBloodGroup(e.target.value)}>
//                 <option defaultValue={"Choose blood group"}>Choose blood group</option>
//                 <option value={"O+"} >O+</option> 
//                 <option value={"O-"}>O-</option>
//                 <option value={"A+"}>A+</option>
//                 <option value={"A-"}>A-</option>
//                 <option value={"B+"}>B+</option>
//                 <option value={"B-"}>B-</option>
//                 <option value={"AB+"}>AB+</option>
//                 <option value={"AB-"}>AB-</option>
//               </select>

//               <InputType labelText={"Donar Email"} labelFor={'donarEmail'}  inputType={"email"} value={email} 
//               onChange={(e)=>{
//                 setEmail(e.target.value);
//               }}/>

//               <InputType labelText={"Blood Quantity"} labelFor={'quantity'} inputType={"number"} value={quantity}
//                 onChange={(e) => {
//                   setQuantity(e.target.value);
//                 }} />


//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" className="btn btn-primary" onClick={handleModalSubmit}>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>


//     </div>
//   )
// }

// export default Modal













// import React, { useState } from 'react';
// import { useSelector } from "react-redux";
// import InputType from '../Form/InputType';
// import API from '../../../services/API';
// import './Modal.css'; // Make sure to create this file

// const Modal = () => {
//   const [inventoryType, setInventoryType] = useState("in");
//   const [bloodGroup, setBloodGroup] = useState(" ");
//   const [quantity, setQuantity] = useState(0);
//   const [email, setEmail] = useState(" ");

//   const { user } = useSelector((state) => state.auth);

//   const handleModalSubmit = async () => {
//     try {
//       if (!bloodGroup || !quantity) {
//         return alert("FILL ALL FIELDS");
//       }

//       const { data } = await API.post("/inventory/create-inventory", {
//         email,
//         organisation: user?._id,
//         inventoryType,
//         bloodGroup,
//         quantity,
//       });

//       if (data?.success) {
//         alert("NEW RECORD ADDED");
//         window.location.reload();
//       }
//     } catch (error) {
//       window.location.reload();
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex={-1}
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content inventory-modal-content">
//             <div className="modal-header inventory-modal-header">
//               <h2 className="modal-title fs-5 text-danger fw-bold" id="exampleModalLabel">
//                 🩸 Blood Record Manager
//               </h2>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               />
//             </div>

//             <div className="modal-body inventory-modal-body">
//               <div className="d-flex mb-3 align-items-center">
//                 <strong className="me-2">Blood Type:</strong>
//                 <div className="form-check ms-2">
//                   <input
//                     type="radio"
//                     name="inRadio"
//                     defaultChecked
//                     className="form-check-input"
//                     value={"in"}
//                     onChange={(e) => setInventoryType(e.target.value)}
//                   />
//                   <label htmlFor="in" className="form-check-label">
//                     IN
//                   </label>
//                 </div>
//                 <div className="form-check ms-3">
//                   <input
//                     type="radio"
//                     name="inRadio"
//                     className="form-check-input"
//                     value={"out"}
//                     onChange={(e) => setInventoryType(e.target.value)}
//                   />
//                   <label htmlFor="out" className="form-check-label">
//                     OUT
//                   </label>
//                 </div>
//               </div>

//               <select
//                 className="form-select mb-3 inventory-modal-select"
//                 onChange={(e) => setBloodGroup(e.target.value)}
//               >
//                 <option defaultValue>Choose blood group</option>
//                 <option value={"O+"}>O+</option>
//                 <option value={"O-"}>O-</option>
//                 <option value={"A+"}>A+</option>
//                 <option value={"A-"}>A-</option>
//                 <option value={"B+"}>B+</option>
//                 <option value={"B-"}>B-</option>
//                 <option value={"AB+"}>AB+</option>
//                 <option value={"AB-"}>AB-</option>
//               </select>

//               <InputType
//                 labelText={"Donor Email"}
//                 labelFor={"donarEmail"}
//                 inputType={"email"}
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//               />

//               <InputType
//                 labelText={"Blood Quantity"}
//                 labelFor={"quantity"}
//                 inputType={"number"}
//                 value={quantity}
//                 onChange={(e) => {
//                   setQuantity(e.target.value);
//                 }}
//               />
//             </div>

//             <div className="modal-footer inventory-modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-primary"
//                 onClick={handleModalSubmit}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;













//working code v1



import React, { useState } from 'react';
import { useSelector } from "react-redux";
import InputType from '../Form/InputType';
import API from '../../../services/API';
import './Modal.css';

const Modal = () => {
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [email, setEmail] = useState("");

  const { user } = useSelector((state) => state.auth);

  const handleModalSubmit = async () => {
    try {
      if (!bloodGroup || !quantity) {
        return alert("Please fill all the fields.");
      }

      const { data } = await API.post("/inventory/create-inventory", {
        email,
        organisation: user?._id,
        inventoryType,
        bloodGroup,
        quantity,
      });

      if (data?.success) {
        alert("New record added successfully.");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      window.location.reload();
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content inventory-modal-content">
            <div className="modal-header inventory-modal-header">
              <h2 className="modal-title fs-5 text-danger fw-bold" id="exampleModalLabel">
                🩸 Blood Record Manager
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body inventory-modal-body">

              {/* Inventory Type */}
              <div className="d-flex mb-3 align-items-center">
                <strong className="me-2 text-danger">Blood Type:</strong>
                <div className="form-check ms-2">
                  <input
                    type="radio"
                    id="in"
                    name="inventoryType"
                    className="form-check-input"
                    value="in"
                    checked={inventoryType === "in"}
                    onChange={(e) => setInventoryType(e.target.value)}
                  />
                  <label htmlFor="in" className="form-check-label">
                    IN
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    type="radio"
                    id="out"
                    name="inventoryType"
                    className="form-check-input"
                    value="out"
                    checked={inventoryType === "out"}
                    onChange={(e) => setInventoryType(e.target.value)}
                  />
                  <label htmlFor="out" className="form-check-label">
                    OUT
                  </label>
                </div>
              </div>

              {/* Blood Group */}
              <select
                className="form-select mb-3 inventory-modal-select"
                onChange={(e) => setBloodGroup(e.target.value)}
                value={bloodGroup}
              >
                <option value="">Choose blood group</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>

              {/* Donor Email */}
              <InputType
                labelText="Donor Email"
                labelFor="donorEmail"
                inputType="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Blood Quantity */}
              <InputType
                labelText="Blood Quantity"
                labelFor="quantity"
                inputType="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            {/* Footer */}
            <div className="modal-footer inventory-modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleModalSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
