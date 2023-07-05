import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const JourneyCard = ({ journey, onDelete }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Journey
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mode: {journey.mode}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Distance: {journey.distance}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fuel Type: {journey.fuelType}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Carbon Footprint: {journey.carbonFootprint} CO2e
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Trees Needed for Offset: {journey.trees.toFixed(2)}
        </Typography>
        <Button color="secondary" onClick={() => onDelete(journey.id)}>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default JourneyCard;
