import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";


const Leg = ({
  leg,
  legs,
  setResponse,
  setWaypointCount,
  setWayPoints
}) => {
  const [toggle, setToggle] = useState(true);

  const deleteDest = (currentDest) => {
    const updatedDests = legs.filter((leg) => leg.index !== currentDest.index);
    setResponse(updatedDests);
    if (updatedDests.length >= 1) {
      setWaypointCount(updatedDests.length - 1);
      const newWayPoints = updatedDests.map((dest) => {
        return { location: dest.address };
      });
      newWayPoints.splice(-1);
      setWayPoints(newWayPoints);
    } else {
      setWaypointCount(0);
    }
  };

  return leg.status === "OK" ? (
    <Card sx={{bgcolor: 'red'}}>
      <CardContent>
        <Typography
          style={{ textAlign: "center" }}
          fontWeight="bold"
          fontSize="1rem"
        >
          No Route
        </Typography>
        <Typography style={{ textAlign: "center" }}>
          Please hit clear button and try again
        </Typography>
        <div style={{ textAlign: "center" }}>
          <SentimentDissatisfiedIcon></SentimentDissatisfiedIcon>
        </div>
      </CardContent>
    </Card>
  ) : (
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
          <EditLocationIcon fontSize="small" /> {leg.address}
        </Typography>
        <Typography
          style={{ textAlign: "left" }}
          paddingBottom={1}
          paddingTop={1}
        >
          <DirectionsCarFilledIcon fontSize="small" />
          {leg.distance}
        </Typography>
        <Typography style={{ textAlign: "left" }} paddingBottom={1}>
          <AccessAlarmsIcon fontSize="small" /> {leg.time}
        </Typography>
        <div style={{ textAlign: "center" }}>
          <CancelIcon
            onClick={() => deleteDest(leg)}
            fontSize="medium"
          ></CancelIcon>
        </div>
      </CardContent>
    </Card>
  );
};

export default Leg;
