import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export const JourneyCard = ({ journey, onDelete, count }) => {
  return (
    <Paper elevation={3}>
      <Card>
        <CardContent
          sx={{
            backgroundColor: "#f8f8f8",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              marginBottom: "1rem",
              paddingRight: "1em",
            }}
          >
            Journey{count}
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
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              color: "white",
              "&:hover": {
                backgroundColor: "darkred",
              },
            }}
            onClick={() => onDelete(journey.id)}
          >
            Delete
          </Button>
        </CardContent>
      </Card>
    </Paper>
  );
};
