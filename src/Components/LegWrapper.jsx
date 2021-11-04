import React from "react";
import { DirectionsService, useJsApiLoader } from "@react-google-maps/api";
import LegContainer from "./LegContainer";

const LegWrapper = ({
  directionServiceOptions,
  response,
  waypoints,
  setResponse,
  formatLeg,
  setStatus,
  status
}) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBEpcNArogFk09WnTqj5jLjqAC1b0kuWX0",
  });

  return (
    <div className="legWrapperContainer">
      {waypoints.length < 1 && <h2>Add destinantions here</h2>}
      {isLoaded && !!directionServiceOptions && !response && (
        <DirectionsService
          options={directionServiceOptions}
          callback={(res) => {
              console.log(res.status)
            if (res.status === "OK") {
                setStatus(res.status)
              setResponse(
                // accessing the needed data from the response
                // index is used to keep track of how many stops have been requested.
                res.routes[0].legs.map((leg, index) => formatLeg(leg, index))
              );
            } else {
                setStatus(res.status)
                setResponse([{location: "this"}])
            }
          }}
        />
      )}
      {response && <LegContainer legs={response} status={status}/> }
      {!response &&
        waypoints.map((point) => {
          return <h2>{point.location}</h2>;
        })}
    </div>
  );
};

export default LegWrapper;
