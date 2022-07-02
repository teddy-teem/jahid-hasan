import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import "./Card.css";

export default function CommonCard(props) {
  const text = props.paragraph ? props.paragraph : "";
  const [isReadMore, setIsReadMore] = useState(true);
  const [supHeader] = useState(
    props.supHeader ? props.supHeader : ""
  );
  const [header] = useState(props.header ? props.header : "");
  const [subHeader] = useState(
    props.subHeader ? props.subHeader : ""
  );
  const [extraSubHeader] = useState(
    props.extraSubHeader ? props.extraSubHeader : ""
  );
  const [result] = useState(props.result ? props.result : "");
  const [subParagraph] = useState(
    props.subParagraph ? props.subParagraph : ""
  );
  const [websiteLink] = useState(
    props.websiteLink ? props.websiteLink : ""
  );
  const [certificateLink] = useState(
    props.certificateLink ? props.certificateLink : ""
  );
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
        {supHeader.length > 0 && (
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {supHeader}
          </Typography>
        )}
        {header.length > 0 && (
          <Typography variant="h5" component="div">
            {header}
          </Typography>
        )}

        {subHeader.length > 0 && (
          <Typography sx={{ mb: extraSubHeader.length ? 0: 3.5 }}>{props.subHeader}</Typography>
        )}
        {extraSubHeader.length > 0 && (
          <Typography sx={{ mb: 3.5 }}>{props.extraSubHeader}</Typography>
        )}
        {result.length >0 && (
          <Typography variant="body2">
           <b> Result {props.result}</b>
          </Typography>
        )}
        {text.length > 0 && (
          <Typography variant="body2">
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "...read more" : " show less"}
            </span>
          </Typography>
        )}
        {subParagraph.length > 0 && (
          <Typography variant="body2">
           <b>{subParagraph}</b>
          </Typography>
        )}
      </CardContent>
      <CardActions
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        {websiteLink.length > 0 && <Button size="small">Visit Company</Button>}
        {certificateLink.length > 0 && (
          <Button size="small">Visit Cirtificate</Button>
        )}
      </CardActions>
    </Card>
  );
}
