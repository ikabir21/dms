import axios from "axios";

const ENDPOINT = process.env.REACT_APP_ENDPOINT || "http://localhost:4000";

// const accessToken = localStorage.getItem("accessToken");
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmQ2ZTI5ODc1NmQzNjY0N2JkM2QzMjUiLCJlbWFpbCI6ImljaGFua2FiaXJAZ21haWwuY29tIiwiaWF0IjoxNjU4Mzk5OTEyLCJleHAiOjE2NjA5OTE5MTJ9.e0d1vWfX32Uk5EwB4DEZKhLGVujIzbPOISsCgBUtVnk";

const Axios = axios.create({
  baseURL: ENDPOINT,
  // withCredentials: true,
  headers: {
    "Access-Controll-Allow-origin": "*",
    Authorization: `Bearer ${accessToken}`
  }
});

export default Axios;
