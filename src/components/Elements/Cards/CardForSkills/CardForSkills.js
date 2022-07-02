import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SkillBar from "./components/SkillBar";

export default function CardForSkills(props) {
  return (
    <Card
      sx={{
        minWidth: 270,
        minHeight: 300,
        height: "10px",
        width: "10%",
        mb: "50px",
        overflow: "hidden",
        overflowY: "scroll"
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {props.skillTitle}
        </Typography>
        <Typography sx={{ mb: 3.5 }} color="text.secondary">
          Abc, Bcd, Def Abc
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          Abc
          <SkillBar value={100} />
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          Bcd
          <SkillBar value={50} />
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          Bcd
          <SkillBar value={70} />
        </Typography>
      </CardContent>
    </Card>
  );
}
