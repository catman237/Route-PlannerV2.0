import { useState } from "react";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import ClearIcon from "@mui/icons-material/Clear";

const Leg = ({ leg }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="legCard">
      <div id="infoContainerFirst">
        <h1>Step {leg.index + 1}</h1>

        {toggle ? (
          <BeenhereIcon
            onClick={() => setToggle(!toggle)}
            color="action"
            className="checkButton"
          />
        ) : (
          <BeenhereIcon
            onClick={() => setToggle(!toggle)}
            color="success"
            className="checkButton"
            fontSize="large"
          />
        )}
      </div>
      <div className="infoContainer">
        <span className="label">Name: </span>
        <span>{leg.address}</span>
      </div>
      <div className="infoContainer">
        <span className="label">Distance: </span>
        <span>{leg.distance} miles</span>
      </div>
      <div className="infoContainer">
        <span className="label">Time: </span>
        <span>{leg.time}</span>
      </div>
    </div>
  );
};

export default Leg;
