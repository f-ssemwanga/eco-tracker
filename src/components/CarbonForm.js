import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export const CarbonForm = ({ handleSubmit }) => {
  // step 1  - define initial state values
  const initialValues = {
    fuelType: "",
    distance: "",
  };
  // 2. Define validation schema for state values
  const validationSchema = Yup.object({
    fuelType: Yup.string().required("Please select a fuel type"),
    distance: Yup.number()
      .required("Please enter a distance in KM")
      .min(1, "Please enter a minimum distance of 1"),
  });
  // 3. Define on submit handler function - depends on the app requirements
  const onSubmit = ({ fuelType, distance }) => {
    handleSubmit(fuelType, distance);
  };

  // 4. Use the formik hook
  // 5. Map formik to the form components  using name property - it is dependent on app requirements
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Stack component="form" onSubmit={formik.handleSubmit} spacing={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Fuel</InputLabel>
          <Select
            className="mb-3"
            name="fuelType"
            label="Fuel"
            onChange={formik.handleChange}
            value={formik.values.fuelType}
          >
            <MenuItem value="smallDieselCar">Small Diesel Car</MenuItem>
            <MenuItem value="mediumDieselCar">Medium Diesel Car</MenuItem>
            <MenuItem value="largeDieselCar">Large Diesel Car</MenuItem>
            <MenuItem value="MediumHybridCar">Medium HybridCar </MenuItem>
            
          </Select>
        </FormControl>
        <TextField
          label="Distance"
          type="number"
          name="distance"
          onChange={formik.handleChange}
          value={formik.values.distance}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" type="submit">
          Contained
        </Button>
      </Stack>
    </Box>
  );
};
