import React, { useEffect, useState } from 'react'
import Layout from '../../components/Shared/Layout/Layout'
import API from '../../services/API';
import moment from 'moment';
import { useSelector } from "react-redux"
const Consumer = () => {
 
    const [data,setData]=useState([]);
    const {user}=useSelector(state=>state.auth);
    const getbloodHosp=async()=>{
        try {
            const {data}=await API.post("/inventory/get-records-hospital",{
                filters:{
                    inventoryType:"out",
                    hospital:user?._id
                }
            });
            
            if(data?.success) {
                setData(data?.inventory);
                console.log(data);
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getbloodHosp();
    },[])
  return (
    <Layout>
        {/* <h1>DONAR PAGE</h1> */}
        <h3 className='text-center mt-3'> <span className='text-danger'>Harvested Donations:</span> Organizational Blood </h3>
        <hr />
        <table className="table table-striped mt-4 text-center">
            <thead>
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Inventory Type</th>
                <th scope="col">Quantity</th>
                <th scope="col">Email</th>
                <th scope="col">Date</th>
               
              </tr>
            </thead>
            <tbody>
           {data.map(record=>(
            <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity}</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YY hh:mm A")}</td>
              </tr>
           ))}
             
            </tbody>
          </table>
    </Layout>
  )
}

export default Consumer
