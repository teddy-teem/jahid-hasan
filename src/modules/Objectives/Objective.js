import { Grid, Typography } from "@mui/material";
import React from "react";
import "./Objective.css";
import myTheme from "../../theme.json"


export default function Objective() {
  return (
    <Grid container sx={{backgroundColor: myTheme.LightColors.PageBackground}} className="objective" id="objective">
      <Grid item className="objective  content-container">
        <Grid item className="objective motive-speech-box">
          <Typography sx={{backgroundColor: myTheme.LightColors.contentHolder}}  className="objective motive-speech-box motive-speech">
            I want to gather knowledge more & more from your experience, I want
            to reach to the success with all my efforts and knowledge. Want to
            step up on the top of goals.
          </Typography>
        </Grid>
        <Grid item  className="objective key-content">
          <Grid item sx={{backgroundColor: myTheme.LightColors.contentHolder}}  xs={12} lg={8} md={8} xl={8} className="objective key-content keys">
            <h3 className="title-text">Key Competencies are</h3>
            <Grid item  className="list">
              <ul>
                <li>Proficient in Algorithm, Data Structure and Mathematics.</li>
                <li>Proficient in Problem Solving.</li>
                <li>Hand’s on experience on Android Apps Development.</li>
                <li>Good Knowledge on Internet of Things.</li>
                <li>Solid understanding at C/C++, Java, Python, JavaScript, HTML, CSS etc.</li>
                <li>Practical experience on MySql and Firebase Database.</li>
                <li>Good understanding on AI, Machine Learning & Deep Learning.</li>
                <li>Strong decision-making abilities, the ability to work unsupervised and highly adaptable and Self motivation.</li>
                <li>Good understanding on Agile Model.</li>
                <li>Excellent professional communication skills.</li>
              </ul>

            </Grid>
          </Grid>
          <Grid item sx={{backgroundColor: myTheme.LightColors.contentHolder}}   xs={12} lg={4} md={4} xl={4}  className="objective key-content photo">
          <img src={require('../../static/images/showOff/ncpc2019.jpg').default} alt="Jahid" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
