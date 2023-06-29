import { Stack } from "@mui/material";
import { CarbonResult } from "../components/CarbonResult";
import { CarbonForm } from "../components/CarbonForm";
import { useEffect, useState } from "react";
import axios from "axios";

export const FootPrint = () => {
  const [fuelType, setFuelType] = useState();
  const [distance, setDistance] = useState();
  const [carbonOutput, setCarbonOutput] = useState();

  const options = {
    method: "GET",
    url: "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel",
    params: {
      distance: "",
      vehicle: "",
    },
    //keys to be hidden before submission.
    headers: {
      "X-RapidAPI-Key": "f949d10bd8mshf91fea6233b3069p123fb3jsn202554e50322",
      "X-RapidAPI-Host": "carbonfootprint1.p.rapidapi.com",
    },
  };

  useEffect(
    () => {
      const fetchData = async () => {
        const response = await fetch(
          `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=${distance}&vehicle=${fuelType}`,
          options
        );

        const data = await response.json();
        setCarbonOutput(data.carbonEquivalent);
      };
      fetchData();
    },
    [fuelType],
    [distance]
  );

  const handleSubmit = (fuelType, distance) => {
    setFuelType(fuelType);
    setDistance(distance);
  };
  console.log(carbonOutput);

  return (
    <Stack>
      <CarbonForm handleSubmit={handleSubmit} />
      <CarbonResult carbonOutput ={carbonOutput}/>
    </Stack>
  );
};
