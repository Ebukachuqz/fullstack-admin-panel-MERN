import { ChevronLeft, SettingsOutlined } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sidebarNavItems from "./sidebaritems";
import profilePicture from "assets/images/profilePicture.jpg";

const Sidebar = ({
  isMobile,
  isSidebarOpen,
  setIsSidebarOpen,
  drawerWidth,
  user,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("dashboard");

  const handleNavigation = (text) => {
    const navText = text.toLowerCase();
    navigate(`/${navText}`);
    setActiveNav(navText);
  };
  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          sx={{
            width: drawerWidth,
            // flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              borderWidth: isMobile ? "2px" : 0,
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
            },
          }}
          variant="persistent"
          anchor="left"
          open={isSidebarOpen}
        >
          <Box width="100%" p="1.5rem 0rem 0rem 3rem">
            <Box>
              <FlexBetween color={theme.palette.secondary.main}>
                <Box>
                  <Typography fontWeight="bold" variant="h4">
                    ADMIN PANEL
                  </Typography>
                </Box>
                {isMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {sidebarNavItems.map((item) => {
                const { text, icon } = item;
                if (!icon) {
                  return (
                    <Typography key={text} marginTop="15px">
                      {text}
                    </Typography>
                  );
                }
                return (
                  <ListItem disablePadding key={text}>
                    <ListItemButton
                      onClick={() => handleNavigation(text)}
                      sx={{
                        padding: "5px 2px",
                        backgroundColor:
                          activeNav === text.toLowerCase()
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          activeNav === text.toLowerCase()
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[200],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color:
                            activeNav === text.toLowerCase()
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[300],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Divider />
          <FlexBetween p="15px 20px" gap="5px">
            <Box
              component="img"
              src={profilePicture}
              alt="Profile Pic"
              width="40px"
              height="40px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
            <Box textAlign={"left"}>
              <Typography
                fontWeight={"bold"}
                fontSize={"11px"}
                sx={{ color: theme.palette.secondary[100] }}
              >
                {user.name}
              </Typography>
              <Typography
                fontSize={"11px"}
                sx={{ color: theme.palette.secondary[200] }}
              >
                {user.occupation}
              </Typography>
            </Box>
            <IconButton>
              <SettingsOutlined sx={{ color: theme.palette.secondary[300] }} />
            </IconButton>
          </FlexBetween>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
