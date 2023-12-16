import { Card, CardContent,useMediaQuery, useTheme } from "@mui/material";
import React from "react";

function Activities() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  const cards = [
    {
      title: "Title 1",
      description: "Description 1",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Title 2",
      description: "Description 2",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Title 3",
      description: "Description 3",
      image: "https://picsum.photos/200/300",
    },
  ];

  if(isSmallScreen){
    return<h1>
        Mobile version not ready,check on your laptop
    </h1>
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        background: "#E0FFFF",
      }}
    >
      {/* <h1>KK</h1> */}
      {cards.map((card) => (
        <Card
          sx={{
            // width: "30%",
            backgroundColor: "#191970",
            color: "white",
            margin: "10px",
            padding: "10px",
            ":hover": {
              transform: "scale(1.1)",
              transition: "all 0.5s ease",
            },
          }}
        >
          <CardContent>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <img src={card.image} alt="card" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Activities;
