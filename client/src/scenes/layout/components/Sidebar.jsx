import { ChevronLeft } from "@mui/icons-material";
import {
  Box,
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
import { NavLink, useNavigate } from "react-router-dom";
import sidebarNavItems from "./sidebaritems";

const Sidebar = ({
  isMobile,
  isSidebarOpen,
  setIsSidebarOpen,
  drawerWidth,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("");

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
                    <Typography key={text} marginTop="20px">
                      {text}
                    </Typography>
                  );
                }
                return (
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => handleNavigation(text)}
                      sx={{
                        padding: "6px 2px",
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
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
