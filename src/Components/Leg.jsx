const Leg = ({leg}) => (
  <div className="legCard">
    <div>Name: {leg.address}</div>
    <div>Dist: {leg.distance}</div>
    <div>Time: {leg.time}</div>
  </div>
);

export default Leg;
