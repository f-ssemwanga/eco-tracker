import React, { useState } from "react";
import { Grid } from "@mui/material";
import CarbonForm from "../components/CarbonForm";
import CarbonResult from "../components/CarbonResult";
import axios from "axios";

const Footprint = () => {
  const [carbonData, setCarbonData] = useState(null);

  const handleFormSubmit = async (values) => {
    const commonHeaders = {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "carbonfootprint1.p.rapidapi.com",
    };

    let options = {
      method: "GET",
      headers: commonHeaders,
    };

    if (values.mode === "car") {
      options.url = "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel";
      options.params = {
        distance: values.distance,
        vehicle: values.fuelType,
      };
    } else if (values.mode === "flight") {
      options.url = "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromFlight";
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
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <CarbonForm onFormSubmit={handleFormSubmit} />
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
