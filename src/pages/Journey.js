import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import JourneyCard from "../components/JourneyCard";

export const Journey = () => {
  const [journeys, setJourneys] = useState([]);

  useEffect(() => {
    const savedJourneys = JSON.parse(localStorage.getItem("journeys")) || [];
    setJourneys(savedJourneys);
  }, []);

  const handleDelete = (id) => {
    const newJourneys = journeys.filter((journey) => journey.id !== id);
    setJourneys(newJourneys);
    localStorage.setItem("journeys", JSON.stringify(newJourneys));
  };

  return (
    <Stack spacing={3}>
      <Grid container spacing={3}>
        {journeys.map((journey) => (
          <Grid item xs={12} sm={6} md={4} key={journey.id}>
            <JourneyCard journey={journey} onDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
