import BeenhereIcon from '@mui/icons-material/Beenhere';

const Leg = ({ leg }) => (
  <div className="legCard">

    <div id="infoContainerFirst">
      <h1>Step {leg.index + 1}</h1>
      <BeenhereIcon />
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

export default Leg;
