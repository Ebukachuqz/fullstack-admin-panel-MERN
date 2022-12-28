import { Box, Container, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useGetUserQuery } from "redux/api";
import { getUserId } from "redux/globalSlice";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector(getUserId);
  const { data } = useGetUserQuery(userId);
  console.log(data);
  return (
    <Box width="100%" height="100%" display={isMobile ? "block" : "flex"}>
      <Sidebar
        user={data || {}}
        isMobile={isMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        drawerWidth="250px"
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
        <Container sx={{ paddingBottom: "30px" }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
