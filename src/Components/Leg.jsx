const Leg = ({ leg }) => (
  <div className="legCard">
    <h1>Step: {leg.index + 1}</h1>
    <div>
      <span>Name: </span>
      {leg.address}
    </div>
    <div>
      <span>Distance:</span>
      {leg.distance}
    </div>
    <div>
      <span>Time: </span>
      {leg.time}
    </div>
  </div>
);

export default Leg;
