import { Stack } from "@mui/material";
import { CarbonResult } from "../components/CarbonResult";
import { CarbonForm } from "../components/CarbonForm";

export const FootPrint = () => {
  return (
    <Stack>
      <CarbonForm />
      <CarbonResult />
    </Stack>
  );
};
