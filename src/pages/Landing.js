import React from "react";
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
import Header from "../components/Header";
import Hero from "../components/Hero";
import Activities from "../components/Activities";

function Landing() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  if(isMobile){
    return <h1>Mobile version not ready,check on your laptop</h1>
  }
  return (
    <div>
      <Header />
      <Hero />
      <Activities />
    </div>
  );
}

export default Landing;
