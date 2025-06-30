import {createSlice} from "@reduxjs/toolkit"
import { getCurrentUser, userLogin, userRegister } from "./authAction";

const token = localStorage.getItem("token")? localStorage.getItem("token"): null;
const initialState = {
    loading:false,
    user:null,
    token,
    error:null
}

// const authSlice = createSlice ({
//     name:"auth",
//     initialState:initialState,
//     reducers:{},
//     extraReducers:(builder) => {

//         //login
//         builder.addCase(userLogin.pending,(state)=>{
//             state.loading=true;
//             state.error=null;
//         });
//         builder.addCase(userLogin.fulfilled,(state,{payload})=>{
//             state.loading=false;
//             state.user=payload.user;
//             state.token=payload.token;
//         });
//         builder.addCase(userLogin.rejected,(state,{payload})=>{
//             state.loading=false;
//             state.error=payload;
//         });

//          // REGISTER user
//     builder.addCase(userRegister.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       });
//       builder.addCase(userRegister.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         state.user = payload.user;
//       });
//       builder.addCase(userRegister.rejected, (state, { payload }) => {
//         state.loading = false;
//         state.error = payload;
//       });


//       //get user 

//       builder.addCase(getCurrentUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       });
//       builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         state.user = payload.user;
//       });
//       builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
//         state.loading = false;
//         state.error = payload;
//       });
//     },
// });

// export default authSlice;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // Register
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userRegister.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
      })
      .addCase(userRegister.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // Get current user
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice;
