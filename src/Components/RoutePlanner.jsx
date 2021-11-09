import { useState, useEffect } from "react";
import LegWrapper from "./LegWrapper";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

// formatLeg is a here to help parse through the repsonse we get back from DirectionServices Component
// If you need more data fill it out below and it will be taken from the repsonse
const formatLeg = (leg, index) => {
  return {
    distance: leg.distance.text,
    time: leg.duration.text,
    address: leg.end_address,
    index,
  };
};

// below is test data that can be placed into the response state to make sure things fit in that containter.
// using this will aviod unnecessary api call to.
const testData = [
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
  {
    distance: 57,
    time: "1 hr 20 mins",
    address: "100 El Camino Real Belmont, CA 94002",
  },
];

const RoutePlanner = () => {
  const [origin, setOrigin] = useState();
  const [originToggle, setOriginToggle] = useState(false);
  const [currentDestination, setCurrentDestination] = useState("");
  const [waypoints, setWayPoints] = useState([]);
  const [waypointCount, setWaypointCount] = useState(0);
  const [directionServiceOptions, setDirectionServiceOptions] = useState();
  const [response, setResponse] = useState();
  const [status, setStatus] = useState();
  const [name, setName] = useState()

  const helloFunction = () => {
    const userName = window.prompt('Please enter name')
    setName(userName)
  }

  useEffect(() => {
    helloFunction()
  },[])

  // useJsApiLoader is how the directionsService Component cn call to the @react-google-maps/api
  // you have to use it in this format. put some logic in to show that is loaded is true and it will run to give you a response

  //this function will update the wayPoints array
  //the wayPoints array is sent through to the api and it is what stops we have to take between out origin and destination
  const addDestination = (dest) => {
    dest.length > 1 && waypoints.push({ location: dest });
    setWayPoints(waypoints);
  };

  // creating a date and formatting it to month / day / year
  // slicing the day of week off of the response if you want the day start at index 0
  const date = Date().toString().slice(3, 15);

  return (
    <div className="routePlannerContainer">
      <div className="formContainer">
        <div className="todayStopContainer">
          <span className="todayStopTitle">{name} you have stops today: {date}</span>
          <span className="todayStopTitle">{waypointCount}</span>
        </div>
        <Input
          placeholder="Origin"
          onChange={(e) => setOrigin(e.target.value)}
          value={origin}
          className="inputContainer"
          required
        />
        <div className="destinationContainer">
          <Input
            placeholder="Destination"
            onChange={(e) => setCurrentDestination(e.target.value)}
            value={currentDestination}
            className="inputContainer"
          />
        </div>
        <Button
          disabled={!currentDestination}
          onClick={() => {
            addDestination(currentDestination.trim());
            setWaypointCount(waypoints.length);
            setCurrentDestination("");
            setOriginToggle(true);
          }}
        >
          Add Destination
        </Button>
        <Button
          disabled={!origin || !waypoints.length}
          onClick={() => {
            const directionsInfo = {
              origin: origin.trim(),
              destination: origin.trim(),
              travelMode: "DRIVING",
              // way points takes an array of objects they object must have the key of location
              waypoints,
              // optimizeWayPoints will give you the most efficient route through the way points if it is set to true
              optimizeWaypoints: true,
              provideRouteAlternatives: false,
              avoidFerries: true,
              avoidHighways: false,
              avoidTolls: false,
            };
            setResponse();
            setDirectionServiceOptions(directionsInfo);
          }}
        >
          Plan Route
        </Button>
        <Button
          onClick={() => {
            setResponse();
            setWayPoints([]);
            setCurrentDestination("");
            setWaypointCount(0);
            setDirectionServiceOptions();
            setOriginToggle(false);
            setOrigin("");
          }}
        >
          Clear
        </Button>
      </div>

      <LegWrapper
        directionServiceOptions={directionServiceOptions}
        response={response}
        setWayPoints={setWayPoints}
        waypoints={waypoints}
        setResponse={setResponse}
        formatLeg={formatLeg}
        status={status}
        setStatus={setStatus}
        origin={origin}
        setOrigin={setOrigin}
        originToggle={originToggle}
        setOriginToggle={setOriginToggle}
        setWaypointCount={setWaypointCount}
      />
    </div>
  );
};

export default RoutePlanner;
