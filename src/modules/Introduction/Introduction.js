import React, {useState} from 'react'
import {Grid, Typography} from "@mui/material";
import "./Introduction.css"
import myTheme from "../../theme.json"

export default function Introduction() {
    const [iam , setIam] = useState("Fullstack Web Developer")
  return (
    <Grid container sx={{backgroundColor: myTheme.LightColors.PageBackground}} className={"introduction"} id="introduction">
        <Grid item className='introduction content'>
            <Grid item sx={{backgroundColor: myTheme.LightColors.contentHolder}}  className={"introduction content details"}>
                <Typography variant="h1" component="h2" className=' name'>Jahid Hasan</Typography>
                <Grid container spacing={2} className="iam-cotnainer">
                    <Typography variant="h1" component="h2" className=' iam'> &nbsp; &nbsp;Node JS</Typography>
                    <Typography variant="h1" component="h2" className=' iam'>|</Typography>
                    <Typography variant="h1" component="h2" className=' iam'>React Js</Typography>
                    <Typography variant="h1" component="h2" className=' iam'>|</Typography>
                    <Typography variant="h1" component="h2" className=' iam'>Fullstack</Typography>
                    <Typography variant="h1" component="h2" className=' iam'>|</Typography>
                    <Typography variant="h1" component="h2" className=' iam'>IOT</Typography>
                    <Typography variant="h1" component="h2" className=' iam'>|</Typography>
                    <Typography variant="h1" component="h2" className=' iam'>R&D Enthuestic</Typography>
                </Grid>

            </Grid>
            <Grid item sx={{backgroundColor: myTheme.LightColors.contentHolder}}  className={"introduction content photo"}>
                <img src={require('./download.png').default} alt="Jahid" />
            </Grid>
        </Grid>
    </Grid>
  )
}
