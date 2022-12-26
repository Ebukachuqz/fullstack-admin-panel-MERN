import { Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <Box width="100%" height="100%" display={isMobile ? "block" : "flex"}>
      <Sidebar
        isMobile={isMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        drawerWidth="250px"
      />
      <Box>
        <Navbar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
