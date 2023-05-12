"use client";

import React, { useState } from "react";
import axios from "axios";

interface LocationData {
  principalSubdivision: string;
  locality: string;
  countryCode: string;
}

const Location: React.FC = () => {
  const [data, setData] = useState<LocationData | null>(null);

  const getLocation = () => {
    const success = (position: GeolocationPosition) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const geoApiUrl = `https://api-bdc.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=bdc_f4c139599bb84b34b14836651a55f1db`;

      axios.get(geoApiUrl).then((response) => {
        console.log(response.data);
        setData(response.data);
      });
    };

    const error = () => {
      console.log("Unable to retrieve your location");
    };

    navigator.geolocation.getCurrentPosition(success, error);
  };
  return (
    <div>
      <button className="location" onClick={getLocation}>
        Get Location
      </button>
      {data && (
        <ul>
          {" "}
          <li>
            Location: {data.locality}, {data.principalSubdivision},{" "}
            {data.countryCode}
          </li>{" "}
        </ul>
      )}
    </div>
  );
};

export default Location;
