import React from "react";
import { DirectionsService, useJsApiLoader } from "@react-google-maps/api";
import LegContainer from "./LegContainer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CancelIcon from "@mui/icons-material/Cancel";
import Typography from "@mui/material/Typography";
import ExploreIcon from "@mui/icons-material/Explore";
import EditLocationIcon from "@mui/icons-material/EditLocation";

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
  setOrigin,
  originToggle,
  setOriginToggle,
  setWaypointCount,
}) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const deletePoint = (currentPoint) => {
    const updatedWaypoints = waypoints.filter(
      (point) => point.location !== currentPoint.location
    );
    setWayPoints(updatedWaypoints);
    setWaypointCount(updatedWaypoints.length);
  };

  return (
    <div className="legWrapperContainer">
      {originToggle && (
        <Card className="card">
          <CardContent>
            <Typography
              style={{ textAlign: "center" }}
              fontWeight="bold"
              fontSize="1rem"
            >
              Origin
            </Typography>
            <Typography style={{ display: "flex" }} paddingLeft={1}>
              <ExploreIcon />{origin}
            </Typography>

            <div style={{ textAlign: "center" }}>
              <CancelIcon
                onClick={() => {
                  setOrigin("");
                  setOriginToggle(false);
                }}
                padding={5}
              ></CancelIcon>
            </div>
          </CardContent>
        </Card>
      )}
      {waypoints.length < 1 && (
        <div className="destinationHeader">
          <div className="iconWrapper">
            <ExploreIcon />
          </div>
          <Typography fontWeight="bold" fontSize="1.5rem">
            Destinations
          </Typography>
        </div>
      )}
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
      {response && (
        <LegContainer
          legs={response}
          status={status}
          setResponse={setResponse}
          setWayPoints={setWayPoints}
          waypoints={waypoints}
          setWaypointCount={setWaypointCount}
          response={response}
        />
      )}

      {!response &&
        waypoints.map((point) => {
          return (
            <Card className="card">
              <CardContent>
                <Typography
                  style={{ textAlign: "center" }}
                  fontWeight="bold"
                  fontSize="1rem"
                >
                  Destination
                </Typography>
                <Typography style={{ textAlign: "left" }} paddingTop={1}>
                  <EditLocationIcon /> {point.location}
                </Typography>
                <div style={{ textAlign: "center" }}>
                  <CancelIcon onClick={() => deletePoint(point)}></CancelIcon>
                </div>
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
};

export default LegWrapper;
