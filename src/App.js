import { Banner } from "./components/Banner";
import { NavigationBar } from "./components/NavigationBar";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoute";
import Container from "@mui/material/Container";

export const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Banner />
      <Container>
        <AppRoutes />
      </Container>
    </BrowserRouter>
  );
};
