import React, { useEffect, useState } from 'react'
import Layout from '../../components/Shared/Layout/Layout'
import API from '../../services/API';
import moment from 'moment';

const OrganizationList = () => {
  const [data,setData]=useState([]);
    const getorgList=async()=>{
        try {
            const {data}=await API.get("/admin/org-list");
            // console.log(data);
            if(data?.success) {
                setData(data?.orgdata);
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getorgList();
    },[])
    
    //DELETE FUNCTION
    const handleDel= async(id)=>{
      try {
        let ans=window.prompt("Are you sure u want to delete this Organisation","SURE");
        if(!ans) return;
        const {data}=await API.delete(`/admin/delete-org/${id}`);
        alert(data?.message);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }


  return (
    <Layout>
    <h3 className='text-center mt-3'>Admin Dashboard: Manage <span className='text-success'>ORGANIZATION</span> Records</h3>
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
                <td>{ record.organisationName}</td>
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

export default OrganizationList
