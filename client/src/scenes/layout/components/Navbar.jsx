import {
  DarkModeRounded,
  LightModeRounded,
  Menu as MenuIcon,
  Search,
  Settings,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import React from "react";
import { useDispatch } from "react-redux";
import { setMode } from "redux/globalSlice";

const Navbar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar position="static" sx={{ background: "none", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              backgroundColor: `${theme.palette.background.alt}`,
              borderRadius: "9px",
              padding: "0.1rem 1.5rem",
              gap: "3rem",
            }}
          >
            <FlexBetween>
              <InputBase placeholder="Search..." />
              <IconButton>
                <Search />
              </IconButton>
            </FlexBetween>
          </Box>
        </FlexBetween>

        {/* Right */}
        <FlexBetween gap={"1.5rem"}>
          <IconButton
            sx={{ fontSize: "25px" }}
            onClick={() => dispatch(setMode())}
          >
            {theme.palette.mode === "dark" ? (
              <DarkModeRounded />
            ) : (
              <LightModeRounded />
            )}
          </IconButton>
          <IconButton>
            <Settings sx={{ fontSize: "24px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
