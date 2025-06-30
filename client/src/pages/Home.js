import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../components/Shared/Spinner';
import Layout from '../components/Shared/Layout/Layout';
import Modal from '../components/Shared/modals/Modal';
import API from '../services/API';
import moment from "moment";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { loading, error,user } = useSelector(state => state.auth);
  const [data,setData]=useState([]);
  const navigate=useNavigate();

  //get records
  const getBloodRecords = async()=>{
    try {
      const {data} = await API.get("/inventory/get-records");
      if(data?.success) {
        setData(data?.inventory);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getBloodRecords();
  },[]);
  return (

    <Layout>
    
    {user?.role==="admin" && navigate("/admin")}
      {error && <span>alert{error}</span>}
      {loading ? <Spinner /> :
        <div className='container'>
          <h4 className=' mt-3 mb-3 text-left' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{cursor:"pointer"}}> 
          <i className="fa-solid fa-circle-plus text-danger"></i> &nbsp; Add Inventory</h4>


        <h3 className='text-center mb-3'><span className='text-danger'>BLOOD CATALOG: </span> A Comprehensive Record Compilation.</h3>
        <hr />
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Inventory Type</th>
                <th scope="col">Quantity</th>
                <th scope="col">Email</th>
                <th scope="col">Time/date</th>

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


          <Modal />
        </div>
      }

    </Layout>
  )
}

export default Home
