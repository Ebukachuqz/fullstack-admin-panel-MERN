import {
  ArrowDownwardOutlined,
  ArrowDropDownOutlined,
  DarkModeRounded,
  LightModeRounded,
  Menu as MenuIcon,
  Search,
  Settings,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import React from "react";
import { useDispatch } from "react-redux";
import { setMode } from "redux/globalSlice";
import profilePicture from "assets/images/profilePicture.jpg";

const Navbar = ({ setIsSidebarOpen, isSidebarOpen, user }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  // Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <FlexBetween>
            <Button onClick={handleClick} sx={{ textTransform: "none" }}>
              <FlexBetween>
                <Box
                  component="img"
                  src={profilePicture}
                  alt="Profile Pic"
                  width="40px"
                  height="40px"
                  borderRadius="50%"
                  sx={{ objectFit: "cover" }}
                />
                <Box textAlign={"center"} maxWidth="65%">
                  <Typography
                    fontWeight={"bold"}
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    {user.name}
                  </Typography>
                  <Typography sx={{ color: theme.palette.secondary[200] }}>
                    {user.occupation}
                  </Typography>
                </Box>
                <ArrowDropDownOutlined sx={{ fontSize: "25px" }} />
              </FlexBetween>
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
