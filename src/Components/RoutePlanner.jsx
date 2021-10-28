import { useState } from "react";
import LegContainer from "./LegContainer";
import { DirectionsService, useJsApiLoader } from "@react-google-maps/api";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

const formatLeg = (leg) => {
    return {
        distance: leg.distance.text,
        time: leg.duration.text,
        address: leg.end_address
    }
}

const RoutePlanner = () => {
  const [origin, setOrigin] = useState("80 clear creek lane golden co 80403");
  const [currentDestination, setCurrentDestination] = useState("");
  const [waypoints, setWayPoints] = useState([]);
  const [directionServiceOptions, setDirectionServiceOptions] = useState();
  const [response, setResponse] = useState()

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "key",
  });


  const addDestination = (dest) => {
    waypoints.push({ location: dest });
    setWayPoints(waypoints);
  };

  //   console.log("origin", origin);
  //   console.log("currentDestination", currentDestination);
  console.log("waypoints", waypoints);
  console.log("origin", origin);

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
          setDirectionServiceOptions(directionsInfo);
          setOrigin('')
        }}
      >
        Plan Route
      </Button>

     

      {isLoaded && !!directionServiceOptions && !response &&(
        <DirectionsService
          options={directionServiceOptions}
          callback={(res) => {
            setResponse(res.routes[0].legs.map(leg => formatLeg(leg)))
          }}
        />
      )}
      {response && <LegContainer legs={response} />}
    </div>
  );
};

export default RoutePlanner;
