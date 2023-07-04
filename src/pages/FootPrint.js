import React, { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Banner } from "../components/Banner";
import Alert from "@mui/material/Alert";

import CarbonForm from "../components/CarbonForm";
import CarbonResult from "../components/CarbonResult";
import Trees from "../components/Trees";

const Footprint = () => {
  const [carbonData, setCarbonData] = useState(null);

  const handleFormSubmit = async (values) => {
    const commonHeaders = {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY,
      "X-RapidAPI-Host": "carbonfootprint1.p.rapidapi.com",
    };

    let options = {
      method: "GET",
      headers: commonHeaders,
    };

    if (values.mode === "car") {
      options.url =
        "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel";
      options.params = {
        distance: values.distance,
        vehicle: values.fuelType,
      };
    } else if (values.mode === "flight") {
      options.url =
        "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromFlight";
      options.params = {
        distance: values.distance,
        type: values.fuelType,
      };
    }

    try {
      const response = await axios.request(options);
      setCarbonData({
        carbonFootprint: response.data.carbonEquivalent,
        distance: values.distance,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Stack spacing={3}>
      <Banner title="Eco Calculator!" />
      <Alert severity="info">
        To use the calculator, select a mode (Car or Flight), enter the distance
        of your journey, and choose the fuel or flight type. The calculator will
        then show you the carbon footprint of your journey and how many trees
        would need to be planted to offset it.
      </Alert>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <CarbonForm onFormSubmit={handleFormSubmit} />
        </Grid>
        {carbonData && (
          <Grid item xs={12} sm={12} md={6}>
            <CarbonResult carbonFootprint={carbonData?.carbonFootprint} />
          </Grid>
        )}
      </Grid>
      {carbonData && <Trees co2eResult={carbonData?.carbonFootprint} />}
    </Stack>
  );
};

export default Footprint;
