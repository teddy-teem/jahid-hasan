import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import "./CardForEducation.css";

export default function CardForEducation(props) {
  return (
    <Card
      sx={{
        minWidth: 175,
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        justifyItems: "center",
        background: "linear-gradient(to right, #82E0AA, #AED6F1);",
        transition: "all 1s",
      }}
      className="cardHover"
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {props.institutoin}
        </Typography>
        <Typography variant="h5" component="div">
          {props.certification}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>{props.discipline}</Typography>
        <Typography variant="body2">
          Result in CGPA <b>{props.result}</b>
        </Typography>
        <Typography variant="body2">
          <b>{props.time}</b>
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Button size="small">Visit Certificate</Button>
        <Button size="small">Visit Website</Button>
      </CardActions>
    </Card>
  );
}
