import React from "react";
import "../index.css"; // Import your CSS file

export const Features = () => {
  return (
    <div className="features-section">
      <h2>Features of Our Carbon Footprint Calculator</h2>
      <div className="features-container">
        <div className="feature">
          <h3>Vehicle Emissions</h3>
          <p>
            Calculate the carbon footprint of different types of vehicles, from
            cars to motorcycles.
          </p>
        </div>
        <div className="feature">
          <h3>Flight Emissions</h3>
          <p>
            Estimate the carbon emissions from your flights, whether they're
            domestic or international.
          </p>
        </div>
        <div className="feature">
          <h3>Distance-Based Calculation</h3>
          <p>
            Enter a distance to calculate the CO2e of your carbon footprint.
            Ideal for planning trips and journeys.
          </p>
        </div>
      </div>
    </div>
  );
};
