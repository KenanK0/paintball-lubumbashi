import {
  AppBar,
  Box,
  Button,
  Slide,
  Toolbar,
  useScrollTrigger,
  // useScrollTrigger,/
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo_nobg.png";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
function Header({ props }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar
          sx={{
            height: isMobile ? "8vh" : "10vh",
            background: "#191970",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ height: isMobile ? 80 : 100 }}
            />
          </Box>

          <Button 
            variant="outlined" 
            color="inherit" 
            sx={{ margin: 1, fontSize: isMobile ? '0.8rem' : '1rem' }}
          >
            Home
          </Button>
          {/* <Button variant="outlined" color="inherit" sx={{ margin: 1 }}>
            Title 1
          </Button>
          <Button variant="outlined" color="inherit" sx={{ margin: 1 }}>
            Title 2
          </Button> */}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default Header;
