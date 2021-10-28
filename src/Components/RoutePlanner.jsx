import { useState } from "react";
import { DirectionsService, useJsApiLoader } from "@react-google-maps/api";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

const RoutePlanner = () => {
  const [origin, setOrigin] = useState("");
  const [currentDestination, setCurrentDestination] = useState("");
  const [waypoints, setWayPoints] = useState([]);
  const [directionsInfo, setDirectionsInfo] = useState();
  const [directionServiceOptions, setDirectionServiceOptions] = useState();

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "",
  });

  const addDestination = (dest) => {
    waypoints.push({ location: dest });
    setWayPoints(waypoints);
  };

  //   console.log("origin", origin);
  //   console.log("currentDestination", currentDestination);
  console.log("waypoints", waypoints);
  console.log("origin", origin)

  return (
    <div className="RoutePlannerContainer">
      <Input
        placeholder="Origin"
        onChange={(e) => setOrigin(e.target.value)}
        value={origin}
      />
      <Input
        placeholder="Destination"
        onChange={(e) => setCurrentDestination(e.target.value)}
        value={currentDestination}
      />
      <Button
        onClick={() => {
          addDestination(currentDestination);
          setCurrentDestination("");
        }}
      >
        Add Destination
      </Button>
      <Button
        onClick={() => {
          const directionsInfo = {
            origin,
            destination: origin,
            travelMode: "DRIVING",
            waypoints,
            optimizeWaypoints: true,
            provideRouteAlternatives: false,
            avoidFerries: true,
            avoidHighways: false,
            avoidTolls: false,
          };
          setDirectionServiceOptions(directionsInfo)
        }}
      >
        Plan Route
      </Button>
      {isLoaded && !!directionServiceOptions && (
        <DirectionsService
          options={directionServiceOptions}
          callback={(res) => {
            console.log(res);
          }}
        />
      )}
    </div>
  );
};

export default RoutePlanner;

// import React from 'react'

// const RoutePlanner = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default RoutePlanner
