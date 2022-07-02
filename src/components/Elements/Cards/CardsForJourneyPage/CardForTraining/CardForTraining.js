import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import "./CardForTraining.css";

export default function CardForTraining(props) {
  const text = props.paragraph;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
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
          {props.organization}
        </Typography>
        <Typography variant="h5" component="div">
          {props.trainingTitle}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>{props.jobType}</Typography>
        <Typography variant="body2">
          {isReadMore ? text.slice(0, 150) : text}
          <span onClick={toggleReadMore} className="read-or-hide">
            {isReadMore ? "...read more" : " show less"}
          </span>
          <br />
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
