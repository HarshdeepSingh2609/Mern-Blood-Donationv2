import React from 'react'
import Layout from '../../components/Shared/Layout/Layout'
import { useSelector } from 'react-redux'
const AdminHome = () => {
    const {user}=useSelector(state=>state.auth);
  return (
 <Layout>
    <div className='container'>
    <div className='d-flex flex-column m-3' >
        <h1 className='text-center'>Welcome admin <em className='text-success'>{user.name}</em></h1>
        <hr />
      
        <p className=' mt-3' style={{fontSize:"1.3rem"}}>Welcome, esteemed admin! Your arrival marks a pivotal moment in our quest to save lives. With your guidance, 
        our Blood Bank App stands poised to make a profound impact. Together, we'll streamline processes, empower donors,
        and ensure every drop counts.
         Your dedication fuels our mission, and we're honored to have you on board. Let's embark on this noble journey together!</p>

<div  style={{fontSize:"1.3rem"}}>
         <p>As an admin, you have the following privileges:</p>
      <ul >
        <li>View the list of all donors</li>
        <li>Access information about all hospitals</li>
        <li>Manage details of all organizations</li>
        {/* Add additional privileges here */}
      </ul>
      </div>
    </div>
    </div>
 </Layout>
  )
}

export default AdminHome
