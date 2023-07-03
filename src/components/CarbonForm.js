import React from "react";
import {
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";


const CarFormSchema = Yup.object({
  fuelType: Yup.string().required("Please select a fuel type"),
  distance: Yup.number()
    .required("Please enter a distance in KM")
    .min(1, "Please enter a minimum distance of 1"),
});

const FlightFormSchema = Yup.object({
  fuelType: Yup.string().required("Please select a flight type"),
  distance: Yup.number()
    .required("Please enter a distance in KM")
    .min(1, "Please enter a minimum distance of 1"),
});

const CarOptions = [
  { value: "SmallDieselCar", label: "Small Diesel Car" },
  { value: "MediumDieselCar", label: "Medium Diesel Car" },
  { value: "LargeDieselCar", label: "Large Diesel Car" },
  { value: "MediumHybridCar", label: "Medium Hybrid Car" },
  { value: "LargeHybridCar", label: "Large Hybrid Car" },
  { value: "MediumLPGCar", label: "Medium LPG Car" },
  { value: "LargeLPGCar", label: "Large LPG Car" },
  { value: "MediumCNGCar", label: "Medium CNG Car" },
  { value: "LargeCNGCar", label: "Large CNG Car" },
  { value: "SmallPetrolVan", label: "Small Petrol Van" },
  { value: "LargePetrolVan", label: "Large Petrol Van" },
  { value: "SmallDielselVan", label: "Small Diesel Van" },
  { value: "MediumDielselVan", label: "Medium Diesel Van" },
  { value: "LargeDielselVan", label: "Large Diesel Van" },
  { value: "LPGVan", label: "LPG Van" },
  { value: "CNGVan", label: "CNG Van" },
  { value: "SmallPetrolCar", label: "Small Petrol Car" },
  { value: "MediumPetrolCar", label: "Medium Petrol Car" },
  { value: "LargePetrolCar", label: "Large Petrol Car" },
  { value: "SmallMotorBike", label: "Small Motor Bike" },
  { value: "MediumMotorBike", label: "Medium Motor Bike" },
  { value: "LargeMotorBike", label: "Large Motor Bike" },
];

const FlightOptions = [
  { value: "DomesticFlight", label: "Domestic Flight" },
  { value: "ShortEconomyClassFlight", label: "Short Economy Class Flight" },
  { value: "ShortBusinessClassFlight", label: "Short Business Class Flight" },
  { value: "LongEconomyClassFlight", label: "Long Economy Class Flight" },
  { value: "LongPremiumClassFlight", label: "Long Premium Class Flight" },
  { value: "LongBusinessClassFlight", label: "Long Business Class Flight" },
  { value: "LongFirstClassFlight", label: "Long First Class Flight" },
];

const CarbonForm = ({ setCarbonData }) => {
  const initialValues = {
    mode: "",
    fuelType: "",
    distance: "",
  };

  const validationSchema = Yup.object().shape({
    mode: Yup.string().required("Please select a mode"),
    ...CarFormSchema.fields,
    ...FlightFormSchema.fields,
  });

  const onSubmit = async (values) => {
    let options;

    if (values.mode === "car") {
      options = {
        method: "GET",
        url: "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel",
        params: {
          distance: values.distance,
          vehicle: values.fuelType,
        },
        headers: {
          "X-RapidAPI-Key": "Your API KEY",
          "X-RapidAPI-Host": "carbonfootprint1.p.rapidapi.com",
        },
      };
    } else if (values.mode === "flight") {
      options = {
        method: "GET",
        url: "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromFlight",
        params: {
          distance: values.distance,
          type: values.fuelType,
        },
        headers: {
          "X-RapidAPI-Key": "Your API KEY",
          "X-RapidAPI-Host": "carbonfootprint1.p.rapidapi.com",
        },
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

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleModeChange = (event) => {
    const selectedMode = event.target.value;
    formik.resetForm();
    formik.setFieldValue("mode", selectedMode);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Stack component="form" onSubmit={formik.handleSubmit} spacing={3}>
        <FormControl fullWidth>
          <InputLabel id="mode-label">Mode</InputLabel>
          <Select
            helperText={formik.touched.mode && formik.errors.mode}
            error={formik.touched.mode && !!formik.errors.mode}
            labelId="mode-label"
            id="mode"
            name="mode"
            label="mode"
            value={formik.values.mode}
            onChange={handleModeChange}
            onBlur={formik.handleBlur}
          >
            <MenuItem value="">Select Mode</MenuItem>
            <MenuItem value="car">Car</MenuItem>
            <MenuItem value="flight">Flight</MenuItem>
          </Select>
        </FormControl>
        {formik.values.mode === "car" && (
          <FormControl fullWidth>
            <InputLabel id="fuel-type-label">Fuel Type</InputLabel>
            <Select
              helperText={formik.touched.fuelType && formik.errors.fuelType}
              error={formik.touched.fuelType && !!(formik.errors.fuelType)}
              labelId="fuel-type-label"
              id="fuelType"
              name="fuelType"
              label="fuelType"
              value={formik.values.fuelType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <MenuItem value="">Select Fuel Type</MenuItem>
              {CarOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {formik.values.mode === "flight" && (
          <FormControl fullWidth>
            <InputLabel id="flight-type-label">Flight Type</InputLabel>
            <Select
              labelId="flight-type-label"
              id="fuelType"
              name="fuelType"
              value={formik.values.fuelType}
              onChange={formik.handleChange}
              error={formik.touched.fuelType && Boolean(formik.errors.fuelType)}
              helperText={formik.touched.fuelType && formik.errors.fuelType}
            >
              <MenuItem value="">Select Flight Type</MenuItem>
              {FlightOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        <TextField
          error={formik.touched.distance && !!formik.errors.distance}
          helperText={formik.touched.distance && formik.errors.distance}
          label="Distance (KM)"
          type="number"
          id="distance"
          name="distance"
          value={formik.values.distance}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default CarbonForm;

