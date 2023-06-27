import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export const CarbonForm = () => {
  const [fuelType, setFuelType] = useState("car");
  const handleChange = (currentTarget) => {
    setFuelType(currentTarget.value);
    console.log(fuelType);
  };

  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Stack>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Fuel</InputLabel>
          <Select
            className="mb-3"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="car">Car</MenuItem>
            <MenuItem value="flight">Flight</MenuItem>
          </Select>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained">Submit</Button>
        </FormControl>
      </Stack>
    </Box>
  );
};
