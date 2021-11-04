import React from "react";
import { DirectionsService, useJsApiLoader } from "@react-google-maps/api";
import LegContainer from "./LegContainer";
import Leg from "./Leg";
import { filter } from "dom-helpers";

const LegWrapper = ({
  directionServiceOptions,
  response,
  setWayPoints,
  waypoints,
  setResponse,
  formatLeg,
  setStatus,
  status,
  origin,
  originToggle,
  setwaypointCount,

}) => {
  
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBEpcNArogFk09WnTqj5jLjqAC1b0kuWX0",
  });
  
  const deletePoint = (currentPoint) => {
    const updatedWaypoints = waypoints.filter(point => point.location !== currentPoint.location)
    setWayPoints(updatedWaypoints)
    setwaypointCount(updatedWaypoints.length)
    
  }

  return (
    <div className="legWrapperContainer">
      {originToggle && <h2>Origin: {origin}</h2>}
      {waypoints.length < 1 && <h2>Add destinantions here</h2>}
      {isLoaded && !!directionServiceOptions && !response && (
        <DirectionsService
          options={directionServiceOptions}
          callback={(res) => {
            if (res.status === "OK") {
              setStatus(res.status);
              setResponse(
                // accessing the needed data from the response
                // index is used to keep track of how many stops have been requested.
                res.routes[0].legs.map((leg, index) => formatLeg(leg, index))
              );
            } else {
              setStatus(res.status);
              setResponse([{ location: status }]);
            }
          }}
        />
      )}
      {response && <LegContainer legs={response} status={status} />}

      {!response &&
        waypoints.map((point) => {
          return (
            <div>
              <h3>{point.location}</h3>
              <button onClick={() => deletePoint(point)}>x</button>
            </div>
          );
        })}
    </div>
  );
};

export default LegWrapper;
