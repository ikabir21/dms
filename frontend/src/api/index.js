import axios from "axios";

const ENDPOINT = process.env.REACT_APP_ENDPOINT || "http://localhost:4000";

// const accessToken = localStorage.getItem("accessToken");
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmQ3ZWRmYzE3OTNmMzQ4YzdlMjBhOTQiLCJlbWFpbCI6ImljaGFudXU0QGdtYWlsLmNvbSIsImlhdCI6MTY1ODQxNjUzMiwiZXhwIjoxNjYxMDA4NTMyfQ.DDK-PjwQyxBqsTiOipFl_MDmfNJXodf70PIZtKxiKM0";

const Axios = axios.create({
  baseURL: ENDPOINT,
  // withCredentials: true,
  headers: {
    "Access-Controll-Allow-origin": "*",
    Authorization: `Bearer ${accessToken}`
  }
});

export default Axios;
