import axios from "axios";

const ENDPOINT = process.env.REACT_APP_ENDPOINT || "http://localhost:4000";

// const accessToken = localStorage.getItem("accessToken");
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmQ5Mzc3YTk1OTU3MGE5NDJiY2VjYWIiLCJlbWFpbCI6ImljaGFua2FiaXJAZ21haWwuY29tIiwiaWF0IjoxNjU4NDA0NjQwLCJleHAiOjE2NjA5OTY2NDB9.Or0iBm3zFOLpRHG2VLgDFb4mAS0csBUesVNcvBUBZo0";

const Axios = axios.create({
  baseURL: ENDPOINT,
  // withCredentials: true,
  headers: {
    "Access-Controll-Allow-origin": "*",
    Authorization: `Bearer ${accessToken}`
  }
});

export default Axios;
