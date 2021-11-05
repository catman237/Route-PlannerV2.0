import Leg from "./Leg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const LegContainer = ({
  legs,
  status,
  setResponse,
  setWayPoints,
  waypoints,
  setWaypointCount
}) => {
  return (
    <div className="legContainter">
      {status === "OK" ? (
        legs.map((leg) => (
          <Leg
            leg={leg}
            setResponse={setResponse}
            setWayPoints={setWayPoints}
            waypoints={waypoints}
            setWaypointCount={setWaypointCount}
            legs={legs}
          />
        ))
      ) : (
        <Card>
          <CardContent>
            <Typography
              style={{ textAlign: "center" }}
              fontWeight="bold"
              fontSize="1rem"
            >
              No Route
            </Typography>

            <Typography color="text.secondary" style={{ textAlign: "center" }}>
              Hit clear button and try again
            </Typography>
            <div style={{ textAlign: "center" }}>
              <SentimentDissatisfiedIcon></SentimentDissatisfiedIcon>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LegContainer;
