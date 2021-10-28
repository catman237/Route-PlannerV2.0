const Leg = ({ leg }) => (
  <div className="legCard">
    <h1>Step: {leg.index + 1}</h1>
    <div>
      <span>Name: </span>
      {leg.address}
    </div>
    <div>Dist: {leg.distance}</div>
    <div>Time: {leg.time}</div>
  </div>
);

export default Leg;
