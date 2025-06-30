import React, { useEffect,useState } from 'react'
import Layout from '../../components/Shared/Layout/Layout'
import API from '../../services/API';
import moment from 'moment';

const Hospital = () => {
    const [data,setData]=useState([]);    //ctrl space
    const getHospitals=async()=>{
        try {
            const {data}=await API.get("/inventory/get-hospitals");
            // console.log(data);
            if(data?.success) {
                setData(data?.hospitals);
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getHospitals();
    },[])
  return (
    <Layout>
        {/* <h1>DONAR PAGE</h1> */}
        <h3 className='text-center mb-2 mt-3' > Access Your <span className='text-success'>HOSPITAL</span> Network</h3>
      <hr />
        <table className="table table-striped text-center">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Date</th>
               
              </tr>
            </thead>
            <tbody>
           {data.map(record=>(
            <tr key={record._id}>
                <td>{record.hospitalName || record.organisationName+"(ORG)"}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{record.address}</td>
                <td>{moment(record.createdAt).format("DD/MM/YY hh:mm A")}</td>
              </tr>
           ))}
             
            </tbody>
          </table>
    </Layout>
  )
}

export default Hospital
