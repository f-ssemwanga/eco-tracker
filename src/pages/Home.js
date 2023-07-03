import { Features } from "../components/Features";
import { AboutUs } from "../components/AboutUs";
import { Banner } from "../components/Banner";


export const Home = () => {
  return (
    <div>
      <Banner 
      title="Welcome to Eco Footprint!"
      subTitle= "Saving our planet together"
      />
      <Features />
      <AboutUs />
    </div>
  );
};
