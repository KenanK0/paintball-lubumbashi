import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import HeroBackground from "../assets/hero.png";
import Shooting_no_color from "../assets/shooting_no_color.gif";
import Shooting_color from "../assets/shooting_color.gif";

function Hero() {
  const [isMouseOnButton, setIsMouseOnButton] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOnButton(true);
    console.log("enter");
  };

  const handleMouseLeave = () => {
    setIsMouseOnButton(false);

    console.log("leave");
  };
  return (
    <Box
   
      sx={{
        height: "97vh",
        // display: "flex",

        backgroundImage: `url(${HeroBackground})`,
      }}
    >
      <Box
        sx={{
          position: "fixed",
          bottom: "0",
          left: "0",
        }}
      >
        <img
          src={!isMouseOnButton ? Shooting_no_color : Shooting_color}
          style={{ height: "25vh" }}
          alt="shooting"
        />
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: "0",
          left: "0",
        }}
      >
        <Button
          size="large"
          variant="contained"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Reservez maintenant!
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;
