import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ParkIcon from "@mui/icons-material/Park";

export const JourneyCard = ({ journey, onDelete, count }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
    setTimeout(() => onDelete(journey.id), 300);
  };

  return (
    <Paper
      elevation={3}
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 300ms" }}
    >
      <Card>
        <CardContent
          sx={{
            backgroundColor: "#f8f8f8",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            padding: "2em",
            margin: "1em",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              marginBottom: "1.5rem",
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
          <Box display="flex" alignItems="center">
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginRight: "0.5em" }}
            >
              Trees Needed for Offset: {journey.trees.toFixed(2)}
            </Typography>
            <ParkIcon />
          </Box>
          <Box display="flex" justifyContent="center" marginTop="2em">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                color: "white",
                "&:hover": {
                  backgroundColor: "darkred",
                },
              }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
};
