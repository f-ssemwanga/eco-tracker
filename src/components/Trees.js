import React from "react";
import { Paper, Typography } from "@mui/material";

const TREES_CO2_ABSORPTION_PER_YEAR_KG = 22;

const Trees = ({ co2eResult }) => {
  const numberOfTreesToOffset = co2eResult / TREES_CO2_ABSORPTION_PER_YEAR_KG;

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
      <Typography variant="body1">
        To offset this carbon footprint, approximately{" "}
        {numberOfTreesToOffset.toFixed(2)} trees would need to be planted.
      </Typography>
    </Paper>
  );
};

export default Trees;
