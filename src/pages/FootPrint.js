import React, { useState } from "react";
import { Grid } from "@mui/material";
import CarbonForm from "../components/CarbonForm";
import CarbonResult from "../components/CarbonResult";

const Footprint = () => {
  const [carbonData, setCarbonData] = useState(null);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <CarbonForm setCarbonData={setCarbonData} />
      </Grid>
      {carbonData && (
        <Grid item xs={12} sm={6}>
          <CarbonResult carbonFootprint={carbonData?.carbonFootprint} />
        </Grid>
      )}
    </Grid>
  );
};

export default Footprint;
