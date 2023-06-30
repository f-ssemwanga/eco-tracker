import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

const CarbonResult = ({ carbonFootprint }) => {
  return (
    <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6">Carbon Footprint Results</Typography>
        <Typography variant="body1">
          Carbon Footprint: {carbonFootprint?.toFixed(2)} CO2e
        </Typography>
      </Stack>
    </Paper>
  );
};

export default CarbonResult;
