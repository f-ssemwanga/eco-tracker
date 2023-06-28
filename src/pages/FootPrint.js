import { Stack } from "@mui/material";
import { CarbonResult } from "../components/CarbonResult";
import { CarbonForm } from "../components/CarbonForm";
import { useEffect, useState } from "react"
import axios from "axios";

export const FootPrint = () => {
  const [ {fuelType, distance},setValues]=useState("{}")
 //console.log(distance)
 //console.log(fuelType) 

useEffect(() => {

}, [fuelType, distance])  


const fetchData = async () => {
    const {data} = await axios.get( 
      "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel",
    {
      params: {
      distance: `${distance}`,
      vehicle: `${fuelType}`
      } , 
      headers: {
      'X-RapidAPI-Key': 'e279ab2909msh66df9814db3584cp11be92jsneb2b0f95220c',
      'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
     },
     }
   );
    }

 fetchData()

  return (
    <Stack>
      <CarbonForm setValues = {setValues} />
      <CarbonResult />
    </Stack>
  );
};
