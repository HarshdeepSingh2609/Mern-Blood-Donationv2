import React, { useEffect, useState } from 'react'
import Layout from '../../components/Shared/Layout/Layout'
import API from '../../services/API';
import moment from 'moment';

const DonarList = () => {
  const [data,setData]=useState([]);
    const getDonorList=async()=>{
        try {
            const {data}=await API.get("/admin/donar-list");
            // console.log(data);
            if(data?.success) {
                setData(data?.donardata);
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getDonorList();
    },[])
    
    //DELETE FUNCTION
    const handleDel= async(id)=>{
      try {
        let ans=window.prompt("Are you sure u want to delete this donar","SURE");
        if(!ans) return;
        const {data}=await API.delete(`/admin/delete-donar/${id}`);
        alert(data?.message);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }


  return (
    <Layout>
    <h3 className='text-center mt-3'>Admin Dashboard: Manage <span className='text-danger'>DONOR</span> Records</h3>
        <hr />
      <table className="table table-striped text-center">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
               
              </tr>
            </thead>
            <tbody>
           {data.map(record=>(
            <tr key={record._id}>
                <td>{record.name || record.organisationName+"(ORG)"}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{moment(record.createdAt).format("DD/MM/YY hh:mm A")}</td>
                <td> <div className='btn btn-danger' onClick={()=>{
                  handleDel(record._id);
                }}>Delete</div></td>
              </tr>
           ))}
             
            </tbody>
          </table>
    </Layout>
  )
}

export default DonarList
