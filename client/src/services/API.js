// import axios from "axios";

// const API = axios.create({ baseURL: process.env.REACT_APP_BASEURL });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("token")) {
//     req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
//   }
//   return req;
// });

// export default API;
// client/src/services/API.js

import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASEURL });

// Intercept every request to include token (if exists)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
