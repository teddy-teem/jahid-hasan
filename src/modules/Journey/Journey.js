import { Grid } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Education from "./component/Education";
import "./Journey.css";
import Profession from "./component/Profession";
import Training from "./component/Training";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import ParticipationAwards from "./component/ParticipationAwards";
import myTheme from "../../theme.json";

export default function Journey() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid
      container
      sx={{ backgroundColor: myTheme.LightColors.PageBackground }}
      id="journey"
      className="journey"
    >
      <Grid
        container
        direction={"column"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        className="content"
      >
        <Box
          sx={{
            backgroundColor: myTheme.LightColors.contentHolder,
            borderRadius: "5px",
            width: "75%",
            height: "100%",
            marginTop: "20px",
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                direction: "row",
                justifyContent: "space-around",
              }}
            >
              <TabList
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="lab API tabs example"
              >
                <Tab label="Profesition" value="1" />
                <Tab label="Education" value="2" />
                <Tab label="Training" value="3" />
                <Tab label="Projects" value="4" />
                <Tab label="Skilld" value="5" />
                <Tab label="Participation/Awards" value="6" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Profession />
            </TabPanel>
            <TabPanel value="2">
              <Education />
            </TabPanel>
            <TabPanel value="3">
              <Training />
            </TabPanel>
            <TabPanel value="4">
              <Projects />
            </TabPanel>
            <TabPanel value="5">
              <Skills />
            </TabPanel>
            <TabPanel value="6">
              <ParticipationAwards />
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  );
}
