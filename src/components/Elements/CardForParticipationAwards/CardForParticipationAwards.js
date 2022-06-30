import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import "./CardForParticipationAwards.css";
import myTheme from "../../../theme.json"

export default function CardForParticipationAwards (props) {
  return (
    <Card
      sx={{
        minWidth: 175,
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        justifyItems: "center",
        background: `linear-gradient(to right, ${myTheme.LightColors.CardForJourney}, #AED6F1);`,
        transition: "all 1s",
      }}
      className=" Award cardHover"
    >
      <CardContent>
        <Typography sx={{color: myTheme.LightColors.CardText , fontSize: 14 }} gutterBottom>
          {props.time}
        </Typography>
        <Typography color= {myTheme.LightColors.CardText}  variant="h5" component="div">
          {props.participationTitle}
        </Typography>
        <Typography sx={{color: myTheme.LightColors.CardText , mb: 2.5 }}>
          Hosted by <b>{props.hostedBy}</b>
        </Typography>
        <Typography color= {myTheme.LightColors.CardText} variant="body2">
            =&gt; <b>{props.something}</b>
        </Typography>
        <Typography color= {myTheme.LightColors.CardText} variant="body2">
            =&gt; In <b>{props.hostedPlace}</b>
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Button  sx={{color: myTheme.LightColors.CardText, backgroundColor: myTheme.LightColors.contentHolder}}  size="small">Visit Certificate</Button>
      </CardActions>
    </Card>
  );
}
