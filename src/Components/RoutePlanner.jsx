import { useState } from "react";
import LegContainer from "./LegContainer";
import { DirectionsService, useJsApiLoader } from "@react-google-maps/api";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

const formatLeg = (leg, index) => {
  return {
    distance: leg.distance.text,
    time: leg.duration.text,
    address: leg.end_address,
    index,
  };
};

const RoutePlanner = () => {
  const [origin, setOrigin] = useState(
    "Golden 700 Golden Ridge Rd. Golden, CO 80401"
  );
  const [currentDestination, setCurrentDestination] = useState("");
  const [waypoints, setWayPoints] = useState([]);
  const [waypointCount, setwaypointCount] = useState(0);
  const [directionServiceOptions, setDirectionServiceOptions] = useState();
  const [response, setResponse] = useState([
    {
      distance: 57,
      time: "1 hr 20 mins",
      address: "100 El Camino Real Belmont, CA 94002",
    },
    {
      distance: 57,
      time: "1 hr 20 mins",
      address: "100 El Camino Real Belmont, CA 94002",
    },
  ]);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAnorp7rnQdhLsXfPbi1pHj3uJmtORrP1E",
  });

  const addDestination = (dest) => {
    dest.length > 1 && waypoints.push({ location: dest });
    setWayPoints(waypoints);
  };

  console.log(waypoints);

  return (
    <div className="RoutePlannerContainer">
      <div className="title">
        <h1>Number of Stops {waypointCount}</h1>
      </div>
      <Input
        placeholder="Origin"
        onChange={(e) => setOrigin(e.target.value)}
        value={origin}
      />
      <div className="destinationContainer">
        <Input
          placeholder="Destination"
          onChange={(e) => setCurrentDestination(e.target.value)}
          value={currentDestination}
        />
        
      </div>
      <Button
        onClick={() => {
          addDestination(currentDestination);
          setwaypointCount(waypoints.length);
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
          setDirectionServiceOptions(directionsInfo);
          setOrigin("");
        }}
      >
        Plan Route
      </Button>

      {isLoaded && !!directionServiceOptions && !response && (
        <DirectionsService
          options={directionServiceOptions}
          callback={(res) => {
            setResponse(
              res.routes[0].legs.map((leg, index) => formatLeg(leg, index))
            );
          }}
        />
      )}
      {response && <LegContainer legs={response} />}
    </div>
  );
};

export default RoutePlanner;
