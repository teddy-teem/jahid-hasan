import React from 'react'
import { Box } from '@mui/material'
import CardForSkills from '../../../components/Elements/Cards/CardForSkills/CardForSkills'

export default function Skills() {
  return (
    <div className="profession">
      <Box
      sx={{
        margin: '10px',
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
      }}
    >
      <CardForSkills skillTitle={"Languages"} />
      <CardForSkills skillTitle={"Database"} />
      <CardForSkills skillTitle={"Lybrary / Framwork"} />
      <CardForSkills skillTitle={"Services"} />
      <CardForSkills skillTitle={"Interpersonal"} />
      <CardForSkills skillTitle={"Others"} />

    </Box>
    </div>
  )
}
