import { Grid, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./Extra.css";


export default function Extra() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container id="extra" className="extra">
      <Grid
        container
        direction={"column"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        className="content"
      >
        <Box sx={{ width: "75%", height: "100%", marginTop: "20px" }}>
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
                aria-label="lab API tabs example"
              >
                <Tab label="Activity" value="1" />
                <Tab label="Online Platform" value="2" />
                <Tab label="Communicating Languages" value="3" />
                <Tab label="Who Knows me?" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              Activity
            </TabPanel>
            <TabPanel value="2">
              Online Platform
            </TabPanel>
            <TabPanel value="3">
              Communicating Languages
            </TabPanel>
            <TabPanel value="4">
              Who Know's me ?
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  );
}
