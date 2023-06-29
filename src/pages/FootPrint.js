import { Stack } from "@mui/material";
import { CarbonResult } from "../components/CarbonResult";
import { CarbonForm } from "../components/CarbonForm";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";

export const FootPrint = () => {
  const [carbonOutput, setCarbonOutput] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        const { data } = await axios.get(url, {
          headers: {
            "X-RapidAPI-Key":
              "f949d10bd8mshf91fea6233b3069p123fb3jsn202554e50322",
            "X-RapidAPI-Host": "carbonfootprint1.p.rapidapi.com",
          },
        });

        setCarbonOutput(data.carbonEquivalent);
      };
      fetchData();
    }
  }, [url]);

  const handleSubmit = (fuelType, distance) => {
    setUrl(
      `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=${distance}&vehicle=${fuelType}`
    );
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6}>
        <CarbonForm handleSubmit={handleSubmit} />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <CarbonResult carbonOutput={carbonOutput} />
      </Grid>
    </Grid>
  );
};
