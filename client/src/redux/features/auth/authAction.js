import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
//import {  toast } from 'react-toastify';

// export const userLogin = createAsyncThunk(
//   "auth/login", //name
//   async ({ role, email, password }, { rejectWithValue }) => {
//     try {
//       const { data } = await API.post("/auth/login", { role, email, password });
//       console.log(data);
//       //store token
//       if (data.success) {
//         alert(data.message);
//         // console.log("data is "+data);
//         // console.log(`token is ${data.token}`);
//         localStorage.setItem("token", data.token);
//         window.location.replace("/");
  
//       }
      
    
//        return data;
//     }
//      catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      if (data.success) {
        alert(data.message);
        localStorage.setItem("token", data.token);
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      });
      if (data?.success) {
        alert("User Registerd Successfully");
        window.location.replace("/login");
     
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getCurrentUser=createAsyncThunk(
  "auth/getCurrentUser",
  async({rejectWithValue})=>{
    try {
      const res= await API.get("/auth/current-user");
      if(res.data) {
        return res?.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

