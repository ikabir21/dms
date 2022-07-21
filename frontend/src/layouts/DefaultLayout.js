import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Sidebar, Header } from "../components";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Header open={open} toggleDrawer={() => setOpen(!open)} />
      <Box
        sx={{
          width: "100%",
          height: `calc(100vh - 64px)`,
          marginTop: "64px",
          display: "flex"
        }}>
        <Sidebar open={open} setOpen={setOpen} />
        <Box sx={{ flexGrow: 1, p: 0 }}>
          {/* <Home /> */}
          {/* <Footer /> */}
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default DefaultLayout;
